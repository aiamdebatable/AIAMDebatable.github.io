# Research brief — Same AI agent, different boss

_The full research behind the episode. Explainer type: no debate, no decider. Researched 2026-09-29 in a
run shared with ep25; this episode is the run's Part B, checked in hand pass D (the handpass-D file beside
this one holds the vendor × row grid and every per-claim verdict)._

## ✋ The split (ruled by Lucas, 2026-09-29)
The shared research run came back as two explainers, and Lucas ruled two companion episodes rather than
one long one: **ep25** "What is a personal AI agent?" (how it works, how well, what goes wrong) and
**ep26** "Same AI agent, different boss" (what changes when an employer is the customer). **ep26 runs
first** (Lucas, 2026-09-29): explainers follow debates already published, and ep26 follows ep21 (live),
while ep25 follows ep22/ep23 (not yet published); ep26's vendor terms and launches also go stale fastest.
ep25 runs after ep22 and ep23 publish, and may name ep26 as its companion. ep26 defines its terms on air
(build note below) and does not promise ep25.

⚠ Honest weak spots:
- **The premise is unmeasured.** Nothing measures employees running personal *agents* at work; the only
  numbers are shadow-AI figures about chat tools (Netskope: 47% using personal genAI apps, Jan 2026,
  down from 78%, vendor data). The script must say so, not imply a measured trend.
- **Meta's business side is thin.** Muse for Small Business is new skills and connectors inside the same
  consumer app, not a separate business tier.
- **Every grid cell must be re-fetched at script lock.** Terms change monthly; all cells are dated 2026-09-29.
- ✅ Peg re-hunted after OpenAI DevDay (2026-09-29 evening): OpenAI is the fourth vendor and now leads.
- SB 947: the governor's deadline is 2026-09-30.

## Why now

**OpenAI's dots (2026-09-29, DevDay): the same agent, two bosses, launched the same day.** Dots are
"always-on agents in ChatGPT", each with "its own cloud computer". Personal: Pro plans. Work: Business
Premium, and an Enterprise beta that is "off by default". The two sides differ on exactly this
episode's rows:
- **Training:** "We don't use content from ChatGPT Business, Enterprise, or Edu workspaces to improve our
  models by default." On personal plans the "Improve the model for everyone" setting decides, and when it
  is on, training "can include actions dots take, and automations you set up".
- **Memory:** "You currently cannot view, delete or directly modify individual dot memories"; the only way
  to delete them is to delete or reset the dot.
- **Identity:** your dot works on your behalf; company "specialist dots with their own identity" for access
  management are a preview only.
- **Leaving the job:** OpenAI's admin guide says to review and reset a dot's memory "when handling
  sensitive data or offboarding", the first vendor document found that addresses it.
- **Audit:** the Compliance API can show users' messages and dots' replies, but OpenAI says "Confirm record
  coverage before relying on it for an audit."
- **Price:** "Your first dot is included in your Pro or Business Premium plan at no extra cost."

**The three before it.** In September 2026 three vendors took agents born as consumer products to businesses within four weeks:
- **xAI:** Grok Bot beta 2026-08-11; Grok Bot for Enterprise 2026-09-03 (access, network and audit
  controls).
- **Meta:** Muse launched 2026-09-08 (Meta's headline calls it "the World's First Personal AI Agent Built
  for Everyone": attribute, never assert); Meta Enterprise Platform 2026-09-28; Muse for Small Business
  2026-09-29.
- **Microsoft:** the new Copilot app with Autopilot, "a persistent, proactive and personal agent", private
  preview from end of September (2026-09-25).

## Same agent, different boss

The vendors' own documents show mostly **the same agent loop with a governance wrapper added**. The
contrasts that hold on primaries:
- **Who holds the keys.** Microsoft: "Autopilot lives in your tenant with its own identity, memory,
  computer and workspace." xAI: "A Bot has no identity or credentials of its own … Bots act as the
  signed-in member" (exception: team-managed connectors "may use team or service-account credentials").
- **Who can read it.** Work admins can read logged prompts (Microsoft), view and export chats (OpenAI
  Business), record every tool call (xAI Enterprise).
- **Who gets blamed.** Personal terms put agent actions on you: Microsoft consumer "you are solely
  responsible for those Actions"; Anthropic consumer "You are responsible for … all Actions", capped at
  the greater of six months' fees or $100. Business terms cap vendor liability at 12 months of fees.
- **Who trains on it.** Muse trains on conversations by default (opt-out), and Meta says the setup "does
  not prevent Meta from accessing data when necessary to support, secure or operate the service". OpenAI
  consumer trains by default; business does not. Microsoft's new consumer Copilot app (2026-08-18): prompts,
  responses and file contents "aren't used to train foundation models".
- **Who pays, and how.** Flat per-seat for chat; usage billing for agentic work (Microsoft); Grok Bot comes
  in consumer subscriptions, Enterprise via sales.
- **When you leave the job.** Only OpenAI addresses it: its admin guide says to review and reset a dot's
  memory at "offboarding". Microsoft, xAI, Meta and Anthropic document nothing about a persistent agent's
  memory, schedules or identity when its owner leaves.
- **The law:** California SB 947 ("No Robo Bosses Act") covers employer systems that discipline and fire,
  not workers' own agents; from July 1, 2027 if signed. Governor's deadline 09-30; no action as of 09-29.

## What we could not establish
- Any measure of employees running personal agents at work.
- "Nearly half would keep using personal AI after a ban" (the source says something else).
- What happens to an agent's memory, schedules and identity when its owner leaves, for every vendor but
  OpenAI (whose guide says reset the dot's memory at offboarding).
- Microsoft 365 Copilot "30M paid seats": not in Microsoft's post. Unverified.
- xAI's "millions of bots": the live page reads "[millions]", an unfilled placeholder. ⛔ Never air.

## Build note: define the agent vocabulary on air (Lucas, 2026-09-29)
ep26 runs before ep25, so nothing primes the viewer first. Where the script first uses each term, give a
one-line plain definition (on air, not only on screen), then move on: **AI agent** (an AI that takes
actions for you: signs into your apps, clicks, sends, not just answers), **always-on** (it keeps working
on a schedule when you're not there), **admin / audit log** (the record your employer's IT can read of
what the agent did), **training on your data** (the company using what you and the agent do to improve
its models). Keep each to one short clause. Open from ep21's question (ban public AI at work) without
restating it. Don't promise ep25 on air; the end card can link ep21.
