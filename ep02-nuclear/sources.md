# Sources — Episode 2 · Nuclear

_UPGRADED 2026-07-30. The previous version was backfilled from the episode's on-screen citations and
carried a blanket "⚠️ verify each against its primary source" warning. That warning was unnecessary for
most of this list: the run's independent verification pass had already **fetched** these primaries
(`poc-episode/run-1/research/verification-report.md`). Confidence tiers now match that record._

**[F]** = fetched and verified directly during the verification pass · **[S]** = search-derived or
secondary, **still to be confirmed against a primary before publish** · **[A]** = advocacy-adjacent,
labeled wherever used.

## Lifecycle emissions (~12 g CO₂/kWh)
- [F] IPCC AR5 (2014) harmonized medians — nuclear **12**, onshore wind **11**, utility solar PV 48,
  gas CC 490, coal PC 820 g CO₂eq/kWh — https://en.wikipedia.org/wiki/Life-cycle_greenhouse_gas_emissions_of_energy_sources
- [F] Carbon Brief — "Solar, wind, nuclear have 'amazingly low' carbon footprints" (corroborates the
  ~12 g median) — https://www.carbonbrief.org/solar-wind-nuclear-amazingly-low-carbon-footprints/

## Safety — deaths per TWh (~0.07 nuclear, incl. Chernobyl & Fukushima)
- [F] Our World in Data — death rates from energy production per TWh: coal **24.6**, gas **2.8**,
  nuclear **0.03**, wind 0.04, solar 0.02 — https://ourworldindata.org/grapher/death-rates-from-energy-production-per-twh
- [F] Our World in Data — "What are the safest and cleanest sources of energy?" (Ritchie) —
  https://ourworldindata.org/safest-sources-of-energy
  _OWID's own provenance: fossil rates from Markandya & Wilkinson (2007), wind/solar from Sovacool et
  al. (2016), nuclear estimated from the Chernobyl + Fukushima tolls._

## Chernobyl / Fukushima death-toll ranges (the disputed spread said on air)
- [S] WHO Chernobyl Forum — up to ~4,000 eventual projected deaths
- [S][A] Greenpeace — broader modeling, tens of thousands (advocacy source, labeled on air as such by
  attribution)
- [S] UNSCEAR / Japanese government — Fukushima: 1 death linked to radiation, ~2,200 to the evacuation
  _These three remain [S]: the verification pass confirmed the ~0.07 aggregate and that the range is
  genuinely disputed, but did not re-fetch each toll estimate individually._

## Capacity factor (nuclear >92% vs wind ~34%, solar ~23%, 2024)
- [F] EIA Today in Energy — "The United States operates the world's largest nuclear power plant fleet"
  (Apr 24, 2025) — https://www.eia.gov/todayinenergy/detail.php?id=65104
- [F] DOE Office of Nuclear Energy — "What is Generation Capacity" (cites the EIA figures; nuclear >92%,
  gas ~59.9%, coal ~42.4%, wind ~34.3%, solar ~23.4%) — https://www.energy.gov/ne/articles/what-generation-capacity

## Western build cost overruns — Vogtle
- [F] Georgia Public Broadcasting (Apr 29, 2024) — AP calculated ~$31B construction/financing across the
  four owners; adding the $3.7B Westinghouse settlement "nears $35 billion," against a $14B original
  estimate — https://www.gpb.org/news/2024/04/29/second-new-nuclear-reactor-completed-in-georgia-the-carbon-free-power-comes-at-high
- [F] Vogtle plant overview (all-owner totals of $36–36.8B when full financing is included) —
  https://en.wikipedia.org/wiki/Vogtle_Electric_Generating_Plant
  _Verified guidance: say "$35–37 billion, up from an original $14 billion estimate" rather than
  over-specifying one number — the spread is explained by settlement inclusion, financing scope, and
  snapshot date._

## Western build cost overruns — Hinkley Point C, Flamanville
- [S] Hinkley Point C: £18B → toward £50B (EDF / UK government reporting)
- [S] Flamanville 3: €3.3B → ~€13.2B, 12 years late (EDF / Cour des comptes reporting)
  _Both remain [S] — the verification pass covered Vogtle directly; these two were carried from the
  research drafts._

## Serial builders cheaper/faster (Korea Barakah ~40% of first-unit cost; China ~6 yrs vs ~9)
- [S] IAEA PRIS build-time data + industry build-time analyses
  _Remains [S]. This is load-bearing for the episode's central "it's the builder, not the technology"
  turn, so it is the highest-value item to promote to [F] before any public release._

## Levelized cost — Lazard 2025
- [F] Lazard — 2025 *Levelized Cost of Energy+* press release (nuclear **$141–220/MWh**, onshore wind
  **$37–86**, utility solar $38–212/217, gas CC $48–107/109) —
  https://www.lazard.com/news-announcements/lazard-releases-2025-levelized-cost-of-energyplus-report-pr/
- [F] Lazard LCOE+ June 2025 full PDF (text extraction garbled on fetch; existence + date confirmed) —
  https://www.lazard.com/media/uounhon4/lazards-lcoeplus-june-2025.pdf

## Levelized cost — EIA, and EIA's own comparison caveat
- [F] EIA AEO2025 LCOE report — advanced nuclear $81.45/MWh, onshore wind $29.58, solar PV $31.86,
  solar+battery $53.44, gas CC $64.55 — https://www.eia.gov/outlooks/aeo/electricity_generation/pdf/AEO2025_LCOE_report.pdf
- [F] EIA — why dispatchable vs resource-constrained LCOE comparison "may not be meaningful," and why
  LACE is the right comparison instead — https://www.eia.gov/todayinenergy/detail.php?id=21492
- [F] EIA LCOE methodology (confirms the same caveat) — https://www.eia.gov/outlooks/aeo/electricity_generation/pdf/LCOE_methodology.pdf
  _This caveat is why the aired script says the LCOE figures "don't price in backup for when the wind
  stops" — see the fairness audit's blocking finding in `factcheck-log.md`._

## Firm capacity cuts system cost 10–62%
- [F] Sepulveda, Jenkins, de Sisternes & Lester — "The Role of Firm Low-Carbon Electricity Resources in
  Deep Decarbonization of Power Generation," *Joule*, Nov 2018 —
  https://www.sciencedirect.com/science/article/pii/S2542435118303866
- [F] MIT News coverage — https://news.mit.edu/2018/adding-power-choices-reduces-cost-risk-carbon-free-electricity-0918
  _⚠ VERIFIED FRAMING CAVEAT: the finding is about the **category** of firm low-carbon resources
  (nuclear, gas+CCS, bioenergy, enhanced geothermal), **not nuclear alone**. The aired script says so
  explicitly._

## AI data-center nuclear deals (up to 6.6 GW by 2035)
- [F] Meta's own release (Jan 9, 2026) — Vistra >2.1 GW, TerraPower two 345-MW Natrium units + rights to
  six more, Oklo up to 1.2 GW — https://about.fb.com/news/2026/01/meta-nuclear-energy-projects-power-american-ai-leadership/
- [F] Utility Dive — https://www.utilitydive.com/news/meta-nuclear-deal-oklo-vistra-terrapower-ai-data-centers/809215/
- [F] World Nuclear News — https://www.world-nuclear-news.org/articles/meta-announces-landmark-agreements-for-new-nuclear
- [S] Constellation / Microsoft Three Mile Island restart (2024); Amazon–Talen (Susquehanna)

## The SMR fix hasn't arrived (NuScale $4.2B → $9.3B; zero US SMRs operating)
- [F] IEEFA — NuScale cost estimates — https://ieefa.org/resources/eye-popping-new-cost-estimates-released-nuscale-small-modular-reactor
- [F] Utility Dive — NuScale/UAMPS termination (Nov 8, 2023) — https://www.utilitydive.com/news/nuscale-uamps-project-small-modular-reactor-ramanasmr-/705717/
- [F] SMR Intel — "State of SMRs 2026" (no US SMR in commercial operation; only OPG Darlington under
  construction in North America) — https://smrintel.com/state-of-smr-2026/
- [F] ABA — "Pressure to Succeed: Small Modular Nuclear" — https://www.americanbar.org/groups/environment_energy_resources/resources/trends/2026-mar-apr/pressure-to-succeed-small-modular-nuclear/

## TerraPower Natrium — construction phases (don't conflate them)
- [F] TerraPower — construction commences (Apr 23, 2026) — https://www.terrapower.com/TerraPower-Commences-Construction-on-Americas-First-Utility-Scale-Advanced-Nuclear-Power-Plant
- [F] DOE — NRC issues construction permit (Mar 4, 2026) — https://www.energy.gov/ne/articles/nrc-issues-construction-permit-terrapowers-natrium-advanced-reactor
- [F] ANS Nuclear Newswire — https://www.ans.org/news/2026-04-24/article-7975/terrapower-begins-construction-on-natrium-power-plant-in-kemmerer/
- [F] World Nuclear News — https://www.world-nuclear-news.org/articles/terrapower-starts-construction-of-first-us-utility-scale-advanced-nuclear-plant

## Waste — Onkalo (Finland)
- [F] Euronews — Onkalo set to begin operations — https://www.euronews.com/2026/04/09/in-finland-the-worlds-first-facility-to-bury-nuclear-waste-is-set-to-begin-operations
- [F] ANS Nuclear Newswire — "Finland's Onkalo repository licensing gets stuck again" — https://www.ans.org/news/article-6613/finlands-onkalo-repository-licensing-gets-stuck-again/
- [F] World Nuclear News — further delay in the licence review — https://www.world-nuclear-news.org/articles/further-delay-in-finnish-repository-licence-review
  _⚠ Verified status as of early July 2026: **not yet licensed, not yet operating**. The aired wording
  is "on the verge of," which matches. STUK's final safety assessment was due end of June 2026 —
  RE-CHECK before public release._

## Waste — US (Yucca Mountain ~$12B abandoned; ~70k tonnes at 76 sites)
- [S] US GAO / DOE reporting on Yucca Mountain and on-site dry-cask storage
  _Remains [S]._

## "Baseload" is a level of demand, not a type of plant
- [S] NYU Institute for Policy Integrity critique of the "baseload" framing; National Grid's former CEO
  on the same point
  _Remains [S]. Called out on air as contested vocabulary embedded in our own submitted question._

## Japan — Kashiwazaki-Kariwa Unit 6 (verified, but CUT from the aired episode)
- [F] World Nuclear News — first TEPCO reactor restarted — https://www.world-nuclear-news.org/articles/first-tepco-reactor-restarted
- [F] World Nuclear News — Japan's 7th Strategic Energy Plan, ~20% nuclear by FY2040 — https://www.world-nuclear-news.org/articles/japan-aims-for-increased-use-of-nuclear-in-latest-energy-plan
- [F] Renewable Energy Institute — why that target is seen as likely unreachable — https://www.renewable-ei.org/en/activities/column/REupdate/20250321.php
  _This is the one **CORRECTED** claim in the verification pass (restart Feb 9 2026 after an aborted
  Jan 21 attempt; commercial operation Mar 18 2026). The thread was cut for time, so it does not appear
  in the render._

---

## Still [S] before public release
The verified-primary coverage is strong on the numbers the episode leans hardest on (capacity factor,
Vogtle, Lazard, EIA, the 10–62% finding, SMRs, Onkalo). These remain to promote to [F]:
Hinkley/Flamanville figures · **Korea/China serial-build costs** (highest value — it carries the
episode's central turn) · Chernobyl/Fukushima individual toll estimates · Yucca Mountain figures ·
the NYU "baseload" critique.
