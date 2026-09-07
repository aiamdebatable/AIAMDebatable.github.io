# Sources — ep12 "Should AI Have to Explain Every Decision It Makes?"

Every source the brief and the fact-check log rest on, with what each one actually supports and how
far it was read. ✅ = the primary document was fetched and read in full text. ⚠ = secondary, or the
primary was not obtainable. ⛔ = a claim that circulates in this debate and is NOT used, and why.

---

## The peg — three regimes, read from their own text

✅ **EU AI Act, consolidated text as amended by the Digital Omnibus — CELEX 02024R1689-20260727.**
<https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1689-20260727>
Supports: **Article 86** (right to explanation of individual decision-making) applies from
**2 August 2026**; its carve-outs (excludes Annex III point 2; yields to Union/national exceptions;
applies only to the extent the right is not otherwise provided under Union law — Art. 86(3)).
⚠ Whether Article 86 has an operative referent before December 2027 is a genuine lawyers'
disagreement; the episode presents it as open and does not answer it.

✅ **Regulation (EU) 2026/1744 (the "Digital Omnibus")** — published 24/27 Jul 2026, in force
27 Jul 2026. <https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng>
Supports: **Chapter III Sections 1–3** — including **Article 6(2)**, which classifies Annex III
systems as high-risk — deferred to **2 December 2027**. The "16 months" on screen is 2 Aug 2026 →
2 Dec 2027.

✅ **California Privacy Protection Agency — CCPA regulations, Article 11 (Automated Decisionmaking
Technology)**, approved regulation PDF, 127 pages. <https://cppa.ca.gov/regulations/>
Supports: in force **1 Jan 2026**; compliance due **1 Jan 2027**; **§7222(b)** — a right of ACCESS
to *"meaningful information about the logic"* of an automated significant decision, in plain
language, and how the output was used; **§7222(b)(2)** human appeal as a substitute for the opt-out
right; **§7222(c)** trade-secret carve-out naming no adjudicator.
⛔ **A special notice when the decision is adverse** — does NOT exist. *"adverse"* appears **0 times**
in the regulation; §7222(b) lists four disclosures and none is triggered by an unfavourable outcome.
We wrote this into our own peg and brief and corrected it; it is a panel in the episode.
⛔ **"Californians can exercise these rights today"** — false; compliance is 1 Jan 2027.

✅ **Colorado Department of Law — proposed rules implementing SB 26-189 (Automated Decision-Making
Technology in Consequential Decisions Act) and HB 26-1263 (Chatbot Safety Act)**, filed 11 Aug 2026;
Notice of Proposed Rulemaking and the filed rule text (`.docx`). <https://coag.gov/ai/>
Supports: one comment period **11 Aug – 26 Oct 2026 (11:59 PM MST)**, with 4 Sept 2026 as an
interim-revision cut-off (both dates confirmed from the Notice); statutes effective **1 Jan 2027**;
**proposed Rule 7.7** — meaningful human review and reconsideration: independent reviewer, no ADMT
assistance, outcome stayed where possible, reasons tied to the consumer's own evidence and
explicitly *"not a recitation of the ADMT's general logic"*, burden on the deployer to show review
is not commercially reasonable; the whole right qualified *"to the extent Commercially Reasonable"*;
**inability to accurately explain the principal reasons is a violation in itself**.
⚠ The rulemaking hearing date: coag.gov did not state one. Not spoken or shown.
⚠ Every reference on air is "proposed" / "would require" — the rules are under revision to 26 Oct.

⚠ **Duane Morris, Class Action Defense blog, 27 Aug 2026** — corroboration only for the "meaningful
human review and reconsideration" content; the script rests on the filed rule text above.
<https://blogs.duanemorris.com/classactiondefense/2026/08/27/colorados-proposed-rules-require-meaningful-human-review-and-reconsideration-of-employment-decisions-materially-influenced-by-ai/>

⚠ **Colorado AI Act suspension (27 Apr 2026), the xAI suit and DOJ's motion to intervene (24 Apr
2026), and the May 2026 repeal-and-replace (SB 26-189)** — from the deep-research pass's public
record reads. The episode reports the filings and holdings only and names no party's motive. Neither
xAI nor DOJ is named on screen.

## What an explanation legally IS — the Court of Justice, twice

✅ **CJEU, C-203/22 *Dun & Bradstreet Austria*, judgment of 27 Feb 2025**, and **Press Release
No 22/25** (extracted in full with `pypdf`).
<https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-02/cp250022en.pdf>
Supports: a mobile telephone operator refused a customer a contract on her automated credit score;
the contract would have been **€10 a month**; *"the mere communication of an algorithm does not
constitute a sufficiently concise and intelligible explanation"*; the explanation must let the data
subject *"understand and challenge"* the decision; complexity is no excuse; where trade secrets are
claimed, the controller hands the information to the **supervisory authority or court, which
balances** — the EU names a referee.

✅ **CJEU, C-634/21 *SCHUFA Holding (Scoring)*, judgment of 7 Dec 2023**, and **Press Release
No 186/23** (extracted in full).
<https://curia.europa.eu/jcms/upload/docs/application/pdf/2023-12/cp230186en.pdf>
Supports: scoring *"must be regarded as an 'automated individual decision' … in so far as SCHUFA's
clients, such as banks, attribute to it a determining role"* — the decision attaches at the scoring
stage.

## Do explanations help a human catch a bad decision? — the randomised trial

✅ **Jabbour S, Fouhey D, Shepard S, Valley TS, Kazerooni EA, Banovic N, Wiens J, Sjoding MW.
"Measuring the Impact of AI in the Diagnosis of Hospitalized Patients: A Randomized Clinical Vignette
Survey Study." JAMA, 19 Dec 2023.** <https://doi.org/10.1001/jama.2023.22295>
Abstract retrieved verbatim via the Europe PMC REST API (pubmed, ihpi.umich.edu and psnet.ahrq.gov
refused automated fetching). Supports every trial figure spoken or shown: **457 clinicians, 13 US
states**, 9 vignettes of acute respiratory failure; baseline accuracy **73.0%** (95% CI 68.3–77.8);
standard model **+2.9 pp** without explanations / **+4.4 pp** with; systematically biased model
**−11.3 pp** without / **−9.1 pp** with; explanations' rescue effect **+2.3 pp (95% CI −2.7 to 7.2),
not significant**; the paper's own Importance statement that regulators had called for explanations
and *"the effectiveness of this strategy has not been established."*
⛔ **"Explanations made it worse"** — false; the biased-model arm moved 2.3 pp in the helpful direction.
⛔ **"Explanations don't help"** — overstated; against the correct model they did (+4.4 vs +2.9).
⚠ A vignette survey study, not a trial on live patients — said on air and on screen.

## Can a post-hoc explanation be faithful? — the mathematics

✅ **Günther E, Szabados B, Bhattacharjee R, Bordt S, von Luxburg U. "Informative Post-Hoc
Explanations Only Exist for Simple Functions." arXiv 2508.11441, 18 Aug 2025** (34 pp, extracted).
<https://arxiv.org/pdf/2508.11441>
Supports: an **informativeness** result (explicitly NOT a computational-complexity one — the paper
disclaims that angle); gradient and counterfactual explanations non-informative w.r.t.
differentiable functions; **SHAP and anchor explanations non-informative w.r.t. decision trees**;
conditions for informativeness derived and *"often stronger than what one might expect"*; quoted:
*"a rigorous mathematical rejection of the idea that it should be possible to explain any model"*
and *"An explanation cannot be something that the developer of an AI system simply 'invents'."*
⛔ The scouting brief's phrasing "computationally intractable" — wrong discipline, wrong claim. Not used.

✅ **"Are We Merely Justifying Results ex Post Facto? Quantifying Explanatory Inversion in Post-Hoc
Model Explanations." arXiv 2504.08919** (23 pp, extracted). <https://arxiv.org/pdf/2504.08919>
Supports: LIME and SHAP are *"prone to such inversion, particularly in the presence of spurious
correlations, across tabular, image, and text domains."* Corroborating, same direction.

## Do interpretable models sacrifice accuracy? — contested three ways

✅ **"It's Just Not That Simple: An Empirical Study of the Accuracy-Explainability Trade-off in
Machine Learning for Public Policy." ACM FAccT 2022** (19 pp, extracted).
<https://facctconference.org/static/pdfs_2022/facct22-3533090.pdf>
Supports: explainability measured by whether a human can anticipate the model's output *"is not
directly related to whether a model is a black-box or interpretable"*; *"black-box models may be as
explainable to a [human-in-the-loop] as interpretable models"*, because of *"weaknesses in the
intrinsic explainability of interpretable models"* and because *"more information about a model may
confuse"* the human.

⚠ **Rudin C. "Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use
Interpretable Models Instead." Nature Machine Intelligence, 2019 (arXiv 1811.10154).**
Supports the "myth" position: the accuracy trade-off is *"often a myth"* for structured data with
meaningful features. Cited from its published abstract; presented as one of three positions, not as
settled.
⛔ **"Just use interpretable models" as the settled fix** — not carried; FAccT 2022 rejects both camps.
