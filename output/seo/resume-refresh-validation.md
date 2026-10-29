# Portfolio content and SEO validation

Validated locally on 29 October 2026 against the production build at http://localhost:3100.

## Content sources and changes

- Primary career source is `/Users/arifwahyu/Documents/Arif_Wahyu_Prasetyo_Resume.pdf`, read in full and visually inspected. Its achievements remain user-provided claims.
- Updated all 6 project case studies, all 4 employment entries, 6 skill categories, profile text, location, and education. Retained existing project identities, links, and project-specific context where the resume only provides employer-level information.
- Removed earlier claims about zero downtime, 50+ portal users, reduced data-entry errors, and other metrics absent from the latest resume.
- Replaced `public/resume-arif-prasetyo.pdf` with the uploaded file without changing its bytes. `/resume` serves this PDF with a canonical Link header. The old direct PDF URL redirects permanently to `/resume`.
- Replaced the Etix screenshot using `/Users/arifwahyu/Desktop/Screenshot 2026-10-29 at 15.30.36.png`. The WebP is 74,204 bytes. Its new asset URL avoids the old image cache and is shared by the thumbnail, case study, and social metadata.

## SEO and answer extraction

- All 8 HTML pages have distinct titles and descriptions, canonical URLs, Open Graph and Twitter metadata, one H1, and parseable JSON-LD.
- Person data consistently uses Boyolali, Alpha Red Solutions, the current skills, and Amikom University Yogyakarta.
- Case studies share one factual summary between visible content and structured data. Their full descriptions also appear in CreativeWork abstracts.
- Skills, employment, education, project contributions, and technology names are present in the initial HTML. Critical content does not start hidden by entrance animations.
- Loopback environment URLs fall back to the production canonical domain.
- Sitemap, robots.txt, preview image responses, unknown-page and unknown-project 404/noindex, manifest icons, resume bytes, and the legacy PDF redirect passed `npm run check:seo`.
- Approach follows [Google Search Central guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features). No search ranking, indexing, or answer-engine inclusion has been measured.

## Validation

- `npm run lint` passed.
- `npm run build` passed, including TypeScript and static generation for every HTML page.
- `npm run check:seo` passed for all 8 HTML pages and the PDF route.
- Source whitespace checks passed with the unchanged PDF bytes excluded from text whitespace checks.
- Playwright checked all 8 pages at 320, 390, 768, and 1440 pixels. No horizontal overflow was found. At 390 pixels, no completed image requests had broken images.
- Visually inspected About at desktop and mobile sizes, the Etix mobile case study, and the desktop Etix project thumbnail. The supplied screenshot is visible.
- Lighthouse 13.6.0, local mobile simulation, returned 100 in performance, accessibility, best practices, and SEO on the homepage, About page, and Etix case study. These are single local lab runs. No production field metrics or React Profiler measurements were taken.
- Code review found no remaining actionable issue within the changed content, metadata, shared summary, asset references, or resume routing. No dependency changes or speculative memoization were introduced.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | 100 | 100 | 100 | 100 | 0.9 s | 0 | 10 ms |
| About | 100 | 100 | 100 | 100 | 0.8 s | 0 | 0 ms |
| Etix | 100 | 100 | 100 | 100 | 0.8 s | 0 | 0 ms |

## RYUX delivery gate

| Area | Result | Evidence |
| --- | --- | --- |
| PRODUCT | PASS | Strong source evidence from the complete uploaded resume and existing project content. |
| UX | PASS | Explicit skills, experience, education, and contribution headings. Related project links and the PDF route checked. |
| UI | PASS | Existing editorial portfolio design retained. More space for long skill names and 4 detailed employment entries. |
| DESIGN SYSTEM | PASS | Existing neutral palette, radii, typography utilities, Lucide icons, and components reused. No new hues, icon sets, generated marks, or gradients. |
| ACCESSIBILITY | PASS within tested scope | Semantic heading checks on all pages and Lighthouse accessibility 100 on the 3 representative pages. Full manual assistive-technology testing was outside this content update. |
| RESPONSIVE | PASS | All 8 pages checked for horizontal overflow at 320, 390, 768, and 1440 pixels, with visual inspection of representative mobile and desktop views. |
| EDGE CASES | PASS | View/state matrix below. |
| CODE QUALITY | PASS | Lint, TypeScript, production build, SEO regression suite, and diff review passed. |
| VISUAL QA | PASS within tested scope | Playwright renders at 390 and 1440 pixels inspected. Existing interactive motion was not changed or comprehensively re-audited. |
| ANTI-SLOP | PASS | Resume metrics retained accurately. Unsupported earlier claims removed. Existing brand system retained, with 0 new invented logos or assets. |
| FINAL | PASS within the scope above | Not tested with users. Not deployed. |

| View | State | Result |
| --- | --- | --- |
| Home, About, 6 case studies | Published content | HTTP 200, unique metadata, one H1, current identity, and valid JSON-LD passed. |
| Project page | Unknown slug | HTTP 404 and noindex passed. |
| General page | Unknown path | HTTP 404 and noindex passed. |
| Resume | Current PDF | HTTP 200, application/pdf, canonical header, exact byte match passed. |
| Legacy PDF URL | Direct request | HTTP 308 to /resume passed. |
| Etix preview | Replacement asset | HTTP 200 and updated asset URL verified in metadata and rendered card. |

Preview images are saved in `output/playwright/resume-refresh-*.png`. Lighthouse scores and metrics are saved in `output/seo/resume-refresh-lighthouse-summary.json`.
