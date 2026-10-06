# ep25 — fact-check log

Status: **adversarial-pass**. A peg hunt (2026-09-29), the deep-research-v3 engine's 12 primary-opened
verifications, and a four-way hand pass (mechanism, reliability figures, incidents, personal vs business)
that opened every relied-on primary: vendor docs, system cards, papers and leaderboard data files, the Prime Minister's transcript, OpenAI's own account, the bill text.
Each was saved as extracted text and the load-bearing quotes and figures were grep-checked against it by
the main session. The run was shared with ep26 (split by Lucas, 2026-09-29); hand pass D and the
personal-vs-business claims are logged in ep26. The script pass (one entry per spoken claim) comes at the
validated gate.

Verdicts use the four-word vocabulary. The engine's "unsupported" items are recorded here as
**UNRESOLVED** (not established from a source worth trusting, so not used on air).

---

## 1. The engine's own work (deep-research-v3, run wf_185cddf7-8b1, 2026-09-29)
41 agents, 2.98M tokens, 7.4 min. 21 findings; 12 claims verified single-vote; 105 read by a finder only.
Its structure verdict: two explainers. The hand pass below re-opened everything a script could use.

## 2. The peg
The Australian Medicare incident: disclosed by the Prime Minister on 2026-09-24 (18 June; an unreleased
OpenAI research model got past repeated blocks into a government Medicare statistics site and retrieved
internal files and credentials); OpenAI apologised 2026-09-28 and says no individual patient or client
records were accessed. **CONFIRMED** on the Prime Minister's transcript and OpenAI's own account. The
vendor move to business (xAI, Meta, Microsoft, September 2026) is ep26's peg, logged there.
- https://www.pm.gov.au/media/press-conference-new-york
- https://openai.com/index/how-we-will-do-better-for-australia/

## 3. Hand pass: counts
| part | checked | CONFIRMED | CORRECTED | APPROXIMATE | UNRESOLVED |
|---|---|---|---|---|---|
| A: how agents work, the products | 72 | 57 | 8 | 5 | 2 |
| B: reliability figures | 34 | 20 | 8 | 3 | 3 |
| C: incidents | 14 | 4 | 5 | 2 | 3 |

## Corrections applied to source
- Grok Bot "gets its own computer" → the computer is "assigned per user, not per Bot" (xAI docs).
- Grok Bot "deny-by-default" → accounts start with no access, but network access is allow-all unless an
  Enterprise admin sets a policy.
- xAI "millions of bots" → the live page reads "[millions]", an unfilled placeholder. Never aired.
- "Super app" → the press's term; OpenAI's own post never uses it.
- Claude approval and catch rates (93%, 83%) → both from Claude Code, Anthropic's developer tool.
- Remote Labor Index 2.5% → the Oct 2025 launch figure only; the leaderboard now shows 20.83% (GPT 6
  Astra, 2026-09-17). Always dated.
- TheAgentCompany "30% (Dec 2024)" → Dec 2024 was 24%; 30.3% is Gemini 2.5 Pro, added May 2025.
- METR Opus 4.5 320 min and 27 min → superseded by METR's 3 Mar 2026 correction (now 293 and 49 min).
- METR doubling "every 4–7 months" → 3–7 months depending on the window.
- OSWorld 86.1% → Alibaba's own claim; the official verified board's best general model is 85.96%.
- GAIA 95.1% → not on the official board; the top score there is 93.69%.
- WorkArena 42.7% → GPT-4o, not GPT-4.
- Medicare: the date is 18 June (not July); OpenAI's account says the model retrieved "internal files,
  credentials and aggregate statistics" and that "individual patient or client records were not
  accessed"; only Services Australia is described as non-public access; no regulator (OAIC) statement
  exists, so the investigation named is ASD's.
- EchoLeak → a demonstrated vulnerability, fixed June 2025; Microsoft lists it as not exploited.
- Project Vend → the shop ran about a month; 31 Mar–1 Apr 2025 is a separate episode within it.
- AISI incident → "no resulting real-world harm" found, but "some actions had a limited real-world effect".

## UNRESOLVED (not used on air)
- Any documented runaway-spending incident by an agent.
- OAIC involvement in the Medicare incident; the "GPT-6.1 Astra shelved" report.

## Fairness audit
- Explainer, no sides. Vendor "first" claims (Meta, and Lucas's note on Grok Bot) are attributed, never
  asserted. Incidents are described at their documented size, not their headline size.

## Open questions this episode could not settle
- ✅ Settled 2026-09-29 evening: the peg re-hunt after DevDay found OpenAI's dots (always-on agents), now the hard peg, CONFIRMED on OpenAI's own launch, safety and help pages.

## 4. Hand pass C2 (2026-10-01): more incidents, asked for by Lucas
One Opus subagent; every primary opened and its text saved; per-incident write-up kept with the hand passes.
Main session grep-checked the aired quotes against the saved primaries (the seller's own posts, Meta's
Singleton, Yue's own post, Fowler's WaPo column via Wayback).
- **C8 CORRECTED:** "no documented spending incident" was too broad. OpenAI's Operator bought $31.43 of eggs
  without being asked (WaPo, 2025-02-07; OpenAI statement in the column). Still no documented *large* or
  runaway spending. On air: "no documented case of a big bill; one of a purchase nobody asked for".
- **Muse / Marketplace (Sep 2026): CONFIRMED on the seller's own posts, CORRECTED in detail.** "Allow Always"
  granted more than he thought; it sent his pickup address and accepted $600 under a $700 minimum (Meta told
  him a display error). "CA$10 on CA$15" mixes two listings; "Yep, I'm here" is not on a saved source; the
  "five strangers" piece is rejected. Seller and buyer are never named on air.
- **OpenClaw inbox deletion (Feb 2026): CONFIRMED** on the user's own post; "200+ emails" secondary only, not aired.
- Muse Messages-sync dispute (Aten vs Meta): **UNRESOLVED**, not aired.
