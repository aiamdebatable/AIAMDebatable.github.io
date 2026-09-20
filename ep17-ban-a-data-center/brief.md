# ep17 — Should Your Town Be Able to Ban a Data Center?

**Question:** when a community says no to a data center, is a moratorium the only tool that works — or the one that guarantees it gets nothing?
**Type:** DESIGN episode (two designs, not two positions). GREEN = the moratorium/ban. GOLD = rules, not bans.
**Chain:** ep03 (the boom) → ep11 (who pays for the grid) → **ep17 (who decides)**. Companion: #85.
**Research grade:** episode. Engine + hand pass recorded in the episode metadata. Every figure below is tagged ★ (primary opened by a verifier or by hand) or ○ (finder-read / secondary, not yet opened). ⛔ Nothing tagged ○ goes on screen as a number until it is opened — see `factcheck-log.md`.

---

## Why now

The ban-vs-rules split went live at the STATE level in the last five weeks, inside both parties, and in court.

- ★ **Ohio Supreme Court, 1 Sep 2026** — *State ex rel. Blankenship v. Trenton City Council*, 2026-Ohio-3406: the council had refused to certify a citizens' charter amendment banning new data centers (reported as >25 MW), reading the signature threshold as 820 when the law required 128 (336 were filed). The court called that "disregard of applicable law" and ordered a special election within 60–120 days. ⚠ It is a **procedural** ruling about signatures; it says nothing about preemption or the merits, and it expressly did not put the question on the 3 Nov ballot — the council did that itself on 3 Sep. Trenton's vote is the first US ballot where a ban is tested against a rules status quo. https://www.courtnewsohio.gov/cases/2026/SCO/0901/261035.asp · https://www.supremecourt.ohio.gov/rod/docs/pdf/0/2026/2026-Ohio-3406.pdf
- ★ **Pennsylvania EO 2026-05, 18 Aug 2026** — the rules design, with a local veto welded on. For any data center over 25 MW peak demand, DEP issues no permit "until the applicant has provided documentation … that the project has received all local or municipal approvals"; developers who sign the GRID Consent Order get rolling review, those who refuse get no review at all until local approvals exist; every data center is removed from the Fast Track programme; NDAs are "impermissible" for state agencies; the Special Counsel is to push the PUC to curtail data centers first in emergencies and charge them the PJM backstop-auction costs. The order's own preamble: data centers were "responsible for $29.4 billion in capacity charges to ratepayers, or 46% of the total auction costs" across PJM's last four auctions (citing the Independent Market Monitor). https://www.pa.gov/content/dam/copapwp-pagov/en/governor/documents/eo2026_05_protecting%20pennsylvania%20consumers%20from%20data%20center%20impacts_final_executed.pdf
- ★ **New York EO 62, 14 Jul 2026** — the moratorium design. DEC holds every discretionary application for a facility that can "consume 50 megawatts of energy or more" in abeyance "until DPS submits its report of the final Generic Environmental Impact Statement" — **no date**. The 60-day community-investment framework and 90-day interconnection report are side deliverables, not the end of the pause. Exempt: manufacturing, research, education, medical, and applications DEC had already deemed complete. https://www.governor.ny.gov/executive-order/no-62-establishing-temporary-moratorium-data-centers-new-york-while-state-develops
- ○ **New Hampshire, 2 Sep 2026** — Gov. Ayotte (R) will propose a multi-year statewide moratorium in the next budget (≥ July 2027, or sooner by EO), citing ISO-New England on prices; trigger is a hyperscale proposal at the closed Bow coal plant. ⚠ ISO-NE's own 2026 large-load forecast says the region has only a couple hundred MW in its study pipeline — a pre-emptive pause where almost nothing is queued, unlike New York's. https://www.nhpr.org/nh-news/2026-09-02/ayotte-opposes-potential-bow-data-center-plans-to-propose-moratorium-on-data-centers-in-state · https://www.iso-ne.com/static-assets/documents/100033/fx2026_large_loads.pdf
- ○ **Texas, 3 Aug 2026** — Gov. Abbott (R) directed PUCT/ERCOT to freeze new interconnection approvals pending a "comprehensive verification and audit" (tax breaks, power, water, cooling, ownership); ~474 GW in the queue, ~90% data centers; audit due 10 Dec. https://www.texastribune.org/2026/08/03/texas-data-center-project-audit-greg-abbott/
- ★ **Florida SB 484, eff. 1 Jul 2026** — rules design with local authority preserved: PSC tariffs must "reasonably ensure that each large load customer bears its own full cost of service"; utilities file by 1 Oct 2026. Counties used the preserved authority immediately: ○ Sarasota 5–0 one-year moratorium; ★ Palm Beach denied Project Tango 4–1 (without prejudice) after a 12-hour hearing. https://flsenate.gov/Session/Bill/2026/484/BillText/er/HTML
- ★ **Polls:** Gallup (2–18 Mar, n=1,000) 71% oppose an AI data center in their area; NBC/SurveyMonkey (20 Aug–1 Sep) 69% (R 57 / I 71 / D 81); ○ Quinnipiac PA (June) 76%. ⚠ None asked ban-vs-rules; the only poll that did (57% rules / 23% moratorium, Morning Consult 17–19 Jul) was commissioned by Americans for Responsible Innovation — name the sponsor on air. https://news.gallup.com/poll/709772/americans-oppose-data-centers-area.aspx
- ★ Description context only: Truth Social, 31 Aug 09:59 EDT — communities that refuse "want to end up being backwards and poor … let Data Reign." https://www.trumpstruth.org/statuses/41411

**Where it goes:** hard peg (Trenton + New Hampshire) → the episode description. Structural (NY EO 62 · PA EO 2026-05 · FL SB 484 · the Texas audit · the Trenton ballot) → the script, by place and instrument, never by personality. ⛔ No Wisconsin county-board fight is named anywhere; the statewide race and the state exemption are fine.

---

## Settled facts (not the debate)

1. ★ **Opposition is broad and cross-party** — 71% (Gallup), 69% (NBC, with 57% of Republicans). Not a poll asked whether people prefer a ban or rules.
2. ★ **Grid cost is real and REGIONAL.** PA's own EO quotes the PJM market monitor: $29.4bn / 46% of four capacity auctions attributable to data centers (○ 38% / $6.3bn of $16.4bn for the latest). ⚠ The IMM's split is a finding whose method has not been published (secondary), and the Data Center Coalition disputes PJM's related non-capacity-backed-load design — say "the market monitor attributes", never "data centers caused". PJM spreads capacity charges across 13 states plus DC. **A county that bans still pays the regional charge.**
3. ★ **The grid "ask" is inflated 2–3×.** ERCOT: of 9,042 MW approved to energize, observed simultaneous peak was 3,801 MW (Mar 2025) — ~42%. ○ Dominion told PJM its 47 GW of executed contracts is nearly triple its own 16.6 GW forecast. ⚠ This is queue inflation and ramp, **not** efficiency.
4. ○ **Per-chip efficiency does not lower the ask.** LBNL/DOE (2026): efficiency gains are outpaced by demand growth. The substation is sized to the contract.
5. ★ **Recirculation is real; consumption is not zero.** Quincy WA: the Microsoft/city reuse utility cycles water 4–5×, cut potable draw ~138M gal/yr, and still takes ~260M gal/yr of make-up water from the Columbia Basin irrigation canal (~5% still potable groundwater). ○ The Dalles OR: Google used 434.4M gal in 2024 (383.9M in 2023; 104M in 2012) — about a third of a 16,200-person city's use (OPB, city records). ○ Virginia: 2.1bn gal in 2023, +86% since 2019, yet ~0.5% of state consumption. ○ Chillicothe OH's "28M gal/day, returned cleaner" is a developer's claim for an unbuilt facility, made under an NDA cloud, with no NPDES record checked.
6. ○ **No audited permanent-jobs figure exists** for any US data center in the record. Stokes County NC's "250–500 jobs / $20–40M a year" is a developer projection for a project whose rezoning was rescinded. The documented jobs are construction jobs.
7. ★/○ **The fiscal upside is real but GROSS.** Loudoun (county's own page): data centers paid $1.2bn in real and personal property tax in FY2026, 39% of the county's overall budget, projected $1.3bn / 40% for FY2027; the FY2026 real-property rate was cut six cents to $0.805. Grant County WA property tax $4.24M (2006) → $54.27M (2025); Quincy's levy $3.12 → $0.88 per $1,000. Nobody nets infrastructure, foregone land use, or the **state-side** exemption (WI: ~$1.5bn construction + $369M/yr, LFB; WA: >$474M since 2018). The exemption is paid by the STATE, the property tax lands on the COUNTY — which is why a county board and a legislature reach opposite answers on the same building.
8. ★ **"Temporary" has no fixed meaning.** NY EO 62 runs to an undated GEIS. ○ Charlotte's 150 days is heading for ~a year on staff advice; ○ Imperial County's 45 days became one year; ★ DeKalb GA's 100 days (Jul 2025) has been extended three times, now to 30 Mar 2027, and the county is being sued.
9. ★ **The instrument does not predict the answer.** Rules-first Loudoun approved 32 of 39 legislative applications 2022–May 2026 (county page); rules-first Florida counties denied (Palm Beach, 4–1) and paused (Sarasota, 5–0, 8 Jul) within days of SB 484; Pinal County AZ rejected La Osa 4–1 on 26 Aug after a cut from 59 buildings / 3 GW to 11 buildings / 1 GW with a 600 acre-foot water cap (≈195M gal — about Quincy's canal make-up); pause-first Kearney NE approved 368 MW 5–0 on 8 Sep, replacing a 100 MW crypto mine, the same night it passed its first data-center code (day-night 55 dBA at the property line; closed-loop cooling using 2–5M gal/yr ≈ 20–45 households).
10. ○ **Three moves neither design covers actually strip the community's say:** state preemption (West Virginia HB 2014, signed Apr 2025: certified microgrid districts and their data centers are exempt from county and municipal zoning, permitting and ordinances, and the property tax is redirected away from the county — ○ the split is contested between the state and the WV Center on Budget & Policy); federal land (Boulder City NV's rejected project moved onto adjacent BLM ground); litigation cost (Hill County TX rescinded its moratorium within weeks of a $100M suit; Wixom MI and Imperial County CA are being sued now; Prince William VA appropriated a further $400k (Dec 2025, 5–3) defending a rules-first approval that a court voided on a public-notice defect — a missed advertisement and a six-day interval — affirmed on appeal 31 Mar 2026; QTS withdrew 2 Jul 2026 and the 2,100-acre project is dead).
11. ★ **Every jurisdiction that acted picked an MW threshold** — 20 (NY's failed bill), 25 (PA EO, Trenton as reported, Dominion GS-5, AEP Ohio), 50 (NY EO 62, FL SB 484), 100 (Georgia PSC, Virginia SB 94 disclosure). Below it a facility is invisible to the regime. ⚠ Measured differently everywhere (NY "can consume"; FL 15-minute monthly peak; PA peak demand) — say "roughly".
12. ★ **Nobody on the record argues ratepayers should subsidise.** PA GRID: 100% of caused cost. FL: full cost of service. The White House Ratepayer Protection Pledge (4 Mar 2026; Amazon, Google, Meta, Microsoft, OpenAI, Oracle, xAI): pay "whether they use the electricity or not" — and PA's EO calls it, in its own preamble, "non-binding". ○ The Data Center Coalition's own Ohio stipulation accepted an 85% minimum take.

### The water comparators (★ unless marked) — for the screen, per [[big-figures-need-a-comparator]]

| unit | gallons/yr | source |
|---|---|---|
| one household | ~110,000 (300 gal/day) | EPA WaterSense |
| one irrigated acre | ~489,000 (1.5 acre-ft) | USDA NASS 2023 Irrigation & Water Management Survey |
| median US golf facility | ~21.6M (66.3 acre-ft, 2020); North Central ~13.2M; Southwest ~122M | GCSAA Water Use Survey, Phase III (2022) |
| an 18-hole course (often-quoted national avg) | ○ 90–130M | USGA-cited, secondary |

So: **The Dalles, 434M gal** ≈ 3,900 households ≈ 890 irrigated acres ≈ 20 median golf facilities (≈ 4 big 18-hole courses) ≈ a third of a 16,000-person city. **Quincy's canal make-up, 260M gal** ≈ 530 acres of the irrigated farmland it sits in — it is literally canal water from the Columbia Basin Project. **Quincy's data-center share of groundwater** (10% of ~2.1bn) ≈ 210M ≈ 1,900 households, in a town of 8,100 whose total use already equals ~30,000 people's. **Chillicothe's claimed 28M gal/DAY** ≈ 10.2bn gal/yr ≈ five Quincys ≈ 21,000 irrigated acres — which is why it is a claim to test, not a figure.

---

## The contested core (both steelmanned)

**GREEN — the community's right to say no.**
The one instrument a county actually controls is land use; everything else is set at the PUC or the RTO. A pause is the only lever that stops a 250 MW facility while the rules that would govern it are written — and every foreign precedent (○ Dublin's connection pause → CRU criteria; Singapore's 2019 pause → a selective 80 MW call in 2022; Amsterdam's 2019 stop → a 2020 site plan with PUE 1.2) shows the pause **becoming** the rulebook. Rules-first regimes are too new to have delivered anything: Dominion's GS-5 tariff starts 1 Jan 2027; Florida's tariffs are only due to be **filed** by 1 Oct; the Pledge has no enforcement text. Meanwhile the numbers shown to a county are inflated 2–3× and the jobs are unaudited promises. When you cannot verify the deal, "not yet" is the rational answer — and Pinal's residents, having rejected La Osa, asked for rules in the same breath.

**GOLD — rules, not bans.**
A ban does not touch the complaint the host calls valid: PJM's capacity charge lands on every bill in 13 states whether or not your county hosts anything. What DOES touch it is a tariff (Dominion's GS-5: a 14-year contract, at least 85% of transmission-and-distribution cost every month regardless of usage, collateral up to 60% of the minimum charges, from 1 Jan 2027; AEP Ohio's: 85% of subscribed load for up to 12 years, projects over 25 MW, PUCO 9 Jul 2025) and a permitting condition (PA: 100% of caused cost, curtail first, no critical-load exemption). Rules keep the local veto — PA, FL and VA all wrote "local approval first" INTO the rules design — and add what a ban cannot: a published impact study, an annual energy-and-water report (PA §2c, from 1 Jul 2027), and a number on the contract the developer eats if the load never shows up. A moratorium's exposure is a lawsuit (Hill County, Wixom, Imperial) and an open-ended clock (NY, Charlotte, DeKalb); Monterey Park's "pause" became an 88% permanent ban. And the fiscal upside, gross as it is, is real: Loudoun cut its real-property rate ~30% in a decade.

**What each side must concede.** GREEN: a county ban does not lower a PJM bill, and "temporary" has repeatedly meant "indefinite". GOLD: its central promise — that a cost-of-service tariff stops the cost shift — has **zero post-implementation measurement anywhere**; it is regulator intent, not a result.

---

## The reframe — what the shouting gets wrong

Ban and rules are not rival answers; on the record they are the same answer at different clock positions. Wixom's moratorium was the drafting window for its ordinance; Kearney passed its rules and its 368 MW approval in one sitting; Linn County wrote rules and then paused the district the rules created; Dublin, Singapore and Amsterdam turned a stop into a rulebook. What the camps are actually fighting about is (1) the **SUNSET** — does the pause have a date and a deliverable (Wixom; Imperial's Jan-2027 advisory board) or an open trigger (NY's undated GEIS; Charlotte's stretching clock; DeKalb's third extension) — and (2) the **THRESHOLD**, the MW number that decides whether a given facility is inside the regime at all.

The second thing the shouting gets wrong is the **target**: the bill is set at the RTO and the PUC, not the county board. And the third is the **adversary**: the actor that most reliably takes a community's "no" away is not the other camp but the preempting legislature (WV), the federal landlord (BLM) and the developer's lawyer — costs that fall on rules-first counties (Prince William) exactly as on ban-first ones (Hill County).

### Both quietly agree
Transparency and cost-causation. No NDAs (PA; Chillicothe's backlash; Hill County's pivot to a disclosure checklist). A published impact study before approval (Khanna's resolution; Linn County's water study; Kearney's sound study; Virginia SB 94's site assessment). Developer pays 100% of caused cost (PA GRID, FL SB 484, the Pledge, the DCC's own Ohio stipulation). Both designs already contain all three. They differ on whether the community gets to say no AFTER seeing the numbers — and Florida, Pennsylvania and Virginia wrote "yes" into their rules-first regimes.

---

## Verdict framing (no winner — hand it to the viewer)

**What survives both designs:** a pause **with a hard sunset AND a rules deliverable**; developer pays 100% of caused cost, on paper the developer signs; no NDAs; a published study before the vote; local approval as a condition of the state permit.

**The one dial the viewer sets: the MW threshold.** 20, 25, 50 or 100. Every jurisdiction picked one, and it decides whether the facility down the road is regulated at all — NY's 50 exempts exactly the mid-size facilities its failed 20 MW bill would have caught. The verdict is not "ban" or "rules"; it is "where do you set the number, and what is the date on the pause?"

---

## Script traps (from the dossier; each is a sentence that would be wrong)
- "The court put the ban on the November ballot" — it refused that; the council did it.
- "The court sided with the community's right to ban" — it counted signatures.
- "71% want a ban" — nobody was asked.
- "Rules make sure you don't pay for someone else's data center" — say "designed to"; no tariff has a measured result. Never quote GS-5's projected $5.52/month as a saving.
- "Most moratoria end in rules / become bans" — the five deep-dived cases split 2/2/1. ★ Moratorium Nation's own dispositions (as of 19 Aug 2026): 429 of 533 local instruments in force, 34 pending, 70 expired or rescinded — i.e. ~13% have ended; what they ended INTO is not coded.
- "Hundreds of permanent jobs" — no audited figure exists anywhere.
- "Data centers pay for themselves" — gross figure; the state pays the exemption.
- "It'll be more efficient by the time it opens" — per-chip yes; the ask is the contract.
- "Chillicothe returns the water cleaner" — a claim for an unbuilt plant.
- "Trenton bans data centers over 25 MW" — "as reported"; the petition text was not located.
- "A national count of ~200 bans" — Moratorium Nation's 533 (local instruments, 42 states, CC-BY CSV) and dcmap's 56 (formal actions, state + major local) count different universes; the podcast's 97/93/28 traces to nothing. Cite Moratorium Nation with its method, or no number.
- Any Wisconsin county by name.

## Open questions carried into the script's "what we don't know"
- Has any US large-load tariff shown one measured billing cycle of reduced cost shift? (AEP Ohio, in force since Jul 2025, is the only candidate.)
- Trenton, 3 Nov: the first ban-vs-status-quo ballot. Charlotte's 14 Sep vote.
- What do MISO/SPP/CAISO show — is the capacity-cost story PJM/ERCOT-specific?
- Any audited permanent headcount at an operating hyperscale campus, from a county's own records.
