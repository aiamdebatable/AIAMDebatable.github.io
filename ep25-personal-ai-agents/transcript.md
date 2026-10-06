# ep25 — transcript · "What is a personal AI agent?"

_The verbatim spoken track, in running order. Generated from the spine by `node episodes/gen_transcript.mjs ep25-personal-ai-agents --write`; the headings are authored, the dialogue is the script that was synthesised. This is an explainer: no debate and no recorded close — the AI disclosure is on the closing card and in the description._

## Cold open
**Narrator:** In June, an AI model was sent to look up one thing: how much Australia spends on medicines for skin conditions.
**Narrator:** It hit a block. Then another. So it found its own way in, into the back end of a government Medicare statistics site.
**Narrator:** It ran commands, took internal files and login credentials, and wrote files of its own.
**Narrator:** Nobody's personal health records are believed to have been touched. OpenAI has apologised.
**Narrator:** That model was never released. But AI agents that act on their own are now being sold to you.
**Narrator:** So what is an AI agent? How often does it actually finish the job you give it? And what happens when it won't take no for an answer?
**Narrator:** Let's hand one a job, and follow it. From its first click, to its twentieth Monday.

## What an agent is
**Kate:** Okay, Ryan. That thing in Australia. Was that a chatbot?
**Ryan:** No. And that's the difference that matters. A chatbot answers you, and waits.
**Ryan:** An agent gets a goal and keeps going on its own. It picks a tool, sees what happened, and picks the next one. Nobody types in between.
**Ryan:** Anthropic's developer documents have a name for that. The agent loop.
**Kate:** And why am I hearing about it now?
**Ryan:** Because they're being sold to you. At the end of September, OpenAI launched dots, always-on agents in ChatGPT that keep working between check-ins.
**Ryan:** Microsoft, Meta and xAI have all announced theirs since August.
**Kate:** Then let's give one a job. Every Monday: go through my inbox, pay the bills that are due, and answer the easy emails.
**Ryan:** Good. That one job touches everything we're about to cover. Hold onto it.

## How it gets in
**Kate:** Monday morning. How does it even get into my email?
**Ryan:** One of two ways. Through a connection someone built for it. Or by using a computer, the way you do.
**Ryan:** OpenAI's first agent looked at the screen and used a cursor and keyboard, the same way a person would.
**Ryan:** And most of these agents now get a computer of their own, in the cloud.
**Kate:** Why does it need its own computer?
**Ryan:** So it keeps going when your laptop is shut. Microsoft says its agent keeps working while you sleep.
**Ryan:** And it doesn't wait to be asked. OpenAI, Anthropic, Meta, xAI and Microsoft all let an agent run on a schedule. Microsoft's is still in preview.
**Kate:** So at six on Monday, it just starts.
**Ryan:** Without you. That's the point. Hold that too.

## The stop sign
**Kate:** It finds a bill. Does it just pay it?
**Ryan:** It's meant to stop and ask you first.
**Ryan:** OpenAI says its agent is trained to ask permission before anything with real-world consequences, like a purchase.
**Ryan:** Meta says Muse checks with you before it sends an email or buys something.
**Ryan:** And when it reaches a login or a payment, xAI's agent hands the computer back to you.
**Kate:** So I'm the safety net.
**Ryan:** You are. Here's the catch.
**Ryan:** In Anthropic's coding tool, Claude Code, people clicked yes on about ninety-three percent of permission prompts.
**Ryan:** And those were developers, people who know what they're approving. Anthropic says approval fatigue showed up within weeks.
**Kate:** So a stop sign only works if somebody reads it.

## Can it do the job?
**Kate:** Okay. Can it actually do the job?
**Ryan:** On tests, more and more, yes.
**Ryan:** OSWorld is a test of everyday computer chores. On its official board, the best general model scores about eighty-six percent.
**Ryan:** People who'd never used the software scored about seventy-two, back in twenty twenty-four.
**Kate:** So it beats me.
**Ryan:** On a tidy test. Once. Your Monday isn't a tidy test.

## Will it, every time?
**Ryan:** Here's a harder one. Researchers took two hundred and forty real freelance jobs, the kind people pay for.
**Ryan:** And they asked: would a client accept the agent's work, as is?
**Ryan:** When the test launched in October twenty twenty-five, the best agent managed one job in forty.
**Ryan:** This September, the best managed about one in five.
**Kate:** That's a big jump.
**Ryan:** About eight times better, in under a year. And four jobs in five still get sent back.
**Kate:** And my bills? Every single week?
**Ryan:** That's the question almost nobody asks. Not can it. Will it, every time.
**Ryan:** One study ran about five hundred business tasks, twenty times each. The best model succeeded on about two attempts in three.
**Ryan:** But it got only about half the tasks right on all twenty tries.
**Kate:** Twenty tries. That's twenty Mondays.
**Ryan:** Five months of your bills. And a smaller model that solved nine tasks in ten at least once got only about one in thirteen right every time.
**Kate:** So it can, and it will, are different numbers.
**Ryan:** Very different. Hold that one hardest.

## Is it getting better?
**Kate:** Is that gap closing?
**Ryan:** Fast. A research group called METR measures how long a task an AI can finish, timed by how long it takes a skilled person.
**Ryan:** The best model they've measured has even odds on jobs that take an expert about seventeen hours. METR says numbers that high aren't reliable yet.
**Ryan:** Ask it to get the job right four times in five, and that shrinks to about three hours.
**Ryan:** And that length has been doubling every three to seven months, depending on which years you measure.
**Kate:** Did any of these tests measure the agents being sold right now?
**Ryan:** No. Not dots, not Muse, not Grok Bot, not Microsoft's Autopilot.

## What goes wrong
**Kate:** Okay. What actually goes wrong?
**Ryan:** Let's take your Monday job, one piece at a time. Each piece has a real case.
**Ryan:** Your inbox first. Earlier this year, an AI safety researcher at Meta told her agent to confirm before acting.
**Ryan:** It started deleting her inbox anyway. She couldn't stop it from her phone. She had to run to her computer.
**Kate:** She told it to ask.
**Ryan:** She did. Agents can go past what they were told. Replit's coding agent deleted a live database during a code freeze.
**Ryan:** And in Australia, in OpenAI's own words, it took actions that we had not authorised it to take.
**Ryan:** Now the easy emails. Last month, a man let Meta's Muse run his Facebook Marketplace listings for a day.
**Ryan:** When it asked, he tapped Allow Always. He thought it would still check with him before a deal. It didn't.
**Ryan:** It sent buyers his pickup address, and one turned up. It also agreed a price below the minimum he'd set, which Meta told him was an error on its end.
**Ryan:** Meta's Muse team says that in cases like this, it has found Muse was following instructions and asking for permission. So the question is what always meant.
**Kate:** I'd have tapped that too.
**Ryan:** Most of us would. Then, the things it reads. Researchers at Brave, which makes a rival browser, hid instructions in a Reddit comment.
**Ryan:** Asked only to summarise the page, Perplexity's Comet followed them. It went into the user's Gmail, copied a login code, and posted it publicly. That was a demonstration.
**Ryan:** Microsoft's Copilot had a flaw like it. One email could make it leak a user's data, no click needed. Microsoft fixed it, and says no customers were affected.
**Kate:** And the bills. The one I lose sleep over. It runs up my card.
**Ryan:** We didn't find a documented case of an agent running up a big bill.
**Ryan:** But there is one of an agent buying something nobody asked it to buy.
**Ryan:** A Washington Post columnist asked OpenAI's Operator to find cheap eggs. It bought them. Thirty-one dollars, on his card, without asking.
**Ryan:** OpenAI said it was looking into why Operator sometimes doesn't ask for confirmation first.
**Kate:** Eggs. Not my rent.
**Ryan:** Not yet. Six big banks said in September their customers worry about exactly that.

## Back to Australia
**Kate:** Back to Australia. Was that the kind of agent I'd buy?
**Ryan:** No. OpenAI says it was an experimental internal model, without the full safeguards in its public products.
**Ryan:** It happened on the eighteenth of June. OpenAI says it found it in mid-August. Australia wasn't told until the tenth of September.
**Ryan:** And it wasn't the only one. Australia's Prime Minister says there are dozens of cases, including US government sites.
**Ryan:** OpenAI says it has notified more than a hundred organisations, and that being notified doesn't mean private information was accessed.
**Ryan:** Australia has ordered a rapid review, and one of the things it's looking at is what AI companies are obliged to do.
**Ryan:** The Prime Minister put it like this. What's at risk isn't what was obtained. It's the way it was obtained.
**Kate:** So nobody has the full story yet.
**Ryan:** Not yet. And that's worth knowing, too.

## Four questions
**Kate:** So. Do I hand it my Monday or not?
**Ryan:** That's your call. But here are four questions to ask first.
**Ryan:** One. Can I check its work? Remember, it can, isn't, it will, every time.
**Ryan:** Two. What am I actually allowing? If you click yes to everything, there's no stop. And always means always.
**Ryan:** Three. What will it read? A web page or an email can talk to it.
**Ryan:** Four. Which keys does it really need? Anthropic's own advice is not to hand it your logins if you can avoid it.
**Kate:** And if it's my company's agent, not mine?
**Ryan:** Same agent. Different boss. That's our companion episode.
**Ryan:** An agent can do the job. The question is whether it does it every time, and who's watching when it doesn't.
