# ep19 — Should you ever put unpublished work into a public AI?

**Question:** a viewer types a draft, a manuscript, a side project or a company document into a consumer AI. What can actually happen to it — by the terms, by the mechanism, by the law, and by the incentive of the company on the other end? (Lucas's framing, from the Buckmaster/OpenAI story, tested.)
**Type:** DEBATE episode. GOLD = *the exposure is real and no setting covers all of it* (the precautionary rail). GREEN = *the terms already protect you; every documented leak was a person or a checkbox*. Chain pair with #90 (the corporate half: ban vs. govern).
**Research grade:** episode. Every figure is tagged ★ (primary opened — by a verifier in the run, or by hand on 2026-09-17/18 through the r.jina.ai proxy where the site blocks fetching) or ○ (finder-read / secondary). ⚠ Vendor telemetry (Cyberhaven, Harmonic) is ○ by definition. Fairness bar: Anthropic's model produces this show; Anthropic's terms are on the same table as OpenAI's and Google's and are quoted from Anthropic's own pages.

---

## ⛔ Read first — what the record does not support

**The man at the centre of the peg does not allege what the headlines say.** ★ Buckmaster, statement, 2026-09-07: *"I have not seen OpenAI's proof. I do not know what their model did, or how. I do not know whether our data was used. I am not accusing anyone of anything. I am stating what I was told, when, and what was proposed to me."* The only documented route by which OpenAI learned of the work is **a rumour chain of people plus a public tweet** — ★ his own email of 09-03: a Courant colleague → "an analyst in the UK" → "somewhere further upstream"; ★ OpenAI's post: "Our effort began on September 1st after hearing a rumor which we later realized was related to Levent Alpöge … and Tristan Buckmaster." So the episode is **not** "did OpenAI steal a proof." It is: here is a man who typed everything in, asked the one question you would ask, and got silence — now find out what the answer actually is, for him and for you.

**And the scariest reading of "trained on your data" has no case behind it.** ○ No source anywhere documents a consumer prompt surfacing in another user's output. The one published extraction attack (Nasr, Carlini et al., the "poem poem poem" divergence attack) recovered **public pretraining data**, not chat content. The Samsung pastes never resurfaced. ⚠ This is an *absence of search*, not a checked negative — no finder reports having looked for a cross-user case and failed. Say "no documented case was found," never "it has never happened."

---

## Why now

- ★ **Buckmaster's statement, 2026-09-07** (4 pp, extracted with pypdf): a personal collaboration with Anthropic's Levent Alpöge, "free of any institutional agreements"; tools "Anthropic's Claude, OpenAI's Codex, especially with GPT-5.6 Sol and, more recently, Astra"; results 08-15, Lean-verified 08-22; **"our sessions in Codex, into which we had been putting all our drafts for the whole of this project"**; **"I asked whether the model had been trained on, or had access to, our sessions in Codex … I was told the model did not look up user data. I asked again, about training, and I did not get an answer."** He paid "out of my own research funds, including footing a large bill to OpenAI" — plan tier never named. https://cims.nyu.edu/~tristanb/statement.pdf
- ★ **OpenAI's post, 2026-09-08, as it reads now:** the result resolves "statement 'C' (and also 'D')" of the official formulation — **forced** blow-up (a smooth applied force); the *unforced* result is the separate Euler one. ~10,000 concurrent agents, 2.7 M messages, ~130 B output tokens, 88 hours (Sept 1–5), +17 h for Lean. "We (the researchers and the agents) did not see any of their work through any means until they released it publicly — in particular, no specific user data was accessed in order to solve this problem. Following an investigation, we have confirmed that 'Buckmaster's Codex prompts over the two months preceding this announcement' could not have influenced the system through training." https://openai.com/index/navier-stokes-solution
- **OpenAI's data statement moved four times in five days** (the chain, each with its source):
  | date | wording | source |
  |---|---|---|
  | 09-08 | "While unlikely, we cannot rule out that de-identified data derived from their usage of our products helped improve our models." | ○ OpenAI press release / spokesperson, as quoted by ABC (09-10) and Wikipedia's ref [7]; also an official OpenAI tweet that afternoon |
  | 09-09 | "It is impossible for Dr. Buckmaster's Codex prompts over the last two months to have influenced the system in any way, including training." | ○ Wikipedia ref [33] |
  | 09-10 | "could not have influenced the system in any way" (the post updated) | ★ now on the post itself, as above |
  | 09-13 | "After investigating, we can say with full confidence that no user inputs past July 3rd could have influenced this system in any way." | ★ Nature (via proxy); ○ Wikipedia ref [46] |
  ⚠ Every date in OpenAI's own timeline (Sept 1 start, "not seen any of their work through any means") is **self-report**, uncorroborated outside OpenAI. Apply the same interested-party discount to it that the show applies to Buckmaster.
- ○ **Altman**, on X (via ABC 09-10): "We did not rush to publish even though the other team wasn't communicating with us"; he would have "greatly preferred coordination"; methods "appear to be different". ○ **Bubeck** (X): "One can in hindsight see that our proofs differ significantly and even the precise results proved are different in the Euler case." ○ **Tao** (Mastodon, before the announcement): labs "strip-mining" open problems that the next generation of mathematicians needs.
- ★ **Clay Mathematics Institute, 2026-09-11:** the problem "has apparently been settled"; "The process is deliberately unhurried, but we will provide updates"; status "active". ⚠ No baseline for how long a Millennium claim normally sits — do not read "active" as doubt. https://www.claymath.org/news/navier-stokes-announcement/

**Where it goes:** hard peg (the statement, the post, the 09-13 line) → the description. Structural (the four registers below; Buckmaster as the worked example, never the accused) → the script. ⛔ Never in the title or thumbnail; never name a lab in the title.

---

## Settled facts (not the debate)

**By the terms — every consumer tier is opt-OUT; every business tier is off by default**
- ★ OpenAI: "ChatGPT … improves by further training on the conversations people have with it, unless you opt out." "By default, we do not train on any inputs or outputs from our products for business users, including ChatGPT Team, ChatGPT Enterprise, and the API." "Chats from Temporary Chat won't … be used to train our models." (openai.com/policies/how-your-data-is-used-to-improve-model-performance)
- ★ **Codex has NO separate toggle.** OpenAI's Codex help page: "Your ChatGPT training data controls apply to content processed through Codex, including screenshots taken by Computer Use." Pro/Plus: "Conversations may be used to improve models unless you turn off training in ChatGPT data controls." (help.openai.com 11369540) — this resolves the dossier's F2 conflict; the viral "separate environments toggle" claim is not on OpenAI's page.
- ★ Anthropic (consumer): the Sept 2025 policy change covers "Claude Free, Pro, and Max plans, including when they use Claude Code from accounts associated with those plans"; "If you're a new user, you can select your preference in the signup process"; existing users had "until October 8, 2025 to accept the updated Consumer Terms"; retention "five years, if you allow us to use your data for model training" vs. a "30-day data retention period" otherwise (anthropic.com/news/updates-to-our-consumer-terms). ★ privacy.claude.com (10023580, updated 2026-03-16): "Your Incognito chats are not used to improve Claude, even if you have enabled Model Improvement"; feedback conversations kept "up to 5 years." ⚠ **Anthropic's own text says the choice is presented at signup; it does not say the toggle is pre-set ON.** Reporting (Axios, Bitdefender-class) says it is. Air it as "you choose at signup, and reporting says the box comes pre-ticked" — not as "defaults on."
- ★ Anthropic (commercial: Claude for Work, API, Gov): not used for training by default (privacy.claude.com 7996868, 2026-08-18).
- ★ Google: Gemini API free tier may be used to improve products and read by human reviewers; paid tier not; Cloud/Workspace carry a "Training Restriction". Google's own page: "Please don't enter confidential information that you wouldn't want a reviewer to see."

**Opting out of training does not opt out of retention or human eyes**
- ★ Anthropic: safety-flagged and feedback-flagged conversations kept up to 5 years regardless of the toggle; even under ZDR/HIPAA terms flagged content can be kept up to 2 years; ZDR excludes the Claude Enterprise/Teams interfaces themselves. ★ Google: reviewer-read chats kept up to 3 years, disconnected from the account, beyond the 18-month auto-delete. ★ OpenAI API: inputs kept up to 30 days for abuse monitoring by default; ZDR is opt-in per qualifying use case. ○ OpenAI's privacy policy lets it de-identify and then use or share, with no operational definition of "de-identified" — and a later opt-out does not claw back what was already de-identified.

**By the mechanism — what has happened to user inputs, on the record**
- ★ **2023-03-20, the Redis bug** (OpenAI's post-mortem, via proxy): for ~9 hours "some users [could] see titles from another active user's chat history" and "the first message of a newly-created conversation"; and for "1.2% of the ChatGPT Plus subscribers who were active during a specific nine-hour window," "another active user's first and last name, email address, payment address, credit card type and the last four digits (only) of a credit card number." Never full chats, never full card numbers.
- ★ **2025-07/08, share-to-search:** ChatGPT's opt-in "Make this chat discoverable" checkbox produced ~4,500 Google-indexed chats (○ Fast Company; the number never read in the original) and a researcher's scrape of nearly 100,000 (★ 404 Media); removed 2025-07-31. ○ ~370,000 Grok chats indexed with no warning; Bard links indexed in 2023; Meta AI's Discover feed publishes by design.
- ★ **2025-01, DeepSeek:** an unauthenticated ClickHouse database exposed >1 M log lines including plaintext chat history and API keys (Wiz).
- ★ **Litigation is a retention mechanism.** *NYT v. OpenAI*: OpenAI holds "tens of billions" of logs in the ordinary course; plaintiffs sought 120 M, **OpenAI itself proposed 20 M**; Magistrate Judge Wang ordered the full 20 M de-identified sample (2025-11-07, 12-05); **Judge Stein affirmed 2026-01-05**, privacy protected by the reduction, OpenAI's de-identification tool and the protective order. The May 2025 preserve-everything order was narrowed 2025-10-09; ZDR API, Enterprise and Edu customers were carved out throughout. (★ the order PDF.)
- ⚠ **None of these is a training leak.** A cache bug; a checkbox the user ticked (ChatGPT) or was never warned about (Grok); a misconfigured database; a court. Keep the mechanisms distinct on air.

**By the law — the paste itself can be the disclosure**
- ★ ***Trinidad v. OpenAI*** (N.D. Cal., 2026-01-05, CourtListener): a pro se plaintiff's DTSA claim dismissed **with prejudice** because developing her "protocols and frameworks" in ChatGPT required voluntarily sharing them with OpenAI (*Ruckelshaus v. Monsanto*) **and** she pleaded no reasonable secrecy measures. The court never reached training opt-outs or enterprise tiers. ⚠ Pro se, pleading stage, and partly a pleading failure — it is not a ruling that any AI input forfeits trade-secret status; no court has said whether an opt-out or an enterprise contract is a "reasonable measure." Troutman, Ropes & Gray, Foley Hoag and Keker now teach it as the caution; Foley Hoag stresses it rests on the reasonable-measures prong.
- ○ *United States v. Heppner* (S.D.N.Y., Rakoff, 2026-02-10): prompts to a public AI are neither privileged nor work product. ○ ABA Formal Op. 512 (2024-07-29) and Florida Bar Op. 24-1: a "self-learning" tool could reveal client information to other users — a bar-ethics concern, not a documented event.
- ★ **The contract caps what you can recover.** OpenAI Terms of Use (effective 2026-01-01): "you (a) retain your ownership rights in Input and (b) own the Output"; liability "WILL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID … DURING THE 12 MONTHS BEFORE THE LIABILITY AROSE OR ONE HUNDRED DOLLARS ($100)"; mandatory arbitration with a 30-day opt-out; no confidentiality clause. ★ Anthropic consumer terms: greater of six months' fees or $100, **no arbitration**, San Francisco courts (its Commercial Terms do require arbitration). ★ Google: greater of $200 or 12 months' fees. A free user has paid $0.

**The corporate record (for #90; briefly here)**
- ○ Economist Korea, 2023-03-30: three Samsung DS-division incidents in ~20 days — source code from a measurement-database program, yield/defect-detection code, and a transcribed internal meeting fed in for minutes; Samsung capped uploads at 1,024 bytes. ○ Amazon's lawyer warned staff ~2023-01-25 that ChatGPT output had been seen resembling internal material — a Slack warning, not a documented match. ○ Cyberhaven 2026: 39.7 % of AI interactions involve sensitive data — **222 companies' telemetry, "sensitive" defined by each customer's own labels**. ○ Harmonic: 4.37 % of 1 M prompts and ~22 % of 20 k files (Apr–Jun 2025, browser extension); 2025 full year 579,113 exposures in 22.46 M prompts, 16.9 % via personal accounts. Vendors sell the fix for the number they publish; sample sizes go on screen.

**Regulators**
- ○ South Korea's PIPC fined OpenAI **KRW 3.6 M (~$3,000)** over the Redis incident (2023-07-26). ○ Italy's Garante €15 M fine (2024-12-20) was **annulled** 2026-03-18 (Ireland's DPC has been lead authority since 2024-02-15) — never cite it as standing. ○ EDPB ChatGPT taskforce (2024-05-23): a legal basis is needed at every stage including training on prompts. ⚠ FTC's 2023 CID, CCPA/California AG, the Irish DPC, state AGs and mass arbitration: **not researched** — a gap, not evidence of inaction.

---

## The contested core (both steelmanned)

### GREEN — "The terms already protect you; every documented leak was a person or a checkbox"
- You agreed to it and you can un-agree: consumer opt-out exists on every product; Temporary/Incognito chats are excluded; business tiers are off by default with a DPA. Codex follows the same switch — there was one setting, and it covers everything.
- Every documented exposure is a *non-training* mechanism: a cache bug, a share checkbox, a misconfigured database, a court order. Not one is a model repeating one user's draft to another.
- OpenAI's strongest claim is checkable on its face: a training cutoff (July 3) before the drafts (August) cannot have learned them; "no specific user data was accessed."
- The methods differ (forced vs. the Euler unforced result; Bubeck; Altman: "appear to be different"); a working mathematician on Slashdot calls the theft case "very weak"; the Córdoba–Martínez-Zoroa route was known.
- What went wrong was people — a rumour, a public tweet, a race, a badly handled Sunday call. And the tool that "stole" from him is the tool that produced the result: ★ "a mathematician and an LLM model can now do all this work in a month … a Deep Blue–Kasparov moment."

### GOLD — "The exposure is real, and no setting covers all of it"
- **"Cannot rule out" was OpenAI's first answer**; "nothing after July 3" was the fifth, and every date in that chain is OpenAI's own. A viewer deciding tonight gets the first answer. And **"July 3" means nothing without a data-to-model latency** that nobody has published.
- **The consumer default is ON and most people never look**; Codex has no separate switch, so a coder who never opened ChatGPT's settings was training all along. ○ A third of what employees put in is sensitive; a sixth rides personal accounts.
- **Opting out is not opting out**: flagged content kept 5 years (Anthropic) / 3 years (Google) regardless; "de-identified" is undefined and irreversible; the API keeps 30 days.
- **"Deleted" is a UI state**: tens of billions of logs, 20 million produced to a court, preservation orders — the store outlives the chat.
- ***Trinidad***: the secret can be *legally gone the moment it is typed*, before the company does anything at all.
- **The mechanism that mattered in September was attention, not training** — a lab that learns what you are close to can spend ~130 B tokens in 88 hours to get there first (Tao's "strip-mining"). Whether it learns from your prompts or from a rumour, the exposure is identical **and no setting covers it**.

---

## The reframe — what the shouting gets wrong

The shouting says "did OpenAI steal a proof" — which Buckmaster refuses to claim and no evidence supports. The record answers a different question in **four registers that the argument keeps collapsing into one**: the **TERMS** permit training on consumer input and keep flagged content for years regardless of the toggle (a settings problem, fixable in a menu); the **MECHANISM** record is cache bugs, share links and litigation holds — retention, discovery and a misread checkbox, never a model repeating one user's draft to another; the **LAW** treats the paste itself as the disclosure, so the secret can be gone even if nothing ever leaks; and the **INCENTIVE** story, the one that actually happened, ran on a tweet and a rumour chain, not a training pipeline — and still ended with a lab that had a year of drafts in its logs declining, in the room, to say whether it trained on them. The data risk is real, boring and controllable. The attention risk is uncontrollable and the only one the peg evidences. Both are being argued as if they were the same thing.

### Both quietly agree
Nobody disputes that a consumer-tier paste is, by contract, a disclosure to a third party that can retain it (for years on the flag paths), hand it to a court, de-identify it by an undefined standard and, absent an opt-out, train on it — and nobody has shown that training has ever put one user's words in another user's output. The fight is over how much the gap between *permitted* and *demonstrated* should reassure you.

## Verdict framing (no winner — hand it to the viewer)
**Which risk are you actually carrying — DATA or ATTENTION?** Data has a checklist (the tier, the toggle, Temporary/Incognito, what never goes in). Attention has no setting: if the work is valuable enough that a lab would spend to beat you, the only control is who knows what you are doing. The close puts the four registers on screen with Buckmaster run through each, then hands the viewer the checklist and the question.

## Script traps
- Never "opt-in" for a consumer tier — every one is opt-OUT.
- Never "there was a Codex toggle he could have flipped" AND never "there was no way to stop it": the ChatGPT control covered Codex; his tier and whether he ever opened Data Controls are unknown.
- Never "OpenAI trained on his drafts" — unproven and disclaimed. Never "OpenAI proved it didn't" — self-report, uncorroborated.
- Never call the Redis bug, the Google indexing or DeepSeek a training leak. Three mechanisms, three words.
- Never "Trinidad means any AI input forfeits your trade secret" — pro se, pleading stage, no secrecy measures pleaded.
- Never "enterprise means zero retention" — ZDR is requested, carve-outs remain, no enterprise breach was searched for.
- Never gloss "de-identified" as "anonymised."
- Never say Anthropic's consumer toggle "defaults on" from Anthropic's own text — say the choice is at signup and reporting says pre-ticked.
- Never the €15 M Italian fine as standing. The Korean fine is ~$3,000 — say so.
- Never "it has never happened" for cross-user leakage — "no documented case was found."
- Never read Clay's "active" as doubt.
- Sam Altman said two sentences on the record; do not give him more.

## Open questions carried to the script
- The plausible lag between an ingested prompt and a deployed model — the number that makes "July 3" meaningful. Not found.
- Buckmaster's plan tier, and whether he ever opened Data Controls.
- Has any enterprise/ZDR contract been breached in practice? Not searched.
- Has anyone searched for and failed to find a cross-user regurgitation case? Not found.
- The FTC's 2023 investigation, the Irish DPC, California and mass arbitration — what did they produce?
- Anthropic's or NYU's institutional statement on the Alpöge/Buckmaster episode — none located.
