# ep23 — fact-check log

Status: **adversarial-pass** — a peg hunt (2026-09-24), the deep-research-v3 engine's 12 primary-opened verifications, and a four-way hand pass on the primaries the engine could not open (OpenAI's and METR's pages read directly, METR's raw time-horizon data, every Anthropic and Google figure's own source, the independent and sceptic record, the insiders' own posts, the disclosure rules), each saved as extracted text and every quote relied on grep-checked against it by the main session. The script pass comes at the `validated` gate.

- **CONFIRMED** — the source says what the episode says.
- **CORRECTED** — the source says otherwise; the script was changed, and the change is listed under "Corrections applied to source" below.
- **UNRESOLVED** — could not be established from a source worth trusting, so it is not used on air.
- **APPROXIMATE** — checked, roughly right, and deliberately not cited on air.

## 1. The engine's own work (deep-research-v3, run wf_5bb88771-fe1, 2026-09-24)
116 unique claims from 24 finders (22 reported dead ends) · 12 verified single-vote with the primary opened, all numeric · **11 held, 1 flagged** · 104 not adjudicated · 18 gaps · 41 agents · 2.97 M tokens · 8.8 min.
**Flagged (1) — re-read and resolved:** "METR's TH1.1 gives Claude Opus 4.5 a horizon of ~4h49m (CI 1h49m–20h25m)" — **CORRECTED.** 289 minutes was the superseded TH1 figure; the January TH1.1 table gives 320 [170, 729]; the live data now gives 293.0 [161.7, 623.7] after a March 2026 correction. None is "the latest horizon" — that is an early Claude Mythos Preview at ~1,045 minutes.

## 2. The peg — what was hunted, and what was rejected
The blind sweep ran 16 queries with the topic's own vocabulary banned (no lab, model, "self-improvement", "AI R&D", "time horizon" words), the Federal Register API 2026-09-03 → 09-24 (23 presidential documents, 135 rules, notices beyond the API's 1,000 cap partly unscanned — nothing relevant), and named ten counterparties. A blind query on research automation surfaced OpenAI's post unprompted.

| candidate | date | why it ranks where it does |
|---|---|---|
| **METR: ~1.5× AI R&D acceleration; "unlikely" to fully automate** | 09-22 | **Peg, paired.** An outsider measuring — but edited by the lab it measured; weak alone. |
| **OpenAI: "automated research intern"; 3.1 agent-workdays** | 09-06 | **Peg, paired.** The first non-Anthropic research-share figure; a self-report. |
| Anthropic: Claude "leads" 26 % of its AI R&D | ~09-17 | Research figure: Claude-judged, the show's own model — not a peg. |
| METR note on discoveries | 08-14 | Research input; too old for a peg. |
| Epoch: 25 % of August maths preprints acknowledge AI | 09-18 | Rejected: science generally, not AI research. |
| Coxon resignation | 09-08 | Rejected as peg: a forecast and a personality (the scout's peg). |
| Sonnet 5 → Opus 4.8 experiment | ~3 months | Rejected: stale, Anthropic-only. |
| Google 75 % | April | Rejected: stale; code, not research. |
| NVIDIA / Sakana / NeurIPS–arXiv rules / H-1B / Fed speeches | various | Rejected: no number, old, or off-thesis. |
| The Hugging Face incident, OpenAI's RL pause | July–Aug | Rejected: ep20/ep22 ground. |

### Peg refresh (2026-09-30, one Opus subagent; 16 blind queries, Federal Register PRESDOCU 09-17 → 09-30: 10 documents, none relevant)
Every quote below grep-checked by the main session against `lab/evidence/ep23/peg-refresh-*.txt`.
| candidate | date | why it ranks where it does |
|---|---|---|
| **CASP paper "What if automating AI R&D triggers an intelligence explosion?"** (Pachocki, Clark, Hinton, Bengio et al.; arXiv 2609.36054) | 09-28 | **CO-PEG (Lucas's call).** CONFIRMED: "on track to automate most AI R&D work within a few years"; "without external visibility"; "urgently obtain more visibility". A forecast, not a measurement. |
| METR president's Senate testimony | 09-30 | Supporting. CONFIRMED: "weak visibility"; "self-sustaining acceleration". Hearing is about incidents (ep22). |
| Sanders/Casar Ban Artificial Superintelligence Act | 09-23 | Description line at most. CONFIRMED (Casar): "the capacity for AI to develop new AI". |
| GPT-6.1 Sol system card addendum | 09-29 | Not a peg; consistent with the brief. CONFIRMED: "below the High threshold in AI Self-Improvement". |
| OpenAI training pause / GPT-6.1 Astra shelved; 26-AG letter; White House Accord; Anthropic prospectus reports; Coons/Britt bill; Copilot, Meta, Grok, Sonnet 5.5 | 09-23 → 09-29 | Rejected: ep22 ground, off-thesis, or no internal-use provision. The pause is SECONDARY only. |

## 3. Hand pass
### OpenAI and METR
| claim | verdict |
|---|---|
| OpenAI: 3.1 agent-workdays per human workday | **CONFIRMED, defined.** "as of mid-August, in total, the research organization uses 3.1 agent-workdays of effort for every workday of human labor"; "Total agent runtime is summed … converted at a rate of eight hours per workday"; human side 8 h per research-org employee per calendar day; "rises from 0.48x to 3.14x" (28-day trailing, May 3 → Aug 15). Runtime, not output. |
| "Automated research intern" reached; March 2028 researcher target | **CONFIRMED.** Intern = "carry out well-defined research tasks under human direction". |
| >half of 4–8 h tasks needed intervention | **CONFIRMED.** "In the last 6 months, over half of successful 4-8 hour tasks involved 1 or more interventions" (Jan–Jul 2026; graded by a GPT-5.6 Sol classifier checked against n = 25). |
| "High-level planning … minimal fraction" | **CONFIRMED** — of agent output tokens. |
| "Easy to gather, but hard to interpret" | **CORRECTED (wording).** "relatively easy to gather, but hard to interpret". |
| Compute confound; call for mandatory public tracking | **CONFIRMED.** "our available compute has also grown significantly since 2025"; "should be required to publicly track our progress toward RSI". |
| METR ~1.5×, 30 % chance of 2× | **CONFIRMED, with METR's qualifiers**: "the preliminary report did not specify the time period"; "a separate METR team with elevated access" that "was not able to share the supporting evidence"; "Anthropic had the opportunity to review and edit the text"; "unlikely to be able to fully automate AI R&D"; data "insufficient for distinguishing consistent, accelerating, or decelerating rates". |
| Time-horizon doubling ~4 months; latest horizon | **CORRECTED/UPDATED.** Raw data: ~128.7 days since 2023 (CI 104.4–158.0; excludes points above 16 h); long-run ~7 months (v1.0 all-time ~201 days). Frontier: an early Claude Mythos Preview, 1,044.8 min (CI 508.9–3,304.3); page notice: "Measurements above 16 hrs are unreliable with our current task suite" (2026-05-08). No Opus 5.5 or newer OpenAI horizon published. |
| METR limitations | **CONFIRMED.** 99 % "cannot be fit at all"; "factor of ~2 in each direction"; 40–100× lower on visual computer use. |
| METR's independence | **CONFIRMED as stated.** "We have not accepted funding from these companies … However, frontier AI companies currently provide a significant amount of free tokens"; ~$71 M raised; the RSI-tracking project has no published method (UNRESOLVED). |

### Anthropic and Google
| claim | verdict |
|---|---|
| >80 % of merged code authored by Claude | **CONFIRMED** ("As of May 2026, more than 80% of the code we merge into Anthropic's codebase was authored by Claude"; share of merged lines). Page dated by capture: 2026-06-04. |
| 8× more code | **CORRECTED.** Three descriptions on one page (per quarter vs 2021–25; per day vs 2024; lines per contributor per day, partial Q2 2026); Anthropic: "almost certainly an overstatement of the true productivity gain". |
| 97 % vs 23 % in 800 h for $18k | **CONFIRMED, located.** The weak-to-strong study (April 2026): nine Opus 4.6 agents, Qwen models; "two authors spent 7 days". Humans also set directions and discarded reward hacks — the institute page's "Direction-setting was the only meaningful role a human played" understates that. |
| Research judgment 51 % → 64 % | **CONFIRMED, qualified.** Opus 4.5 (Nov 2025) → Mythos Preview (Apr 2026), n = 129, graded by "A separate Claude". |
| "Up from 22% in 2024" (Anthropic's X post) | **CORRECTED.** 22 % is Claude Haiku 3; the same thread misdates Opus 4 as May 2024. Off air. |
| Mythos Preview is an Anthropic model | **CONFIRMED** (2026-04-07; not generally available). |
| Sonnet 5 → Opus 4.8: ~2,400 examples; 65 % vs 72 % | **CONFIRMED.** The summary post's "just over 2,000" and "roughly 15,000 times more efficient" are not in the paper ("two to three orders of magnitude less data") — **APPROXIMATE**, off air. |
| Claude "leads" 26 % of Anthropic's AI R&D | **CONFIRMED** — rated by "An independent Claude judge" (model–staff agreement 59 %, staff–staff 35 %). "Under 1 % in February" — **CONFIRMED 2026-09-30** (was UNRESOLVED): the chart's alt text, "up from under 1% in February 2026". Later restatements (CASP "from 1% to 26% between March and August"; METR testimony "0–1% in February–March") differ — Anthropic's wording only. Also: "As of August 2026, Claude is not operating fully autonomously for any measured subset of AI R&D work." |
| Any outside audit of Anthropic's figures | **UNRESOLVED — none found.** |
| Google 75 % (earnings call) | **CORRECTED (venue).** Cloud Next keynote blog, 2026-04-22: "75% of all new code at Google is now AI-generated and approved by engineers, up from 50% last fall". Series: Oct 2024 "more than a quarter … reviewed and accepted"; Feb 2026 "About 50% … written by agents" — definition changed. |
| Microsoft 20–30 %; Meta "half" | **APPROXIMATE** — secondary (CNBC); Meta's is a forecast. Off air. |

### The independent and sceptic record
| claim | verdict |
|---|---|
| METR RCT −19 % | **CONFIRMED**; CI +2 % to +39 %; predicted +24 %, believed +20 %. Follow-up: "only very weak evidence", estimate "likely a lower-bound". |
| METR survey: 3× self-reported speed, 1.4–2× value | **CONFIRMED** (349 workers; convenience sample, ~2 % response). |
| METR discoveries note | **CONFIRMED.** cURL CVEs 9 → 36; vulnerabilities "accelerated sharply"; exploited "small acceleration"; Stockfish "no sign of acceleration"; matrix exponent "no acceleration". |
| SWE-bench Verified: 59.4 % of 138 failures flawed | **CORRECTED (wording).** "59.4% of the 138 problems contained material issues". |
| Sakana 6.33 at a workshop; BadScientist 82 % | **CONFIRMED.** Workshop acceptance 60–70 %; 1 of 3 accepted; withdrawn. BadScientist: "up to 82.0%" at the looser threshold (67.0 % at the venue-matched one), LLM reviewers. |
| AI Scientist evaluation; open-ended case study | **CONFIRMED.** "five out of twelve proposed experiments (42%) failed due to coding errors"; agents "completed all of the engineering without human help, yet could not make substantial progress towards answering the research questions". |
| Epoch taxonomy; interviews "20–50 % … extremely optimistic upper bound" | **CONFIRMED / CORRECTED (date).** The interviews are **2024** (n = 8). Ratings "quite subjective". |
| Epoch: compute-bottleneck evidence weak | **CONFIRMED** ("shaky"). Training-compute growth: Epoch's own pages give 4.4× / 4.5× / 4.7× per year — **APPROXIMATE**; say "roughly four to five times a year". |
| Whitfill & Wu | **CONFIRMED — two opposite answers** (σ = 2.58 substitutes; σ = −0.10 complements); the paper does not choose. |
| Forethought ~60 % / ~20 %; Redwood 3.5 years | **CONFIRMED** as conditional forecasts on full automation. |
| NAS: random search matched ENAS | **CONFIRMED.** |
| Headcount; Indeed; BLS | **CONFIRMED** (OpenAI 1,500 → 4,500; Anthropic 2,300 → 3,000+; postings "almost 15%"; "71% of the increase" senior, May 2025–May 2026; BLS +15.8 %). Indeed "entry-level −28 %" **UNRESOLVED** — not in the post. |

### Insiders, sceptics, money, rules
| claim | verdict |
|---|---|
| Coxon, Hubinger, Williams, Chughtai, Kokotajlo | **CONFIRMED** in their own words (Williams via secondary); Chughtai is Bilal. |
| Altman: "the world is right to be afraid" | **CORRECTED (context).** About AI companies getting too much power. Never used as fear of AI itself. |
| Huang: "leave safety to us" | **CORRECTED.** A TechCrunch headline; his words: "it's a false choice". |
| Burry "self-serving" | **CONFIRMED** (his own X post, "IPOs need hype & puffery"). |
| LeCun | **UNRESOLVED** — paraphrase only. Off air. |
| Amodei's four sentences | **CONFIRMED.** |
| OpenAI's policy post: "safety institutes" measure RSI; dated ~09-11 | **CORRECTED.** Dated 2026-09-09; "Governments should develop common ways to measure this progress"; and "Fully autonomous recursive self-improvement … is not happening today". |
| Money timeline | **CONFIRMED** (primary: Anthropic S-1 06-01, Series H 05-28, OpenAI S-1 announced 06-08; secondary: RSI page 06-04, tender 08-10). EDGAR: no lab filing mentions RSI. |
| What rules require | **CONFIRMED.** SB 53 / RAISE internal-use summaries, confidential; EU Code items to the AI Office; no public mandate anywhere. |
| FTC / SEC AI-washing; conference policies | **CONFIRMED** (FTC "no AI exemption"; SEC 2024 actions; NeurIPS's position track: 178 submissions (18.4 %) desk-rejected and 123 more asked for "evidence of substantial human engagement", under its AI-generated-paper policy; ICLR disclosure required). |

### Jobs stake — junior hiring (2026-09-30, one Opus subagent; 18 primaries in `lab/evidence/ep23/E-jobs-*.txt`; 22 quotes grep-checked by the main session, all found)
| claim | verdict |
|---|---|
| Indeed: entry-level 4.5 % of software postings (Q1 2026), senior 69.3 %; all-industry entry-level −7.5 % y/y | **CONFIRMED** (postings; algorithm-labelled; no causal claim). Its 6.3 % vs 6.2 % self-contradiction — off air. |
| NY Fed: recent grads ~5.6 % unemployed (Q2 2026); CE 7.78 %, CS 6.99 %, all majors 4.21 % (2024) | **CONFIRMED** (page highlights + the chart's data file). |
| Stanford Canaries (Aug 2026): 19 % below counterfactual; −11 % vs +10 % in levels | **CONFIRMED**, "descriptive patterns, not causal estimates". 19 % is a gap, not a fall. |
| Census (Tucker): "over 150,000 early career jobs" shed in the most exposed industries | **CONFIRMED**, hedged by the author. |
| NY Fed postings: no junior/senior divergence; remote work explains 64 % | **CONFIRMED** (the latter "back-of-the-envelope"). |
| EIG "young people of all types"; Yale "does not provide clear evidence" | **CONFIRMED.** |
| Anthropic: 14 % drop in job-finding rate, barely significant | **CONFIRMED** — a lab's own research; labelled. |
| SignalFire: new-grad hiring down ~65 % at big tech vs 2019 | **APPROXIMATE** — VC firm's own data, method sketched; attributed only. |
| Indeed "entry-level −28 %"; "young developers −20 %" as current | **UNRESOLVED / CORRECTED** — the first is in no Indeed post; the second is the Nov 2025 revision. Off air. |

## 4. Gaps the critics named — disposition
Closed: OpenAI's page read directly; METR's live horizon; Mythos Preview's identity; the 51/22 baselines; the experiment map; Google's primary; METR's funding; Whitfill & Wu read in full; the conference policies; FTC/SEC; SEC filings (none mention RSI). Open: an OUTPUT measure (none exists); the period and evidence behind METR's 1.5×; Chinese labs' self-reports (none found); Delaware PBC reporting; congressional testimony.

## Corrections applied to source
No script exists yet; every CORRECTED row is written into the research brief ("Script traps").

## Fairness audit
- No show-model disclosure on air or in the description (Lucas, 2026-09-30, per the 09-28 ruling); fairness is by weight. At full weight: Anthropic's figures are self-reports, several graded by Claude; its own X post inflated a baseline (22 %) and misdated a model; its summary post carried a figure (15,000×) not in its paper; METR's "outside" estimate was edited by Anthropic; the Vals index Claude leads is a benchmark, not a measurement of Anthropic's R&D.
- OpenAI's and Anthropic's self-undercutting caveats are credited to them — they published them.
- Neither side is given what the record lacks: green does not get "research is accelerating" (no output measure); gold does not get "the claims were timed for fundraising" (timing only).

## Open questions this episode could not settle
- Any output measure of AI-driven research; the compute/labour split; METR's 1.5× basis; whether internal-use summaries will ever be public.
