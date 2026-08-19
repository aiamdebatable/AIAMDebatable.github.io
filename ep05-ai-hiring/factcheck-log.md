# Fact-check log — "AI in hiring: ban it, or bind it?"

_Independent verification pass, run 2026-07-16 (web-sourced, not trusting the draft). A dedicated
research pass fetched primary/high-quality sources (Reuters, the EEOC, court filings and reporting on
Mobley v. Workday, the University of Washington audit studies, Bertrand & Mullainathan, NYC Local Law
144 studies, the EU AI Act) and produced a claim-by-claim table. Every numeric/named/dated claim on
screen or in the script is below. **fact_check.status: web-verified.**_

## Verdict summary
- **CONFIRMED:** every number and named case used on air.
- **CORRECTED:** none — the draft used only confirmed figures.
- **UNRESOLVED (deliberately excluded from the cut):**
  - "~14,000 opted into the Mobley collective" — single-source reporting → **not used**; the script says
    only that the case was allowed to proceed "as a group action."
  - "a billion+ rejected applications" — op-ed estimate, not a court finding → **not used**; the script
    says "across thousands of companies," which is supported by the tool's documented reach.
  - "82–83% of companies screen resumes with AI" — vendor-blog figure → **not used**; the stronger
    ResumeBuilder survey (~51% now, ~68% projected) was used instead.
  - A 2025 AI-interview-scoring study (rated women/older/Black candidates lower) — primary study not
    independently fetched → **not used**.

## Claim-by-claim

| Claim (as used) | Verdict | Source |
|---|---|---|
| ~51% of companies use AI in hiring (2024); ~68% projected by end of 2025; survey of ~1,000 leaders | CONFIRMED | ResumeBuilder survey |
| ~76% AI-written interview questions; ~69% AI candidate assessments (among adopters) | CONFIRMED | ResumeBuilder survey |
| ~67% of AI-hiring adopters admit their tools could introduce bias | CONFIRMED | ResumeBuilder survey |
| Amazon scrapped a recruiting AI (2018) that penalized "women's"; trained on ~10 yrs mostly-male resumes | CONFIRMED | Reuters (2018); AI Incident DB mirror |
| iTutorGroup EEOC settlement: $365,000; 200+ applicants auto-rejected by age; first EEOC AI-hiring settlement (2023) | CONFIRMED | EEOC newsroom |
| Mobley v. Workday (2025): federal court let a nationwide ADEA case proceed as a collective action; tool can act as employer's "agent" | CONFIRMED | SHRM; Miami Law Review |
| University of Washington audit (2024): 3M+ comparisons; 3 commercial LLMs; white names preferred 85% vs 9% Black; male 52% vs 11% female; Black-male names never favored over white-male | CONFIRMED | University of Washington news |
| GPT-4 ranked disability-related resumes lower; bias reduced via fairness fine-tuning (FAccT 2024) | CONFIRMED | UW CREATE |
| Bertrand & Mullainathan: white-sounding names got 50% more callbacks; a white name ≈ 8 extra years of experience | CONFIRMED | AEA (Am. Econ. Review) |
| Disparate impact: Title VII liability without intent; four-fifths (80%) rule is a "rule of thumb," not dispositive | CONFIRMED | Mayer Brown (EEOC guidance) |
| NYC Local Law 144 requires a published bias audit + candidate notice, but sets NO minimum ratio and certifies nothing | CONFIRMED | arXiv (Null Compliance study) |
| Under 5% of NYC employers published an audit (18 of 391 audits, 13 notices) | CONFIRMED | arXiv (Null Compliance study) |
| A US agency (EEOC) removed its AI-hiring technical-assistance guidance (Jan 2025) | CONFIRMED (recent/provisional) | Nat'l Law Review |
| The EU pushed its high-risk employment-AI obligations back (to Dec 2027) | CONFIRMED (recent/provisional) | Morgan Lewis |
| Mobley collective opt-in count (~14,000) | UNRESOLVED — **not used** | single-source reporting |
| "Billion+ rejected applications" scale figure | UNRESOLVED — **not used** | op-ed estimate |

## Provisional / "moves fast" caveats (stated in the episode)
- The close explicitly warns the law is moving fast: "a US agency just pulled its own AI-hiring
  guidance, and Europe pushed its rules back — the ground could shift in a year." Both are framed as
  the current status, not settled permanent law.

## Fairness audit
- **Topic-shape:** genuinely two-sided but on a NARROW axis, and the episode says so. That the tools
  can be biased is treated as settled (Amazon, the UW name study, the lawsuits); the debate is only
  *ban vs. bind*. Crucially, the episode also states the *human* baseline is badly biased
  (Bertrand & Mullainathan, 50% callback gap) — so neither "AI is uniquely evil" nor "AI is neutral"
  is allowed to stand. No fake balance.
- **Steelman parity:** each side gets a full opening (8) + rebuttal (4). Green's strongest authorities
  (the human-baseline gap, auditability, measurable bias-reduction, existing law) and Gold's (scale,
  the 85/9 name gap, <5% audit compliance, opacity, Amazon couldn't fix it) are all real. Each side's
  board entry carries its own honest caveat.
- **Identity ↔ stance rotation held:** vs Ep-4, debate genders flipped (Green now female Mara, Gold
  now male Andre); the researcher lead rotated to male (Cole); the judge rotated to female (Nia). And
  the stance↔gender pairing was deliberately alternated: Ep-4 put the "restrict" side on a woman
  (Kate), Ep-5 puts the "ban" side on a man (Andre). No demographic tracks a stance across the series.
- **No winner:** the judge hands the ban-vs-bind question to the viewer.

## Human sign-off
**Reviewed by Lucas on 2026-08-10** — he read the research brief and checked the sources behind the
claims above, and signed off the `validated` gate on that basis. This log is no longer a draft
produced under standing POC approval alone; a human has read it.

Later human gates remain open on their own terms: `narrated`, `reviewed` and `published` are each
still ✋ Lucas, and nothing here clears them.
