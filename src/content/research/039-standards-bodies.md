---
title: "The Role of Standards Bodies in AI Governance"
excerpt: "Technical standards organizations may shape AI governance as much as legislation. An examination of who sets AI standards, how standards work, and their governance implications."
date: 2026-01-25
categories:
  - Governance Analysis
tags:
  - standards
  - governance
  - regulation
  - interoperability
---

## Standards as Governance

When the EU AI Act requires "high-quality data" for AI training or "appropriate risk management," what do these requirements mean in practice? The answer will largely be determined by technical standards—detailed specifications developed by standards bodies that translate legal requirements into operational reality.

Standards are a form of governance that often operates below public attention. They shape technology development, enable interoperability, and effectively regulate through technical specification. For AI, standards may be as important as legislation.

This analysis examines how AI standards are developed, who participates in standards-setting, and what this means for AI governance.

## What Standards Do

Technical standards serve multiple functions.

### Specification

Standards define precisely what requirements mean. A regulation might require AI systems to be "transparent." A standard specifies what transparency requires: what documentation, what access, what explanations, in what format.

### Interoperability

Standards enable systems to work together. A [machine-readable constraint schema](/research/machine-readable-constraint-schema/) is useful only if systems implement it consistently. Standards make interoperability possible.

### Quality Assurance

Standards often encode best practices, allowing organizations to demonstrate they follow established procedures. Compliance with recognized standards signals quality.

### Trade Facilitation

International standards reduce trade barriers. Products meeting recognized standards can access multiple markets without redundant testing.

### Liability Protection

Compliance with recognized standards can provide legal protection. Organizations following standard practices may face less liability than those that don't.

## Key Standards Organizations

Several organizations develop AI-relevant standards.

### ISO/IEC

The International Organization for Standardization (ISO) and International Electrotechnical Commission (IEC) develop international standards through national member bodies.

**AI-relevant work:**
- ISO/IEC 42001: AI management systems
- ISO/IEC 23894: AI risk management
- ISO/IEC 22989: AI concepts and terminology
- ISO/IEC 23053: AI trustworthiness
- Numerous standards in development

ISO/IEC standards are developed through consensus among national standards bodies, with participation from industry, government, and academia.

### IEEE

The Institute of Electrical and Electronics Engineers develops technical standards, particularly for emerging technologies.

**AI-relevant work:**
- IEEE 7000 series on ethical technology design
- IEEE 2941 on AI model representation
- Standards on autonomous systems, explainability, and safety

IEEE standards often emerge from technical communities and may be adopted more rapidly than ISO processes.

### NIST

The US National Institute of Standards and Technology develops guidelines that often function as standards, particularly within the US government context.

**AI-relevant work:**
- AI Risk Management Framework
- Guidelines on trustworthy AI
- Standards for specific AI applications

NIST frameworks often inform both US regulation and international standards development.

### CEN/CENELEC

European standards organizations develop standards that can be harmonized with EU legislation, giving them particular importance for the AI Act.

**Role:** When the EU AI Act references standards, CEN/CENELEC develops the harmonized standards that provide presumption of conformity. Compliance with these standards creates a legal presumption of meeting regulatory requirements.

### Industry Consortia

Industry groups develop specifications that function as de facto standards:

- Partnership on AI developed practices for responsible AI
- MLCommons develops benchmarks
- Model card and data sheet conventions emerged from industry practice

These aren't formal standards but shape practice significantly.

## How Standards Are Developed

Understanding the standards development process is essential for understanding its governance implications.

### Formal Process

ISO/IEC and similar organizations follow formal procedures:

1. **Proposal:** A new work item is proposed
2. **Preparation:** A working group develops a draft
3. **Committee stage:** Technical committee reviews
4. **Enquiry:** Draft circulated for national body comments
5. **Approval:** National bodies vote
6. **Publication:** Standard is issued

This process typically takes 3-5 years—faster than legislation but slow relative to AI development.

### Participation

Who participates in standards development?

- **National bodies:** ISO/IEC work through national standards organizations
- **Industry representatives:** Companies send technical experts to working groups
- **Government representatives:** Regulators and technical agencies participate
- **Academics:** Researchers contribute expertise
- **Civil society:** Limited participation, though increasing

Participation is heavily weighted toward well-resourced organizations that can afford to send representatives to multiple meetings over several years.

### Consensus

Standards bodies typically operate by consensus rather than voting. This means that determined opposition can slow or modify standards development. It also means that standards generally reflect views acceptable to major participants.

## Governance Implications

Standards-setting has significant implications for AI governance.

### Who Decides?

Standards development is dominated by well-resourced organizations—primarily large technology companies, major standards bodies, and government technical agencies. Civil society participation is limited. Those affected by AI often have no voice in standards that will govern it.

This creates accountability concerns. Standards that effectively regulate millions of people's experiences with AI are developed through processes with limited democratic oversight.

### Corporate Influence

Companies have strong incentives to shape standards that affect their products. Standards can:

- Lock in advantages if aligned with existing products
- Impose costs on competitors
- Create barriers to entry for new firms
- Legitimate existing practices

The risk of capture is significant. We've explored similar dynamics in [who watches the watchers](/research/meta-governance-auditors/).

### Speed Mismatch

Formal standards development takes years. AI development moves faster. By the time a standard is published, the technology it addresses may have evolved significantly.

This creates tension between thoroughness and relevance. Faster processes risk inadequate review; slower processes risk obsolescence.

### Implementation Gaps

A standard exists only on paper until it's implemented. Questions arise:

- Who certifies compliance?
- How is compliance verified?
- What happens when standards are violated?

Standards without implementation infrastructure may have limited practical effect. This connects to our analysis of [self-reporting versus audit](/research/self-reporting-vs-audit/).

### Geographic Politics

Standards development involves geographic tensions:

- US and European approaches may differ
- China increasingly participates in and influences international standards
- Developing countries often lack resources to participate effectively

Standards can become venues for international competition, with different blocks promoting different approaches.

## AI-Specific Challenges

AI presents particular challenges for standards development.

### Rapid Capability Change

AI capabilities evolve faster than standards processes can track. A standard for language models written in 2024 may be inadequate for models deployed in 2026.

This suggests standards should focus on processes rather than specific technical requirements—management systems, risk assessment methodologies, documentation practices—rather than specifications that assume fixed capabilities.

### Opacity

AI systems' opacity makes verification difficult. How do you standardize "explainability" for systems that aren't fully understood by their creators? As we explored in [explaining constraints](/research/explaining-constraints/), this is technically challenging.

### Context Dependence

AI behavior depends heavily on context—training data, deployment environment, user interactions. Standards that work for one context may fail in others. This argues for standards that emphasize contextual assessment rather than universal requirements.

### Value Judgments

Many AI governance questions involve values, not just technical choices. What counts as "fair"? How much risk is acceptable? Standards that purport to be technical often embed contested value judgments.

This is problematic because standards processes aren't designed for value deliberation—they're designed for technical consensus.

## Improving Standards Governance

Several reforms could improve AI standards governance.

### Broader Participation

Standards bodies should actively facilitate civil society, academic, and developing country participation. This might require:

- Funding for participation
- Remote participation options
- Plain language accessibility
- Public comment periods

### Transparency

Standards development should be more visible:

- Public documentation of discussions and decisions
- Disclosure of participant affiliations
- Opportunities for public input

### Accountability Mechanisms

Standards should include provisions for review and revision:

- Regular reassessment schedules
- Mechanisms for reporting problems
- Processes for updating when technology changes

### Democratic Linkage

Standards that implement legal requirements should maintain connection to democratic processes:

- Legislative oversight of standard development
- Clear criteria for what standards must achieve
- Mechanisms for challenging standards that don't meet requirements

### Separation of Concerns

Standards should distinguish technical specifications from value choices. Where standards embed value judgments, those judgments should be explicit and subject to appropriate deliberation.

## Conclusion

Standards will shape AI governance as much as legislation. They translate abstract requirements into operational specifications, enable interoperability, and establish expectations for practice.

But standards governance has significant limitations: limited participation, corporate influence, slow development, and unclear accountability. For AI, where stakes are high and change is rapid, these limitations matter.

Improving standards governance requires attention to who participates, how decisions are made, and how standards connect to broader democratic processes. Without such improvements, AI governance may be decided in standards bodies without adequate public oversight.

## Further Reading

- [A Machine-Readable Constraint Schema](/research/machine-readable-constraint-schema/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/meta-governance-auditors/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/self-reporting-vs-audit/)
- [The EU AI Act: What It Misses](/research/eu-ai-act-gaps/)
