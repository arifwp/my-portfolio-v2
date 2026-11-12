import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const origin = process.argv[2] || "http://localhost:3100";
const titles = new Set();
const descriptions = new Set();
const normalizeText = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]),
);
assert.equal(urls.length, 8, "Expected home, about, and six case studies");
assert.equal(new Set(urls.map((url) => url.href)).size, urls.length);
assert(
  !sitemap.includes("<lastmod>"),
  "Do not invent content modification dates",
);
const canonicalOrigin = urls[0].origin;
assert(!["localhost", "127.0.0.1", "[::1]"].includes(urls[0].hostname));

for (const url of urls) {
  assert.equal(url.origin, canonicalOrigin);
  const response = await fetch(new URL(url.pathname, origin));
  assert.equal(response.status, 200, url.pathname);
  const html = await response.text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main, `${url.pathname}: main content in initial HTML`);
  const mainText = normalizeText(
    main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " "),
  );
  assert.equal(
    new URL(html.match(/rel="canonical" href="([^"]+)"/)?.[1]).href,
    url.href,
    url.pathname,
  );
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(
    title && !titles.has(title),
    `Missing or duplicate title: ${url.pathname}`,
  );
  titles.add(title);
  assert.equal((title.match(/Arif Wahyu Prasetyo/g) || []).length, 1);
  assert(html.includes('name="description" content="'));
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert(
    description && !descriptions.has(description),
    `Missing or duplicate description: ${url.pathname}`,
  );
  descriptions.add(description);
  assert(
    !/undefined\/|Surakarta|14,000|50\+ users|zero downtime|without interrupting live ticket sales/i.test(
      html,
    ),
    url.pathname,
  );
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html), url.pathname);
  assert.equal(
    new URL(html.match(/property="og:url" content="([^"]+)"/)?.[1]).href,
    url.href,
  );
  assert(html.includes('name="twitter:card" content="summary_large_image"'));
  for (const property of [
    "og:title",
    "og:description",
    "og:image",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ]) {
    assert(
      new RegExp(`(?:property|name)="${property}" content="[^\"]+"`).test(html),
      `${url.pathname}: ${property}`,
    );
  }
  const previewUrl = new URL(
    html.match(/property="og:image" content="([^"]+)"/)?.[1],
  );
  const preview = await fetch(new URL(previewUrl.pathname, origin));
  assert.equal(preview.status, 200, `${url.pathname}: preview image`);
  assert(preview.headers.get("content-type")?.startsWith("image/"));
  if (url.pathname === "/project/etix") {
    assert.equal(previewUrl.pathname, "/assets/images/banner-etix-devices.webp");
  }
  assert(!html.includes('hreflang="id-ID"'));
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, url.pathname);
  const data = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].map((match) => JSON.parse(match[1]));
  const nodes = data.flatMap((item) => item["@graph"] || [item]);
  const person = nodes.find((node) => node["@type"] === "Person");
  assert.equal(person.jobTitle, "Software Engineer");
  assert.equal(person.address.addressLocality, "Boyolali");
  assert.equal(person.worksFor.name, "Alpha Red Solutions");
  assert(person.knowsAbout.includes("Go"));
  assert(person.knowsAbout.includes("Express.js"));
  assert.equal(person.alumniOf.name, "Amikom University Yogyakarta");
  if (url.pathname === "/" || url.pathname === "/about-me") {
    assert(
      mainText.toLowerCase().includes(person.address.addressLocality.toLowerCase()),
      `${url.pathname}: visible location matches structured data`,
    );
  }
  assert(nodes.some((node) => node["@id"] === `${canonicalOrigin}/#website`));
  const page = nodes.find((node) =>
    ["WebPage", "CollectionPage", "ProfilePage"].includes(node["@type"]),
  );
  assert.equal(page.url, url.href);
  assert.equal(page.inLanguage, "en");
  if (url.pathname.startsWith("/project/")) {
    const work = nodes.find((node) => node["@type"] === "CreativeWork");
    assert(
      work && mainText.includes(normalizeText(work.abstract)),
      `${url.pathname}: visible project description`,
    );
    assert(
      work.description && mainText.includes(normalizeText(work.description)),
      `${url.pathname}: visible project summary`,
    );
    assert.equal(work.author["@id"], person["@id"]);
    assert(work.description.startsWith("I worked as a "));
    assert(normalizeText(description).includes("Explore my work at "));
    assert(nodes.some((node) => node["@type"] === "BreadcrumbList"));
  }
  if (url.pathname === "/about-me") {
    for (const content of [
      "Professional Experience",
      "Skills &amp; Technologies",
      "System Design",
      "Education",
      "79",
      "30%",
      "15,000+",
      "GPA 3.78/4.00",
    ]) {
      assert(mainText.includes(normalizeText(content)), `About page missing ${content}`);
    }
  }
  for (const node of nodes) {
    assert(
      !node.datePublished,
      "A project employment period is not a publication date",
    );
    if (node.image)
      assert(URL.canParse(node.image), "Schema images must have absolute URLs");
  }
  console.log(
    `PASS ${url.pathname}: metadata, heading, identity, structured data`,
  );
}

const robots = await (await fetch(`${origin}/robots.txt`)).text();
assert(!robots.includes("Disallow: /_next/"));
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
const missing = await fetch(`${origin}/project/not-a-real-project`);
assert.equal(missing.status, 404);
assert((await missing.text()).includes('name="robots" content="noindex"'));
const missingPage = await fetch(`${origin}/not-a-real-page`);
assert.equal(missingPage.status, 404);
assert((await missingPage.text()).includes('name="robots" content="noindex"'));
const resume = await fetch(`${origin}/resume`);
assert.equal(resume.status, 200);
assert.equal(resume.headers.get("content-type"), "application/pdf");
assert.equal(
  resume.headers.get("link"),
  `<${canonicalOrigin}/resume>; rel="canonical"`,
);
const servedResume = Buffer.from(await resume.arrayBuffer());
const localResume = await readFile(
  new URL("../public/resume-arif-prasetyo.pdf", import.meta.url),
);
assert.equal(
  createHash("sha256").update(servedResume).digest("hex"),
  createHash("sha256").update(localResume).digest("hex"),
);
const oldResume = await fetch(`${origin}/resume-arif-prasetyo.pdf`, {
  redirect: "manual",
});
assert.equal(oldResume.status, 308);
assert.equal(
  new URL(oldResume.headers.get("location"), origin).pathname,
  "/resume",
);
const manifest = await (
  await fetch(`${origin}/assets/icons/site.webmanifest`)
).json();
for (const icon of manifest.icons) {
  assert.equal((await fetch(new URL(icon.src, origin))).status, 200, icon.src);
}
console.log(
  "PASS robots, sitemap, 404/noindex, resume PDF and canonical redirect, manifest icons",
);
