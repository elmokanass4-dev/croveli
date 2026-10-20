# Croveli search and performance measurement

## Setup — 19 October 2026

Public URL: https://elmokanass4-dev.github.io/croveli/

Search Console URL-prefix property: https://elmokanass4-dev.github.io/croveli/

Ownership verified with the signed-in owner account, using the HTML meta tag in src/shell.html. Keep the tag in future builds. The sitemap was submitted with explicit owner approval. Initial Google status: could not fetch; public HTTP response is 200 with application/xml and 14 canonical URLs. Submission is not proof of indexing. The homepage initially reported unknown to Google. Google's live test then confirmed it is accessible and may be indexed. A homepage indexing request was accepted into the priority crawl queue; this is not confirmation of indexing. Sitemap retried once after that test; Google still reports could not fetch. This remains unresolved and needs a later status check.

No visitor analytics tracker was installed. Search Console measures Google organic search, not all traffic (including Pinterest), newsletter conversions, or onsite interactions. There is no fabricated baseline for clicks, impressions, positions, or visitors.

## First live-site mobile laboratory baseline

See performance-live-results.json. One run per page, Edge/Chromium, viewport 390x844, DPR 2, 150ms network latency, 200,000 bytes/sec download, CPU slowdown 4x. Measured against GitHub Pages, not localhost. Date recorded in JSON.

| Page | LCP | CLS |
| --- | ---: | ---: |
| Homepage | 2.708 s | 0 |
| Cats collection | 1.928 s | 0 |
| Long-eared bunny | 2.652 s | 0 |

No failed requests in those runs. These are synthetic lab observations, not a field Core Web Vitals pass, Lighthouse score, or INP result. The homepage filter interaction reached 288ms in this run; use field data or repeatable profiling before attributing it to a specific implementation. PageSpeed API returned HTTP 429 quota exceeded; no Google performance score or CrUX result was available from that request.

Rerun from PowerShell:

```powershell
$env:CROVELI_TEST_URL='https://elmokanass4-dev.github.io/croveli/'
npm run check:performance
Remove-Item Env:CROVELI_TEST_URL
```

## Review sequence

1. Resolve or recheck the sitemap fetch status and inspect the homepage, directory, supplied patterns, and guides. Request indexing only for eligible pages; avoid repeatedly submitting the same URL.
2. Once Search Console reports data, establish an actual baseline: indexed canonical URLs, exclusions, clicks, impressions, CTR, position, landing pages, queries, and mobile vs desktop. Record unavailable data as unavailable, not zero.
3. Review weekly initially; compare 28-day periods once sufficient history exists. Use query/page combinations and actual project intent rather than promising ranks for broad words like yarn.
4. Use impressions with low CTR to review matching titles/intros. Use relevant queries to improve existing content. Add a new collection only when real content and catalog eligibility support it; do not generate thin keyword variants.
5. Track Core Web Vitals when enough field data exists. Targets at the 75th percentile: LCP <=2.5s, CLS <=0.1, INP <=200ms. Origin data may include other projects hosted on the same github.io origin.
6. If full visitor analytics is desired, connect an owner-controlled provider/property deliberately and update the privacy description to match actual collection. Do not insert an unconfigured tracker.

## Final follow-up

Connect the newsletter service using the existing visitor settings once the owner provides its public hosted signup URL and service name. No newsletter addresses are currently collected.

## References

- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/speed/docs/insights/v5/about
