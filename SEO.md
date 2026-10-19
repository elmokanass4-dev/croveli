# SEO and mobile implementation

Latest local review: see [AUDIT.md](AUDIT.md) and [HOSTING.md](HOSTING.md). The October 19 polish is not deployed. Canonical origin/path and disabled monetization policy now live in `src/site-config.json`, with browser enhancements in `src/client.js`.

## Shipped

- 32 standalone HTML pages, including four supplied pattern pages and thirteen retired preview notices and three original beginner guides. Content and internal navigation are present without JavaScript.
- 14 indexable canonical URLs in `sitemap.xml`: home, four collections, four supplied patterns, About, learning hub, and three guides. Each page has its own title, description, canonical, Open Graph and social card metadata.
- Organization, WebSite, WebPage/CollectionPage/Article, and BreadcrumbList JSON-LD that describes visible content. No invented ratings, authors, publication dates, or tested-pattern claims.
- The four supplied patterns have normal indexing metadata and appear in the sitemap. Original designer credits are visible; no test status, rating, or HowTo schema is claimed. Retired preview URLs remain noindex. Saved projects and legal/contact pages, and the real GitHub Pages 404 response are also noindex.
- Real internal links replace hash navigation. Old shared hash links redirect in the browser to their corresponding pages.
- Four supplied project photographs and 32 source figures have optimized WebP variants with accurate intrinsic dimensions and source-set widths. The 800px variants total about 742 KB versus 2.79 MB of imported JPEGs; this is an asset comparison, not a field Core Web Vitals result.
- No external font request. Phone cards use one column, controls have larger touch areas, inputs use 16px text, tutorial navigation stays visible, and reduced-motion preferences are supported.

## Verification

Microsoft Edge via Playwright: home, collection, supplied tutorial, and guide tested at 320, 375, 390, 430, 768 and 1440 pixels. One H1 per page and no horizontal overflow. Passed mobile menu/category navigation, saved projects, search links, round persistence, safe comment rendering, jump links, and dialog dismissal. JavaScript-disabled content, sitemap uniqueness, canonical URLs and parseable JSON-LD checked. No browser JavaScript errors observed.

Run `node scripts/serve.cjs`, then `node scripts/verify.cjs`. Dependencies are Node.js, sharp, Playwright and installed Microsoft Edge. Set CROVELI_TEST_URL to the deployed URL for live checks.

## Owner follow-up

1. Add `https://elmokanass4-dev.github.io/croveli/` as a URL-prefix property in Google Search Console, complete ownership verification and submit `sitemap.xml`. Verification needs your account or Google's verification token; it has not been completed here. Inspect the home page and guide URLs after submission.
2. Review the supplied patterns and publication permissions before launch. The four current pages already have unique metadata, canonical URLs, and sitemap entries. Missing source information is not replaced with invented stitch counts, timings, or testing claims.
3. Connect an owner-controlled newsletter signup service. Contact already opens the owner-supplied email address; privacy and terms describe current site behavior.
4. Use Search Console queries and real-user performance data to choose future pattern topics. Focus on useful specific terms such as beginner amigurumi or the exact project, rather than repeating broad words such as yarn or loop throughout the site.

`/croveli/robots.txt` is included for reference, but a crawler's effective robots file must be at `https://elmokanass4-dev.github.io/robots.txt`. This project cannot control the origin-root file. The sitemap can be submitted directly in Search Console. No Search Console submission, Google indexing, ranking improvement, rich result eligibility, or field Core Web Vitals result is claimed.

## Sources

- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- [Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Craft Yarn Council standards](https://craftyarncouncil.com/standards/)

## Step 4 — page search focus

Pattern-specific titles, descriptions, headings, and introductions now distinguish long-eared bunny, calico cat, pumpkin cat for Halloween, and Luna the witch cat. The source data stores an editorial focus phrase and separate search description for each pattern. These phrases are content targets, not measured search-volume findings. Homepage and collection metadata live in src/search-pages.json; guide metadata lives with each guide. Home, browsing, and amigurumi copy have distinct purposes. Metadata is shared consistently with Open Graph, Twitter, and page schema. No keyword meta tag, rating claim, new indexed URL, or pattern-instruction changes were added.

Run node scripts/verify-search-focus.cjs for metadata agreement and canonical checks. All four pattern layouts pass the import regression at 320, 390, 768, and 1440 pixels. Search demand, live Google snippets, and ranking results remain unmeasured while changes are local. Google's guidance: https://developers.google.com/search/docs/fundamentals/seo-starter-guide and https://developers.google.com/search/docs/appearance/snippet.

## Step 5 — contextual internal links

Pattern materials link to the yarn guide; loop abbreviations and repeat notation link to the corresponding explanations. Three learning guides each include three relevant existing project recommendations with explicit reasons and component-level links. The pages remain static and crawlable without JavaScript. The sitemap remains at 12 canonical URLs; no additional patterns or collection pages were generated.

## Step 6 — useful collection pages

Added Cats and Halloween collection pages with distinct introductions, source-based comparisons, choosing advice, guide links, canonical URLs, and CollectionPage/breadcrumb metadata. The directory provides collection entry points; Amigurumi provides construction-oriented advice. Navigation and pattern theme links reach the real collection pages. Filter parameters remain canonicalized to their parent collection. There are 14 indexable canonical URLs and no additional patterns. Google reference: https://developers.google.com/search/docs/fundamentals/creating-helpful-content. No live search demand or ranking outcome is claimed.

## Step 7 — catalog growth controls

Published entries reuse the shared page, card, responsive-image, breadcrumb, canonical, social metadata, search, and sitemap pipeline. Optional custom SEO fields have factual name/introduction defaults. Draft entries are excluded from public pages and browser catalog data. New collection pages require explicit editorial configuration and a configurable minimum project count; tags alone create filters. Retired generated routes are kept as generic noindex notices. Related patterns use shared theme relevance and a maximum of three recommendations. See ADDING-PATTERNS.md. No extra pattern or collection content was generated for the real site.

## Step 8 — visitor-facing details

Updated About and factual privacy/terms content, including browser storage, private notes, email contact, newsletter availability, and GitHub Pages hosting. Contact uses elmokanass4@gmail.com via an explicit email-app link; no messages were sent during testing. The newsletter is honestly marked coming soon until a public hosted signup URL and service name are supplied. Legal/contact pages remain noindex. Saved projects explain browser-only storage and offer clear/undo without deleting reading progress. No jurisdiction or operator country was invented. Hosting reference: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection.
