# Hosting and future integrations

## Current GitHub Pages path

Origin: `https://elmokanass4-dev.github.io`

Project path: `/croveli/`

These values live in `src/site-config.json`. The builder uses them for assets, navigation, canonicals, structured data, and the sitemap. Generated public content is static HTML and works without client JavaScript. Draft catalog entries are excluded from generated pages and the sitemap. Retired previously public routes use `noindex,follow`. Do not block these URLs in robots.txt: crawlers need to read the noindex metadata.

Google reads `https://elmokanass4-dev.github.io/robots.txt`, not `/croveli/robots.txt`. The origin-root URL returned HTTP 404 during the October 19, 2026 audit. This project-path repository cannot install an effective root robots file. Crawling is not blocked by that missing file. The generated project-path copy includes a comment explaining its scope and the absolute sitemap URL.

If the owner later controls the `elmokanass4-dev.github.io` root repository, merge the following with any rules for other projects there (do not replace unrelated rules):

```text
User-agent: *
Allow: /croveli/
Sitemap: https://elmokanass4-dev.github.io/croveli/sitemap.xml
```

Google Search Console should use the URL-prefix property `https://elmokanass4-dev.github.io/croveli/`. Verify ownership and submit the absolute sitemap URL there. Search Console ownership was verified on 19 October 2026 and the sitemap was submitted with owner approval. Its current fetch error and the accepted homepage indexing request are recorded in MEASUREMENT.md. A future custom domain requires updating the central origin/base path and rebuilding before deployment.

## Free patterns only

`src/site-config.json` explicitly disables shop, paid patterns, Etsy and PDF sales. There are no purchase controls or Product/Offer/rating schema. The build rejects commerce flags being turned on until a separate implementation is reviewed. The catalog contains four supplied patterns; no additional patterns have been generated.

## AdSense preparation — disabled

The central `advertising` config records the future provider, with `enabled: false`, no client ID, and no placements. The tutorial has a semantic `data-content-region="pattern-tutorial"` integration boundary. Nothing renders from this configuration: no ad script, ad request, unit, placeholder, or reserved empty space exists. The builder rejects enabling ads as a guard against accidental activation.

Before an actual ad integration: obtain the real publisher configuration and approval, finalize privacy/consent requirements for the actual audience, deliberately implement the loader and placements, add any required root `ads.txt` through the correct hosting origin, and measure layout/performance with real units. The current layout is not a claim of AdSense eligibility or approval.

## Local review only

Run `npm run build`, `npm run dev`, then visit `http://localhost:4174/croveli/`. Run `node scripts/check-links.cjs`, `npm test`, and `node scripts/verify-polish.cjs` for verification. No commit, push, GitHub Pages deployment, or Sites operation is required for local review. Pushing `main` would automatically deploy, so do not push without explicit publication authorization.

## Primary references

- [Google robots.txt guidance](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Layout-shift guidance](https://web.dev/articles/optimize-cls)

Latest pre-publication checks are recorded in LAUNCH-REVIEW.md. The origin-root robots 404 was rechecked read-only during Step 9. No publication was performed.

## AdSense connection — October 20, 2026

AdSense account ca-pub-2746976114421607 was created with owner approval. The static ownership meta tag is included in the shared HTML shell. Advertising remains disabled: no Google advertising script or ad unit has been added.

The separate elmokanass4-dev/elmokanass4-dev.github.io repository now supplies the origin homepage (redirecting to /croveli/), root robots.txt referencing the project sitemap, and root ads.txt for this publisher. This resolves the historical origin-root 404 described above. Site approval and payment-profile completion remain separate steps in AdSense.
