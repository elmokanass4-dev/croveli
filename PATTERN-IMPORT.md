# Supplied pattern import — October 19, 2026

The four supplied patterns replace the eight demonstration projects in discovery, search, saved projects, related cards, and the homepage. No additional patterns were generated. All changes are local; no commit, push, or deployment was performed.

| Current project | Supplied source | Attribution |
| --- | --- | --- |
| Long-eared Bunny | `buney crochet/Bunny_Pattern.pdf` | Marianna Matvey / Buns toys from Marianna |
| Sitting Calico Kitten | `cat crochet/cat crochet.pdf` | huongkhvn ©2024 |
| Pumpkin Cat | `Pumpkin Cat Halloween/Crovely_Pumpkin_Cat_English.pdf` | Supplied Crovely English edition; original illustrated pattern credits Massiel Martinez / @MASSIMARTZ_ |
| Luna the Witchy Cat | `Witchy_Cat/Witchy_Cat.pdf.pdf` | Chloe / EMI Creations / @e.m.i_creations |

Source folder: `C:\Users\anass\OneDrive\Desktop\Crochet patterns`. The original PDFs and photos are unchanged. PDFs are not copied into the public site.

## Presentation

- `src/patterns.json` contains the project facts, introductions, materials, glossary, 32 component sections, 317 instruction rows, finishing instructions, attribution, and internal editorial notes.
- Four supplied project photographs and 32 source reference figures are imported. Source watermarks and photo credits are retained. Some Pumpkin Cat references include the original Spanish labels; captions identify this.
- Instructions have project-specific, persistent checkboxes. Labels and grouped repeat rounds follow the supplied sources rather than being silently renumbered.
- The bunny photo includes clothing; the introduction clarifies that jacket instructions are not part of the supplied pattern.
- Unknown duration and difficulty are not guessed. The difficulty filter only offers values actually supplied in the collection.
- Retired project/category URLs show noindex retirement notices linking to the current collection, so older links no longer display demo instructions.
- Titles, descriptions, image alternatives, canonical URLs, and sitemap entries refer to the actual four projects. Schema describes the pages, without reviews, ratings, HowTo validation, or claimed Croveli design authorship.

## Source fidelity

The user confirmed that the supplied versions should be used as-is. The Pumpkin Cat source does not supply a separate cat-body sequence; none was invented. Bunny grouped-round labels and printed references are preserved. Other printed inconsistencies, including calico eye-size wording and some stitch counts, are recorded in `editorialNotes` in the data file. The import is a presentation and transcription task, not independent crochet testing.

Original designer permissions and any source corrections remain publication considerations. Existing newsletter/contact forms still need a connected service before accepting messages or subscriptions.

## Verification

- `node scripts/build.cjs`: generates 30 HTML pages, including retirement notices; 12 indexable canonical URLs.
- `node scripts/check-links.cjs`: local links, assets, and fragment targets.
- `node scripts/verify.cjs`: main navigation and interactive flows across six viewport widths.
- `node scripts/verify-polish.cjs`: keyboard, focus, storage failures, metadata, no-JavaScript content, and layout checks.
- `node scripts/verify-import.cjs`: all four patterns at 320, 390, 768, and 1440px; exact rendering of all data rows, materials, image decoding, and overflow checks.

Automated browser checks use Microsoft Edge on Windows. Native iOS Safari and physical crochet outcomes were not tested. Browser QA results are recorded in `qa-results.json` and `import-qa-results.json`.

## Christmas additions — October 23, 2026 (local review)

Imported the supplied Christmas Santa collection and Christmas Green Man as two catalog entries. Santa contains three separately labeled source designs, with duplicate source blocks shown once. Its main photo is extracted from the supplied PDF. The Green Man retains Lazareva Victoria’s credit and includes the supplied construction/face diagrams. Source files remain unchanged and are not publicly bundled as PDFs. No missing stitch instructions or alternate eye-placement round was invented.

Added a curated Christmas collection; homepage features the two new cards within the existing eight-card selection. All nine projects remain in the catalog. Metadata, internal navigation, responsive assets and sitemap rebuilt.

Validation: 39 pages and 1,523 local references passed link checks. Nine patterns, 69 component sections and 655 instruction rows passed rendering checks at 320, 390, 768 and 1440 px; all images decoded without horizontal overflow or browser errors. Catalog validation and collection flows passed. Focused checks confirmed Christmas cards, jump-to-instructions, saved progress after reload, attribution and static no-JavaScript content. These checks do not physically test crochet stitch outcomes. No deployment performed.
