# ep23 — Is AI now building the next AI — and would we know?

_The full research behind the episode. Episode grade: a peg hunt (2026-09-24), a 41-agent deep-research-v3 fan-out (run `wf_5bb88771-fe1`: 116 claims, 12 verified with the primary opened, 11 held, 1 flagged, 18 gaps), and a four-way hand pass that opened OpenAI's and METR's own pages, every Anthropic and Google figure's own source, the independent and sceptic record, the named insiders' own posts and the disclosure rules. Provenance per claim is in the sources list and the fact-check log._

**The question.** The labs say their models now write most of their code and are starting to do AI research. Is the loop actually closing — and what would someone outside a lab need to see to know?

**No show-model disclosure (Lucas, 2026-09-30, per the 09-28 ruling).** No line on air or in the description says the show runs on Claude. Fairness is by weight instead: every Anthropic figure is said as Anthropic grading itself (several are graded by a Claude model, and METR's "outside" estimate was edited by Anthropic), at the same weight as OpenAI's and Google's. The close's AI-tools disclosure is unaffected.

**The viewer's stake: jobs (Lucas, 2026-09-30).** See § The stake. ⛔ The record on jobs is thin and mixed; the stake is the viewer's *question*, not a claim that AI is taking jobs.

## ⛔ Read first — what the record does not support
- **No lab claims the loop is closed.** OpenAI: "Fully autonomous recursive self-improvement … is not happening today." Anthropic: "As of August 2026, Claude is not operating fully autonomously for any measured subset of AI R&D work." METR on Opus 5.5: "unlikely to be able to fully automate AI R&D." The fight is about the *slope*, not the state.
- **Every headline number measures effort, not results.** OpenAI's 3.1 is agent runtime over human workdays; Anthropic's 80 % is lines of merged code; Google's 75 % is code "AI-generated and approved by engineers". No source measures research *output*, and none separates AI labour from compute growth — which OpenAI itself names as a confound.
- **No outsider has audited any lab's internal figure.** Not Anthropic's 80 %, 8×, 51 → 64 %, 97 %, or 26 %; not OpenAI's 3.1; not Google's 75 %.
- **The money-timing case is timing only.** Raises and IPO filings sat in the same weeks as the claims; the S-1s are confidential; no document shows intent. Say "the same weeks", never "timed to".
- **Insiders' extinction percentages are personal estimates**, not evidence about R&D automation. Hook only; never debated as figures.

## Why now
- **Co-peg (added 2026-09-30, peg refresh).** "What if automating AI R&D triggers an intelligence explosion?" (arXiv 2609.36054, "Submitted on 28 Sep 2026"; CASP, Cambridge). 22 authors including Jakub Pachocki (OpenAI), Jack Clark (Anthropic), Geoffrey Hinton, Yoshua Bengio, Eric Horvitz, Dawn Song. "AI systems are on track to automate most AI R&D work within a few years, and possibly all of it"; "substantial automation could occur without external visibility"; "Policymakers should urgently obtain more visibility into the automation of AI R&D" ([arXiv](https://arxiv.org/abs/2609.36054)). This is the episode's "would we know?" asked in public by insiders from both labs. ⚠ A forecast and a policy call, not a measurement; the numbers below carry the evidence. It names "labor market disruption" among the risks an explosion would bring forward.
- **Supporting (09-30).** METR's president, written Senate testimony: "By default, I expect the public will have weak visibility into these issues" ([METR](https://metr.org/blog/2026-09-30-chris-painter-senate-testimony/)). The hearing is about incidents (ep22 ground) — support, not lead.
- **Description line at most (09-23).** The Sanders/Casar Ban Artificial Superintelligence Act names the mechanism — "the capacity for AI to develop new AI instead of humans" (Casar) ([release](https://www.sanders.senate.gov/press-releases/news-sanders-casar-introduce-legislation-to-create-new-federal-agency-to-ban-artificial-superintelligence-pause-advanced-ai-development/)). Partisan, unlikely to pass.
- **Hot peg (description).** OpenAI, "Research acceleration: The view inside OpenAI" (2026-09-06): "we have now reached the goal … of having an automated research intern", and "as of mid-August, in total, the research organization uses 3.1 agent-workdays of effort for every workday of human labor"; it says labs "should be required to publicly track our progress toward RSI" ([OpenAI](https://openai.com/index/research-acceleration-view-inside-openai/)). On 2026-09-22 METR published its assessment of Claude Opus 5.5: "~1.5X overall acceleration in capabilities due to AI (i.e. 1.5 years in 1 year), with perhaps 30% chance of 2X acceleration" — from "a separate METR team" that "was not able to share the supporting evidence", in a summary "Anthropic had the opportunity to review and edit" ([METR](https://metr.org/blog/2026-09-22-claude-opus-5-5/)).
- **Also this month**: Anthropic's "Measurements for understanding the pace of AI development" (~09-17): Claude "leads" 26 % of Anthropic's AI R&D work, rated by "An independent Claude judge" ([Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development)); the pacing essay (09-12: it "is starting to happen across the industry"); a researcher's resignation (09-08) and colleagues' public estimates.
- **Structural peg (script).** Labs have begun publishing their own measures of how much AI does AI research — and one has called for companies to be required to track it publicly — while outside evaluators get limited access to check.

## Settled (not the debate)
1. **AI does most of the routine execution inside frontier labs.** Anthropic: "As of May 2026, more than 80% of the code we merge into Anthropic's codebase was authored by Claude" (share of merged lines). Google: "75% of all new code at Google is now AI-generated and approved by engineers, up from 50% last fall" (Cloud Next, 2026-04-22) — its definition moved from "reviewed and accepted" suggestions (Oct 2024: "more than a quarter") to "written by agents". OpenAI: 3.1 agent-workdays per human workday, up from 0.48 in May (28-day trailing average).
2. **Research direction is not automated — by every lab's own account.** OpenAI: "High-level planning still remains a minimal fraction of agent output tokens"; "over half of successful 4-8 hour tasks involved 1 or more interventions" (Jan–Jul 2026); its intern "carr[ies] out well-defined research tasks under human direction"; the "automated AI researcher" is a target for March 2028. Anthropic: "research taste and judgment, including choosing which problems matter, which results to trust, and when an approach is a dead end" is where AI still falls short.
3. **Agents can do bounded research tasks end to end.** Anthropic's weak-to-strong experiment (April 2026): nine Claude Opus 4.6 agents recovered 0.97 of a performance gap "within 5 days (800 cumulative hours across 9 AARs)" for about $18,000; "two authors spent 7 days" and reached 0.23. A separate study (August): Sonnet 5 post-trained an early Opus 4.8 checkpoint in about 60 hours with about 2,400 examples to 65 % on audits — "The released Claude Opus 4.8 reaches 72%". Humans set each agent's starting direction and threw out agents' reward hacks.
4. **Capability is rising fast on METR's clock.** METR's time horizon (the length of task, in expert-human time, a model completes 50 % of the time) has doubled every ~129 days since 2023 (CI 104–158; the long-run rate was ~7 months). Its latest measurement — an early Claude Mythos Preview, April 2026 — is about 1,045 minutes (~17 hours; CI ~8.5–55 h), past METR's own warning that "Measurements above 16 hrs are unreliable with our current task suite". Reliable horizons "at 99%+ reliability levels cannot be fit at all"; error bars "a factor of ~2 in each direction".
5. **The independent record shows effort rising, not discovery accelerating.** METR's discoveries note: security-vulnerability reports "accelerated sharply" (cURL CVEs 9 → 36), exploited vulnerabilities only slightly; Stockfish "no sign of acceleration"; the matrix-multiplication exponent "no acceleration". An independent case study: agents "completed all of the engineering without human help, yet could not make substantial progress towards answering the research questions". METR's 2025 trial: experienced developers took 19 % longer with AI (CI +2 % to +39 %), having predicted 24 % faster; its 2026 follow-up calls its own new data "only very weak evidence".
6. **Nobody is required to publish this.** SB 53 and New York's RAISE require quarterly summaries of catastrophic risk from internal use — confidential, to the state. The EU Code of Practice lists "capabilities to automate AI research and development" as a risk source and asks for a model's "use in the development … of models" — reported to the AI Office, not the public. The only public trackers are non-profits and a benchmark (the Vals RSI Index, which Claude Opus 5.5 leads at 37.13 %).
7. **Headcount is rising.** OpenAI ~1,500 (July 2024) → ~4,500 (March 2026); Anthropic ~2,300 (Dec 2025) → 3,000+ (Aug 2026) (Epoch's tracker). BLS projects software-developer jobs +15.8 % for 2024–34 (a projection).

## The stake — what this means for the viewer's job (Lucas, 2026-09-30)
The journey: *if AI can do the work of the people who build AI — the best-paid coders in the world — what does that say about my job?* The record answers it honestly only if the episode keeps three things apart: AI writing code, AI doing research, and AI replacing people.
- **The people closest to it are being hired, not fired.** OpenAI ~1,500 (July 2024) → ~4,500 (March 2026); Anthropic ~2,300 (Dec 2025) → 3,000+ (Aug 2026) (Epoch's tracker) — in the labs where AI writes four lines of code in five.
- **Software jobs fell, then partly came back — at the top.** Indeed Hiring Lab (2026-07-08): US software-development postings up "almost 15%" since late February 2025 while all postings fell 7%; but still "about 27.5% below their pre-pandemic level"; "71% of the increase … between May 2025 and May 2026 is from senior roles, and 37% is due to jobs that mention AI in their title". Indeed: "correlation does not imply causation"; the most AI-exposed occupations fell most May 2022 → May 2026, and the decline "began before the release of ChatGPT".
- **The official projection still grows.** BLS: software developers +15.8 % for 2024–34, "over 267,000 jobs", the largest increase among the occupations it lists (a projection, not a measurement).
- **The worry is about speed, not today.** The co-peg paper lists "labor market disruption" as a risk an intelligence explosion would bring *forward* and asks for emergency plans for "significant labor market impacts" — a forecast. Kokotajlo's slope test is the viewer's check.
- **Where the job question meets the episode's question:** the senior-heavy rebound fits the settled finding — AI does execution, people keep direction. The viewer's version of the dial: *is the part of my job that's direction growing or shrinking?*
### The bottom rung — junior hiring (search 2026-09-30; primaries in `lab/evidence/ep23/E-jobs-*.txt`, every quote grep-checked)
The fear a viewer brings is not "will the senior engineer go" but "will there be a first job". The record agrees the bottom rung shrank; it does **not** agree why.
- **The ladder is top-heavy.** Indeed (2026-07-23, "Tilting Toward Seniority"): entry-level was "4.5% in software development in Q1 2026", senior "69.3%"; across all US postings 46 % are entry-level. All-industry entry-level postings down "7.5% year-over-year as of May 2026". Postings, seniority algorithm-labelled (entry = 0–1 years). Indeed lists AI, remote work, rates and post-pandemic right-sizing: "All of these factors may be at least partially at play."
- **New CS graduates are out of work more than most.** NY Fed (released 2026-08-06): recent graduates (22–27) unemployed "about 5.6 percent" (Q2 2026). By major (2024 data): computer engineering 7.78 %, computer science 6.99 %, all majors 4.21 % — while those majors still start at the top of the pay table ($90k, $87k). Unemployment; no causal claim.
- **The payroll evidence for AI (hedged by its authors).** Stanford "Canaries" (Brynjolfsson, Chandar, Chen; revised 2026-08-12, ADP payrolls): 22–25-year-olds in the most AI-exposed jobs "now stands 19% below where it would be" beside less-exposed peers — in levels −11 % vs +10 %, Nov 2022 → Jun 2026 — mainly through reduced hiring. "descriptive patterns, not causal estimates". Census working paper (Tucker, CES-WP-26-27, April 2026, government records): the most AI-exposed industries "shed over 150,000 early career jobs" (22–24); "some caution in attributing all of this to AI" (rates may explain up to a quarter).
- **The evidence against AI as the driver.** NY Fed (Audoly, Guerin, Topa, 2026-05-14, postings): "we do not observe a divergence in labor demand between junior and senior positions within highly exposed occupations"; the decline predates ChatGPT. NY Fed (Emanuel, Harrington, Pallais, 2026-06-01): "remote work can explain 64 percent" of the rise in young-graduate unemployment ("back-of-the-envelope"). EIG (2026-03-05): young people "of all types" are lagging, degree or not. Yale Budget Lab (2026-09-15): the data "does not provide clear evidence of labor market disruption" from AI.
- **The lab's own reading.** Anthropic (2026-03-05): "a 14% drop in the job finding rate" for 22–25s in exposed jobs, "just barely statistically significant"; no rise in unemployment. Anthropic grading its own product's effect — label it.
- **Steelman, AI:** two independent payroll sources (ADP, Census) show young workers' hiring falling in exposed jobs while older workers in the same jobs are fine, the gap still widening in 2026 after rates peaked. **Steelman, not AI:** junior and senior postings move together; remote work and rates explain much; young non-graduates fare as badly; aggregate data shows nothing; Stanford's gap halves once education is controlled.
- **Picture it:** about one software posting in 22 is for a beginner — against nearly one in two across all jobs (Indeed). A new CS graduate is ~1.7× as likely to be unemployed as the average new graduate (7.0 % vs 4.2 %, 2024).
- **How it lands in the episode:** the settled finding (AI does execution, people keep direction) is exactly the junior/senior split — execution is the work juniors learn on. That is the viewer's dial, and it is the same "would we know?": the evidence that would settle *why* is as missing for jobs as for research.

### Traps for the jobs beat
- ⛔ "Indeed entry-level −28 %" — in neither Indeed post; off air. ⛔ "Young software developers down nearly 20 %" is the Nov 2025 Canaries revision (data to Sep 2025), not the Aug 2026 paper — off air unless dated as such.
- ⛔ 19 % is a GAP vs peers, not a fall. Say "fell about 11 % while their less-exposed peers grew 10 %".
- ⛔ SignalFire's "down roughly 65% at the Tech Majors… compared to 2019" is a VC firm's own data, method sketched, and it asserts AI as cause — at most attributed, never as a measurement. (Same post: the "AI Code Apocalypse" "has failed to materialize".)
- Indeed's "Tilting" post says entry-level is down 6.3 % in its key points and 6.2 % in its body — don't air that figure. NY Fed ranks CS 4th of 75 by unemployment (snippets say "tied for fifth").
- Not opened: Hosseini Maasoum & Lichtinger "seniority-biased" (SSRN) — off air.
- Nothing links *lab R&D automation* to jobs outside tech. Don't say "AI is taking coding jobs" or "creating them"; say what happened to the bottom rung and that nobody has shown why.

## The contested core (both steelmanned)
### GREEN — "The loop is closing — and the curve says so."
- **The doubling time shortened.** Seven months became about four (~129 days since 2023) on the one outside clock everyone cites; the latest model is past the ruler's end.
- **Execution is the bulk of research labour, and it is already automated.** Four-fifths of Anthropic's merged code, three-quarters of Google's, three agent-days for every human day at OpenAI — up from about half a day in early May.
- **Agents beat humans on bounded research.** 0.97 vs 0.23 on the same problem; a model post-training its own successor to within seven points of the shipped version.
- **An outside team says it is already speeding things up** — ~1.5×, with a 30 % chance of 2× — and OpenAI itself wants mandatory public tracking. You don't ask to be measured on something you think is fake.
- **The people nearest it are leaving and saying so**, at personal cost — the only evidence in the record that is not a lab's own number.

### GOLD — "Every number counts effort. None counts discoveries."
- **3.1 is runtime.** Summed agent wall-clock over 8-hour human days — parallel agents stack. OpenAI calls its own indicators "relatively easy to gather, but hard to interpret"; a critic works it out as "24.8 machine-hours of execution for every eight hours of human labor", "not a measured 3.1-fold increase in research productivity".
- **Code share is not research.** Anthropic calls its own 8× "almost certainly an overstatement of the true productivity gain"; its judgment and leadership scores are graded by Claude.
- **Where output is measured, it hasn't bent.** Stockfish, the matrix-multiplication exponent, the speed-run records: no acceleration. The one open-ended test: engineering yes, answers no.
- **Self-reports point the wrong way.** Developers felt 20 % faster while 19 % slower; workers self-report 3× speed for 1.4–2× value.
- **The "independent" check isn't.** METR's 1.5× came from a team that couldn't show its evidence, covered an unspecified period, and was edited by the lab. METR takes no company money but "frontier AI companies currently provide a significant amount of free tokens".
- **Compute is the confound.** OpenAI: "our available compute has also grown significantly since 2025". The one paper built to separate compute from researchers gets opposite answers depending on the specification.
- **We've been here before.** The last "AI designing AI" wave (neural architecture search) lost to random search.

## The reframe — what the shouting gets wrong
"Is AI building AI, yes or no?" is answered with numbers that count *effort* — agent hours, lines of code, share of commits — and both sides argue over them as if they measured *results*. No source claims they do. The labs and their critics agree more than the shouting suggests: execution is heavily automated, direction is not, humans intervene on most long tasks, and the current metrics cannot say whether research is speeding up. The real test an outsider can run is whether the *rate* of frontier progress changes — measured on things the labs don't grade themselves.

### Both quietly agree
Nobody outside the labs can see the internal data that would settle it. OpenAI says labs should be required to track it publicly; Anthropic proposes embedding independent evaluators; the sceptics demand exactly that. The disagreement is only about what the missing numbers would show.

## Verdict framing (no winner — hand it to the viewer)
The dial: **which number would change your mind — and who is grading it?** Four live indicators, each with who you're trusting: (1) METR's time-horizon slope — a third party, but a 50 %-reliability ruler that has run out of tasks; (2) OpenAI's human-intervention rate and planning share — OpenAI grading itself; (3) METR's acceleration estimates in system cards — a third party, edited by the lab; (4) public output records the labs don't control — Stockfish, the speed-runs, the maths records — where nothing has bent yet. Plus Kokotajlo's slope test: "If a year from now … there's no visible decrease in slope, then probably we were cheated." You're the jury.

## Script traps
- **3.1 is "for every hour a person worked, agents ran about three"** — never "3.1× more research". The human side counts 8 hours per research-org employee per calendar day (broad "researcher" definition).
- **"Relatively easy to gather, but hard to interpret"** — the page never says "easy to gather, but hard to interpret" without "relatively".
- **METR's 1.5× needs its qualifiers every time**: separate team, evidence not shared, period unspecified, Anthropic edited the text. Never "METR measured 1.5×".
- **Time horizons**: say "over 16 hours — past what METR's tasks can reliably measure" for the frontier; ~129-day doubling since 2023; ~7 months historically. The fan-out's "Opus 4.5 at 4h49m" was the superseded method (and the live figure is now 293 minutes after a March correction) — don't use either as "the latest".
- **Anthropic's 8×** is described three ways on one page (per quarter vs 2021–25; per day vs 2024; lines per contributor per day, a partial quarter). Anthropic calls it an overstatement. If aired, use Anthropic's own caveat.
- **51 % → 64 %** (Opus 4.5, Nov 2025 → Mythos Preview, Apr 2026; n = 129; judged by "A separate Claude"). Anthropic's X post's "up from 22% in 2024" is Claude Haiku 3 — a small model — and the same thread misdates Opus 4 as 2024. Never air 22 → 64.
- **Keep the experiments apart**: 0.97 vs 0.23 is the weak-to-strong study (Opus 4.6 agents, Qwen models); 65 % vs 72 % is the Sonnet 5 → Opus 4.8 sub-study; "roughly 15,000 times more efficient" is in the summary post, not the paper ("two to three orders of magnitude less data") — off air. The institute page's "Direction-setting was the only meaningful role a human played" is contradicted by the paper (humans also discarded reward hacks) — don't use it.
- **Claude "leads" 26 %** — rated by a Claude judge (59 % agreement with staff; staff with each other 35 %). Baseline FOUND 2026-09-30 in the page's chart alt text: "up from under 1% in February 2026" — use that wording, labelled Claude-judged. ⛔ Not the restatements: CASP's "rose from 1% to 26% between March and August 2026" and METR's testimony's "0–1% in February–March".
- **Two doubling paces — never mix them.** The brief's ~129 days is METR's fit since 2023; the CASP paper's "accelerating to about every 3 months since 2024" is a different window. Pick one per beat and name its window. METR has no new measurement since the 2026-05-08 Mythos Preview entry (checked 09-30).
- **OpenAI's top models are reportedly paused** (training, evaluation and tool-using inference since the 09-20 incident — SECONDARY only; OpenAI's own report not opened). The 3.1 figure is mid-August and stands; never imply OpenAI's research is running full speed today.
- **Google 75 %** is Pichai at Cloud Next (a keynote blog), "AI-generated and approved by engineers"; the definition has changed across the series. Microsoft's "20–30 %" and Meta's "half" are secondary and a forecast — off air.
- **METR's 19 %**: early-2025 tools; CI +2 % to +39 %; use for the lesson (self-reports mislead), never as "AI slows developers today".
- **Epoch's interviews** are 2024 (n = 8), not recent; Epoch's taxonomy ratings are "quite subjective".
- **Forethought / Redwood** figures are conditional on *full* automation — never evidence it is happening.
- **Indeed's "entry-level −28 %"** is not in the post — off air.
- **Insiders**: Coxon's words are his own X post ("racing straight to self-improving superintelligence and gambling with our lives"); Hubinger ">10% within the next decade"; Williams "70% in the next 3 years if there isn't regulation/slowdown" (secondary); Chughtai is Bilal, ex-DeepMind. Altman's "the world is right to be afraid" is about AI **companies** getting too much power — never use it as fear of AI itself. Huang's "leave safety to us" is a headline; his words are "it's a false choice". LeCun: no own-words statement found — off air.
- **OpenAI vs Amodei**: OpenAI says autonomous RSI "is not happening today"; Amodei says it "is starting to happen across the industry". Frame both, evenly.
- **Money timing**: Anthropic Series H 05-28 → confidential S-1 06-01 → RSI page 06-04; OpenAI confidential S-1 announced 06-08 → tender 08-10 → research page 09-06; Altman: "I would say not 2026" for an IPO. "Same weeks", not "timed to".

## Figures a viewer can picture (comparator rule)
| figure | comparator |
|---|---|
| 3.1 agent-workdays per human workday | for every hour a person worked, agents ran about three — up from half an hour in May |
| >80 % of merged code (Anthropic), 75 % (Google) | four lines in five; three in four |
| 0.97 vs 0.23 on one problem: nine agents, five days, ~$18k vs two researchers, seven days | the agents closed almost all of the gap; the people closed a quarter |
| time horizon doubling every ~129 days | twice as long a task every four months |
| developers 19 % slower, believed 20 % faster | a forty-point gap between feeling and fact |
| Claude "leads" 26 % of Anthropic's R&D — per a Claude judge | a quarter, graded by the model's sibling |

## Open questions carried to the script
- The period and evidence behind METR's 1.5× (METR says the preliminary report did not specify).
- Whether any lab will publish an OUTPUT measure (results per unit of compute).
- Whether SB 53 / RAISE internal-use summaries will ever be public.
- Kokotajlo's slope test resolves ~September 2027.

## Build note: define the agent vocabulary on air (Lucas, 2026-09-28)
The agent explainer (topic #97, idea #53) comes AFTER this episode as a follow-up, so nothing primes the
viewer first. Where the script first uses each term, give a one-line plain definition (on air, not only
on screen), then move on: **AI agent** (a model that takes actions: runs code, browses, uses tools),
**METR time horizon** (how long a task, measured in human working time, an agent can finish half the
time), **recursive self-improvement** (AI doing the research that builds the next AI), **reward hacking**
(it earns the reward without doing the task). Keep each to one short clause; don't promise the follow-up on air.

## Peg candidate: Microsoft's Copilot "Code" + "Autopilot" (Lucas, 2026-09-29) — scout-grade, WEAK fit
Microsoft's redesigned Copilot app (2026-09-25) adds **Code** ("lets everyone build their own solutions",
same underlying tech as GitHub Copilot) and **Autopilot** (a persistent agent that keeps working without
a prompt; private preview end of September).
- **Fit:** weak. This is AI building *software for office workers*, not AI doing the research that
  builds the next AI. ⛔ Don't use it as evidence for recursive self-improvement; that conflates the two.
  At most a description line on how fast agents are reaching ordinary users. Its real home is the
  planned personal-agents explainer (#97).
- Sources: https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/
  · https://fortune.com/2026/09/25/microsoft-unveils-copilot-super-app-targeting-business-users-with-ai-agents/
