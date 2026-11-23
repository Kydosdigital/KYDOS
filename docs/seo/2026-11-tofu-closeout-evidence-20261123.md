# Greater Manchester TOFU: implementation handover and QA evidence
**Evidence refreshed:** 23 November 2026 (UK). **Repository:** `Kydosdigital/KYDOS`.
**Primary live checklist:** https://github.com/Kydosdigital/KYDOS/issues/47
**Approved master strategy:** https://github.com/Kydosdigital/KYDOS/blob/main/docs/seo/2026-11-greater-manchester-tofu-master-strategy.md
**Forum research:** https://github.com/Kydosdigital/KYDOS/blob/main/docs/seo/2026-11-greater-manchester-public-forum-question-bank.md

## User-visible implementation, not forecasts
Published to Kydos's existing production website on 21 Nov 2026:
1. https://www.kydosdigital.com/blog/why-business-not-showing-google.html , [PR #56](https://github.com/Kydosdigital/KYDOS/pull/56): nine practical website-vs-Maps diagnosis checks, clearly illustrative Oldham/Manchester/Stockport business examples, authentic Google primary references, copyable worksheet.
2. https://www.kydosdigital.com/blog/search-console-impressions-no-clicks.html , [PR #57](https://github.com/Kydosdigital/KYDOS/pull/57): seven ranking/CTR/intent/landing-page checks and dated Kydos GSC query examples.
3. https://www.kydosdigital.com/blog/google-ads-clicks-no-enquiries.html , [PR #62](https://github.com/Kydosdigital/KYDOS/pull/62): eight checks, practical worksheet and properly identified illustrative regional examples.

Improved existing content:
- https://www.kydosdigital.com/blog/aesthetic-clinic-marketing-cost-uk.html , [PR #54](https://github.com/Kydosdigital/KYDOS/pull/54): corrected Visibility plan to £275.
- https://www.kydosdigital.com/blog/dental-marketing-cost-uk-agency-budget.html , [PR #58](https://github.com/Kydosdigital/KYDOS/pull/58): budget scenarios clearly marked illustrative, not benchmark fees.
- https://www.kydosdigital.com/blog/ecommerce-marketing-agency-uk-how-to-choose.html , [PR #58](https://github.com/Kydosdigital/KYDOS/pull/58): decision matrix and genuine economics cautions.
- https://www.kydosdigital.com/blog/ppc-agency-manchester-prices-management-fees-ad-spend.html , [PR #63](https://github.com/Kydosdigital/KYDOS/pull/63): £100/week budget discussion with hypothetical CPC calculations, no guaranteed leads.
- Contextual inbound links from relevant Manchester/Oldham SEO buyer guides, [PR #59](https://github.com/Kydosdigital/KYDOS/pull/59).
- [Four original TOFU social-media repurposing briefs](https://github.com/Kydosdigital/KYDOS/blob/main/docs/seo/2026-11-tofu-pilot-social-repurposing-briefs.md), NOT evidence of published social posts.

**Accuracy fix completed 23 Nov:** https://www.kydosdigital.com/about.html visible registered-office footer and Organization JSON-LD updated from obsolete Manchester King Street to Regus, Chapel Road, Oldham OL8 4QQ in [PR #64](https://github.com/Kydosdigital/KYDOS/pull/64), matching [Companies House company 16290693](https://find-and-update.company-information.service.gov.uk/company/16290693). Current Vercel production for merge SHA `d97b1760a2621bc11cb9c216b716b8f70fd5d63a` is READY in [deployment dpl_5NMgNT9rGpXwc5ojWFnduMck8aTi](https://vercel.com/kydosdigitals-projects/kydos/5NMgNT9rGpXwc5ojWFnduMck8aTi).

## Independently inspected live website evidence, 23 November
TinyFish browser/source fetch for each of the three published new guide URLs succeeded with:
- Exact final public URL, matching **self-canonical**, explicit `index,follow`, `width=device-width,initial-scale=1`, descriptive title and meta summary.
- Visible article text, published 21 Nov, author metadata **Kydos Digital (organisation)**, not a verified named specialist author.
- Correct live internal link destinations: Google visibility and GSC click guide to Manchester/Oldham SEO; Google Ads diagnostic to Manchester/Stockport PPC pages. All four service landing pages independently fetched successfully with self-canonicals.
- Existing HighLevel form iframe still present, but this does **not** establish submissions, successful conversions or live form event tracking.
- Google primary documentation linked from guides: independently fetched 10 referenced URLs including GBP guidelines/local ranking, Google Search Essentials, request recrawl, title links, snippets, Search Console report, AI features and Google Ads conversion guidance. All 10 fetched successfully or redirected to relevant official Google pages. A source link being reachable does not prove every claim has had an independent human expert review.

Read-only browser QA: https://agent.tinyfish.ai/runs/e69fea37-b02f-4305-abce-2eabb9c61c5f. Desktop content/navigation and offer-popup close control observed. **NOT independently validated:** viewport truly resized to 390px, mobile horizontal overflow and touch target adequacy, complete keyboard focus order, Escape modal behaviour, screen-reader operation, actual form submission/GA4 event, or independent human editorial sign-off. The browser explicitly could not set 390x844; do not report it as a responsive QA pass. Older desktop browser evidence: https://agent.tinyfish.ai/runs/6d79d4bb-2d59-42d0-9355-eac1834a0649 .

## Authoritative business context, and a promotional blocker
- [Companies House company overview](https://find-and-update.company-information.service.gov.uk/company/16290693): legal name KYDOS DIGITAL LTD, active UK business, registered office Regus, Chapel Road, Oldham OL8 4QQ. This registered office is **not** evidence of a Google Business Profile-eligible walk-in physical office.
- [Published Kydos pricing](https://www.kydosdigital.com/pricing.html), checked 23 November: Starter £165/month, Visibility £275/month, Pipeline £455/month, Partner £655/month; paid media spend separate.
- Site content identifies itself as **Kydos Digital**; website's articles provide organisation-level author metadata, but no individual author credentials were independently established. Do not invent experts.
- HighLevel site widget advertises a **£165/month Launch Offer**, with a visible selector not matching every advertised service in a previous browser check. Actual connected form is `QaXpE6farn2QrRKGKVR1` within Kydos Digital HighLevel location `teuTNGtRIbd8onoKwL2U` and is named **Kydos Marketing Form - Claim Offer**. The external form API is read only and does not expose actual live offer copy, dropdown settings or conditional logic. This mismatch needs commercial owner verification **inside this exact HighLevel sub-account**; do not change paid promises or declare the form correct without approval.

## Google indexing and analytics are NOT confirmed
- Fresh connected Search Console URL Inspection, 23 Nov 2026, on all three new TOFU URLs still returns **"URL is unknown to Google"**, neutral. They are published in canonical sitemap and public website, but not yet independently verified indexed. No manual Request indexing was submitted.
- Search Console 19-22 Nov queried with `dataState=final`: only dates 19, 20, 21 Nov returned. The period including full 22 Nov is not yet complete, so matched full post-publication cohort comparisons are **not yet valid**. Historical 1-7 and 8-14 Nov disclosed query-page baseline already recorded in issue comments is **pre-publication**, with Google privacy filtering and no proof of later improvement.
- Existing `kydos_ghl_form_success` DataLayer bridge is not proof of GTM/GA4 `generate_lead`. GA4 had only `purchase` designated as key event at previous inspection. No authenticated live submit/test or qualified-enquiry attribution was performed. Never report zero key events as zero actual enquiries.

## Outstanding acceptance, with precise next action
Keep these checkboxes OPEN in [issue #47](https://github.com/Kydosdigital/KYDOS/issues/47) unless independently verified:
- **T05:** confirm external HighLevel live £165 promotional wording/service options with commercial owner, sign off true offer and author details, retaining verified pricing/registered-office evidence.
- **P07 / P12:** run actual mobile-width 390px rendering and interactive keyboard/focus/close tests for the two original diagnostic guides, with independent factual review. URL/canonical/source and desktop checks alone are insufficient.
- **R05:** complete representative real mobile/link/form acceptance across the four revised guides, checking current price and original forms; no claims of GA4 event success without a legitimate authorised test.
- **S04:** finish full responsive/interaction QA on the follow-on Google Ads clicks/no-enquiries article; live page is fetched, link targets and canonical verified, deployed READY, but mobile and event checks remain.
- **M04:** capture matched complete pre-versus-post publication windows with exact dates, exclude identifiable branded queries while noting Google's privacy suppression, and don't compare a preliminary two-day window with a seven-day final window.
- **M07:** only choose expand/refresh/stop after actual indexation, qualified query performance, engaged organic sessions and (when verifiable) real enquiries; a three-day-old unindexed article is not evidence that TOFU failed.
- **M08:** this handover logs all shipped content, sources, PRs, social briefs, factual corrections, verified/not-verified QA and owners, without falsely completing blocked acceptance gates.

**Stop condition:** No more generic clone articles or idle hourly reports. Continue substantive QA with appropriate mobile/authenticated tools and scheduled GSC checks after Google's lag. Do not change the separate commercial SEO issue #45 or the CRM product.
