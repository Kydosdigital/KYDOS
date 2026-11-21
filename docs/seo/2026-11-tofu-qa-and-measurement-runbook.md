# KYDOS Greater Manchester TOFU: factual controls, static QA and measurement runbook

**Checked:** 21 November 2026. **Scope:** GitHub issue [#47](https://github.com/Kydosdigital/KYDOS/issues/47), two published pilot posts and three repaired existing posts. This is a source/QA and measurement artefact, **not** evidence of interactive browser QA, Google indexing, lead conversion or a successful live form submission.

## A. Current public offer and factual controls, checked against repository main

The public `pricing.html` page lists Social Starter **£165/month**, Visibility **£275/month**, Pipeline **£455/month** and Partner **£655/month**. The aesthetic-clinic cost article now quotes Visibility **£275/month**, Pipeline **£455/month**, Partner **£655/month**. The previous £255 Visibility price is not present in current pricing HTML. The public page also says standalone graphic design starts at **£500**, and bespoke services are custom quoted. These are a snapshot of the website as of 21 November, **not a promise that prices will never change**.

Editorial controls: do not imply that illustrative lead counts, budgets or client examples are achieved Kydos results. Never treat the company's registered or co-working address as proof of a public-facing Google Business Profile office. Do not invent client endorsements, qualifications, click-through improvements, local market statistics, Google AI Overview inclusion or form conversions. Use actual authorship/credentials only if verified in site copy. No claim that the business is an eligible Google Maps storefront without checking the latest [Business Profile eligibility guidance](https://support.google.com/business/answer/3038177). Distinguish agency fees from media spend.

## B. Repeatable static audit of five edited/published HTML pages

The following files were re-fetched from **main** on 21 November 2026 and inspected for their actual H1, title, canonical, existing GTM ID and LeadConnector form ID. This is an **HTML source check only**; a responsive stylesheet's presence does not prove correct visual rendering.

| URL suffix in `/blog/` | H1/title present | Self canonical on www | GTM ID in source | LeadConnector form ID in source | Notes |
|---|---|---|---|---|---|
| `why-business-not-showing-google.html` | yes | yes | yes | yes | New pilot, interactive/mobile QA still open |
| `search-console-impressions-no-clicks.html` | yes | yes | yes | yes | New pilot, interactive/mobile QA still open |
| `aesthetic-clinic-marketing-cost-uk.html` | yes | yes | yes | yes | Price corrected to £275 |
| `dental-marketing-cost-uk-agency-budget.html` | yes | yes | yes | yes | Hypothetical budget calculations added |
| `ecommerce-marketing-agency-uk-how-to-choose.html` | yes | yes | yes | yes | Agency comparison scorecard added |

All five source files contain the expected GTM identifier `GTM-MQRB2X8K`, LeadConnector form identifier `QaXpE6farn2QrRKGKVR1`, one identifiable `<h1>` and a `https://www.kydosdigital.com/blog/...` canonical matching the path. **Still not independently verified:** desktop/mobile browser rendering, actual HTTP response from both aliases, keyboard navigation, form submission, Google tag firing, structured-data validator, all links and live URL Inspection. These outstanding checks prevent acceptance of #47 P07, P12 and R05.

### Exact independent QA protocol before accepting P07, P12, R05

1. Open each of the five production URLs in a real desktop and mobile browser at narrow and wide widths. Verify no clipping, horizontal scroll, inaccessible controls or broken tables; check menu, links, headings, footer, source links, images and CTA. Capture screenshots or reproducible issue details.
2. Verify HTTP 200, self-canonical, no `noindex`, one H1, appropriate title/meta, sitemap canonical host, BlogPosting/Breadcrumb JSON-LD parse, no duplicate URL and appropriate internal links.
3. Inspect browser network/console for GTM loading, cookie/consent behaviour, LeadConnector embed and console errors. Do not submit a fake enquiry. Only a consented authorised test can establish a successful form path.
4. Independently read both pilot articles against Google's [Search Essentials](https://developers.google.com/search/docs/essentials), [Business Profile rules](https://support.google.com/business/answer/3038177), [local ranking](https://support.google.com/business/answer/7091), [title links](https://developers.google.com/search/docs/appearance/title-link) and [snippets](https://developers.google.com/search/docs/appearance/snippet). Confirm local examples are hypothetical and don't make ranking promises.
5. Record reviewer, date, screenshot/test URLs, any failures, and the fix PR/commit and production deployment before ticking the three QA checkboxes. Static source inspection alone is not sufficient.

## C. GSC and GA4 measurement protocol, ready to execute

**Baseline:** [2026-11 TOFU pilot search baseline](https://github.com/Kydosdigital/KYDOS/blob/main/docs/seo/2026-11-tofu-pilot-search-baseline.md), final 16 Aug to 16 Nov 2026, top 1,000 disclosed GSC query rows are **partial** and do not equal site totals. The two pilot posts were first published **21 November 2026**. There cannot be a pre-publication page baseline for either pilot. Existing edited articles can use their own pre-change GSC cohorts.

**Checkpoints for pilot pages, from 21 Nov:** 28 Nov (+7 days), 5 Dec (+14), 21 Dec (+30), 20 Jan 2027 (+60). GSC is reported in Pacific Time and has an approximately 2-3 day lag, so choose the latest complete date at each checkpoint, disclose the actual period, and never fill missing days with zeros. For +7 days, first assess discovery/indexing and query relevance, not conversion impact.

**Extract at every checkpoint:**
- GSC property `sc-domain:kydosdigital.com`, search type web, filter exact canonical page. Save page-level impressions, clicks, CTR and average position, and query-by-page breakdown for non-branded and branded queries separately.
- Record query exclusion rule in the report: terms containing Kydos or misspellings of Kydos are branded. Keep service/geo terms such as `seo manchester` non-branded unless an actual company name is embedded. Search Console may hide privacy-sensitive queries, so disclosed query-row clicks may not sum to page totals.
- Separate three scenarios: (a) no indexation, (b) indexed with little relevant exposure, (c) relevant impressions with weak ranking or weak click attraction. Do not change metadata reflexively when average position is around 20-30.
- For changed older pages, compare **equal-length, complete** pre/post periods and annotate other SEO changes, publication timing, Google algorithm events and seasonality. An unadjusted before/after is not causal proof.
- GA4 `properties/481331625`: report organic landing-page sessions and engaged sessions for exact paths, with the same calendar windows where available. Exclude internal/test traffic only if configured and verified. No invented GA4 figures.
- Qualified leads: check actual HighLevel enquiry records only through authorised access, with attribution evidence. **Block** GA4 `generate_lead` attribution until the `kydos_ghl_form_success` event, GTM trigger, GA4 event/key-event settings and a consented end-to-end test are confirmed. A zero GA4 key-event count is not proof of zero leads.

**Decision rules at +14/+30/+60:** Indexation and relevant queries first; diagnose ranking when average position is poor, snippets/intent only when ranking and SERP placement make clicks plausible; diagnose landing page/offer/lead tracking when clicks exist but verified enquiries do not. Expand a topic only if it is distinct from existing pages and supported by credible owner-question evidence, search intent, actual search data and editorial capacity. Otherwise improve an existing page or stop. Do not treat a 7-day no-click observation as failure.

**Reporting template:** `Date; canonical URL; publication/last modified date; GSC window (complete); index state; query/page impressions; clicks; average position; non-branded query coverage; GA4 organic sessions; engaged sessions; verified HighLevel enquiries or blocked reason; change/next action; source links`.

## D. Source verification limits

The existing research bank has 26 individually linked public discussions, but two independent **direct owner** discussions for *each* of the two pilot questions have not yet been revalidated during this run. In particular, specialist discussion of CTR is not equivalent to direct owner-origin evidence. Keep #47 T02 open until exact forum links and origin are checked and logged, rather than marking it completed by association.

**Status as of this audit:** Factual pricing source and editorial no-go controls documented; static source checks re-run; a detailed +7/+14/+30/+60 measurement method is ready. No new website content or production deployment is implied by this documentation-only change.
