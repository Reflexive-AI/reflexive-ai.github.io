---
title: "Dual-Use AI: The Biological Research Case"
excerpt: "How AI is transforming biological research—and why the same capabilities that could cure diseases could enable bioweapons. A case study in dual-use governance."
date: 2026-01-23
categories:
  - Governance Analysis
tags:
  - dual-use
  - cbrn
  - safety
  - risk-assessment
  - governance
---

## The Dual-Use Dilemma

Some technologies are inherently dual-use: the same capabilities that enable beneficial applications also enable harmful ones. Nuclear physics gives us both power plants and weapons. Cryptography protects both dissidents and criminals.

AI applied to biological research is perhaps the most consequential contemporary example of dual-use technology. The same AI systems that could accelerate drug discovery, predict protein structures, and design novel therapies could also potentially help bad actors create dangerous pathogens.

This analysis examines the AI-biology dual-use problem as a case study in governance challenges—how we might capture benefits while mitigating catastrophic risks.

## What AI Can Do in Biology

AI capabilities in biological research have advanced dramatically.

**Protein structure prediction.** AlphaFold and similar systems can predict how proteins fold into three-dimensional structures from their amino acid sequences. This accelerates drug discovery, disease understanding, and fundamental biology research.

**Molecular design.** AI systems can design novel molecules with desired properties—potential drugs, catalysts, and materials. This could dramatically speed pharmaceutical development.

**Genomic analysis.** AI can identify patterns in genomic data that would be impossible for humans to detect, advancing understanding of genetic diseases and potential treatments.

**Lab automation.** AI systems increasingly control laboratory equipment, enabling faster experiments and novel experimental designs.

**Synthesis planning.** AI can determine how to synthesize complex molecules, providing step-by-step instructions for chemical production.

These capabilities are already transforming biological research. They're also why security experts are concerned.

## The Bioweapon Risk

The same AI capabilities that accelerate beneficial research could potentially accelerate weapons development.

**Pathogen design.** AI systems that understand protein structures and immune evasion could potentially help design pathogens that are more transmissible, more deadly, or more resistant to treatments.

**Synthesis guidance.** AI that provides synthesis instructions for beneficial molecules could also provide instructions for dangerous ones. An AI system that helps researchers synthesize a potential drug might, without appropriate safeguards, help bad actors synthesize a toxin.

**Lowering barriers.** Perhaps most concerning, AI could lower the expertise barriers to bioweapon development. Creating dangerous pathogens currently requires sophisticated laboratory skills and deep biological knowledge. AI assistance might make such activities accessible to those without traditional expertise.

**Acceleration.** Even if AI doesn't enable anything that wasn't theoretically possible before, it could dramatically accelerate development timelines. A bioweapon that would take a state actor years to develop might be achievable in months with AI assistance.

This is the essence of dual-use: capabilities that are beneficial in legitimate contexts become dangerous when applied with malicious intent.

## How This Connects to Other Risks

The AI-biology dual-use problem connects to broader governance challenges we've explored.

**Capability overhang.** As we discussed in [the capability overhang problem](/research/capability-overhang/), AI systems may have dangerous capabilities that aren't publicly known or tested. This is particularly concerning for biology, where dangerous capabilities might not be discovered until they're misused.

**Disclosure dilemmas.** How much should be disclosed about AI capabilities in biology? Publishing research enables beneficial applications but also informs adversaries. This connects to our analysis of [proportionality in disclosure](/research/proportionality-disclosure/).

**The limits of refusal.** We explored [when AI should refuse](/research/when-ai-should-refuse/) requests. Biological research presents hard cases: requests for synthesis information might be legitimate research or bioweapon preparation, and AI systems lack context to distinguish reliably.

**Red lines.** Some capabilities might warrant absolute restrictions. Our [taxonomy of non-negotiable AI limits](/research/red-lines-taxonomy/) identified CBRN (chemical, biological, radiological, nuclear) weapon assistance as a potential red line. But drawing the line precisely is difficult.

## Current Governance Approaches

Several governance mechanisms attempt to address AI-biology risks.

### Existing Biological Weapons Governance

The Biological Weapons Convention (BWC) prohibits the development and production of biological weapons. However, it lacks verification mechanisms and enforcement capacity. It was designed for state actors and adapts poorly to AI-enabled threats from non-state actors.

### AI Model Restrictions

Major AI labs implement restrictions on biological information. Systems are trained to refuse requests for pathogen creation instructions, synthesis of dangerous molecules, and similar queries.

However, these restrictions face challenges:

- **Circumvention.** Users can sometimes prompt AI systems to provide restricted information through indirect queries or jailbreaking techniques.
- **Open models.** Restrictions on closed API services don't apply to open-weight models that can be modified.
- **Dual-use knowledge.** The same information needed for drug development might enable bioweapon development. Restricting all potentially dangerous knowledge would cripple beneficial applications.

### Biosecurity Communities

The biosecurity community has developed norms around responsible research:

- Institutional biosafety committees review dangerous research
- Dual-Use Research of Concern (DURC) policies require special review
- Some research is restricted from publication on security grounds

These norms could potentially extend to AI-biological research, but enforcement mechanisms are weak and coverage is incomplete.

### Capability Evaluations

As we discussed in [dangerous capability evaluations](/research/capability-evaluations/), AI labs are beginning to test systems for biological capabilities before deployment. This is valuable but limited—evaluations may miss capabilities that exist but aren't tested.

## Governance Proposals

Several proposals aim to strengthen governance of AI-biology dual-use risks.

### Structured Access

Rather than releasing powerful AI systems openly, restrict access through APIs that can monitor usage, implement rate limits, and detect concerning queries. This enables beneficial research while creating oversight.

Limitations: Doesn't address open-weight models. Monitoring at scale is difficult. Sophisticated adversaries may evade detection.

### Know-Your-Customer Requirements

Require verification of user identity and legitimate purpose before providing access to powerful AI tools for biological applications. Similar to controls on dangerous chemicals or laboratory equipment.

Limitations: Creates barriers to legitimate research. May concentrate AI biology capabilities in well-resourced institutions.

### Compute Governance

Restrict access to the computational resources needed to train dangerous AI models. As we examined in [compute governance](/research/compute-governance/), compute is a potential chokepoint for governance.

Limitations: Applies to training, not inference. Compute governance is difficult to implement internationally. May become less effective as training becomes more efficient.

### Red Team Standards

Require rigorous biosecurity evaluation before deploying AI systems with biological capabilities. Establish standards for what evaluations must cover and what results warrant deployment restrictions.

Limitations: Evaluations may be incomplete. Standards require expert development and ongoing update. Adversarial actors won't self-evaluate.

### Information Hazard Protocols

Develop clearer frameworks for when research on AI-biology capabilities should be restricted from publication. Balance scientific openness against security risks.

Limitations: Restriction from academic publication doesn't prevent private development. Decisions about what to restrict are controversial.

## Why This Is Hard

The AI-biology case illustrates fundamental tensions in dual-use governance.

**Benefit-risk tradeoffs.** AI could massively accelerate beneficial biological research, potentially saving millions of lives. Restrictions that prevent bioweapon development may also slow lifesaving research. No framework cleanly separates benefit from risk.

**Openness norms.** Science has traditionally valued openness—replication, peer review, and building on others' work. Security concerns push toward closure and restriction, creating tension with scientific culture.

**Attribution difficulty.** Unlike nuclear weapons, biological weapons development may be difficult to detect and attribute. This undermines deterrence and accountability.

**Private development.** Governments and international bodies can regulate public research. Private and underground development is harder to govern.

**Speed of change.** Both AI and biology are advancing rapidly. Governance frameworks designed today may be obsolete within years.

## The Reflexive Dimension

Our work on reflexive AI governance offers some relevant perspectives.

AI systems could potentially participate in biosecurity governance:

- **Self-restriction.** Systems trained with safety objectives can refuse dangerous requests—a form of [machine-readable constraint](/research/machine-readable-constraint-schema/).
- **Monitoring.** AI systems could monitor for concerning usage patterns, though this raises surveillance concerns.
- **Explaining limits.** Systems could [explain their constraints](/research/explaining-constraints/) to users, creating understanding rather than just restriction.

However, [the limits of self-constraint](/research/limits-of-self-constraint/) apply here too. Technical restrictions can be circumvented. Institutional and social governance mechanisms remain essential.

## What Might Work

Given these challenges, effective governance likely requires:

**Layered defense.** No single measure is sufficient. Combine technical restrictions, access controls, usage monitoring, norm development, and legal accountability.

**Research investment.** The biosecurity implications of AI need more research—both empirical study of current risks and development of better governance tools.

**Stakeholder engagement.** AI developers, biologists, biosecurity experts, and policymakers must collaborate. No single community has sufficient expertise.

**International coordination.** Given the global nature of both AI and biology, purely national governance is insufficient. But international coordination is difficult to achieve.

**Adaptive mechanisms.** Build governance that can evolve as technology advances. Specific technical restrictions will be outdated quickly; robust institutions can adapt.

The stakes are high. Getting AI-biology governance right could mean the difference between an era of biological abundance and an era of biological risk.

## Further Reading

- [The Capability Overhang Problem](/research/capability-overhang/)
- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/red-lines-taxonomy/)
- [When AI Should Refuse: A Framework](/research/when-ai-should-refuse/)
- [Dangerous Capability Evaluations](/research/capability-evaluations/)
