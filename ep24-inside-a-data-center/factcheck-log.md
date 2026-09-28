# Fact-check log — What's Actually Inside a Data Center?

_Independent verification pass, run 2026-09-27 (web-sourced, not trusting the draft). Each claim gets a
verdict: **CONFIRMED**, **CORRECTED**, **UNRESOLVED** or **APPROXIMATE**. This episode is an
**explainer**, the show's first: it takes no side, so every claim below is a statement of the record,
and the few places where the record itself disagrees are said so on air._

- **CONFIRMED** — the source says what the episode says.
- **CORRECTED** — the source says otherwise; the script was changed, and the change is listed under
  "Corrections applied to source" below.
- **UNRESOLVED** — could not be established from a source worth trusting, so it is not used on air.
- **APPROXIMATE** — checked, roughly right, and **deliberately not cited on air**.

**Verification status:** adversarial-pass
_(A 41-agent research fan-out found and ranked the claims; only 12 were verified there, so every figure
the script uses was then re-opened by hand in its primary document — PDFs extracted to text and
searched, web pages read in full — on 2026-09-27.)_

---

## 1. "For about a decade, America's data centers used a steady amount of electricity, around sixty terawatt-hours a year."
**CONFIRMED.** Lawrence Berkeley National Laboratory's 2024 report: consumption held "at about 60 TWh"
through 2016, "continuing a minimal growth trend observed since about 2010". By 2018 it was about
76 TWh (1.9% of US electricity).
- https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf

## 2. "By 2023 they used about a hundred and seventy-six terawatt-hours, about four and a half percent of all the electricity the country uses."
**CONFIRMED.** Same report: "reaching 176 TWh by 2023, representing 4.4% of total U.S. electricity
consumption." On air rounded to "about four and a half percent"; the screen carries 4.4%.
- https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf

## 3. "That's roughly what sixteen million American homes use in a year."
**CONFIRMED (derived).** 176 TWh ÷ the EIA's 10,791 kWh average annual use per residential customer
(2022) = 16.3 million. Both inputs are primary. Labelled on screen as a comparison, not a count of
homes affected.
- https://www.eia.gov/tools/faqs/faq.php?id=97&t=3

## 4. "The national lab projects 2028 at somewhere between about seven and twelve percent."
**CONFIRMED.** The LBNL report gives "roughly 325 and 580 TWh in 2028 … 6.7% to 12.0% of total U.S.
electricity consumption." Presented as a range, never its top end.
- https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf

## 5. "Meta says its Louisiana site will deliver five gigawatts of compute capacity. That's the goal, not what it draws today."
**CONFIRMED.** Meta's Richland Parish page: "delivering 5 gigawatts of compute capacity to house
Hyperion"; elsewhere on the same page, "over two gigawatts of compute capacity" to train models. The
episode's point is that this is a stated build-out, not a metered draw.
- https://datacenters.atmeta.com/richland-parish-data-center/

## 6. "Northern Virginia holds the largest data center market in North America: about four and a half gigawatts of capacity, and almost none of it sitting empty."
**CONFIRMED.** CBRE's North American Data Center Trends report (press release, 8 Sep 2026): Northern
Virginia "remained North America's largest data center market in the first half of 2026 … to
4,496.5 megawatts", vacancy 0.2%. CBRE's count covers primary markets only, so it is not total US
capacity; the episode does not present it as one.
- https://www.cbre.com/press-releases/north-american-data-center-demand-continues-to-outpace-supply-despite-record-construction

## 7. "Power is now the deciding factor there, according to the firm that tracks it."
**CONFIRMED.** CBRE's Stu Dyer, same release: "Power is the deciding factor in Northern Virginia right now."
- https://www.cbre.com/press-releases/north-american-data-center-demand-continues-to-outpace-supply-despite-record-construction

## 8. "Nobody keeps an official count of how many data centers America has."
**APPROXIMATE.** No federal inventory was found in the research, and private trackers' estimates range
from about 2,100 to over 7,000 depending on definition. The range is not cited on air; only the absence
of an official count is.
- https://www.aterio.io/insights/us-data-centers

## 9. "In Loudoun County alone, more than four thousand backup generators are permitted, each about the size of a tractor-trailer."
**CONFIRMED.** Loudoun County: "more than 4,000 backup generators currently permitted to serve more than
200 data centers … each generator is typically the size of a tractor trailer, generating approximately
2 MW of power."
- https://www.loudoun.gov/6404/Energy-Issues-Considerations

## 10. "Most of the time they're only run for testing, about an hour a week."
**CONFIRMED.** Same page: "In most cases, Loudoun's data centers only run their generators once per
week, for one hour, to complete necessary testing."
- https://www.loudoun.gov/6404/Energy-Issues-Considerations

## 11. "A few years ago, a typical rack drew about eight kilowatts."
**CONFIRMED.** Uptime Institute: "the mean average density in our 2020 survey sample was 8.4 kW/rack"
(outliers above 30 kW excluded). Said as "a few years ago", because it is a 2020 figure.
- https://journal.uptimeinstitute.com/rack-density-is-rising/

## 12. "One of Nvidia's current AI racks draws about a hundred and twenty."
**CONFIRMED.** NVIDIA DGX GB200 user guide: "The rack power consumption is approximately 120kW."
- https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html

## 13. "One of those racks draws about as much power as a hundred average homes."
**CONFIRMED (derived).** 10,791 kWh ÷ 8,760 hours = 1.23 kW average household draw; 120 ÷ 1.23 ≈ 97.
- https://www.eia.gov/tools/faqs/faq.php?id=97&t=3

## 14. "The biggest AI training runs now use more than a hundred megawatts at once, a figure that has been more than doubling every year."
**CONFIRMED.** Epoch AI: "Power demands for frontier training runs have historically grown at a rate
of 2.2x per year, with the largest runs now exceeding 100 MW." Epoch is a research non-profit; this is
its estimate, and the screen attributes it.
- https://epoch.ai/blog/power-demands-of-frontier-ai-training

## 15. "US data centers directly consumed about sixty-six billion liters of water in 2023, about seventeen billion gallons."
**CONFIRMED.** LBNL: "hyperscale and colocation account for 84% of the 66-billion-liter total" (2023).
66 billion liters = 17.4 billion US gallons.
- https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf

## 16. "The water behind data centers' electricity is nearly eight hundred billion liters, more than ten times the water used on site."
**CONFIRMED.** LBNL: "indirect water footprint of U.S. data centers is nearly 800 billion liters,
attributed to water consumed indirectly through electricity use" (2023 grid mix at data center
locations). 800 ÷ 66 ≈ 12.
- https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf

## 17. "Google reports its data centers and offices consumed about eight billion gallons of water in 2024, which it compares to irrigating fifty-four golf courses in the Southwest."
**CORRECTED.** The research fan-out carried 7.79 billion gallons. Google's 2025 Environmental Report
says "approximately 8.1 billion gallons (31 billion liters …) of water across our data centers
(excluding those operated by third parties) and offices", and supplies the golf-course comparator
itself ("54 golf courses annually, on average, in the southwestern United States"). The script uses
Google's own figure and credits the comparator to Google.
- https://www.gstatic.com/gumdrop/sustainability/google-2025-environmental-report.pdf

## 18. "'A bottle of water per AI prompt.' The study behind it estimated a bottle for every ten to fifty responses, for an older model, and it counted the power plant's water too."
**CONFIRMED.** Ren et al. (UC Riverside): "GPT-3 needs to 'drink' (i.e., consume) a 500ml bottle of
water for roughly 10 – 50 medium-length responses, depending on when and where it is deployed", within
a methodology that counts on-site (scope-1) and power-generation (scope-2) water.
- https://arxiv.org/pdf/2304.03271

## 19. "Google now reports its median text prompt uses about a quarter of a watt-hour, which it compares to nine seconds of television."
**CONFIRMED.** Google's paper: "the median Gemini Apps text prompt uses less energy than watching nine
seconds of television (0.24 Wh)". A company self-disclosure and a median; the script says both.
- https://arxiv.org/pdf/2508.15734

## 20. "A typical data center building employs about fifty full-time workers, and data centers can supply a large share of a county's revenue."
**CONFIRMED.** JLARC (Virginia's legislative auditor), Report 598: "a typical 250,000-square-foot data
center may have approximately 50 full-time" workers; data center revenue ranges "from less than
1 percent to 31 percent of total local revenue" across Virginia localities. The script says "per
building", never per campus.
- https://jlarc.virginia.gov/pdfs/reports/Rpt598-2.pdf

## 21. "Google's data centers run at a PUE of 1.09, against an industry average around 1.56."
**APPROXIMATE.** Google's report states both ("1.09, compared with the industry average of 1.56"), but
the industry figure is Google's citation of a survey the research could not open. Kept off air; the
episode explains the trade-off between water and power without a PUE figure.
- https://www.gstatic.com/gumdrop/sustainability/google-2025-environmental-report.pdf

## 22. "The IEA says data centers are nearly half of US electricity demand growth to 2030."
**UNRESOLVED.** The IEA report returned 403 to every fetch; no primary quote was obtained. Not used.

## 23. "'Ten times the energy of a Google search' began as a 2023 cost guess."
**UNRESOLVED.** The origin story rests on blog tracing, not a primary document. Not used; the episode
states only what Google now reports for its own median prompt.

## 24. The power path from the grid into the building (substation, transformers, switchgear, batteries, racks).
**APPROXIMATE.** Standard electrical engineering and uncontested, but no quotable primary source was
opened. Narrated generically, with no numbers.

## 25. Oracle force-majeure notice on its New Mexico Stargate campus (description peg only).
**CONFIRMED (as reported).** TechCrunch, 24 Sep 2026: "Oracle sends force majeure notice on its New
Mexico Stargate data center." The primary notice was not located, so the description says "reported".
Not used on air.
- https://techcrunch.com/2026/09/24/oracle-sends-force-majeure-notice-on-its-new-mexico-stargate-data-center/

---

## Corrections applied to source
- Google 2024 water consumption: the research fan-out's 7.79 billion gallons → **8.1 billion gallons**,
  as stated in Google's own 2025 Environmental Report (claim 17).
- The fan-out's "1,500x smaller" comparison between Ren et al. and a company per-query water figure was
  arithmetic against the wrong baseline and compared different scopes; it is not used.
