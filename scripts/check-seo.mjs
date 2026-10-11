import assert from "node:assert/strict";

const origin = process.argv[2] || "http://localhost:3100";
const titles = new Set();
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]));
assert.equal(urls.length, 8, "Expected home, about, and six case studies");
assert.equal(new Set(urls.map((url) => url.href)).size, urls.length);
assert(!sitemap.includes("<lastmod>"), "Do not invent content modification dates");
const canonicalOrigin = urls[0].origin;

for (const url of urls) {
  assert.equal(url.origin, canonicalOrigin);
  const response = await fetch(new URL(url.pathname, origin));
  assert.equal(response.status, 200, url.pathname);
  const html = await response.text();
  assert.equal(new URL(html.match(/rel="canonical" href="([^"]+)"/)?.[1]).href, url.href, url.pathname);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Missing or duplicate title: ${url.pathname}`);
  titles.add(title);
  assert.equal((title.match(/Arif Wahyu Prasetyo/g) || []).length, 1);
  assert(html.includes('name="description" content="'));
  assert(!/undefined\/|Full Stack (Engineer|Developer)|FULL STACK ENGINEER/.test(html));
  assert(!html.includes('hreflang="id-ID"'));
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, url.pathname);
  const data = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  const nodes = data.flatMap((item) => item["@graph"] || [item]);
  const person = nodes.find((node) => node["@type"] === "Person");
  assert.equal(person.jobTitle, "Software Engineer");
  assert.equal(person.address.addressLocality, "Surakarta");
  assert(nodes.some((node) => node["@id"] === `${canonicalOrigin}/#website`));
  const page = nodes.find((node) => ["WebPage", "CollectionPage", "ProfilePage"].includes(node["@type"]));
  assert.equal(page.url, url.href);
  assert.equal(page.inLanguage, "en");
  for (const node of nodes) {
    assert(!node.datePublished, "A project employment period is not a publication date");
    if (node.image) assert(URL.canParse(node.image), "Schema images must have absolute URLs");
  }
  console.log(`PASS ${url.pathname}: metadata, heading, identity, structured data`);
}

const robots = await (await fetch(`${origin}/robots.txt`)).text();
assert(!robots.includes("Disallow: /_next/"));
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
const missing = await fetch(`${origin}/project/not-a-real-project`);
assert.equal(missing.status, 404);
assert((await missing.text()).includes('name="robots" content="noindex"'));
const manifest = await (await fetch(`${origin}/assets/icons/site.webmanifest`)).json();
for (const icon of manifest.icons) {
  assert.equal((await fetch(new URL(icon.src, origin))).status, 200, icon.src);
}
console.log("PASS robots, sitemap, unknown-project 404/noindex, manifest icons");
