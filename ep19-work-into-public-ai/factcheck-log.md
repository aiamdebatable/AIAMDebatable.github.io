# ep19 — fact-check log

Status: **adversarial-pass** — the engine's 12 primary-opened verifications, a hand pass on the primaries it could not open (OpenAI's post and policy pages, the Codex help page, OpenAI's Terms, Anthropic's consumer announcement and privacy articles, the March-20 post-mortem and the Nature piece — all through the r.jina.ai proxy because both browsers were closed to those sites overnight; the Buckmaster PDF by pypdf), and a pass over the gaps (2026-09-17/18). The script pass comes at the `validated` gate.

## 1. The engine's own work (deep-research-v3, run wf_9d4b5ffb-7d8, 2026-09-17)
114 unique claims · 12 verified with the primary opened · **12 held, 0 flagged, 0 refuted** · 102 not adjudicated · 18 gaps · 41 agents · 3.48 M tokens · 13 min. A refutation is a FLAG, never a deletion.

### Held (12) — spot-checked, no change
Anthropic safety-flag retention 5 yrs regardless of toggle · Google reviewer retention 3 yrs · OpenAI API 30-day abuse retention, ZDR opt-in · 404 Media's ~100,000 scrape · Wiz's DeepSeek database · *NYT v. OpenAI*: "tens of billions", 20 M was OpenAI's proposal, Wang's orders, Stein's affirmance · Buckmaster: "did not look up user data" / no answer on training · Buckmaster: "I am not accusing anyone of anything" · Anthropic consumer cap and no-arbitration · Google cap.

## 2. Hand pass on primaries the engine could not open
| document | result |
|---|---|
| **OpenAI Navier–Stokes post** (proxy) | ✅ Opened. Resolves "statement 'C' (and also 'D')" — **forced**; the unforced result is Euler. Sept 1–5, 88 h, ~10,000 agents, 2.7 M messages, ~130 B tokens, +17 h Lean. "did not see any of their work through any means until they released it publicly — in particular, no specific user data was accessed"; the 09-10 update ("Buckmaster's Codex prompts over the two months preceding this announcement … could not have influenced the system through training") now reads on the post. **Corrects Wikipedia**, which calls OpenAI's NS result unforced. |
| **Nature** (proxy) | ✅ Opened. "After investigating, we can say with full confidence that no user inputs past July 3rd could have influenced this system in any way." "started working on the problem on 1 September." "up to users to decide whether their conversations help improve models." Byline/date not captured by the proxy — date the line 09-13 per Wikipedia ref [46] and mark it so. |
| **OpenAI Codex help page** (proxy) | ✅ Opened. "Your ChatGPT training data controls apply to content processed through Codex, including screenshots taken by Computer Use." No separate Codex training setting on the page. **Resolves the dossier's F2 conflict** (three readings of one page) — the viral "environments toggle" post is not supported by OpenAI's text. |
| **OpenAI data-use policy** (proxy) | ✅ Opened. Consumer trains "unless you opt out"; business/API off by default; Temporary Chat excluded. No last-updated date on the page. |
| **OpenAI Terms of Use** (proxy) | ✅ Opened. Effective 2026-01-01; $100 / 12-months cap; arbitration + class waiver, 30-day opt-out; input retained, output owned; no confidentiality clause. **Closes the "OpenAI leg stands on terms.law" asymmetry** the critics named. |
| **OpenAI March-20 outage post** (proxy) | ✅ Opened. Titles + first message of a new chat; "1.2% of the ChatGPT Plus subscribers who were active during a specific nine-hour window"; name, email, payment address, card type, last four digits. **Closes the "1.2 % never read in OpenAI's words" gap.** |
| **Anthropic consumer-terms announcement** (proxy) | ✅ Opened. Free/Pro/Max incl. Claude Code; "If you're a new user, you can select your preference in the signup process"; existing users "until October 8, 2025"; "five years, if you allow us to use your data for model training" vs "30-day data retention period". ⚠ The text says the preference is chosen at signup — it does **not** say the toggle is pre-set ON. The "defaults on" claim stays ○ (Axios/Bitdefender-class). Script wording fixed accordingly. |
| **Anthropic privacy article 10023580** (proxy) | ✅ Opened (targeted). Updated 2026-03-16; Incognito excluded "even if you have enabled Model Improvement"; feedback kept up to 5 years. The proxy refused a full reproduction; the default-state sentence was not surfaced — see above. |
| **Anthropic privacy article 7996868** (proxy) | ✅ Opened. Commercial products not trained by default (2026-08-18). |
| **ABC AU 09-10** (fetch) | ✅ Altman on X: "We did not rush to publish even though the other team wasn't communicating with us." Spokesperson: "While unlikely, we cannot rule out that de-identified data derived from their usage of our products helped improve our models." Bubeck: proofs "differ significantly … even the precise results proved are different in the Euler case." **Closes the "Altman absent" gap** — two sentences, no more. |
| **Buckmaster statement PDF** (pypdf, 09-17) | ✅ Opened in full. All quotes in the brief verbatim. Plan tier not named; data settings never discussed. |
| **Fast Company's 4,500 story** | ❌ Not opened (403 on every route). The 4,500 stays ○; the 100,000 scrape is ★ (404 Media). |
| **OpenAI SOC 2 report** | ❌ Gated portal. "Business tiers don't train" remains a contractual promise, unaudited here. |
| **The viral X post claiming a Codex environments toggle** | ❌ 402. Superseded by OpenAI's own page. |

## 3. Gaps the critics named — disposition
| gap | disposition |
|---|---|
| Anthropic's consumer default never quoted verbatim | **Partly closed.** The announcement and article are now ★; the "pre-ticked" claim is still secondary and is worded as such in the brief and traps. |
| Codex toggle conflict | **Closed** from OpenAI's page: one control, covers Codex. |
| OpenAI's Terms never opened | **Closed.** |
| OpenAI's outage post-mortem never opened | **Closed.** |
| Altman absent | **Closed** (two sentences via ABC). |
| Exact wording/date of each OpenAI statement | **Mostly closed**: 09-08 (spokesperson, ABC), 09-10 (on the post), 09-13 (Nature). The 09-09 "impossible … last two months" line rests on Wikipedia ref [33] — ○. |
| Forced vs unforced | **Closed** from the post: forced NS, unforced Euler. |
| No cross-user regurgitation case; absence unsearched | **Accepted as a finding.** Brief says "no documented case was found," never "never happened." |
| Data-to-deployment latency that makes "July 3" meaningful | **Open.** Carried to the script as an open question. |
| Enterprise-tier breach in practice | **Open, unsearched.** Brief refuses "enterprise = safe." |
| FTC 2023 CID; CCPA/California; Irish DPC; state AGs; mass arbitration | **Open, unresearched.** Brief lists them as a gap, not as inaction. |
| Clay's normal review timeline | **Open.** Brief refuses to read "active" as doubt. |
| Anthropic's / NYU's institutional position | **Open.** None located. |
| Buckmaster's plan tier | **Open.** Never printed anywhere. |
