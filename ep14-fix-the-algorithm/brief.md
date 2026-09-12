# Research brief — How Do You Fix an Algorithm That Decides About You?

_The full research behind the episode. This is the "full research" we link below the video._

**Episode type: DESIGN episode — the first.** ep12 (*Should AI Have to Explain Every Decision It
Makes?*) ended where every 2026 instrument ended: not on explanation but on **contestability** — who
reviews, can they reverse it, what happens when the reason can't be given. Both sides of ep12 wanted a
decision that can be reversed. This episode takes that as its premise — *fine, build the thing that can
be reversed* — and puts two DESIGNS through cross-examination instead of two positions. Connected, not
dependent: ep12 is re-established in ~30 seconds and this episode stands alone.

The verdict frame for this type, ruled 2026-09-09: **the design that survives both teams' objections —
and the dial the viewer still has to set.** No winner. The judge does not set a dial.

---

## The question

Two designs for a reversible automated decision system — a health claim, a credit application, a
benefits renewal — that share one part which does not blend:

**GREEN — "Automate the edges, review the middle."** The model scores each decision. Above a threshold
it auto-approves; below one it auto-denies; the middle band goes to a human reviewer. Reasons are
logged and tagged to the record. The reviewer marks the model right or wrong, the model learns, and
the human-review band narrows as the model earns it. Goal: spend human review only where it still
buys accuracy.

**GOLD — "The contest is the training data."** The same loop with the human on the other side of the
decision. The correction signal comes from the *affected person* — appeals, independent review,
reversal — not the deployer's reviewer. Reasons must be contestable and tied to the person's own
evidence. Outcomes are audited by subgroup and error rates published. The reviewer is independent of
the deployer's objective and does not see the model's score first.

The two dials as briefed: **BAND WIDTH** (how much is automated vs reviewed) and **WHO OWNS THE
CORRECTION SIGNAL** (the deployer's reviewer vs the affected person's contest).

---

## Why now

**The US government is running green's design at national scale on Medicare, with gold's constraints
written into the contract — and the first records of what happened inside it came out on 2026-09-08.**

| date | event |
|---|---|
| **2026-01-01** | CMS's **WISeR Model** (Wasteful and Inappropriate Service Reduction) begins in six states — Arizona, New Jersey, Ohio, Oklahoma, Texas, Washington — running to 2031-12-31. Technology vendors ("model participants") screen prior-authorization requests for a list of Part B services (skin substitutes, nerve stimulators, knee arthroscopy for osteoarthritis, epidural steroid injections and others). By rule: technology **may only affirm**; every **non-affirmation must be reviewed by a human clinician**; vendors are paid a **share of the savings** from denied care; the payment is **recouped when an appeal succeeds**; a quarterly audit feeds a quality score. |
| **2026-03-24** | EFF sues CMS under FOIA for the model's records (*EFF v. CMS*). |
| **2026-09-08** | EFF publishes the second interim release — a 443-page combined PDF of CMS records plus provider feedback — with a summary. **We read the 443 pages** (see the section below); the summary and the pages do not agree on one headline figure. |
| **2026-09-01** | **H.R. 10210, the Doctors Not AI Act of 2026**, introduced (Landsman D-OH, with Carter R-GA, Schrier D-WA, Barrett R-MI). A licensed professional must make any adverse benefit determination involving clinical judgment; AI may support but the reviewer may not treat its output as presumptively valid; patients must be told AI was used and given the AI-generated information. Referred to committee, no hearing. |
| **2026-08-31 → 09-29** | NAIC exposes the **AI Risk Evaluation Supplement v5.0** for comment; v7.0 up for adoption at the Fall National Meeting 2026-11-14→17. The regulator's audit instrument, arriving the same autumn. |
| **2026-07-14** | Senate PSI (Blumenthal, Hawley) letters to UnitedHealthcare, Humana and CVS demanding AI inventories, reviewer credentials, appeal and overturn statistics, and whether it remains policy that final adverse determinations cannot be made by AI. |
| live | *Estate of Lokken v. UnitedHealth* (D. Minn.), the nH Predict class action — discovery ordered 2026-03; the case's two famous numbers turn out not to be measurements (below). |

Peg goes in the **description**; WISeR goes in the **script as a design** — the model, the states, the
rules — never a vendor executive or a sponsor. Never in the title or thumbnail.

---

## What the WISeR record actually says — primary read, 2026-09-10

The 443 pages EFF released (Bates `7002CMS00001`–`00443`) were read directly; 93 pages carry a text
layer and 350 are scans, which were OCR'd. The documents are CMS's own: the Innovation Center's
investment proposal (ICIP), an Office of the Actuary estimate, the Participant Guide v3.0, the Data
Reporting Guide v3.0, vendor readiness letters, and MAC weekly status reports for January–March 2026.
This is what the show would otherwise have taken from EFF's summary.

**The architecture — and why "does the clinician see the score first" answers itself.**
- ICIP §3C (Bates 00010): technology performs "initial decision of affirmation of the requests **or
  recommendation for further review by a practitioner**", with "negative determinations being made by
  clinicians".
- Participant Guide §1.7.2 (00057): "Before issuing a non-affirmation … the WISeR Participant must
  coordinate with its WISeR Clinician(s) or WISeR Clinical Reviewer(s) … to conduct a medical review of
  the request and **confirm** that it does not meet Medicare coverage criteria." The safeguards page
  (00080) uses the same verb: the clinician reviews "to confirm the request does not meet" criteria.
- No document requires the clinician to be blind to the machine's output, and none could: the
  clinician's entire caseload **is** the set the machine declined to affirm. The routing is the
  recommendation. WISeR's human review is structurally green's reviewer — a person confirming the
  machine's lean on the cases the machine selected — wearing gold's label ("a human on every denial").
- The reviewer is the vendor's. The RFA (p.15) requires "dedicated clinicians with relevant expertise"
  as a participant capability; the ICIP research questions ask "to what extent was payment a driving
  factor?" (00024). Nothing places the clinician outside the entity paid per non-affirmation.

**CMS's own actuaries said the fee bends the band — before launch.** Office of the Actuary memorandum,
2025-06-23 (Cimino, Shatto; Bates 00039–46):
- Medicare spending on the covered codes in the six states was "roughly $1.2 billion" in 2024 (00040).
- Level-1 appeals are assumed at **2.5–7.5% of all claims in the model, middle 5%, "based on the KFF
  study"**, with ~30% escalating at each further level (00041).
- Vendor sharing rate **10–20%** of savings; the quality adjustment assumed at a 5% discount (00042).
- "The participants are paid based on the claims denied … it appears as though [the quality adjustment]
  would not significantly change the portion of savings the participants will receive. **As a result,
  model participants will have an incentive to deny as many claims as possible.**" (00045)
- And in the same memo: "it would be difficult for participants to recoup their costs through the
  shared savings payments" (00045) — the actuaries doubted the fee would cover the vendors' costs.

**The quality lever is small and, in the launch period, was not measuring accuracy at all.** Data
Reporting Guide v3.0, 2026-03-16 (00094–116):
- Two measures: WISeR-1 timeliness (9 points) and WISeR-2 accuracy (16 points). Quality multiplier:
  AQS 85–100% → 100% of payment; 60–84% → 95%; below 60% → **90%** (00098–99). The worst possible
  quality score costs a vendor one-tenth of its fee. EFF's "5–10%" is this table.
- **In Performance Period 1 both measures are pay-for-reporting**: full points for submitting data on
  time, regardless of what the data show. Scoring on performance "later in Performance Year 1" (00098).
- The accuracy audit: quarterly, NCQA's "8 and 30" sampling, about 120 records per service per quarter,
  stratified by outcome; "High" accuracy is 90–100% consistent with coverage criteria (00099–100).

**The band was set at 100% approve on day one — for operational reasons.** Innovaccer's readiness
letter (00217): "we will proceed with development to implement **auto-affirmation capabilities for all
WISeR Prior Authorization Requests and Prepay Claims** by January 5, 2026 … Given CMS's decision not to
delay the model start date, **auto-affirming is the only path available that avoids creating a
backlog** … We expect to move out of our phased capability approach within 45-60 days of going live."
The letter itself lists the consequences: appeals when later determinations differ from the
auto-approved period, and provider confusion. Band width was not a policy choice here; it was a
go-live date.

**The numbers, from the MAC status reports (Noridian, Jurisdiction F — Zyter in Arizona, Virtix in
Washington):**
- Cumulative to the report on 00322–323: UTNs sent 19,833; **decisions 20,397; affirmed 14,453 (71%);
  non-affirmed 5,944 (29%)**. Zyter: 11,590 affirmed (81%). **Virtix: 3,233 non-affirmed (53%)** — "a
  trend that has remained and warrants continued monitoring and targeted provider education efforts."
- Earlier, February year-to-date (00370): 9,628 cases received, 47.6% completed; of completed, 48.1%
  affirmed / 51.9% non-affirmed; Virtix 519 affirmed vs 1,349 non-affirmed.
- ⚠ **EFF's summary says "two companies alone denied over 20,000 prior authorization requests in the
  first 3 months."** The only 20,000-scale figure in the release is **20,397 total decisions**, of which
  5,944 were non-affirmations. No page in the 443 supports 20,000 denials. The show uses the page.
- Novitas jurisdictions (Genzeon, Cohere Health, Humata), as of 2026-03-30 (00234): 123 prior-auth
  requests pending aged 3 days or more, **the oldest 83 days** (Genzeon); pre-payment review claims aged
  46–56 days across the three vendors. The 72-hour target is CMS's public commitment; these are the
  misses.

**The same error, two accounts, six days apart — the record's one documented correction event.**
- Noridian's note of a 2026-02-06 call with an Arizona provider (00243): "Zyter's clinical lead
  indicated **their software may have been incorrectly applying LCD criteria within their AI
  solution**, potentially leading to inappropriate non-affirmations." Noridian also recorded: "There did
  not appear to be a clear escalation or remediation pathway for providers when an error originates
  from the model participant versus representing a true medical review disagreement requiring
  peer-to-peer."
- Zyter's reply to CMMI, 2026-02-12 (00240): "This was not a software issue. **The platform does not
  autonomously issue non-affirmations.** Instead, we identified **variability in the application of
  coverage criteria by one physician reviewer.** Once identified, we reviewed the impacted cases and
  implemented targeted retraining."
- Filings-and-record rule: both accounts are stated as the record has them; the show attributes no
  motive to either. What the episode may say is what the record shows: the error was **surfaced by the
  affected side** (a provider's complaint routed through the MAC), not by the audit or the quality
  score; the vendor's own account locates the error in the **human reviewer**, i.e. the safeguard; and
  the remedy was retraining the human, not the model.

**Not in the 443 pages:** any count of appeals, peer-to-peer reviews or reversals of non-affirmations —
the Data Reporting Guide defines the fields (00104, 00119) and the status reports never report them;
the Corrective Action Plan EFF says Virtix was required to submit; and the provider-harm quotations EFF
publishes ("patients calling our offices crying in pain"), which appear to come from a separate
feedback-survey document that was not obtainable. Those three stay attributed to EFF, unverified.

---

## Settled (not the debate)

- **The correction signal is loud when pulled and almost never pulled.** Medicare Advantage plans
  overturned **75%** of their own denials at first-level appeal in 2014–16 (~216,000 reversals a year)
  while beneficiaries and providers appealed **~1%** of denials — HHS-OIG, 2018 (verified). ACA
  marketplace 2024: insurers denied **19%** of in-network claims (~85 million); consumers appealed
  **under 1%** (at least 262,982); insurers upheld 66% on internal appeal, so **~34%** were reversed by
  the insurer's own staff; at least 5,881 went to external review — and the external overturn rate
  **cannot be computed** from the public data, because CMS suppresses small cells — KFF (verified).
- **Who appeals is not who was decided against.** Represented Social Security disability claimants were
  allowed at nearly **3×** the unrepresented rate after GAO controlled for case and judge
  characteristics (GAO-18-37, verified — an association, not a causal effect). Four DMEPOS suppliers and
  one state Medicaid agency filed **51%** of Medicare ALJ appeals in Q1 FY2015 (GAO-16-366, verified —
  one quarter, one level).
- **Real deployed systems route to a human on a categorical gate, not a confidence score.** Federal
  Medicaid ex parte renewal drops to a caseworker when the state's data sources return **nothing
  verifiable** — a data gap (ASPE, verified; ASPE *models* ~92% of thin-data renewals correct, from
  2014–16 survey data — a simulation, never "CMS measured"). Michigan's MiDAS had **no** routing trigger
  for ongoing eligibility — only federally mandated random audits, in which 63% of the audited had not
  documented work search (Auditor General, verified; unemployment insurance, not Medicaid). Fannie Mae's
  Desktop Underwriter routes on named categories (Approve/Eligible, Refer with Caution) — finder-read.
- **The only deployer-published auto-adjudication rate is Lemonade's: ~55%** of claims decided and paid
  end-to-end with no human, per its 2025 10-K (verified). Not the ~96% intake-automation figure it also
  publishes.
- **Every 2024–26 US health instrument converges on one asymmetric rule: a machine may approve, only a
  licensed human may deny.** WISeR (read directly); California SB 1120, Ch. 879 of 2024 — "the
  artificial intelligence, algorithm, or other software tool shall not deny, delay, or modify health
  care services based, in whole or in part, on medical necessity" (verified); H.R. 10210 — an adverse
  determination involving clinical judgment "is not issued by an artificial intelligence system and is
  not dictated or determined by the output of such system", and the professional "shall not treat any
  output of an artificial intelligence system as presumptively valid" (verified); Arizona HB 2175
  (finder-read). None contemplates auto-deny; none requires review of an auto-approval.
- **Lokken's two famous numbers are not measurements.** In the original complaint the "~0.2% appeal"
  figure is footnoted to a KFF brief on **ACA marketplace** plans in 2021, not Medicare Advantage; the
  "~90% overturned" figure is pled "upon information and belief" with no citation (the complaint text,
  verified). The measured substitutes are OIG's 1% / 75% above; OIG's 2026 skilled-nursing report
  (OEI-09-24-00331, June 2024 data: **95%** of appealed SNF denials overturned, **97%** for those issued
  by naviHealth — the nH Predict operator — with **18%** appealed; verified); and KFF's 2024 tally
  (52.8 million MA prior-auth determinations, **7.7%** denied, **11.5%** of denials appealed, **80.7%**
  of appeals overturned; verified).
- **A human reviewer shown the model's output first anchors on it; an explanation attached to a wrong
  output makes it more persuasive** — radiologists shown a purported AI suggestion before reading lost
  accuracy sharply when it was wrong; clinicians choosing antidepressants gained nothing on average from
  ML recommendations because incorrect ones hurt as much as correct ones helped (finder-read, primary
  papers).
- **A logged reason is a claim, not a proof.** Rudin: a post-hoc explanation of a black box cannot be
  fully faithful; Slack et al. built a classifier that stays biased while fooling LIME and SHAP
  (finder-read, primary papers). CFPB's 2023 circular and the CJEU's *Dun & Bradstreet* ruling demand
  the actual reason in the person's terms (finder-read).

---

## Contested (the real fight)

**GREEN — Automate the edges, review the middle.** The deployer sees every case, including the 82–99%
that are never appealed, so only the deployer's reviewer can label the whole distribution; the affected
person's contest is a 1–18% sample tilted toward providers with billing departments (GAO's 51%) and
claimants with lawyers (GAO's 3×). Lemonade runs 55% of claims straight through and reports no
catastrophe in its own filings; ASPE's model puts thin-data renewals at ~92% correct. A known, quantified
error rate is a manageable one — and the deployer's reviewer is not a rubber stamp: the OIG's 75% is the
plan reversing *itself* when asked. Gold's loop learns from the angriest and the best-resourced; green's
loop can learn from everyone.

**GOLD — The contest is the training data.** The deployer's reviewer is where the objective leaks in.
CMS's own actuaries wrote that WISeR vendors "will have an incentive to deny as many claims as
possible"; Cigna's medical directors signed 300,000 denials in two months at 1.2 seconds each without
opening a file (ProPublica, secondary); at Earnest, underwriters overrode the model with no written
policy until 2018 (the AG's assurance of discontinuance, finder-read); Zyter's own account puts the
WISeR error in "one physician reviewer". A signature at 60,000 a month is automation with a name on it.
The affected person's contest is the only signal not shaped by the deployer's objective, it reverses
75–95% of what it touches, and the subgroup harms — Optum's cost-proxy algorithm treating Black patients
at the same risk score as less sick — were invisible per case and visible only in aggregate.

**The holes each team gets to poke — earned, not asserted:**

- *Gold at green:* the auto-deny band has **no ground truth** — a denied claimant who never appeals
  never generates a "wrong" label, so the band looks more accurate every year (selective labels). The
  reviewer who corrects the model has seen its lean first (anchoring). The logged reason may be a
  story (faithfulness). And the record contains **no deployed system anywhere that has narrowed its
  review band from reviewer feedback** — the mechanism is asserted, not demonstrated; the one trend line
  found runs the other way.
- *Green at gold:* gold's signal is **the same 1%**, only slower and costlier; the audit-by-subgroup leg
  that would make a sparse signal work **exists nowhere** — Colorado's rule is documentation to the
  Division on request, NAIC v5.0 is an unadopted exposure draft; and Optum was fixed by the deployer
  retraining on a different target, not by a contest right. Reversal without a reason is a coin-flip
  with a human face.

**Is band width even a two-sided dial?** Green's design has an auto-deny band. Every 2026 US health
instrument forbids one. So the live contest is whether auto-*deny* is ever legitimate (credit says yes,
with an adverse-action reason; health says no) — and whether auto-*approve* needs any review at all
(WISeR: none; the AHIP/BCBSA pledge: 80% of electronic requests answered in real time by 2027).
Neither design as briefed addresses the asymmetry.

**Whose reason?** Green logs the model's reason with the record; gold demands a reason tied to the
person's own evidence. The faithfulness literature threatens both equally: a post-hoc reason from a
black box is not guaranteed to be the model's reason, and neither design requires a model that is
interpretable by construction.

⚠ **Evidentiary asymmetry the script must not paper over.** Gold's side rests on litigated holdings and
enacted text (Robodebt's Royal Commission, the Hague's SyRI ruling, CJEU *SCHUFA* and *Dun & Bradstreet*,
DUAA s.80). Green's rests on inference from systems that only partly resemble its design (Lemonade, DU,
ASPE's model). Equal-length "documented failure" segments would misrepresent the record; the honest
version is that gold has case law and green has engineering practice nobody has published.

---

## The reframe

The shouting frames this as *who decides — the algorithm or a human*. The record says three things the
shouting misses.

1. **The decision is already asymmetric, and nobody is arguing about the half that matters most.**
   Every 2026 US health instrument and the industry's own pledge let a machine approve instantly and
   require a human only to deny. Band width is being set on the approve edge with no review at all
   while both designs spend their argument on the deny edge.
2. **The correction signal is not scarce because it is weak — it reverses 75–95% of what it touches.
   It is scarce because it is never pulled.** 1% of MA denials in 2014–16, under 1% of marketplace
   denials in 2024, 18% of SNF denials in 2026 — and the pullers are DMEPOS suppliers and represented
   claimants, not patients. A fight over who *owns* a signal that fires on 1% of decisions is a fight
   over the ownership of almost nothing.
3. **No real system routes on a confidence score, and no system in the record feeds any correction —
   from anyone — back into its next decision.** They route on a missing income record, a "Refer with
   Caution" code, a random audit, or a go-live date. Green's narrowing band and gold's
   contest-as-training-data are both proposals about a loop that does not yet exist anywhere. OIG's own
   remedy for the 75% was more oversight, not a feedback loop.

The scout brief's reframe — *a confidence threshold is a policy choice wearing a number* — survives as
a line; WISeR's day-one 100%-approve band and its 53%-deny vendor are the two ends of it. But the
research earned a sharper one: **the dial nobody brought is who bears the cost of asking.**

---

## Both sides quietly agree

Four things, and the record backs each. Auto-**approve** is fine — neither design puts a human on the
approve edge, and every live instrument agrees. A denial must be **reversible by someone other than the
model** — a decision with no review path (MiDAS for two years, Robodebt, SyRI) is the failure both are
built to prevent. The **reason has to be the real reason**, tied to the person's own data — green needs
it for its log, gold for its contest, the CFPB and the CJEU now require it, and the faithfulness
literature threatens both. And the buried one: **both designs assume the correction signal changes the
next decision, and both are silent on the denominator.** Whoever owns the signal, it currently reaches
1–18% of decisions. The loop must exist before its ownership matters.

---

## Verdict framing

"The design that survives both teams' objections — and the dial you still have to set." Candidates,
each to be *earned in the debate* and dropped if it is not:

- **Survives:** bands, yes — but the auto-deny band is the one with no ground truth, so it is the one
  that gets audited by outcome, by subgroup. Reasons tagged to the record, yes — but never shown to the
  reviewer before their own read, and tested for faithfulness. Two loops, not one: the deployer's review
  narrows the band; the contest loop can widen it (WISeR's claw-back is exactly this, on paper).
- **Fell:** "a human on every denial" as a safeguard in itself — PXDX signed 60,000 a month, WISeR's
  clinician confirms the machine's pick, and the record's one caught error was in the reviewer. "The
  band narrows as the model learns" — no exemplar. "Publish subgroup error rates" — no operating
  instance; the only regulator instrument is a draft.
- **The dials the viewer sets:** WHO OWNS THE SIGNAL (the one that does not blend). And — ruled
  2026-09-10, the judge **may name** a dial neither team brought if the debate earns it — **WHO BEARS THE
  COST OF ASKING**: whether a denial is *pulled* into review by the affected person (contest) or *pushed*
  into review by default (sampled independent review, random audit, self-reversal rate as an automatic
  re-review trigger; WISeR's every-non-affirmation rule is the push model with the wrong reviewer). The
  judge names it; the judge does not set it.

---

## Spoken-figure budget

Spend precision on screen, not on air. On air: "three in four", "about one in a hundred", "under one
percent", "more than half", "three times as often", "one vendor said no more often than yes".
On screen, exact and sourced: 75% · ~216,000/yr · ~1% (OIG 2018, 2014–16) · 19% · <1% · 66%/34% (KFF,
2024) · ~3× (GAO-18-37) · 51% (GAO-16-366, Q1 FY2015) · 55% (Lemonade 10-K, 2025) · 20,397 / 14,453 /
5,944 · 53% (Noridian JF report, 2026) · 83 days (Novitas, 2026-03-30) · 100/95/90% · 90–100% "High"
(CMS Data Reporting Guide v3.0) · 2.5–7.5%, 10–20% (CMS OACT, 2025-06-23).

Never spliced into one series: OIG 2014–16, GAO FY2007–15 / Q1 FY2015, KFF 2024, Lemonade 2025,
WISeR Jan–Mar 2026.

The −100…+100 / ±50 band framing is **illustrative** and must be labelled as such on screen; no
deployed system publishes a threshold.

---

## What was not established

- Whether any deployed system has narrowed its human-review band from reviewer feedback and published a
  before/after. None found; absence, not a negative finding.
- The independent (external) overturn rate for automated health denials — uncomputable from federal
  marketplace data; Pennsylvania's state programme reports ~48%, a different population.
- Credit's actual band shares — DU/LPA Approve/Refer/decline proportions are not published; HMDA AUS
  result codes could compute them and were not run.
- The MiDAS "93% false-fraud" figure's primary source — a press figure; the Auditor General audit read
  puts fraud determinations out of scope. Say "reported", never "found".
- Whether Colorado's currently effective ADMT rule still places "meaningful human involvement" at
  §5.A.6 after the October 2025 renumbering — confirmed only against the 2023 adoption.
- Lokken's amended complaint and the 2025 dismissal order — read only through secondaries.
- WISeR: any appeal, P2P or reversal count; the Virtix corrective action plan; the provider-harm reports.
  Attributed to EFF, unread.
