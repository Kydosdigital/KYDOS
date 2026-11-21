# TOFU Pilot Search Baseline and Index Evidence

**Extracted:** 21 November 2026. **GSC final-data range:** 16 August to 16 November 2026 inclusive, Google Search Console connected to OpenSEO project `04b0780b-9412-4a15-a308-70cc31f01780`, property `sc-domain:kydosdigital.com`. Search type: Web.

## What this export actually measures

The GSC query extraction returned 1,000 rows **with more rows available**. These rows total **35 clicks and 17,278 impressions**, but these are **not site-wide totals** and should not be represented as such. Google suppresses some queries for privacy, and top-row pagination can omit long-tail queries. The page-dimension extraction returned 306 rows with no additional page rows indicated. Do not sum query and page dimensions as if they represented independent visits.

### Query evidence: highest visible relevant records

| Query | Impressions | Clicks | Avg position | Intent |
|---|---:|---:|---:|---|
| local seo manchester | 1,208 | 0 | 22.8 | Commercial local |
| local seo services manchester | 984 | 0 | 32.4 | Commercial local |
| affordable seo manchester | 424 | 0 | 17.7 | Commercial local |
| local seo agency manchester | 423 | 0 | 29.4 | Commercial local |
| google ads management stockport | 409 | 0 | 7.7 | Commercial local |
| seo rochdale | 233 | 1 | 26.1 | Commercial local |
| seo agency stockport | 197 | 1 | 20.2 | Commercial local |
| cheap seo manchester | 171 | 0 | 32.2 | Commercial local |
| local seo services in manchester | 162 | 0 | 36.0 | Commercial local |
| google ppc advertising agency stockport | 158 | 0 | 6.7 | Commercial local |
| google ads agency stockport | 145 | 0 | 5.6 | Commercial local |

**Important:** This table shows that existing high-impression queries predominantly concern agency/service selection, not the two proposed informational pilot questions. It does not establish zero search demand for the new questions. New pilot URLs did not exist in the live sitemap at the start of this run, so their own GSC pre-publication clicks and impressions are necessarily zero, not a performance failure.

### Existing related page baseline

| Page | GSC clicks | Impressions | Avg position | Notes |
|---|---:|---:|---:|---|
| `/blog/aesthetic-clinic-marketing-cost-uk.html` | 2 | 81 | 10.0 | Existing indexed page, amended pricing from separate prior batch |
| `/blog/social-media-not-bringing-enquiries-small-business.html` | Not present among 306 returned page rows | Not present | N/A | New 18 Nov, indexed, insufficient search performance data |
| `/blog/social-media-post-ideas-oldham-small-business.html` | Not present among 306 returned page rows | Not present | N/A | New 18 Nov, indexed, insufficient search performance data |

**Do not interpret an absent row as proof of zero impressions or clicks.** It may reflect GSC latency or reporting thresholds. Compare exact URLs again on +7/+14/+30/+60 days, using a consistent reporting window and country/device where needed.

## URL Inspection evidence from Google's existing index records, 21 November

| URL | Index verdict | Coverage | Last crawl UTC | Canonical |
|---|---|---|---|---|
| `/blog/social-media-not-bringing-enquiries-small-business.html` | PASS | Submitted and indexed | 2026-11-20 22:38:05 | Self, www |
| `/blog/social-media-post-ideas-oldham-small-business.html` | PASS | Submitted and indexed | 2026-11-20 03:01:10 | Self, www |
| `/blog/aesthetic-clinic-marketing-cost-uk.html` | PASS | Submitted and indexed | 2026-09-06 12:30:32 | Self, www |

All three inspections report indexing allowed, robots allowed, mobile crawl and successful fetch. The aesthetic article's last crawl predates the 21 November price correction, so **Google's index record does not establish that Google has processed the latest price change**.

## Review and publication decisions

1. The two November social articles **are indexed**, so no immediate rewrite or duplicate page is justified. Review actual content, links and early query exposure at the next checkpoint.
2. The two new pilots have distinct informational purpose from the existing commercial agency queries. Validate official sources, then create genuinely useful content with one canonical URL each.
3. For new posts, record the first GSC impression date and exact query-page pairs, rather than claiming uplift from a zero pre-publication baseline.
4. Keep verified enquiry attribution blocked until an authorised end-to-end form and GA4 `generate_lead` test proves it works.
5. An impression without a click at average position 22.8 is a ranking/relevance issue to investigate, not automatically a meta-description issue.

**Sources:** Authenticated connected Google Search Console performance and URL Inspection through OpenSEO on 21 November 2026; [master strategy](https://github.com/Kydosdigital/KYDOS/blob/main/docs/seo/2026-11-greater-manchester-tofu-master-strategy.md), [execution issue](https://github.com/Kydosdigital/KYDOS/issues/47). This file is a dated baseline, not a live data dashboard.
