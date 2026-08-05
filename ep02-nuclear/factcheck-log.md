# Fact-check log — Episode 2 · Nuclear

_REWRITTEN 2026-07-30 from the episode's actual verification record in `poc-episode/run-1/`._

> **Correction to this log itself.** The previous version of this file (backfilled 2026-07-16) stated
> *"Verification status: self-review only… no separate adversarial verification pass was run"* and
> *"Corrections: None logged."* **Both statements were false.** Ep-2 was produced by the original gated
> pipeline, which ran two independent passes the backfill missed — because it worked from the on-screen
> citations rather than the run folder:
>
> - **`poc-episode/run-1/research/verification-report.md`** — 12 claims re-verified **fresh against
>   fetched primaries, explicitly not trusting the team drafts**. 11 CONFIRMED, 1 CORRECTED.
> - **`poc-episode/run-1/05-fact-fairness-audit.md`** — an adversarial fact + fairness audit run with
>   equal hostility to both sides. 2 blocking findings, 6 minor, across the four debate briefs.
>
> Ep-2 is therefore the **best**-verified of the POC episodes, not the least. `episodes/README.md`
> already cites that verification report as the reference implementation of this gate. `metadata.yaml`
> `fact_check.status` is corrected from `self-review` to `adversarial-pass` to match.

## Verification pass — 12 claims, independently re-checked

| # | Claim | Verdict |
|---|---|---|
| 1 | TerraPower Natrium construction start (June 2024 vs Mar 2026 vs Apr 2026) | **CONFIRMED** — three different project phases, not a contradiction |
| 2 | Vogtle 3&4: ~$14B estimate → ~$35–36.8B all-in | **CONFIRMED** — spread explained by the $3.7B Westinghouse settlement, financing scope, and snapshot date |
| 3 | US nuclear fleet capacity factor >92% in 2024 (wind ~34.3%, solar ~23.4%) | **CONFIRMED** |
| 4 | Lazard LCOE+ 2025: nuclear $141–220/MWh vs onshore wind $37–86 | **CONFIRMED** |
| 5 | IPCC AR5 lifecycle medians — nuclear 12, onshore wind 11, gas 490, coal 820 g CO₂eq/kWh | **CONFIRMED** — matches exactly |
| 6 | Our World in Data deaths/TWh — coal 24.6, gas 2.8, nuclear 0.03 | **CONFIRMED** |
| 7 | Sepulveda/Jenkins et al., *Joule* 2018 — firm capacity cuts system cost 10–62% | **CONFIRMED** (with a framing caveat, below) |
| 8 | Kashiwazaki-Kariwa Unit 6 restart, "February 2026" | **CORRECTED** — see below |
| 9 | Meta's Jan 2026 deals, up to 6.6 GW by 2035 (Vistra / Oklo / TerraPower) | **CONFIRMED** |
| 10 | NuScale/UAMPS cancellation, $4.2B → $9.3B; no US SMR operating | **CONFIRMED** |
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
| "8 to 17 years for a Western reactor" — 8 yrs is the **global** average (incl. fast Korean/Chinese builds); 17 is Olkiluoto 3 specifically | gold | ✔ **Fixed** — aired as *"around eight on average, and up to seventeen for Europe's Olkiluoto plant"* |
| EPRI/CATF $500–800B figure cited without its disclosed "via CATF, a pro-firm-power advocacy nonprofit" label, while the opposing side carried its own source's caveat every time | green | ✔ **Dropped** — the figure is not in the aired script |
| Asymmetric vividness — green conceded the cost record in adjectives ("wildly over budget") while gold stated the same facts with full figures | green | ✔ **Fixed** — green's aired concession names *Vogtle, Hinkley and Flamanville* explicitly, and the researcher segment carries the full $14B → $35B figures on screen |

### One framing caveat carried into the render
Verification item 7 flagged that the 10–62% finding covers the **category** of firm low-carbon resources
(nuclear, gas+CCS, bioenergy, enhanced geothermal) — **not nuclear specifically** — and that attributing
it to nuclear alone would misrepresent the paper. The aired script states this against its own side's
interest: *"honestly, that finding covers any firm clean source, not nuclear specifically."*

## Claims flagged on-screen as disputed / projection (not settled fact)
- **0.07 deaths/TWh for nuclear** — sits at one end of a genuinely disputed range (Chernobyl estimates
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
