# Research brief — What's Actually Inside a Data Center?

_The full research behind the episode, linked below the video. This is an **explainer**: it takes no
side. It says what is known, how big it is, and where the real arguments begin._

## The question
What is physically inside a data center, how does it work, and how much electricity and water does it
really use? The fights over data centers (bans, power bills, water) are loud; most people have never
been told what the building actually is.

## Why now
Northern Virginia, the largest market in North America, added more than a gigawatt in a year and is
down to 0.2% vacancy (CBRE, 8 Sep 2026). Oracle has reportedly sent a force-majeure notice on its
New Mexico Stargate campus (TechCrunch, 24 Sep 2026). Towns are voting on whether to allow new sites.

## What's inside
- **Racks of servers:** cabinets of screenless computers (processors, memory, storage), networked
  through switches at the top of each rack into larger switches.
- **Power:** the grid feeds an on-site substation; power is stepped down and distributed to the racks.
  Batteries bridge any outage until diesel generators start. Loudoun County alone has 4,000+ permitted
  generators (~2 MW each, tractor-trailer sized), usually run about an hour a week for testing.
- **Cooling:** every watt in becomes heat. Conventional sites move it with chilled water and reject it
  through cooling towers, which evaporate water. Dry coolers save water but use more power: that is the
  core trade-off. Dense AI racks bring liquid to plates on the chips themselves.

## How big
- US data center electricity: ~60 TWh a year through 2016, 76 TWh in 2018, **176 TWh (4.4%) in
  2023** — about what 16 million homes use. **6.7–12% projected for 2028** (LBNL).
- A typical rack drew **8.4 kW** in 2020 (Uptime); an NVIDIA GB200 NVL72 rack draws **~120 kW**,
  about the average draw of a hundred homes. The largest training runs exceed **100 MW**, growing
  ~2.2x a year (Epoch).
- Water, 2023: **~66 billion liters** consumed on site; **~800 billion liters** behind the electricity
  (LBNL). Google: ~8.1 billion gallons across data centers and offices in 2024, which Google compares
  to 54 Southwestern golf courses.
- Campus headline figures are usually **plans**: Meta says Richland Parish will deliver 5 GW of compute
  capacity.

## Settled (not in dispute)
- Use roughly tripled from the mid-2010s to 2023 and is still rising.
- AI racks are an order of magnitude denser than typical ones.
- Water figures swing on definitions: withdrawal vs consumption, on-site vs power plant, and place.
- A finished building employs few permanent workers (~50 full-time per typical building, JLARC); data
  centers can be a large share of local revenue (up to 31% in one Virginia locality).

## Claims that don't hold up as repeated
- "A bottle of water per prompt": the study said a bottle per 10–50 responses, for GPT-3, counting
  power-plant water.
- Per-prompt energy: Google reports a median of 0.24 Wh. Long or complex tasks cost more, and small per
  question is not small in total.
- "X gigawatts": usually capacity a site is being built toward, not what it draws.

## Where the argument starts
How much more gets built; who pays for the lines and plants it needs; whether towns get a say. The
channel's debates: ep17 (should your town be able to ban a data center?), ep11 (who pays for the grid
the AI boom needs?), ep03 (build fast, or pump the brakes?).

## What we could not establish
The IEA's headline figures (the report could not be opened); the origin of the "ten times a search"
claim; a sourced diagram of the grid-to-rack power chain; any official count of US data centers.
