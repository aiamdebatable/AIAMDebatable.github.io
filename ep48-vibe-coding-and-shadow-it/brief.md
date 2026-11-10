# Research brief — Vibe Coding: When Anyone Can Build the App, Who Keeps It Safe?

_The full research behind the episode. This is the "full research" we link below the video._

**Episode type: DEBATE.** Two teams argue at full strength; the verdict declares no winner and hands the
viewer one dial to set for their own tool. Why a debate: the record settles **who carries the duty**
when a business-built tool leaks (the company that holds the data, under each of the three regimes read: New York, California and the SEC's disclosure rule), but it cannot
settle **how much review a tool needs before it goes live, or how fast to let building spread**, because
we found no measurement of whether business-built tools are less safe than what they replace, or whether IT's
guardrails prevent anything. That is where the two sides genuinely split (Contested, below).

**Grade:** episode research, 2026-10-27. Peg hunt (2026-10-27: blind sweep with every topic word banned,
the Federal Register for 2026-09-29 to 10-27, EDGAR full-text search, CISA's news index and a wire-style
tech index, then a targeted sweep; 19 web searches) → deep-research-v3 (run wf_da51ac39-b79: 41 agents,
workers on sonnet, 3,625,502 subagent tokens; 119 unique claims, 12 verified at the primary and all held,
107 not adjudicated, 0 flagged, 18 critic gaps; this was the second launch, because the first,
wf_a8577869-233, scoped itself to another episode and was used for that one) → a four-way hand pass on
the primary record: **A** law, disclosure, liability and the peg (67 rows incl. the S-1 rows P1–P13, 2
corrected), **B** the security record (63 rows, 3 corrected), **C** history, auditors and IT's guardrails
(38 rows, 8 corrected), **D** adoption, productivity and jobs (75 rows, 5 corrected). Every relied-on
quote was machine-checked against the saved source: A 94/94, B 99/99, C 90/90, D 100/100. Totals: 243
rows, CONFIRMED 192 · CORRECTED 18 · APPROXIMATE 22 · UNRESOLVED 11.

**How to read the citations.** "(A12)" is hand pass A, row 12; "(B6)" is hand pass B, row 6; "(P3)" is a
peg row (the S-1), all in `factcheck-log.md`. Every fact below cites a row. A claim only the engine made
is marked "engine summary, unverified" and is **not on air**. The hand passes overrule the engine
wherever they differ. "Our arithmetic" marks the show's own computation on quoted figures. Spoken
figures are rounded; the exact figure is for the screen.

**Scope, said early on air:** this is about **business teams (sales, customer service, operations,
finance) building their own apps, automations and agents with AI tools outside IT, in the US**: who
answers when one goes wrong, what the security record actually measures, what history and auditors
already know, and what it is doing to IT work. UK and EU bodies (the NCSC, the ICO, the EU's Digital
Omnibus) appear only as advice from abroad, never as US rules. It is not the jobs episode: the sister
episode (ep46) covers whether AI is taking jobs; here jobs get one beat, on IT work only. It is not a
product review of any coding tool.

---

## ⚖ After the pitch (2026-10-28): the spine changed. The producer's rulings bind.

The producer's rulings (his pitch notes, Rulings 1–8) overrule this brief's liability-first order wherever they
differ. In short:
- **Spine = one app's life and the gut question:** "It works and the team loves it. Who checks it, and who looks
  after it when the builder leaves?" (Ruling 1). **Liability is ONE settled line** (the company that holds the data),
  never the hook or a beat of its own (Ruling 2).
- **The episode is about:** who owns it, who's on call, who may say no; why people go around IT; whether IT can even
  find it; and two angles the original research didn't cover, **apps built on the wrong data** (Ruling 4, top-up T1)
  and **the builder who leaves** (Ruling 5, top-up T2). The case FOR building gets its own sourced side (top-up T3).
- **Peg: Anthropic's S-1 leads** ("Anthropic told investors"; its "unsettled" is Anthropic's own exposure, P6/P9).
  The bank filing comes mid-episode as the close cousin: staff USING an unapproved tool, not building one (Ruling 7).
- **Jobs: one line** (analyst-type work may move from IT into the business; no number; points to ep46) (Ruling 8).
- **The verdict's question is his:** "is the risk worth it?" The record's answer is the dial below: every governed
  model found draws the line at what the tool touches, and every one names an owner who stays.

**Top-ups (2026-10-28): 112 rows · CONFIRMED 72 · CORRECTED 10 · APPROXIMATE 16 · UNRESOLVED 14.** Three top-up hand passes: T1 (27 rows), T2 (44), T3 (41).
Every quote machine-checked against the saved source (T1 24/24 rows, the two misses were escape characters; T2 37/37,
five misses were the engineer's name replaced by "[the engineer]" and PDF line breaks; T3 121/121 quotes). Citations
read "(T1-4)" = top-up T1, row 4. Each top-up's script traps are binding.

### T1 — apps built on the wrong data
- **No business team's vibe-coded app is on record for this; the pattern is.** England's lost Covid cases (2020):
  15,841 cases from 25 Sep to 2 Oct dropped in a hand-built loading step ("a file-size limit", PHE's words), reached
  contact tracing late (T1-1); peer-reviewed work tied each late referral to measurable extra infections (T1-4). The
  Excel row cap airs as "the BBC reported" (T1-2). It was PHE's own pipeline, not shadow IT (T1-3).
- **"Right tool, wrong use": West Coast Main Line, 2012.** A model built for one job was reused for another and its
  outputs misread (real vs nominal), understating by nearly half; the award was cancelled, £8.9m in direct costs by
  Dec 2012 (T1-6, T1-7).
- **The AI case is one founder's account:** Replit's agent, by its user's account, also made fake data, fake reports
  and a database of 4,000 people who didn't exist (T1-12 to T1-14). "He said"; a trial build (beyond the deletion, B44).
- **A tool contradicting the official source:** Air Canada's chatbot; a tribunal held the company responsible either
  way (T1-10; the decision text is still to be opened before air).
- **The famous cost figures are weak:** Gartner's "$12.9m" is vendor reference customers' estimate (T1-16); the
  "$3.1 trillion" doesn't air (T1-17). **How often business-built tools use the wrong source: we found no measurement**
  (T1-19).
- **Regulators: banks only.** Basel/ECB want one authoritative source and an inventory of user-built apps (T1-25,
  T1-27), and few banks comply (2 of 31; 0 of 25) (T1-26, T1-27). ⚠ **Correction to this brief:** US SR 11-7 was
  replaced on 2026-04-17 by **SR 26-2**, which leaves spreadsheet arithmetic and generative/agentic AI outside its
  scope (T1-20 to T1-22). "Regulators require banks to validate vibe-coded tools" is wrong for the US.
- **Airable as a question:** "If the person who built it is the only one who knows where its numbers come from, who
  checks the numbers?"

### T2 — when the builder leaves, and can IT find the app?
- **The platforms say it themselves.** Google: "If someone leaves your organization and their account is removed,
  access to scripts without other owners is lost" (T2-22); untransferred files are permanently deleted after a 20-day
  window (T2-25). Microsoft: a simple flow's owner "is part of the flow identity" (T2-26); a leaver's OneDrive goes
  after 30 days by default (T2-28). Replit: deleting a personal account removes every app on it (T2-33).
- **Where it was built decides it.** A company workspace hands work on (Lovable transfers a leaver's projects except
  Restricted ones, T2-29). A personal account leaves the company no reach: only the builder can move the app in,
  irreversibly and without its secrets (T2-34, T2-35). This IS the dial's "does anyone else know it exists?"
- **Finding it is partial:** discovery matches traffic against a catalogue of known services (T2-38); one employee can
  connect an outside app to their own mailbox by default (T2-40). "Can't see what's inside" is our reading.
- **Bank regulators have asked the leaver question since 2011** (inventory, input sources, owners, documentation "for
  continuity of operations", T2-1 to T2-3); Metro Bank's £5.4m fine named "key person dependencies" (T2-11, T2-12; a
  dependency story, nobody left).
- **Airable only as a question:** whether an orphaned app keeps running. The documents support "nobody can fix it",
  not "it stops" (T2-37). **We found no costed case of a business-built tool orphaned by its builder, and no count**
  (T2-21, T2-43).

### T3 — why people go around IT, and the governed middle
- **The case FOR building, sourced:** the UK NCSC says shadow IT is "rarely the result of malicious intent", names a
  slow request process as a cause, and recommends a fast, controlled route, not blame (T3-1, T3-2). IT leaders' own
  (vendor) surveys say half to 59% didn't finish the year's projects (T3-3, T3-4). But builders' first reasons are
  speed and convenience, and one IT-leader survey ranks "IT can't meet the timeline" last at 9% (T3-7, T3-10): say
  "it's faster and easier", never "IT is the bottleneck".
- **What building delivers: we found no independent measurement.** Every time-saved figure is a self-estimate; the one
  audit (GSA's 240,000 hours) found the claim "inaccurate and unreliable" (T3-12; centrally built bots).
- **The owner models documented:** Microsoft on its own staff (Microsoft's claim) is the only full build-run-retire
  model: a risk rating sets the review, enterprise tools need two named owners re-attesting every six months, idle
  personal environments are deleted at 90 days, **a personal agent is deleted when its owner leaves** (T3-23 to
  T3-27). Gartner's zones (a prescription): staff build in green/yellow; customer-facing or customer data = no staff
  building (T3-28, T3-29). Stripe (its claim): a quarter of staff prototyped on mock data; engineers rebuild for
  production (T3-15, T3-30, T3-31). Ramp is a high-trust example, not a guardrail one (T3-36); its "1,500 apps"
  doesn't air (T3-17). **Who is on call for a non-engineer's app at Ramp or Stripe: not published** (T3-38).

### The beat order now (replaces "Make it Matter" below where they differ; the writer owns the words)
1. **Cold open, the gut question** on one made-up app: an afternoon build, the team loves it. One-line definition of
   vibe coding; the S-1 as why now.
2. **Why it got built** (T3: faster, easier, a slow queue; the NCSC's "rarely malicious").
3. **Month three, it spreads, and it's built on the wrong data** (T1: Covid cases, West Coast Main Line; Replit's
   fake data, attributed). Who checks the numbers?
4. **The security record** (as in the brief: unmeasured against what it replaces; the bank filing as the cousin).
5. **The builder leaves** (T2: the platforms' own pages; personal vs company account; can IT even find it?).
6. **The leak, and the one settled line:** the company pays (liability, one breath).
7. **The two sides, then the governed middle** (T3: Microsoft, Gartner, Stripe), the jobs line (one).
8. **Verdict dial:** "How much does your tool touch?" (just me / my team and company data / customers' data) crossed
   with "who looks after it when I leave?", ending on the three checks: does anyone else know it exists, what does
   it touch, who looks after it when I leave.

---

## The pitch, in one line

**Anyone at work can now build the app. When it leaks, the law already puts the duty on the company
that holds the data, and doesn't ask who built the tool. What nobody has settled is the part before the
leak: does anyone know the tool exists, and what data does it touch?** New York's and California's
data-security laws put the duty on whoever owns, licenses or maintains the data, and the SEC's rule
covers systems the company "owned or used", with no carve-out for who built them (A5, A6, A17, A27).
The one public filing found that names an unapproved AI tool came from a bank: an internal incident in which customers' names, Social Security numbers and dates of
birth were handled with "an unauthorized artificial intelligence-based software application" (A8, A10,
A14). And the company selling one of the tools told
investors, in its IPO filing, that the law on its own liability for its agents' actions is "unsettled"
(P6, P9): its own exposure, in required risk language. **The real fight is not IT against the business. It is how much a tool touches before someone
else has to know it exists.**

## The viewer's moment

**It starts with a question, not a policy: "If I build something at work with AI and it leaks, who's on
the hook?"** The episode answers it first, plainly: legally, the company that holds the data, under
every law read (A17, A27); the one filing on record came from an internal incident in which customer data was handled with an AI
application nobody had authorized (A8); and the person who built it is not off the hook in every sense,
because the documented consequences for staff are a trade-secret lawsuit and a threat of firing, not
hacking charges (A38, A39, A41).
Then the question goes to three people, each with one moment and one number. (Invented and unnamed.
Each is built only from figures in the log.)

- **The salesperson who built a tool that works.** The moment: it runs, the team loves it, and it took
  an afternoon. The number: in Anthropic's own study of its coding tool's users, sales is among the
  fastest-growing non-software groups, and non-engineers' code-producing sessions succeed 29% of the
  time against 34% for software workers (D12, D13). ⚖ What working is not: in a peer-reviewed benchmark,
  an AI agent's solutions worked 57% of the time but only 11.8% were secure (B31); and in a study of
  people coding with an assistant, those with AI were more likely to believe their code was secure (B28).
- **The IT person who finds it after it leaks.** The moment: the first they hear of the app is the
  incident. The number: among organisations that had a data breach, the share whose incidents involved
  "shadow AI" (staff using unapproved AI) more than doubled, from 20% in IBM's 2025 study to 43% in 2026
  (B6). IBM separately prices not knowing how many apps exist and where ("shadow IT") at about $201,000
  added to an average breach (B17). ⚖ Both are shares and costs among breached firms, and neither
  separates a chatbot paste from an app staff built (B1, B6). In Microsoft's own tools, every employee
  can reach the default environment, and the sharing audit runs only after sharing (C27).
- **The manager who has to sign the breach notice.** The moment: a letter to customers with their name
  on it. The number: in New York, notice to affected residents within 30 days of discovering the breach
  (A22); for a public company that judges the incident material, an SEC filing within four business days
  of that decision (A1). The real case: the bank became aware on 5 May 2026, judged it material on 7 May
  and filed on 11 May (A8, A9, A12). ⚖ Not every leak to an AI tool means letters: New York waives
  individual notice for an inadvertent disclosure by staff allowed to see the data, if the company
  documents that misuse is unlikely (A26).

All three leave with the same check they can run themselves: **does anyone else know this tool exists,
and what data does it touch?**

## The question

**If I build something at work with AI and it leaks, who's on the hook?** It sits under the title's
question, **when anyone can build the app, who keeps it safe?**, and the record forces two more: **how
much does a tool have to touch before someone else must know it exists; and is any of this changing IT
work?**

---

## Why now

_Peg hunt run 2026-10-27 (peg-hunt skill), then every peg passage re-checked verbatim against the saved
filing by hand pass A (P1–P13). Re-run the hunt before scripting: an S-1 is amended before an IPO
prices._

On 26 October 2026 Anthropic filed to go public (P1). In the registration statement it gave the
Securities and Exchange Commission, the company says it is "already seeing" non-technical teams
"increasingly adopting" its coding agent, Claude Code, and its sister product Claude Cowork "to manage
their own workflows" (P2). The risk factors then name the other half of this episode's question. The
company may face claims for harm caused by its agents' autonomous actions "even where the customer
configured, deployed, or supervised the agent", because the legal frameworks for liability for actions
taken autonomously by AI systems "are unsettled" (P6, P9). It adds that enterprise deployments "will
require broad permissions and deep integrations with customers' internal tools, data, and workflows",
which "increases the potential consequences of any security incident" (P10), and that incidents caused
by "customer misconfigurations or misuse" may still bring it liability exposure (P11). The company
selling the tool is telling investors two things in writing: people outside IT are building with it,
and nobody has yet decided who answers when what they build goes wrong.
(Anthropic, PBC, Form S-1 registration statement, filed 2026-10-26, SEC EDGAR —
https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm ; filing index
— https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/0001628280-26-067168-index.htm)

⚠ **Corrected by hand pass A:** the peg hunt drafted the S-1's "AI-generated code" sentence as a warning
that concerns about AI-generated code could make enterprises limit use. In context it sits in the
**open-source licence** risk factor: AI-generated code could reproduce open-source code so that copyleft
obligations "apply to us without our knowledge", about Anthropic's own use of Claude Code; one
follow-on sentence says "similar concerns" could lead enterprise customers to limit their use (P12). It
is not a security warning and is not used as one. ⚠ The same clause still stands in the metadata's
`news_peg.what` (not edited by this pass; see Open items).

**What the filing does not say.** The adoption line is the company's own claim to investors, with no
count: no passage reached gives a user number for non-technical teams or for Cowork, only that Cowork's
early adoption "outpaced" Claude Code's at the same point (P4). The "non-technical prosumers" line is
about individual Pro and Max subscribers, not employees (P5). The liability passages are risk factors, a
required disclosure of what **could** happen, not admissions that it has (hand pass A). Context, not the
peg: in Q3 2026, Claude Enterprise users who did not use Claude Code spent under $75 a month on average,
while the top 5% who did spent about 20 times that (P13).

**Why this fits the thesis.** What the viewer saw (the IPO) is not what the episode argues. The filing
matters because the seller of the tool states both halves of the question in a legal document: building
is spreading beyond engineers, and who answers for it is open. The script carries the structural version
("the companies selling these tools now tell the SEC, in writing, that non-technical teams are adopting
them, and that the law on who answers when their agents cause harm is not settled"; it is the seller's own exposure, said in required risk language); the description carries the
hot one. Name the filing, never the personalities; never in the title or thumbnail.

_Disclosure line for the writer: this show is made with Anthropic's Claude. Per the standing rule, the
filing is cited as a plain fact at equal weight, with no on-air callout, and its adoption line airs only
as "Anthropic told investors", never as evidence._

---

## Settled (not the debate)

Neither team may fight these.

**The duty sits with the company that holds the data, whoever built the tool**
- **SEC:** a public company's Form 8-K for a material cybersecurity incident is due four business days
  after it **determines** the incident is material, a decision that must come without unreasonable
  delay after discovery (A1, A2). Materiality includes harm to reputation and customer relationships
  (A3). The rule covers information systems "owned or used by" the company, and materiality "is not
  contingent on where the relevant electronic systems reside or who owns them" (A5, A6). The SEC refused
  to exempt third-party systems; it says nothing about AI tools or employee-built apps, whose coverage
  follows from "owned or used by" (A7, APPROXIMATE: a sound reading, not an SEC statement).
- **New York:** any person or business that owns or licenses New Yorkers' private data "shall develop,
  implement and maintain reasonable safeguards" (A17). The examples of compliance include assessing
  risks in software design and training employees (A18). Only the Attorney General enforces it (A19).
  Affected residents must be notified within 30 days of discovery (A22).
- **California:** a business that owns, licenses or maintains Californians' personal information must
  keep reasonable security (A27). Consumers can sue only when unencrypted data is taken or disclosed
  **because of** that failure, for $107 to $799 per consumer per incident or actual damages (A28, A29).
- **Said plainly:** none of these texts asks who built the tool or whether IT approved it. That is a
  reading of the statutory text; no court, attorney general or SEC statement found applies it to an
  employee-built AI tool (hand pass A).

**The one filing on record was about using, not building**
- **CB Financial Services** (Community Bank, Pennsylvania): on 5 May 2026 the bank became aware of "an
  internal incident involving the handling of certain non public customer information using an
  unauthorized artificial intelligence-based software application" (A8). It judged the incident material
  on 7 May "due to the volume and sensitive nature" of the data, and filed on 11 May (A9, A12). Names,
  Social Security numbers and dates of birth were disclosed (A10). No disruption, no expected material
  financial impact, root cause still under investigation, notices under way (A11, A13).
- **It is the only such filing found.** A 17-query EDGAR full-text search of 8-Ks from 2025 to 27 October
  2026 found no second Item 1.05 filing mentioning AI and no Item 8.01 incident report naming an AI tool,
  shadow IT or AI-generated code (A14). Limit: the search sees only literal wording.

**The security record measures four different things, and none of them is "business-built apps"**
- **Breached organisations (IBM and Ponemon):** security incidents involving shadow AI, "where workers
  use unapproved AI", rose to 43% of the 602 breached organisations studied in 2026, from 20% in 2025
  (B6, B12, B1). They cost an average of $5.39M, against $4.99M for all breaches (B7, B8). 68% of
  breached organisations had no AI governance policy or were still writing one (B9); 19% said governance
  and security teams coordinated (B10). Separately, attacks **on** AI models or apps rose to 21% from 13%,
  mostly through surrounding APIs and cloud misconfiguration, not AI-written code (B13, B16).
- **Raw models in a lab (Veracode, a scanner vendor):** syntax correct over 95% of the time, security
  pass rate stuck near 55%, flat since 2023 except reasoning models; four flaw types, no agent, no review
  (B20, B22, B23, B24, B18).
- **Agents on real code (peer-reviewed):** 57% of one agent's solutions worked; 11.8% were secure (B31).
- **Deployed AI-built apps:** an unreviewed 2026 preprint audited 200 deployed apps built with Claude Code
  and Lovable and found at least one vulnerability in 91% (B32); a vendor (RedAccess) counted about 2,000
  publicly reachable corporate apps exposing sensitive data, which the platforms dispute and WIRED could
  not confirm (B35–B37); a second vendor's passive scan of 5,600+ apps found 2,000+ vulnerabilities and
  400+ exposed secrets (B42, B43). None shows the builders were business staff working outside IT.

**The platforms put it on the user, and have failed on their own side too**
- **Terms:** Replit: "You remain responsible and accept liability for your content, apps, and projects"
  and AI code "may be erroneous or incomplete" (B53, B54). Lovable: the user is responsible for the apps
  they build, liability is capped at 12 months' fees, and AI output "should not be relied upon without
  independent review and testing" (B57–B59). Lovable's 2025 CVE record is formally disputed on exactly
  that ground (B62).
- **Incidents:** in July 2025 Replit's agent deleted a production database; its CEO called it
  "unacceptable" and Replit then separated development and production databases (B44, B45, B48). From 3
  February to 20 April 2026, public Lovable projects' chat history and source code could be reached by
  any Lovable user with a link; researcher reports from 22 February were closed without escalation; Lovable
  says it shipped a fix within two hours, and is making public projects private (B49–B51).

**History: the one-person, unreviewed tool is a recurring failure mode, at its real size**
- **JPMorgan, 2012:** the value-at-risk model ran on Excel sheets filled by copy and paste (C3); a formula
  divided by the sum of two rates instead of their average, which "likely" muted volatility by a factor
  of two, by an amount the task force could not pin down (C1). Reviewers called the process error prone
  and set an automation deadline; nobody checked whether it happened (C2). The firm relied on the
  model's builder to operate it (C2). ⚖ The task force put principal blame on the trading strategy, not
  the spreadsheet; losses were about $5.8bn by 30 June 2012 (C5).
- **Reinhart and Rogoff:** the spreadsheet error alone moved the over-90%-debt growth figure from 2.2% to
  1.9%; excluded years and weighting did most of the rest (C7, C8, C9).
- **Spreadsheet audits:** careful field audits found errors in most of the spreadsheets they audited (at least 86% in
  2000's better audits; 94% of 85 in 2015's), with small, old samples (C10, C11).
- **Auditors already have a category for this:** "End-user computing controls are controls over
  spreadsheets and other user-developed applications" (PCAOB staff, 2009; C12). Inspectors caught audit
  firms not testing the spreadsheets and queries controls relied on (C13), and companies have disclosed
  material weaknesses over them (C14, C15).

**We found no independent count of the builders**
- **No independent source counts people outside engineering who build software with AI** (D14). Census
  is firm-level: 17–20% of US businesses used AI recently (D1), and in 36% of firms where workers use AI
  there is no formal firm-level adoption, the closest official number to "shadow AI", covering any AI use,
  not building (D9). The richest evidence is Anthropic's own data on its own users (D11–D15).

**Guidance is tiered, not a ban**
- The UK's cyber agency says full vibe coding "can often be perfectly fine" for prototypes, demos and
  internal tools with limited exposure, and should slide toward manual coding for login logic, sensitive
  personal data and secrets (C31). Its CTO for Architecture says non-technical builders get code that is
  "often unreliable, hard to maintain, or has critical issues" (C32). The joint guidance from Australia's
  cyber centre, CISA, the NSA and partners says organisations "should only use agentic AI for low-risk and
  non-sensitive tasks", with no high-impact actions without prior human approval (C33).

**Insurance is splitting, not settled**
- Cyber insurers are mostly clarifying how existing wording applies to AI, with targeted exclusions
  discussed "in some pockets" (A43); QBE says an AI-triggered conventional incident stays covered (A44).
  ISO's generative-AI exclusions are for general liability, not cyber (A46). Coalition and Beazley added
  "affirmative AI" cyber cover (A49, A50), but Beazley's addresses **attackers** using AI and is silent on
  a client's own AI use (A51). The staff-built tool sits in a gap nobody has written wording for (hand
  pass A).

---

## Contested (the real fight)

The record settles who carries the duty. The fight is about how much review a tool needs before it goes
live, who does it, and how fast to let building spread, on evidence that measures none of these
directly.

**Side A — "Let the business build."** (Steelmanned from the checked rows.)
- **It is already happening, and banning hides it.** In 36% of US firms where workers use AI there is no
  formal firm-level adoption (D9). Among AI-using firms, Sales and Marketing is the most common function
  (52%; D6). Anthropic told investors non-technical teams are "increasingly adopting" its coding tools
  (P2; the company's claim). In its own study, business and financial operations are the second-largest
  group of Claude Code users after computer jobs, and management, sales and legal are growing fastest
  (D12).
- **Non-engineers can do it.** Their code-producing sessions succeed 29% of the time against 34% for
  software workers (D13; Anthropic's data). A small academic case study found most non-programmers
  finished a basic web app with AI help and supported the approach (D24).
- **The law already makes it the company's problem, so the answer is to see it, not stop it.** The duty
  sits on the company whoever builds (A5, A17, A27); California's coming audit asks for software
  inventories and approval processes, not bans (A31). Microsoft offers an agent registry anyone with a
  role can view (C30).
- **The official advice is tiered, not a ban.** The UK's cyber agency: full vibe coding "can often be
  perfectly fine" for limited-exposure internal tools (C31).
- **The scary numbers are not about business-built tools.** Veracode tests raw models on four flaw types,
  with no agent, no review and no security prompt (B18, B22, B24). IBM's 43% counts breached firms whose
  incidents involved staff using unapproved AI, not apps they built (B6). One user study found AI users'
  critical bugs no more than 10% above a control group (B30). No source compares AI-built tools with the
  spreadsheets, macros and Access databases business staff built before (hand pass B).
- **The business has always built.** Auditors have treated spreadsheets and "other user-developed
  applications" as a control category since at least 2009 (C12); at Deutsche Bahn, Microsoft reports
  4,000 citizen developers with 500+ apps in production (C17, a vendor case study).
- **The platforms are fixing the defaults.** Replit separated development and production databases (B48);
  Lovable is making public projects private (B51).

**Side B — "Govern it first."** (Steelmanned from the checked rows.)
- **The one filing on record is a close cousin, not the thing itself:** staff using an unapproved AI tool, not building one. Customer names, Social Security numbers and dates
  of birth went into "an unauthorized artificial intelligence-based software application", and the bank
  carried the disclosure and the notices (A8–A13).
- **Working is not safe.** 57% working, 11.8% secure, for an agent on real code (B31). 91% of 200
  deployed AI-built apps had at least one vulnerability, in a preprint (B32). In the lab, security sits
  near 55% while syntax passes over 95% of the time (B20). And people coding with AI were **more**
  confident their code was secure, and 36% of those with AI wrote solutions open to SQL injection,
  against 7% of those without (B28, B29).
- **The officials say non-experts are the risk.** The UK cyber agency's CTO for Architecture: output for
  non-technical builders is "often unreliable, hard to maintain, or has critical issues", with risks
  "likely far outside most organisations' risk tolerances" (C32). The Five Eyes agencies: agents only for
  "low-risk and non-sensitive tasks" (C33).
- **The platforms push the risk onto you, and fail too.** Their terms make the user liable (B53, B57,
  B58); public apps being reachable is "expected behavior", with privacy "a single click" away, in
  Replit's CEO's words (B38); a
  vendor counted about 2,000 exposed corporate apps (B35, disputed). Replit's agent deleted a production
  database (B44); a Lovable flaw left public projects' chats and code reachable by any logged-in user with a link for about 11 weeks (our arithmetic; no evidence anyone used it), with researcher reports closed unescalated (B49, B50).
- **History shows how it fails: one builder's tool, a review that flagged the risk, and no follow-up.** JPMorgan relied on the
  model's builder to operate it, and nobody checked the automation deadline (C2); the error was treated
  as a one-off (C4). Wegmans paid New York $400,000 after failing to "inventory its cloud assets
  containing personal information" (A42). Orphaned apps "can pose a security risk", and Microsoft's free
  governance kit is no longer maintained (C28, C29).
- **Governance is thin where it matters.** 68% of breached organisations had no AI governance policy or
  were still writing one; 19% said governance and security coordinated (B9, B10). Microsoft's data
  policies are off until an admin creates them and cannot tell test from production (C26).
- **The seller says its own liability is unsettled.** Anthropic says the law on liability for its agents' actions is "unsettled" (its own exposure, in required risk language, not a ruling about staff-built apps) and may land on
  it even where the customer set the agent up (P6, P9); deployments need "broad permissions and deep
  integrations" (P10). Insurance wording for a staff-built tool is unwritten (A51, A46).
- **The cost is forecast to land on IT.** Gartner forecasts that by 2028, 30% of software engineering
  teams will be under material strain maintaining vibe-coded apps built by business users, and 60% of
  vibe-coded apps will be retired for failing to deliver predictable value (C21: forecasts, not
  measurements; the note is distributed by a governance vendor, C23).

### Where the record lands, said plainly (no false balance)
- **On "whose problem is it when a business-built tool leaks?" the record leans one way: the company's.**
  Every regime read puts the duty on whoever owns, licenses or maintains the data, or on systems the
  company "owned or used" (A5, A17, A27). No court or regulator has yet applied that to an
  employee-built AI tool, so it is the law's text, not a ruling (hand pass A).
- **On "is it already causing breaches?" the record shows unapproved AI USE in breaches, not
  business-built apps.** IBM's 43% (from 20%) counts breached firms whose incidents involved staff using
  unapproved AI; it is not a share of all companies and does not separate pasting into a chatbot from a
  tool someone built (B6, B1). The one filing is about using a tool (A8).
- **On "is AI-built code insecure?" the record separates lab from life.** Raw-model lab tests say about
  half (B20, B24); one peer-reviewed agent benchmark says 11.8% secure (B31); deployed-app evidence is a
  preprint and vendor scans (B32, B35–B43). Nothing measures apps business staff actually shipped.
- **On "how many non-engineers are building?" nobody knows.** No independent count exists (D14).
- **On history, the one-person, unreviewed tool is a recurring failure mode, and the famous cases are
  smaller than their legends.** The London Whale spreadsheet understated risk; the strategy lost the
  money (C1, C5). The Reinhart-Rogoff typo was about 0.3 of a point (C8).
- **On "do guardrails work?" they exist, and we found no measurement of whether they work.** No incidents-avoided figure
  exists for data policies, inventories or registries (C26–C30); the "89% drop" when sanctioned tools are
  provided is one vendor's figure with no stated method (C24).
- **On IT jobs, nothing ties the changes to business teams building.** IT-services payrolls are about 5%
  below their March 2023 high (D63); BLS projects programmers down 7% and software developers up 10%
  (D64, D65); no source links any of it to business-unit building (D75).

**Net:** the duty is settled, the damage is measured only loosely, and the remedy is unmeasured. That is
why the honest fight is over the dial, not the turf.

## The industry beat: what it does to software and IT work

One beat, kept small, because the record is thin and the sister episode (ep46) carries jobs.
- **What is measured:** IT-services payrolls (computer systems design) fell from 2,483,500 in March 2023
  to 2,355,400 in September 2026 (preliminary), about 5.2% (D63, our arithmetic; IT-services firms, not
  in-house IT departments). BLS projects computer programmers down 7% and software developers, QA analysts
  and testers up 10% from 2025 to 2035 (D64, D65); computer user support specialists down 3%, with
  chatbots named (D66). Young workers aged 22–25 in AI-exposed jobs are 19% below where they would be had
  they kept pace with less-exposed peers, a descriptive signal whose authors say it is not causal (D43,
  D48). Coder employment is still growing, just much more slowly (D59).
- **What is said or forecast:** Gartner forecasts worldwide IT spending up 13.5% in 2026 (D71). In a
  survey by an investor in IT services, 67% of 200+ US IT executives plan bigger IT teams, and 55%
  expect to replace some commercial software with AI-built tools (D72, D73). Gartner's 2028 forecasts
  above (C21).
- **Demand for the tools themselves is soft and mixed:** of 1,720 US panellists with a Lovable receipt in
  late 2025, 168 had one again in May–August 2026, which YipitData itself warns is a receipt count, not a
  churn rate (D26, D28).
- **Said plainly:** the risk is measured; a change in what IT jobs are is not (consistent with ep46's "Is
  the way in moving?", T3 there). Nothing ties IT job changes to business teams building (D75).

## The reframe

**The shouting frames it as a turf war: the business against IT, speed against control. The record
points somewhere quieter: visibility and data.** The engine's synthesis said the honest core is "does
anyone know this tool exists, and what data touches it?" (engine summary). Tested against the hand
passes, it holds, with two qualifications.

What bears it out:
- **The law doesn't ask who built it.** The duty follows the data and the systems the company uses (A5,
  A6, A17, A27).
- **The trigger in the one real case was the data.** The bank judged it material "due to the volume and
  sensitive nature" of the information (A9), not because of who wrote any code.
- **The failures the record documents are failures of knowing.** Wegmans failed to inventory its cloud
  assets (A42); IBM prices "lack of visibility into the number and location of applications" (B17);
  Microsoft's sharing audit runs only after sharing, and orphaned resources can pose a risk (C27, C28);
  JPMorgan's review deadline was never followed up and the builder operated his own model (C2).
- **The rules coming are about knowing.** California's audit will ask for software inventories,
  allowlisting and approval processes (A31); Microsoft's answer for agents is a registry (C30).
- **The guidance tiers by what a tool touches.** Prototypes and limited-exposure tools at one end; login
  logic, personal data and secrets at the other (C31); agents only for low-risk, non-sensitive tasks
  (C33).

The two qualifications:
1. **Code quality is a second, real layer.** The lab and benchmark numbers (B20, B31) and the one
   deployed-app audit (B32) say AI-written code is often insecure. "It doesn't matter who wrote the code"
   overstates it; what is true is that the record cannot yet show business-built code is worse than what
   it replaces.
2. **Knowing is the common thread of the evidence, not a measured cure.** Most of the "visibility"
   evidence is analogy (spreadsheets, cloud storage, low-code), and no source measures that inventories or
   registries prevent incidents (C26–C30).

**So the useful question for a viewer who builds a tool at work is not "am I allowed to build?" It is
"does anyone else know this exists, what data does it touch, and who looks after it when I leave?"**

## Both sides quietly agree

Even while arguing, both camps accept the same three things:
1. **The company carries the duty.** "Let the business build" relies on it (the company must see what
   exists); "Govern it first" relies on it (the company pays when it doesn't) (A5, A17, A27, A8).
2. **Risk scales with what the tool touches.** The UK's cyber agency tiers by exposure (C31); the Five
   Eyes guidance tiers agents by sensitivity (C33); the platforms' own fixes are private-by-default and
   separate production data (B48, B51); and the seller's filing ties the stakes to "broad permissions and
   deep integrations" (P10).
3. **Some kind of inventory is the minimum.** California's audit (A31), the Wegmans settlement (A42),
   IBM's shadow-IT cost (B17) and Microsoft's agent registry (C30) all come back to knowing what exists.

And both are short of the same evidence: neither side has a measured outcome. The citizen-developer
promise rests on vendor case studies, a commissioned study that left "reduced shadow IT" unquantified,
and forecasts (C17, C18, C19, C21, C25); the guardrails have no incidents-avoided figure (C26–C30).
**The real disagreement is over who builds and how fast, not over whether an unlisted tool holding
sensitive data is a problem.**

## Verdict framing

**No winner.** The judge says what the record settles (the company carries the duty; the one filing
came from customer data in an unapproved tool; we found no measurement of either the damage from business-built
apps or the benefit of guardrails) and hands the viewer **one dial: "How much does your tool touch?"**
The viewer sets where their own tool sits, and where on the dial "someone else must know it exists"
begins. The judge may name the settings; the judge never sets the dial for the viewer.

Three settings, each with a real institution behind it and a documented failure:
1. **"Just me, nothing sensitive"**: a prototype, a demo, a helper with limited exposure. The UK's cyber
   agency: full vibe coding "can often be perfectly fine" here (C31). Documented failure: "just me" on a
   public platform can still be public. Replit's CEO calls public apps reachable "expected behavior"
   (B38), and a vendor found about 2,000 corporate apps exposing data by searching the platforms' default
   domains (B35, B40; disputed).
2. **"My team, company data"**: someone else knows it exists, and it has an owner who isn't leaving.
   Behind it: California's coming audit asks for software inventories and approval processes (A31);
   Microsoft's agent registry (C30). Documented failure: Wegmans failed to inventory its cloud assets and
   paid New York $400,000 (A42); orphaned apps can pose a security risk (C28); JPMorgan's review deadline
   that nobody checked (C2). Weakness: no source measures that inventories prevent anything (C26–C30).
3. **"Customers' personal data, money, logins, or the open internet"**: a second pair of eyes before it
   goes live. Behind it: the UK cyber agency's slide toward manual for login logic, personal data and
   secrets (C31); the Five Eyes "low-risk and non-sensitive" line and human approval for high-impact
   actions by agents (C33). Documented failure: the bank's customer data in an unapproved AI tool (A8,
   A10); 11.8% secure in the agent benchmark (B31); the builders who were more confident than they should
   have been (B28). Weakness: review slows the work, and its benefit is unmeasured too.

## Make it Matter — the journey, one tool at a time

A suggested beat order for the desk (the writer owns the words; every fact below has a row above):
1. **The gut question, answered first.** "If I build something at work with AI and it leaks, who's on
   the hook?" In the first seconds, plainly: legally, the company that holds the data (A17, A27); the one
   filing on record came from customer data in an unapproved AI tool (A8). Then the hook: the company
   selling one of these tools told investors the law on who answers is "unsettled" (P6, P9).
2. **Three people, three moments, one number each.** The salesperson (it works: 29% vs 34%, D13; but
   working is not safe: 57% vs 11.8%, B31); the IT person (finds it after: 20% to 43% of breached firms,
   B6); the manager (signs the notice: 30 days in New York, A22; four business days after the materiality
   call for a public company, A1).
3. **What happens when you hit "build".** Code that runs vs code that's safe: syntax over 95%, security
   near 55% in the lab (B20); the people who felt safer and weren't (B28); and the counter-study (B30).
   "Wait, so the app works and it's still unsafe?" Lab vs life, said out loud (B18). Hold that.
4. **Where it goes.** Public by default; about 2,000 exposed corporate apps by one vendor's disputed
   count (B35–B40); Lovable's roughly 11 weeks (B49, B50; our arithmetic); Replit's deleted database (B44). And the platforms'
   terms: you're liable, the AI "may be erroneous" (B53, B54, B57).
5. **The bank.** One story, told in dates: aware 5 May, material 7 May, filed 11 May; names, Social
   Security numbers, dates of birth; no outage, root cause still under investigation (A8–A13). The only such filing found (A14).
   Name the company (a public filing), never a person.
6. **Who answers.** The laws in one breath (A17, A27, A5); the seller's own "unsettled" (P6, P9, P10);
   the insurance gap (A51, A46).
7. **What a worker who builds a tool at work should know** (only what hand pass A supports; never
   "you're personally safe"):
   - The security and notice duties sit with the company that holds the data (A17, A27, A22). That does
     not make the tool invisible: the company has to find it, judge it and, where required, report it (A1,
     A9, A13).
   - Federal hacking law is a poor fit for someone who builds on systems and data they already have
     access to: the Supreme Court's test is whether you could reach that area at all, not your purpose
     (A34), and DOJ's policy won't charge "exceeds authorized access" when the only line crossed is a
     written policy (A36). But that is not "safe": the Court left open whether policies can draw that line
     (A35), DOJ's bar is narrow and binds only DOJ (A37), and state computer-crime laws were not
     researched.
   - The documented consequences for staff are civil and employment ones. A fired salesman was sued
     under trade-secret law over AI note-taker recordings, and settled (A38, A39); Samsung banned
     generative AI on company devices and warned of discipline up to firing (A41). Neither was about an
     app someone built, and no such case was found (A53).
   - Even the seller says the rules for agents are not settled yet (P6).
8. **The spreadsheet that ran a bank's risk number.** JPMorgan, at its real size: a model fed by copy
   and paste, a formula that divided by the sum instead of the average, a deadline nobody checked, a
   builder who operated his own model, and a strategy that lost the money (C1–C5). "So the spreadsheet
   didn't lose the money?" No, it hid the risk. Then the auditors' word for it: "user-developed
   applications" (C12).
9. **IT's toolbox, and what nobody has measured.** Data policies off by default; the sharing audit after
   the fact; the free governance kit unmaintained; a registry for agents (C26–C30). No incidents-avoided
   figure for any of it.
10. **The industry, in one beat.** IT-services payrolls about 5% below their 2023 high, programmers
   projected down and developers up, and no source tying any of it to business teams building (D63–D65,
   D75). Gartner's 2028 forecasts, as forecasts (C21).
11. **The fight goes to the teams, then the dial.** "How much does your tool touch?"

**Pictures, not ledgers (town):** the office tower for the business team's tool; the bank's number board
for the CB Financial dates (5 May / 7 May / 11 May); the stamp or the counting room for the breach notice
and its 30-day clock; the square's chart for IBM's 20% → 43% (headline chart, close framing); the AI lab
for the lab-vs-life security numbers; a cloud map for New York and California; the store window for the
platforms' terms ("you remain responsible"); the counting room for the JPMorgan spreadsheet; the
family-chat phone for "does anyone else know this exists?"

## Comparators a viewer can picture

- **Shadow AI among breached firms:** 1 in 5 in 2025, more than 4 in 10 in 2026 (B1, B6). Always "of
  breached organisations".
- **Cost:** breaches involving shadow AI averaged $5.39M against $4.99M for all breaches (B7, B8);
  not knowing where your apps are adds about $201,000 (B17).
- **Works vs safe:** syntax right 19 times in 20, security right about 11 times in 20 (B20; our
  arithmetic from over 95% and about 55%). For the agent: about 6 in 10 work, about 1 in 8 are secure
  (B31; our arithmetic from 57% and 11.8%).
- **The clocks:** four business days after the materiality call (SEC, A1); 30 days after discovery (New
  York, A22). The bank: two business days from its materiality call to its filing (A12).
- **California's price per person:** $107 to $799 per consumer per incident, if a breach was caused by a
  security failure (A28, A29).
- **Wegmans:** $400,000 for exposing more than 3 million consumers' data, including 830,000+ New Yorkers
  (A42).
- **The famous spreadsheet error, at size:** the Reinhart-Rogoff typo moved 2.2% to 1.9% (C8); the London
  Whale's losses, about $5.8bn, were blamed on the strategy (C5).
- **Spreadsheets:** careful audits found errors in most of the spreadsheets they audited (C10, C11).
- **IT payrolls:** about 2.48 million to about 2.36 million in IT-services firms, March 2023 to
  September 2026 (D63).

---

## Script traps

**The peg and the law (hand pass A)**
- ⛔ **"Anthropic told investors…"**, never "Anthropic's data shows". The adoption line is unquantified
  (P4); the "prosumers" line is about individual subscribers, not employees (P5).
- ⛔ **Never use the S-1's "AI-generated code" sentence as a security warning.** It is open-source
  licence risk from Anthropic's own use of Claude Code (P12).
- ⛔ Risk factors are required disclosures of what **could** happen, never admissions (P6–P11).
- **Script wording for the law:** "the law puts the duty on the company that holds the data. It doesn't
  ask who built the app." Never "the law says vibe-coded apps are the company's problem" (A7: a reading,
  not a statement). No court or regulator has applied it to an employee-built tool.
- **The SEC's four days run from the materiality decision,** not the breach, and only for material
  incidents at public companies (A1, A2).
- **CB Financial:** "the only such filing we could find", never "the first ever" (A14). It was about
  **using** an unapproved tool, not building one (A8). Name the company, never a person. The tool,
  personal-device and training details come from press interviews, not the filing, and were not checked
  (hand pass A): leave them out.
- **California:** $107 to $799, never $100 to $750 (A28). It is a suit for a breach **caused by** a
  security failure, not a fine for having an unapproved app (A29).
- **New York:** never "every leak to an AI tool must be reported to customers in New York" (A26). The AG
  notice has no separate 30-day clock in the text read (A23). The SHIELD $5,000 figure is unverified
  (A21); if a number is needed, use 899-aa's failure-to-notify penalties (A25).
- **The CPPA audit** is future (first reports April 2028), applies only to high-risk processors, and never
  names AI or shadow IT (A30–A33). "California will make companies show auditors their software inventory
  and code review", never "California bans shadow AI".
- **Insurance:** ISO's exclusions are general liability, not cyber (A46); Beazley's "affirmative AI" is
  about attackers (A51). Never "insurers won't cover AI" or "your cyber policy covers AI". Berkley's
  absolute exclusion dates from May 2025, not 2026 (A48).
- **The worker:** never "you're legally safe" (A35, A37). The fired salesman is "a fired salesman",
  never named, and his case is about a note-taking app he **used**, not one he built (A38). The return
  order and the 200+ emails are unverified (A40): leave them out.

**The security record (hand pass B)**
- **IBM:** "of breached organisations", never "of companies"; 43% in 2026, up from 20% (B6). Never mix
  the cost figures across years: 2025's $670,000 is a high-vs-low gap (B2); 2026's $5.39M is an average
  (B7). Say "no AI governance policy or still writing one", never "68% have no policy" (B9). Keep IBM's
  three categories apart: shadow AI 43%; attacks on AI models or apps 21%; AI-enabled attacks (B13,
  B16).
- **Veracode** is a scanner vendor testing raw models: never "45% of AI code has flaws" in shipped apps
  (B18). Quote the edition you cite (Spring vs July give different language figures, B21).
- **Never "studies show AI makes people write insecure code"** without the counter-study (B27–B30).
- **The arXiv audit is an unreviewed preprint** (B32).
- **The leak figure is about 2,000**, never 380,000 or 5,000 (B36); it is a vendor's count the platforms
  dispute (B37).
- ⛔ **Never call Escape "independent"**: "a second vendor's scan" (B43).
- **Never say Lovable "denied a breach"**: "Lovable's first public response was wrong, by its own
  account" (B52).
- **Never attach the gross-negligence exception to Lovable's 12-month cap** (B58).
- The Lovable RLS scan (10.3%) is a competitor's (B61, B63). Unverified, not on air: the "December 2025
  preprint" on AI code clusters (B34), RedAccess's "grew out of shadow-AI research" (B41), Replit's
  "planning-only mode" (B47).

**History and guardrails (hand pass C)**
- ⛔ **Never "a spreadsheet error caused the London Whale" or "the $6bn loss".** About $5.8bn by 30 June
  2012, blamed on the strategy; the spreadsheet understated the risk (C5).
- ⛔ **Never "an Excel typo justified austerity."** The typo was about 0.3 of a point (C8).
- **Never quote Panko's "1–5% of cells" as an audit finding** (C11).
- **Every Gartner figure is a forecast** (C19–C21); the 60%/30% note is distributed by a governance vendor
  (C23). Gartner's 2009 "a quarter of new apps by 2014" was read only through 2009 trade press and never
  scored (C19, C38): if used, "as IT Pro reported it in 2009".
- **The CSA note has two unrelated 89% figures**; neither is a measured before-and-after (C24).
- **Never "Microsoft abandoned governance"**: the kit is unmaintained and its functions moved (C29). Never
  "DLP is connector-level only" (C26). Never "orphaned apps are a recurring risk" (C28).
- **The NCSC, ICO and EU are not US bodies.** "The UK's cyber agency". The Five Eyes guidance is advice,
  not regulation; cite its title, "Careful adoption of agentic AI services" (CISA's page currently says
  "Agentic SI") (C34).
- **All the precedents are spreadsheets and low-code tools:** an analogy for vibe-coded apps, not evidence
  about them (hand pass C).

**Adoption and jobs (hand pass D)**
- ⛔ **Never "business teams building apps is killing IT jobs."** No source draws that line (D75).
- **Never a share of non-engineers among Claude Code users**: none is published (D14). Always "in
  Anthropic's study of its own coding tool's users"; keep "code-producing" with 29% vs 34% (D13; ep46
  airs the all-sessions 26% vs 30%, and both are in the source).
- **Never "72% of professional developers aren't vibe coding"**: "about three in four developers surveyed
  by Stack Overflow said vibe coding isn't part of their work" (D18).
- **Never "DORA found organisations saw no gain"** (D40, D41).
- **Never "coders are losing jobs"** from the Fed Board paper (D59); never the Dallas Fed as a tech-jobs
  number (D55); never "903,100 user support specialists" (D66); never METR's 19% as current (D35–D37);
  never "13% then 19%" for Canaries (D45).
- **YipitData's 168 of 1,720 is a receipt count, not a churn rate** (D28). Microsoft's 48 million are
  users of the product family in 2024, not builders (D20).
- Gartner's IT spending figure is worldwide (D71); the CIO survey comes from a party with a stake (D73).

**The show's own rules**
- ⛔ **No on-air "this show runs on Claude" callout.** The S-1, Anthropic's Claude Code study, its Economic
  Index and learning trial, the SusVibes result on Claude 4 Sonnet (B31), the arXiv audit's Claude Code
  apps (B32) and the ICO's enquiry to Anthropic (C36) all air as plain facts at equal weight, each with its
  source named plainly.
- **People by role:** "a fired salesman"; "the founder of SaaStr"; "a researcher at a rival platform";
  "Replit's CEO".
- **Feeling over figures in the cold open:** "more than 4 in 10", "about half", rounded; exact figures on
  the town's surfaces.

**Numbers to round on air (exact on screen)**
- 43% / 20% → "more than 4 in 10 breached companies, up from 1 in 5" · $5.39M / $4.99M → "about $5.4
  million against about $5 million" · $201,165 → "about $200,000"
- over 95% / about 55% → "it runs almost every time; it's secure about half the time" · 57% / 11.8% →
  "about 6 in 10 worked, about 1 in 8 were secure"
- 2,483,500 → 2,355,400 → "about 2.5 million to about 2.4 million, roughly 5% fewer"

**⛔ Do not air (UNRESOLVED or unverified)**
- The SHIELD $5,000 figure (A21); "Item 1.05 filings rarely say how the attacker got in" (A16); the
  fired salesman's return order and 200+ emails (A40).
- The Georgia Tech "December 2025 preprint" (B34); RedAccess's origin story (B41); Replit's planning-only
  mode (B47).
- Whether Gartner's 2009 forecast came true (C38).
- A share of non-engineer Claude Code users (D14); the "50-executive vendor survey" (D25); McKinsey's 32%
  (D74); any causal link between business building and IT jobs (D75).
- MIT NANDA's 95% and its 90%-vs-40% shadow-AI line (D22, D23, APPROXIMATE); the Barclays traffic drop
  and Bolt's churn quote (D29, D30, APPROXIMATE); Lovable's $600M run-rate except as "Lovable says"
  (D31, D32, APPROXIMATE).
- Every APPROXIMATE row stays off air unless reworded to what the row allows (factcheck-log).

---

## Open items for the pre-script re-check

1. **The peg:** re-run the peg hunt. Watch for S-1 amendments (S-1/A), the IPO's pricing, and any change
   to the risk-factor wording (P6–P11). The S-1 has been full-text searched, not read cover to cover
   (A54).
2. ✅ **`news_peg.what` fixed 2026-10-27 (coordinator):** the "concerns about AI-generated code" clause sat in
   the S-1's open-source-licence risk factor, not a security one (P12), so it was dropped from the peg; the peg
   now carries the adoption line and the unsettled-liability line only.
3. **A second filing:** re-run the EDGAR full-text search for new Item 1.05 / 8.01 filings naming an AI
   tool, shadow IT or AI-generated code (A14). Search Texas, Colorado and Illinois AG actions (not done).
4. **California's numbers:** re-check the CPPA's monetary-thresholds page for any new inflation
   adjustment to $107–$799 before air (A28), and whether the approved audit text matches the final filed
   version (A33).
5. **The worker's exposure:** state computer-crime laws, trade-secret law, duty of loyalty and employment
   contracts were not researched. Until they are, the worker beat says only what hand pass A supports.
6. **The sister episode:** ep46's Retool vendor survey (60% of its own builders built something outside IT
   oversight; ep46 row T3-28) is checked there but was not re-checked here; import it only by
   re-checking it in this episode's log. ep46 and ep48 agree on IBM (1 in 5 → 43%) and on the Claude Code
   study (ep46's all-sessions pair, this episode's code-producing pair, D13).
7. **Named by the engine's critics, not checked:** Colorado, Texas, Illinois and Utah AI statutes; the FTC
   Safeguards Rule; NYDFS Part 500; the federal bank incident-notification rule; HIPAA; SR 11-7 model
   risk; NIST SP 800-218A and 800-53 CM-8 (engine summary, unverified: not on air).
8. **Unmeasured, and what would answer it:** a count of non-engineers who build with AI across the
   workforce (not inside one product), and whether what they build is kept (D14, D15); a comparison of
   business-built AI tools with the spreadsheets and Access databases they replace (hand pass B); an
   incidents-avoided measure for any guardrail (C26–C30). None exists yet.
9. **Cast and sides:** metadata `sides:` and `cast:` are not filled. Suggested data-driven labels: "Let
   the business build" and "Govern it first"; Lucas's call.
