# ep24 — transcript · "What's actually inside a data center?"

_The verbatim spoken track, in running order. Generated from the spine by `node episodes/gen_transcript.mjs ep24-inside-a-data-center --write`; the headings are authored, the dialogue is the script that was synthesised. This is an explainer: no debate and no recorded close — the AI disclosure is on the closing card and in the description._

## Cold open
**Narrator:** You've heard the arguments about data centers. The power bills. The water. Towns voting on whether to let one in.
**Narrator:** But most people have never been inside one.
**Narrator:** So let's go in, see what's actually there, and check the numbers everybody's fighting about.

## What a data center is
**Erin:** Okay, Walt. Plain English. What is a data center?
**Walt:** A building full of computers that never turn off.
**Walt:** When you stream a show, send an email, or ask an AI something, the work happens on a machine in a building like this.
**Erin:** How many are there?
**Walt:** Honestly? Nobody keeps an official count.
**Walt:** But we know where the biggest cluster is. Northern Virginia.
**Walt:** About four and a half gigawatts of capacity, and almost none of it sitting empty.
**Erin:** Why there?
**Walt:** Right now, the people who track that market say one word decides it. Power.
**Walt:** Hold on to that word. It explains almost everything inside.

## Walk in
**Walt:** Walk in, and you'd see rows of tall metal cabinets. We call them racks.
**Walt:** Each one is stacked with servers. Computers with no screen and no keyboard. Just chips, memory, and storage.
**Erin:** And they're all wired together?
**Walt:** Each rack plugs into a switch on top. Those switches plug into bigger ones.
**Walt:** So any machine in the building can reach any other in a couple of hops.
**Erin:** So it's a giant, very loud library of computers.
**Walt:** A very loud, very hot one. We'll get to hot.

## Power in, and the backup plan
**Walt:** Power comes in from the grid, through the site's own substation.
**Walt:** It gets stepped down, and sent out to every rack.
**Erin:** What if the power goes out?
**Walt:** Batteries take over instantly. Then diesel generators start up behind them.
**Walt:** In Loudoun County, Virginia, more than four thousand backup generators are permitted. Each one about the size of a tractor-trailer.
**Erin:** Four thousand? Are those running all the time?
**Walt:** Mostly not. The county says most sites run them about an hour a week, for testing.

## How much electricity
**Erin:** So how much electricity are we talking about?
**Walt:** For years, America's data centers used roughly the same amount. About sixty terawatt-hours a year.
**Walt:** Then it took off. By twenty twenty-three, about a hundred and seventy-six.
**Walt:** That's around four and a half percent of all the electricity the country uses.
**Erin:** Give me something I can picture.
**Walt:** About what sixteen million American homes use in a year.
**Erin:** And where's it going?
**Walt:** The national lab behind those numbers says by twenty twenty-eight, somewhere between seven and twelve percent.
**Walt:** A range, because nobody knows how much of what's announced will actually get built.

## What AI changed
**Erin:** Where does AI come into this?
**Walt:** In what goes in the racks. The new ones are packed with chips built to do huge amounts of math at once.
**Walt:** A few years ago, a typical rack drew about eight kilowatts.
**Walt:** One of Nvidia's current AI racks draws about a hundred and twenty.
**Erin:** In the same size cabinet?
**Walt:** Same footprint. One of those racks draws about as much as a hundred average homes.
**Walt:** And the biggest AI training runs now use more than a hundred megawatts at once. That's been more than doubling every year.
**Erin:** And all of that turns into what?
**Walt:** Heat. Every bit of it.

## Getting rid of the heat
**Walt:** Most data centers cool the way a big office building does.
**Walt:** Chilled water carries heat out of the server halls. Towers outside dump it into the air, by evaporating some of that water.
**Erin:** So that's where the water goes.
**Walt:** That's where the building's own water goes. Some sites skip it, and use dry coolers. Like a giant car radiator.
**Walt:** But those burn more electricity. Save water, spend power. Save power, spend water.
**Erin:** And the AI racks?
**Walt:** At that density, blowing air isn't enough. Liquid runs through plates sitting right on the chips.

## How much water, really
**Erin:** So how much water, really?
**Walt:** In twenty twenty-three, US data centers used about seventeen billion gallons on site.
**Walt:** But here's the part most coverage leaves out. Power plants use water too.
**Walt:** The water behind data centers' electricity was more than ten times that.
**Erin:** So the power plant is the bigger water user.
**Walt:** Nationally, yes. But the on-site water lands on whatever town hosts the building.
**Walt:** Google says its data centers and offices used about eight billion gallons in twenty twenty-four.
**Walt:** Its own comparison is fifty-four golf courses in the Southwest.
**Erin:** So whether that's a lot depends on where it is.
**Walt:** And which river it's coming out of.

## Numbers you've heard
**Erin:** Okay. Some numbers I've definitely heard. A bottle of water for every AI prompt.
**Walt:** The study behind that said a bottle for every ten to fifty responses.
**Walt:** For an older model. And it counted the power plant's water too.
**Erin:** What about the energy for one AI question?
**Walt:** Google says its typical text prompt uses about a quarter of a watt-hour.
**Walt:** They compare that to nine seconds of TV. That's Google's own number, and long, complicated requests use more.
**Erin:** And the five-gigawatt headlines?
**Walt:** Usually a plan. Meta says its Louisiana site will deliver five gigawatts of capacity. That's the goal, not what it draws today.
**Walt:** So each question is small. The total is big, and it's growing.

## Where the argument starts
**Erin:** So what's actually settled?
**Walt:** That they use a lot of power, that it roughly tripled in seven years, and that it's still climbing.
**Erin:** And what are people really arguing about?
**Walt:** How much more gets built. Who pays for the power lines and plants it needs. And whether a town gets a say.
**Walt:** For the town, it's a big building, a lot of power, some water, and not many permanent jobs. About fifty full-time workers in a typical building.
**Walt:** And for some counties, a big share of the budget.
**Erin:** We've argued those out on this channel.
**Erin:** Whether your town should be able to ban one. Who pays for the grid. And whether to build fast, or pump the brakes.
**Walt:** Now at least you know what's inside.
