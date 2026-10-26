# Adding patterns without rebuilding the design

Edit `src/patterns.json` and place the supplied photographs in `assets/`. Keep original instructions and credit fields accurate. Do not edit generated HTML or `app.js`.

## Drafts first

A draft can start with:

```json
{"id":"your-project-slug","name":"Your project name","status":"draft"}
```

Drafts do not enter public HTML, search, browser data, related cards, comparisons, or the sitemap. `published` means included in a **local build**; it does not deploy anything. Deployment still requires a separate instruction.

## Before including a pattern

Use an existing entry as the structural example. Published entries need:

- A unique, stable, lowercase hyphenated `id`, project `name`, `status`, `category`, and `tags`.
- Actual project information: `hook`, `size`, and `level`. Use an explicit “Not specified” value when the source does not supply a fact.
- A primary `.jpg` filename and descriptive `alt` text. Optional `focal` controls the card crop.
- An introduction in `description`, `presentation`, `highlights`, `materials`, `abbreviations`, `notes`, component `sections`, `assembly`, `closing`, and original `credit`.
- Stable section IDs and `[label, instruction]` rows. Keep IDs stable to preserve readers’ saved progress. Figures need an existing JPEG asset stem, caption, and alt text.
- An optional `comparisonDetail` describing a genuine distinguishing feature; the first highlight is the fallback.

The optional `seo` object can supply a curated title, heading, description, and editorial focus phrase. Without it, the build uses the project name and introduction. It does not invent difficulty, duration, quantities, or keyword demand. Search titles and descriptions must remain unique.

## What updates automatically

Shared pattern pages and cards, responsive images, category-aware breadcrumbs, metadata/social cards, internal search, collection membership and counts, comparison rows, sitemap entries, and up to three related patterns. Shared theme tags rank related projects before category-only matches.

Homepage and active collection navigation are derived from the catalog. A theme without a curated landing page uses a directory filter rather than creating another indexed page.

## Curated collections

Collection definitions live in `src/search-pages.json`. Each has `status`, `minProjects`, and `match` (`category` or `tag`). Current themed collections require at least two published projects. This is a configurable editorial rule, not a Google ranking threshold.

A new collection also needs its own title, description, heading, introduction, editorial heading, useful choosing advice, and valid guide references. Draft or under-threshold collections stay out of navigation and the sitemap. Theme comparisons use the matching published patterns, not a second hand-maintained membership list.

`src/learning-links.json` keeps deliberate guide-to-project recommendations. Add recommendations when useful; it does not create new lessons or recommend every project automatically. A referenced draft, missing project, or missing component fails validation.

## Build and verify

```text
node scripts/build.cjs
node scripts/check-links.cjs
node scripts/verify-catalog.cjs
node scripts/verify-collections.cjs
```

Validation runs before page generation. It rejects duplicate or reserved IDs, duplicate pattern metadata, missing content/assets, invalid component IDs, and broken learning references. `generated-pages.json` tracks generated routes. Previously public pattern/collection routes that become unavailable receive a generic noindex retirement page so stale instructions do not remain public.

The growth test builds synthetic fixtures only in an isolated temporary directory and removes that directory after success. No fixture is added to the real catalog, and none of these commands deploys the site.

## Follow an authored layout with native HTML

An optional editorial object selects the responsive editorial template. Its blocks keep source section order and image placement using headings, paragraphs, lists, facts, individual images, galleries, two-column groups, materials, abbreviations, and references to ordinary instruction sections. Extract photographs and diagrams individually into JPEG assets; never use whole PDF pages as website content. The images object supplies descriptive alt text. Section inlineImage and splitAfter can place a source photo between specific instruction rows. Columns stack in source order on phones.

Source limitations belong in editorial.notice outside the authored content. Do not invent missing stitches or measurements. Instruction checklists and reading controls use the same stable section IDs as ordinary tutorials. Run node scripts/verify-editorial.cjs alongside the standard import and catalog checks.
