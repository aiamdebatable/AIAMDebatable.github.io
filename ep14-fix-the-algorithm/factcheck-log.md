# Fact-check log — How Do You Fix an Algorithm That Decides About You?

_Independent verification pass, run 2026-09-10 (web-sourced, not trusting the draft). Each claim gets a
verdict: **CONFIRMED**, **CORRECTED**, **UNRESOLVED** or **APPROXIMATE**. This is a REQUIRED gate. The
show's differentiator is that this file is real._

- **CONFIRMED** — the source says what the episode says.
- **CORRECTED** — the source says otherwise; the brief was changed, and the change is listed under
  "Corrections applied to source" below. These stay in the file: they are the point of it.
- **UNRESOLVED** — could not be established from a source worth trusting, so it is not used on air.
- **APPROXIMATE** — checked, roughly right, and deliberately not cited on air as a precise figure.

**Verification status:** adversarial-pass

_How this pass ran: a research fan-out of 41 agents (24 distinct finder queries across 6 angles) put
its 12 highest-ranked numeric claims under single-verifier review in which the verifier had to open
the primary document — all 12 held. It extracted 104 further claims that no verifier checked; the
synthesis marks each finding as verified or finder-read. Then, by hand: the 443 pages of CMS records
released by EFF on 2026-09-08 were read directly (93 pages with a text layer; 350 scanned pages
OCR'd), together with CMS's own WISeR request for applications, FAQ and payment methodology — because
the fan-out reported the one question the flagship instrument turns on, whether the reviewing
clinician sees the machine's output first, as unanswerable from what it had opened. Four further
finder-read claims that carry weight on air were re-opened by hand and confirmed. Three completeness
critics named 18 gaps; those that bear on what is said on air are recorded below as UNRESOLVED._

---

## THE PEG

## 1. "Medicare's WISeR model has been running in six states since 1 January 2026: Arizona, New Jersey, Ohio, Oklahoma, Texas and Washington."
**CONFIRMED.** CMS's FAQ: "For the initial performance year, which began on January 1, 2026, the WISeR
Model operates in six states: New Jersey, Ohio, Oklahoma, Texas, Arizona, and Washington." Requests
accepted from 2026-01-05 for services on or after 2026-01-15; the model runs six performance years.
- https://www.cms.gov/priorities/innovation/files/document/wiser-model-frequently-asked-questions
- https://www.cms.gov/priorities/innovation/innovation-models/wiser

## 2. "Under WISeR the technology may only approve; every denial must be reviewed by a human clinician."
**CONFIRMED.** The RFA (p. 15): "enhanced technologies may be used for affirmation. For non-affirmed
decisions, model participants must use human clinicians with relevant clinical expertise for the
selected items and services for medical review." And: "A human clinician with relevant clinical
expertise for selected items and services must review every non-affirmation determination, although
this requirement does not apply to affirmations." The FAQ: "Non-affirmations will require the review
of a human clinician and cannot be performed solely by technology."
- https://www.cms.gov/priorities/innovation/files/wiser-model-rfa.pdf
- https://www.cms.gov/priorities/innovation/files/document/wiser-model-frequently-asked-questions

## 3. "The clinician's job, in CMS's own words, is to confirm the denial."
**CONFIRMED.** Participant Guide v3.0 §1.7.2 (Bates 7002CMS00057): "Before issuing a non-affirmation
of coverage … the WISeR Participant must coordinate with its WISeR Clinician(s) or WISeR Clinical
Reviewer(s), as applicable, to conduct a medical review of the request and confirm that it does not
meet Medicare coverage criteria." The safeguards summary (00080) repeats the verb: "to confirm the
request does not meet Medicare coverage criteria." The ICIP (00010) describes the technology's role as
"initial decision of affirmation of the requests or recommendation for further review by a
practitioner."
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 4. "Nothing in WISeR's rules says whether the clinician sees the machine's recommendation first — and by design they only ever see the cases the machine declined to approve."
**CONFIRMED, as a statement about the documents.** No provision in the RFA, FAQ, Participant Guide v3.0
or Data Reporting Guide v3.0 addresses what the reviewer is shown. The architecture in the ICIP and
Participant Guide routes to the clinician only requests the technology did not affirm. Stated on air
as what the documents do and do not say — never as a finding about any individual reviewer's practice.
- https://www.cms.gov/priorities/innovation/files/wiser-model-rfa.pdf
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 5. "Vendors are paid a share of the savings from denied care, and the payment is clawed back when an appeal succeeds."
**CONFIRMED.** RFA, Payment Design: "a participant will receive a percentage of the reduction in
expenditures, or savings … calculated from requests that did not result in a paid claim (i.e.,
non-affirmations not followed by an affirmed resubmission or a successfully appealed claim denial)";
"In the event that a provider/supplier performs and bills for a non-affirmed item or service and
successfully appeals the denial of the associated claim, the model payment associated with that record
will be clawed back from the participant." Participant Guide §2.5 (Bates 00080–81) restates it. The
Office of the Actuary memo puts the sharing rate at 10–20% (00042).
- https://www.cms.gov/priorities/innovation/files/wiser-model-rfa.pdf
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 6. "CMS's own actuaries wrote, before launch, that vendors 'will have an incentive to deny as many claims as possible.'"
**CONFIRMED.** Office of the Actuary memorandum, 2025-06-23, from Shelby Cimino and John Shatto (Bates
00039–46), "Participant incentives" (00045): "The participants are paid based on the claims denied.
The ICIP mentions a quality adjustment and while the determination of this adjustment has not yet been
fully specified, it appears as though it would not significantly change the portion of savings the
participants will receive. As a result, model participants will have an incentive to deny as many
claims as possible." The same page: "it would be difficult for participants to recoup their costs
through the shared savings payments." On air both sentences travel together; the memo is an estimate
written before the quality methodology was finalised.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 7. "The actuaries assumed about five percent of decisions would be appealed."
**CONFIRMED.** OACT memo (00041): level-1 appeals "for PY1 varies from 2.5 percent to 7.5 percent from
the low to the high scenario, with a middle estimate of 5.0 percent, based on the KFF study"; ~30%
escalate at each further level. This is a share of all claims in the model, not of denials.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 8. "The worst possible quality score costs a vendor ten percent of its fee — and in the launch period the score measured whether data was filed on time, not whether decisions were right."
**CONFIRMED.** Data Reporting Guide v3.0, 2026-03-16 (Bates 00098–99): Table 3 — AQS 85–100% →
multiplier 100%; 60–84% → 95%; below 60% → 90%. "In PP1, the basis for scoring the WISeR quality
measures will be pay-for-reporting … Later in Performance Year (PY) 1, CMS anticipates scoring the
quality measures based on performance." Measures: WISeR-1 timeliness (9 points), WISeR-2 accuracy
(16 points). EFF's "only 5–10%" is this table.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 9. "CMS audits about 120 decisions per service per quarter and rates a vendor 'high' at 90 percent consistency."
**CONFIRMED.** Data Reporting Guide (00099–100): quarterly audit, NCQA "8 and 30" sampling,
"each participant can expect about 120 records to be selected for each Select Item or Service being
audited in a given quarter"; Table 4 — High 90–100%, Medium 60–89%, Low under 60%.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 10. "One vendor auto-approved every request for its first weeks because the go-live date could not move."
**CONFIRMED.** Innovaccer's letter (Bates 00217): "we will proceed with development to implement
auto-affirmation capabilities for all WISeR Prior Authorization Requests and Prepay Claims by January
5, 2026 … Given CMS's decision not to delay the model start date, auto-affirming is the only path
available that avoids creating a backlog … We expect to move out of our phased capability approach
within 45-60 days of going live." Stated as the vendor's own account of its plan; the record read does
not show the date full review began.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 11. "In Arizona and Washington, the two vendors had decided 20,397 requests: 71 percent approved, 29 percent denied — and one vendor, Virtix, denied 53 percent of what it saw."
**CONFIRMED.** Noridian Jurisdiction F weekly report (Bates 00322–323): "Total decisions: 20,397
Affirm: 14,453 (71%) Non-Affirm: 5,944 (29%) … Zyter (AZ) demonstrates a strong affirm trend (11,590
Affirm; 81%) … Virtix (WA) shows a higher proportion of Non-Affirm outcomes (3,233 Non-Affirm; 53%), a
trend that has remained and warrants continued monitoring." The report is undated on its face; it
follows the February year-to-date report in the release. Read from an OCR'd scan; the figures are
internally consistent (14,453 + 5,944 = 20,397; 3,233 / 6,096 = 53%).
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 12. "Two companies denied more than 20,000 requests in the first three months." (EFF's summary)
**CORRECTED.** EFF's article says "Two companies alone denied over 20,000 prior authorization requests
in the first 3 months of the program." The only figure of that scale in the 443 released pages is
20,397 total decisions by Zyter and Virtix, of which 5,944 were non-affirmations (entry 11). No page
in the release supports 20,000 denials. The show uses the page, not the summary.
- https://www.eff.org/deeplinks/2026/09/new-records-reveal-problems-medicares-ai-prior-authorization-experiment
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 13. "At the end of March one request had waited 83 days for a decision."
**CONFIRMED.** Novitas status as of 2026-03-30 (Bates 00234): "there are 123 Prior Auth requests
(PARs) pending that are aged 3 days or older. The oldest case is 83 days old" (Genzeon); pre-payment
review claims aged 46–56 days across Genzeon, Cohere and Humata. CMS's public commitment is a 72-hour
response; the FAQ gives 2 days for expedited requests.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 14. "The record's one caught error was reported two ways: first as the software misapplying coverage criteria, then as one physician reviewer."
**CONFIRMED — both accounts are in the record; the show states both and attributes no motive.**
Noridian's note of a 2026-02-06 provider call (Bates 00243): "Zyter's clinical lead indicated their
software may have been incorrectly applying LCD criteria within their AI solution, potentially leading
to inappropriate non-affirmations." Zyter's reply forwarded by CMMI on 2026-02-12 (00240): "This was
not a software issue. The platform does not autonomously issue non-affirmations. Instead, we identified
variability in the application of coverage criteria by one physician reviewer. Once identified, we
reviewed the impacted cases and implemented targeted retraining." Noridian also recorded that "there
did not appear to be a clear escalation or remediation pathway for providers when an error originates
from the model participant versus representing a true medical review disagreement."
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 15. "The released records contain no count of appeals or reversals."
**CONFIRMED, as a statement about the 443 pages read.** The Data Reporting Guide defines the fields
(outcome, dismissal reason, P2P requested/provided); no status report in the release reports an appeal,
peer-to-peer or reversal count. EFF's summary reports a Corrective Action Plan for Virtix and provider
statements of patient harm; neither appears in the combined-records PDF and both are attributed to EFF
on air, or not used.
- https://www.eff.org/files/2026/09/07/combined_records_-_2nd_interim_release.pdf

## 16. "H.R. 10210, the Doctors Not AI Act, was introduced on 1 September 2026 and would require a licensed professional to make any clinical denial and bar deferring to an AI's output."
**CONFIRMED.** Introduced text: an adverse benefit determination involving clinical judgment "is made
only by a licensed health care professional who is acting within the scope of the professional's
license and who has training and experience in the provision of the health care item or service …";
"is not issued by an artificial intelligence system and is not dictated or determined by the output of
such system"; the professional "shall not treat any output of an artificial intelligence system as
presumptively valid or defer to such output in lieu of independent clinical judgment." Notices must
state that AI was used, describe its role, and name the professional and their licence. Introduced
2026-09-01 by Rep. Landsman with Carter, Schrier and Barrett. A bill, not law; no hearing.
- https://www.govinfo.gov/bulkdata/BILLS/119/2/hr/BILLS-119hr10210ih.xml

## 17. "California's SB 1120 says an AI tool 'shall not deny, delay, or modify' care on medical necessity."
**CONFIRMED.** Chapter 879 of 2024 (approved 2024-09-28; operative 2025-01-01): Health and Safety Code
§1367.01(k)(2) and Insurance Code §10123.135(j)(2) — "The artificial intelligence, algorithm, or other
software tool shall not deny, delay, or modify health care services based, in whole or in part, on
medical necessity"; a medical-necessity determination "shall be made only by a licensed physician or a
licensed health care professional competent to evaluate the specific clinical issues involved."
- https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB1120

## THE APPEAL RECORD

## 18. "Medicare Advantage plans overturned three in four of their own denials on appeal — and about one denial in a hundred was appealed."
**CONFIRMED.** HHS-OIG OEI-09-16-00410 (2018): "MAOs overturned 75 percent of their own denials during
2014-16, overturning approximately 216,000 denials each year"; "beneficiaries and providers appealed
only 1 percent of denials." On screen: 2014–16; first-level appeal is the plan reviewing itself.
- https://oig.hhs.gov/reports/all/2018/medicare-advantage-appeal-outcomes-and-audit-findings-raise-concerns-about-service-and-payment-denials/

## 19. "In 2024 plans overturned 95 percent of appealed nursing-home denials — 97 percent of those issued by naviHealth — and 18 percent of denials were appealed."
**CONFIRMED.** HHS-OIG OEI-09-24-00331, issued 2026-06-08, June 2024 data: "When SNF denials were
appealed, MAOs overturned 95 percent in favor of the enrollee"; "MAOs later overturned 97 percent of SNF
denials issued by naviHealth when enrollees appealed"; "Enrollees and their providers appealed 18
percent of SNF denials." Skilled-nursing admissions only, one month.
- https://oig.hhs.gov/reports/all/2026/medicare-advantage-organizations-overturned-nearly-all-appealed-prior-authorization-denials-for-skilled-nursing-facility-admission-raising-concerns-about-initial-denials/

## 20. "Across all Medicare Advantage prior authorizations in 2024: nearly 53 million decisions, 7.7 percent denied, 11.5 percent of denials appealed, 80.7 percent of appeals overturned."
**CONFIRMED.** KFF, 2026-01-28, analysing CMS data: 52.8 million determinations; 7.7% fully or
partially denied; 11.5% of denials appealed; 80.7% of appeals partially or fully overturned. KFF's
analysis of CMS filings, not CMS's own statement — cited as KFF on screen.
- https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/

## 21. "On the ACA marketplace in 2024 insurers denied 19 percent of in-network claims; under one percent of denials were appealed; insurers reversed about a third of those; and the independent-review overturn rate cannot be computed from the public data."
**CONFIRMED.** KFF: 19% of in-network claims denied (~85 million); consumers appealed at least 262,982
(<1% of denials); insurers upheld 165,863 (66%) on internal appeal; at least 5,881 external appeals;
KFF states the external overturn rate cannot be calculated because CMS suppresses counts below 10.
HealthCare.gov plans only. Three denominators — claims, denials, appeals — never merged on air.
- https://www.kff.org/patient-consumer-protections/claims-denials-and-appeals-in-aca-marketplace-plans-in-2024/

## 22. "Represented disability claimants were allowed benefits at nearly three times the rate of the unrepresented."
**CONFIRMED, with a precision note.** GAO-18-37: at ALJ hearings, FY2007–15, claimants with a
representative were allowed at nearly three times the rate of those without, after controlling for
case and judge characteristics. An association — GAO's word — not a causal effect. SSA disability, not
health claims.
- https://www.gao.gov/products/gao-18-37

## 23. "Five appellants filed half of all Medicare judge-level appeals in one quarter."
**CONFIRMED.** GAO-16-366: four DMEPOS suppliers and one state Medicaid agency accounted for 51% of
appeals at the ALJ level in the first quarter of fiscal 2015, as reported by OMHA to GAO. One quarter,
one level; an illustration, not an ongoing mix.
- https://www.gao.gov/assets/gao-16-366.pdf

## 24. "The nH Predict case says 0.2 percent of denials were appealed and 90 percent of appeals were won." (scout brief)
**CORRECTED.** In the original complaint (2023-11-14) the 0.2% figure is footnoted to a KFF brief on
ACA marketplace plans in 2021 — not Medicare Advantage and not nH Predict — and the "over 90 percent"
figure is pled "upon information and belief" with no citation. Neither is a measurement of nH Predict.
The brief now uses OIG's measured figures (entries 18–19) and describes the complaint's numbers as a
marketplace analogy and an allegation. The amended complaint and the 2025 dismissal order were read
only through secondary reports.
- https://www.classaction.org/media/the-estate-of-gene-b-lokken-et-al-v-unitedhealth-group-inc-et-al.pdf

## BANDS AS DEPLOYED

## 25. "Lemonade decides and pays about 55 percent of claims with no human involved."
**CONFIRMED.** Form 10-K for the year ended 2025-12-31: roughly 55% of claims handled end-to-end
without human touch. Distinct from the ~96% intake-automation figure the company also publishes.
- https://www.sec.gov/Archives/edgar/data/1691421/000169142126000016/lmnd-20251231.htm

## 26. "Medicaid's automated renewals send a case to a person when the data runs out, not when a score is low; ASPE models about 92 percent of thin-data renewals as correct."
**CONFIRMED, with a precision note.** ASPE's ex parte data point: the case leaves the automated track
when the state's sources return no verifiable income; ASPE models 92.1% correct under the 100% FPL
strategy — a simulation from 2014–16 SIPP data extrapolated to 2024 enrolment, never "CMS measured."
- https://aspe.hhs.gov/sites/default/files/documents/d1c68327569498e86e98764e536b74f4/ex-parte-renewal-data-point.pdf

## 27. "Michigan's unemployment system had no rule sending cases to a person — only random audits — and 63 percent of those audited had not documented their work search."
**CONFIRMED.** Michigan Office of the Auditor General, performance audit of MiDAS: no automated trigger
routed ongoing-eligibility compliance to a human beyond DOL-mandated random audits; in April 2015, 63%
of randomly audited claimants had not submitted sufficient work-search documentation. Unemployment
insurance, not Medicaid; a documentation failure, not an error rate.
- https://audgen.michigan.gov/finalpdfs/15_16/r641059315.pdf

## 28. "Michigan's system was wrong 93 percent of the time."
**APPROXIMATE.** A widely reported figure whose primary source was not located; the Auditor General
audit read for this episode puts fraud determinations out of its scope. On air only as "reported", with
that caveat, and never as a precise error rate.
- https://www.govtech.com/data/Michigan-Integrated-Data-Automated-System-Experiences-93-Percent-Error-Rate-During-Nearly-Two-Years-of-Operation.html

## THE FAILURES AND THE LITERATURE

## 29. "Cigna's medical directors denied 300,000 requests in two months, at 1.2 seconds each, without opening a file."
**CONFIRMED as reporting; not a court finding.** ProPublica and The Capitol Forum reported the figures
from internal documents; the E.D. Cal. court has recorded the allegation and, on 2025-03-31, dismissed
three named plaintiffs for lack of standing while letting the fiduciary-duty claim proceed. On air:
"ProPublica reported" and "plaintiffs allege" — never "the court found."
- https://www.propublica.org/article/cigna-pxdx-medical-health-insurance-rejection-claims
- https://insurancenewsnet.com/innarticle/california-judge-gives-cigna-a-partial-win-in-improper-claim-denial-lawsuit

## 30. "At Earnest, underwriters could override the model with no written policy on how."
**CONFIRMED as the assurance of discontinuance states it.** The Massachusetts AG's AOD (2025-07-10)
records that written policy required a senior credit officer or committee to approve exceptions, but
until 2018 underwriters could unilaterally override; Earnest had a list of factors but no policy on
how to weigh them; manual adjustments could be outcome-determinative. An assurance, not a judgment;
the AOD does not tie the overrides to racial disparity and the show does not either.
- https://www.mass.gov/doc/earnest-aod/download

## 31. "Reviewers shown a model's output first anchor on it; an explanation attached to a wrong output makes clinicians more wrong."
**CONFIRMED, lab evidence.** Dratsch et al. (Radiology 2023): radiologists shown a purported AI
BI-RADS suggestion before rating lost accuracy sharply when the suggestion was wrong. Jacobs et al.
(Translational Psychiatry 2021): 220 clinicians gained nothing on average from ML antidepressant
recommendations because incorrect ones hurt as much as correct ones helped. Controlled studies, not
audits of a deployed claims reviewer.
- https://pubs.rsna.org/doi/10.1148/radiol.222176
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7862671/

## 32. "A post-hoc explanation of a black box is not guaranteed to be the model's actual reason."
**CONFIRMED, as argument and demonstration.** Rudin (2019) argues a faithful explanation of a black
box would be the model itself; Slack et al. (2020) built a classifier that stays biased on real data
while fooling LIME and SHAP. Stated on air as "a logged reason is a claim, not a proof" — not as
"every AI explanation is false."
- https://arxiv.org/abs/1811.10154
- https://arxiv.org/abs/1911.02508

## 33. "Neither Lakkaraju's selective-labels paper nor Ensign's feedback-loop paper studies a reviewer-correction loop."
**CONFIRMED.** Lakkaraju et al. (2017) frame selective labels as a retrospective evaluation problem
and leave retraining on selectively labelled data as future work; Ensign et al. (2018) define the
runaway loop as a model retraining on its own dispatch-generated data. Neither is cited on air as
evidence that a reviewer loop works or fails.
- https://cs.stanford.edu/~jure/pubs/contraction-kdd17.pdf
- https://arxiv.org/pdf/1706.09847

## 34. "Optum's algorithm treated Black patients at the same risk score as less sick than white patients; it was fixed by retraining on a different target."
**APPROXIMATE.** The finding is Obermeyer et al., Science 2019, read for this episode only through a
news summary and the NY DFS/DOH letter to UnitedHealth. Direction and mechanism are well established;
the paper itself was not opened, so no figure from it is stated on air.
- https://www.dfs.ny.gov/reports-and-publications/comment-letters/dfs-doh-joint-letter-uhgi-20191025
- https://www.sciencenews.org/article/bias-common-health-care-algorithm-hurts-black-patients

## 35. "Any deployed system has narrowed its human-review band over time from reviewer feedback."
**UNRESOLVED.** None found in any vertical; every automation rate held is a single snapshot. Absence,
not a negative finding. The episode says the mechanism is asserted, not demonstrated — and does not say
it has been shown to fail.

## 36. "Colorado's ADMT rule places 'meaningful human involvement' at section 5.A.6."
**UNRESOLVED.** Confirmed only against the November 2023 adoption; the October 2025 amendment
renumbered an adjacent clause and the currently effective text was not re-pulled. The rule the finder
read is the life-insurer regulation. No section number is cited on air.
- https://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=11153

## 37. "Credit engines auto-approve X percent and refer Y percent."
**UNRESOLVED.** No published band shares for Desktop Underwriter, Loan Product Advisor or any bank
engine were found. No credit-band figure is stated on air.

---

## Corrections applied to source
- Scout brief: "the record's own numbers — ~0.2% of denials appealed, ~90% of appeals won" (Lokken) →
  replaced in the brief by OIG's 1% / 75% (2014–16) and 18% / 95% (June 2024), with the complaint's
  figures described as a marketplace analogy and an uncited allegation (entry 24).
- Scout brief, carrying EFF: "two vendors alone non-affirmed 20,000+ requests in the first three
  months" → replaced by the status report's 20,397 decisions / 5,944 non-affirmations / 53% for
  Virtix (entries 11–12).
- Scout brief: "whether the human review actually reviews" left open → answered from the documents:
  the clinician's task is to confirm, on the cases the machine routed (entries 3–4).
- Scout brief named the WISeR vendors as Optum/naviHealth, EviCore and Cohere → the release names
  Zyter (AZ), Virtix (WA), Innovaccer (OH), Genzeon, Cohere Health and Humata; Optum and EviCore are
  not WISeR participants in any page read. No vendor is named on air except as the record names it.
- The design sections' claim that green is "how real deployers work" → qualified: the deployed systems
  found route on categorical gates, not confidence scores (entries 26–27).

## Fairness audit
- Gold's side rests on holdings and enacted text; green's on inference from adjacent systems. The
  brief carries this asymmetry explicitly so the script does not give the two "documented failure"
  segments equal weight they have not earned.
- Named companies in live litigation (UnitedHealth/naviHealth, Cigna, Zyter, Virtix): filings,
  holdings and the record's own words only; no motive attributed. The Zyter/Noridian discrepancy is
  stated as two accounts in the record, not as a finding about either party.
- The −100…+100 / ±50 band framing is labelled illustrative on screen; no deployed threshold is
  claimed.
- Identity↔stance rotation: to be set at scripting per the cast fairness policy; the engineering
  design must not land on the same face it would be expected to.

## Open questions this episode could not settle
- Does any deployed system narrow its review band from reviewer feedback and publish the before/after?
- What is the independent (external) overturn rate for automated health denials nationally?
- What share of applications land in DU/LPA's approve / refer / decline categories?
- Is WISeR's reviewing clinician employed by or paid through the vendor — the Participation Agreement
  would say and is not in the release.
- Has Humana answered the PSI's 2026-07-14 letter?
- Where is the MiDAS 93% figure's primary?
