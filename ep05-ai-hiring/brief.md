# Research brief — "AI in hiring: ban it, or bind it?"

_The full research behind the episode. US-law focus, 2026. Every figure traces to `sources.md` and is
verified in `factcheck-log.md`. The regulatory picture is moving fast — treat agency/EU status as
current, not permanent._

## The question
When AI and automated tools help decide who gets hired, promoted, or fired, should the law **ban** them
from those protected decisions — or **require auditing and keep them**?

- **Side A — "Audit, Don't Ban":** the human baseline is worse and unmeasurable; a machine is the first
  thing you can actually audit.
- **Side B — "Ban the Black Box":** one biased model discriminates at a scale no manager can, and it's
  opaque to the people it rejects.

## Topic-shape verdict (honest)
Genuinely two-sided — **but on a narrow axis.** It is **not** contested that these tools *can* encode
discrimination; that's documented and settled. The real fight is comparative and empirical: **are
audited tools worse than the biased humans they replace, and can bias audits actually catch the harm?**
Both sides concede the human status quo is badly biased — so this is a debate about remedy and
detectability, not about whether bias exists.

## Settled facts (not the debate)
1. **Hiring is already automated.** ~51% of companies used AI in hiring in 2024 (survey of ~1,000
   leaders), projected ~68% by end of 2025; among adopters ~76% for interview questions, ~69% for
   candidate assessment — and ~67% admit their own tools could be biased.
2. **Real cases, named and priced.** Amazon scrapped a recruiting AI in 2018 that penalized the word
   "women's." iTutorGroup settled with the EEOC for $365,000 (200+ applicants auto-rejected by age),
   the first EEOC AI-hiring settlement. In 2025 a federal court let a nationwide age-bias case against
   Workday's software proceed as a collective action, holding the tool can act as the employer's "agent."
3. **The bias is demonstrated, not anecdotal.** A University of Washington audit ran 3M+ comparisons
   across three commercial LLMs: white-sounding names preferred 85% vs 9% for Black-sounding; male 52%
   vs 11% female; and Black-male names were *never* preferred over white-male names.
4. **Two loaded terms.** *Disparate impact* — a tool can be illegal with zero intent if the outcome
   hits a protected group harder; the four-fifths (80%) rule is a "rule of thumb," not a safe pass.
   *Bias audit* — NYC's Local Law 144 makes you publish a number but sets no minimum score, so a tool
   can be measurably biased and still "compliant" (under 5% of employers even complied).

## The contested core (both steelmanned)
**Audit, Don't Ban:** *compared to what?* Humans give white-sounding names 50% more callbacks
(Bertrand & Mullainathan) — that's the baseline a ban restores. A machine can be audited across
millions of decisions; a manager's gut can't. Measured bias can be *reduced* (a study cut a model's
disability bias by fairness fine-tuning). And the law already reaches these tools, so a ban is
redundant — fix the weak audit instead. *Caveat: today's audits are weak and widely ignored.*

**Ban the Black Box:** a biased model silently rejects the same kind of applicant across thousands of
firms at once — one flawed algorithm makes the same bad call a million times. The bias is proven (85 vs
9; Amazon's "women's" penalty). Audits have no teeth (<5% NYC compliance). And the system is opaque —
the rejected can't see or question it. Even Amazon, with every resource, couldn't fix its own and
killed it. *Caveat: a ban leaves hiring to the biased humans it admits are no better.*

## The reframe
Not a debate: that these tools *can* encode and amplify discrimination. The real fight is (1) the
*comparator* — are audited tools worse than the biased humans they replace? — and (2) *detectability* —
can audits catch the harm before it scales? NYC's <5% compliance suggests today's regime doesn't, but
that may be a fixable policy failure, not proof audits are impossible.

## Both quietly agree
The status quo is already badly biased, and outcomes should be **measured**. Side A cites the AI-bias
studies; Side B cites the human 50%-callback gap — both concede the human baseline discriminates. Both
ultimately want the same instrument: measurable adverse-impact testing. They disagree only on whether
it should *gate the machine* or *replace the machine*. Nobody defends unexamined gut-feel hiring.

## Verdict framing (no winner)
Both start from the same uncomfortable fact: hiring discriminates, with or without a computer. Ban says
the machine industrializes and hides the bias in a box we can't open; Bind says the human is the box
we've *never* been able to open, and the machine is the first version we can measure. The evidence
confirms the bias is real; it does not settle whether auditing beats banning. **You're the jury.**
