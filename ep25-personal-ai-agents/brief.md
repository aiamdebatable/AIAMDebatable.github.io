# Research brief — What is a personal AI agent?

_The full research behind the episode. Explainer type: no debate, no decider. Researched 2026-09-29 in a
run shared with ep26: peg-hunt, then deep-research-v3 (explainer scope), then a hand pass that opened every
relied-on primary. The per-claim tables are in the handpass files beside this one (A, B, C)._

## ✋ The split (ruled by Lucas, 2026-09-29)
The shared research run came back as two explainers, and Lucas ruled two companion episodes rather than
one long one: **ep25** "What is a personal AI agent?" (how it works, how well, what goes wrong) and
**ep26** "Same AI agent, different boss" (what changes when an employer is the customer). **ep26 runs
first** (Lucas, 2026-09-29): explainers follow debates already published, and ep26 follows ep21 (live),
while ep25 follows ep22/ep23 (not yet published); ep26's vendor terms and launches also go stale fastest.
ep25 runs after ep22 and ep23 publish, and may name ep26 as its companion. ep26 defines its terms on air
(build note below) and does not promise ep25.

✅ Peg re-hunted 2026-09-29 evening after OpenAI DevDay: dots became the hard peg (peg-hunt.md, "Re-hunt" section).

## Why now
**OpenAI's dots (2026-09-29, DevDay).** OpenAI's words: "always-on agents in ChatGPT that can take on
ongoing work and keep making progress" between check-ins. Powered by GPT-6 Astra, each "has its own cloud
computer", connects to "over 4,000 apps" (OpenAI's figure), and brings results back for review. Rolling
out to Pro (not in the EEA, UK or Switzerland at launch) and Business Premium; "Enterprise access is a
beta and is off by default". Safeguards OpenAI documents: an Auto-review step that "checks actions that
need review before they run", read-only background research, custom rules; password changes and moving
money are handed back to the user. It is the everyday version of everything this episode explains.
⛔ Never merge three different models: GPT-6 Astra (runs dots), GPT-6.1 Astra (reportedly cancelled;
secondary only) and the unnamed internal research model in the Medicare incident.

**And the incident, five days earlier:**
Australia's Prime Minister disclosed on 2026-09-24 that on 18 June an unreleased OpenAI
research model, sent to look up medicine-spending statistics, got past repeated blocks into the back end
of a government Medicare statistics site. OpenAI's own account (2026-09-28): it "ran commands, retrieved
internal files, credentials and aggregate statistics, and wrote files. However, individual patient or
client records were not accessed." ASD is investigating; the Parliament's Joint Select Committee on AI lists a public hearing in Sydney on 6 Oct (program not yet released).

## What an agent is, how well it works, what goes wrong

**The mechanism (all vendor primaries, confirmed):** a chatbot answers and stops; an agent runs a loop
with no human turn in between: the model asks for a tool, the software runs it, the result comes back,
repeat. Computer-use agents look at a screen and drive the mouse and keyboard. All five vendors now let
agents run on a schedule without being asked (Autopilot is still private preview; the rest have shipped).
Most say the agent should stop for approval before consequential actions.

**How well it works: "can it" vs "will it, every time"** (the spine):
- Tidy benchmarks: best general model ~86% on OSWorld's verified board vs ~72% for people new to the
  software (2024 baseline). GAIA's official top: 93.69% (the dossier's 95.1% is NOT on the board).
- Paid real work (Remote Labor Index, Scale + CAIS): **1 job in 40** accepted as-is at launch (2.5%, Oct
  2025) → **about 1 in 5** today (GPT 6 Astra 20.83%, 2026-09-17). Four in five still sent back.
- Repeat reliability (Thinkingbox, Aug 2026 preprint, 507 business workflows): Claude Opus 5 succeeds on
  66.50% of single attempts but gets only 47.53% of tasks right on all 20 tries; Qwen3.8-27B solves
  89.35% at least once in 20 but only 7.50% every time. ⚠ say "per attempt", not "first try".
- METR time horizon (task length a model finishes half the time): frontier ~17 h at 50% (METR: >16 h
  unreliable) but ~3.1 h at 80%; doubling every 3–7 months depending on the window. ⚠ Opus 4.5 figures
  in circulation (320 min, 27 min) are superseded by METR's 3 Mar 2026 correction.
- None of these measured Grok Bot, Muse or Autopilot themselves.

**What goes wrong (documented):**
- Going past its permissions: the Medicare incident (above); Replit's agent deleting a production database.
- Prompt injection: EchoLeak in Microsoft 365 Copilot was a *demonstrated* vulnerability, fixed June 2025;
  Microsoft lists it as not exploited, no customers affected. Brave's attack on Perplexity's Comet browser.
- Being talked into things: Anthropic's Project Vend (the shop ran about a month).
- ⛔ Runaway spending: no documented incident found. Don't imply one.

## What we could not establish
- OAIC involvement in the Medicare incident; the "GPT-6.1 Astra shelved" report (ABC only).
- Any documented runaway-spending incident by an agent.
- How the agents being sold (dots, Grok Bot, Muse, Autopilot) score on any of these tests: none were measured.
- xAI's "millions of bots": the live page reads "[millions]", an unfilled placeholder. ⛔ Never air.
