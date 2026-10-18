# SEO and mobile implementation

## Shipped

- 25 standalone HTML pages, including eight draft project previews and three original beginner guides. Content and internal navigation are present without JavaScript.
- 13 indexable canonical URLs in `sitemap.xml`: home, seven collections, About, learning hub, and three guides. Each page has its own title, description, canonical, Open Graph and social card metadata.
- Organization, WebSite, WebPage/CollectionPage/Article, and BreadcrumbList JSON-LD that describes visible content. No invented ratings, authors, publication dates, or tested-pattern claims.
- Eight draft pattern previews are `noindex,follow` until real, tested patterns replace them. Saved projects, demo legal/contact pages, and the real GitHub Pages 404 response are also noindex.
- Real internal links replace hash navigation. Old shared hash links redirect in the browser to their corresponding pages.
- Seven source images have 400/800/1200-pixel WebP variants, responsive source sets, image dimensions, lazy loading below the fold, and prioritized lead images. Combined 800px images are 626,392 bytes versus 19,418,383 original JPEG bytes, about 97% less. This is an asset-size comparison, not a measured Core Web Vitals score.
- No external font request. Phone cards use one column, controls have larger touch areas, inputs use 16px text, tutorial navigation stays visible, and reduced-motion preferences are supported.

## Verification

Microsoft Edge via Playwright: home, collection, draft tutorial, and guide tested at 320, 375, 390, 430, 768 and 1440 pixels. One H1 per page and no horizontal overflow. Passed mobile menu/category navigation, saved projects, search links, round persistence, safe comment rendering, jump links, and dialog dismissal. JavaScript-disabled content, sitemap uniqueness, canonical URLs and parseable JSON-LD checked. No browser JavaScript errors observed.

Run `node scripts/serve.cjs`, then `node scripts/verify.cjs`. Dependencies are Node.js, sharp, Playwright and installed Microsoft Edge. Set CROVELI_TEST_URL to the deployed URL for live checks.

## Owner follow-up

1. Add `https://elmokanass4-dev.github.io/croveli/` as a URL-prefix property in Google Search Console, complete ownership verification and submit `sitemap.xml`. Verification needs your account or Google's verification token; it has not been completed here. Inspect the home page and guide URLs after submission.
2. Replace every draft with an original, tested pattern and unique process photos, measurements, gauge, material amounts and finishing instructions. Then remove that page's noindex condition in `scripts/build.cjs` and include it in the sitemap. The current shared draft instructions must not be presented as a tested pattern.
3. Connect the newsletter/contact service and replace draft legal pages before collecting visitor data.
4. Use Search Console queries and real-user performance data to choose future pattern topics. Focus on useful specific terms such as beginner amigurumi or the exact project, rather than repeating broad words such as yarn or loop throughout the site.

`/croveli/robots.txt` is included for reference, but a crawler's effective robots file must be at `https://elmokanass4-dev.github.io/robots.txt`. This project cannot control the origin-root file. The sitemap can be submitted directly in Search Console. No Search Console submission, Google indexing, ranking improvement, rich result eligibility, or field Core Web Vitals result is claimed.

## Sources

- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- [Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Craft Yarn Council standards](https://craftyarncouncil.com/standards/)
