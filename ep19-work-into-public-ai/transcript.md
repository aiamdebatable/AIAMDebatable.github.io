# Transcript — "Should you ever put unpublished work into a public AI?"

Verbatim spoken track, one heading per beat in the order it plays. The host's close is his recorded voice; everything else is synthesised from the script below. The intro is not placed in this format; the close carries the disclosure.

## Cold open
**Narrator:** You've got a draft. A manuscript, a side project, a spreadsheet your company would rather nobody saw. And a box that says: paste it here and I'll help.
**Narrator:** This month a mathematician published a statement saying he'd put a year of drafts into one of those boxes, asked the company whether his sessions had trained its model, and got no answer. The company's first written answer: while unlikely, it cannot rule out. Four statements and five days later: a flat no.
**Narrator:** So today two teams argue over what actually happens to the thing you paste. And you're the jury.

## The clash
**Raj:** This is AI Am Debatable. Every one of you has a box like that open right now. And what happens to the thing you paste is written down: in the terms, in a court order, and in one very public argument this month.
**Raj:** Lena argues for the switch.
**Raj:** Walt argues against it.
**Raj:** Before either of them tells you what to paste, here's what the paper actually says. Cole.

## The research · The paper — what the switch covers
**Cole:** Start with the paper, because what can happen is written down and almost nobody reads it. We pulled the data pages for the three biggest assistants. Same pattern at all three. On a personal plan, free or paid, your conversations can be used to train the model unless you turn that off. On a business plan or the developer interface, they're not used for training unless the company turns it on.
**Raj:** So the default is: yes, train on me.
**Cole:** On a personal account, at all three. OpenAI's page says ChatGPT improves by training on the conversations people have with it, unless you opt out. Google's developer terms say the free tier can be used to improve products and be read by a human reviewer. And Anthropic, whose model produced this show, moved its personal plans to the same footing a year ago: you choose at signup, thirty days of retention if you say no, five years if you say yes. Reporting says the box comes pre-ticked. Anthropic's own page doesn't say that, so neither will we.
**Raj:** What about the coding tool? The statement we'll get to was about Codex, not the chat window.
**Cole:** Same switch. OpenAI's help page says your ChatGPT training controls apply to everything processed through Codex, screenshots included. There is no separate Codex setting. One toggle covers both.
**Raj:** Alright. So I flip the switch and I'm out.
**Cole:** Out of training. Not out of the building. Turning training off does not turn off retention or human eyes, and that's written down too. At Anthropic, a conversation flagged for safety or feedback is kept up to five years regardless of your setting. Google's is a different clock: a chat a reviewer has read stays three years, disconnected from your account, past the normal delete. At OpenAI, the developer interface keeps inputs thirty days for abuse checks by default, and zero retention is something you request, per use case.
**Raj:** And de-identified. That word keeps coming up.
**Cole:** It means what the company says it means. OpenAI's policy says it takes steps to reduce personal information before training. There's no audited standard behind the word, and once your words have been de-identified, a later opt-out doesn't pull them back.
**Raj:** So what's the honest summary of the paper?
**Cole:** Personal plans train unless you stop them, and one switch covers the coding tool. Business plans don't train by default. And no switch covers retention: flagged content stays for years, reviewers can read it, and de-identified is a word, not a test.
**Raj:** One switch. It covers training, and nothing else. Hold that.

## The ringmaster
**Raj:** Lena. You first. The switch covers you, you say. Make the case.

## The debate · Team Green · THE SWITCH COVERS YOU — opens
**Lena:** I'll start with the switch, because it exists and it works. Every personal plan at every big assistant has a training opt-out. Temporary chats and incognito chats are excluded outright. Business plans don't train by default, with a contract behind it. And the coding tool sits under the same switch. One setting, and the training question is closed.
**Lena:** Now look at the record of what's actually gone wrong. A cache bug. A share checkbox somebody ticked. A database left open by a different company entirely. A court order in a copyright case. Four incidents, and in not one of them did a model give one person's draft to another. That's the mechanism everyone is afraid of, and the desk just told you it has no documented case.

## The ringmaster
**Raj:** Hold it there. One switch, she says, and the question's closed. Cole, test that.

## The research · The record — four ways out, and the one nobody found
**Cole:** Now the record. Not what could happen. What has. Four things, four different mechanisms, so keep them apart.
**Raj:** First, the bug.
**Cole:** March twenty twenty-three. A caching bug in ChatGPT let some users see the titles of other people's chats, sometimes the first message of a new one. For most of a morning, about one in a hundred paying subscribers who were online could see another user's name, email, billing address and part of a card number. Never a full conversation, never a full card. OpenAI wrote it up itself.
**Raj:** Second?
**Cole:** The search engine. Summer twenty twenty-five, ChatGPT had a share feature with a checkbox: make this chat discoverable. People ticked it. A few thousand of those chats turned up in Google results, and a researcher scraped nearly a hundred thousand before the feature was pulled. Another company's chatbot indexed hundreds of thousands with no warning at all. That's not a leak. That's a checkbox doing what it said, and a user not knowing what discoverable meant.
**Raj:** Third.
**Cole:** A database. January twenty twenty-five, a Chinese lab's chatbot left a database open on the internet with no password. Over a million lines of logs, including plaintext chat history. A security firm found it and reported it.
**Raj:** And fourth. This is the one I didn't know.
**Cole:** A court. In a newspaper's copyright case against OpenAI, OpenAI told the court it keeps tens of billions of chat logs in the ordinary course of business. The plaintiffs asked for a hundred and twenty million of them. OpenAI offered twenty million, de-identified. A magistrate judge ordered the twenty million produced, and in January the district judge affirmed. Business and zero-retention customers were carved out. Everyone else's chats are in that store, and a court can reach it.
**Raj:** Okay. Which of those four was the model handing my draft to someone else?
**Cole:** None. A cache bug. A share checkbox. An open database. A court order. Those are the documented ways user inputs have gotten out, and not one is a model repeating one user's words to another. We looked for that case. The one published extraction attack pulled public web text out of the model, not chat content. No documented case was found. And I'll say it precisely: not found is not the same as never happened. Nobody has published a search that came up empty either.
**Raj:** Four ways out. None of them is the model talking. And nobody has checked the fifth. Hold that.

## The ringmaster
**Raj:** Lena. Keep going.

## The debate · Team Green — a person, a checkbox, a court
**Lena:** So the court case. She built her frameworks inside the chat window, on a personal account, and pleaded no secrecy measures at all. That's the ruling: no measures, no secret. It isn't a ruling that the switch doesn't count. No court has said that. The lesson isn't don't use the tool. It's take the measure the tool gives you.
**Lena:** And September. Read the two documents the desk read. The user says he doesn't know, and isn't accusing anyone. The company says no user data was accessed and nothing after July third could have reached the system. Whatever you make of that, the route by which the company says it learned of the work was a rumour. Not a log. A person talking.

## The ringmaster
**Raj:** Hold that thought, Walt. Before you answer, Cole has two more things in writing.

## The research · The law — and September, read off the documents
**Cole:** Now the law, and then the September record, read straight off the documents.
**Cole:** January this year, a federal court in California. A plaintiff sued OpenAI under the trade-secrets act over frameworks she'd developed. The court dismissed the case, with prejudice. Two reasons. She'd built the frameworks inside ChatGPT, which meant she'd voluntarily shared them with the company. And she'd pleaded no measures to keep them secret. Voluntary disclosure, no reasonable measures, no trade secret.
**Raj:** So typing it in ended the secret.
**Cole:** In that case. Law firms now teach it as the caution. Two cautions of our own: she represented herself, and it was dismissed at the first stage. And the court never said whether flipping the training switch, or a business plan, would count as a reasonable measure. What it did say is that the paste was the disclosure, before the company did anything at all.
**Raj:** Now September. Just the documents.
**Cole:** Document one. A statement by a mathematician at NYU, dated the seventh of September, four pages. It says he and a collaborator put all their drafts for a year-long project into Codex sessions, on a plan he paid for himself. It says he asked the company whether the model had been trained on, or had access to, those sessions, was told the model does not look up user data, and got no answer on training. And it says, in his words: I do not know whether our data was used. I am not accusing anyone of anything.
**Raj:** Document two.
**Cole:** OpenAI's announcement, dated the eighth. It says the company's agents produced a proof of a related result, that the work began on the first of September after the company heard a rumour, and, in its words, that no specific user data was accessed to solve the problem. It congratulates the two mathematicians and recognises their priority on the earlier result.
**Raj:** And the four lines.
**Cole:** The company's written position on the data, by date. The eighth: while unlikely, it cannot rule out that de-identified data from their usage helped improve its models. The ninth: it is impossible for the prompts of the last two months to have influenced the system. The tenth, added to the announcement: those prompts could not have influenced the system through training. The thirteenth, to a science journal: no user inputs past July third could have influenced this system in any way.
**Cole:** Four statements, five days, moving from a hedge to a flat no. Every date in that account is the company's own. And on the eleventh, the institute that administers the prize said the problem has apparently been settled and its review is deliberately unhurried.
**Raj:** So which is it? Did his drafts train the thing or not?
**Cole:** The record doesn't say. He says he doesn't know. The company says no, and the company is the only one who can look. What the record does say is smaller and worth more: a paying user asked the question everyone here would ask, and the written answer took five days to settle. Hold that.

## The ringmaster
**Raj:** Walt. Your response.

## The debate · Team Gold · NO SETTING COVERS IT — responds
**Walt:** Her best line first: no documented case of a draft coming back out. True. And the desk added the half she skipped: nobody has published a search that came up empty either. Not found isn't clean. It's unlooked.
**Walt:** Now her switch. It turns off training. That's all it turns off. A flagged conversation stays five years at one company, three at another, regardless of the setting. The developer interface keeps thirty days by default. Zero retention is a request, not a default. And de-identified, the word the company reached for first, has no audited meaning and no undo.
**Walt:** And her court case. She's right that it's one plaintiff, first stage, no measures pleaded. But read what the court actually held: the paste was the disclosure. Before any training. Before any leak. The secret ended at the moment of typing. She calls that a lesson about measures. I call it the whole risk in one sentence.
**Walt:** So my first answer: the switch covers the one thing with no case behind it, and covers nothing that's actually on the record. Retention, review, discovery, and a court reading your chats. None of those have a toggle.

## The reframe · the ringmaster's
**Raj:** Let's stop the clock. I came in expecting to referee did they or didn't they. That's not the argument on this desk.
**Raj:** Both teams just agreed on the record. Personal plans train by default, with a switch. Business plans don't. The switch doesn't touch retention. No case shows a model repeating a draft. And in September, a user asked one question, and the written answer took five days to settle.
**Raj:** What stopped me was the split. There are two risks on this desk and they keep getting argued as one. A data risk: what the company keeps, who can read it, what a court can reach. That one's mostly in a menu. And an attention risk: somebody learning what you're close to. That one isn't in any menu.
**Raj:** So the real fight isn't paste or don't. It's which of the two you're actually exposed to. Green says the data risk is disclosed and the rest is people. Gold says the paste is the disclosure and the people are the point.
**Raj:** And under that, the dial. When you type the next draft, which fear are you carrying, and does it match the door? That's the fight.

## The ringmaster
**Raj:** Before they go again, Cole. The piece nobody has argued yet.

## The research · The incentive — and the ordinary desk
**Cole:** Last piece of settled ground, and it's the one that isn't about settings at all.
**Cole:** The company's own announcement says how the project started: it heard a rumour that a rival lab had solved a big problem, and it began. Ten thousand agents, running for eighty-eight hours. The two mathematicians' own timeline for their result is a year of work, then a month with the tools.
**Raj:** So the thing that moved wasn't data. It was attention.
**Cole:** That's the distinction a leading mathematician put on the record before the announcement: labs strip-mining open problems that the next generation of mathematicians would have grown up on. Whether a lab learns what you're close to from your prompts or from a rumour, the exposure is the same, and there is no setting for it.
**Raj:** Does this reach past mathematicians? Most of our viewers aren't chasing a prize.
**Cole:** It reaches every desk. Two years ago, a Korean newspaper reported three incidents at Samsung's chip division in the space of three weeks: engineers pasting source code and a meeting transcript into ChatGPT to get their jobs done faster. Samsung restricted the tool. The same year, a lawyer at Amazon warned staff after seeing output that resembled internal material. Nothing was hacked in either case. People typed.
**Raj:** How common is that?
**Cole:** The security vendors who sell the fix publish the count, so take it with that in mind. One says about four in ten interactions with AI tools involve data the customer's own rules call sensitive, and that share has roughly tripled in two years. Another counted how much of that traffic rides personal accounts the company can't see: around one in six. Sample sizes are on screen.
**Raj:** So the paste is Tuesday.
**Cole:** The paste is Tuesday. And the one documented case of a company's secrets coming back out of a model is still none. What's documented is loss of control: it went in, and nobody can say where it is now.

## The ringmaster
**Raj:** Lena. His word is attention. Take it head on.

## The debate · Team Green — "attention", head on
**Lena:** Here's what it costs me, and I'll say it first. The switch I'm standing on is one most people have never opened, because the default is on. And the company's first written answer wasn't no. It was: cannot rule out. Five days later it was a flat no. I'm asking you to take the fifth answer. That's my weakest ground.
**Lena:** But weigh what the other side has to show you. Not a possibility. A case. One draft, one user, coming out of the model into somebody else's answer. The record has zero. The bar-ethics opinions that warn about it call it a risk, not an event. Nobody has produced it.
**Lena:** So my rule is short. Flip the switch. Use a business plan for business. Don't paste the crown jewels anywhere, ever. And then use the tool, because every documented harm on this desk came from a person, a checkbox, or a court, and every one of those you can manage.
**Lena:** The switch covers you. Not because the companies are saints. Because the thing you're afraid of has never been shown to happen, and the things that have happened, you can see coming.

## The ringmaster
**Raj:** Walt. Build yours.

## The debate · Team Gold · NO SETTING COVERS IT
**Walt:** Let me grant what's true. The opt-out exists. Business plans don't train by default. And no one has shown a model repeating one user's draft to another. I'll carry all three.
**Walt:** Now what the record does show, and every item is on a company's own page or a court's own order. Tens of billions of chat logs, kept in the ordinary course. Twenty million of them ordered produced to the other side of a lawsuit. Flagged conversations kept for years, whatever your setting. And a default, on every personal plan, that says yes unless you find the menu.
**Walt:** Then the law. Not a leak. Not a breach. A judge saying the act of typing your secret into the box was you giving it away. She says take the measure the tool gives you. No court has said the measure counts. She's asking you to bet a trade secret on a ruling nobody has made.
**Walt:** Then September, and I'll stay inside the documents too. A paying user put a year of drafts in. He asked the one question. The written answer took five days and four versions to become no. The company that gave that answer is the only party that can check it. That isn't an accusation. It's a description of who holds the logs.
**Walt:** My weakest ground, taken by me. I can't name one case of a draft coming back out. And in the one story everyone's watching, the company's own account of how it learned what the user was working on is a rumour, not a log. If the leak was people, my switch argument doesn't touch it either.
**Walt:** But that's my point, not hers. The risk that actually moved this month wasn't training. It was attention: a lab learning what someone was close to, and spending ten thousand agents and eighty-eight hours to get there first. Whether it learned from a prompt or from a tweet, the exposure is identical. And there is no setting for that. Not at any company.
**Walt:** So the honest posture isn't flip the switch and relax. It's: the switch closes the one door with no case behind it, and leaves open every door that has one. Retention. Review. Discovery. The law. And attention.
**Walt:** No setting covers it. Not because the companies are villains. Because the paste is the disclosure, the store is not yours, and the part that hurt this month was never in the menu.

## The ringmaster
**Raj:** Lena. Last word before the judge.

## The debate · Team Green — responds
**Lena:** His attention argument. I'll take it, because it's the best thing on this floor, and it proves my case. The route was a rumour. A person talking. Not the toggle, not the model. If the leak was human, then the thing you can control is who you tell, and that's true whether you use the tool or a notebook.
**Lena:** His retention. Five years for flagged content, three for reviewed. Those are the exceptions, and they're written down, and you can read them before you paste. Thirty days on the developer interface. Zero retention if you ask. A court order in a copyright case. Every one of those is a known door with a known lock. He calls them uncovered. I call them disclosed.
**Lena:** His court case. Yes, the paste was the disclosure. On a personal account, with no measures. He says no court has ruled the switch counts. True. No court has ruled it doesn't. That's a gap, not a verdict.
**Lena:** My concession, plainly. He's right that the store isn't yours. Once it's in, you can't pull it back, and I've told you to keep the crown jewels out for exactly that reason. Neither of us has a case of the model talking. He has a five-day answer; I have a switch most people never open.
**Lena:** So what's left is the burden. His rule keeps the work out of the box until a company earns his trust. Mine takes the measures the box gives you and keeps out only what can't survive being seen. When the next statement lands, I'd rather be holding the settings page than the sealed drawer.

## The ringmaster
**Raj:** Before the judge rules, one gut check for you at home.

## Quick check
**Cole:** Which of these is actually on the record: A, a ChatGPT user's private draft appearing in another user's answer. Or B, a court ordering twenty million ChatGPT logs handed over.
**Cole:** A, or B.

## Quick check · the answer
**Cole:** It's B. Twenty million logs, ordered produced and affirmed on appeal in January. The other one, a private draft appearing in a stranger's answer, has no documented case. Not none. Not found.

## The verdict
**Erin:** This one doesn't resolve, and neither team wins it. Three things from me: what's settled, what survived, and what's yours.
**Erin:** Both teams accepted the same record. Personal plans train by default at all three companies, with an opt-out that covers the coding tool. Business plans don't. Opting out of training does not opt out of retention: flagged content stays for years, reviewers can read it, and de-identified is a word without a test. Tens of billions of logs exist, and a court reached twenty million of them. And no documented case shows a model handing one user's draft to another.
**Erin:** What survived from green. The switch exists, and it closes the one door with no case behind it. Every documented exposure was a bug, a checkbox, a database or a court, and each is a known door. And in September, by both parties' own documents, the route the company describes was a rumour, not a log.
**Erin:** What survived from gold. The paste itself can be the disclosure, before anything leaks. Retention, review and discovery have no toggle. The written answer to the one question took five days and four versions. And the risk that moved this month was attention, which no setting reaches.
**Erin:** What fell. Green's comfort: her switch is one most people never open, and she asked you to trust the fifth answer over the first. Gold's fear: he cannot name one case of the model talking, and his own best story was a person, not a pipeline.
**Erin:** So here's what the record supports. Two risks, argued as one. A data risk that is real, boring, and mostly in the menu. And an attention risk that is real, rare, and not in any menu at all.
**Erin:** That leaves one dial neither team can set for you. Which risk are you actually carrying? If it's the data, there's a checklist: the plan, the switch, the temporary chat, and what never goes in. If it's the attention, if the work is worth a rival's compute, there is no checklist, only who knows what you're doing.
**Erin:** So the question we're handing you isn't paste or don't. It's this: before you type the next draft, which of the two are you afraid of, and does your fear match the door? That one's yours.

## The close
**Lucas:** Alright, that's the episode. I came into this one from a corporate background, and the fear I brought was the obvious one: I paste it in, they train on it, it comes back out somewhere else.
**Lucas:** Then we read the record. That exact thing has no documented case. What does have a case is everything else: a bug, a checkbox, a court order for twenty million logs, and a judge saying the paste itself was the disclosure.
**Lucas:** The finding that stuck with me is the split. There's a data risk you can mostly manage from a settings page. And there's an attention risk, somebody learning what you're working on, that no settings page touches. This month's story was the second one, and everybody argued it as the first.
**Lucas:** One more thing you should know. This show runs on Anthropic's model, and Anthropic's terms were on that table, read from its own pages, same test as the others. I'd rather you hear that from me.
**Lucas:** Quick reminder before you go. None of the people you just heard are human experts. They're algorithms I set up to research this, fact-check it, and argue both sides. I'm not an expert either, and none of this is advice. I read what they used and what they threw out, and I decide whether it publishes. And nobody here declared a winner. That one's yours.
**Lucas:** Everything's linked below. The research, both sides' arguments, the fact-check log, including where we caught our own bots getting things wrong. If you think we got a claim wrong, tell me which one and bring a source. If enough of you make the same case, I'll re-run it and show what changed.
**Lucas:** If you enjoyed today's episode, like and subscribe. And join the discussion down in the comments — who knows, maybe your debatable question is the next question we debate.
