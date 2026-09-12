# Transcript — "How do you fix an algorithm that decides about you?"

_Verbatim spoken track, in broadcast order. Speakers: **Lucas** (host), **Nia** (research
lead), **Ryan** (the ringmaster), **Andre** (Team Green · AUTOMATE THE EDGES, REVIEW THE MIDDLE),
**Mara** (Team Gold · THE CONTEST IS THE TRAINING DATA), **Kate** (the judge), and the **Narrator**
who reads the cold open._

## Cold open
**Narrator:** Ask the internet how to fix an algorithm that decides about you, and you'll get keep a human in the loop on one side and let the machine learn on the other.
**Narrator:** Ask what's actually running, and since January the United States government has been testing one answer on Medicare, in six states. A machine that may only say yes. A person on every no. And a vendor paid a share of what gets denied.
**Narrator:** Last week, the first thousand pages of what happened inside it came out. So today two teams build the thing that can be reversed. And then take each other's design apart.

## The clash
**Ryan:** This is AI Am Debatable. Last time, both sides agreed a machine's decision about you has to be reversible. Since January, Medicare has been running one design for that, in six states. Last week we got the records.
**Ryan:** Andre builds automate the edges, and review the middle.
**Ryan:** Mara builds the contest is the training data.
**Ryan:** Before either of them draws a line, here's the one that's already running. Nia.

## The research · The design that's already running: Medicare's WISeR model
**Nia:** Start with the design that's actually running, because both teams are going to argue against it. Medicare's Wiser model. Six states since the first of January. Arizona, New Jersey, Ohio, Oklahoma, Texas, Washington.
**Ryan:** Running how?
**Nia:** A technology vendor screens requests for certain treatments before Medicare pays. Skin substitutes. Nerve stimulators. Knee scopes for arthritis. And the rules are written into the contract. The technology may only approve. Every denial has to be reviewed by a human clinician.
**Ryan:** So the machine says yes, and a person says no.
**Nia:** That's the design. And the vendor is paid a share of the savings from the care it denies. Ten to twenty percent. If the patient's doctor appeals and wins, the vendor's fee on that case is clawed back.
**Ryan:** Paid per no, and fined when the no is overturned.
**Nia:** Now the records. Last week a civil liberties group released more than four hundred pages of the agency's own documents. We read them. First finding. Before the launch, Medicare's own actuaries wrote that vendors will have an incentive to deny as many claims as possible.
**Ryan:** The agency's own actuaries.
**Nia:** Their memo, June last year. Second. The quality penalty. The worst possible quality score costs a vendor a tenth of its fee. And in the launch period, the score measured whether the vendor filed its data on time. Not whether the decisions were right.
**Ryan:** So for the first months, accuracy was worth nothing.
**Nia:** Zero weight. Third. One vendor, in Ohio, wrote to the agency that it would auto-approve every request for its first couple of months. The launch date wouldn't move, and auto-approving was the only way to avoid a backlog.
**Ryan:** The band was set to one hundred percent yes. By a calendar.
**Nia:** By a calendar. And the numbers. In Arizona and Washington, the two vendors had decided about twenty thousand requests. Seventy-one percent approved. Twenty-nine denied. But one of them, Virtix, in Washington, denied fifty-three percent of what it saw. And in the other three states, at the end of March, the oldest request had been waiting eighty-three days.
**Ryan:** So that's the design running. Yes from the machine, no from a person, a fee on the no, a penalty capped at a tenth. Hold that.

## The ringmaster
**Ryan:** Andre. You first. That's your design, running. Defend it.

## The debate · Team Green · AUTOMATE THE EDGES, REVIEW THE MIDDLE — opens
**Andre:** I want to start with what the desk just showed you, because it's my design. Running. On Medicare. Six states. A machine handles the easy yes, a person handles the no, and the person's corrections are how the system gets better. That's not a whiteboard. That's a contract.
**Andre:** And look at what the contract does when it goes wrong. A vendor denies too much, it's in a status report with its name on it. An appeal wins, the vendor's fee on that case is gone. That's a loop with money in it. My opponent's loop has a complaint form.

## The ringmaster
**Ryan:** Hold it there. Both of you keep saying the loop. Nia, how often does the loop actually fire?

## The research · The loop: reversed three in four times, pulled one in a hundred
**Nia:** Now the settled part, and it's the number both designs live or die on. When a denial gets appealed, how often does it get reversed, and how often does anyone appeal.
**Ryan:** Give me the reversal first.
**Nia:** Medicare Advantage, the Inspector General's audit. Plans overturned three in four of their own denials when someone appealed. More than two hundred thousand reversals a year. And that's the plan reviewing itself, not an outside judge.
**Ryan:** Three in four. So the denials are mostly wrong?
**Nia:** Careful. Three in four of the ones appealed. And here's the other half. Only about one denial in a hundred was appealed. Ninety-nine in a hundred were never looked at again.
**Ryan:** One in a hundred.
**Nia:** And it's held. This June, a new audit of nursing-home denials from twenty twenty-four. Ninety-five percent of appeals overturned. Eighteen percent appealed. Better than one. Still four in five never looked at.
**Ryan:** What about outside Medicare?
**Nia:** Same shape. The health-insurance marketplace, twenty twenty-four. Insurers denied nineteen percent of in-network claims. Under one percent of those denials were appealed. Of the ones that were, the insurer's own staff reversed about a third.
**Ryan:** And the independent reviewer? The outside one?
**Nia:** Can't be counted. The federal data hides any number under ten, so the group that analysed it says the outside overturn rate can't be computed. The number gold's design turns on does not exist in public.
**Ryan:** So who does appeal?
**Nia:** Not a random sample of the people decided against. The Government Accountability Office found disability claimants with a lawyer were approved nearly three times as often as those without, after adjusting for the cases. And at Medicare's judge level, in one quarter, five appellants filed half of all appeals. Four equipment suppliers and one state agency.
**Ryan:** So the correction signal works when it's pulled. And it's pulled by lawyers and billing departments, about one time in a hundred.

## The ringmaster
**Ryan:** Andre. Keep going.

## The debate · Team Green — the denominator
**Andre:** Now the denominator, because it's the whole argument. One denial in a hundred gets appealed. Ninety-nine don't. Under my opponent's design, the system learns from the one. Under mine, the deployer's reviewer can look at any of the ninety-nine. The deployer is the only party that sees every case.
**Andre:** And who's the one? The desk told you. The claimant with a lawyer, three times as often. Five equipment suppliers filing half of all appeals. Train a model on appeals and you've trained it on the people who can afford to fight. Train it on the reviewer, and you can sample everyone.

## The ringmaster
**Ryan:** Hold that thought, Mara. Nia, before she answers.

## The research · The reviewer: what every instrument requires, and what the record shows
**Ryan:** A human on every denial is gold's design, and Wiser has one. So is Wiser gold's design?
**Nia:** Read the verb. The participant guide says the vendor must coordinate with its clinician to review the request and confirm that it does not meet coverage criteria. Confirm. The clinician is sent the cases the machine wouldn't approve, and asked to confirm.
**Ryan:** So the clinician only ever sees the machine's picks.
**Nia:** By design. And nothing in the rules says whether the clinician sees the machine's reasoning first. Nothing says they don't. The documents are silent. What they do say is that the clinician works for the vendor that's paid per denial.
**Ryan:** Is that unusual?
**Nia:** It's the law's shape everywhere now. California, since last year. An AI tool shall not deny, delay, or modify care on medical necessity. Only a licensed professional may. The bill introduced in Congress two weeks ago says the same, and adds that the professional may not treat the AI's output as presumptively valid.
**Ryan:** So a machine may approve. Only a human may deny.
**Nia:** Every instrument we found. And none of them says what the human is shown, or how long they have. Which matters, because of what the record shows humans doing. ProPublica reported that Cigna's medical directors denied three hundred thousand requests in two months, about a second each, without opening a file. Reported. Plaintiffs allege it. No court has found it.
**Ryan:** A human signed every one.
**Nia:** Every one. And in the Wiser records, the one error anyone caught. In February, an Arizona provider complained about denials. The Medicare contractor's note says the vendor's clinical lead told them the software may have been applying the coverage criteria wrong. Six days later the vendor wrote to the agency. Not a software issue. The platform does not autonomously issue denials. It was one physician reviewer.
**Ryan:** First the machine, then the human.
**Nia:** Two accounts, in the record, six days apart. We won't tell you which is true. Who caught it, we can. Not the audit. Not the quality score. A provider who complained. And the contractor wrote that there was no clear path for a provider when the error is the vendor's rather than a real medical disagreement.

## The ringmaster
**Ryan:** Mara. Your response.

## The debate · Team Gold · THE CONTEST IS THE TRAINING DATA — responds
**Mara:** I'll take his contract first, because the desk read it and I did too. A human on every denial. The verb is confirm. The clinician is handed the machine's picks and asked to agree. That's not a review. That's a countersignature.
**Mara:** And he says the loop has money in it. It does. The fee is on the denial. Medicare's own actuaries wrote it before launch. An incentive to deny as many claims as possible. The clawback is his safeguard, and it fires on the one in a hundred who appeal. He just told you that number was on his side.
**Mara:** Then the one error anyone caught. First the software, then one physician. Whichever account you believe, look at who caught it. Not the reviewer. Not the audit. Not the quality score, which was measuring whether the paperwork arrived on time. A provider, complaining. The contest.
**Mara:** So his design, running, was corrected by mine. The affected side pulled the signal. His reviewer was the thing that needed correcting.

## The reframe · the ringmaster's
**Ryan:** Let's stop the clock. I came into this expecting to referee the algorithm versus the human. That's not the argument on this desk.
**Ryan:** Every instrument we read lets a machine say yes on its own, and puts a person only on the no. California. The bill in Congress. Medicare's own model. So the biggest dial in the room, how much gets approved with nobody looking, is being set with no review at all. And neither design argued about it.
**Ryan:** The thing that stopped me was the signal. It reverses three in four of what it touches. Ninety-five percent, for nursing-home denials. And it's pulled about once in a hundred, by lawyers and billing departments. Weak isn't the word. Unasked is.
**Ryan:** And nothing on this desk routes on a confidence score. Real systems send a case to a person when the data runs out, when a random audit picks it, or when the launch date can't move. And nothing we found feeds any correction back into its next decision.
**Ryan:** So the fight isn't machine or human. It's two dials. Who owns the correction. And who has to pull it.

## The ringmaster
**Ryan:** One more piece of settled ground before they go again. Nia, the numbers everyone shouts.

## The research · The numbers people shout, and what they actually are
**Nia:** Last piece of settled ground. The numbers you'll see in every thread about this, and what they actually are.
**Ryan:** Start with the big one. The lawsuit. Point two percent appealed, ninety percent of appeals won.
**Nia:** We read the complaint. The point two percent is footnoted to a report about marketplace plans in twenty twenty-one. A different market, imported as an analogy. The ninety percent is pled on information and belief. No citation. Neither is a measurement of that company's algorithm.
**Ryan:** So the famous numbers aren't numbers.
**Nia:** The measured ones are the Inspector General's. One in a hundred appealed, three in four reversed. Eighteen and ninety-five in twenty twenty-four. Use those. Next. Two vendors denied twenty thousand requests. That's from the summary of the records, and it's the headline everywhere.
**Ryan:** And in the pages?
**Nia:** About twenty thousand decisions. Just under six thousand of them denials. The page says decisions. The summary said denials. We use the page.
**Ryan:** Michigan. The unemployment system that was ninety-three percent wrong.
**Nia:** Reported, and widely. We couldn't find the primary. The state audit we read says fraud determinations were outside its scope. What the audit does say is that the system had no rule sending any case to a person. Only random audits, required by federal law. Sixty-three percent of the people audited hadn't documented their job search.
**Ryan:** And the auto-approve rate. How much do real systems automate?
**Nia:** One published number from a deployer. Lemonade, the insurer. About fifty-five percent of claims decided and paid with no human at all, in its own annual report. Not the ninety-six percent it also publishes. That's intake, not decisions. And no bank publishes what share of loans its engine approves, refers, or declines. We looked.
**Ryan:** So the famous lawsuit numbers are a footnote and an allegation, the twenty thousand is decisions not denials, and nobody publishes a threshold.

## The ringmaster
**Ryan:** Andre. The rest of your case.

## The debate · Team Green — the rest of the case
**Andre:** Now the numbers everyone shouts, head on. Point two percent, ninety percent: a footnote and an allegation. Twenty thousand denials: twenty thousand decisions. The famous failures of my design are famous because nobody read the page.
**Andre:** What did the page say? A machine that only says yes. A human on every no. Fifty-five percent of claims at one insurer decided with no human at all, and its own filings report no catastrophe. Real automation isn't a scandal. It's a Tuesday.
**Andre:** Here's the weakest thing on my side, and I'll say it myself. The band narrowing. The reviewer teaches the model, the middle gets smaller, the humans are spent where they still matter. The desk looked for a deployed system anywhere that has been shown to do that. Nothing. Every automation rate on the record is a snapshot. My mechanism is a design, not a measurement.
**Andre:** I'll take that. Because the alternative's mechanism isn't measured either, and it starts from a worse place. Her signal is the same one in a hundred. Slower, and with a lawyer attached.
**Andre:** And her independent reviewer, blind to the score. Blind to what? If the reviewer can't see the reasoning, what exactly are they reviewing? A reversal without a reason is a coin flip with a human face.
**Andre:** She'll say the reviewer at Cigna signed sixty thousand a month. She's right. That's a reviewer with no band. Everything went to a person, and the person became a rubber stamp. That's the argument for my middle band, not against it. Send the human only what the machine can't settle, and the human has time to actually look.
**Andre:** Automate the edges. Review the middle. And let the people who see every case be the ones who correct it. Because the alternative is a system that learns only from the people who could afford to argue.

## The ringmaster
**Ryan:** Mara. Build yours.

## The debate · Team Gold · THE CONTEST IS THE TRAINING DATA
**Mara:** Let me grant what's true. The signal barely fires. One in a hundred, and pulled by lawyers and billing departments. He's right about the denominator, and I won't pretend otherwise.
**Mara:** But look at what happens when it does fire. Three in four reversed. Ninety-five percent of nursing-home denials. Ninety-seven for the company in the lawsuit. That's not a weak signal. That's the strongest signal in the record. It is starved, not wrong.
**Mara:** Now his reviewer. Cigna's doctors signed three hundred thousand denials in two months, about a second each, as reported. Wiser's clinician confirms the machine's pick, for the vendor paid per pick. In Massachusetts, a lender's underwriters overrode the model for years with no written policy on how. A human on every denial is a design. It is not a safeguard.
**Mara:** It can't be, and the desk showed you why. Reviewers shown the machine's answer first anchor on it. Radiologists shown a wrong suggestion got worse. Clinicians shown an explanation attached to a wrong answer got more wrong, not less. His logged reason doesn't rescue the reviewer. It captures them.
**Mara:** So my design puts the reviewer where the score can't reach them. Independent of the deployer. Blind to the machine's answer until they've made their own. And the signal that trains the model comes from the person the decision was about, because that's the only signal not shaped by what the deployer is paid for.
**Mara:** Then the audit. Not per case. In aggregate, by group. Because the one algorithm on the record found wrong on a subgroup, the one that ranked Black patients as less sick at the same risk score, was invisible case by case. Nobody appealed it. It only showed up in the numbers.
**Mara:** Now my weakest ground, and I'll take it myself. My signal is the same one in a hundred he keeps saying, and my audit has no operating instance. No insurer publishes an error rate by subgroup. The only regulator asking is still a draft. My design's accountability leg exists on paper.
**Mara:** I'll take that too. Because his leg isn't on paper. It's on the record, and the record says the reviewer was the error. When the deployer's own person is the thing that went wrong, the deployer's own person cannot be the correction.
**Mara:** He says blind to what. Blind to the answer. A doctor reading a chart before being told the verdict is not a coin flip. It's what a second opinion means.
**Mara:** He says his band gives the human time to look. Then give them the time. Nothing in his contract does. Nothing in any instrument we found says what the reviewer is shown or how long they have.
**Mara:** So build the loop from the outside in. The contest is the signal. The reviewer is independent and blind. The errors are counted by group and published. Because a machine that learns from its own reviewer is a machine that learns to agree with itself.

## The ringmaster
**Ryan:** Andre. Last word before the judge.

## The debate · Team Green — responds
**Andre:** Her reviewer line is her best card. A human on every denial that signs sixty thousand a month isn't a review. I won't pretend it is.
**Andre:** But she's just told you the mechanism. A reviewer with no band, buried in everything, becomes a stamp. That's a case for a band. Send the person only what the machine can't settle, and blind them to the score on those cases if you like. I'll take that. It's my design with her constraint on it.
**Andre:** Now her signal. The strongest in the record, she says, and starved. Agreed. And her design starves it more. An independent reviewer on every contested case does not scale, and a system that waits for appeals learns from the angriest. She's given you a better reviewer for the one in a hundred and nothing for the ninety-nine.
**Andre:** Her subgroup audit, I'll concede outright. The algorithm that was wrong about Black patients was invisible case by case. No reviewer of mine would have caught it. Nobody's would. Only the aggregate did. That audit belongs in any design, including mine.
**Andre:** And I'll concede her strongest line. The record's one caught error was in the reviewer. On that case, she has the better argument. It's just not an argument for the affected person owning the signal. It's an argument for the auto-deny band being audited, by outcome, by group, because that's the band no one ever appeals.

## The ringmaster
**Ryan:** Before the judge rules, one gut check for you at home.

## Quick check
**Nia:** When a Medicare Advantage denial was appealed, in the Inspector General's audit, how often did the plan reverse its own decision?
**Nia:** A, about one in four. Or B, about three in four.

## Quick check · the answer
**Nia:** It's B. Three in four. Plans overturned seventy-five percent of their own denials when someone appealed. And about one denial in a hundred was appealed at all.

## The verdict
**Kate:** This one doesn't resolve, and no design wins it. Three things from me. What survived. What fell. And what's left for you to set.
**Kate:** Both teams accepted the same settled ground. A machine may approve, and no instrument in the record asks anyone to review the approvals. A denial must be reversible by someone who isn't the model. And the correction signal reverses most of what it touches, and is pulled about one time in a hundred, by the people who can afford to pull it.
**Kate:** What survived from green. The band. Send the human only what the machine can't settle, because a reviewer buried in everything becomes a stamp. And the denominator. Only the deployer sees the ninety-nine cases nobody appeals, so only the deployer can sample them.
**Kate:** What survived from gold. The reviewer must be blind to the machine's answer, because the experiments say a reviewer shown the answer first is captured by it. And the errors must be counted by group, because the one algorithm found wrong on a subgroup was invisible case by case.
**Kate:** What fell. A human on every denial as a safeguard in itself. The one running example asks its clinician to confirm, pays the vendor per denial, and the one error anyone caught was in the reviewer. And green's own engine, the band that narrows as the model learns. No deployed system anywhere has been shown to do it.
**Kate:** So here's the design that survives both teams. A band, with the auto-deny side audited by outcome and by group, because that's the side nobody ever appeals. A reviewer who reads before being told. And two loops, not one. The deployer's review narrows the band. The contest can widen it.
**Kate:** That leaves two dials neither team could settle for you. Who owns the correction, the deployer's reviewer or the person's contest. And the one both teams walked past. Who pays to ask. Because right now, ninety-nine denials in a hundred are never looked at again, and neither design changes that number.
**Kate:** So the question we're handing you isn't algorithm or human. Both teams just built you a system with both. It's this. When the machine says no about you, who should have to pull the signal? You, or the system? That one's yours.

## The close
**Lucas:** Alright, that's the episode. I came into this one with my own answer. I work in this area. I'd have told you nobody running a decision system picks a side. You use the machine, you use the people, and you get better with the loop between them.
**Lucas:** Then we read what Medicare actually built. And it's that design. A machine that only says yes, a person on every no, a fee that gets clawed back when the appeal wins. And the records say the person confirms, the fee is on the no, and the one error anyone caught was the person.
**Lucas:** And then the number that stuck with me. Three in four denials get reversed when someone appeals. And about one in a hundred does. The loop I'd have drawn on a whiteboard runs on a signal almost nobody pulls.
**Lucas:** So both teams ended up building the same machine and arguing about two dials. Who owns the correction. And who has to ask. I didn't expect the second one, and I think it's the real one.
**Lucas:** Quick reminder before you go. None of the people you just heard are human experts. They're algorithms I set up to research this, fact-check it, and argue both sides. I'm not an expert either, and none of this is advice. I read what they used and what they threw out, and I decide whether it publishes. And nobody here declared a winner. That one's yours.
**Lucas:** Everything's linked below. The research, both sides' arguments, the fact-check log — including where we caught our own bots getting things wrong. If you think we got a claim wrong, tell me which one and bring a source. If enough of you make the same case, I'll re-run it and show what changed.
**Lucas:** If you enjoyed today's episode, like and subscribe. And join the discussion down in the comments — who knows, maybe your debatable question is the next question we debate.
