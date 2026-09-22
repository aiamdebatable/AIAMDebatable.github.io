# ep18 — fact-check log

Status: **adversarial-pass** — the engine's 12 primary-opened verifications, a hand pass on the primaries it could not open (X's post and OpenAI's pages, read in the in-app browser; three PDFs by extraction), and a pass over the flags and gaps (2026-09-14). The script pass comes at the `validated` gate.

## 1. The engine's own work (deep-research-v3, run wf_e18b903b-033, 2026-09-14)
116 unique claims · 12 verified with the primary opened · **10 held, 2 flagged, 0 refuted** · 104 not adjudicated · 18 gaps. A refutation is a FLAG, never a deletion.

### Flagged (2) — re-read by hand
| claim | verdict | resolution |
|---|---|---|
| The Science letters cite FARA and the CHIPS Act and reference "AEI/Bitcoin Policy Institute (~$39M)" and APT (~$2bn) | **CORRECTED** — the verifier opened the release: the legal bases and the two dollar figures are right, but the $39M is the American Energy Institute's, not the Bitcoin Policy Institute's. | The brief attributes $39M to AEI throughout. BPI is a separate document (18 May) that the June E&C letter — not the September Science letters — relies on. |
| The E&C letter (4 Jun) requested evidence; "no public FBI response has surfaced" | **CORRECTED** — the verifier found the FBI's on-record reply to the Daily Caller: "In accordance with Department of Justice policy, the FBI can neither confirm nor deny conducting specific investigations." | The brief carries the boilerplate reply as the FBI's only public response. |

### Held (10) — spot-checked, no change
Tech and Tariffs "Category One" verbatim · X's 200,000 headline (via Tom's Hardware; now ★ from the post itself) · Breakout Scale definition · DRAGONBRIDGE "unsuccessful" · the June letter's briefing request, 18 Jun deadline and Power the Future footnote · the Science release's closing request · NBC 69% and party split · EO 14318 title · Ireland CRU policy grounds.

## 2. Hand pass on primaries the engine could not open (2026-09-14)
| document | result |
|---|---|
| **X Global Government Affairs post** (in-browser) | ✅ Opened. Verbatim as quoted in the brief. Dated **27 Aug 2026, 7:17 PM** (not 28 Aug as widely reported). ~200,000 accounts; 200 on AI/energy; claims about household prices and grid strain; AI-generated cartoons. No methodology, no dates, no engagement, no dataset. The announcement shows 3.2M views. |
| **OpenAI overview, 10 Jun** (in-browser) | ✅ Opened. "significant not because the operation appears to have shifted public opinion, but because it shows PRC-origin influence operators testing narratives … we found no evidence of meaningful breakout beyond its own activity." Two clusters named. No Breakout category stated on this page. |
| **OpenAI "Data Center Bandwagon" case study, 1 Jun** (in-browser) | ✅ Opened. "likely originated in China"; operators "likely part of a social media operations team at a private Chinese technology company conducting work for Chinese provincial-level government clients"; posted on X with #capacityauction etc.; comics based on "a legitimate regional paper"; a Facebook-operations work report analysing groups, ads and recommendations for expansion. ⚠ The Actor paragraph says outputs "were posted across multiple social media platforms" while the Behavior section documents X only — the brief says "posted on X" and notes the Facebook plan as a plan. No Impact section. |
| **House E&C letter, 4 Jun** (pypdf, 3 pp) | ✅ Opened. "requests a briefing no later than June 18, 2026"; cites the Bitcoin Policy Institute and Power the Future; "$45.8 billion in data center projects disrupted" in Virginia is PTF's figure; **no FARA reference; no House Rule cited** (the dossier's "House Rules X and XI" was not found in the text either — dropped). |
| **APT report, Oct 2025** (pypdf, 31 pp) | ✅ Opened. Five charities (Quadrature, KR, Oak, Laudes, CIFF); "almost $2 billion"; KR "over $36 million to 53 U.S.-based groups from 2015 to 2024"; ClimateWorks grants "since 2008"; **"data cent" — 0 hits**; 350.org: Quadrature $950,000 (2020–present), KR >$300,000 "for fossil fuel divestment campaigns". |
| **Power the Future, Apr 2026** (pypdf, 22 pp) | ✅ Opened. "VIRGINIA: GROUND ZERO. $45.8 BILLION IN PROJECTS DISRUPTED"; its thesis: "an anti-Trump movement wearing a hard hat"; its China content: Burgum's "surrender" quote and an assertion that the Sierra Club "has been under federal investigation for allegedly receiving covert funding from Russia and China" (no citation located in the text); cites Data Center Watch for "55% of elected officials who publicly opposed data center projects were Republicans". |
| **Bitcoin Policy Institute, 18 May** (fetch) | ✅ Read. Names CGTN, China Daily, Global Times, RT; Singham's network (NYT Aug 2023; Delhi Police chargesheet May 2024); Wyss; Oak; House Ways and Means inquiries (Feb 2026). Asserts Beijing subsidises "up to half" of domestic data-center energy costs — unsourced in the article. Funding not stated. |
| **Burgum, 11 May** (search) | ✅ Breitbart, 11 May 2026, "Harnessing American Power": "It's not organic and local … foreign source dark money". Cowboy State Daily, 5 May: the Cheyenne LEADS CEO raised "foreign dark money" c. late April, citing AEI; the petition organiser called it "ridiculous". |
| **Gallup publish date** | ✅ Published 13 May 2026; fielded 2–18 Mar. |
| **Meta H2 2026 report** | ❌ Not opened (10 MB page; fetch overflows). Finder-read: no China network on US energy/data centers. Stays ○. |
| **The five 10 Sep Science letters** | ❌ Not located (Constant Contact redirect chain). The release only. |

## 3. Gaps the critics named — disposition
| gap | disposition |
|---|---|
| "Two independent primaries" premise contradicted by the record | **Accepted.** GREEN's brief line is corrected: one operation, twice disclosed. Carried into the script traps. |
| "The accusation arrived the week the polling turned" is wrong | **Accepted.** Sequence rewritten: polls Feb–Mar; "dark money" late Apr/11 May; China-specific 31 Aug and 10–11 Sep, after every Republican reversal. |
| OpenAI's overview and X's post never opened | **Closed** by the in-browser pass above. |
| No Breakout rating for the data-center cluster by name | **Confirmed absent** on both OpenAI pages; script wording fixed ("no evidence of meaningful breakout; the sister cluster rated Category One"). |
| No independent shop (Graphika, DFRLab, MTAC) checked | Not pulled. Brief says "no independent corroboration in the record", not "none exists". |
| DOJ FARA registrations for the four NGOs never queried | Not pulled. Open question. |
| Chinese state media coverage never checked | Not pulled. Open question. |
| AEI's "12 organizations" supported for six in the text | Brief says "six organisations are named in the text". |
| The June letter's BPI report never opened | **Closed** (fetched; summarised in §2). |
| Facebook spillover never searched | **Confirmed unsearched.** Brief says "an unsearched negative"; GOLD may not say "there were none". |
| Strategic logic (why a slower US buildout helps China) never sourced | **Confirmed absent.** BPI asserts a subsidy figure without a source. GREEN may not fill it. |
| No Senate-side or minority record | Not pulled. |
| Virginia state actors (AG, etc.) absent | Not pulled. |

## 4. Peg — rejected candidates (peg-hunt, 2026-09-14)
| candidate | why |
|---|---|
| X's 27 Aug post alone | the evidence, not the event; the event is its use in the 10 Sep letters |
| OpenAI's June report | 3 months old; structural |
| Meta H2 / Anthropic Sep reports | comparators — neither has a China-on-US-energy case |
| FMIC dissolution | Aug 2025; structural |
| Cruz podcast / McCormick statements / O'Leary's "cells" | personalities; the committee letters are the instrument; O'Leary named individuals without evidence — never repeated |

## 5. Still open (carried to the script's "what we don't know")
- The five Science letters' own text and deadlines; whether any NGO has replied.
- Whether the 18 Jun PCAST/FBI briefing occurred.
- Any DOJ FARA Unit contact with the four NGOs.
- Any PRC-linked content in a local group, petition or hearing, anywhere — the Facebook plan's execution.
- Chinese state media's own coverage of the backlash.
- A single documented case of a foreign operation moving a US siting decision (the yardstick is one-sided until one is found).
