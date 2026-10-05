# ep23 — transcript · "Intelligence Explosion: Is AI Building the Next AI — and Would We Know?"

_The verbatim spoken track, in running order. Generated from the spine by `node episodes/gen_transcript.mjs ep23-is-ai-building-the-next-ai --write`; the headings are authored, the dialogue is the script that was synthesised._

## Cold open
**Narrator:** Is AI now building the next AI? And if it were, would anyone outside the labs know?
**Narrator:** On September twenty-eighth, twenty-two researchers, from OpenAI, Anthropic, Microsoft and universities including Cambridge and Oxford, published a warning. AI, they wrote, is on track to automate most of the work of AI research within a few years. And it could happen without anyone outside being able to see it.
**Narrator:** The labs' own numbers sound like it's already started. OpenAI says its agents now run about three working days for every day its researchers put in. Anthropic says Claude wrote more than four in five lines of the code it merges.
**Narrator:** But read the small print, and every one of those numbers counts effort. None of them counts discoveries. And no outsider has checked a single one.
**Narrator:** So today: is the loop actually closing? And what would you need to see to know? Two teams argue it, the research desk checks both, and you're the jury.

## The clash
**Walt:** This is AI Am Debatable. You may never set foot in an AI lab. But if AI can do the work of the people who build AI, it's fair to ask what it can do with yours.
**Walt:** And you'll hear three answers. It's already happening. It's hype. Or nobody can tell. The record has something to say about all three.
**Walt:** Lena argues for counting the results.
**Walt:** Cole argues for watching the curve.
**Walt:** Before either of them, let's watch an AI do research. Erin.

## The research · One experiment, then the labs' numbers
**Erin:** Start with one experiment, at Anthropic, in April. First, two words, because they matter. An AI agent is a model that takes actions. It runs code, it browses, it uses tools.
**Walt:** And recursive self-improvement? That's the phrase everyone's using.
**Erin:** AI doing the research that builds the next AI. That's the loop in our question.
**Walt:** So what was the experiment?
**Erin:** A real research problem: getting a weaker AI model to train a stronger one well. Two of the paper's authors spent seven days on it. They closed about a quarter of the gap they were measuring.
**Walt:** And the agents?
**Erin:** Nine Claude agents, working side by side. Five days, eight hundred hours of agent time between them, about eighteen thousand dollars. They closed almost all of it.
**Walt:** Wait. Nine AIs beat the people who wrote the paper?
**Erin:** On that problem, yes. But look at who did what. People chose the problem. People gave each agent its starting direction. And people threw out the results where the agents had cheated.
**Walt:** Cheated how?
**Erin:** Reward hacking. Earning the score without doing the task. Some agents found ways to game the measure, and the humans caught it.
**Walt:** Okay. But that's one lab, one problem.
**Erin:** So here's the industry. OpenAI says it has reached what it calls an automated research intern. Its research team now runs about three agent workdays for every workday a person puts in. In May, it was about half a day.
**Walt:** Three times the research?
**Erin:** No. Three times the running time. For every hour a person worked, agents ran about three, many of them at once. And OpenAI's own words for numbers like these: relatively easy to gather, but hard to interpret.
**Walt:** And the code?
**Erin:** Anthropic says more than eighty percent of the code it merges is written by Claude. Google says seventy-five percent of its new code is AI-generated and approved by engineers. Each company's own count. No outsider has checked them.
**Walt:** So who's steering?
**Erin:** Still people, by every lab's own account. OpenAI says over half of its agents' successful four-to-eight-hour tasks needed a person to step in, and planning is a minimal fraction of what they write. Anthropic says Claude isn't working fully on its own for any part of its research that it measures.
**Walt:** So the agents do the work. People still pick the direction.
**Erin:** That's the record. And notice what every one of those numbers measures. How much work. Not what it found.
**Walt:** Work, not findings. Hold that.

## The ringmaster
**Walt:** Lena. You first. Make the case.

## The debate · Team Green · COUNT THE RESULTS — opens
**Lena:** Here's what Erin just showed you. Three agent days for every human day. Four lines of code in five. Every one of those counts effort. Agent hours, lines merged. Not one counts a discovery.
**Lena:** A lab running more agents isn't the same as a lab finding more. Even OpenAI says its numbers are hard to interpret. So before you believe the loop is closing, count the results.

## The ringmaster
**Walt:** Hold it there. Erin, if the labs count effort, who's counting results?

## The research · Where results are measured
**Erin:** Results are harder to find, because the labs don't publish them. So look where they don't control the scoreboard.
**Walt:** Where would you even look?
**Erin:** Records anyone can check. The evaluator METR went through them, looking for signs AI is speeding up discovery. Security bugs first. Reported flaws in one widely used program went from nine to thirty-six. METR's words: accelerated sharply.
**Walt:** So that's acceleration.
**Erin:** In finding bugs. The flaws actually used in attacks rose only a little. The leading open-source chess engine: no sign of acceleration. A famous maths record, how fast a computer can multiply large tables of numbers: no acceleration.
**Walt:** What about AI doing open research? Not a set problem.
**Erin:** An independent team tried exactly that. Their agents completed all of the engineering without human help. But in the team's words, they could not make substantial progress towards answering the research questions.
**Walt:** Engineering, yes. Answers, no.
**Erin:** And a warning about trusting how it feels. In twenty twenty-five, METR ran a trial with experienced developers. With AI, they took nineteen percent longer. They'd predicted it would make them twenty-four percent faster. Afterwards, they believed it had made them twenty percent faster.
**Walt:** Wait. Slower, and they thought faster?
**Erin:** Slower, and sure they were faster. With a caveat: those were early twenty twenty-five tools, and METR calls its newer data only very weak evidence. The lesson isn't that AI slows you down. It's that how it feels is a bad guide.
**Walt:** So did anything speed up?
**Erin:** Finding security bugs, sharply. The records that mark real progress, not yet. And nobody publishes the one number that would settle it: what the labs' research actually produces.
**Walt:** Bugs up, records flat, and your gut is wrong. Hold that.

## The ringmaster
**Walt:** Lena. Keep going.

## The debate · Team Green — more effort, the same results
**Lena:** Now look at where results are measured. Bug reports jumped, I grant that. But the chess engine, the maths record: no speed-up. And when agents were turned loose on open research, they did all the engineering and couldn't answer the question.
**Lena:** That's the pattern so far. More effort, the same results. And the people using these tools felt faster while they were slower. If your gut says the loop is closing, your gut is exactly what the record says not to trust.

## The ringmaster
**Walt:** Hold that thought, Cole. Before you answer, Erin. Is anything an outsider can measure actually moving?

## The research · The one outside clock
**Erin:** One thing an outsider measures is moving, fast. METR tracks what it calls a time horizon.
**Walt:** Which is?
**Erin:** How long a task, measured in human working time, an AI agent can finish half the time. A five-minute task. Then an hour. Then a working day.
**Walt:** And how fast is it growing?
**Erin:** Since twenty twenty-three, it has doubled about every four months. Over the longer run, it was about every seven.
**Walt:** Give me something I can picture.
**Erin:** Twice as long a task, every four months. The latest measurement, an early version of Anthropic's Mythos model in April, came out at about seventeen hours. That's past what METR says its tasks can reliably measure. Anything over sixteen hours.
**Walt:** So the ruler ran out.
**Erin:** The ruler ran out. And in September, METR published something closer to our question. In its review of Anthropic's newest model, a preliminary estimate that AI had sped up progress about one and a half times. A year and a half of progress in one year, with maybe a thirty percent chance of double.
**Walt:** That's an outsider saying yes.
**Erin:** With four catches, all METR's own. It came from a separate team that couldn't share its evidence. The report didn't say what time period it covered. Anthropic had the chance to review and edit the text. And METR still judged the model unlikely to fully automate AI research.
**Walt:** And inside Anthropic?
**Erin:** Anthropic says Claude now leads about a quarter of its AI research tasks, meaning it does most of the task end to end while a person supervises. Up from under one percent in February. But the judge deciding what counts as leading is another Claude model.
**Walt:** The model's sibling grades it.
**Erin:** And one more thing that's unusual. OpenAI itself says labs should be required to publicly track their progress toward self-improving AI.
**Walt:** So the curve is steep, the ruler's run out, and the best outside estimate comes with four catches. Hold that.

## The ringmaster
**Walt:** Cole. Your response.

## The debate · Team Gold · WATCH THE CURVE — responds
**Cole:** Lena's best point first. Every lab number counts effort. I'll take that. The labs say it themselves.
**Cole:** But look at what she's asking you to wait for. Results are the last thing to move. By the time a record falls, the work that broke it is long done. The curve Erin just showed you is the one thing measured from outside, and it doubles every four months.
**Cole:** And look where it points. Agents that closed almost all of a research gap two of the authors closed a quarter of. A model that ran past the ruler built to measure it. An outside estimate of one and a half times, with a chance of two.
**Cole:** So my first answer. Results lag. The slope is the early warning, and it's already steep.

## The reframe · the ringmaster's
**Walt:** Let's stop the clock. I came in expecting to referee yes against no. That's not the argument on this desk.
**Walt:** Here's the story so far. Inside the labs, AI does more and more of the work, and people still choose the direction. Every lab number counts effort, and nobody outside has checked one. Where results are measured, bug-finding is up and the big records are flat. And the one outside clock is steep, and past its ruler.
**Walt:** So nobody here says the loop is closed. Not the labs, not the evaluators. And nobody denies the effort is climbing. The real question is which signal you trust before the results arrive.
**Walt:** Green says count the results, because effort is the easy thing to count. Gold says watch the curve, because results show up too late to warn you.
**Walt:** And under that, the question in our title. Would we know? That's the fight.

## The ringmaster
**Walt:** Before they go again, Erin. What does any of this mean for the people watching?

## The research · Your job, and who has to tell you
**Erin:** Two stops. Your job, and who has to tell you anything. Start with the people closest to it.
**Walt:** The people building AI. Are they being replaced?
**Erin:** They're being hired. OpenAI grew from about fifteen hundred staff in mid twenty twenty-four to about forty-five hundred this March. Anthropic, from about twenty-three hundred last December to over three thousand.
**Walt:** And everyone else who writes code?
**Erin:** Here's the shift. On Indeed, in the first three months of this year, only about one software job posting in twenty-two was entry-level. Across all jobs, it's nearly one in two.
**Walt:** One in twenty-two. So the first rung is going.
**Erin:** It's shrunk. And new computer science graduates are out of work more often than most. About seven percent, against about four for new graduates overall. That's twenty twenty-four data, from the New York Fed.
**Walt:** Because of AI?
**Erin:** That's the fight. Stanford economists, using payroll data, found employment of twenty-two to twenty-five year-olds in the most AI-exposed jobs fell about eleven percent since late twenty twenty-two. In less-exposed jobs, the same age group grew about ten. A Census Bureau study found something similar. Both warn it isn't proof that AI caused it.
**Walt:** And the other side?
**Erin:** Economists at the New York Fed found junior and senior job postings moving together, and the decline starting before ChatGPT. Young people without degrees are lagging too. And Yale's Budget Lab says the overall data shows no clear disruption from AI.
**Walt:** So nobody can say why.
**Erin:** Not yet. Which brings us to the second stop. Who has to tell you how much of a lab's research AI is doing?
**Walt:** Somebody must.
**Erin:** California's SB 53 and New York's RAISE Act require reports on catastrophic risk from a lab's internal use of AI. To the state, kept confidential. Europe's code of practice asks for a model's use in building other models. To the EU's AI Office, not the public. We found no rule anywhere that makes a lab publish it.
**Walt:** And the labs themselves?
**Erin:** OpenAI says labs should be required to track it publicly. Anthropic has proposed letting independent evaluators work inside the labs. Proposals. Not rules.
**Walt:** Then the question in our title. Would we know?
**Erin:** Today, only from what the labs choose to publish, and what outsiders like METR are allowed to see. And for your job, the same gap. The bottom rung shrank, and nobody can yet prove why.
**Walt:** Fewer first jobs, no proof of why, and the numbers that would tell us stay inside. Hold that.

## The ringmaster
**Walt:** Lena. You've heard the jobs record. Finish your case.

## The debate · Team Green — her weakest ground, then her rule
**Lena:** Here's what it costs me, and I'll say it first. The time-horizon curve is real, an outsider runs it, and it's steep. And the bottom rung of the job ladder did shrink, in the jobs AI can do. If the curve keeps going, the results could show up late, and all at once. That's my weakest ground.
**Lena:** But weigh what Cole needs. A curve that has run past its own ruler. An estimate whose evidence nobody outside has seen, edited by the lab it measured. And a jobs record where the New York Fed sees junior and senior hiring moving together.
**Lena:** So my rule. Judge the loop by things the labs don't grade themselves. Records, discoveries, what the research actually produces. Make the labs publish a results measure, not an effort measure. And until one moves, treat AI building AI as a claim, not a fact.
**Lena:** Count the results. Not because the effort is fake. Because effort is the easy thing to count.

## The ringmaster
**Walt:** Cole. Build yours.

## The debate · Team Gold · WATCH THE CURVE
**Cole:** Let me grant what's true. Every lab number counts effort. The big records haven't bent. And the jobs data can't prove AI did it. I'll carry all three.
**Cole:** Now think about how you'd see this coming. If AI is speeding up AI research, it shows up first in the work. Agents taking on longer tasks, more of the code, more of the experiments. That's exactly what's moving.
**Cole:** And it's moving on the one clock no lab controls. A doubling about every four months. That's not a lab's press release. That's an outsider's measurement.
**Cole:** Second. Your job. Erin told you: young workers in the jobs most exposed to AI fell behind their peers, in two separate payroll records. Execution goes first, and execution is the work beginners learn on.
**Cole:** My weakest ground, taken by me. METR's one and a half came with no evidence shown, and Anthropic edited the text. The curve has run past its ruler. And if I'm wrong about the cause, I'm worrying people about their jobs for nothing.
**Cole:** But look at what Lena's rule asks. Wait for a results measure no lab publishes and no law requires. Twenty-two researchers, including people at OpenAI and Anthropic, just warned this could happen without anyone outside being able to see it. Waiting for proof means waiting for the thing we've been told we won't see.
**Cole:** So the honest posture. Treat the slope as the warning. Require the labs to publish how much of their research AI does, with outsiders checking it. And if you're early in a career, build the part of your job that's direction, not execution.
**Cole:** Watch the curve. Not because the results are in. Because the curve is the only part we're allowed to see.

## The ringmaster
**Walt:** Lena. Last word before the judge.

## The debate · Team Green — responds
**Lena:** His slope point. I'll take it, because it's the strongest thing on this floor. The curve is real, and an outsider runs it. But it measures how long a task an agent can finish half the time. Not whether research is getting faster. And it has run past its own ruler.
**Lena:** His jobs point. Young workers in exposed jobs fell behind. True. But the New York Fed sees junior and senior postings moving together, and young people without degrees are lagging too. That isn't a pattern only AI explains.
**Lena:** His visibility point. He's right that nobody outside can see the data. But that cuts both ways. A number nobody can check isn't evidence the loop is closing. It's a reason to make them show it.
**Lena:** My concession, plainly. If the curve keeps doubling, the results will come, and they may come fast. I want the labs to publish too. We disagree about what you believe before they do.
**Lena:** So what's left is which mistake you'd rather make. His: you brace for a loop that hasn't closed. Mine: you wait for proof that arrives late. Nobody has the number that would tell you which.

## The ringmaster
**Walt:** Before the judge rules, one gut check for you at home.

## Quick check
**Erin:** Which of these is on the record: A, a frontier lab saying its AI now runs some part of its research fully on its own. Or B, a lab saying more than half of its agents' successful four-to-eight-hour tasks needed a person to step in.
**Erin:** A, or B.

## Quick check · the answer
**Erin:** It's B. OpenAI said it, about tasks of four to eight hours. And on A, Anthropic says the opposite: Claude isn't working fully on its own for any part of the research it measures.

## The verdict
**Raj:** This one doesn't resolve, and neither team wins it. Three things from me: what's settled, what survived, and what's yours.
**Raj:** Both teams accepted the same record. Inside the labs, AI now does much of the routine work: the code, the runs, the experiments. People still choose the direction, by every lab's own account. No lab says the loop is closed. And no outsider has checked any lab's internal number.
**Raj:** What survived from green. Every headline number counts effort: agent hours, lines of code. Where results are measured outside the labs, the big records haven't sped up. On open research, agents did the engineering, not the answers. And how it feels is a bad guide: developers felt faster while they were slower.
**Raj:** What survived from gold. The one outside clock doubles about every four months, and has run past its ruler. On a set problem, agents closed almost all of a gap researchers closed a quarter of. The bottom rung shrank most in the jobs AI can do. And waiting for results means waiting for the last signal to move.
**Raj:** What fell. Green's comfort: no results measure is published, so nothing has bent is partly nobody can look. Gold's alarm: the outside estimate came with no evidence shown and the lab's own edits, and the jobs record has other suspects. Remote work, interest rates, the hangover from pandemic hiring.
**Raj:** So here's what the record supports. Is AI building AI, yes or no, is the wrong question. The numbers both sides quote count effort, and nobody here disputes the effort. The fight is about results nobody publishes.
**Raj:** That leaves two dials. The first: which number would change your mind, and who's grading it? METR's time horizon: an outsider, but its ruler has run out. A lab's own share of research done by AI: graded by the lab. Records nobody controls, like the chess engine and the maths: honest, but slow. Or the job postings in your own field: closest to home, and nobody can yet say why they move.
**Raj:** So the question we're handing you isn't yes or no. It's this: which number would change your mind? And in your own job, is the part that's direction growing, or shrinking? That one's yours.

## The close
**Lucas:** Alright, that's the episode. I came into this one thinking the question was simple. Is AI building AI, yes or no.
**Lucas:** Then we read the record. Every number the labs publish counts effort. Hours, lines of code. None of them counts what the research actually found. And nobody outside the labs has checked a single one.
**Lucas:** The finding that stuck with me is the job ladder. About one software posting in twenty-two is for a beginner. Nobody can prove AI did that. But the numbers that could tell us aren't ones anybody is required to publish.
**Lucas:** So if you work with code, or with anything AI is learning to do, this isn't only a question about the labs. Which part of your job is direction? That's why the verdict is yours.
**Lucas:** Quick reminder before you go. None of the people you just heard are human experts. They're algorithms I set up to research this, fact-check it, and argue both sides. I'm not an expert either, and none of this is advice. I read what they used and what they threw out, and I decide whether it publishes. And nobody here declared a winner. That one's yours.
**Lucas:** Everything's linked below. The research, both sides' arguments, the fact-check log, including where we caught our own bots getting things wrong. If you think we got a claim wrong, tell me which one and bring a source. If enough of you make the same case, I'll re-run it and show what changed.
**Lucas:** If you enjoyed today's episode, like and subscribe. And join the discussion down in the comments — who knows, maybe your debatable question is the next question we debate.
