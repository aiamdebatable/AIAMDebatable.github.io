# ep26 — fact-check log

Status: **adversarial-pass**. Researched in a run shared with ep25 (split by Lucas, 2026-09-29): a peg hunt
(2026-09-29), the deep-research-v3 engine's 12 primary-opened verifications, and hand pass D, which opened
every relied-on vendor page (terms, privacy policies, help-centre and admin docs, pricing pages) and the
bill text on leginfo. Each was saved as extracted text and the load-bearing quotes were grep-checked
against it by the main session. The script pass (one entry per spoken claim) comes at the validated gate.

Verdicts use the four-word vocabulary. The engine's "unsupported" items are recorded here as
**UNRESOLVED** (not established from a source worth trusting, so not used on air).

---

## 1. The engine's own work (deep-research-v3, run wf_185cddf7-8b1, 2026-09-29)
41 agents, 2.98M tokens, 7.4 min, shared with ep25. This episode is the run's Part B.

## 2. The peg
Three vendors took consumer-born agents to business within four weeks: xAI (Grok Bot for Enterprise,
2026-09-03), Meta (Muse 2026-09-08; Meta Enterprise Platform 2026-09-28; Muse for Small Business
2026-09-29), Microsoft (Copilot Autopilot, 2026-09-25). **CONFIRMED** on each company's own post.
- https://x.ai/news/grok-bot-for-enterprise
- https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/
- https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/
- https://about.fb.com/news/2026/09/introducing-muse-small-business/
- https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/

## 3. Hand pass D: counts
| checked | CONFIRMED | CORRECTED | APPROXIMATE | UNRESOLVED |
|---|---|---|---|---|
| 47 | 26 | 5 | 10 | 6 |

Product facts this episode shares with ep25 (Autopilot's own identity; Grok Bot acting as the signed-in
member) were checked in ep25's hand pass A and are logged there.

## Corrections applied to source
- Microsoft consumer Copilot "trains by default" → no longer true of the new app (2026-08-18): prompts,
  responses and file contents "aren't used to train foundation models". Signed-out users were never
  trained on.
- "12-month liability cap, no agent clause" → true only of business terms. Microsoft consumer: "you are
  solely responsible for those Actions"; Anthropic consumer: "You are responsible for … all Actions",
  capped at the greater of six months' fees or $100.
- Claude when a member leaves → remaining members lose even shared chats; the Primary Owner can always
  export (Team too); "no suspend state" is not on the page.
- Muse for Small Business → the "owner approval for any external action" claim is not in Meta's post; it is
  the same consumer app, not a business tier.
- SB 947 → the enrolled text has no "predictive behavior" ban; it covers employer discipline and firing
  systems, not workers' own agents; from July 1, 2027 if signed.
- Grok Bot "deny-by-default" → accounts start with no access, but network access is allow-all unless an
  Enterprise admin sets a policy (hand pass A).
- xAI "millions of bots" → the live page reads "[millions]", an unfilled placeholder. Never aired.

## UNRESOLVED (not used on air)
- Any measure of employees running personal agents at work.
- "Nearly half would keep using personal AI after a ban": the source says 47% of decision-makers would
  switch if access were cut over cost.
- What happens to a persistent agent's memory, schedules and identity when its owner leaves a job, for every vendor but OpenAI (its dots admin guide says reset the memory at offboarding: CONFIRMED).
- Microsoft 365 Copilot "30 million paid seats" (not in Microsoft's post).
- Grok Bot's training default for individual users (xAI's docs defer to Cursor settings without stating it).
- SB 947's fate (no signature or veto on leginfo as of 2026-09-29).

## Fairness audit
- Explainer, no sides. Vendor "first" claims (Meta; Grok Bot) are attributed, never asserted. The episode
  compares documented terms, not marketing.

## Open questions this episode could not settle
- SB 947: signed or vetoed by 2026-09-30?
- ✅ Settled 2026-09-29 evening: the peg re-hunt after DevDay found OpenAI's dots (always-on agents), now the hard peg, CONFIRMED on OpenAI's own launch, safety and help pages.
- Meta's help-centre quotes came through a single fetch path; re-open them in a browser before airing.
