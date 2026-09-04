# Fact-check log — ep11-grid-costs

> ⛔ Nothing in this file is a research finding until it names a fetched source. Status is one of
> **CONFIRMED / CORRECTED / UNRESOLVED**.

## Peg hunt — rejected candidates      (run 2026-09-01, `peg-hunt` skill)

⛔ Recorded because *a peg with no rejects listed is an unaudited peg*. The 2026-08-27 miss happened
because a peg was chosen with nothing written down about what else was weighed, so there was no
visible gap where the real instrument should have been.

### Phase 1 — the blind sweep

Banned list (every proper noun in the internal scouting brief): data center(s), grid, moratorium, New
York, Hochul, EO 62, PJM, capacity auction, large-load tariff, ratepayer, hyperscale, Oklahoma
HB 2992, Tennessee SB 2128, Loudoun, H.R. 10102, Salinas, interconnection, Jevons, MW, kWh.

Federal Register API, `PRESDOCU`, 2026-08-04 → 2026-09-01, **zero topic vocabulary**: 22 documents,
ranked by nothing. Counterparty agency sweeps (FERC, DOE) over the same window. Then date-first
domain queries naming no entity from the brief.

✅ **Phase 1 exit test passed** — no Phase 1 query contained a banned term.

| candidate | date | age | why REJECTED (or kept) |
|---|---|---|---|
| ✅ **KEPT — Virginia SCC orders Dominion to require a mandatory contribution in aid of construction and directly assign transmission cost to direct-connect large loads; file within 90 days. Rider T-1 ~$1.5bn; revised rider effective 1 Sep 2026, residential increase $0.94/mo down from $2.90** | 2026-07-31 | 32 d | ⭐ Highest thesis fit available. The episode's literal question — what share does the large customer pay — decided by the regulator of the largest data-center market on earth, with a dollar figure and a live 90-day clock. |
| ✅ **KEPT — Kentucky PSC Case 2026-00115: Big Rivers / Kenergy / Justified DataPower (TeraWulf) 482 MW RESA approved**; 482 MW minimum take-or-pay, collateral 2× highest estimated monthly bill, annual capacity cost prepaid or fully collateralised, express finding of no cost/risk shift to other customers | 2026-08-21 | 11 d | ⭐ The scout brief's own proposed hero number is *"what share of a $X grid upgrade should a 500 MW customer pay?"* — Kentucky just answered it for a **482 MW** customer, on the record. |
| ✅ **KEPT (contrast, not peg) — NY Responsible Data Center Development Act S10642/A11560 still unsigned**; 60 legislators' letter 24 Aug 2026; pocket-veto deadline 31 Dec 2026 | 2026-06-04 / 08-24 | 8 d | It is "should we pause", not "who pays" — the scout brief's peg, and the weaker one. ⚠ This resolves the brief's standing instruction to re-check the bill's status. |
| ⛔ **EO 14421, "Declaring a National Emergency To Secure the United States Bulk-Power System"** (signed 2026-08-26, published 2026-08-31, FR `2026-17843`) — IEEPA/NEA prohibition on foreign-produced bulk-power system electric equipment; recites that *"the rapid growth of advanced manufacturing, data centers, artificial intelligence, and defense production has increased the Nation's dependence on abundant, reliable electricity"* | 2026-08-26 | 6 d | **Merely on-topic, not thesis-instantiating.** A *supply-chain security* instrument, not a *cost-allocation* one. Six days old and genuinely surfaced by the blind sweep — which is exactly why it is written down rather than silently dropped. ⚠ It has one real bearing: restricting foreign transformer and equipment supply raises the cost of the buildout being allocated, so it belongs in the brief as a **cost pressure**, never as the peg. |
| ⛔ H.R. 10102, Data Center Community Reinvestment Act (Salinas, D-OR) — federal tax on electricity consumed by large data centers | 2026-08-13 | 19 d | Introduction is not passage, and a single-party introduction cannot carry a peg. Datapoint only; inherited from the scout brief and **not re-verified here**. |
| ⛔ Rhode Island PUC $138m revenue plan effective 1 Sep 2026; Colorado PUC approves Xcel +$5/mo (4.77%) | Aug 2026 | days | Ordinary rate cases. Rising bills are the *backdrop*, not the argument — no data-center cost-allocation holding. |
| ⛔ PA PUC large-load tariff framework (30 Apr 2026); Oregon PUC approves PGE's large-load framework; Wisconsin PSC preliminary decision on We Energies' "Very Large Customer" rate structure (Apr 2026) | Apr 2026 | 4 mo | Right instrument, wrong recency — all outrun by Virginia and Kentucky. **Keep as evidence that the instrument is now widespread**, not as the peg. |
| ⛔ FERC "Launches Aggressive Targeted Action to Speed Large Load Integration" | undated in results | ? | ⚠ Date not established, so it stays out — do not cite until dated against `ferc.gov`. |

## ✅ BOTH BARRED FIGURES RESOLVED — and a premise of mine was wrong
### (deep-research run, 2026-09-01, 108 agents, 26 sources)

⛔ **CORRECTED — my claim that `scc.virginia.gov` DocketSearch PDFs are image-only scans was FALSE.**
I inferred it from one 5.4 MB PDF that `WebFetch` returned as JPEG streams, and stated it as a
property of the whole system. It is not: the **PUR-2026-00056 Final Order carries a text layer**, and
the run read it verbatim — *"Final Order (Case No. PUR-2026-00056, doc control 260750228, filed
07/31/2026 4:56 PM)"*. ★ The lesson is the standing one: one failed fetch is a fact about that fetch,
not about the archive.

- ✅ **CONFIRMED (PRIMARY) — Virginia SCC Case No. PUR-2026-00056**, Final Order 31 July 2026, read
  from the order itself. Directs Dominion to file an amended line extension policy requiring a
  mandatory CIAC **within 90 days**.
- ✅ **RESOLVED — the $0.94 conflict, in favour of the "SCC reduced it" reading**, from the order's
  own text: **$2.90/month was Dominion's projection for Rider T1 as filed; $0.94 is the post-order
  figure.** ⚠ But the framing is still constrained — the amended 12-CP allocation came from
  **Dominion's own rebuttal** with Staff and Consumer Counsel support, so *"the Commission overrode
  Dominion"* overreaches, and footnote 28 shows the reduction is not attributable to the
  reallocation alone. **Say "reduced", never "overrode".**

### ⛔ CORRECTIONS THE RUN FORCED ON THE SCOUT BRIEF — all load-bearing

1. **`$329.17/MW-day` is an administrative price CAP the 2026/27 auction bound against, NOT a
   market-clearing price.** The scout brief uses it as evidence of data-center-driven price
   increases. It cannot bear that weight — a bound price measures the cap, not the demand.
2. **The `$1.5bn` was never in play.** Rider T1's total revenue requirement is **$1,538,974,037** and
   was **uncontested**, statutorily *"deemed reasonable and prudent"* under Va. Code § 56-585.1 A 4.
   The SCC could only **re-allocate** it between classes, never reduce it. ★ This is the episode's
   sharpest line: **a pause or a tariff changes who pays, not what the transmission costs.**
3. **The Virginia order is NARROWER than every secondary account.** Prospective only; "direct
   connect" facilities only; the revenue credit is capped at the customer's own transmission charges;
   and **higher-order/shared transmission was expressly DEFERRED.**
4. ⚠ **The Virginia order CONTRADICTS ITSELF** on the Rider T1 component split ($998.5m/$540.4m on
   p.2 vs $940.4m/$598.6m in the Findings, both citing Ex. 2 at 6, both summing to $1,538,974,037).
   **State only the total.**
5. **PJM says "Large Loads", never "data centers."** Do not put the words in its mouth.
6. ⛔ **Figures NOT established and barred as settled:** the ~$4.3bn PJM data-center infrastructure
   figure, the "63% of a capacity price increase" attribution, and "24 states have approved at least
   one large-load tariff" (Pennsylvania's was a *tentative* order for comment at the time counts were
   taken — a tentative order is not an approved tariff).

### ⚠ Q5 — THE ONE KILLED CLAIM, re-read as required

Only **one** claim was killed (0–3), and on re-reading **the kill looks CORRECT**: it asserted
Pennsylvania had no final large-load tariff in force, sourced to the *Pennsylvania Bulletin* notice
of the **6 Nov 2025 Tentative Order** at Docket M-2025-3054271. A later **Final Order** exists, so the
claim was **outdated rather than false** — killed on positive evidence, which is exactly the standard
the verifier was re-instructed to use. ✅ **No false negative in this run.**

⚠ **But 105 claims were never adjudicated at all.** 130 extracted, 25 verified. The dossier's own
stats say `"unverified": 0`, which reads as "nothing went unverified" — it is not true; the tally counts only the claims that were sent to a verifier.

### ⚠ Gaps the run declared about itself, and they must be closed before scripting

- ⛔ **"Capital is mobile, so the load just leaves the state" has ZERO evidence in either direction** —
  no siting study, no case of a project relocating in response to a tariff or moratorium. It is the
  load-bearing premise of the anti-pause side. **Source it or say on air that it is unsourced.**
- ⛔ **Oklahoma and Tennessee were never reached** — and they are the named anti-pause exemplars, so
  that half of the steelman is currently **UNSOURCED**. Also unreached: Oregon, Ohio (AEP/PUCO),
  Georgia PSC.
- **The Pennsylvania Final Order PDF was never opened**; its but-for test, 50/100 MW thresholds and
  LTIIP carve-out are secondary-sourced. Wisconsin rests on a press release self-described as
  preliminary; the real authority is the Final Order of 21 May 2026 in Docket 6630-TE-113, unread.
- ⚠ **FERC's 18 June 2026 § 206 show-cause orders to all six RTOs are pending** and could federalise
  the shared-network-upgrade question every state is deferring. **The state-by-state frame has a
  shelf life** — the Virginia SCC deferred partly *because* FERC may overlap it.
- ⚠ **Nothing in the record has RUN long enough to test whether the collateral held, the exit fee was
  collectible, or the minimum take was enforced.** ★ Both sides are arguing about an untested
  instrument — which may be the most honest thing the episode can say.

### ⚠ Carried forward to verification

- **SECONDARY-VERIFIED (upgraded, still not primary) — Virginia SCC Case No. `PUR-2026-00056`.**
  Two independent outlets now name the same docket with matching facts: application filed
  **1 May 2026**, final order **31 July 2026**, mandatory **CIAC** applied to "direct connect"
  facilities and to the substations and transmission lines connecting them, ~**$1.5bn** sought
  through Rider T-1, Dominion to file the amended policy in a new docket **within 90 days**
  (landing ~29 October 2026). ⛔ **The SCC order itself is still not read.** `virginiamercury.com`
  and `pecva.org` return **HTTP 403** to automated fetching, and `scc.virginia.gov/docketsearch`
  PDFs are **image-only scans** — `pypdf` extraction returns JPEG streams, not text. Getting this to
  primary needs OCR or the in-app browser. Do not put the case number on screen until then.

- ⛔ **CONFLICT — who produced the $0.94/month figure, and what it means.** Two readings, from two
  searches of the same event:
  1. *"The newly approved order reduces the projected monthly bill increase for residential customers
     to $0.94 per month, down from the original increase of $2.90 per month"* — i.e. **the SCC cut it**.
  2. *"Dominion stated that, based on updated cost allocation forecasts, the requested Rider T1
     increase is only expected to add $0.94 per month to a typical residential customer bill"* —
     i.e. **it is the company's own projection**, and the $2.90 has no stated relationship to it.

  These are materially different facts and only one can be true. Reading (2) would make "regulators
  cut your bill increase by two-thirds" a **fabricated** causal story. **Status: UNRESOLVED. The
  figure is barred from the script and the chart until the order or the filing settles it.** This is
  the "verify the claim, not the claimant" case: both readings come from competent trade press.
- **CONFIRMED (primary, full text) — Kentucky PSC 2026-00115.** 32-page order downloaded and
  extracted with `pypdf`; every figure above is quoted from the order's own text, not a snippet.
  ⛔ `WebFetch` returned compressed-PDF noise on it, exactly as the standing rule predicts.

---

## ✅ THE TWO DECLARED GAPS — closed by hand, 2026-09-02

The dossier flagged both itself. Closed with primary records rather than a second fan-out.

### GAP 1 — Oklahoma and Tennessee ⛔ BOTH ARE REAL, BOTH ARE NARROWER THAN THE BRIEF SAYS

**Oklahoma — HB 2992, read from the ENROLLED BILL** (`oklegislature.gov`, 5 pp, `pypdf`). Passed both
chambers 5 May 2026, signed 13 May 2026, effective **1 July 2026** with an emergency clause.

- ⛔ **NAME CORRECTED against the enrolled text: "Data Center CUSTOMER Ratepayer Protection Act of
  2026."** The Oklahoma House's own press releases say *"Consumer"*. The scout brief was right and the
  press releases are wrong. Cite the enrolled bill.
- **"Large load customer"** = new data centers, new cryptocurrency mining, and new facilities whose
  primary function is AI computing, contracting to add **≥ 75 MW per facility or in aggregate behind a
  single point of interconnection** after 1 July 2026. ⚠ **Excludes entities that build generation for
  behind-the-meter projects.**
- ⛔ **THE STANDARD IS NOT "FULL COST OF SERVICE."** The scout brief says Oklahoma makes a ≥ 75 MW
  customer *"pay full cost of service."* The statute defines **cost causation** as *"customers
  responsible for the electric supplier incurring the cost should be allocated their equitable share
  of those costs"*, and §903 requires reimbursement of *"all costs fairly allocated to them."*
  **Equitable share ≠ full cost.** Do not say Oklahoma makes them pay the full cost.
- Suppliers **shall** maintain **separate tariffs** for large load customers, with **credit
  requirements** and measures covering *"costs incurred to directly serve the customer that may remain
  unrecovered if the customer departs the system or materially reduces load"* — ⭐ an explicit
  **stranded-cost / exit** protection.
- **Minimum ten-year term of service** (for public power using tax-exempt municipal financing, the
  lesser of ten years or the IRS guideline).
- Applies to **all** retail suppliers — investor-owned, cooperatives, municipals, public power.
- Land-purchase notice within **60 days** to the Corporation Commission, county commissioners and
  abutting owners; **$1,500 per day, per violation**, collected by the county.

**Tennessee — SB 2128 / HB 1847, Public Chapter 961**, signed **7 May 2026**, operative for conduct
and contracts entered, amended or renewed **on or after 1 July 2026**. Read from the Fiscal Review
Committee's **fiscal note (7 Feb 2026)** and its **fiscal memorandum on the bill AS AMENDED**
(20 Apr 2026, amendments 015517 and 018292) — `capitol.tn.gov`, both extracted with `pypdf`.

- As introduced: the owner or operator pays the **full cost** of infrastructure needed to support the
  data center, including upgrades needed both to serve it and to keep serving existing customers; a
  utility is barred from raising residential, commercial or industrial rates because of data-center
  demand.
- ⭐⭐ **BUT THE AMENDED ACT CARVES OUT THE HARD CASE.** A utility **may** allocate part of the cost to
  general system improvements where those improvements go **beyond** what the data center needs, can
  serve others, involve repair or replacement of infrastructure someone else originally paid for, and
  the allocation follows the utility's **contribution in aid of construction** policies.
  ★ **That is exactly the shared-network-upgrade question Virginia and Wisconsin deferred and
  Pennsylvania decided (see the Pennsylvania correction below). Tennessee did not solve it either — it
  wrote an exception for it.**
- Also authorises a utility to **reimburse** a data center for infrastructure costs, on five
  conditions: standard policies, applied to comparable customers, not data-center-specific, no more
  favourable treatment than comparable customers, and no rate increase to existing customers.
- Defines infrastructure cost on a **but-for** standard — GAAP-capitalisable costs *"that would not be
  incurred but for"* the demand increase. ⭐ **The same but-for test as the Virginia SCC order.**
- Authorises **independent power producers** to sell directly to a data center, and bars a utility
  from blocking self-generation or IPP purchase.
- **Excludes** state-owned facilities, and telecom/broadband providers' network facilities.
- Threshold reported as **≥ 50 MW** projected peak demand in the first three years — ⚠ **secondary;
  the fiscal documents do not state it. Confirm against Public Chapter 961 before it is spoken.**
- Fiscal-note context: roughly **60 data centers** already operate in Tennessee.

⭐ **THE CONVERGENCE FINDING — the best structural result of this research.** Virginia, Tennessee,
Kentucky, Pennsylvania and Wisconsin all reached for the **same instrument** — but-for causation plus
a **contribution in aid of construction** — and **four of the five left shared network upgrades
unresolved.** ⚠ So *"fix the tariff, as Oklahoma and Tennessee did"* is only half true: they fixed the
**easy** half (sole-use facilities) and deferred or excepted the **contested** half — which is the
same half New York paused over.

### ⛔ CORRECTION 2026-09-03 — Pennsylvania did NOT defer; it decided, and is under challenge

This log said above that *"the Pennsylvania Final Order PDF was never opened"* and that the
*"uncertain, difficult to quantify"* characterisation was secondary-sourced. It has now been opened
and read in full (<https://www.puc.pa.gov/pcdocs/1929842.pdf>, 129 pp., entered 12 May 2026), and the episode was
wrong about it in every place it was spoken or shown:

- **Disposition, pp. 41–42, verbatim:** *"we are ultimately persuaded by the arguments of the OCA and
  others regarding cost causation. Therefore, if a Network Improvement would not have been needed
  'but for' the interconnection of the Large Load Customer, then the costs of the upgrade should be
  allocated to that customer irrespective of whether other customers would benefit from it. In such
  instances, the EDC should assess a CIAC for Large Load Customer additions to recover all distribution
  and transmission costs necessary to interconnect the new Large Load Customer. The only exception to
  this should be for any upgrades or additions that were already planned by the EDC pursuant to a
  Commission-approved Long-Term Infrastructure Improvement Plan (LTIIP) before the Large Load Customer
  requested service."* That is the shared-upgrade question, answered, in the strongest form of the
  five jurisdictions.
- **The phrase we quoted is real but about something else.** p. 28: *"We agree with the comments that
  characterize the 'major beneficiary' proposal as uncertain, difficult to quantify and in need of
  greater stakeholder vetting"* — this is the majority-beneficiary criterion for **financial
  security / collateral**, set aside for rate proceedings. Not cost allocation.
- **It is contested.** The Energy Association of Pennsylvania filed a Petition for Reconsideration or
  Clarification of the Final Order on 27 May 2026 (<https://www.puc.pa.gov/pcdocs/1932400.pdf>, 22 pp.), fifteen
  days after entry.
- **How it was found.** A controlled re-verification of the same claims with two verifier prompts: the stock verifier prompt killed the
  Pennsylvania claim 3–0 on the superseding Final Order; the fixed prompt this research used passed it
  3–0 and never surfaced the order. The gap note above was written and not acted on.
- **What changed in the episode:** `s04_cost` lines f, j, l; `s06_reframe` line c; `s08_against_resp`
  line c; `s11_synth` line b; the two "where each one stopped" panels; the description; the thumbnail's
  gold sub-line; finding #2 in `brief.md`. The recorded close (`s12_close`) names Virginia, Kentucky
  and Tennessee only and was already correct.

⚠ **Both exemplars also leave a self-supply exit**: Oklahoma exempts behind-the-meter generation
builders; Tennessee affirmatively authorises IPP supply and bars utilities from blocking it.

### GAP 2 — "capital is mobile, so the load just leaves the state" ⛔ THE SIMPLE VERSION IS UNSUPPORTED

**No documented case was found of a data-center project cancelled and relocated to another state
because of a moratorium or a cost-allocation tariff.** Searched for one directly; the trade trackers
describe the *conditions* for relocation, never an instance. ⚠ **Absence of a documented case is not
proof of absence** — say that on air rather than claiming it never happens.

What the evidence does support splits the claim in two:

1. ⭐ **Siting responds to what states GIVE.** Gargano and Giacoletti (2025), cited in the Dallas Fed
   paper, find **state incentives meaningfully shift data-center siting and investment — *"without
   commensurate increases in local tech employment."*** ⚠ One finding that supports the GOLD side's
   mobility premise and undercuts its jobs premise at the same time.
2. ⭐ **Siting does not measurably track what states CHARGE.** The number of data centers shows
   **essentially no correlation with current electricity prices (Pearson r = −0.053)**.
   ⚠ **SECONDARY-SOURCED — verify before broadcast**, and no correlation is not proof of no causal
   effect.
3. **There is limited anywhere to flee to.** Reporting counts **500+ moratorium instruments across
   ~42 states** by July 2026, with only Alaska, Hawaii, West Virginia and Wyoming free of them at any
   level. ⚠ Trade-press aggregation, not a register — **directional, not exact.**

★ **The honest formulation: mobility is real for tax incentives and unproven for rate design** — and
rate design is exactly what this episode is about. The GOLD side's specific claim, that a
cost-allocation tariff drives load out of state, is the version with **no evidence behind it**. The
GREEN side has no evidence it does not happen, either.

### ⭐ A BETTER SOURCE FOR THE PRICE-IMPACT CLAIM THAN ANYTHING IN THE SCOUT BRIEF

**Kay O (Federal Reserve Bank of Dallas), Reaser R (UC Davis), Taylor R (Dallas Fed)** — *"Processing
Power: The Effect of Data Centers on Wholesale Electricity Markets,"* **Dallas Fed Working Paper
2606**, 58 pp, extracted in full.

> Existing data centers have **already increased wholesale prices by 2 to 6% on average nationwide**,
> with substantially larger effects in regions hosting major data-center corridors. Extended through
> 2028: **~50%** under high-utilisation build-out, **~20%** under moderate build-out.

⚠ **Label it correctly or it becomes a trap.** This is an **hourly, unit-level least-cost dispatch
MODEL**, not an observation, and it carries the standard disclaimer that the views are the authors'
and not the Federal Reserve's. But it uses **site-specific data on existing and proposed data
centers** — a far stronger basis than the PJM/IMM counterfactual revenue simulation the scout brief
leaned on, and it can replace the barred "63%" and "$4.3bn" figures with something citable.

---

## ✅ BUILD PASS — 2026-09-02, before scripting

### Peg re-check (step 3b)

- **New York S10642/A11560** — re-searched 2026-09-02: still unsigned, no veto reported. Law-firm
  trackers (Greenberg Traurig, DLA Piper, Mintz, Harris Beach Murtha) and news10.com concur; the
  July reporting still expects a veto "by the end of the year". Peg holds.
- **Virginia PUR-2026-00056** — no new filing found since the 31 Jul order; Dominion's 90-day
  compliance filing is still ahead (~29 Oct 2026). Peg holds.

### ✅ CONFIRMED (PRIMARY) — New York Executive Order 62, read from governor.ny.gov

Fetched 2026-09-02. Threshold **≥ 50 MW**. DEC holds pending permit applications in abeyance until
DPS completes a Generic Environmental Impact Statement; a **Data Center Interconnection Working
Group within 60 days**; DPS to consider a **"New York Grid Acceleration Fund"** requiring data centers
to make *"upfront capital contributions to finance grid improvements"* and an insurance pool.
Verbatim policy statement: *"it is the policy of New York State that the cost of electric system
upgrades required to provide electric utility service to large loads should not be paid for by
every-day New Yorkers."*

⛔ **CORRECTED two GREEN lines before synth.** The first draft of `s07_for.e` and `s10_for_resp.b`
said the order "writes no rule" about shared upgrades and "just promises standards". That
overreaches: the order states the cost-allocation *principle* in so many words and directs the
agencies to *explore* a mechanism. It does not itself allocate the cost. The lines now say exactly
that — "it states the principle; it doesn't write the rule" — and Gold quotes the policy statement
verbatim (`s09_against.i`), replacing an earlier paraphrase of "what the governor said".

⚠ The brief's "for up to a year" for EO 62 comes from news reporting (approvals halted "until July
2027"); the order's own duration is *until the GEIS is submitted*. The script says "while the state
writes standards" and does not put a duration on the executive order.

### Barred from the script and every panel, confirmed against the data files

- `$329.17/MW-day` appears once, labelled an administrative price cap. Never as a price.
- `~$4.3bn`, `63%`, `24 states` — absent.
- Tennessee `≥ 50 MW` — absent (secondary; fiscal documents silent).
- Pearson `r = −0.053` — absent (secondary).
- Oklahoma "full cost of service" — absent; the panel says the statute's own terms.
- "Overrode" — absent; the panel says "REDUCED, not overrode".
- Rider T-1 component split — absent; only the total is shown.
