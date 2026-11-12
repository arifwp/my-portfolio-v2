# Portfolio SEO, AEO, and performance verification

Validated on 12 November 2026 using the production build at `http://localhost:3112`.

## Changes

- Corrected the homepage hero location from Surakarta to Boyolali to match the About page and Person structured data.
- Made the stale-content check case-insensitive. The strengthened check reproduced the uppercase location defect before the copy fix, then passed afterward.
- Strengthened SEO checks to extract the initial HTML main content and exclude scripts. Project descriptions, summaries, and About-page facts must appear in page content, rather than only inside JSON-LD.
- Added checks for first-person project summaries and metadata, and visible location consistency with structured data.
- Preserved first-person project narrative and action-led experience highlights without “I”.

## Coverage and results

- `npm run lint`, `npm run build`, `npm run check:seo -- http://localhost:3112`, and `git diff --check` passed.
- All 8 HTML pages have unique metadata, canonical URLs, Open Graph and Twitter metadata, one H1, parseable structured data, consistent identity, and crawlable initial page content.
- All 8 pages were opened with JavaScript disabled. Each retained a visible H1 and substantive main content; each case study retained its first-person introduction.
- Playwright checked all 8 pages at 320, 390, 768, and 1440 pixels. All 32 viewport checks passed without horizontal overflow. No page errors or broken images among completed image loads were found. Lazy images outside the viewport were not all forced to load.
- Sitemap, robots, social preview images, unknown page/project 404 and noindex responses, resume PDF byte consistency and canonical header, legacy PDF redirect, and manifest icon responses passed.
- Lighthouse 13.6.0 ran once per page with its default mobile simulation, sequentially against the production build. Homepage baseline scores were also 100; this change corrects content and validation rather than claiming a speed improvement.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| / | 100 | 100 | 100 | 100 | 0.91 s | 0 | 5.0 ms |
| /about-me | 100 | 100 | 100 | 100 | 0.75 s | 0 | 8.5 ms |
| /project/etix | 100 | 100 | 100 | 100 | 0.76 s | 0 | 7.5 ms |
| /project/repo-alpha-red-group-portal | 100 | 100 | 100 | 100 | 0.75 s | 0 | 5.5 ms |
| /project/legal-plus | 100 | 100 | 100 | 100 | 0.76 s | 0 | 5.5 ms |
| /project/playfields | 100 | 100 | 100 | 100 | 0.76 s | 0 | 5.0 ms |
| /project/kubu-id | 100 | 100 | 100 | 100 | 0.76 s | 0 | 6.0 ms |
| /project/bisnislink | 100 | 100 | 100 | 100 | 0.75 s | 0 | 4.5 ms |

## React and loading review

- Reviewed cursor, smooth-scroll, project animation, and selected-work components. Cursor positions use MotionValues; the curved-loop animation writes through refs rather than setting React state on every animation frame.
- No React performance refactor was made. Local loading measurements did not justify speculative memoization or changes to interaction behavior.
- React DevTools Profiler was not recorded, so these results do not establish per-component render durations or interaction performance under all conditions.
- Homepage initial script URLs total approximately 279 KB when individually gzip-compressed for this measurement. The tested Next static scripts have immutable cache headers. This is an estimate of script asset size, not complete browser transfer accounting.
- Lighthouse still reports unused JavaScript and render-blocking CSS opportunities. Four case studies report approximately 5–8 KB of potential image savings with 0 ms estimated LCP savings. Category scores of 100 do not mean every diagnostic audit passed.

## AEO approach and limits

The implementation follows [Google Search Central guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features): crawlable text, internal links, useful content, and structured data matching page content. Google does not require special AI files or schema for AI Overviews or AI Mode.

Current [Core Web Vitals](https://web.dev/articles/vitals) are LCP, INP, and CLS. Lighthouse TBT is a lab loading metric, not a measurement of field INP.

This was a local technical audit. Changes were not deployed. Search Console indexing, rankings, AI-answer inclusion, CDN crawler policies, real-user Core Web Vitals, and manual visual/assistive-technology QA were not verified. No screenshots were captured.

Machine-readable results are in `lighthouse-summary.json` and `browser-check.json`; per-page Lighthouse JSON files retain the detailed diagnostics.
