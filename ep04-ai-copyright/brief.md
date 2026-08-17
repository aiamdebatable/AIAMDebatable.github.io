# Research brief — "Training AI on copyrighted work: fair use, or theft?"

_The full research behind the episode. US-law focus, mid-2026. Every figure traces to `sources.md`
and is verified in `factcheck-log.md`. This area moves fast — several 2025 rulings are on appeal;
treat holdings as directional, not final._

## The question
When an AI company copies millions of copyrighted books, images, and articles — often without
permission or payment — to train a model, is that a lawful **"fair use,"** or infringement that owes
creators **consent and compensation**?

- **Side A — "Transformative Use":** the machine learns, it doesn't copy-to-resell.
- **Side B — "Consent & Compensation":** creators' work, creators' call, creators' cut.

## Topic-shape verdict (honest)
Genuinely two-sided — **but the fight has narrowed and is no longer 50/50 on every sub-question.** By
mid-2026, US courts largely hold that the **act of training** can be transformative and lean fair-use,
that **how the data was obtained** (piracy) is a separate, unexcused wrong, and they have left the
**decisive question — market harm/dilution — wide open.** So "training = automatic theft" is legally
weak, and "training = automatic fair use" is overclaimed. The live battleground is **factor four**.

## Settled facts (not the debate)
1. **Scale of ingestion.** The dominant text source, Common Crawl, is ~9.5 petabytes over 300B+ web
   pages; 80%+ of GPT-3's training text came from it. Models train on hundreds of billions up to ~20
   trillion tokens — whole works, not excerpts. ~45% of Common Crawl was material whose terms of
   service forbade for-profit AI training (2024 study).
2. **The litigation is real and large.** 70+ copyright suits against AI companies; 13 novelists sued
   Meta; the NYT sued OpenAI; April 2025 saw 12 OpenAI/Microsoft cases consolidated into one SDNY MDL.
3. **The piracy line is settled.** In *Bartz v. Anthropic* (June 2025) Judge Alsup split two questions:
   **what you do with the data** (train — "exceedingly transformative," likely fair use) vs **how you
   got it** (download 7M pirated books to keep — a separate wrong, headed to trial). Anthropic settled
   the piracy claim for **$1.5 billion** (~500,000 titles, ~$3,000/work). Nobody now defends the piracy.
4. **Two loaded terms.** "Transformative" means the training serves a *different purpose* than the book
   — not that the output looks different; the Copyright Office says competing-for-the-same-audience use
   is "at best modestly transformative." "Market dilution" (vs substitution) is a flood of AI work
   depressing demand for human work *as a class* — Judge Chhabria said it "will often cause plaintiffs
   to decisively win the fourth factor."

## The contested core (both steelmanned)
**Transformative Use:** a model isn't a stored copy (UK Getty ruling: Stable Diffusion "does not store
the training data itself"); two 2025 courts called training transformative; copying whole works can be
"reasonably necessary"; copyright never locked up ideas or style, only exact words; and a licensing
market is forming voluntarily (News Corp reported >$250M) — so fix bad data by licensing, don't ban
learning. *Caveat: leans on district-court rulings still under appeal.*

**Consent & Compensation:** the work was taken without consent; when the product competes with what it
learned from, fair use collapses (*Thomson Reuters v. Ross*: training a rival tool on Westlaw was NOT
fair use, on factor four); a flood of AI output dilutes creators' whole market; and a licensing market
already exists, so taking the rest for free isn't necessary. The Copyright Office rejected "inherently
transformative." *Caveat: the market-dilution harm hasn't yet won in court.*

## The reframe
No longer a debate: training *can* be transformative fair use; piracy is a distinct wrong; fair use is
never categorical. **The real fight is factor four — market harm, specifically dilution — which no
court has yet resolved on a full record.**

## Both quietly agree
Both sides behave as if a **licensing market is the destination** — AI firms signing nine-figure deals
concede paying is viable; creators signing them concede their work *can* be licensed rather than
withheld. And both agree (Bartz forced it) that **provenance matters** — nobody defends the piracy. The
fight has shifted from "should AI pay?" to "how much, for what, and on what terms — and does the law
force it, or the market?"

## Verdict framing (no winner)
The law is clear that a machine *learning* from a book isn't photocopying it to resell — and equally
clear that *stealing* the book is still stealing ($1.5B). What no judge has resolved is whether a flood
of AI work that shrinks the pool creators are paid from is a harm the law will recognize. So it isn't
"fair use vs theft" — it's "transformative training vs uncompensated market harm," and the courts
settled the first while leaving the second to be fought. **You're the jury.**
