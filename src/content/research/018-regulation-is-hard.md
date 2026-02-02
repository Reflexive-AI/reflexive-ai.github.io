---
title: "Why 'Just Regulate AI' Is Harder Than It Sounds"
excerpt: "Regulation seems like the obvious answer to AI risks. But the path from 'we should regulate AI' to effective governance is fraught with technical, political, and conceptual obstacles."
date: 2026-01-12
categories:
  - Public
  - Governance Analysis
tags:
  - regulation
  - policy
  - governance
  - enforcement
  - jurisdiction
---

## The Obvious Solution

When people learn about the risks of AI—from biased algorithms to potential catastrophic misuse—a natural response is: "Why don't we just regulate it?" This response is sensible. Regulation has worked for other dangerous technologies. We regulate pharmaceuticals, nuclear power, aviation, and financial markets. Why not AI?

The answer is not that regulation is impossible or undesirable. It is that AI presents a unique combination of challenges that make traditional regulatory approaches difficult to apply. Understanding these challenges is essential for designing governance that actually works.

## Challenge 1: Defining the Target

Regulation requires defining what is being regulated. For AI, this is surprisingly difficult.

What is an AI system? Current definitions range from narrow (machine learning models above a certain size) to broad (any automated decision system). Each choice has consequences.

Define AI too narrowly, and you create loopholes. A company might restructure its system to technically fall outside the definition while achieving the same outcomes. Define it too broadly, and you capture everything from simple spam filters to spreadsheet formulas, overwhelming regulatory capacity with low-risk applications.

The EU AI Act attempts a risk-based approach, categorizing applications rather than technologies. But this creates its own problems: the same underlying model might be "high-risk" when used for hiring decisions but "minimal-risk" when used for customer service, even though its capabilities—and potential for misuse—remain identical.

Capability-based approaches, as we explored in [proportionality in model disclosure](/research/proportionality-disclosure/), offer an alternative. Instead of regulating by application, regulate by what a system can do. But measuring capability is itself technically challenging, and capabilities can emerge unexpectedly as systems scale.

## Challenge 2: The Pace Problem

Traditional regulation is slow by design. Deliberation, consultation, drafting, and implementation take time—typically years for significant new rules. This pace made sense when the technologies being regulated changed slowly.

AI does not change slowly. Capabilities that seemed years away become available in months. A regulatory framework designed for GPT-3 may be obsolete by the time GPT-5 is deployed. Legislating specific technical requirements risks enshrining yesterday's approaches while failing to address tomorrow's risks.

Some jurisdictions are experimenting with adaptive approaches: principles-based regulation that sets goals rather than specific rules, regulatory sandboxes that allow experimentation under oversight, or empowering agencies to update technical standards without new legislation. Each has trade-offs between flexibility and predictability.

The pace problem also affects enforcement. By the time a violation is detected, investigated, and adjudicated, the harm may already be done and the technology may have moved on. Regulators often find themselves fighting the last war.

## Challenge 3: The Expertise Gap

Effective regulation requires understanding what is being regulated. For AI, this understanding is concentrated in a small number of companies and research institutions.

Regulators often lack the technical expertise to evaluate AI systems directly. They may struggle to assess whether a company's safety claims are credible, whether a proposed mitigation actually works, or what the implications of a new architecture might be.

This creates an information asymmetry. Companies know more about their systems than regulators do, which complicates enforcement. It's difficult to verify compliance with rules you don't fully understand.

Some approaches attempt to address this: hiring technical staff into regulatory agencies, using third-party auditors as intermediaries, or requiring companies to provide interpretable documentation. But each introduces new problems. Third-party auditors may face conflicts of interest, as we discussed in [who watches the watchers](/research/meta-governance-auditors/). Technical staff may leave for higher-paying industry jobs. Documentation can be misleading.

## Challenge 4: Jurisdictional Arbitrage

AI development is global. Governance is national.

A company facing restrictive regulations in one jurisdiction can relocate development to another. Users in regulated jurisdictions can access services from providers elsewhere. Models trained in one country can be deployed worldwide.

This creates a race-to-the-bottom risk: jurisdictions might compete for AI development by offering looser regulations, undermining the effectiveness of stricter rules elsewhere. We analyzed this dynamic in [regulatory arbitrage in AI deployment](/research/regulatory-arbitrage/).

International coordination could address this, but AI governance lacks the global institutional architecture that exists for some other domains. There is no AI equivalent of the International Atomic Energy Agency or the International Civil Aviation Organization. Building such institutions takes decades.

In the meantime, different jurisdictions are developing different approaches: the EU focuses on fundamental rights and risk categorization, China emphasizes content control and social stability, the US relies more on sector-specific rules and industry self-regulation. These frameworks conflict in ways that create uncertainty and opportunities for evasion.

## Challenge 5: The Innovation Tradeoff

Regulation imposes costs. Compliance requires resources. Uncertainty discourages investment. Restrictions limit what can be developed.

These costs may be worth paying if they prevent harms. But they also risk slowing beneficial innovation, and the benefits of AI are potentially enormous—in healthcare, scientific discovery, education, and productivity.

The innovation tradeoff is particularly sharp because AI capabilities concentrate in a small number of leading organizations. Heavy regulation that slows these leaders might allow others—potentially in jurisdictions with fewer safeguards—to catch up or pull ahead.

Policymakers must navigate this tradeoff without reliable estimates of either the costs of regulation or the magnitude of benefits and risks from unregulated development. We are making consequential decisions under deep uncertainty.

This uncertainty is not an argument against regulation. It is an argument for humility about how much any particular approach will achieve, and for building in mechanisms to learn and adapt.

## Challenge 6: Capture and Gaming

Regulations can be captured by the entities they're supposed to govern. Companies with resources to engage in the regulatory process shape rules in their favor. Compliance requirements that large companies can easily meet become barriers that exclude smaller competitors.

The AI industry is highly concentrated. A small number of large companies dominate frontier development and have significant resources to invest in regulatory engagement. There is genuine risk that AI governance becomes a tool of incumbent advantage rather than public protection.

Gaming is a related concern. Sophisticated actors find ways to comply with the letter of regulations while violating their spirit. An AI system might pass required safety evaluations while retaining dangerous capabilities that those evaluations didn't probe. We explored similar dynamics in [the limits of self-constraint](/research/limits-of-self-constraint/).

## What Might Work Better

None of this means regulation is impossible or should be abandoned. It means that naive approaches—"just ban dangerous AI" or "just require companies to be safe"—will not achieve their goals.

More promising approaches share several features:

**Flexibility.** Rules that specify goals rather than methods, and can be updated as technology evolves, are more likely to remain relevant.

**Layered governance.** Combining government regulation with industry standards, civil society monitoring, and technical mechanisms creates redundancy. If one layer fails, others may catch the problem.

**International coordination.** Even imperfect coordination is better than pure competition. Mutual recognition agreements, shared evaluation protocols, and information sharing can limit arbitrage.

**Investment in capacity.** Effective governance requires resources. Training technical staff, developing evaluation tools, and building enforcement capacity are as important as writing rules.

**Reflexive mechanisms.** AI systems themselves might contribute to governance through [machine-readable constraint schemas](/research/machine-readable-constraint-schema/), [self-monitoring for misuse](/research/reflexive-misuse-detection/), and [protocols for communicating with regulators](/research/ai-regulator-protocol/). This is the central focus of the Reflexive AI Initiative.

## Conclusion

Regulation is necessary but not sufficient. The instinct to "just regulate AI" correctly identifies that governance is needed but underestimates how difficult effective governance will be to achieve.

The obstacles are real but not insurmountable. Addressing them requires moving beyond slogans to engage with the specific technical, political, and institutional challenges of governing a rapidly evolving, globally distributed, expert-knowledge-intensive technology.

This is not an argument for inaction. The risks of inadequate governance are severe. It is an argument for sophistication—for approaches that acknowledge complexity while still making progress toward safety and accountability.

## Related Research

- [Proportionality in Model Disclosure](/research/proportionality-disclosure/)
- [Regulatory Arbitrage in AI Deployment](/research/regulatory-arbitrage/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/meta-governance-auditors/)
- [A Protocol for AI-to-Regulator Communication](/research/ai-regulator-protocol/)
