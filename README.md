# Croveli | Crochet Patterns

A responsive crochet pattern website hosted on GitHub Pages.

## Editing

- `src/patterns.json`: four supplied patterns with structured instructions and source credits.
- `src/templates.js`: shared page presentation and tutorial templates.
- `src/client.js`: progressively enhanced browser interactions.
- `src/site-config.json`: canonical hosting path, free-only feature policy, and disabled advertising configuration.
- `src/guides.json`: beginner guide content.
- `src/shell.html`: shared page shell.
- `scripts/build.cjs`: static HTML, metadata, structured data, responsive images, sitemap and browser enhancements. Run `node scripts/build.cjs` after editing source.
- `app.js` and the page HTML files are generated; edit their sources above.
- `style.css`: branding and responsive styles.
- `index.html`: navigation, newsletter, and footer.
- `assets/`: temporary crochet images supplied by the owner.

Preview locally with `node scripts/serve.cjs`, then visit `http://localhost:4174/croveli/`.

GitHub Pages publishes the root of the `main` branch automatically after each push.

The four supplied patterns are imported with original designer credits. Instructions retain the supplied labels and counts; no independent crochet testing is claimed. See PATTERN-IMPORT.md for source mapping and import notes. Contact uses the owner-supplied public email address. Newsletter signup is marked coming soon until a hosted service is configured; saved patterns, private notes, and progress stay in the visitor’s browser.

See [SEO.md](SEO.md) for implementation, validation, and Search Console setup.

See [AUDIT.md](AUDIT.md) for the latest local polish, tests, limitations and launch checklist, and [HOSTING.md](HOSTING.md) for project-path robots and future integration details. `node scripts/verify-polish.cjs` runs the additional keyboard, resilience, page/SEO and responsive checks. No publishing is part of the local build/test commands.


Layout refinements live in `refinement.css`. Each project in `src/templates.js` has a `focal` value (CSS object-position) for card and introduction crops. Responsive source images preserve the full photograph. Category links and difficulty buttons are separate; difficulty filters keep the selected project category.

Pattern pages include sticky reading controls, instruction-step progress, resume navigation, and three persistent text sizes. Run node scripts/verify-reading.cjs to check these flows, storage failures, printing, and responsive layouts.

Tutorial reference photographs open in a keyboard-accessible image viewer, with per-section sequences, zoom, and ordinary image links as a no-JavaScript fallback. Run node scripts/verify-photos.cjs to verify all 32 image links and responsive viewer controls.

Discovery uses structured Cats, Bunnies, and Halloween tags independently of difficulty. Combined filters show counts, disable unavailable combinations, and preserve selections in the URL. Run node scripts/verify-discovery.cjs to verify filtering, recovery, search, and responsive behavior.

Search presentation: src/search-pages.json controls home/collection metadata; pattern and guide SEO fields live with their content. Run node scripts/verify-search-focus.cjs to check metadata and static headings.

Learning relationships live in src/learning-links.json. Guides recommend matching projects and link directly to their materials, abbreviation table, or component instructions. Pattern abbreviation tables link BLO/FLO and repeat notation to guide sections. Run node scripts/verify-learning-links.cjs for navigation and responsive checks.

Collections: src/search-pages.json stores collection metadata and editorial copy; scripts/collection-details.cjs renders comparisons, advice, and directory pathways. Run node scripts/verify-collections.cjs for the new Cat and Halloween pages.

Step 7: see ADDING-PATTERNS.md for the draft-to-published content workflow. scripts/catalog.cjs validates the catalog and selects eligible collections before generation. generated-pages.json tracks routes for safe retirement; node scripts/verify-catalog.cjs tests growth and draft exclusion in an isolated build.

Visitor settings live in src/visitor-settings.json. scripts/visitor-pages.cjs renders About, contact, privacy, terms, and the configured/coming-soon newsletter state. A public hosted newsletter signup URL and service name enable the newsletter link without exposing credentials. Run node scripts/verify-visitor.cjs for contact, storage controls, and responsive checks.

Step 9 launch review: see LAUNCH-REVIEW.md. With the local preview running, npm run check:launch combines the functional, accessibility, catalog, and HTTP checks. npm run check:performance records a separate throttled local measurement. Primary images offer AVIF with WebP fallback; CSS/JS URLs use content-derived versions. Final-handoff reminder: connect the newsletter signup service after the remaining steps.

Newsletter connected on 19 October 2026: https://croveli-yarn-letter.subscribepage.io/ (MailerLite, double opt-in enabled). The shared signup link and privacy text are generated from src/visitor-settings.json. Delivery and a complete confirmed signup still need an owner inbox test.
