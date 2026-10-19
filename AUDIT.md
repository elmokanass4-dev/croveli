# Croveli local polish — October 19, 2026

## Initial audit: highest-impact findings

1. Pattern-card and tutorial action labels did not match the agreed free-pattern journey. Draft levels and time estimates looked too definitive. Related projects used the first three catalog entries rather than relevant categories.
2. Saved patterns had no H1 after JavaScript enhancement. Navigation lacked Escape handling and focus restoration; the search dialog had no accessible name. Browser search-input Escape behavior could leave it open. Materials were not saved, and blocked/malformed local storage could interrupt interactions.
3. Every public page was already static HTML, but breadcrumb schema skipped intermediate levels, category metadata needed clearer descriptions, and guides reused an unrelated project image in metadata. The project-path robots copy could not act as the origin robots file.
4. Browser JavaScript included unused article/about templates; image sizes assumed article-width images for cards. Search thumbnails downloaded larger images than needed.
5. There were no visible shop, price, Etsy, paid-pattern or PDF purchase controls. No ad integration existed; future configuration needed a safe, non-rendering boundary.

## Implemented locally

- Preserved the olive/cream palette, serif hierarchy, homepage hero, collection, brand section, learning cards, content boundaries, and wide tutorial/compact sidebar layout.
- Standardized “View free pattern” and “Jump to instructions.” Retained preview notices and explicitly labeled draft levels/estimates. No new patterns or credibility claims were added.
- Prioritized same-category related projects. Added project-specific alt text, accessible table headings, saved materials, readable completed steps and heading focus after jump links.
- Fixed static and enhanced saved-page headings and focus after removing a saved project. Added resilient storage access, safe comment-list parsing, reloadable difficulty filters, and event delegation for filtered cards.
- Added named search/results regions, live result announcements, Escape dismissal, focus return, Arrow Down disclosure navigation, menu close behavior, responsive state reset and dialog scroll locking. Controls retain visible keyboard focus.
- Moved browser behavior to `src/client.js`; templates remain build-only. Browser script decreased from 28,419 to 19,539 bytes (about 31%). Added 160px thumbnails and layout-specific responsive image sizes; existing WebP variants and image dimensions remain in place. Build image work is skipped when its source has not changed.
- Added deeper breadcrumbs, clearer page metadata, a real Croveli social-share image, and a single canonical hosting config. All eight draft pattern pages remain noindex and outside the sitemap; no Product, Offer, HowTo, rating or review schema was added.
- Added disabled commerce/AdSense config and a semantic tutorial integration boundary. No ad scripts, ad requests, fake units, placements or empty ad spaces render. See `HOSTING.md` for deliberate future activation requirements and the origin robots limitation.

## Verification

- Existing regression suite passed at 320, 375, 390, 430, 768 and 1440px: layout, navigation, search, saved projects, comments, round persistence, static content and canonical/schema checks.
- Additional polish suite passed at 320, 390, 656, 768, 1024 and 1440px: consistent homepage boundaries, desktop three-column collection, tutorial width/readability, keyboard skip link, menu disclosure and Escape, named search/focus restoration, combined filters and reload, relevant projects, saved/remove flow, material and round persistence, malformed data and blocked storage.
- Checked all 26 HTML files (25 pages plus 404), unique titles/descriptions, one H1, canonical path, full pattern breadcrumbs, no-JavaScript content and draft noindex. Checked 899 local links/assets with no missing targets. All homepage images were decoded for visual review.
- No JavaScript errors observed in the tested flows. Local, unthrottled Chromium layout-shift observations were 0 at all six polish widths. This is a lab observation, not a field Core Web Vitals or Lighthouse score.
- A final 320px visual review caught logo wrapping; a compact header variant fixes it while preserving 44px controls. Category breadcrumbs remain in normal document flow, search opening does not shift content boundaries, canonical-link sharing and print wiring/CSS passed targeted checks.
- `qa-results.json` contains machine-readable results. The test environment was headless Microsoft Edge on Windows, with responsive viewport emulation.

## Not tested / before launch

- Physical iOS/Safari and Android devices, assistive-technology sessions, real network conditions, field Core Web Vitals, Google rendering/indexing and Rich Results Test were not verified.
- Replace sample patterns with original tested instructions, dimensions, gauge, material amounts and suitable finished/process photographs before removing their noindex directives. Review the existing learning content editorially.
- Connect actual contact/newsletter services and finalize business/privacy/terms information before collecting data. Forms and comments remain clearly labeled browser-local demos.
- Verify the URL-prefix Search Console property and submit the sitemap using the owner’s account. The origin-root robots URL returned HTTP 404; a root-repository handoff is documented, not deployed.
- AdSense eligibility, consent, real units and any origin-root ads.txt must be addressed only during a later authorized integration. No approval or ad performance is claimed.

## Delivery state

All changes are local and uncommitted. Nothing was pushed, published or deployed. The existing GitHub Pages website is unchanged. Local review: `npm run dev`, then `http://localhost:4174/croveli/`.

## Supplied collection import

The eight demo projects have been replaced in the active collection by four supplied patterns. See [PATTERN-IMPORT.md](PATTERN-IMPORT.md) for source mapping, the as-supplied instruction policy, and current checks. Old preview URLs now display retirement notices; normal pattern indexing metadata and the sitemap cover the four current projects.

## Step 1 — mobile pattern reading

Added compact sticky reading controls to all four supplied pattern pages. Completed instruction rows drive an accessible progress indicator. Resume targets the next saved unchecked instruction and restores keyboard focus below the controls. Text sizes of 18, 20, and 22 pixels persist across patterns. Controls are progressively enhanced, hidden in print, and static on short landscape viewports. Progress remains usable for the current visit when storage is blocked. Verified at 320, 390, 768, and 1440 pixels with Microsoft Edge/Playwright; the broader six-width regression suite also passes. Native iOS Safari and physical mobile devices were not tested. No deployment performed.

## Step 2 — tutorial photographs

Added image links with a tap-to-enlarge cue, numbered section sequences, and clearer facial-detail captions. The progressively enhanced native dialog offers previous/next, zoom/fit, Escape dismissal, background scroll locking, and focus restoration. Original photographs and watermarks are retained. Viewer tested at 320, 390, 768, and 1440 pixels; all 32 image URLs load. Step 1 reading regression checks pass. Native iOS Safari remains untested; small source photographs retain their original resolution. Changes remain local.

## Step 3 — pattern discovery

Added explicit project theme tags to the four supplied patterns. Homepage and collection filters separate project type, theme, and supplied difficulty. Counts reflect the other selected filter; unavailable combinations are disabled. Clear filters restores keyboard focus. URL parameters preserve selections on reload, with recovery for empty or invalid combinations. Pattern-page theme links and search include the same tags. No new indexed collection pages were generated; existing canonical URLs remain in use. Verified at 320, 390, 768, and 1440 pixels, including the no-JavaScript catalog fallback. Changes remain local.

## Step 4 — search-focused page presentation

Refined pattern titles, headings, descriptions, and introductory copy around each actual project. Updated homepage, catalog, amigurumi collection, and guide metadata with separate page purposes. Ten focused pages pass title, description, social, schema, canonical, and no-JavaScript checks. The sitemap remains at 12 indexed canonical URLs. All 317 supplied instruction rows and 32 component sections remain intact; four-pattern layout checks pass from 320 to 1440 pixels. Keyword demand and Google rankings have not been measured. No publishing performed.

## Step 5 — connect patterns and learning guides

Added yarn-guide links alongside each pattern's materials and contextual BLO, FLO, and repeat-notation links in abbreviation tables. Each of the three guides now recommends three existing projects with a specific explanation and a direct materials, abbreviation, or component link. Relationships are explicit in src/learning-links.json and validated during the build. All links are static HTML. All 317 instruction rows remain unchanged. Round-trip navigation, fragment targets, no-JavaScript rendering, and layout checks pass at 320, 390, 768, and 1440 pixels. Local-link and search-metadata checks also pass. No new indexed URLs or deployment.

## Step 6 — curated collections

Created Cats (three projects) and Halloween (two projects) landing pages with individual introductions, comparisons using supplied hook/size/level details, choosing advice, and relevant guides. The directory now offers three collection pathways; Amigurumi has construction-focused guidance. Updated primary navigation, collection navigation, and pattern theme links. Filters work within each collection, and redundant theme choices are hidden. Comparison tables scroll inside a keyboard-focusable region on narrow screens. Canonicals, breadcrumbs, and sitemap now cover 14 indexable URLs across 32 generated HTML pages. No new patterns or deployment.

## Step 7 — prepare the catalog for growth

Added explicit draft/published pattern status, validation before generation, default SEO metadata, and a shared collection-membership rule for browser and build output. Active navigation derives from eligible curated collection definitions. Comparisons and counts derive from published members; related projects rank shared themes and are limited to three. Unknown categories/themes fall back to valid directory navigation instead of generating thin landing pages. A generated-route manifest retires previously public patterns or ineligible collections with noindex placeholders. Growth fixtures are built only in a temporary copy and do not enter the real site. Ten invalid-input cases and isolated growth, draft, comparison, and retirement tests pass. Existing collection layouts/filters and SEO metadata checks pass; the real catalog remains four patterns and 14 indexable URLs. Nothing was deployed.

## Step 8 — visitor experience

Used the owner-provided public email for contact and Croveli as the public website/operator name. Replaced non-sending forms with honest email contact and newsletter coming-soon content, while preparing an HTTPS hosted signup configuration. Refreshed About and current-behavior privacy/terms pages; no country was inferred. Added saved-project storage explanations, clear/undo controls, blocked-storage notice, and a scoped all-data control. Private notes now ask for a note title rather than a personal name. Visitor checks pass at 320, 390, 768, and 1440 pixels; broader keyboard/layout/SEO checks pass at six widths. No email was sent, newsletter subscription created, account opened, or deployment performed. Newsletter connection remains pending a real signup service.

## Step 9 — launch review

All feature suites pass, including a repeat after the image-delivery changes. Fixed desktop TOC number contrast; named groups now have explicit semantics. Added primary-photo AVIF/WebP delivery, matching image preloads, correct card sizes, and content-derived shared asset versions. Corrected local server MIME types, compression, and malformed-path handling. Automated accessibility reports zero violations across 30 page/dialog checks. Local link checks cover 1,028 references; HTTP checks verify generated pages, real 404 responses, indexing consistency, and assets. Slower-mobile single-run LCP ranges from 2.244 to 3.284 seconds with CLS 0 in the three sampled pages; live host/device performance remains unverified. The full details, limitations, and requested newsletter reminder are in LAUNCH-REVIEW.md. No publication or real message/subscription was performed.
