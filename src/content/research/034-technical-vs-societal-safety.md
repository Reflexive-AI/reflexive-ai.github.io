---
title: "Technical Safety vs. Societal Safety: Different Problems"
excerpt: "Why making AI systems work as intended is a different challenge from making AI development good for society—and why confusing them leads to poor governance."
date: 2026-01-22
categories:
  - Governance Analysis
  - Public
tags:
  - safety
  - alignment
  - governance
  - ethics
---

## Two Meanings of "AI Safety"

When someone says they work on "AI safety," they might mean two very different things.

**Technical safety** focuses on making AI systems behave as intended. This includes preventing systems from producing harmful outputs, avoiding unintended behaviors, ensuring robustness to adversarial inputs, and building AI that reliably does what its operators want.

**Societal safety** focuses on making AI development beneficial for humanity. This includes distributing AI's benefits fairly, preventing concentration of power, protecting rights and democracy, and ensuring AI serves collective wellbeing rather than narrow interests.

These problems overlap but are fundamentally distinct. Conflating them leads to confused discourse and poor governance.

This analysis examines why the distinction matters, how conflation causes problems, and what it means for AI governance.

## The Technical Safety Problem

Technical safety is primarily an engineering challenge. The goal is reliable, predictable, controllable AI systems.

### Key Questions

- How do we specify what we want AI to do precisely enough that it actually does it? (The alignment problem we explored in [what alignment actually means](/research/016-what-alignment-means/).)
- How do we prevent AI from producing harmful outputs like dangerous instructions or manipulative content?
- How do we ensure AI systems behave consistently across different contexts and inputs?
- How do we maintain human oversight as systems become more autonomous?

### Who Works on It

Technical safety is primarily worked on by ML researchers, often within AI labs. It's a technical research agenda with papers, benchmarks, and experiments.

### What Success Looks Like

A technically safe AI system does what its operators intend, doesn't produce harmful outputs, and can be reliably controlled and overseen. It works as designed.

### Limitations

A technically safe system can still cause societal harm. A surveillance system that perfectly identifies dissidents is technically successful but socially harmful. A recommendation algorithm that efficiently maximizes engagement may be technically robust while undermining mental health or democratic discourse.

Technical safety is necessary but not sufficient for beneficial AI.

## The Societal Safety Problem

Societal safety is primarily a political and institutional challenge. The goal is AI development that benefits humanity broadly.

### Key Questions

- Who controls AI development and deployment decisions?
- How are AI's benefits and costs distributed across society?
- What protections exist for those harmed by AI systems?
- How do we prevent AI from being used to concentrate power or undermine democracy?
- What institutional structures ensure AI serves collective interests?

### Who Works on It

Societal safety is worked on by a diverse community: policymakers, civil society advocates, legal scholars, ethicists, social scientists, and increasingly, technical researchers who recognize that technical solutions alone are insufficient.

### What Success Looks Like

Socially safe AI development produces broad benefits, includes robust protections for the vulnerable, maintains democratic governance, and prevents dangerous concentration of power. The technology serves humanity rather than the reverse.

### Limitations

Societal safety measures cannot substitute for technical capabilities. No amount of governance can make an unreliable system reliable. And societal interventions often struggle to keep pace with technical change.

## How Conflation Causes Problems

When we fail to distinguish technical and societal safety, several problems emerge.

### Technical Researchers Claiming to Solve Political Problems

Technical safety work is valuable, but it cannot answer questions like "who should AI serve?" or "how should benefits be distributed?" When technical researchers imply that alignment research solves AI governance, they overreach—and potentially distract from necessary political engagement.

This is related to what we identified in [the honest AI problem](/research/029-honest-ai/): technical solutions embed value judgments, but those judgments should be made explicitly through democratic processes, not implicitly through engineering decisions.

### Policymakers Deferring to Technical "Solutions"

Policymakers sometimes treat AI governance as a technical problem that technical experts should solve. This abdicates democratic responsibility. Questions about acceptable risk, distribution of benefits, and fundamental rights are political questions requiring political decisions.

As we discussed in [what policymakers get wrong about AI risk](/research/033-policymaker-misconceptions/), technical expertise should inform governance but cannot substitute for democratic deliberation.

### Safety Teams Doing Ethics (and Vice Versa)

AI companies often conflate safety and ethics teams, giving them overlapping mandates. This can work well when problems genuinely overlap. But it can also mean that neither problem gets proper attention—ethics concerns get treated as engineering problems, while engineering problems get diluted by broader social considerations.

### Missing the Intersection

Sometimes problems require both technical and societal solutions. Algorithmic bias, for instance, has technical aspects (how systems amplify biases in training data) and societal aspects (which biases matter, what fairness requires, who decides). Addressing only one dimension leaves the problem unsolved.

## Where They Intersect

The problems aren't entirely separate. Several issues require addressing both dimensions.

### Power and Control

Technical questions about AI controllability connect to societal questions about who controls AI. A system that is technically controllable but controlled by harmful actors isn't safe in any meaningful sense.

### Transparency and Accountability

Technical interpretability research connects to societal demands for accountability. But transparent systems can still be misused, and accountability requires institutional infrastructure beyond technical capabilities.

### Capability and Risk

Technical capability levels have societal implications. More capable systems create greater societal risks if governance is inadequate. Technical choices about what capabilities to develop are thus also societal choices.

### Concentration

Technical economies of scale in AI development connect to societal concerns about power concentration. The fact that frontier AI requires massive resources is both a technical reality and a governance challenge.

## Implications for Governance

This distinction has practical implications for how we govern AI.

### Separate but Coordinated Oversight

Technical safety and societal impact require different oversight mechanisms. Technical standards bodies should address system behavior. Democratic institutions should address deployment conditions, rights protections, and benefit distribution. These bodies should coordinate but not merge.

### Different Expertise for Different Problems

Technical safety requires ML expertise. Societal safety requires diverse expertise: law, economics, ethics, social science, domain knowledge. Governance structures should incorporate both without confusing them.

### Multiple Interventions at Multiple Points

Technical interventions during development (testing, verification, monitoring) address technical safety. Societal interventions around deployment (licensing, auditing, liability) address societal safety. Both are necessary; neither is sufficient.

### Don't Let One Substitute for the Other

AI developers shouldn't claim that technical safety work addresses societal concerns. Policymakers shouldn't assume that governance can substitute for technical robustness. Each problem requires its own solutions.

## The Reflexive Connection

Our work on reflexive governance attempts to bridge these domains. The idea that [AI systems can participate in their own governance](/research/030-manifesto/) is both a technical proposal (systems reporting constraints, explaining limits) and a societal one (making AI more legible and accountable).

[Machine-readable constraints](/research/003-machine-readable-constraint-schema/) are a technical artifact that serves societal purposes. [AI-to-regulator communication protocols](/research/014-ai-regulator-protocol/) require both technical infrastructure and institutional capacity.

This integration is the distinctive contribution of reflexive approaches: recognizing that the technical and societal are distinct but must be connected, and building bridges that respect both domains.

## Further Reading

- [What Alignment Actually Means](/research/016-what-alignment-means/)
- [The Honest AI Problem](/research/029-honest-ai/)
- [A Reflexive AI Manifesto](/research/030-manifesto/)
- [What Policymakers Get Wrong About AI Risk](/research/033-policymaker-misconceptions/)
