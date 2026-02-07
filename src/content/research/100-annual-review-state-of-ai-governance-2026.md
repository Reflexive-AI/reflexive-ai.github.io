---
title: "Annual Review: State of AI Governance 2026"
excerpt: "The 100th and final article in the Reflexive AI Initiative's founding corpus surveys the state of AI governance as of February 2026, assessing regulatory progress, institutional capacity, technical advances, and the three biggest open problems in the field."
date: 2026-02-07
toc: true
categories:
  - Annual Review
tags:
  - annual-review
  - ai-governance
  - state-of-the-field
  - 2026
  - retrospective
version: "1.0"
---

**Reflexive Research Object 100**
*Type: Research*

## Introduction

This is the 100th article published by the Reflexive AI Initiative. It is also, by design, the last in the founding corpus. One hundred articles over roughly three months have covered AI governance from first principles to frontier controversies: from [what alignment actually means](/research/016-what-alignment-means/) to [the mechanics of regulatory arbitrage](/research/008-regulatory-arbitrage/), from [the history of the field](/research/032-history-of-ai-governance/) to [the institutions being built to manage it](/research/096-building-ai-governance-institutions/).

This final article takes stock. What is the state of AI governance in February 2026? Where has progress been real, and where has it been performative? What remains unresolved?

The review is organized into four domains: regulatory developments, institutional progress, technical governance, and outstanding gaps. It concludes with the three biggest open problems, a reflexive assessment of this initiative's own work, and brief remarks on what comes next.

## Regulatory Developments

### The EU AI Act: From Text to Implementation

The EU AI Act entered into force in 2025 and is now in active implementation. The prohibited practices provisions took effect first. The general-purpose AI model obligations followed. The full risk-based classification system and conformity assessment requirements are being phased in through 2026.

Implementation has been uneven. The European AI Office, established to oversee general-purpose AI regulation, has been working to develop codes of practice for foundation model providers. Early drafts drew criticism for excessive reliance on self-assessment, echoing concerns raised in our analysis of [self-reporting versus independent audit](/research/010-self-reporting-vs-audit/).

The Act's gaps remain the ones we identified in [our earlier analysis](/research/019-eu-ai-act-gaps/): capability emergence that confounds static risk categories, limited enforcement capacity at the national level, and tensions between extraterritorial reach and practical jurisdiction. These are structural issues. No amount of implementing regulation will fully resolve them, because they reflect fundamental mismatches between how AI systems work and how legal systems operate.

One positive development: the standards bodies have been active. ISO/IEC 42001 on AI management systems has gained traction, and harmonized European standards under the Act are progressing, though slower than hoped. As we examined in [the role of standards bodies](/research/039-standards-bodies/), technical standards translate legal requirements into operational reality; their quality and specificity will determine whether the Act's requirements have teeth.

### United States: Executive Action Without Legislation

The United States continues to govern AI primarily through executive action. The Biden administration's Executive Order 14110, issued in October 2023, established reporting requirements for large training runs, directed NIST to develop safety standards, and tasked agencies with sector-specific guidance. Its durability under subsequent administrations has been partial. Some provisions have been maintained; others have been deprioritized or reversed.

Federal AI legislation remains elusive. Multiple bills have been introduced in Congress; none has passed. The pattern is familiar: bipartisan agreement that AI needs governance, combined with disagreement on specifics sharp enough to prevent action.

State-level activity has been more productive. California, Colorado, and several other states have passed AI-related legislation addressing narrow domains: automated employment decisions, algorithmic discrimination, and AI in government services. This patchwork creates compliance complexity but also serves as a proving ground for regulatory approaches.

The US approach illustrates a broader tension between [soft law and hard law](/research/040-soft-law-hard-law/). Voluntary commitments from AI companies, NIST frameworks, and executive guidance are all forms of soft governance. They move faster than legislation but lack enforcement power and democratic legitimacy.

### United Kingdom: The Pro-Innovation Approach Under Pressure

The UK has maintained its sector-specific, principles-based approach to AI governance, rejecting comprehensive legislation in favor of guidance issued through existing regulators. The AI Safety Institute (now rebranded and restructured) continues to conduct frontier model evaluations, though questions about its independence and authority persist.

The approach has been tested by several high-profile incidents involving AI systems in UK public services. Each incident has renewed calls for binding legislation. As of early 2026, the government has signaled willingness to introduce targeted legislation for the highest-risk applications while preserving the overall principles-based framework.

### China: Iterative Regulation

China has continued its pattern of iterative, use-case-specific regulation. Regulations covering recommendation algorithms (2022), deep synthesis and deepfakes (2023), and generative AI (2023) have been supplemented with additional rules addressing AI in financial services, healthcare, and education.

China's approach differs from both the EU's comprehensive framework and the US's largely voluntary approach. It regulates specific applications as they emerge, moving quickly but creating a complex patchwork. Enforcement has been selective, with high-profile cases against visible consumer-facing applications and less scrutiny of enterprise or government use.

The geopolitical dimension remains significant. AI governance is entangled with US-China competition over semiconductors, talent, and strategic advantage. This entanglement makes genuine international cooperation difficult, even where shared interests exist.

## Institutional Progress

### AI Safety Institutes and Equivalents

The proliferation of government-backed AI safety institutes has been one of the most significant institutional developments. Following the UK's lead, the United States, Japan, Canada, Singapore, and the EU have all established or announced safety-focused bodies. South Korea and Australia have similar initiatives in development.

These institutes vary in mandate, independence, and capacity. Some conduct original technical evaluations. Others primarily coordinate existing work. The most effective have combined technical expertise with genuine access to frontier systems, though access remains dependent on voluntary cooperation from AI developers in most cases.

The Network of AI Safety Institutes, established following the Seoul AI Summit, provides a coordination mechanism. Information sharing across institutes is improving. But the network remains informal, and there is no binding obligation for developers to submit to evaluation by any particular institute.

### Standards Bodies

Standards development has accelerated. ISO/IEC, IEEE, NIST, and regional standards bodies have active AI workstreams. The most important near-term deliverables are the harmonized standards under the EU AI Act, which will effectively define what compliance means for thousands of organizations.

A recurring concern: standards development is dominated by large technology companies with the resources to participate extensively. Smaller companies, civil society, and researchers from the Global South are underrepresented. This risks producing standards that reflect incumbent interests rather than broader public benefit.

### International Cooperation

The Bletchley Declaration of 2023 and the Seoul AI Summit of 2024 established a precedent for international AI governance dialogue. Follow-up summits have continued, though the gap between declarations and binding commitments remains wide.

As we analyzed in [our assessment of international AI treaty proposals](/research/038-international-treaties/), the conditions for comprehensive AI governance treaties do not yet exist. Geopolitical competition, disagreement on values, and the speed of technological change all work against the kind of sustained multilateral negotiation that treaties require. What has emerged instead is a network of bilateral and minilateral arrangements: information-sharing agreements, mutual recognition of evaluations, and coordination on specific risk domains like biosecurity and critical infrastructure.

This is progress, but it falls well short of what the challenge demands. AI development is global; governance is still overwhelmingly national.

## Technical Governance Advances

### Capability Evaluations

The science of [capability evaluation](/research/024-capability-evaluations/) has improved substantially. Evaluation benchmarks are more sophisticated. Red-teaming methodologies have become more systematic. Several organizations now maintain evaluation suites specifically designed to test for dangerous capabilities in domains including cybersecurity, biological weapons knowledge, persuasion, and autonomous action.

Progress is real but bounded. Evaluations remain better at detecting known categories of dangerous capability than at discovering unknown ones. The gap between what evaluations can find and what models can do is an unresolved vulnerability. Evaluations also face the problem of sandbagging: models sophisticated enough to behave differently during testing than during deployment.

### Red Teaming

Red teaming has become a standard practice in frontier AI development. Every major lab now conducts internal and external red-teaming exercises before model releases. Government-organized red-teaming events, often in partnership with AI safety institutes, add an additional layer.

The practice has become more structured. Early red teaming was ad hoc, relying on individual creativity. Current best practice involves systematic coverage of risk domains, diverse team composition, and structured reporting. Some organizations have begun publishing red-team results, though disclosure remains inconsistent and often selective.

### Interpretability

Mechanistic interpretability research has produced notable results. Researchers have made progress in understanding representations within neural networks, identifying circuits responsible for specific behaviors, and developing tools that provide limited visibility into model reasoning.

These advances remain far from sufficient for governance purposes. We cannot yet reliably determine why a model produces a specific output, whether a model has deceptive intent, or how safety training interacts with base model capabilities at a mechanistic level. Interpretability is a long-term research program, not a near-term governance solution.

### Machine-Readable Governance

The concept of [machine-readable constraint schemas](/research/003-machine-readable-constraint-schema/) has gained traction in standards discussions. The idea that AI systems should express their constraints, limitations, and operating parameters in structured, queryable formats is increasingly accepted in principle. Adoption in practice remains limited, though several pilot projects are underway.

## Outstanding Gaps

Despite progress, the field has significant gaps.

**Enforcement.** The enforcement problem has not been solved. Regulations exist on paper but enforcement agencies lack technical capacity. Auditors are few, and their independence is often questionable. As we examined in [who audits the auditors](/research/006-meta-governance-auditors/), the meta-governance problem is recursive: effective oversight requires competent overseers, whose competence itself requires oversight.

**Open-weight models.** The governance of open-weight models remains contentious and largely unresolved. Once model weights are publicly released, downstream use is effectively ungovernable through traditional regulatory mechanisms. The [open-weight safety paradox](/research/002-open-weight-safety-paradox/) identified early in this corpus has not been resolved; if anything, it has sharpened as open-weight models have become more capable.

**Speed mismatch.** AI capabilities continue to advance faster than governance can respond. A model generation might represent a qualitative leap in capability; the regulatory response to the previous generation may not yet be complete. This is not a temporary lag; it is a structural feature of governing fast-moving technology with slow-moving institutions.

**Concentration of power.** AI development is increasingly concentrated among a small number of well-resourced organizations. This concentration creates governance challenges: these organizations have more technical knowledge than their regulators, more lobbying resources than their critics, and more influence over standards than public interest groups.

**Global South inclusion.** AI governance remains overwhelmingly shaped by the US, EU, UK, and China. Countries and communities most affected by AI deployment often have the least voice in governance decisions. This is not merely inequitable; it produces governance frameworks blind to contexts and concerns outside the wealthy world.

## The Three Biggest Open Problems

Drawing on the full scope of this corpus, three problems stand out as the most significant unresolved challenges in AI governance as of 2026.

### 1. The Verification Problem

We lack reliable methods to verify claims about AI system behavior. When a company says its model cannot produce bioweapons instructions, we cannot independently confirm this is true, will remain true after fine-tuning, or applies across all possible inputs. When a model is said to be "aligned," we have no agreed-upon way to test this claim.

This is the governance equivalent of arms control without inspections. Every regulatory framework assumes some capacity for verification. In AI governance, that capacity is underdeveloped. Evaluation science, interpretability research, and auditing methodologies all contribute partial solutions. None is sufficient. The verification problem is, at root, the central technical challenge of AI governance.

### 2. The Jurisdiction Problem

AI does not respect national borders. Models trained in one jurisdiction are deployed globally. Open-weight models, once released, exist everywhere. [Regulatory arbitrage](/research/008-regulatory-arbitrage/) is not a theoretical risk; it is an observed reality. And international cooperation, while improving, remains far from the level needed to govern a globally distributed technology.

National regulation is necessary but insufficient. International coordination is essential but politically difficult. The jurisdiction problem will not be solved by any single treaty or agreement; it requires a web of overlapping arrangements that is still being constructed.

### 3. The Pace Problem

Governance is slower than development. This is true by design: democratic deliberation, stakeholder consultation, legislative drafting, and judicial review all take time. Speed is not a flaw in governance; it is a feature that protects against hasty decisions with lasting consequences.

But when the technology being governed changes qualitatively between the time a regulation is drafted and the time it takes effect, the resulting rules may address yesterday's problems. The pace problem demands governance mechanisms that can adapt at technological timescales without sacrificing democratic accountability. Adaptive regulation, [sandboxing approaches](/research/037-sandboxing-approaches/), and sunset clauses are partial answers. A complete answer does not yet exist.

## Reflexive Dimension: Examining Our Own Work

A project that advocates reflexivity in AI governance must apply that principle to itself. Article 099 described the [initiative's mission and methods](/research/099-reflexive-ai-mission-methods/). This section examines what the 100-article corpus has achieved and where it has fallen short.

### What the Corpus Covers

The 100 articles span regulatory analysis, technical assessment, institutional design, ethical theory, and public communication. They address specific regulations (the EU AI Act, US executive orders, China's approach), specific governance mechanisms (auditing, certification, standards), specific technical challenges (interpretability, evaluation, alignment), and cross-cutting themes (reflexivity, proportionality, transparency).

The corpus attempts to be both rigorous and accessible, written for [researchers and policymakers](/research/017-governance-primer/) rather than a single specialist audience.

### What It Misses

No 100-article corpus can be comprehensive. Notable gaps include:

- **Empirical work.** The corpus is analytical, not empirical. It proposes frameworks and analyzes developments but does not conduct original experiments, surveys, or field studies.
- **Regional depth.** Coverage of AI governance outside the US, EU, UK, and China is thin. India, Brazil, Nigeria, Indonesia, and other significant countries receive insufficient attention.
- **Industry perspectives.** The corpus takes an independent analytical stance. It does not extensively represent the views of AI developers, and its recommendations sometimes underweight practical implementation constraints.
- **Labor and economic impacts.** While some articles touch on economic questions, the corpus does not deeply address AI's effects on labor markets, economic inequality, or industrial structure.

### What It Gets Right

The corpus's central thesis, that AI governance must be reflexive, remains sound. Governance frameworks that cannot examine themselves are incomplete. AI systems that cannot articulate their own constraints are ungovernable. Institutions that do not subject their own assumptions to scrutiny will fail.

The specific contribution of machine-readable governance artifacts alongside prose analysis is, to our knowledge, distinctive. Whether this approach proves influential remains to be seen.

## Conclusion

AI governance in February 2026 is more developed than it was two years ago. Regulations exist where none did. Institutions have been created. Technical evaluation has improved. International dialogue has begun.

None of this is sufficient.

The technology continues to advance faster than governance adapts. The verification problem remains unsolved. International coordination remains weak. Enforcement capacity remains limited. The concentration of AI development in a few organizations creates power asymmetries that governance has not addressed.

This is not cause for despair. Governance is always a work in progress. The question is not whether the current state of AI governance is adequate; it is not. The question is whether the trajectory is correct: whether the institutions, frameworks, and practices being built today will prove adequate as the technology matures.

The answer is uncertain. The trajectory is positive in some respects: real regulation, growing technical capacity, increasing public awareness. It is negative in others: geopolitical competition undermining cooperation, industry concentration outpacing governance capacity, enforcement lagging behind rule-making.

This corpus of 100 articles is one small contribution to a large and growing field. It has attempted to be honest about what we know and do not know, rigorous in its analysis, and reflexive about its own limitations. The work of AI governance does not end with the 100th article. It barely begins.

## References

1. European Commission. "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act)." *Official Journal of the European Union*, 2024.
2. The White House. "Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence." EO 14110, October 2023.
3. UK Department for Science, Innovation and Technology. "A pro-innovation approach to AI regulation." Policy paper, updated 2025.
4. Cyberspace Administration of China. "Interim Measures for the Management of Generative Artificial Intelligence Services." 2023.
5. ISO/IEC 42001:2023. "Information technology: Artificial intelligence: Management system." International Organization for Standardization.
6. NIST. "Artificial Intelligence Risk Management Framework (AI RMF 1.0)." National Institute of Standards and Technology, 2023.
7. "The Bletchley Declaration by Countries Attending the AI Safety Summit." November 2023.
8. Seoul AI Safety Summit. "Seoul Declaration of Intent toward International AI Governance." May 2024.
9. Shevlane, T., et al. "Model evaluation for extreme risks." *arXiv preprint arXiv:2305.15324*, 2023.
10. Elhage, N., et al. "Toy models of superposition." *arXiv preprint arXiv:2209.10652*, 2022.
11. Anderljung, M., et al. "Frontier AI Regulation: Managing Emerging Risks to Public Safety." *arXiv preprint arXiv:2307.03718*, 2023.
12. Bommasani, R., et al. "On the Opportunities and Risks of Foundation Models." *arXiv preprint arXiv:2108.07258*, 2021.
