# Step 9 — local launch review

Reviewed October 19, 2026. No commit, push, deployment, email, or subscription was performed.

## Verified

- Build: 32 generated HTML pages, including retirement notices and the custom 404; 14 indexable canonical URLs.
- Links: 1,028 local link/asset references pass the link checker. All generated documents have one H1, one description, and one canonical URL, with sitemap/indexing agreement.
- Layouts and flows: 320–1440px widths, phone/tablet/desktop layouts, a short landscape layout, keyboard navigation, search, filters, saved patterns, clear/undo, private notes, materials, reading progress, resume, text size, image viewing, and guide-to-pattern navigation.
- Content: all 317 instruction rows across 32 component sections remain present. All four current projects and tutorial image links load.
- Accessibility: axe-core 4.14 via Microsoft Edge reports no automated violations in 30 page/dialog checks at phone and desktop widths. Some photo/background contrast cases still require human judgement; this is not a complete accessibility certification.
- Images: AVIF is selected for primary photos where supported. WebP fallback decoding is verified, including an explicitly unsupported-AVIF test. Reference photos retain their existing WebP delivery.
- Growth: isolated fixture builds verify draft exclusion, metadata defaults, comparison growth, related patterns, input validation, and retirement of stale routes. No fixture is added to the working website.
- HTTP: correct document/image MIME types, an actual 404 response, and malformed-path handling are verified against the local server.

## Fixes made during this review

1. Darkened the desktop tutorial section numbers to meet the automated contrast check.
2. Added explicit roles to named collection/theme groups.
3. Added responsive lead-image preloads and smaller AVIF primary photos, with WebP fallbacks. Matched card delivery to prevent downloading the hero photo in two formats.
4. Corrected desktop card `sizes` hints so thumbnails do not request an article-sized image.
5. Added content-derived versions to generated JavaScript/CSS references, avoiding stale shared asset URLs after a new build.
6. Corrected preview-server image headers, added text compression, and prevented malformed URLs from crashing it. Preview responses use no-store so local edits remain visible.
7. Added a lockfile and repeatable launch/accessibility/HTTP/performance commands.

## Performance: local lab result, not live Core Web Vitals

Latest single-run profile: Edge, 390×844 viewport, DPR 2, 150ms simulated latency, 200,000 bytes/second download, 4× CPU slowdown, compressed local text responses.

| Page | Observed LCP | Observed CLS |
| --- | ---: | ---: |
| Homepage | 3.284s | 0 |
| Cat collection | 2.244s | 0 |
| Bunny pattern | 3.048s | 0 |

There were no failed requests in these samples. Timing varies with the test machine and is still worth checking on the deployed host, particularly the lead photographs. No Lighthouse score, field Core Web Vitals pass, real-user INP result, or ranking improvement is claimed. The interaction samples in the JSON report are not an INP assessment.

See `performance-qa-results.json`, `accessibility-qa-results.json`, `qa-results.json`, and `import-qa-results.json` for recorded checks. Google defines the metrics in its [Web Vitals documentation](https://web.dev/articles/vitals).

## Remaining checks and final-handoff reminders

- **Remind the owner to connect the newsletter signup service when the remaining steps are finished.** The website currently presents an honest coming-soon state; email contact uses the supplied address.
- Native iPhone/iPad Safari, physical-device gestures, and assistive-technology testing have not been performed. Responsive Edge checks are not a substitute for them.
- Email-app opening, delivery, and newsletter subscription were not exercised by sending messages or submitting real addresses.
- Live GitHub Pages validation, Search Console ownership, sitemap submission, indexing, and field performance remain for the publication/measurement steps.
- The origin-root `https://elmokanass4-dev.github.io/robots.txt` was rechecked read-only and returns 404. The project’s `/croveli/robots.txt` cannot control the origin root. A missing robots file does not impose crawl restrictions; page metadata and the sitemap remain configured. See [Google’s robots handling](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) and `HOSTING.md`.
- The experimental CSS `zoom` property was not used as evidence of native browser zoom support. Minimum-width reflow and short-landscape layouts were checked separately.

## Repeat the checks

Start the preview with `npm run dev`, then run:

```text
npm run check:launch
npm run check:performance
```

The launch runner assembles the checks used in this review. Performance is a separate single-run measurement rather than a fixed score gate. These commands build and test locally; they do not deploy.
