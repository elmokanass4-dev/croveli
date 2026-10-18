# Croveli | Crochet Patterns

A responsive crochet pattern website hosted on GitHub Pages.

## Editing

- `src/templates.js`: pattern catalog and draft tutorial templates.
- `src/guides.json`: beginner guide content.
- `src/shell.html`: shared page shell.
- `scripts/build.cjs`: static HTML, metadata, structured data, responsive images, sitemap and browser enhancements. Run `node scripts/build.cjs` after editing source.
- `app.js` and the page HTML files are generated; edit their sources above.
- `style.css`: branding and responsive styles.
- `index.html`: navigation, newsletter, and footer.
- `assets/`: temporary crochet images supplied by the owner.

Preview locally with `node scripts/serve.cjs`, then visit `http://localhost:4174/croveli/`.

GitHub Pages publishes the root of the `main` branch automatically after each push.

Pattern instructions are illustrative drafts. Replace with tested patterns before launch. Newsletter and contact forms are demos; saved patterns, comments, and round progress stay in the visitor's browser.

See [SEO.md](SEO.md) for implementation, validation, and Search Console setup.
