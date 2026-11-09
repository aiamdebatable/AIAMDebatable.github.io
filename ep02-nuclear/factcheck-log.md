# Fact-check log — Episode 2 · Nuclear

_REWRITTEN 2026-07-30 from the episode's actual verification record, rather than from its on-screen citations._

> **Correction to this log itself.** The previous version of this file (backfilled 2026-07-16) stated
> *"Verification status: self-review only… no separate adversarial verification pass was run"* and
> *"Corrections: None logged."* **Both statements were false.** Ep-2 was produced by the original gated
> pipeline, which ran two independent passes the backfill missed — because it worked from the on-screen
> citations rather than the run folder:
>
> - **An independent verification pass** — 12 claims re-verified **fresh against fetched primaries,
>   explicitly not trusting the team drafts**. 11 CONFIRMED, 1 CORRECTED. Every one is listed below.
> - **An adversarial fact + fairness audit**, run with equal hostility to both sides. 2 blocking
>   findings, 6 minor, across the four debate briefs.
>
> Ep-2 is therefore the **best**-verified of the POC episodes, not the least — it is the run this
> show's verification gate was written from. This episode's recorded fact-check status is
> corrected from *self-review* to *adversarial-pass* to match.

## Verification pass — 12 claims, independently re-checked

| # | Claim | Verdict |
|---|---|---|
| 1 | TerraPower Natrium construction start (June 2024 vs Mar 2026 vs Apr 2026) | **CONFIRMED** — three different project phases, not a contradiction |
| 2 | Vogtle 3&4: ~$14B estimate → ~$35–36.8B all-in | **CONFIRMED** — spread explained by the $3.7B Westinghouse settlement, financing scope, and snapshot date |
| 3 | US nuclear fleet capacity factor >92% in 2024 (wind ~34.3%, solar ~23.4%) | **CONFIRMED** (clarified 2026-11-08, no change to what aired: the >92% is the DOE Office of Nuclear Energy's March 2025 statement; EIA's final 2024 figures are nuclear 90.8%, wind 34.3%, solar photovoltaic 23.2%, Electric Power Monthly Table 6.07.B, https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b, and Monthly Energy Review Table 8.1 also gives 90.8%. The comparison the line makes is unchanged.) |
| 4 | Lazard LCOE+ 2025: nuclear $141–220/MWh vs onshore wind $37–86 | **CONFIRMED** |
| 5 | IPCC AR5 lifecycle medians — nuclear 12, onshore wind 11, gas 490, coal 820 g CO₂eq/kWh | **CONFIRMED** — matches exactly |
| 6 | Our World in Data deaths/TWh — coal 24.6, gas 2.8, nuclear 0.03 | **CONFIRMED** for what Our World in Data says. Aired as "about zero point zero seven": corrected after publication 2026-11-09, see the correction at the end of this log. |
| 7 | Sepulveda/Jenkins et al., *Joule* 2018 — firm capacity cuts system cost 10–62% | **CONFIRMED** (with a framing caveat, below) |
| 8 | Kashiwazaki-Kariwa Unit 6 restart, "February 2026" | **CORRECTED** — see below |
| 9 | Meta's Jan 2026 deals, up to 6.6 GW by 2035 (Vistra / Oklo / TerraPower) | **CONFIRMED** as Meta's own total, which Meta calls "new and existing" power. Aired as Google's and Meta's, for reactors that don't exist yet: corrected after publication 2026-11-09, see the correction at the end of this log. |
| 10 | NuScale/UAMPS cancellation, $4.2B → $9.3B; no US SMR operating | **CONFIRMED** (clarified 2026-11-08, no change to what aired: the $4.2B is UAMPS's own gross acquisition-and-construction estimate, $4,221,957,043, for the 720 MW 12-module plant in its Budget & Plan of Finance of 7/12/2019, https://www.utah.gov/pmn/files/511869.pdf; the $9.3B is the January 2023 Class 3 estimate "including financing" for the 462 MW six-module plant, https://ieefa.org/sites/default/files/2023-01/UAMPS%20Talking%20Points%20_%20Class%203%20_%2020230102%20_%20Final.pdf. The same 2023 memo lists "DOE Cost Share Award and projected IRA benefits: $4.2 billion", a different figure. Against the 2021 same-size estimate (about $5.3B, IEEFA) the rise was 75%. The partners' stated reason for ending it on 8 Nov 2023 was too few subscribers.) |
| 11 | Onkalo status | **CONFIRMED** as *not yet licensed, not yet operating* (early July 2026) |
| 12 | EIA AEO2025 LCOE + EIA's own dispatchable-vs-intermittent caveat | **CONFIRMED** |

### The one CORRECTED claim (#8)
The draft framed Kashiwazaki-Kariwa Unit 6 as a "February 2026 restart." Verification found the restart
was attempted **January 21, 2026 and aborted the next day** after a monitoring-system alarm, then
succeeded **February 9, 2026**, with **commercial operation** not until **March 18, 2026**. The
"February 2026" framing survives as accurate for the restart itself, but *restart* and *commercial
operation* must not be conflated. **This claim does not appear in the aired episode** — the Japan thread
was cut for time, so the correction never needed to reach the render.

## Adversarial fairness audit — findings, and what the aired script did

Verdicts: `pro-opening` PASS WITH FIXES (1 blocking, 3 minor) · `con-opening` PASS WITH FIXES
(1 blocking, 1 minor) · `pro-rebuttal` PASS · `con-rebuttal` PASS. **Every finding below was resolved
before air — verified 2026-07-30 by re-reading the shipped captions.**

| Finding | Side | Resolution in the aired script |
|---|---|---|
| **BLOCKING** — "licenses already extended to 80 years" overstated the cited EIA FAQ, which only says the NRC *can grant* such extensions (regulatory capability, not accomplished fact) | green | ✔ **Dropped** — the 80-year claim is not in the aired script |
| **BLOCKING** — nuclear's LCOE top ($220) quoted against wind's bottom ($37) with no firmness caveat, when the fact base says both teams must carry EIA's warning that the comparison excludes system value | gold | ✔ **Fixed** — aired as *"though those figures don't price in backup for when the wind stops"* |
| "10 to 60%" understated the source's 10–62% | green | ✔ **Fixed** — aired as *"ten to as much as sixty-two percent"* |
| "8 to 17 years for a Western reactor" — 8 yrs is the **global** average (incl. fast Korean/Chinese builds); 17 is Olkiluoto 3 specifically | gold | ⚠ **Partly fixed; CORRECTED after publication 2026-11-08** (see below): the aired line still opens "New Western nuclear?". Aired as *"around eight on average, and up to seventeen for Europe's Olkiluoto plant"* |
| EPRI/CATF $500–800B figure cited without its disclosed "via CATF, a pro-firm-power advocacy nonprofit" label, while the opposing side carried its own source's caveat every time | green | ✔ **Dropped** — the figure is not in the aired script |
| Asymmetric vividness — green conceded the cost record in adjectives ("wildly over budget") while gold stated the same facts with full figures | green | ✔ **Fixed** — green's aired concession names *Vogtle, Hinkley and Flamanville* explicitly, and the researcher segment carries the full $14B → $35B figures on screen |

### One framing caveat carried into the render
Verification item 7 flagged that the 10–62% finding covers the **category** of firm low-carbon resources
(nuclear, gas+CCS, bioenergy, enhanced geothermal) — **not nuclear specifically** — and that attributing
it to nuclear alone would misrepresent the paper. The aired script states this against its own side's
interest: *"honestly, that finding covers any firm clean source, not nuclear specifically."*

## Claims flagged on-screen as disputed / projection (not settled fact)
- **0.07 deaths/TWh for nuclear** (the aired figure; corrected after publication 2026-11-09: Our World in Data's figure counting both accidents is 0.03, see the correction at the end of this log) — sits at one end of a genuinely disputed range (Chernobyl estimates
  span <100 directly confirmed → WHO's up to ~4,000 → Greenpeace's tens of thousands). Said on-screen.
- **New Western nuclear ~$220/MWh (Lazard)** — doesn't price in backup for when wind stops (caveated).
- **Green's "CCS & long-duration storage less proven"** — flagged on air as an extrapolation.
- **Gold's "rebuilding the industry takes decades"** — flagged on air as a projection.
- **Onkalo** — aired as *"on the verge of"* burying spent fuel, which matches the verified status (not
  yet licensed, not yet operating). ⚠ Fast-moving: STUK's final safety assessment was due end of June
  2026, so re-check this line before any public release.

## Open questions this episode could not settle
- Whether the West's cost/speed problem is fixable, or a fact about institutions it no longer has. The
  host names this as his own caveat on air: nearly everything settled *against* nuclear here is a
  Western story.
- Whether SMRs / serial builds break the Western cost-overrun pattern — explicitly unresolved in
  **both** directions (n=1 cancelled US project against; Korea/China/UAE learning curves for).
- What actually firms a renewables-heavy grid through multi-day winter lulls — the contested core,
  handed to the viewer.

### ⛔ CORRECTION 2026-11-08, after publication: "New Western nuclear? Around eight on average."

Found when the research library compared episodes: the fix above cut "8 to 17 years for a Western reactor" but kept
"Western" in the aired line (9:28). The on-screen chart ("New nuclear (avg) ~8 yrs") was right. Re-checked at the
primary, IAEA *Nuclear Power Reactors in the World*, 2025 edition (RDS-2/45), Table 8, "Number of new reactors connected
to the grid and median construction time in months" (first concrete to grid connection): WORLDWIDE 102 months for
2021–2024 connections (17 reactors), 91 months for 2016–2020; FINLAND 1 reactor, 200 months (Olkiluoto 3). The published
video and its YouTube description stay as published; the correction lives here, in the transcript note and the site summary. The old
approved wording "including fast builds in Korea and China" is dropped: the same table gives Korea 124 months for 2021–2024.

| claim (as aired) | verdict |
|---|---|
| "New Western nuclear? Around eight on average" | **CORRECTED (after publication).** About eight years is the worldwide median (IAEA RDS-2/45 Table 8: 102 months, 2021–2024), not a Western figure; Olkiluoto 3 took 200 months. https://www-pub.iaea.org/MTCD/Publications/PDF/RDS-2-45_web.pdf |

### ⛔ CORRECTION 2026-11-09, after publication: two figures in the opening research

Found when we re-checked our episodes. Row 6 confirmed Our World in Data's 0.03 deaths per TWh for nuclear, but the
script aired 0.07 with Our World in Data's credit and its scope ("including Chernobyl and Fukushima"). The 0.07 is
Markandya & Wilkinson (2007), *The Lancet* 370(9591):979–990: 0.074 deaths per TWh for nuclear, a modelled estimate
for European plants that counts cancer deaths on the linear no-threshold model. Our World in Data carried it in its
2017 dataset ("Death rate from energy production - Markandya & Wilkinson (2007)"). Published in 2007, it cannot
include Fukushima. Our World in Data's current figure is 0.03, *"based on the assumption of 433 deaths from Chernobyl
and 2,314 from Fukushima"*, over 96,876 TWh of nuclear power from 1965 to 2021. The aired figure is the less
favourable one for nuclear, so the line's point stands: nuclear is among the safest sources. Row 9's 6.6 GW is Meta's
own total, announced 9 January 2026, *"supporting up to 6.6 GW of new and existing clean energy by 2035"*: more than
2.1 GW is energy bought from two operating Vistra plants in Ohio, plus 433 MW of uprates at existing plants; the new
reactors are TerraPower (two Natrium units, up to 690 MW, plus rights to six more, 2.1 GW) and Oklo (up to 1.2 GW),
about 4 GW together. The aired line credited the total to "Google and Meta" and to "reactors that don't exist yet".
The published video and its YouTube description stay as published; the correction lives here, in the transcript
notes and on the site. Accessed 2026-11-08.

| claim (as aired) | verdict |
|---|---|
| "Nuclear? About zero point zero seven, including Chernobyl and Fukushima." | **CORRECTED (after publication).** Our World in Data's figure counting Chernobyl and Fukushima is 0.03 deaths per TWh. The 0.07 is Markandya & Wilkinson's 2007 European estimate, which predates Fukushima. https://ourworldindata.org/grapher/death-rates-from-energy-production-per-twh ; https://ourworldindata.org/safest-sources-of-energy ; https://api.ourworldindata.org/v1/indicators/1207280.metadata.json |
| "Google and Meta have signed for reactors that don't exist yet. Up to six point six gigawatts by twenty thirty-five." | **CORRECTED (after publication).** Up to 6.6 GW is Meta's total alone, of new and existing power; more than 2.1 GW of it comes from plants already running. The new reactors in Meta's deals come to about 4 GW. https://about.fb.com/news/2026/01/meta-nuclear-energy-projects-power-american-ai-leadership/ |
