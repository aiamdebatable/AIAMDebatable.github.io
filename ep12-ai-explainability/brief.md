# Research brief — Should AI Have to Explain Every Decision It Makes?

_The full research behind the episode. This is the "full research" we link below the video._

> ✅ **EPISODE-GRADE.** Peg hunt 2026-09-01; deep-research fan-out (108 agents,
> 26 sources, 125 claims); technical half closed by hand 2026-09-02 with four papers extracted in
> full. Every claim traces to `factcheck-log.md`.
>
> ⛔ The prior scouting sweep — an internal document, not part of this published bundle — was treated as a **checklist of claims to
> verify independently**, never source material. ⚠ **One of its load-bearing claims is already
> known to be wrong** — see the correction below.

## The question

Should a machine decision about a person come with an explanation they can contest — and what should
"explanation" legally mean?

★ **The spine: one word, several policies.** "Explanation" names at least three different things —
(a) **notice** that a machine decided about you, (b) **reasons** for your particular outcome, (c)
**access** to the model's internals. Almost every public argument is two people using different
definitions. A rule that says "explain it" without saying which is satisfied by the weakest one.

## Why now

**2026 is the year the right to an explanation went live in Europe pointed at obligations that do
not yet exist — while America, which looked like it had switched the whole thing off, quietly
rebuilt it in two states at once.**

### Europe — the right lands, the obligations slip

| date | event |
|---|---|
| **2026-07-24 / 27** | The Digital Omnibus is published as **Regulation (EU) 2026/1744** and enters into force — six days before the AI Act's main deadline. |
| **2026-08-02** | ⭐ **Article 86 applies.** The right of a person subject to a decision taken by a deployer on the basis of the output of a high-risk Annex III system to an explanation of that decision is **in force now**. Verified directly against the consolidated text, **CELEX `02024R1689-20260727`**. |
| **2027-12-02** | **Chapter III Sections 1–3** — classification, requirements, and provider/deployer obligations — are deferred. That includes **Article 6(2)**, the provision that actually classifies Annex III systems as high-risk. |

⚠ **The open interpretive question belongs in the episode, not resolved by it.** Does Article 86 have
an operative referent before December 2027? Annex III still exists as a list; the article classifying
its contents as high-risk does not yet apply. That is a genuine lawyers' disagreement — **a right in
force, aimed at obligations that are not** — and it is the sharpest illustration of the thesis.
Do not assert an answer.

Article 86's own carve-outs matter for scripting: it **excludes Annex III point 2** (critical
infrastructure); it yields where Union or national law provides exceptions; and it applies *only to
the extent the right is not otherwise provided for under Union law*, so GDPR Article 22 may already
occupy the field for some decisions.

### United States — not a repeal, a rebuild

| date | event |
|---|---|
| **2025-12-11** | An executive order asserts federal authority over AI regulation and names Colorado's algorithmic-discrimination law as its example. |
| **2026-01-01** | ⭐ **California's CCPA Article 11 ADMT regulations come into force**, compliance due **1 January 2027**. They grant a right to access, in plain language, *"meaningful information about the logic"* of an automated significant decision and how the output was used. ⛔ **The consumer must ASK** — it is an access right, not a notice that finds you. (An earlier draft of this brief said there was "a special notice when the decision is adverse". That was MINE and it was wrong: "adverse" appears zero times in the approved regulation.) |
| **2026-04-27** | Enforcement of the **Colorado AI Act is suspended**, two months before it would have taken effect, after xAI sued in early April and **DOJ moved to intervene on 24 April** — the first federal intervention in a challenge to a state AI law. |
| **2026-05** | **SB 26-189** repeals and replaces it with a narrower **Automated Decision-Making Technology in Consequential Decisions Act**, effective **1 January 2027**. |
| **2026-08-11** | ⭐ The **Colorado Department of Law files proposed implementing rules** for SB 26-189 and the Chatbot Safety Act (HB 26-1263). Written comments run to **26 October 2026**. The proposed employment provisions require **meaningful human review and reconsideration** of decisions materially influenced by AI. |

### ⛔ This CORRECTS the scouting brief, it does not decorate it

The scouting pass concluded the right to an explanation was *"killed in America by the federal
government."* **That is wrong, or at least badly overstated.** California's ADMT access right — the
closest American analogue to Article 86 that exists — has been in force all year with a compliance
date, and Colorado's replacement regime is in **open rulemaking right now**. The American story is a
**rebuild**, not a repeal, and that is a better episode than the one the brief proposed: three
jurisdictions, three different answers to what an explanation *is*, and all three deadlines landing
inside fifteen months.

⛔ **Found by the blind sweep.** "ADMT", "CPPA", "CCPA Article 11", "SB 26-189 rulemaking" and
"Chatbot Safety Act" appear nowhere in the scouting brief. Rejected candidates are recorded in
`factcheck-log.md`.

⚠ **Barred from the script until resolved:** the Colorado comment deadline (primary says 26 October;
trade press says 4 September, probably the interim-revision cut-off), the rulemaking hearing date,
and the "meaningful human review and reconsideration" wording, which is so far sourced to a law-firm
analysis rather than the filed rule text.

### ⚠ Risk note

The bench risk score moved **34 → 45** on 2026-09-01. Scored low-heat in July when this was purely
wonky; the US half is now litigation between a named company and the federal government. **Report
filings and holdings; never characterise motive.** The European half carries none of this and could
carry the episode alone if the US half runs too hot.

## Settled (not the debate)

1. **"Explanation" legally means REASONS, not ACCESS to the model's internals** — and the CJEU has
   held so twice. *Dun & Bradstreet* (C-203/22, 27 Feb 2025): disclosing an algorithm or a
   step-by-step description does **not** satisfy the right, and **complexity is no excuse**.
   *SCHUFA* (C-634/21, 7 Dec 2023): the Art. 22(1) "decision" attaches at the **scoring stage**.
   ★ Of the three things the word names, the law has already chosen one and rejected another.
2. **Article 86 is in force; the machinery it points at is not.** It has applied since 2 Aug 2026,
   while Chapter III §§1–3 — including Art. 6(2), which classifies Annex III systems as high-risk —
   are deferred to 2 Dec 2027. Verified against CELEX `02024R1689-20260727`.
3. **The US did not repeal the right; it rebuilt it in two states.** California's CCPA Article 11
   ADMT regulations completed rulemaking in Sept 2025 and are law (compliance 1 Jan 2027); Colorado
   repealed **and replaced** with SB 26-189, whose implementing rules were filed 11 Aug 2026.
4. **Explanations helped when the model was right and failed to rescue when it was wrong.** JAMA RCT,
   457 clinicians: standard model **+4.4 pp** with explanations vs +2.9 without; biased model
   **−9.1 pp** with explanations vs −11.3 without — a rescue of **2.3 pp, not significant**.
5. **Post-hoc explanations are not guaranteed to track the model's reasoning.** LIME and SHAP are
   demonstrably prone to *explanatory inversion* — rationalising from the output — especially under
   spurious correlations; equally-accurate models yield divergent explanations (the Rashomon effect).
6. **Every right examined is capped by a trade-secret carve-out**, and California's (§7222(c))
   names **no adjudicator at all**. Colorado's entire human-review right is qualified by *"to the
   extent Commercially Reasonable."*

## Contested (the real fight)

**GREEN — "A decision you can't contest isn't a decision, it's a verdict."**
Due process never required understanding *how* a decider thinks — only that reasons be given and can
be challenged. The 2026 record is the argument: the duty that inconveniences deployers slipped
sixteen months, and the person on the receiving end has no lobby. And the strongest live instruments
are not asking for a story — Colorado's Rule 7.7 buys **reversal**: independent reviewer, no ADMT
assistance, outcome stayed where possible, reasons tied to the person's own evidence and explicitly
**not** *"a recitation of the ADMT's general logic."* Imperfect reasons still beat none, because an
appeal needs something to attach to.

**GOLD — "A mandate to explain buys a ritual, not accountability."**
The randomised evidence is that explanations did **not** protect people from a biased model, and the
mathematics says why: informative post-hoc explanation is not generally available. A legal right to
one manufactures confidence that is legally sufficient and possibly untrue — harder to challenge
because the box is ticked. The stronger route is **validation**: audited outcomes, error rates by
subgroup, contestability and reversal, judged on what a system *does*. The EU's own reason for
deferring the obligations — the standards weren't ready — is an admission that nobody yet knows what
a compliant explanation is.

⚠ **Genuinely open, and the episode must not resolve them:** whether Art. 86 operates at all before
Dec 2027; whether it adds anything to GDPR Art. 22 given the 86(3) subsidiarity clause; and whether
interpretable models sacrifice accuracy — where FAccT 2022 rejects **both** camps.

## The reframe

**The argument everyone is having — "should AI explain itself?" — has already been settled in
practice, and against explanation.** Every live instrument has moved past it to **contestability**:
California makes human appeal a *substitute* for the opt-out; Colorado buys review that can change
the outcome and bars a recitation of general logic. The fight worth having is not *explain or don't*
— it is **who reviews, can they reverse it, and what happens when the reason can't be given.**

⭐ **And there the law has written a cheque the mathematics may not cash.** Colorado makes **inability
to accurately explain the principal reasons a violation in itself** — a *faithfulness* standard. But
`arXiv 2508.11441` proves informative post-hoc explanation does not exist for complex functions, and
that **SHAP is non-informative even with respect to decision trees.** Nobody has tested the collision:
no regulator guidance, no litigation.

## Both sides quietly agree

**Both want the same thing, and it isn't an explanation — it's a decision that can be reversed.**
The green side asks for contestability; the gold side asks for validation and reversal *instead of*
explanation. Every 2026 instrument is drafted toward that overlap. The genuine disagreement is
narrower than the shouting: **whether a reason is a precondition of contesting, or a substitute for
it.**

## Verdict framing

No winner. What the viewer is handed:

- The law has already decided explanation means **reasons**, not access to internals.
- The best randomised evidence says explanations **help against a good model and fail against a bad
  one** — the opposite of what a safeguard is for.
- The strongest new rules quietly agree, and buy **reversal** rather than narrative.
- And every one of them is capped by a **trade-secret carve-out with no named adjudicator.**

⚠ **The honest close: nobody has yet tested whether a machine can meet the standard the law is about
to set** — and both sides are arguing about an instrument that has never run.
