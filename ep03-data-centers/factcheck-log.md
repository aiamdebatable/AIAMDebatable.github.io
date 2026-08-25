# Fact-check log — Episode 3 · The AI Data-Center Boom

_Independent verification pass, run 2026-07-16 (web-sourced, not trusting the draft). Each claim gets
a verdict: **CONFIRMED**, **CORRECTED**, or **UNRESOLVED**._

**Verification status: web-verified.** Every numeric/name claim below was checked against a current
source. One material correction was found (see #8).

---

## 1. Global data-center electricity: ~415 TWh (2024, ~1.5%) → ~945 TWh by 2030
**CONFIRMED.** IEA *Energy and AI* (2025): ~415 TWh in 2024 (~1.5% of global), projected to ~945 TWh
by 2030, driven mainly by AI. Widely corroborated.
- https://www.iea.org/reports/energy-and-ai/executive-summary
- https://www.datacenterdynamics.com/en/news/iea-data-center-energy-consumption-set-to-double-by-2030-to-945twh/

## 2. US data centers: ~4% (2023) → up to 12% by 2028
**CONFIRMED.** LBNL *2024 US Data Center Energy Usage Report* (Dec 2024): 4.4% of US electricity in
2023 (176 TWh), projected 6.7–12% by 2028. Episode's "~4% → up to 12%" is accurate.
- https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report
- https://www.rtoinsider.com/94520-berkeley-lab-data-centers-us-power-2028/

## 3. Ireland: 21% of national electricity (2023), more than urban homes
**CONFIRMED (precise wording: "metered" electricity).** CSO Ireland: data centres used 21% of total
*metered* electricity in 2023, vs. urban households 18% and rural 10% — so more than all urban homes.
Minor: on-screen "entire country's electricity" should ideally read "metered electricity."
- https://www.cso.ie/en/releasesandpublications/ep/p-dcmec/datacentresmeteredelectricityconsumption2023/keyfindings/

## 4. Google water: >6 billion gallons (2023), up ~17%
**CONFIRMED (figure); YoY % approximate.** Google 2024 report: ~6.4B gal total operations in 2023,
~6.1B in data centers. The "+17% in a single year" is in the right range but sources frame the trend
over multiple years (4.3B in 2021 → 6.1B by 2024); treat "~17%" as approximate, tied to 2022→2023.
- https://datacentremagazine.com/news/google-environmental-report-2025-the-data-centre-impact

## 5. Compute +550% while energy ~flat (+6%), 2010–2018
**CONFIRMED.** Masanet, Shehabi, Lei, Smith, Koomey, "Recalibrating global data center energy-use
estimates," *Science* 367 (2020): compute instances +550%, energy use +6% over 2010–2018. Exact.
- https://www.science.org/doi/10.1126/science.aba3758

## 6. Amazon / Microsoft / Google / Meta = the four largest corporate clean-energy buyers
**CONFIRMED.** BloombergNEF: these four account for ~half of all corporate clean-power PPA volumes
globally; consistently the top buyers. (Recent data: Meta & Amazon lead, top-4 ≈ 49%.)
- https://about.bnef.com/insights/clean-energy/corporate-clean-energy-buying-fell-in-2025-after-nearly-a-decade-of-growth/

## 7. Microsoft–Three Mile Island: 20-yr PPA, entire output to one company's data centers
**CONFIRMED (one framing nuance).** Constellation is restarting TMI Unit 1 (renamed Crane Clean Energy
Center) under a 20-year PPA with Microsoft — its largest ever; Microsoft is the sole offtaker, to match
its PJM data-center load with carbon-free energy. Target online 2027–2028.
- Nuance for the debate line "taken off the public grid, not added to it": the plant *does* add
  generation to the PJM grid; what's exclusive is Microsoft's *claim* on the clean attributes. Fair as
  a rhetorical point, but it is an accounting/attribution claim, not physical removal from the grid.
- https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html
- https://www.utilitydive.com/news/constellation-three-mile-island-nuclear-power-plant-microsoft-data-center-ppa/727652/

## 8. "A single AI query uses ~10× a web search" — CORRECTED ❌
**CORRECTED — outdated/overstated.** The ~10× (≈2.9–3 Wh) figure comes from a 2023 estimate (Alex de
Vries) and has been walked back. Epoch AI's 2025 analysis puts a typical GPT-4o query at **~0.3 Wh —
roughly the same as a Google search, not 10×.** The estimate is genuinely unsettled and trending down.
- The episode's VO states "roughly ten times" as fact — that is no longer defensible.
- **Fix applied in source** (captions + on-screen panel) 2026-07-16: reframed to name the dispute and
  the falling range, and to attribute demand growth mainly to *training + scale of buildout* rather
  than a fixed per-query multiple.
- ✅ **RESOLVED IN THE RENDER 2026-07-30.** The re-render (all voices local, packages NARR + CAST) was
  built from the corrected source, so the fix has now landed: the "ten times" line is gone from the
  captions entirely, and the on-screen panel reads *"Per-query energy estimates are disputed and
  falling — the buildout is the real driver."* Between 2026-07-16 and 2026-07-30 the fix existed in
  source but not in the shipped mp4 — that gap is closed. An older pre-fix cut of this episode did
  still carry the retired line; it was never published, and it has since been deleted.
- https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use
- https://www.zmescience.com/science/news-science/how-much-energy-chatgpt-query-uses/

---

## Open questions this episode could not settle
- Whether the private buildout is, on net, an accelerant or a drag on decarbonization (contested; by
  design handed to the viewer).
- Whether efficiency ever bends the total-demand curve, or Jevons always wins.
- Every figure is a snapshot of a fast-moving target; a 2026 projection may look off within ~18 months.

## Method note
This pass was run manually (targeted web verification of each numeric/name claim). For production
episodes the intended gate is a `storm-research` / `deep-research` adversarial pass, whose report
becomes this file.

## Human sign-off
**Final cut reviewed by Lucas on 2026-08-10** — he watched the render end to end and confirmed the
content is complete and the audio matches the picture. The close is his real recorded voice (6 of 6
takes, 54.47s of combined audio), and the sync check measured the cut at **+0.08s, PASS**.

**Research reviewed by Lucas, confirmed 2026-08-10.** He has read this log and the brief and checked
the sources behind the claims above. ep03 has been iterated on for weeks alongside ep04/05/06, and he
states all four have been scrutinised in depth.

⚠ **The gate itself is not the evidence for that.** ep03's `validated` gate reads done, but the audit
holds no row for it — it was set by the `migrate-episodes` import on 2026-08-09, before per-gate
auditing existed. The line above rests on his direct confirmation, not on the board. Noted because
this file's whole value is that its claims say where they come from.

Later human gates remain open on their own terms: `reviewed` and `published` are each still ✋ Lucas.
