# Fact-check log — ep12-ai-explainability

> ⛔ Nothing in this file is a research finding until it names a fetched source. Status is one of
> **CONFIRMED / CORRECTED / UNRESOLVED**.

## Peg hunt — rejected candidates      (run 2026-09-01, `peg-hunt` skill)

⛔ Recorded because *a peg with no rejects listed is an unaudited peg*.

### Phase 1 — the blind sweep

Banned list (every proper noun in the internal scouting brief): AI Act, Article 86, Article 113,
Digital Omnibus, Regulation (EU) 2026/1744, high-risk, Annex III, Colorado AI Act, xAI, DOJ AI
Litigation Task Force, explainability, XAI, SHAP, LIME, interpretability, GDPR Article 22, right to
explanation, transparency, algorithmic discrimination.

Federal Register API, `PRESDOCU`, 2026-08-04 → 2026-09-01, **zero topic vocabulary**. Counterparty
agency sweeps (CFPB, FTC, EEOC, OSTP, OMB) over 2026-07-15 → 2026-09-01. Then date-first domain
queries naming no entity from the brief.

✅ **Phase 1 exit test passed** — no Phase 1 query contained a banned term.

| candidate | date | age | why REJECTED (or kept) |
|---|---|---|---|
| ✅ **KEPT — Colorado Department of Law files proposed rules implementing SB 26-189 (Automated Decision-Making Technology in Consequential Decisions Act) and HB 26-1263 (Chatbot Safety Act)**; written comments to 26 Oct 2026 11:59 PM MST (primary); statutes effective 1 Jan 2027; proposed employment provisions require **meaningful human review and reconsideration** of decisions materially influenced by AI | 2026-08-11 | 21 d | ⭐ The *content* of "explanation" is being written in an open docket **right now**, in the one state whose first attempt was killed. This is the rebuild the scout brief did not know was happening. |
| ✅ **KEPT — California CCPA Article 11 ADMT regulations, in force since 1 Jan 2026, compliance due 1 Jan 2027**: a right to access, in plain language, "meaningful information about the logic" of an automated significant decision and how the output was used — ⛔ **but the consumer must ASK; the "special notice when the decision is adverse" I originally wrote here does NOT exist** (see correction below) | in force | — | ⭐⭐ **This CORRECTS the scout brief's thesis.** That brief asserts the right was "killed in America by the federal government". It was not: California's version is in force with a compliance date, and it is the closest American analogue to Article 86 that exists. |
| ✅ **KEPT — EU Article 86 applies from 2 Aug 2026 while Chapter III §§1–3 (incl. Art. 6(2), which classifies Annex III systems as high-risk) defer to 2 Dec 2027** | 2026-08-02 | 30 d | The brief's own finding, verified against CELEX `02024R1689-20260727`. Kept — but it is now one of three regimes rather than the whole peg. |
| ⛔ CAITA — generative-AI providers with >1m monthly users must offer a free AI-detection tool, from 2 Aug 2026 | 2026-08-02 | 30 d | Same date, **different question**: provenance of content, not reasons for a decision. Including it would blur the episode's spine, which is precisely that "explanation" names several distinct things. |
| ⛔ Colorado AI Act suspended 27 Apr 2026 after xAI sued and DOJ intervened; repealed and replaced by SB 26-189 in May 2026 | 2026-04-27 | 4 mo | Too old to peg, and it is the *setup* for the kept Colorado item rather than a competitor. Structural background. |
| ⛔ CFPB / interagency rescission of the Special Purpose Credit Programs statement under ECOA | 2026-08-25 | 7 d | Surfaced by the blind agency sweep. ECOA-adjacent, but it concerns credit-program design, **not adverse-action reason-giving**. No bearing on the question. |
| ⛔ Italy DPA fines OpenAI €15m (Dec 2024) and Character.AI over child privacy (Jul 2026); Canada's Privacy Commissioner finding on Grok (Jun 2026) | various | 2 mo+ | Enforcement against *AI providers*, not rulings on a right to an explanation of a decision. On-subject, off-thesis. |

### ⚠ Carried forward to verification

- ⛔ **CORRECTED (thesis-level) — "the right to explanation was killed in America".**
  the internal scouting brief asserts this. It is at best overstated: California's ADMT access right is
  in force with a 1 Jan 2027 compliance date, and Colorado's replacement regime is in active
  rulemaking. **The US half is a rebuild, not a repeal.** Fix this wherever it appears before
  scripting — it is currently load-bearing in the brief's GREEN side.
- **UNRESOLVED — the Colorado comment deadline.** Trade press reports **4 September 2026**;
  `https://coag.gov/ai/` (the AG's own rulemaking page, fetched 2026-09-01) states **26 October 2026
  11:59 PM MST**. Best reading: 4 September is the cut-off for comments considered in *interim*
  revisions and 26 October is the formal deadline. **Primary wins**, but confirm before it is spoken.
- **UNRESOLVED — the Colorado rulemaking hearing date.** Secondary sources say 26 October 2026;
  `coag.gov` did not state one. Do not assert it.
- **UNVERIFIED (secondary only) — the "meaningful human review and reconsideration" content** of the
  proposed employment rules. Sourced to a law-firm analysis, not to the filed rule text. Pull the
  filed rules from the Colorado Secretary of State before this is scripted.

---

## ✅ RESOLVED BY THE DEEP-RESEARCH PASS (108 agents, 26 sources, 2026-09-01)

⭐ Unusually strong provenance: nearly every load-bearing claim rests on **primary text** — EUR-Lex
operative provisions, CJEU judgments, the CPPA's approved regulation PDF, Colorado's filed `.docx`.
Law-firm analysis appears only as corroboration.

| was | now |
|---|---|
| **UNRESOLVED — Colorado comment deadline** | ✅ **BOTH dates are right.** The Notice sets ONE comment period, **11 Aug – 26 Oct 2026 (11:59 PM)**, with **4 Sept 2026** as an *interim-revision* cut-off. Exactly the hypothesis; now confirmed. |
| **UNVERIFIED — "meaningful human review and reconsideration"** | ✅ **CONFIRMED from the FILED rule text** (Colorado proposed **Rule 7.7**), not the law-firm analysis. |
| **CORRECTED — "killed in America"** | ✅ **Confirmed wrong.** California's ADMT regs completed rulemaking Sept 2025 and are law; Colorado repealed-and-**replaced**. The US picture is a **rebuild at state level**. |

### ⭐ The finding that gives the episode its spine

**Where a right to explanation exists, it means REASONS + NOTICE — never ACCESS to the model's
internals.** Three jurisdictions agree, and the CJEU has said so twice and bindingly:

- **Dun & Bradstreet (C-203/22, 27 Feb 2025)** — disclosing *an algorithm* or a step-by-step
  description does **not** satisfy the right; **complexity is no excuse**.
- **SCHUFA (C-634/21, 7 Dec 2023)** — the Art. 22(1) "decision" attaches at the **scoring stage**,
  in generating the probability value, not only downstream.

★ That settles the episode's own framing device from the bench: of the three things "explanation"
names, the law has already picked (b) and rejected (c).

### ⭐⭐ And the frontier has already moved past explanation to CONTESTABILITY

- **Colorado proposed Rule 7.7** is drafted directly against the "explanation buys a ritual"
  objection: independent reviewer, **no ADMT assistance**, outcome **stayed** where possible, reasons
  tied to the consumer's **own evidence** and explicitly **not** *"a recitation of the ADMT's general
  logic"*, burden on the deployer to prove review is not commercially reasonable.
- ⭐ **Colorado makes inability to ACCURATELY explain the principal reasons a violation in itself.**
  That is a **faithfulness** standard, not a narrative one — and it is the sharpest live test anywhere
  of whether post-hoc approximation can satisfy a legal mandate.
- **California** makes **human appeal a SUBSTITUTE for the opt-out right** (§7222(b)(2) sets access at
  the reasons tier).

★ **This is the "both sides quietly agree" nugget**: the GREEN side wants contestability and the GOLD
side wants validation — and every live instrument is converging on exactly that, not on explanation
for its own sake.

### ⚠ The asymmetry that cuts against every regime

**Every explanation right examined is capped by a trade-secret carve-out — and California's
(§7222(c)) specifies NO adjudicator at all**, and may not even require telling the consumer that
something was withheld. Colorado's entire human-review right is governed by *"to the extent
Commercially Reasonable."*

### ⛔ CORRECTED — and the wrong claim was MINE

I wrote, into the peg, the brief and this log, that the CCPA ADMT regs require **"a special notice
when the decision is adverse."** **They do not.** The word *"adverse"* appears **zero times** in the
127-page approved regulation; **§7222(b) lists exactly four disclosures and none is triggered by an
unfavourable outcome**; and the access right requires the consumer to **ask**. It came from a search
summary, never from the regulation.

⚠ **It mattered.** An adverse-action trigger is the difference between a right that **finds you** and
a right you must already know to invoke — load-bearing in an episode about contestability. Corrected
in the episode's metadata and in `brief.md`.

### ⛔ THE BIG GAP — the entire TECHNICAL half is unsourced

The dossier declares this itself: *"The legal picture is fully sourced; the empirical picture is not
sourced at all."* Nothing was established about post-hoc **faithfulness**, the complexity results on
faithful-and-interpretable explanation, whether interpretable models actually sacrifice accuracy, or
the finding that explanations **degrade** human decisions via overconfidence.

⛔ **That is the GOLD side's whole evidentiary base.** The episode cannot be scripted without it, and
it is also what Colorado's "accurately explain" standard turns on.

### ⚠ TIME-SENSITIVITY — three phrasings that would be false on air

1. Say **"proposed rules filed 11 August 2026 would require"** — never *"Colorado requires."* The
   rules are under active revision until 26 October.
2. ⛔ *"Californians can exercise these rights today"* is **FALSE** — compliance is not due until
   **1 January 2027**.
3. Colorado's ADMT Act takes effect **1 January 2027**.

### ⚠ A CONCERN ABOUT MY OWN VERIFIER FIX — flagging it against myself

Kill rates under the three configurations: **stock 11/25 (ep09) → bias-fixed 1/25 (ep11) → 0/25
(ep12)**. I changed the verifier to stop refuting on uncertainty, and it plainly worked. **But zero
kills raises the opposite risk: a verifier that rubber-stamps.**

⚠ **Step 3's target therefore INVERTS for this episode.** With no kills to re-read, the spot-check
must fall on **CONFIRMED** claims instead — especially any whose wording came from a summary rather
than the operative text. ★ The `adverse` error is precisely that failure mode, and it was caught by
the *research*, not by the *verifier* — which is itself evidence the verifier is now too permissive.

---

## ✅ THE TECHNICAL HALF — closed manually, 2026-09-02

Done by hand rather than with a second fan-out: a bounded set of named papers is the case for
download → `pypdf` → grep, not a 108-agent sweep. Every paper below was **extracted in full**, not
read from a search snippet.

### 1. Do explanations actually help a person contest a decision? ⭐ THE RANDOMISED ANSWER

**Jabbour S, Fouhey D, Shepard S, Valley TS, Kazerooni EA, Banovic N, Wiens J, Sjoding MW.**
*"Measuring the Impact of AI in the Diagnosis of Hospitalized Patients: A Randomized Clinical Vignette
Survey Study."* **JAMA**, 19 Dec 2023. `10.1001/jama.2023.22295`. 457 clinicians, 13 US states,
9 vignettes of acute respiratory failure. Abstract retrieved verbatim via the **Europe PMC REST API**
(`ebi.ac.uk/europepmc/webservices/rest`) after `pubmed.ncbi.nlm.nih.gov`, `ihpi.umich.edu` and
`psnet.ahrq.gov` all refused automated fetching.

| condition | effect vs baseline **73.0%** (95% CI 68.3–77.8) |
|---|---|
| standard model, no explanations | **+2.9 pp** (0.5 to 5.2) |
| standard model, **with** explanations | **+4.4 pp** (2.0 to 6.9) |
| **systematically biased** model, no explanations | **−11.3 pp** (7.2 to 15.5) |
| **systematically biased** model, **with** explanations | **−9.1 pp** (4.9 to 13.2) |
| explanations' rescue effect on the biased model | **+2.3 pp (95% CI −2.7 to 7.2) — NONSIGNIFICANT** |

★ **This is the strongest single number in the episode**, and the paper aims it squarely at the
episode's question — its own Importance section: *"Recent regulatory guidance has called for AI models
to include explanations to mitigate errors made by models, but the effectiveness of this strategy has
not been established."*

⛔ **THREE SCRIPT TRAPS ON THIS ONE STUDY:**
1. ⚠ **−11.3 and −9.1 are NOT two versions of one fact.** −11.3 is the biased model *without*
   explanations; −9.1 is *with*. Both appear in circulation detached from their arm. Say which.
2. ⛔ *"Explanations made it worse"* is **FALSE** — they moved it 2.3 pp in the *helpful* direction.
   The finding is that the improvement **was not statistically significant**, i.e. explanations
   **failed to rescue**, not that they harmed.
3. ⛔ *"Explanations don't help"* **overstates**. Against a *correct* model they did help (+4.4 vs
   +2.9). ★ The honest sentence is: **explanations helped when the model was right, and failed to
   rescue when the model was wrong** — which is exactly backwards from what a safeguard is for.

### 2. Is a post-hoc explanation faithful to the model's reasoning? — NO, and it is provable

⭐ **Günther E, Szabados B, Bhattacharjee R, Bordt S, von Luxburg U**, *"Informative Post-Hoc
Explanations Only Exist for Simple Functions"*, arXiv **2508.11441**, 18 Aug 2025 (34 pp, extracted).

⛔ **CORRECTS THE SCOUT BRIEF, which mis-states this paper.** The brief says *"recent complexity work
argues faithful and interpretable explanation is computationally intractable for most non-trivial
models."* That is **wrong on the discipline and wrong on the claim**:

- It is a **learning-theory / information** result, **not** a computational-complexity one. The paper
  explicitly disclaims that angle: *"In this paper we ignore practical difficulties of computing SHAP
  explanations, for example the computational complexity of evaluating the value functions for
  exponentially many subsets."*
- The result is about **informativeness** — an explanation is informative if it *"serves to reduce the
  complexity of the space of plausible decision functions."*
- ★ The findings are **relative to a function class**, which is the part that must not be dropped:
  **gradient and counterfactual explanations are non-informative with respect to the space of
  differentiable functions; SHAP and anchor explanations are non-informative with respect to the space
  of decision trees.**
- ⚠ And it is **not** an impossibility result full stop — it *"derive[s] conditions under which
  different explanation algorithms become informative"*, noting these are *"often stronger than what
  one might expect."*

✅ Quotable and accurate: *"a rigorous mathematical rejection of the idea that it should be possible to
explain any model."* And, directly on the legal question: *"An explanation cannot be something that
the developer of an AI system simply 'invents'."*

⭐⭐ **THE COLLISION THIS CREATES IS THE EPISODE'S SHARPEST POINT.** Colorado's proposed rules make
**inability to accurately explain the principal reasons a violation in itself** — a faithfulness
standard. This paper shows **SHAP is non-informative with respect to decision trees**, a model class
that is itself considered interpretable. The legal standard and the mathematical result are pointed
straight at each other, and **nobody has tested it** — no regulator guidance, no litigation.

**Corroborating, same direction:** *"Are We Merely Justifying Results ex Post Facto? Quantifying
Explanatory Inversion in Post-Hoc Model Explanations"* (arXiv **2504.08919**, 23 pp, extracted) —
LIME and SHAP are *"prone to such inversion, particularly in the presence of spurious correlations,
across tabular, image, and text domains"*, i.e. they rationalise from the output rather than tracking
the decision process. See also the **Rashomon effect** (equally-accurate models yield divergent
explanations) and the *Fooling LIME and SHAP* adversarial line.

### 3. Do interpretable models sacrifice accuracy? — ⛔ CONTESTED, and there is a THIRD position

- **Rudin C**, *"Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use
  Interpretable Models Instead"*, **Nature Machine Intelligence** 2019 (arXiv 1811.10154): the
  trade-off is *"often a myth"* for structured data with meaningful features.
- ⭐ **THE PUBLISHED CRITIQUE — the named blind spot, now closed.** *"It's Just Not That Simple: An
  Empirical Study of the Accuracy-Explainability Trade-off in Machine Learning for Public Policy"*,
  **ACM FAccT 2022** (19 pp, extracted). It rejects **both** sides: *"explainability is not directly
  related to whether a model is a black-box or interpretable and is more nuanced than previously
  thought… black-box models may be as explainable to a [human-in-the-loop] as interpretable models"*,
  for two reasons — *"weaknesses in the intrinsic explainability of interpretable models"* and that
  *"more information about a model may confuse"* the human.

⛔ **So "just use interpretable models" is NOT the settled fix the scout brief implies.** It measures
explainability by whether a **human** can anticipate the model's output — and on that measure the
interpretable/black-box distinction does not hold up. **Present this as genuinely contested, three
ways**, not as Rudin having won.

### ⚠ Method notes worth keeping

- `pubmed.ncbi.nlm.nih.gov` returns a cookie wall, `ihpi.umich.edu` and `psnet.ahrq.gov` return **403**
  — but the **Europe PMC REST API** returns the full abstract as JSON with no key. ★ Best route to a
  biomedical abstract when the usual hosts refuse.
- All four papers parsed cleanly with `pypdf` after `curl`. **None needed a fetch that worked.**

---

## ✅ BUILD PASS — 2026-09-03 (script-time re-reads)

Two narrative details the script needed were NOT in the dossier and were pulled from the Court's own
press releases, extracted in full with `pypdf` (`WebFetch` returned a summary that named the wrong
applicant — one failed fetch is a fact about the fetch, not the source):

- **CONFIRMED — CJEU Press Release No 22/25 (C-203/22, 27 Feb 2025):** *"In Austria, a mobile
  telephone operator refused to allow a customer to conclude a contract on the ground that her credit
  standing was insufficient"* … *"The contract would have involved a monthly payment of €10."* And:
  *"the mere communication of an algorithm does not constitute a sufficiently concise and intelligible
  explanation."* On trade secrets: the controller *"must provide that allegedly protected information
  to the competent supervisory authority or court"*, which balances — i.e. the EU names a REFEREE
  where California §7222(c) names none. Scripted in `s03_safe.b/d` and panel `s03.j`.
- **CONFIRMED — CJEU Press Release No 186/23 (C-634/21 SCHUFA, 7 Dec 2023):** scoring *"must be
  regarded as an 'automated individual decision' … in so far as SCHUFA's clients, such as banks,
  attribute to it a determining role in the granting of credit."* Scripted as "when a lender leans on
  the score, the score itself is the decision" (`s03_safe.f`).
- **CUT before render:** "the strictest law in the country" (Colorado) — unsourced; "a line the
  industry hates" — editorial; an illustrative "wrong four percent of the time" in Gold's s09.e —
  invented figure, replaced with "how often the system is wrong"; "a second camp says black boxes
  win" — replaced with "the conventional view says it's real", which is the premise FAccT 2022 tests.
