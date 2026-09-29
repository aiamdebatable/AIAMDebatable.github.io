# ep21 — fact-check log

Status: **adversarial-pass** — a peg hunt (2026-09-24), the deep-research-v3 engine's 12 primary-opened verifications, and a four-way hand pass on the primaries the engine could not open (the court dockets, the bill text, the original Korean report, every figure's own report, the labs' own terms pages and the regulators' own publications), each saved as extracted text and every quote relied on grep-checked against it by the main session. The script pass comes at the `validated` gate.

- **CONFIRMED** — the source says what the episode says.
- **CORRECTED** — the source says otherwise; the script was changed, and the change is listed under "Corrections applied to source" below.
- **UNRESOLVED** — could not be established from a source worth trusting, so it is not used on air.
- **APPROXIMATE** — checked, roughly right, and deliberately not cited on air.

## 1. The engine's own work (deep-research-v3, run wf_88bd2279-b2e, 2026-09-24)
116 unique claims from 24 finders (23 reported dead ends) · 12 verified single-vote with the primary opened, all 12 numeric · **12 held, 0 flagged, 0 unadjudicated** · 104 not adjudicated (reported, not hidden) · 18 gaps · 41 agents · 3.24 M tokens · 7.6 min. With nothing killed or flagged, the hand pass went to the load-bearing claims the engine never opened, then to a re-read of the held numeric claims (section 3 re-checked Akamai 47.11 %, Zapier, Italy, the Copilot RCT and METR — all held; two held claims carried a definition the engine had blurred: Akamai's 14.4 % and Zapier's 50 %).

## 2. The peg — what was hunted, and what was rejected
The blind sweep ran 14 queries with the topic's own vocabulary banned (no AI-tool, vendor, company or "ban/policy/leak" words), the Federal Register API over 2026-08-27 → 09-24 (29 presidential documents, 212 rules, 1,731 notices — none relevant), and the FTC and SEC press indexes. It found no fresh ban-leak incident and no new ruling. The strongest recent event instantiates the *alternative* to a ban rather than a ban failing, which is why the structural peg is Samsung.

| candidate | date | why it ranks where it does |
|---|---|---|
| **ChatGPT Mil on GenAI.mil; >2 M weekly users across three models** | 08-31 / 09-23 | **Description peg.** The "bring it inside the wall" design at the largest scale, and live this week. Adoption only — no security outcome exists. |
| **Samsung reopens (DX 06-12; OpenAI deal ~06-22)** | June 2026 | **Structural peg.** The best-known ban, reversed through contracts and a training gate. Durable. |
| California SB 574 on the governor's desk | presented 09-09; deadline 09-30 | Watch item: becomes the peg if signed — the first statute to draw the access-restriction line (for lawyers). |
| Zapier survey (26 % route around restrictions) | 07-29, syndicated 09-22 | A figure, not an event. |
| Heppner (S.D.N.Y.) | Feb 2026 | Rejected as peg: seven months old; used in the argument. |
| Trinidad v. OpenAI | Jan 2026 | Rejected: no new appellate ruling (appeal dismissed on procedure). |
| NYT v. OpenAI log orders | 2025 → Jan 2026 | Rejected: nothing new in the window. |
| Alabama AG subpoena to OpenAI | 08-24 | Rejected: about a lab's agents, not employee data. |
| CISA insider-threat guide update | 09-09 | Rejected: AI used to deceive, not staff input. |
| Recent breaches (Astrana Health, Five Below, an FBI employee) | 1–10 days | Rejected: social engineering, not AI. |
| EU high-risk employment guidelines (draft) | May 2026 | Rejected: about hiring decisions. |
| FTC "active listening" orders | 08-27 | Rejected: off-thesis. |
| DNC staff restriction | April 2026 | Rejected as peg: stale; used as an example. |

## 3. Hand pass on primaries the engine could not open
### Legal
| claim | verdict |
|---|---|
| Trinidad v. OpenAI dismissed a DTSA claim because entering the information into ChatGPT was voluntary disclosure | **CONFIRMED, narrowed.** The order: "By developing her ideas through ChatGPT, Trinidad voluntarily disclosed the existence of her ideas to OpenAI" and "Because Trinidad consented to disclosure … by accepting OpenAI's Terms, the Court cannot conclude that those protocols and frameworks are trade secrets." Pro se; her own ideas; Rule 12(b)(6), with prejudice, 2026-01-05; the theory called "highly improbable". Reconsideration denied 2026-02-04; 9th Cir. appeal dismissed 2026-04-06 on procedure. Not about an employer or an employee; not precedent. |
| Heppner held AI chats not privileged | **CONFIRMED.** Chats with Claude "were not protected from Government inspection by either the attorney-client privilege or the work product doctrine" (memorandum 2026-02-17; bench ruling 02-10). Reasoning includes Anthropic's consumer privacy policy; leaves counsel-directed use (*Kovel*) open. The PDF is a scan — transcribed by hand. The "2026 WL 436479" cite is not verified. |
| Warner v. Gilbarco held "the opposite" | **CORRECTED.** A magistrate judge's discovery order in a civil case: "Even if this information were discoverable, it is subject to protection under the work-product doctrine"; "ChatGPT (and other generative AI programs) are tools, not persons." Different facts from Heppner — not a clean split. |
| SB 574's operative text and deadline | **CONFIRMED.** "Not enter confidential, personal identifying, and other nonpublic information into a generative artificial intelligence system for which access … is not restricted to the attorney and persons authorized by the attorney." Enrolled 09-04, presented 09-09; passed 08-31 so Art. IV §10(b)(2) applies — act by 09-30. The fan-out's "public tools only" paraphrase (U77) conflicts with the text. |
| ABA Formal Opinion 512 requires informed consent | **CONFIRMED.** "a client's informed consent is required prior to inputting information relating to the representation into such a GAI tool" (self-learning tools). |
| California State Bar guidance | **CORRECTED.** The 2023 line ("must not input any confidential information … that lacks adequate confidentiality and security protections") has been replaced by a 2026 version: "may present material risks to confidentiality or security, absent informed client consent". Quote the current one. |
| NYSBA 2024 | **CONFIRMED.** Even with consent, "obtain assurance that the Tool provider will protect your client's confidential information". |
| FINRA recordkeeping explains the bank bans | **CORRECTED.** RN 24-09 does not mention recordkeeping. The 2026 Oversight Report says GenAI "can implicate rules regarding supervision, communications, recordkeeping"; RN 25-07 only asks. SEC off-channel sweep: "more than 100 firms and more than $2 billion in penalties" since Dec 2021 — about texting apps. The AI link is an inference, not a stated position. |

### Companies and government
| claim | verdict |
|---|---|
| Samsung: three incidents in ~20 days after ChatGPT was allowed; 1,024-byte cap | **CONFIRMED as reported.** Economist Korea headline: 20 days after chip sites allowed ChatGPT, 3 information-leak incidents; body "in less than 20 days" from the 11th; two equipment-information, one meeting-content; upload capped at 1,024 bytes per question. Samsung declined to confirm. The report calls it misuse; nothing shows a third party received anything. |
| Samsung May 2023 company-wide ban on devices and networks | **CORRECTED (attribution).** Bloomberg saw a memo to "one of its biggest divisions"; the device scope (company devices, and personal devices on internal networks; temporary) is TechCrunch's paraphrase. |
| Samsung 2026: ChatGPT Enterprise to all Korea staff and DX worldwide (06-21) | **CORRECTED.** Two steps: DX adopted ChatGPT, Gemini Enterprise and Claude from 06-12 after a ~2,500-person trial, gated on security training; then the OpenAI deal, announced ~06-22 (the OpenAI page is undated). No primary names the DS division. |
| GenAI.mil: ChatGPT Mil, IL5/CUI, >3 M personnel, data not used for training | **CORRECTED (source).** Date, IL5/CUI and ">3 million" confirmed on war.gov; the no-training line is OpenAI's, not the Department's. GenAI.mil launched 2025-12-09 with Gemini. |
| GenAI.mil >2 M weekly users | **CONFIRMED, narrowed.** "over 2 million people in a week across all three models" (CDAO Cameron Stanley via Punchbowl, in Defense One) — secondary-verified; not ChatGPT Mil alone. |
| RealClearDefense critique (09-14) | **CORRECTED (first publisher).** FPIF, 2026-09-07, Michael Aaron Cody: "convenience is exactly what can grind down security discipline over time." |
| Amazon's lawyer saw output that "resembled" internal data | **CORRECTED (wording).** "I've already seen instances where its output closely matches existing material" — a warning, not a finding. |
| JPMorgan, Goldman, Morgan Stanley, Apple — restrictions and later tools | **CONFIRMED** (JPMorgan's LLM Suite primary: "zero to 200,000 onboarded users within eight months"; the restriction "not because of a particular issue" is CNN's source). Goldman, Morgan Stanley, Apple: secondary. |
| DNC barred ChatGPT and Claude (April 2026) | **CONFIRMED** via Axios's own post. The Gemini exception is **UNRESOLVED** (a blog paraphrase only) — off air. |
| GSA USAi; OMB M-25-21 | **CONFIRMED.** USAi launched 2025-08-14; M-25-21: "a forward-leaning and pro-innovation approach". |

### Numbers
| claim | verdict |
|---|---|
| Cyberhaven 39.7 % of AI interactions involve sensitive data; once every three days | **CONFIRMED.** 222 companies; "sensitive" per each customer's own rules. |
| Cyberhaven per-tool personal-account shares (ChatGPT 32.3, Gemini 24.9, Claude 58.2, Perplexity 60.9) | **CONFIRMED.** Share of each tool's usage. |
| Cyberhaven 34.8 % vs 10.7 % (2026 report) | **CORRECTED.** From the **2025** report (2025-04-23), with 27.4 % in between. |
| Cyberhaven 2023: 4.7 % pasted; 11 % of pastes | **CONFIRMED** (dated June 2023; Wayback). Superseded — not used. |
| Netskope 78 % → 47 %; 25 % → 62 % | **CONFIRMED.** Share of genAI users; Oct 2024 → Oct 2025; no customer count. |
| Akamai/LayerX 47.11 % personal identities | **CONFIRMED.** Share of conversations; no sample disclosed. |
| Akamai 14.4 % of corporate-email conversations on personal free tiers | **CORRECTED.** 14.39 % of conversations under a corporate identity (≈7.6 % of all); the report's own prose mis-states it. APPROXIMATE — off air. |
| Harmonic >4 % of prompts, >20 % of uploads | **CORRECTED.** 4.37 % / ~22 % is Q2 2025 (1 M prompts, 20 K files); "22 million" is a separate 2025 dataset (579,113 exposures). |
| Zapier 26 % and 50 % | **CONFIRMED / narrowed.** n = 1,005, Centiment, May 13–21 2026, firms that provide paid AI. The 50 % may double-count — use 26 %. |
| KPMG 57 % hide use; ~half breach policy | **CONFIRMED**, plus the ban split: uploading "most common of employees who report their organization has banned generative AI (67%) or has a policy guiding generative AI use (56%), compared to those in organizations without such policies (33%)" — the report: "This suggests outright bans may be ineffective". Correlational, self-report. |
| Gartner 69 % of 302 security leaders | **CORRECTED (date).** 2025-11-19, not 10-21; suspicion or evidence, not measured use. |
| Verizon DBIR "67 % non-corporate accounts" | **CORRECTED.** No 67 %. Of the ~15 % (14 % in the results section) routinely using GenAI on corporate devices, 72 % used non-corporate emails as identifiers. |
| BlackBerry 75 % implementing or considering bans (2023) | **CONFIRMED.** Intent, on work devices; 2,000 IT decision makers. |
| ISACA 38 % formal AI policy, up from 28 % | **CONFIRMED.** 3,400+ professionals, not firms. |
| "2 % of workers say AI is prohibited" | **APPROXIMATE.** A content site's own opt-in Prolific survey (n = 2,078). Off air. |
| Italy 2023: ~50 % output drop, 8,000+ developers, VPN searches | **CORRECTED (detail).** "decreased by around 50% in the first two business days … and recovered after that"; the abstract names Google search and Tor usage, not VPN. A preprint. |
| Copilot RCTs +26 % (4,867 developers); METR −19 % | **CONFIRMED.** 26.08 % (SE 10.3 %), Microsoft-affiliated authors; METR: 16 developers, "take 19% longer". Neither measures a ban. |
| "89 % reduction with approved alternatives" (healthcare) | **UNRESOLVED.** Untraceable (the engine's own caveat). Off air. |

### Data terms, incidents, regulators
| claim | verdict |
|---|---|
| Anthropic consumer training is opt-in with 5-year retention | **CORRECTED.** "We will train new models using data from Free, Pro, and Max accounts when this setting is on"; five-year retention if allowed; Work/Government/Education/API excluded. Anthropic's own pop-up image shows the toggle **already on** (checked by the main session). Deadline 2025-09-28 in the 08-29 copy, 2025-10-08 on the live page. |
| OpenAI consumer trains by default; business tiers don't | **CONFIRMED.** Opt-out is "Improve the model for everyone"; "By default, we don't use inputs or outputs from ChatGPT Business, ChatGPT Enterprise, ChatGPT Edu, or our API". |
| NYT preservation order covered consumer logs until 2025-09-26 | **CORRECTED (scope).** Order of 2025-05-13; ended by stipulated order ("terminated as of September 26, 2025"). OpenAI's own post: Free, Plus, Pro **and Team** affected. 20 M de-identified logs ordered produced; affirmed 2026-01-05 ("neither clearly erroneous nor contrary to law"). |
| March 2023 ChatGPT bug exposed Plus payment details | **CONFIRMED.** "1.2% of the ChatGPT Plus subscribers who were active during a specific nine-hour window"; redis-py. |
| Credential theft: 101K (Group-IB), ~300K (IBM) | **CONFIRMED.** 101,134 infected devices; "over 300,000 ChatGPT credentials in 2025". No Claude figure disclosed. |
| Share-links indexed: ChatGPT, Grok | **CONFIRMED**, and **Claude too**: "just under 600" (Forbes, Sept 2025) and again July 2026 (Axios). |
| EchoLeak CVSS 9.3, patched, not exploited | **CONFIRMED, nuanced.** Microsoft 9.3 Critical, "exploited: No", 2025-06-11; NIST 7.5. |
| OWASP: Sensitive Information Disclosure #2 (moved from #6) | **CONFIRMED.** LLM02:2025; LLM06 in 2023 v1.1. |
| Italy's Garante: block and €15 M fine | **CORRECTED.** Block 2023-03-30 → reopened 04-28; the €15 M fine (Dec 2024) was removed after the Court of Rome upheld OpenAI's appeal (judgment 4153/2026). |
| EDPB, CNIL, UK, MAS, HHS, Australia — stances | **CONFIRMED** as in the brief: controls, not bans; HHS has no staff-chatbot guidance; Australia's only ban is vendor-specific (DeepSeek). |
| A second sanctioned-tool exposure besides EchoLeak | **CONFIRMED:** Slack AI (patched 2024-08-20), Agentforce ForcedLeak (CVSS 9.4), and for fairness Anthropic's "Claude Pirate" report ("should not have been closed as out-of-scope"). |
| Any before/after measurement of a workplace ban | **UNRESOLVED — none exists that either pass could find.** Checked: academic searches, GAO-25-107653, IG audits, a clinician survey, Israel's hospital block (June 2026; "doctors moved to phones" is quoted opinion). The script says so. |

## 4. Gaps the critics named — disposition
| gap | disposition |
|---|---|
| FINRA/SEC recordkeeping as a non-leak reason for bank bans | Closed: an inference only (section 3). |
| German works councils (BetrVG §87) | Open — not researched; the script must not imply every employer decides alone. |
| CNIL / EDPB | Closed (section 3). |
| California, NY, PA bar opinions | California and NY closed; PA not researched. |
| HHS / MAS | Closed: HHS has none; MAS manages, consultation only. |
| Civilian federal equivalent | Closed: GSA USAi; OMB M-25-21. |
| Causal evidence that bans relocate | Closed as ABSENT — stated on air as absent. |
| Security outcomes for Samsung / GenAI.mil | Closed as ABSENT — "adoption confirmed, outcome unmeasured". |
| Device vs account | Closed: telemetry is corporate-device only; only surveys reach phones. |
| Evidence that hard-prohibition sectors "hold" | Open — none found; the green side is not given it. |
| METR as the cost of a ban | Closed: not usable for that. |
| Second enterprise-tool incident | Closed (section 3). |
| Economist Korea original | Closed (section 3). |
| Trinidad / Heppner primary text | Closed (section 3). |
| Vendor sample sizes | Closed where disclosed (Cyberhaven 222 companies; Harmonic; Zapier); Netskope and LayerX disclose none. |
| A Claude credential figure | Closed: not disclosed. |

## Corrections applied to source
No script exists yet; every CORRECTED row above is written into the research brief (settled facts and "Script traps") so the first draft starts from the corrected wording.

## Fairness audit
- The show is made with Anthropic's Claude. Four facts cut against Anthropic and are in the brief at the same weight as the OpenAI material: the consumer toggle shown ON with five-year retention; Claude's 58.2 % personal-account share; two Claude share-link indexing episodes; Heppner turning on Claude and Anthropic's consumer policy; plus the "Claude Pirate" report and Claude's inclusion in Samsung's and the DNC's lists.
- Neither side is given evidence the record lacks: green does not get "bans hold in defence/healthcare", gold does not get "bans cause the move to phones".
- Topic shape: as pitched ("ban or allow") the question is lopsided — flagged to Lucas with the tools-vs-data framing.

## Open questions this episode could not settle
- Whether any workplace ban reduces or relocates exposure (unmeasured).
- Security outcomes for Samsung 2026 and GenAI.mil (unreported).
- SB 574's fate (deadline 2026-09-30).
- German co-determination; Pennsylvania bar opinion; HHS rule finalisation; MAS final guidelines.

## 5. Script-pass additions (2026-09-28, build session)
Peg re-run 2026-09-28: peg unchanged (GenAI.mil; Defense One re-fetched, quote and date hold; war.gov now 403, the 09-24 extract stands). SB 574: still unsigned as of the 09-27 list; the script says "the legislature has passed a bill" (true whatever the governor does) — ⏭ re-check on/after 09-30 for the description. Rejected at the re-run: the Zapier syndication (same survey), OneTrust 09-15 (vendor figure, unopened), Stacker July survey (untraced), DefenseScoop GenAI.mil follow-up (same story), DeepSeek device bills (2025), NYC schools (not workplace), Newsom 09-18 EO (off-thesis), trade-secret theft suits (not AI-tool leaks).

| claim | verdict |
|---|---|
| Tate Group Automotive v. Legacy Automotive Capital (Tex. Bus. Ct., 11th Div., 2026-06-03, No. 25-BC11B-0020) protected ChatGPT chats as work product | **CONFIRMED, narrowed** (court-stamped minute entry, re:SearchTX copy; extracted and grep-checked). A company plaintiff's principal's ChatGPT conversations; "The remainder may be withheld from production on the basis of attorney work product"; "the Court disagrees with … United States v. Heppner". Some pages ordered produced; not final. No tier, no terms-of-service analysis. |
| Assini v Hayward, 2026 NY Slip Op 26086 (Sup. Ct. Nassau, 2026-06-04) | **CONFIRMED, narrowed** (official slip opinion, nycourts.gov reporter; extracted and grep-checked). A pro se defendant; subpoena to OpenAI quashed on CPLR 3101(d) anticipation-of-litigation grounds, adopting Morgan v. V2X. Spencer Fane's "legal pad" and "held … does not waive" overstate the order. |
| Spoken: "two state trial courts, in Texas and New York, shielded a litigant's ChatGPT chats from the other side" | **CONFIRMED** — deliberately says nothing about tiers, waiver by terms, or employees. |
