# Fact-check log — Proof of Citizenship to Register: Should the State Take Your Word, Check Its Records, or Ask for Paper?

_Independent verification pass, run 2026-10-19 (web-sourced, not trusting the draft). Each claim gets a
verdict: **CONFIRMED**, **CORRECTED**, **UNRESOLVED** or **APPROXIMATE**. This is a REQUIRED gate, set
out under "Verification gate" in the episodes README. The show's differentiator is that this file is
real._

- **CONFIRMED** — the source says what the episode says.
- **CORRECTED** — the source says otherwise; the script was changed, and the change is listed under
  "Corrections applied to source" below. These stay in the file: they are the point of it.
- **UNRESOLVED** — could not be established from a source worth trusting, so it is not used on air.
- **APPROXIMATE** — checked, roughly right, and **deliberately not cited on air**. Not the same as
  UNRESOLVED: the claim was established, the *figure* just isn't precise enough to state. Use it when
  the direction is sound but a number would imply more precision than the source supports.

⛔ These four are the whole vocabulary. The site builder reads them to count the claims the public
site prints, and since package `HFIX` a verdict it does not recognise **fails the build** instead of
being skipped silently. A fifth verdict means changing both this file and the builder.

**Verification status:** adversarial-pass

---

**How this was checked.** A peg hunt first (2026-10-19): a blind sweep with every topic word banned
(citizenship, registration, every agency, statute, state and author in the scout brief), the Federal
Register's presidential documents for 2026-10-01 to 10-19 (14 documents, none on elections), and the
election-law trade indexes read by date; then targeted reads of the dockets it surfaced. Then the
deep-research-v3 engine (run wf_393b6e79-4a4: 41 agents, 4.04 million tokens; 31 findings; 12 claims
verified with the primary opened, all 12 held, 108 not adjudicated, 0 flagged; its critics named 18 gaps).
Then a two-way hand pass on the primary record, split by domain: **A, the outcome record** (noncitizens
found on the rolls in Utah, Georgia, Michigan, Ohio and Kansas; the burden on citizens in Kansas and New
Hampshire; the document-access survey and its critics; how reliable the citizenship databases are; every
comparator, recomputed); and **B, the law and the peg** (United States v. California, read from the
docket, the complaint, the TRO memo, both sworn declarations and the exhibits; Common Cause v. DOJ; the
Supreme Court's orders and the Mi Familia Vota question presented; the executive orders, the EAC and the
SAVE America Act; the state laws in Ohio, New Hampshire, Utah, Florida, South Dakota, Arizona and
California). Every primary relied on was downloaded and saved with its text extracted (PDFs with pypdf;
three image scans rendered and read as images), and is kept in the show's evidence archive (not part of
the published bundle). The main session then checked every relied-on quote against the saved copies:
151 of 151 for hand pass A, 145 of 145 for hand pass B. The hand passes overrule the engine wherever they
differ. After a pitch council on 2026-10-19 (its card lists what viewers ask that the research had not
answered), two top-up hand passes closed two of those gaps at the primary, **C, what the paper costs**
(passport and N-565 fees from the federal regulations, birth-certificate fees from five state offices,
free-copy rules) and **D, the polls and Oregon's licence-office error** (each pollster's own toplines;
Oregon's Secretary of State and DMV reports), and the main session found every relied-on quote in the
saved copies (39 of 39, 78 of 78). After Lucas validated the episode (2026-10-20) and asked that it take
seriously the fear that noncitizens could swing elections, a third top-up hand pass, **E, the closest
margins**, set the found counts against the closest recent races in the same states from official
results only (state canvasses and results files, the National Archives, the Clerk of the House) and
searched for any court or official finding that noncitizen votes changed an outcome; the main session
found every relied-on quote in the saved copies (65 of 65). Where only a secondary source could be reached, the entry says so. The scout brief was used as a
checklist of claims to test, never as a source.

**Counting rule:** one entry per claim the brief relies on or deliberately keeps off air. Parts 1–4 are
hand pass B's domain, parts 5–8 hand pass A's; part 9 holds engine claims no hand pass adjudicated, kept
off air; parts 10 and 11 are top-ups C and D; part 12 is top-up E. **Totals: 177 entries — CONFIRMED
125 · CORRECTED 22 · APPROXIMATE 12 · UNRESOLVED 18.**

**Reading the verdicts here.** "Secondary" in a CONFIRMED entry means the claim was checked against
reporting, because the primary could not be reached; the brief attributes those figures to their
reporter. APPROXIMATE entries are used, if at all, only as a direction or an attributed report, never as
a precise figure. UNRESOLVED entries are in the brief's "Off air" list. A CORRECTED entry states the
claim as it reached us; what the episode says instead follows. "Our arithmetic" marks the show's own
computation on a quoted figure. Every litigation status is as of 2026-10-19.

---

## Part 1 — What registering is today: the sworn box

## 1. The federal registration form makes you swear or affirm you are a citizen, under penalty of perjury, and warns you may be fined, imprisoned or deported
**CONFIRMED.** "I swear/affirm that: I am a United States citizen … under penalty of perjury. If I have
provided false information, I may be fined, imprisoned, or (if not a U.S. citizen) deported from or
refused entry to the United States." The form says "may", not "will".
- https://www.eac.gov/sites/default/files/eac_assets/1/6/Federal_Voter_Registration_ENG.pdf

## 2. Falsely claiming citizenship to register carries up to five years in prison; a noncitizen voting in a federal election up to one; and unlawful voting makes a noncitizen deportable
**CONFIRMED.** 18 U.S.C. 1015(f): "imprisoned not more than five years, or both". 18 U.S.C. 611(b):
"imprisoned not more than one year". 8 U.S.C. 1227(a)(6)(A): "Any alien who has voted in violation of any
Federal, State, or local … statute … is deportable."
- https://www.law.cornell.edu/uscode/text/18/1015
- https://www.law.cornell.edu/uscode/text/18/611
- https://www.law.cornell.edu/uscode/text/8/1227

## 3. A third federal law punishes "knowingly submitting a materially false registration application" with up to five years
**APPROXIMATE.** 52 U.S.C. 20511 carries up to five years, but it punishes depriving or defrauding "the
residents of a State of a fair and impartially conducted election process" by submitting applications
"known … to be materially false". The engine's paraphrase drops that element. Not paraphrased on air.
- https://www.law.cornell.edu/uscode/text/52/20511

## 4. California registers voters on a sworn statement, and its Secretary of State refused the Justice Department's request
**CONFIRMED.** Secretary of State's letter, 2026-10-15: "California requires all voter registration
applicants to attest to U.S. citizenship under oath, under penalty of perjury and by signature" and "I
will not disenfranchise thousands of Californians … based solely upon an unsupported and likely
inaccurate 'belie[f]' that certain voters are 'likely' non-citizens." A party's letter: quote it as
"California says".
- https://admin.cdn.sos.ca.gov/pdf/other/casos-to-doj-101526.pdf
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.7.pdf

## 5. California checks who you are against government records, but that check proves identity, not citizenship
**CONFIRMED.** The Justice Department's TRO memo: proof "is not required, so long as the applicant
self-attests to American citizenship under penalty of perjury" and "Although California verifies
identifying information against government records, such verification establishes identity, not
citizenship." DOJ's wording, a party's brief.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.2.pdf

## 6. In Ohio you give a licence number or the last four digits of your Social Security number and swear you are a citizen; the licence office keeps paper forms that need only that oath
**CONFIRMED.** Sixth Circuit stay order, p.2 (an image scan, read at the primary): applicants "must
provide … a driver's license number or the last four digits of a social security number. They also must
attest under penalty of perjury that they are U.S. citizens"; paper forms "require only an attestation of
eligibility".
- https://storage.courtlistener.com/recap/gov.uscourts.ca6.159891/gov.uscourts.ca6.159891.23.0.pdf

## 7. Ohio's new law requires documents to register at the licence office
**CORRECTED.** Ohio HB 54 restricts only the licence office's **electronic** offer: the worker must offer
to register you "by electronic means" only if you present, or earlier presented, proof of citizenship. A
citizen without proof gets the paper oath form instead of the screen. Ohio is not a documents-for-all
state. Say "Ohio's licence counter", and only for that narrow change.
- https://storage.courtlistener.com/recap/gov.uscourts.ca6.159891/gov.uscourts.ca6.159891.23.0.pdf

## 8. The Sixth Circuit let Ohio's law run for this election without deciding whether it breaks federal law
**CONFIRMED.** "Ohio appears primed to succeed in vacating the injunction on threshold grounds. Because
those grounds are sufficient to warrant entry of a stay, we need not address the merits of the district
court's NVRA analysis." Stay entered 2026-09-23.
- https://storage.courtlistener.com/recap/gov.uscourts.ca6.159891/gov.uscourts.ca6.159891.23.0.pdf
- https://www.courtlistener.com/docket/74762684/red-wine-blue-v-frank-larose/

## 9. The dissent called Ohio's law "antithetical to the NVRA"
**CORRECTED.** Not in the order (the peg hunt read all 21 pages). The usable dissent line: the NVRA is
"meant to facilitate, not hamper" registration.
- https://storage.courtlistener.com/recap/gov.uscourts.ca6.159891/gov.uscourts.ca6.159891.23.0.pdf

## Part 2 — The peg: United States v. California, and Common Cause v. DOJ

## 10. On October 15 the Justice Department sued California
**CONFIRMED.** Docket entry 1, 2026-10-15, C.D. Cal. No. 2:26-cv-12025. DOJ pleads 18 U.S.C. 611 and the
Supremacy Clause; California calls it "a single count Complaint".
- https://www.courtlistener.com/docket/74967108/america-v-california-state-of/
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.1.0.pdf

## 11. On October 19 it asked for a temporary restraining order, to be granted by November 3
**CONFIRMED.** Doc. 22 (entered 2026-10-19); the memo asks the court to "grant this relief by November 3,
2026". Status 2026-10-19: no judge assigned, no hearing set, no ruling; two groups moved to intervene on
California's side. Re-check the docket on publish day.
- https://www.courtlistener.com/docket/74967108/america-v-california-state-of/
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.2.pdf

## 12. It asks the court to make California set aside the listed people's mail ballots and verify their citizenship before counting them
**CONFIRMED.** "order California (1) to set aside vote-by-mail ballots from persons identified by the
Federal Government likely to be noncitizens and (2) to independently—or in collaboration with the Federal
Government—verify their citizenship status before tabulating their vote".
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.2.pdf

## 13. The list, delivered October 13, names just over 20,000 people statewide
**CONFIRMED.** HSI declaration ¶24: "that list of just over 20,000 individuals who HSI believes are (1)
registered to vote in California, (2) were sent a vote-by-mail ballot … and (3) are noncitizen aliens."
Los Angeles County calls it "20,000+ individuals … across the State of California".
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.3_1.pdf
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.7.pdf

## 14. In July federal officials told California there "may be as many as 190,832" noncitizens on its rolls
**CONFIRMED.** Exhibit A, letter of 2026-07-16: "there may be as many as 190,832 non-citizens registered
to vote in California". The letter says the analysis used "California's publicly available voter
registration database information".
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.1.1_1.pdf

## 15. Federal officials narrowed a preliminary list of more than 175,000 down to 20,000
**CORRECTED.** The 175,000 appears **only in DOJ's brief** (attorney argument). Neither sworn declaration
contains it or any intermediate count, and no filing links it to the July 190,832. If aired at all:
"DOJ's brief says", never a sworn or measured step.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.2.pdf
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf

## 16. The list was built by matching a copy of California's roll, as it stood in August 2025, against commercial data and immigration files, then scored and reviewed by hand
**CONFIRMED.** USCIS declaration ¶16: it "enhances that voter data through a reliable third-party data
analytics and … investigative platform", pairs it with an alien number "that may be the same individual",
and "scores and ranks the potential identity match … because the resulting data may be incomplete,
outdated, or mismatched"; ¶17 screens out people identifiable as citizens or deceased; ¶19 manual review
and "A second-level review". HSI ¶20–21: "what appeared to be the California voter roster", reflecting the
rolls "as of August 2025". California says it never shared its list with DHS.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.3_1.pdf

## 17. The California list was built outside the federal SAVE database
**CONFIRMED.** USCIS declaration ¶15: "This process is distinct from the Systematic Alien Verification
for Entitlements (SAVE) program." Complaint n.1: "done independent of SAVE".
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf

## 18. The filings give no error rate for the list; the only accuracy note is about 189 records with "minor data discrepancies"
**CONFIRMED.** Both declarations, n.1: "USCIS identified approximately 189 records with minor data
discrepancies that appear on the list of over 20,000 individuals". No error rate, validation sample or
accuracy test appears in the complaint, memo or declarations. The USCIS declaration (¶23) describes how many flagged
records get referred onward, not how many are right.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf

## 19. A further batch of more than 17,000 records is under review
**CONFIRMED.** USCIS declaration ¶23: "a separate batch of more than 17,000 voting records potentially tied to
noncitizens after an initial review of voter rolls". Initial review only.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf

## 20. DOJ calls the 20,000 "the floor"
**CONFIRMED.** Memo: "represents the floor of potential noncitizen California voters." The brief's word;
the declaration it cites does not use it.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.2.pdf

## 21. DOJ gave California 48 hours and asked it to set the ballots aside, not cancel them
**CONFIRMED.** Letter of 2026-10-13: "review the list within 48 hours … segregate—not cancel—those
individuals' vote-by-mail ballots". The letter states no number of names.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.1.3_1.pdf

## 22. Los Angeles County never opened the list, or, in DOJ's words, California refused to look at it
**CORRECTED.** The county's own letter of 2026-10-15 says it made "a cursory review of the Excel list DOJ
provided" by email, after the mailed USB drive arrived with "a sticky note with a handwritten password".
Neither "didn't open it" nor "refused to look" survives as fact; air both as competing claims or neither.
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.7.pdf
- https://www.justice.gov/opa/pr/justice-department-charges-28-foreign-nationals-california-election-crimes

## 23. The same day, DOJ charged 28 people, all green-card holders, all on the list; charged, not convicted
**CONFIRMED.** DOJ release, 2026-10-19: "All 28 foreign nationals charged are lawful permanent residents
(LPRs)"; "Each of the 28 defendants charged today appears on the list"; "All defendants are presumed
innocent until proven guilty". Charges differ by district. Never named. 28 of 20,000+ says nothing about
the list's accuracy in either direction.
- https://www.justice.gov/opa/pr/justice-department-charges-28-foreign-nationals-california-election-crimes

## 24. The 28 lied on the registration oath
**APPROXIMATE.** It is DOJ's allegation ("knowingly and willfully lied under oath in their voter
registration applications"), and in the Central District the charges are mainly false statements on
**naturalisation** applications. On air only as: "DOJ says 28 green-card holders lied on the oath; they
are charged, not convicted."
- https://www.justice.gov/opa/pr/justice-department-charges-28-foreign-nationals-california-election-crimes

## 25. A similar federal list in Nevada fell from about 16,000 names to none confirmed
**UNRESOLVED.** Only California's letter citing a newspaper; Nevada's own letter was not read.
- https://admin.cdn.sos.ca.gov/pdf/other/casos-to-doj-101526.pdf

## 26. The listed people are registrants that "federal immigration records flag" as likely noncitizens
**APPROXIMATE.** The sense holds, but the method is a match of a roster copy against commercial data and
immigration files, then scored (entry 16). Tighter: "people federal immigration agencies flag as 'likely
noncitizens' after matching a copy of the state's roll against their own and commercial data".
- https://storage.courtlistener.com/recap/gov.uscourts.cacd.1043513/gov.uscourts.cacd.1043513.22.4_1.pdf

## 27. On October 9 a federal court struck down the Justice Department's policy of running state voter lists through SAVE and pressing states to remove the people flagged
**CONFIRMED.** "The Court sets aside and vacates the Defendants' Voter List Maintenance Policy". Grounds:
no authority under the Civil Rights Act of 1960, the NVRA or HAVA; arbitrary and capricious; the Privacy
Act; the Paperwork Reduction Act. Constitutional claims not reached.
- https://storage.courtlistener.com/recap/gov.uscourts.dcd.291580/gov.uscourts.dcd.291580.52.0.pdf
- https://storage.courtlistener.com/recap/gov.uscourts.dcd.291580/gov.uscourts.dcd.291580.51.0.pdf

## 28. That court said DOJ failed to consider that its "citizenship records known to be unreliable" would lead to citizens being removed
**CONFIRMED.** "DOJ entirely failed to consider the risk that its use of citizenship records known to be
unreliable would lead the Civil Rights Division to demand that states remove U.S. citizens from their
voter rolls."
- https://storage.courtlistener.com/recap/gov.uscourts.dcd.291580/gov.uscourts.dcd.291580.51.0.pdf

## 29. DOJ appealed on October 16 and asked for a stay; none has been granted
**CONFIRMED.** D.C. Cir. No. 26-5362; response due 10-23, reply 10-26. The vacatur is in force as of
2026-10-19.
- https://www.courtlistener.com/docket/73218916/common-cause-v-us-department-of-justice/
- https://storage.courtlistener.com/recap/gov.uscourts.dcd.291580/gov.uscourts.dcd.291580.55.0.pdf

## 30. That ruling also reaches the California list
**UNRESOLVED.** DOJ's response on that question was due 10-19 and was not on the docket when read; DOJ
says the California list was built outside SAVE (entry 17). Open.
- https://www.courtlistener.com/docket/73218916/common-cause-v-us-department-of-justice/

## Part 3 — The Supreme Court, the President and Congress

## 31. In September the Supreme Court let the federal SAVE check run for now: if it cannot confirm you are a citizen, the agency must contact you and ask for proof
**CONFIRMED.** 26A308, 2026-09-25, per curiam, 6–3 (Justice Jackson dissenting, with Justices Sotomayor
and Kagan): "If the modified SAVE program is unable to confirm that an individual is a citizen, the agency
is required to contact the individual and request that he provide proof of citizenship to register or
remain registered to vote." It notes "individualized inquiries, which are permitted under federal law
during this period". A stay pending appeal, not a merits ruling.
- https://www.supremecourt.gov/opinions/25pdf/26a308_pok0.pdf

## 32. One plaintiff is a naturalised citizen whose Social Security record still does not show she is a citizen
**CONFIRMED.** The per curiam itself: "She has demonstrated that SSA records do not accurately reflect
that she is now a naturalized citizen." Never named (the order uses a pseudonym).
- https://www.supremecourt.gov/opinions/25pdf/26a308_pok0.pdf

## 33. Twenty-seven states use SAVE to check voters
**CONFIRMED.** The dissent: "Twenty-seven States currently use SAVE for that purpose." Attribute to the
dissent, citing the government.
- https://www.supremecourt.gov/opinions/25pdf/26a308_pok0.pdf

## 34. The Supreme Court hears RNC v. Mi Familia Vota on December 8
**CONFIRMED.** No. 25-1017: "Jun 29 2026 Petition GRANTED." "Sep 04 2026 SET FOR ARGUMENT on Tuesday,
December 8, 2026." The United States supports the petitioner.
- https://www.supremecourt.gov/docket/docketfiles/html/public/25-1017.html

## 35. That case decides whether a state may require documentary proof of citizenship to register
**CORRECTED.** Narrower. Question 1 is limited to people registering "with a state registration form";
question 2 is whether a state may cancel noncitizens' registrations within 90 days of a federal election.
The federal form stays governed by the 2013 ruling (entry 37). Say: "whether a state may require
documentary proof from people who register on the state's own form, and whether it may cancel
noncitizens' registrations within 90 days of an election."
- https://www.supremecourt.gov/qp/25-01017qp.pdf

## 36. Since August 2024 Arizona has been allowed to reject state-form applications that come without proof
**CONFIRMED.** Order 24A164: the injunction "stayed only to the extent it enjoins enforcement of Ariz.
Rev. Stat. Ann. § 16-121.01(C)"; denied as to the other provisions. Three justices would have granted in
full, four would have denied in full.
- https://www.supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/24a164.html

## 37. In 2013 the Supreme Court ruled 7–2 that a state cannot demand more than the federal form asks, while a state's own form may ask for more
**CONFIRMED.** Arizona v. Inter Tribal Council: the NVRA "precludes Arizona from requiring a Federal Form
applicant to submit information beyond that required by the form itself"; "These state-developed forms
may require information the Federal Form does not"; a state may try to show in court "that a mere oath
will not suffice".
- https://www.law.cornell.edu/supremecourt/text/12-71

## 38. Kansas's documents law was struck down: preempted for people registering at the licence office, and unconstitutional as a burden on the right to vote
**CONFIRMED.** Fish v. Schwab (10th Cir. 2020): "Kansas's DPOC law is preempted by section 5 of the NVRA"
(motor-voter applicants), and "the DPOC requirement unconstitutionally burdens the right to vote". Cert
denied 2020-12-14. Never "the NVRA bans proof of citizenship".
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110340452.pdf
- https://www.supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/20-109.html

## 39. In 2014 a federal appeals court held that states asking to add documents to the federal form must show that an oath is not enough
**CONFIRMED.** Kobach v. EAC (10th Cir.), quoting Inter Tribal Council: "a mere oath will not suffice".
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/01019337216.pdf

## 40. A March 2025 executive order told the Election Assistance Commission to require documents on the federal form
**CONFIRMED.** EO 14248 §2(a): "the Election Assistance Commission shall take appropriate action to
require … documentary proof of United States citizenship".
- https://www.whitehouse.gov/presidential-actions/2025/03/preserving-and-protecting-the-integrity-of-american-elections/

## 41. That part of the order has been struck down in two federal courts and is on appeal
**CONFIRMED.** D. Mass. (No. 1:25-cv-10810): summary judgment 2026-06-24, permanent injunction 2026-07-13,
appealed 2026-09-09 (1st Cir. No. 26-2038). D.D.C. (No. 1:25-cv-00946): closed 2026-03-31, on appeal.
The D.D.C. ruling dates were not opened at the primary: say "struck down in two federal courts, on
appeal", no dates.
- https://www.courtlistener.com/docket/69841778/state-of-california-v-trump/
- https://storage.courtlistener.com/recap/gov.uscourts.mad.282905/gov.uscourts.mad.282905.194.0.pdf

## 42. The First Circuit hears the government's appeal on December 9
**CORRECTED.** On 2026-10-19 the government moved to dismiss that earlier appeal (No. 25-1726) and the
court asked whether it is moot. The live appeal is No. 26-2038, from the final judgment. Cite no December
9 argument.
- https://www.courtlistener.com/docket/70994132/state-of-california-v-trump/

## 43. A second executive order on citizenship checks came in April 2026
**CORRECTED.** EO 14399, "Ensuring Citizenship Verification and Integrity in Federal Elections", was
signed 2026-03-31 and published in the Federal Register in April. It is the order DOJ's memo cites.
- https://www.whitehouse.gov/presidential-actions/2026/03/ensuring-citizenship-verification-and-integrity-in-federal-elections/

## 44. That order builds a federal "State Citizenship List" for states to check against; it does not require documents at registration, and states need not use it
**CONFIRMED.** EO 14399 §2(a) creates the "State Citizenship List"; being on it "does not indicate that
the individual has been properly registered to vote". The Supreme Court: "States are not required to use
the Lists."
- https://www.whitehouse.gov/presidential-actions/2026/03/ensuring-citizenship-verification-and-integrity-in-federal-elections/
- https://www.supremecourt.gov/opinions/25pdf/26a124_hgci.pdf

## 45. In August the Supreme Court let that order proceed for now, on standing and ripeness
**CONFIRMED.** 26A124, 2026-08-24, 6–3: "Two related doctrines of justiciability block the States' suit.
One is standing … The other is ripeness".
- https://www.supremecourt.gov/opinions/25pdf/26a124_hgci.pdf

## 46. The Election Assistance Commission, which writes the federal form, has no commissioners and cannot act
**CONFIRMED.** Congressional Research Service, 2026-09-21: "No EAC commissioners are currently in
office." The EAC's own page lists only former commissioners.
- https://www.congress.gov/crs-product/IF13316
- https://www.eac.gov/about/commissioners

## 47. The House passed the SAVE America Act 218 to 213 in February
**CONFIRMED.** House roll call 69, 2026-02-11, on S. 1383 as amended: 218 yea, 213 nay.
- https://clerk.house.gov/evs/2026/roll069.xml

## 48. It would bar registration for federal elections, federal form included, without documentary proof, and mail registrants would have to show the document in person
**CONFIRMED.** "shall not be registered to vote in an election for Federal office unless— (A) the
applicant presents documentary proof of United States citizenship in person to the office of the
appropriate election official".
- https://www.govinfo.gov/content/pkg/BILLS-119s1383eah/html/BILLS-119s1383eah.htm

## 49. It has a narrow fallback: an oath plus other evidence, judged by an official
**CONFIRMED.** An applicant who cannot provide proof "may, if the applicant signs an attestation under
penalty of perjury … submit such other evidence … and such official shall make a determination". An oath
plus evidence, decided by an official, not an oath alone.
- https://www.govinfo.gov/content/pkg/BILLS-119s1383eah/html/BILLS-119s1383eah.htm

## 50. Under that bill a REAL ID, which most people already have, would count as proof
**CORRECTED.** Only a REAL ID "that indicates the applicant is a citizen of the United States" counts.
An ordinary REAL ID needs a birth certificate or naturalisation papers beside it. Whether any state's
standard REAL ID marks citizenship was not established.
- https://www.govinfo.gov/content/pkg/BILLS-119s1383eah/html/BILLS-119s1383eah.htm

## 51. The bill is stalled in the Senate
**CONFIRMED.** Two cloture votes failed in March 2026 (49–41 and 53–47); no later action as of
2026-10-19. A bill, not law.
- https://www.govinfo.gov/bulkdata/BILLSTATUS/119/s/BILLSTATUS-119s1383.xml

## Part 4 — The states

## 52. A federal judge ruled on New Hampshire's law on May 29
**CORRECTED.** The order was filed 2026-05-28.
- https://www.courtlistener.com/docket/73518816/new-hampshire-youth-movement-v-scanlan/
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 53. That ruling restored the sworn affidavit as a way to prove citizenship; it did not decide whether requiring proof is constitutional
**CONFIRMED.** "The court is not deciding in this case whether it is constitutional for New Hampshire to
require voters to prove their citizenship"; "eliminating the affidavits constitutes an unjustifiable
burden on the right to vote". The court: the affidavit is not "an exception to the proof-of-citizenship
requirement". So New Hampshire is documents **or** a sworn affidavit.
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 54. The First Circuit refused to pause that ruling in September
**CONFIRMED.** Order of 2026-09-04: the state had "not shown that the equities and public interest justify
a stay", noting its "relatively leisurely pursuit of a stay". The merits await the appeal.
- https://www.courtlistener.com/docket/73518816/new-hampshire-youth-movement-v-scanlan/

## 55. While the affidavit was gone, New Hampshire offered no provisional ballot
**CONFIRMED.** "New Hampshire also did not permit provisional balloting".
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 56. Utah's new law counts a match in state or federal records as proof; whoever stays unconfirmed gets a ballot with federal races only
**CONFIRMED.** HB 209: from elections "on or after November 1, 2026", "only a voter who has … provided
… documentary proof of United States citizenship may vote a standard ballot"; otherwise "may only vote a
federal ballot". Proof includes "a Utah driver license number that verifies United States citizenship"
and "verification of citizenship from the Systematic Alien Verification for Entitlements … program".
- https://le.utah.gov/Session/2026/bills/enrolled/HB0209.pdf

## 57. Florida has passed a documents law that takes effect in January 2027, and it is being challenged in federal court
**CONFIRMED.** HB 991: "this act shall take effect January 1, 2027"; approved 2026-04-02 (Chapter
2026-26). Federal suits were filed and consolidated. What exactly the law requires at registration was
not read at the primary: say only this much.
- https://www.flsenate.gov/Session/Bill/2026/991
- https://www.courtlistener.com/docket/73290617/florida-state-conference-of-branches-and-youth-units-of-the-naacp-v-byrd/

## 58. The Florida suits: who sued, which court, what stage
**APPROXIMATE.** Consolidated 2026-05-20 in the Southern District; no preliminary-injunction ruling found,
but the lead docket would not load and the complaint was not read. Air nothing beyond "being challenged".
- https://www.courtlistener.com/docket/73127554/florida-state-conference-of-branches-and-youth-units-of-the-naacp-v-byrd/

## 59. In South Dakota a new registrant without proof is registered as a "federal voter"
**CONFIRMED.** Order of 2026-09-18: "A new voter registration applicant who does not provide proper DPOC
information is registered as a 'federal voter.'" The suit there challenged the notice letters, not the
rule; the state fixed the letters and the injunction request was denied as moot.
- https://storage.courtlistener.com/recap/gov.uscourts.sdd.86897/gov.uscourts.sdd.86897.47.0.pdf

## 60. Arizona runs two tracks: documents for a full ballot; an oath alone gets you federal races only
**CONFIRMED.** Arizona Supreme Court, 2024-09-20: voters who "attest under penalty of perjury that they
are United States citizens, but who do not provide DPOC, are registered as 'federal only' voters."
- https://www.azcourts.gov/Portals/0/201/ASC-CV240221%20-%209-20-2024%20-%20FILED%20-%20DECISION%20ORDER.pdf

## 61. In 2024 a coding error at Arizona's licence agency marked about 218,000 long-time voters as having proved citizenship when they had not
**CONFIRMED.** First 97,928 (the Arizona Supreme Court); then "approximately 218,000" (Secretary of State,
2024-09-30). Say "about 218,000", not the scout's "about 200,000".
- https://azsos.gov/news/849

## 62. Arizona's top court refused to move those voters to federal-only ballots before the election
**CONFIRMED.** "we are unwilling on these facts to disenfranchise voters en masse from participating in
state contests", citing due process and Purcell.
- https://www.azcourts.gov/Portals/0/201/ASC-CV240221%20-%209-20-2024%20-%20FILED%20-%20DECISION%20ORDER.pdf

## 63. California's Proposition 39 would also require proof of citizenship at registration
**CORRECTED.** It adds no documentary proof at registration. It is ID at the polls and on mail envelopes,
plus "best efforts to verify citizenship attestations using government data", reported county by county.
⛔ No verdict on Prop 39.
- https://vig.cdn.sos.ca.gov/2026/general/pdf/prop39-text-proposed-laws.pdf
- https://voterguide.sos.ca.gov/propositions/39/analysis.htm

## 64. Proposition 39 is on California's November 3 ballot
**CONFIRMED.** Official voter guide: "California General Election November 3, 2026 … PROP 39".
- https://voterguide.sos.ca.gov/propositions/39/

## Part 5 — Noncitizens found on the rolls

## 65. Utah checked 2,069,640 voter records and found 27 confirmed noncitizens, about 1 in 77,000
**CONFIRMED.** Lt. Governor's review, 2026-05-27: "our office reviewed 2,069,640 voter records";
statewide totals 2,063,827 verified, 5,007 unconfirmed, 27 confirmed noncitizens, 25 probable (99.72%,
0.24%, 0.0013%, 0.0012%). Our arithmetic: 2,069,640 ÷ 27 = 76,654. The unit is records (active and
inactive), not voters. With the 25 probable: about 1 in 40,000.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf
- https://le.utah.gov/interim/2026/pdf/00002767.pdf

## 66. Licence records confirmed about 2 million at once; SAVE then cleared most of the rest; a hand review left 5,007 unconfirmed
**CONFIRMED.** "1,995,829 records confirmed as citizens ● 73,811 records not confirmed"; SAVE "71,256
records checked … 62,339" confirmed, 8,917 to manual review; "remaining 10,718 unconfirmed records"
(5,659 + 5,007 + 27 + 25 = 10,718).
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 67. Fourteen of Utah's 27 ticked "No, I am not a citizen" and were registered anyway
**CONFIRMED.** "Citizenship Box Marked No (Should not have been registered) 14 · Marked Yes (Subsequently
notified clerk they are not a citizen) 12 · Unmarked (Signed affidavit) 1".
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 68. Utah checked whether its 27 had voted but gives no count
**CORRECTED.** The report tabulates it: 13 of the 27 had voted at some point, 14 had not; the earliest
vote shown is 2018 (not 2016, as the scout had it). Separately, 9 of the 25 probable had voted.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 69. Most of Utah's 27 registered on paper, none through the licence office, and the licence office's own records already said "not a citizen" for 19 of them
**CONFIRMED.** "Registration Method Paper 18 Online 9 DLD 0"; "DLD Citizenship Indicator Not a citizen
19"; "Paper forms are the most common method for noncitizens to use for registration."
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 70. Thirty-four of Utah's confirmed or probable noncitizens ticked "Yes"
**CONFIRMED.** "Thirty-four of the confirmed or probable noncitizens checked the box 'Yes'" (12 of 27, 21
of 25, plus one marked both).
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 71. Utah says its records are reliable for confirming a citizen, and "not reliable in indicating an individual was not a citizen, without considering other factors"
**CONFIRMED.** "reliable in confirming whether an individual is a citizen, it was not reliable in
indicating an individual was not a citizen, without considering other factors." "Can't prove a negative"
appears in no source; use Utah's words.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 72. Of Utah's 5,007 unconfirmed, more than half say they were born in the United States, and about 2,000 are old records imported decades ago; all signed the affidavit
**CONFIRMED.** "Place of Birth USA 2,936 · Non-USA 1,393 · Not provided 678"; "Approximately 2,000 of the
unconfirmed records resulted from older voter records … imported … more than 20 years ago"; "All
individuals signed the affidavit". Birthplace is self-reported, not proof.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 73. Utah had about 185 unconfirmed registrants for every confirmed noncitizen; by October, about 160 federal-only ballots for each
**CONFIRMED.** Our arithmetic: 5,007 ÷ 27 = 185; 4,307 ÷ 27 ≈ 160. "Unconfirmed" is not "citizen": say so
beside the figure.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf
- https://utahnewsdispatch.com/2026/10/15/utah-voters-need-to-prove-citizenship-under-new-law-fewer-than-2000-responded/

## 74. In October Utah wrote to about 6,200 voters; about 1,800 proved citizenship, 488 of them found in state birth records; 4,307 were mailed ballots with federal races only
**CONFIRMED.** Secondary: Utah News Dispatch, 2026-10-15, citing the Lt. Governor's office: "at least
6,191", "only 1,827 have responded and confirmed", "488 were able to be verified using state vital
records", "57 … requested to be removed", "4,307, were sent a ballot in the mail this week with only
federal congressional races". 6,191 − 1,827 − 57 = 4,307. No release from the office itself was found;
attribute on air.
- https://utahnewsdispatch.com/2026/10/15/utah-voters-need-to-prove-citizenship-under-new-law-fewer-than-2000-responded/

## 75. What happened to Utah's 25 probable noncitizens after their 30 days
**UNRESOLVED.** No source found.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 76. Georgia's 2024 check found 20 noncitizens among 8.2 million registrants, about 1 in 410,000; nine had voted in earlier elections; they surfaced through jury-duty statements
**CONFIRMED.** Secondary (the state's release would not load): AP, "20 of the 8.2 million people
registered … are not U.S. citizens"; "nine of the 20 had voted in previous elections"; they "had filled out
a sworn statement saying they were not citizens to get out of jury duty". Our arithmetic: 8,200,000 ÷ 20 =
410,000. A floor tied to jury records, not a full sweep.
- https://www.wuga.org/local-news/2024-10-23/georgia-citizenship-audit-finds-few-noncitizens-on-voter-rolls
- https://cobbcountycourier.com/2024/10/georgia-gop-secretary-of-state-reports-audit-found-20-noncitizens-registered-to-vote-out-of-8-2m/

## 77. Two Georgia newsrooms gave different numbers for the same 2026 audit
**CORRECTED.** They report two different counts. The state auditor found about 2,570 potential
noncitizens ever put on the rolls through administrative failures, 407 with a voting history (WSB-TV);
the Secretary of State's own SAVE review found 432 potential noncitizens who had voted at some point since
1996 (AJC's "about 430"). Neither is a count of confirmed noncitizens.
- https://www.wsbtv.com/news/local/georgia-voter-rolls-more-than-999-accurate-407-potential-non-citizens-cast-ballots-audit-finds/4WPJEOQWUFHF3FNPZXTSTT24PM/
- https://sos.ga.gov/news/state-audit-proves-georgia-national-leader-clean-voter-lists

## 78. Georgia's state auditor traced about 2,570 potential noncitizens on the rolls to administrative failures, including workers coding immigration documents as proof of citizenship
**CONFIRMED.** Secondary (the audit report itself was not found): WSB-TV, "about 2,570 potential
non-citizens had, at some point, been placed in active or inactive voter status because of administrative
failures … 407 of those registrations had a voting history"; "workers sometimes misclassified immigration
documents as proof of citizenship, improperly coded non-citizens as U.S. citizens".
- https://www.wsbtv.com/news/local/georgia-voter-rolls-more-than-999-accurate-407-potential-non-citizens-cast-ballots-audit-finds/4WPJEOQWUFHF3FNPZXTSTT24PM/

## 79. Georgia's Secretary of State found 432 potential noncitizens who had voted at some point since 1996
**CONFIRMED.** Release of 2026-09-01: "432 potential noncitizens who have voted at some point since 1996
… 204 had already been moved to 'Pending Citizenship'". Potential, not confirmed.
- https://sos.ga.gov/news/state-audit-proves-georgia-national-leader-clean-voter-lists
- https://www.ajc.com/politics/2026/09/the-hunt-for-noncitizen-georgia-voters-yields-few-results/

## 80. Georgia's rolls are "99.9% accurate" on citizenship
**APPROXIMATE.** The release's headline. The finding behind it is an upper bound of 0.1% across three
problem types (identity, address, eligibility), not a citizenship error rate. Not aired.
- https://sos.ga.gov/news/state-audit-proves-georgia-national-leader-clean-voter-lists

## 81. The Georgia state auditor's report itself
**UNRESOLVED.** Not found (the auditor's pages returned 404). Only the release and press coverage were
read.
- https://www.audits2.ga.gov/reports/performance-audits/voter-registration-and-list-maintenance/ (returned 404 when tried, 2026-10-19)

## 82. Michigan matched 7.9 million driving records against its rolls and found 15 apparent noncitizens who voted in 2024; with one earlier case, 0.00028% of more than 5.7 million ballots
**CONFIRMED.** "identified 15 people who appear to be non-U.S. citizens and cast a ballot in the 2024
General Election"; "These cases, along with the single case identified in October 2024 … represent
0.00028% of the more than 5.7 million votes cast". Apparent, not proven.
- https://content.govdelivery.com/accounts/MISOS/bulletins/3da48fb

## 83. Michigan's rate is about 1 in 380,000 ballots
**CORRECTED.** 0.00028% is **16** cases (the 15 plus the October 2024 case). Our arithmetic: 5,700,000 ÷
16 = 356,250. Say "16 of more than 5.7 million ballots, about 1 in 360,000". A per-ballot rate, not per
registrant.
- https://content.govdelivery.com/accounts/MISOS/bulletins/3da48fb

## 84. Michigan's Attorney General later charged five of them
**CONFIRMED.** Secondary: Michigan Advance, 2026-08-14: "Five non-citizens allegedly voted in the 2024
general election" were charged. Charged, not convicted; never named.
- https://michiganadvance.com/2026/08/14/ag-charges-five-non-citizens-who-allegedly-voted-in-michigans-2024-general-election/

## 85. Ohio referred 597 apparent noncitizens in August 2024, 138 of whom had voted, out of more than 8 million registered
**CONFIRMED.** Secondary (the state's pages blocked access): AP, "referred for possible prosecution 597
apparent noncitizens"; "138 were found to have cast ballots and 459 registered but did not vote"; "More
than 8 million people are registered to vote in Ohio." A referral is not a finding.
- https://www.wosu.org/politics-government/2024-08-22/ohio-finds-597-noncitizens-who-voted-or-registered-recently-a-fraction-of-its-electorate

## 86. Ohio charged one of 521 referred noncitizens, according to the Ohio Capital Journal
**CORRECTED.** The text found is WVXU's analysis of 2024-05-22: "referred 521 non-citizens for possible
prosecution. Of those, only one was charged". A May 2024 snapshot; AP's December 2024 count (9 indicted
of 621 referrals over 10 years) is a later snapshot, not a conflict.
- https://www.wvxu.org/politics/2024-05-22/analysis-ohio-non-citizens-registered-voters-frank-larose
- https://www.adn.com/nation-world/2024/12/16/republicans-stoked-fears-of-voting-by-noncitizens-ohios-experience-show-how-the-rhetoric-diverged-from-reality/

## 87. In Ohio, hundreds referred, a handful charged
**APPROXIMATE.** Direction only, with the date: 1 charged of 521 referred (May 2024); 9 indicted of 621
referred over ten years (December 2024). No single count to state.
- https://www.wvxu.org/politics/2024-05-22/analysis-ohio-non-citizens-registered-voters-frank-larose
- https://www.adn.com/nation-world/2024/12/16/republicans-stoked-fears-of-voting-by-noncitizens-ohios-experience-show-how-the-rhetoric-diverged-from-reality/

## 88. Kansas claimed 129 cases and filed zero criminal complaints
**CONFIRMED.** Fish v. Kobach findings: "despite claiming to have located 129 instances of noncitizen
registration in Kansas, Defendant has filed zero criminal complaints against noncitizens for registering
to vote."
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## Part 6 — Kansas: documents for everyone, 2013–16

## 89. Kansas's documents rule blocked 31,089 applicants, about one in eight new registrations
**CONFIRMED.** "31,089 total applicants who were denied registration for failure to provide DPOC, 16,802
of whom applied through the DOV"; "Canceled or suspended applicants represented 12.4% of new voter
registrations between January 1, 2013 and December 11, 2015." "Applicants", not proven citizens (entry 93).
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110340452.pdf

## 90. Over 19 years, at most 67 noncitizens registered or tried to; 39 got on the rolls under the oath, before the law, and 28 were stopped by it
**CONFIRMED.** "at most, 67 noncitizens registered or attempted to register in Kansas over the last 19
years"; "39 successfully registered to vote despite the attestation requirement … and 28 noncitizens
attempted to register to vote after the DPOC law was passed but were thwarted by operation of that law."
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## 91. The 39 under the oath were 0.002% of Kansas's registered voters, about 1 in 45,000 over 14 years
**CONFIRMED.** "This is but .002% of all registered voters in Kansas as of January 1, 2013 (1,762,330)."
Our arithmetic: 1,762,330 ÷ 39 ≈ 45,000. The court also gives .004% for the 67 and .09% for the 28
against the canceled or suspended.
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## 92. Kansas blocked about 460 applicants for every noncitizen found
**CORRECTED.** 31,089 ÷ 67 mixes periods: 39 of the 67 registered under the oath, before the law. Like for
like, only 28 noncitizens tried during the documents law. Our arithmetic: 31,089 ÷ 28 = 1,110. Say
"about 1,100 applicants blocked for each noncitizen the law stopped", and "applicants", not citizens.
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## 93. The court found more than 99% of the blocked applicants were citizens
**CORRECTED.** The district court's own finding is "the clear majority of those suspended or canceled are
in fact United States citizens" and "less than 1% have been confirmed to be noncitizens". "More than 99%"
is the court taking the state's expert's 0.7% estimate at face value (the Tenth Circuit repeats it). On
air: "fewer than 1 in 100 were confirmed noncitizens; the court found the clear majority were citizens".
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110340452.pdf

## 94. The judge wrote: "there is no iceberg; only an icicle, largely created by confusion and administrative error"
**CONFIRMED.** Verbatim; and the law deterred "substantially more eligible Kansans than it has prevented
ineligible voters from registering to vote."
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## 95. Record-keeping errors could explain many, perhaps most, of the 39; the rolls held 100 people with 19th-century birth dates
**CONFIRMED.** Tenth Circuit: "'administrative anomalies' could account for the presence of many—or
perhaps even most—of them"; "100 individuals with purported birth dates in the 19th century".
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110340452.pdf

## 96. There was little evidence on how many blocked applicants actually held the documents; the state's claim that they could easily fix it was "sheer speculation"
**CONFIRMED.** "[t]here was little admissible evidence presented at trial about the rate of DPOC
possession by suspended and canceled applicants"; "The Secretary's argument, in contrast, is based on sheer
speculation".
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf
- https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110340452.pdf

## 97. About 71% of Kansas's suspense list were still stuck 11 weeks later
**APPROXIMATE.** The opinion gives 22,814 as 70.9% in one place and as 22,814 of 35,314 (64.6%) in
another; an 11-week snapshot. Not aired.
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## Part 7 — New Hampshire, and who has the documents

## 98. A New Hampshire voter in Derry was sent home because her birth certificate carried her maiden name
**CORRECTED.** In neither the New Hampshire Bulletin article nor the 98-page trial order. Replaced by the
court-recorded cases (entries 101–103).
- https://newhampshirebulletin.com/2025/11/21/after-123-voters-turned-away-at-municipal-elections-advocates-criticize-proof-of-citizenship-law/

## 99. The court recorded at least 146 people turned away for lack of documents in 2025, from observers at about 20 of more than 100 towns; the state did not count
**CONFIRMED.** At least 49 (March, plus 55 for unconfirmed reasons), at least 7 (May), at least 90
(September–November, "overwhelmingly" for lack of proof); "The state did not track those numbers"; "only
approximately 20 polling locations out of more than 100 towns". Our arithmetic: 49 + 7 + 90 = 146, a
floor.
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 100. At least 244 were turned away in New Hampshire in 2025
**CONFIRMED.** As an advocacy group's tally only: "at least 244 people were turned away in 2025, the group
says." Not in the court record; never "official". Prefer entry 99.
- https://newhampshirebulletin.com/2025/11/21/after-123-voters-turned-away-at-municipal-elections-advocates-criticize-proof-of-citizenship-law/

## 101. The court found the name-match rule falls on women 15 times as often as on men
**CONFIRMED.** "the requirement that a voter's DPOC matches … her current name affects women more than men
at a 15:1 ratio." The findings' narrower wording (out-of-state marriage and divorce records) is also the
court's.
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 102. Women were turned away because their documents carried a maiden name; one recently divorced woman never came back; three others got on the rolls months later with marriage licences
**CONFIRMED.** "four individuals, all women, who … were not allowed to register because they did not
possess name-change documentation"; "a recently divorced woman who had changed her name back to her maiden
name … she did not return"; three women "eventually able to register … in January 2026 by providing their
birth … certificates and marriage licenses." Never named.
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 103. A naturalised citizen with a U.S. passport was wrongly told he also needed his naturalisation papers
**CONFIRMED.** "was not allowed to register to vote despite presenting a United States passport … The
town clerk incorrectly told him that he was required to present his naturalization papers". The order
names him; the script must not.
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 104. A plaintiffs' expert estimated thousands of eligible New Hampshire voters have no acceptable document, and many more cannot get theirs within a day
**CONFIRMED.** As the plaintiffs' expert's estimate: "between 5,433 and 31,291 eligible New Hampshire
voters do not possess acceptable DPOC at all" (up to 59,583); "between 89,934 and 153,213 cannot retrieve
their documents within one day."
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 105. New Hampshire made certified birth records free for voting in October 2025; four months later 21 had been issued
**CONFIRMED.** "town and city clerks can now issue free certified copies of New Hampshire vital records
for voter registration purposes only" (from 2025-10-17); "As of February 18, 2026, 21 free certified
copies of vital records had been issued for voting purposes."
- U.S. District Court for the District of New Hampshire, New Hampshire Youth Movement v. Scanlan, No. 24-cv-291-SE, 2026 DNH 062 P (saved copy)

## 106. About 1 in 11 adult citizens, 21.3 million, couldn't lay hands on a citizenship document by tomorrow
**CONFIRMED.** "Over 9% of voting-age citizens, or 21.3 million people, cannot readily access documentary
proof of citizenship"; "ready" means they "could quickly find it if [they] had to show it tomorrow".
9.1% ≈ 1 in 11.
- https://cdce.umd.edu/sites/cdce.umd.edu/files/pubs/Voter%20ID%20survey%20Key%20Results%20June%202024.pdf
- https://www.brennancenter.org/our-work/analysis-opinion/213-million-american-citizens-voting-age-dont-have-ready-access

## 107. 3.8 million have no citizenship document at all, about 1 in 50
**CORRECTED.** The survey says "just under 2%", but its own counts give 3.8 million of about 234 million
voting-age citizens (21.3 million ÷ 0.091): 1.6%, **about 1 in 60**. Say "about 1 in 60" or "fewer than
1 in 50". The 3.8 million are a subset of the 21.3 million.
- https://cdce.umd.edu/sites/cdce.umd.edu/files/pubs/Voter%20ID%20survey%20Key%20Results%20June%202024.pdf

## 108. The survey asked 2,386 adult citizens in 2023; it did not ask about marriage certificates, so its figure for women is a lower bound; its sponsors are voting-access groups
**CONFIRMED.** "The sample of 2,386 respondents was drawn from SSRS's probability panel"; margin of error
"± 2.6%"; "the estimate for females should be viewed as a lower bound … We did not ask about access to
marriage certificates". Sponsors: VoteRiders, Public Wise, the University of Maryland's CDCE and the
Brennan Center.
- https://cdce.umd.edu/feature/which-us-citizens-lack-easy-access-documentary-proof-citizenship
- https://www.brennancenter.org/our-work/analysis-opinion/millions-americans-dont-have-documents-proving-their-citizenship-readily

## 109. No published critique of the 2023 survey exists; the "tomorrow" wording was attacked in its 2006 predecessor; an independent measure comes out higher, not lower
**CONFIRMED.** Heritage (2011, on the 2006 survey): "By asking whether such ID could be found 'quickly' or
shown 'tomorrow,' the study seems to be trying to elicit a particular response." PolitiFact (2026-03-20)
rated the 9% claim "Mostly True". The Bipartisan Policy Center, using a different survey: "About 12% of
registered voters do not have ready access to the types of documentation most likely to satisfy federal
documentary proof proposals … 28.4 million", asking "only whether respondents can easily locate their
birth certificate".
- http://web.archive.org/web/20140111153937/http://www.heritage.org/research/reports/2011/08/without-proof-the-unpersuasive-case-against-voter-identification
- https://politifact.com/factchecks/2026/mar/20/tammy-duckworth/save-america-act-voter-id-drivers-licenses-real-id/
- https://bipartisanpolicy.org/article/do-documentary-proof-of-citizenship-requirements-disadvantage-one-party-more-than-the-other/

## Part 8 — How reliable the records are

## 110. In a 2006 audit, about 7 in 100 Social Security records marked "non-citizen" belonged to people who had since become citizens
**CONFIRMED.** SSA Inspector General, A-08-06-26100: "57 (7.0 percent) of the 810 non-U.S. citizen
Numident records we reviewed were currently misclassified—because the individuals had become U.S.
citizens after obtaining their SSN but had not updated their records with SSA"; about 3.3 million records
"contain out-of-date citizenship status codes". The error runs both ways: 62 of 810 (7.7%) records coded
as foreign-born citizens were not citizens. A 2006 sample of records, never re-measured.
- https://cdn.ca9.uscourts.gov/datastore/library/2013/02/26/Aramark_NUMIDENT.pdf

## 111. That audit means 3.3 million people were wrongly marked as noncitizens
**APPROXIMATE.** The October court's restatement ("approximately 3.3 million people") is stronger than
the audit, which estimated records with out-of-date codes from a sample of 810. On air, the audit's own
wording: records, not people.
- https://storage.courtlistener.com/recap/gov.uscourts.dcd.291580/gov.uscourts.dcd.291580.51.0.pdf
- https://cdn.ca9.uscourts.gov/datastore/library/2013/02/26/Aramark_NUMIDENT.pdf

## 112. A federal judge found in June that a naturalised citizen may be wrongly shown as a noncitizen in Social Security records
**CONFIRMED.** "a naturalized citizen who applied for a Social Security card or otherwise interacted with
SSA prior to naturalization may be incorrectly identified as a non-citizen in SSA records."
- https://www.courthousenews.com/wp-content/uploads/2026/06/sooknanan-voter-citizenship-database-illegal-save-tool-opinion.pdf

## 113. In Travis County, a quarter of SAVE's "non-citizen matches" had already proved citizenship
**UNRESOLVED.** Only a court restating a complaint's allegation; the investigation itself was not found.
Reporting on the 2025 list gives 11 of 97 (and 14 of 97 with proof on file). Not aired.
- https://www.texastribune.org/2025/12/18/texas-voter-roll-citizens-investigation/

## 114. Florida's 2012 list shrank from 180,000 names to 2,600, and in Miami-Dade about a third of those checked proved citizenship
**CONFIRMED.** Secondary (PolitiFact): "The state found 180,000 names", then "a much smaller subset of
2,600"; "Of the 1,637 names, 554 provided proof of citizenship"; the supervisor estimated "an error rate
between 31 and 33 percent". Our arithmetic: 554 ÷ 1,637 = 34%.
- https://politifact.com/factchecks/2012/jul/10/moveon/moveon-says-florida-election-supervisors-refuse-pa/

## 115. Texas flagged about 95,000 voters in 2019, then found about 25,000 should never have been on the list; it settled
**CONFIRMED.** The judge: "25,000 names should not have been included … It appears this is a solution
looking for a problem." The settlement rescinded the advisory and paid $450,000.
- https://www.texastribune.org/2019/02/27/federal-blocks-texas-purging-voters-citizenship-review/
- https://clearinghouse-umich-production.s3.amazonaws.com/media/doc/103338.pdf

## 116. Of 2,724 Texans flagged through SAVE in 2025, the state later confirmed 578 were citizens, about 1 in 5, most because their passport data had not reached SAVE yet
**CONFIRMED.** Secondary: Votebeat, "578 other registered voters flagged last year as potential
noncitizens … are, in fact, U.S. citizens"; "506 were flagged because their passport information was not
added to the federal SAVE program until after Texas had initially checked". Our arithmetic: 578 ÷ 2,724 =
21%. NPR: "some 20% were later found to be citizens".
- https://www.votebeat.org/texas/2026/09/15/paxton-noncitizen-voters-charged-secretary-of-state-refers-potential-noncitizen-voters/
- https://www.npr.org/2026/09/25/nx-s1-5976804/supreme-court-trump-save-noncitizen-voting

## 117. In Missouri, more than half of one county's flagged voters turned out to be citizens
**CONFIRMED.** Secondary (ProPublica and the Texas Tribune): "more than half the Boone County voters
identified as noncitizens were actually citizens"; the count "fell from 74 to 33"; St. Louis County's list
"of 691 potential noncitizens dropped to 133"; DHS has had to correct data for "at least five states".
- https://www.propublica.org/article/save-voter-citizenship-tool-mistakes-confusion

## 118. North Carolina's 2016 audit: voters flagged from licence data were confirmed citizens in SAVE 97.6% of the time; 41 lawfully present noncitizens had voted
**CONFIRMED.** "based on DMV data were confirmed to be U.S. citizens in the SAVE database 97.6 percent of
the time"; "41 non-citizens with legal status (green card, etc.) cast ballots."
- North Carolina State Board of Elections, Post-Election Audit Report, 2016 general election (saved copy)

## 119. Georgia's 2009 flags: more than half of 7,007 were citizens
**CONFIRMED.** U.S. Justice Department objection letter, 2009-05-29: "of the 7,007 individuals who have
been flagged … as potential non-citizens, more than half were in fact citizens."
- https://www.justice.gov/crt/voting-determination-letter-100

## 120. The overhauled SAVE has no published error rate
**CONFIRMED.** USCIS's sworn account gives none and concedes: "SAVE will not be able to confirm the U.S.
citizenship of an individual if the citizenship status has not been recorded in an accessed database."
NPR: "the government had not yet released the system's error rate". No inspector-general or GAO review of
the 2025–26 system was found.
- https://epic.org/wp-content/uploads/2026/04/LWV-v-DHS-25-03501-DHS-Motion-to-Dismiss-Ex1-Broderick-Decl.pdf
- https://www.npr.org/2026/09/25/nx-s1-5976804/supreme-court-trump-save-noncitizen-voting

## 121. SAVE ran 59.7 million voter checks between January 2025 and April 2026
**CONFIRMED.** "From January 1, 2025 to April 1, 2026, SAVE processed 59.7 million voter verification
queries."
- https://epic.org/wp-content/uploads/2026/04/LWV-v-DHS-25-03501-DHS-Motion-to-Dismiss-Ex1-Broderick-Decl.pdf

## 122. The Solicitor General says SAVE has checked 65 million voters and flagged 28,635
**UNRESOLVED.** Reported by NPR from the government's application, which was not opened. A flag is not a
confirmation (entry 116 shows why). Not aired.
- https://www.npr.org/2026/09/25/nx-s1-5976804/supreme-court-trump-save-noncitizen-voting

## 123. What became of Georgia's 156 open 2024 cases and Ohio's roughly 1,200 referrals of 2025
**UNRESOLVED.** No outcome published for either.
- https://www.wuga.org/local-news/2024-10-23/georgia-citizenship-audit-finds-few-noncitizens-on-voter-rolls

## Part 9 — Engine claims no hand pass adjudicated (off air)

## 124. Maricopa County found 8 noncitizens among 60 flagged voters, the other 52 citizens
**UNRESOLVED.** An engine finding from secondary press; Arizona's county record was not assigned to
either hand pass. Off air.
- https://ktar.com/arizona-politics-news/election/noncitizen-voters-maricopa

## 125. Virginia removed about 1,600 registrants in 2024 using licence and SAVE data, and some were citizens
**UNRESOLVED.** Not assigned to either hand pass; no primary read. Off air.
- https://www.whro.org/2024-10-29/u-s-citizens-are-among-the-voters-removed-in-virginias-controversial-purge

## 126. Survey-based estimates put noncitizen voting in the tens of thousands, or near zero
**UNRESOLVED.** The CCES dispute (measurement error versus the Richman estimates) was not adjudicated by
either hand pass. Off air, in both directions.
- https://cces.gov.harvard.edu/news/perils-cherry-picking-low-frequency-events-large-sample-surveys

## 127. Canada and Great Britain require no documents at registration
**UNRESOLVED.** Not assigned to either hand pass. Off air.
- https://www.elections.ca/content.aspx?section=vot&dir=reg%2Fdes&document=index&lang=e

## 128. Alabama's and Louisiana's documents laws are on the books but not in force; Wyoming's is
**UNRESOLVED.** Secondary only (Ballotpedia and press); not checked at a primary. Off air.
- https://lailluminator.com/2026/04/16/citizenship-voter/

## 129. "449,000 noncitizens" were excused from California jury duty, so they must be on the rolls
**UNRESOLVED.** An engine finding from a court-system report that was not re-read; jury pools draw on
licence and tax lists too. Off air.
- https://calmatters.digitaldemocracy.org/bills/ca_202520260sb1310

## 130. The Justice Department's suit is the first time the federal government has sued a state to stop ballots being counted
**UNRESOLVED.** The peg hunt searched for it and no source says so. Never "first ever".
- https://www.justice.gov/opa/pr/justice-department-charges-28-foreign-nationals-california-election-crimes

## Part 10 — What the paper costs (top-up C, council 10-19)

## 131. A first-time adult passport book costs $165 ($130 to the State Department plus $35 to the acceptance facility); a passport card alone costs $65
**CONFIRMED.** 22 CFR 22.1 (eCFR, title 22 up to date as of 2026-10-16): "Passport Book Application
Services for: (a) Applicants age 16 or over (including renewals) $50", "Passport book security surcharge
(enhanced border security fee) $80" and "Passport Book or Card Execution … $35"; our arithmetic: $50 +
$80 + $35 = $165. The State Department's fee page (last readable copy 2026-07-06, last updated 2026-03-19;
the live page refused every request on 10-19): "Passport book DS-11 $130 $35" and "Passport card DS-11 $30
$35". The regulation and the archived page agree to the dollar.
- https://www.ecfr.gov/current/title-22/part-22/section-22.1
- https://web.archive.org/web/20260706162946/https://travel.state.gov/en/passports/apply/help/fees.html

## 132. Routine passport processing takes 4–6 weeks, plus up to 2 weeks' mailing each way
**APPROXIMATE.** "Routine processing takes 4-6 weeks" and "It may take up to 2 weeks for your application
to get to us. Add another 2 weeks for you to get your new passport after we mail it." The last readable
official copy is 2026-07-07 (page last updated 2026-04-16); the live page could not be read on 10-19, and
it says times may change. Direction only: "weeks, not days". No week count on screen as current.
- https://web.archive.org/web/20260707203014/https://travel.state.gov/en/passports/apply/help/processing-time.html

## 133. A certified birth certificate by mail from the state office costs $9 in Florida, $22 in Texas, $30 in New York State and $31 in California
**CONFIRMED.** Florida: "$9 First computer-generated certification" (online through the vendor costs
more). Texas: "Certified Copy - Long Form (e.g., for U.S. Passports) $22.00". New York State (outside New
York City): "Mail orders $30"; online or phone "$45 + vendor processing fee"; New York City's own fee was
not read. California: "VS 111 – Certified Copy of Birth Record $31 per copy", raised on 2026-01-01. All
read 2026-10-19. These are state-office fees; county and city offices were not read, so this is the range
in the states we read, never a national range.
- https://www.floridahealth.gov/certificates/certificates/birth/index.html
- https://www.dshs.texas.gov/vital-statistics/costs-fees
- https://www.health.ny.gov/vital_records/birth.htm
- https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records-Fees.aspx

## 134. Ohio's state office charges $21.50 for a certified birth certificate
**APPROXIMATE.** The CDC's "Where to Write" page: "Event: Birth Cost of copy: $21.50", but the page carries
no date and tells readers to verify by phone; the Ohio Department of Health page returned no content on
10-19. Ohio's rule builds the fee from "twelve dollars plus" statutory add-ons, so the total is set by
statute, not one printed number. Say "about $21" at most, attributed to the CDC listing; never as Ohio's
current official fee.
- https://www.cdc.gov/nchs/w2w/ohio.htm
- https://codes.ohio.gov/ohio-administrative-code/rule-3701-5-03

## 135. Replacing a lost naturalisation certificate (Form N-565) costs $555 on paper, $505 online
**CONFIRMED.** 8 CFR 106.2: "Application for Replacement Naturalization/Citizenship Document, Form N-565 …
$555. There is no fee when this application is submitted under 8 CFR 338.5(a) to request correction of a
certificate that contains an error." 8 CFR 106.1(g): forms filed online cost "$50 lower than the fee
prescribed in § 106.2"; our arithmetic: $505. eCFR title 8 up to date as of 2026-10-16; the 2026-10-16
fee-schedule edition did not change it.
- https://www.ecfr.gov/current/title-8/part-106/section-106.2
- https://www.ecfr.gov/current/title-8/part-106/section-106.1
- https://www.uscis.gov/n-565

## 136. How long an N-565 replacement takes
**UNRESOLVED.** The form's page gives no time and points to USCIS's processing-times tool, which refused
every request on 10-19. No figure on air.
- https://www.uscis.gov/n-565

## 137. Kansas law bars any fee for a Kansas birth certificate requested for voting or to meet the registration citizenship rule
**CONFIRMED.** K.S.A. 65-2418(a)(3): "The secretary shall not charge or accept any fee for a certified copy
of a birth certificate if the certificate is requested by any person who is 17 years of age or older for
purposes of voting if the applicant lacks the identification required by K.S.A. 25-2908(h) … or to meet
the voter registration requirements of K.S.A. 25-2309". It covers Kansas-born people only (the state
issues its own records). New Hampshire's free copies are log 105. No other state's free-copy rule was
found at a primary, so never "only these two states".
- https://www.ksrevisor.gov/statutes/chapters/ch65/065_024_0018.html

## 138. Texas's free birth record is for the Election Identification Certificate (voter photo ID), not for registering
**CONFIRMED.** "Obtaining a copy of your birth record to apply for an Election Identification Certificate
(EIC) from the Texas Department of Public Safety is easy and free"; it "can only be used to obtain an EIC,
and can only be issued once during an individual's lifetime", in person. The fee table: "Certificate for
Election Identification FEE WAIVED". Not a free copy for registration.
- https://www.dshs.texas.gov/vital-statistics/birth-records/birth-certificate-election-identification
- https://www.dshs.texas.gov/vital-statistics/costs-fees

## Part 11 — What the public says, and Oregon's licence-office error (top-up D, council 10-19)

## 139. Gallup, October 2024: 83% favour requiring first-time registrants to prove citizenship; Republicans 96%, independents 84%, Democrats 66%
**CONFIRMED.** Item G of "do you favor or oppose each of the following election-law policies?":
"Requiring people who are registering to vote for the first time to provide proof of citizenship", favour
83, oppose 15, no opinion 2. Telephone, "Oct. 1-12, 2024, with a random sample of 1,023 adults", ±4 points.
Party, from Gallup's own crosstab: favour R 96 / I 84 / D 66 (oppose 4 / 14 / 30); the crosstab's
unweighted base is 754, a gap Gallup doesn't explain. Photo ID at the polls was a **separate** item in the
same battery (84%); it is not this question. The wording is **first-time** registrants only.
- https://news.gallup.com/poll/652523/americans-endorse-early-voting-voter-verification.aspx
- https://news.gallup.com/file/poll/652532/2024_10_23_Election%20Laws%20Topline%20and%20Tabs.pdf

## 140. Economist/YouGov, March 2026: 59% support, 29% oppose requiring documentary proof to register or re-register; Democrats 35–53, independents 52–31, Republicans 91–3
**CONFIRMED.** "Do you support or oppose requiring everyone to provide documentary proof of citizenship to
register or re-register to vote?" Support 59, oppose 29, not sure 12. "March 13 - 16, 2026 - 1595 U.S.
Adult Citizens", YouGov's opt-in web panel, ±3.3%. YouGov: "Democrats are divided on the issue: 35% support
it and 53% oppose. Independents are more likely to support than oppose such a law (52% vs. 31%)";
Republicans 91–3 in the crosstab.
- https://d3nkl3psvxxpe9.cloudfront.net/documents/econTabReport_CwWXhS2.pdf
- https://yougov.com/en-us/articles/54344-most-americans-support-proof-citizenship-to-vote-limiting-use-mail-in-ballots-more-divisive-march-13-16-2026-economist-yougov-poll

## 141. CBS News/YouGov, March 2026: 66% favour, 34% oppose requiring a passport or birth certificate to register
**CONFIRMED.** "Do you favor or oppose requiring people to show proof of citizenship with documents such
as a U.S passport or birth certificate in order to register to vote?" Favour 66, oppose 34; no "not sure"
option was reported, so it reads as forced choice. 2,500 U.S. adults, March 16–19, 2026, ±2.2 points.
By party (toplines crosstab): Democrats 43–57, independents 61–39, Republicans 93–7.
- https://assets1.cbsnewsstatic.com/hub/cms/prod_cms_alt/file/2026/03/19/1362e775-d1df-4f6a-a0c9-ce8dc8ed0498/cbsnews_20260319_thurs-voting.pdf
- https://www.cbsnews.com/news/voting-process-photo-id-opinion-poll/

## 142. In the same CBS sample, the SAVE Act asked by name split 28–31, with 41% not sure
**CONFIRMED.** "From what you have seen or heard about it so far, do you favor or oppose the SAVE Act?"
Favour 28, oppose 31, not sure 41. Same people, same week as entry 141: asking by the bill's name instead of
describing the policy moved the answer.
- https://assets1.cbsnewsstatic.com/hub/cms/prod_cms_alt/file/2026/03/19/1362e775-d1df-4f6a-a0c9-ce8dc8ed0498/cbsnews_20260319_thurs-voting.pdf

## 143. POLITICO/Public First, April 2026: 52% support, 18% oppose documentary proof to register, including by mail
**CONFIRMED.** "Requiring documentary proof of U.S. citizenship to register to vote, including when
registering by mail": strongly support 28 + support 24 = 52; oppose 8 + strongly oppose 10 = 18; neither
17; don't know 13 (our arithmetic on the toplines). Fieldwork 11–14 April 2026, sample 2,035. The two
middle options are why its 52% looks low beside the others.
- https://www.politico.com/f/?id=0000019d-feb0-d64a-a5dd-fefa52fd0000

## 144. The POLITICO/Public First poll's partisan split
**APPROXIMATE.** No party-ID column was published. The nearest are 2024 vote (Trump voters 76% support,
Harris voters 42%) and midterm intention (Republican 78%, Democrat 42%). Not a party split; off air as one.
- https://www.politico.com/f/?id=0000019d-feb0-d64a-a5dd-fefa52fd0000

## 145. Harvard CAPS/Harris, February 2026: 75% support requiring proof of citizenship to register
**CORRECTED.** The question is "Do you support or oppose requiring proof of citizenship to vote?", with no
mention of registering (support 75, oppose 25; forced choice; 1,999 registered voters, February 25–26,
2026). It measures a different thing, so it stays off air and is never set beside the registration polls.
- https://harvardharrispoll.com/assets/uploads/2026/03/HHP_Feb2026_Topline.pdf
- https://harvardharrispoll.com/wp-content/uploads/2026/03/HHP_Feb2026_Crosstabs.pdf

## 146. Oregon, September 2024: 1,259 people registered through the licence office without proof of citizenship; 10 had voted, and one of those was confirmed a citizen
**CONFIRMED.** Secretary of State, 2024-09-23: "The people in this group of 1,259 will not receive a
ballot"; "10 have a voting history however one of the 10 has been confirmed to be an eligible vote,
therefore the total number of potentially ineligible voters as a result of the error is 9", and "this
does not mean those individuals were not U.S. citizens at the time they voted".
- https://apps.oregon.gov/oregon-newsroom/OR/SOS/Posts/Post/dmv-potential-ineligible-voters-improper-registration-records

## 147. By October 7, 2024, the count was 1,561
**CONFIRMED.** DMV's after-action report: "clerical, technical and policy errors that resulted in 1,561
records sent to SoS that should not have been sent"; the Secretary of State: "302 individuals" more, of
whom "178 were determined to be erroneously coded as having proved citizenship" (the American Samoa
records). Our arithmetic: 1,259 + 302 = 1,561.
- https://www.oregon.gov/odot/DMV/docs/After-Action-Report.pdf
- https://apps.oregon.gov/oregon-newsroom/OR/SOS/Posts/Post/protect-2024-election-motor-voter-audit

## 148. In November 2024 the count reached 1,617
**APPROXIMATE.** No saved primary states 1,617 as a total. It is 1,561 plus 56 records DMV sent on
2024-10-21 ("SoS reports none of the 56 had a voting history"). A sum, not an official figure: never on
air.
- https://www.oregon.gov/odot/DMV/docs/Voter%20Registration%20Status%20Report%2011-7-2024.pdf

## 149. Oregon's error put 1,617 people on the rolls
**CORRECTED.** 1,617 is our sum and out of date. The count kept growing: "Roughly 1,800" (ODOT, July
2025), "1,832 people" (Secretary of State, August 2025), and now "1,952 individuals being registered to
vote who did not provide proof of their eligibility" (Secretary of State page, updated 2026-10-07). The
same page also says "DMV's mistake affected 1,948 people — 0.05% of the people registered to vote in
Oregon", so it contradicts itself by four. On air: "about 1,950, the state says", dated.
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://web.archive.org/web/20250813093400/https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://www.oregon.gov/odot/DMV/docs/ODOT_Motor_Voter_FAQs.pdf

## 150. Ten of the people Oregon registered in error had voted
**CORRECTED.** That is the September 2024 figure. The state's current count: "only 44 of these
individuals actually voted, and none of those votes could have impacted the outcome of an election"; "The
Elections Division opened investigations into the 44 individuals with voting records. To date all cases
have been closed." (ODOT's July 2025 figure was 38.)
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://www.oregon.gov/odot/DMV/docs/ODOT_Motor_Voter_FAQs.pdf

## 151. How many of Oregon's 44 who voted were citizens
**UNRESOLVED.** No primary gives a number. The state: "only 44 people voted, and many of them were
citizens" and "we do not know all 1,952 individuals are not citizens. In fact, since the error was
discovered, many have confirmed their citizenship." The only exact count is 1 of the first 10 (entry 146).
On air, at most: "many were citizens, the state says". Never a number.
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx

## 152. The cause was licence-office staff choosing the wrong document from a drop-down, plus a policy error on American Samoa records
**CONFIRMED.** "The majority of errors transmitted to the SoS occurred when DMV staff inadvertently chose
the wrong document from a drop-down menu in the new system"; "a large percentage of these (72%) were based
on a foreign passport mistakenly coded as a U.S. passport"; and DMV "has been coding people who present a
birth certificate or U.S. passport from the territory of American Samoa as citizens".
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://www.oregon.gov/odot/DMV/docs/After-Action-Report.pdf
- https://www.oregon.gov/odot/DMV/docs/Voter%20Registration%20Status%20Report%2011-7-2024.pdf

## 153. Oregon inactivated the registrations, told the people it was the DMV's fault, referred no one for prosecution, paused the data transfer and commissioned an outside audit
**CONFIRMED.** "The Secretary of State and county election offices inactivated the mistaken voter
registrations right away"; "will not refer anyone for criminal prosecution because the DMV mistakenly
registered them to vote"; a letter "saying that the mistake was DMV's fault". The Governor paused the
transfer on 2024-10-07; it restarted in February 2025. The outside audit found controls "generally
effective, although some control gaps and exceptions were noted".
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://www.oregon.gov/odot/DMV/docs/Voter%20Registration%20Status%20Report%2007-03-2025.pdf
- https://www.oregon.gov/das/Pages/odot-motor-voter-audit.aspx

## 154. Old errors are still turning up in 2026, but monthly sampling has found none in new transactions for two years
**CONFIRMED.** "For two years in a row, each month, the sampling has found zero errors in new
transactions"; "DMV identified 12 prior errors throughout quarter 3 of 2026"; "Of the 12 records from Q3,
none had a voting history." Why the total keeps creeping up.
- https://www.oregon.gov/odot/DMV/docs/Voter-Registration-Status-Report-Q3-2026.pdf

## Part 12 — Could it swing an election? The found counts against the closest margins (top-up E, his pitch note 10-20)

Margins are from official results only (state canvasses and results files, the National Archives'
certificate of ascertainment, the Clerk of the House's *Statistics*, "from official sources"), in votes:
winner minus runner-up; for two-seat boards, the second winner minus the first loser. The found counts
(log 65, 68, 76, 82, 83) are floors: each is what one check found, so the true number is unknown, and no
source supports scaling them up. A count is a statewide total, so the number that could fall inside any
one district is the same or smaller.

## 155. Utah's closest federal race of 2020–24 was the 4th House district in 2020, Owens 179,688 to McAdams 175,923, a margin of 3,765
**CONFIRMED.** The state canvass ("the State Board of Canvassers met on November 23, 2020 at noon to
approve the official results") and the Clerk's recap agree: "4th district .... 175,923 179,688"
(Democratic, Republican). Our arithmetic: 179,688 − 175,923 = 3,765.
- https://vote.utah.gov/wp-content/uploads/2021/02/2020-General-Election-Statewide-Canvass.xlsx
- https://clerk.house.gov/member_info/electionInfo/2020/statistics2020.pdf

## 156. Utah's closest statewide race of 2020–24 was the 2022 Senate race, Lee 571,974 to McMullin 459,958, a margin of 112,016
**CONFIRMED.** From the Clerk: "Senator .......... 571,974 … 459,958". Utah's own signed 2022 canvass is a
scanned image with no text layer, so the Clerk's figures are used.
- https://clerk.house.gov/member_info/electionInfo/2022/statistics2022.pdf

## 157. Utah's other statewide races of 2020–24 were wider still: governor 2020 by 476,000, president 2024 by 321,252, governor 2024 by 360,917, Senate 2024 by 450,185
**CONFIRMED.** 2024 president "883,818 … 562,566"; 2024 governor "781,431 27,480 420,514"; Clerk 2024
"Senator .............. 914,700 464,515"; 2020 governor 918,754 to 442,754 from the 2020 canvass.
- https://vote.utah.gov/wp-content/uploads/2025/02/2024-General-Election-Statewide-Canvass-2.pdf
- https://clerk.house.gov/member_info/electionInfo/2024/statistics2024.pdf
- https://vote.utah.gov/wp-content/uploads/2021/02/2020-General-Election-Statewide-Canvass.xlsx

## 158. Of the 13 of Utah's 27 confirmed noncitizens who had ever voted, 8 voted in the 2020 general election, 4 in 2018 and 4 in 2024
**CONFIRMED.** "Voted Yes 13 No 14 Year Voted General 2020 8 General 2024 4 General 2018 4", and 1 in each
other year. Our arithmetic: the years add to more than 13, so some voted in more than one year. The 8
are statewide, so at most 8 could have voted in the 4th district.
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf

## 159. Michigan's closest federal race of 2020–24 was the 10th House district in 2022, James 159,202 to Marlinga 157,602, a margin of 1,600
**CONFIRMED.** The state's official results ("2022 Michigan Official General Election Results", read from
an archived copy because the live site could not be reached) and the Clerk agree: "10th district .........
159,202 157,602". Michigan published no noncitizen count for 2022, so this race is never set against the
2024 count except as an illustration.
- https://web.archive.org/web/20250423051000/https://mielections.us/election/results/2022GEN_CENR.html
- https://clerk.house.gov/member_info/electionInfo/2022/statistics2022.pdf

## 160. Michigan's closest single-seat statewide race of 2020–24 was the 2024 Senate race, Slotkin 2,712,686 to Rogers 2,693,680, a margin of 19,006
**CONFIRMED.** From the Clerk: "Senator .............. 2,693,680 2,712,686" (Republican, Democratic); the
state's Board of Canvassers "voted unanimously to certify Michigan's 2024 General Election results". The
same election as Michigan's 16 apparent noncitizen ballots (log 82, 83).
- https://clerk.house.gov/member_info/electionInfo/2024/statistics2024.pdf
- https://www.michigan.gov/sos/resources/news/2024/11/22/michigan-board-of-state-canvassers-certifies-the-2024-general-election

## 161. Michigan's closest statewide contest of any kind in 2020–22 was the 2020 University of Michigan Regent race, whose second seat was won by 4,215 votes
**CONFIRMED.** "Regent of the University of Michigan 8 Year Terms (2) Positions"; "Hubbard, Sarah 2,370,945";
"Diggs, Shauna Ryder 2,366,730". A two-seat race: the margin is the second winner minus the first loser.
- https://web.archive.org/web/20250415135359/https://mielections.us/election/results/2020GEN_CENR.html

## 162. Two other Michigan statewide boards were close: Michigan State trustee 2022, second seat by 7,709; Wayne State governor 2020, second seat by 9,390
**CONFIRMED.** "Denno, Dennis 1,944,257"; "Balow, Mike 1,936,548"; 2020: "Stancato, Shirley 2,352,785";
"Dewaelsche, Eva Garza 2,343,395".
- https://web.archive.org/web/20250423051000/https://mielections.us/election/results/2022GEN_CENR.html
- https://web.archive.org/web/20250415135359/https://mielections.us/election/results/2020GEN_CENR.html

## 163. Michigan's top-of-ticket races were wider: president 2020 by 154,188, Senate 2020 by 92,335, president 2024 by 80,103
**CONFIRMED.** "Biden, Joseph R. 2,804,040"; "Trump, Donald J. 2,649,852"; "Peters, Gary 2,734,568";
"James, John 2,642,233"; 2024 president from the Clerk, 2,816,636 to 2,736,533.
- https://web.archive.org/web/20250415135359/https://mielections.us/election/results/2020GEN_CENR.html
- https://clerk.house.gov/member_info/electionInfo/2024/statistics2024.pdf

## 164. The margins of Michigan's 2024 statewide board and Supreme Court races
**UNRESOLVED.** No official copy could be reached: the state's results site refused or timed out three
ways on 2026-10-20, and its archived copy is a 404. County portals and news were not used. Off air.
- https://mielections.us/election/results/2024GEN_CENR.html (unreachable 2026-10-20)

## 165. Georgia's closest statewide race of 2020–24, the 2020 presidential race, was decided by 12,670 votes
**CORRECTED.** 12,670 is the first certificate of November 20, 2020 ("each receiving 2,474,507 votes";
"2,461,837 votes"), which is the figure the Clerk's book prints. The amended certificate after the
recount ("each receiving 2,473,633 votes"; "2,461,854 votes") is final and matches the Secretary of
State's recount file ("voteCount:2473633"). Our arithmetic: 2,473,633 − 2,461,854 = **11,779**. Use
11,779, "after the recount".
- https://www.archives.gov/files/electoral-college/2020/ascertainment-georgia.pdf
- https://results.sos.ga.gov/cdn/results/Georgia/export-2020NovGenRec.json

## 166. Georgia's closest federal race of 2020–24 was the 7th House district in 2020, Bourdeaux 190,900 to McCormick 180,564, a margin of 10,336
**CONFIRMED.** The Secretary of State's results file ("voteCount:190900"; "voteCount:180564") and the
Clerk ("7th district ........... 190,900 180,564") agree. Closer than the 2020 presidential margin.
- https://results.sos.ga.gov/cdn/results/Georgia/export-2020NovGen.json
- https://clerk.house.gov/member_info/electionInfo/2020/statistics2020.pdf

## 167. Georgia's other statewide races were wider: Public Service Commission runoff January 2021 by 33,727; Senate 2022 by 37,675 in the first round and 99,389 in the runoff; president 2024 by 115,100
**CONFIRMED.** PSC "voteCount:2234689" and "voteCount:2200962"; 2022 runoff "voteCount:1820633" and
"voteCount:1721244"; 2022 first round 1,946,117 to 1,908,442; 2024 "voteCount:2663117" and
"voteCount:2548017".
- https://results.sos.ga.gov/cdn/results/Georgia/export-2021JanFedRun.json
- https://results.sos.ga.gov/cdn/results/Georgia/export-2022NovGen.json
- https://results.sos.ga.gov/cdn/results/Georgia/export-2022DecGenRun.json
- https://results.sos.ga.gov/cdn/results/Georgia/export-2024NovGen.json

## 168. Nationally, the closest U.S. House races of 2024 were decided by under 1,000 votes: California's 13th by 187, California's 45th by 653, Iowa's 1st by 799
**CONFIRMED.** Read from every 2024 House contest in the Clerk's book ("FROM OFFICIAL SOURCES FOR THE
ELECTION OF NOVEMBER 5, 2024"): "13th district .. 105,367 105,554"; "45th district .. 157,611 158,264";
"1st district ..... 206,955 206,156". The next closest is Maine's 2nd at 2,706, after ranked-choice.
- https://clerk.house.gov/member_info/electionInfo/2024/statistics2024.pdf

## 169. The closest House race of 2020–24 was Iowa's 2nd in 2020, by 6 votes; in 2022, Colorado's 3rd went by 546 and California's 13th by 564
**CONFIRMED.** 2020 Iowa recap: "2d district ................ 196,958 196,964"; 2022: Boebert 163,839 to
Frisch 163,293; Duarte 67,060 to Gray 66,496.
- https://clerk.house.gov/member_info/electionInfo/2020/statistics2020.pdf
- https://clerk.house.gov/member_info/electionInfo/2022/statistics2022.pdf

## 170. In every close race with a same-state count, the margin is hundreds to thousands of times the number of noncitizen votes found
**CONFIRMED.** Our arithmetic on the confirmed figures (log 155, 158, 160, 165, 166; 76, 82, 83): Utah's
4th district 2020, 3,765 against at most 8, about 470 times (8 is 0.21% of the margin; all 13 who ever
voted, about 290 times); Michigan's Senate 2024, 19,006 against 16 in the same election, about 1,190 times
(0.08%); Georgia's president 2020, 11,779 against 9 who ever voted (years not given), about 1,310 times
(0.08%); Georgia's 7th 2020, 10,336 against at most 9, about 1,150 times. The counts are floors, not
totals. The comparison shows today's found numbers are far below these margins; it does not show that a
race decided by single digits could never be affected (log 169).
- https://ltgovernor.utah.gov/wp-content/uploads/CITIZENSHIP-FULL-SUMMARY-2.pdf
- https://content.govdelivery.com/accounts/MISOS/bulletins/3da48fb
- https://www.wuga.org/local-news/2024-10-23/georgia-citizenship-audit-finds-few-noncitizens-on-voter-rolls
- https://clerk.house.gov/member_info/electionInfo/2024/statistics2024.pdf
- https://www.archives.gov/files/electoral-college/2020/ascertainment-georgia.pdf

## 171. California's 46th district, 1996 (Dornan v. Sanchez): Sanchez was certified the winner by 984 votes, 979 after the recount
**CONFIRMED.** House Report 105-416 (1998): "certified Ms. Sanchez the winner by 984 votes"; "as a result
of the recount, Ms. Sanchez's margin of victory was reduced to 979 votes".
- https://www.govinfo.gov/content/pkg/CRPT-105hrpt416/html/CRPT-105hrpt416.htm

## 172. The House task force documented 624 people who had illegally registered as noncitizens, 82 of whom naturalised before voting, and 748 invalid votes in all
**CONFIRMED.** "624 persons had illegally registered and thus were not eligible to cast ballots"; "82
persons naturalized after they registered but before they cast their ballot"; "the Orange County
Registrar of voters voided 124 improper absentee ballots"; "748 invalid votes were cast in this
election". The 748 are not all noncitizen votes: 124 are absentee ballots the county voided.
- https://www.govinfo.gov/content/pkg/CRPT-105hrpt416/html/CRPT-105hrpt416.htm

## 173. The invalid votes were fewer than the margin, and the contest was dismissed; the minority disputed even the 624
**CONFIRMED.** "is substantially less than the 979 vote margin in this election"; "the Committee
concludes that this contest should be dismissed"; minority views: "they could just as easily be citizens
of the United States".
- https://www.govinfo.gov/content/pkg/CRPT-105hrpt416/html/CRPT-105hrpt416.htm

## 174. Five people later removed from Florida's rolls as noncitizens voted in the November 2021 special election for Florida's 20th district, enough to change an outcome decided by 5 votes
**UNRESOLVED.** A claim, not an official finding: it comes from "A Joint Task Force of volunteers from
election integrity groups across the state of Florida". The report does not show how anyone voted, which
primary they voted in, or that they were noncitizens on the day, and it says "many of the 5,612 are likely
self-reported to enable naturalization". No court or official record has found it. Off air as a fact.
- https://www.dailysignal.com/2026/10/14/election-records-analysis-asserts-1827-removed-noncitizens-cast-7035-ballots-in-florida-elections/

## 175. The 2021 Florida 20th district contest decided by 5 votes was the Democratic special primary, Cherfilus-McCormick 11,662 to Holness 11,657
**CONFIRMED.** "November 2, 2021 Special Primary U.S. House 20"; "Democratic Primary Official Results";
"Machine and Manual Recounts Completed". A closed party primary, not a general election.
- https://results.elections.myflorida.com/SummaryRpt.asp?ElectionDate=11/2/2021&Race=FED&Party=DEM

## 176. In the sources searched, no court or official body has found that noncitizen votes changed a U.S. election result
**CONFIRMED** as a finding about the sources searched: court rulings, election contests and redo
elections tied to noncitizen votes; the House's record of the one federal contest built on noncitizen
voting (log 171–173); Kansas's Fish v. Kobach; Oregon's "none of those votes could have impacted the
outcome of an election" (log 150). The nearest official record found the opposite. An absence in the
sources searched, not proof that no such case exists anywhere: say "we found none", never "there are
none".
- https://www.govinfo.gov/content/pkg/CRPT-105hrpt416/html/CRPT-105hrpt416.htm
- https://sos.oregon.gov/elections/Pages/DMV-Automatic-Voter-Registration-Error.aspx
- https://storage.courtlistener.com/recap/gov.uscourts.ksd.110435/gov.uscourts.ksd.110435.542.0_3.pdf

## 177. Some places let noncitizens vote by law in local races, such as San Francisco's Board of Education elections since 2016
**CONFIRMED.** "In 2016, San Francisco voters passed a new law allowing certain non-citizens to vote in
local Board of Education Elections"; "This law does not allow non-citizens to vote in any other local,
state, or federal election." Lawful, not fraud: never mixed into the counts above. Other places (some
Maryland towns, D.C., two Vermont cities) were not checked.
- https://www.sf.gov/non-citizen-voting-in-local-board-of-education-elections

---

## Corrections applied to source
<!-- One row per CORRECTED claim. "Caught by" and "came from" are how the research method gets
     measured: without them nobody can say whether the engine, the hand pass or the script review is
     doing the catching. Use these words, and add a few words after a dash if it helps.
     Caught by:  engine (a research-engine verifier refuted or flagged it) · hand pass · peg re-hunt ·
                 scripting (while writing or checking the script) · review (Lucas watching a cut) ·
                 after publish
     Came from:  engine (a finder's claim or the synthesis) · scout brief · prior episode · peg hunt ·
                 draft line (the script's own wording) · source (the source itself changed or erred)
     ⛔ Keep the correction text in the FIRST column: the site's verdict reader skips column one, so
        this table can never be mistaken for a claim table. -->
| correction | caught by | came from |
|---|---|---|
| Utah's 27: "the report gives no count of who voted" → 13 of 27 had voted at some point, earliest 2018; 9 of the 25 probable (log 68; hand pass A, C1) | hand pass — A | engine — finding 4's script trap |
| Michigan: "15 of 5.7 M = 0.00028% = about 1 in 380,000" → 16 of more than 5.7 million ballots, about 1 in 360,000 (log 83; A, C2) | hand pass — A | scout brief — via the release's own headline pairing 15 with 0.00028% |
| Kansas: "about 460 blocked per noncitizen" (mixes the oath-era 39 into the 67) → about 1,100 applicants blocked for each noncitizen the law stopped, 31,089 ÷ 28 (log 92; A, C3) | hand pass — A | scout brief |
| "3.8 million with no document = about 1 in 50" → about 1 in 60 (1.6%), or "fewer than 1 in 50" (log 107; A, C4) | hand pass — A | scout brief — rounding up the survey's "just under 2%" |
| Ohio "1 charged of 521" credited to the Ohio Capital Journal → WVXU's analysis of 2024-05-22, a May 2024 snapshot beside AP's December count (log 86; A, C5) | hand pass — A | scout brief |
| Georgia 2026: "WSB-TV and the AJC differ on one audit" → two different counts: the state auditor's 2,570 / 407 and the Secretary of State's own 432 (log 77; A, C6) | hand pass — A | engine |
| Kansas: "more than 99% citizens, per the court" → the court's own finding is "clear majority" citizens and "less than 1%" confirmed noncitizens; 99% is the state expert's estimate taken at face value (log 93; A, C7) | hand pass — A | engine — the dossier summary |
| New Hampshire "Derry voter" sent home for a maiden-name birth certificate → in neither the article nor the trial order; replaced by the court-recorded cases (log 98; A, C8) | hand pass — A | scout brief — its cold open |
| "A preliminary list of over 175,000" narrowed to 20,000 → in DOJ's brief only, never in a sworn declaration; "DOJ's brief says", never measured (log 15; B, A6) | hand pass — B | engine — finding 3; also the peg hunt's ranked candidate 1, both reading the memo, not the declarations |
| Los Angeles County "didn't open the drive" / DOJ: California "refused to look at that list" → the county's letter says it reviewed the emailed list; competing claims or neither (log 22; B, A15) | hand pass — B | engine — via secondary coverage; and source — the DOJ press release's wording |
| Mi Familia Vota decides "whether a state may require documentary proof of citizenship to register" → on the state's own registration form, plus 90-day cancellations (log 35; B, C6) | hand pass — B | peg hunt — the `news_peg.what` line, since narrowed in metadata |
| First Circuit "argument set for 2026-12-09" → the government moved on 10-19 to dismiss that appeal; the live appeal is No. 26-2038 (log 42; B, D3) | hand pass — B | engine — relayed from Democracy Docket; the source changed on 10-19 |
| EO 14399 dated "2026-04" → signed 2026-03-31, published in April (log 43; B, D5) | hand pass — B | scout brief |
| SAVE America Act: "most voters already hold a REAL ID that counts" → only a REAL ID that indicates citizenship counts (log 50; B, D13) | hand pass — B | scout brief — GREEN's case |
| "Ohio's licence-office documents requirement is live" / Ohio as documents-for-all → HB 54 limits only the electronic offer; paper oath forms stay (log 7; B, E2) | peg re-hunt — re-confirmed by hand pass B | scout brief — from Democracy Docket and The Federalist |
| Ohio dissent "antithetical to the NVRA" → not in the order; use "meant to facilitate, not hamper" (log 9; B, E4) | peg re-hunt — the full 21-page read; carried by hand pass B | scout brief — secondary coverage |
| New Hampshire ruling dated 2026-05-29 → filed 2026-05-28 (log 52; B, E5; also flagged by A) | hand pass — B | scout brief |
| Prop 39 "also adds proof of citizenship at registration" → no documents at registration; ID at the polls plus a records check of existing attestations (log 63; B, E15) | hand pass — B | scout brief — secondary press |
| Harvard CAPS/Harris "75% support proof of citizenship to register" → the question asks about proof of citizenship "to vote", with no mention of registering; off air, never beside the registration polls (log 145; D, P13) | hand pass — top-up (council 10-19) | council harvest — the polls claim (coverage item 7); the Harris poll itself was added by top-up D's own sweep |
| Oregon "1,617 registered in error" → 1,617 is a sum (1,561 + 56), not an official total, and out of date; the state's current count is 1,952 (the same page also says 1,948): "about 1,950", dated (log 148, 149; D, O4, O5) | hand pass — top-up (council 10-19) | council harvest |
| Oregon "10 voted" → the September 2024 figure; the state's current count is 44 who voted, all investigations closed, none could have changed an outcome (log 150; D, O6) | hand pass — top-up (council 10-19) | council harvest |
| Georgia 2020 president "12,670" (the Clerk's book, printing the first certificate of November 20, 2020: 2,474,507 to 2,461,837) → **11,779** (2,473,633 to 2,461,854), the amended certificate after the recount, which is final and matches the Secretary of State's recount file (log 165; E, E9) | hand pass — top-up (his pitch note 10-20) | source — the Clerk's book prints the pre-recount certificate |

## Fairness audit

- **Equal rigour, unequal record, said plainly.** Both designs were held to the same test: every number
  re-opened at its primary, every comparator recomputed. The record is not even, and the brief does not
  pretend it is. Where it has been counted, noncitizen registration is rare (1 in 77,000 records in Utah,
  1 in 410,000 registrants in Georgia, 1 in 360,000 ballots in Michigan), and the documents rule's
  measured citizen cost (Kansas, about 1,100 applicants blocked for each noncitizen it stopped) is far
  larger than the noncitizens it stopped. That is where the evidence leans, and the brief says so.
- **The proof side is built at full strength anyway.** Its strongest points are all CONFIRMED and kept:
  the checkbox demonstrably failed in Utah (14 ticked "No" and were registered; 34 ticked "Yes"); counts
  are floors, because audits only find what they can match and Georgia's 20 surfaced by accident, through
  jury-duty statements; the oath's penalties are rarely used (Kansas: zero complaints; Ohio: a handful
  charged); and a state's own form may lawfully ask for more (Inter Tribal Council). The document survey's
  honest weak point ("by tomorrow") is stated, and so is the fact that an independent measure comes out
  higher, not lower.
- **The records side is not let off.** Records checks fail in the other direction (SSA 2006, Texas 2025,
  Florida 2012, Missouri), the overhauled SAVE has no published error rate, and the California list has
  no accuracy figure at all. Utah, a records-first state, says its own checks cannot show who is not a
  citizen.
- **Advocacy-sourced figures are labelled.** The 21.3 million survey's sponsors are named; the New
  Hampshire 244 is an advocacy tally (the court's at-least-146 is used instead); the New Hampshire
  expert ranges are a plaintiffs' expert's; DOJ's 175,000 and its charges are a party's claims.
- **No verdict on a live ballot measure or bill.** Prop 39 and the SAVE America Act are places the
  question is being set, never verdicts.
- **Identity↔stance rotation** is decided at build, when the cast is seated (the episode's cast list is
  still empty); this log cannot audit it yet.

## Open questions this episode could not settle

- Whether the court grants DOJ's restraining order in California, and what share of the 20,000 list are
  citizens (no error rate exists).
- Whether the October 9 vacatur reaches the California list, and whether the D.C. Circuit stays it.
- How many of Utah's 4,307 federal-only recipients are citizens, and how many prove it before the count.
- The overhauled SAVE's false "not confirmed" rate.
- Whether the oath deters, or documents prevent, noncitizen registration: no study exists either way.
- How many noncitizens New Hampshire's documents law kept off its rolls (no count was found to set
  against the people turned away).
- What Florida's HB 991 requires at registration, and how its challenge is going.
- What the Supreme Court decides in Mi Familia Vota.
- How many of the 44 people Oregon registered in error who voted were citizens (the state says only
  "many"), and how long a replacement naturalisation certificate takes (USCIS's tool could not be read).
