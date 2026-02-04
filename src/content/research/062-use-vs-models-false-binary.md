---
title: "The False Binary: Why 'Regulate Use, Not Models' Gets AI Governance Wrong"
excerpt: "A recent IEEE Spectrum article argues for use-based AI regulation over model-based approaches. This framing misses what actually works: layered, reflexive governance that addresses capabilities, deployment, and systemic accountability together."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - regulation
  - policy
  - governance
  - ai-models
  - use-based-regulation
---

## The Appeal of Use-Based Regulation

John deVadoss's recent article in IEEE Spectrum, "Don't Regulate AI Models. Regulate AI Use," offers a seductive simplicity. Stop trying to control the technology itself; instead, control what people do with it. Regulate at "choke points" like app stores, cloud platforms, and payment rails. Scale obligations to risk tiers. Let models flow freely and catch the bad actors downstream.

The appeal is obvious. Model weights, once released, replicate at near-zero cost. Attempting to "bottle up artifacts" seems futile. Meanwhile, real-world harms happen at the point of deployment, not the point of training. Why not focus enforcement where it matters?

This framing is understandable. It is also wrong. Not because use-based regulation is bad, but because presenting it as an alternative to model governance creates a false dichotomy that weakens AI safety.

## The False Dichotomy

DeVadoss frames the choice as binary: regulate models or regulate use. Choose one. Model-centric regulation "fails"; use-based regulation "works."

But effective governance has never required this choice. We regulate dangerous materials at multiple points: manufacturing, distribution, sale, possession, and use. Pharmaceutical regulation covers drug development, clinical trials, manufacturing, prescription, and patient use. Aviation safety addresses aircraft design, pilot certification, airline operations, and air traffic control.

The question is not which single lever to pull, but how to construct a layered system where each layer reinforces the others.

For AI, this means:

- **Model-level governance**: Requirements on how capable systems are developed, evaluated, and deployed
- **Use-level governance**: Rules on how deployed systems can be applied in specific contexts
- **Reflexive governance**: Mechanisms where AI systems themselves participate in oversight

Choosing only one level creates gaps that sophisticated actors will exploit.

## Why Models Still Matter

DeVadoss dismisses model-level governance because "weights replicate at near-zero cost." This is precisely why model capabilities matter. A single model can enable millions of harmful uses. If that model is developed without safety evaluations, released without documentation, and deployed without constraints, we have created a multiplier for harm.

Consider the logic: because dangerous capabilities are easy to copy, we should ignore where those capabilities originate? This is like arguing that because pirated software spreads easily, we should not bother with software security. The ease of replication is an argument for more attention to the source, not less.

Model-level governance addresses problems that use-level governance cannot:

**Capability assessment.** Before a system is deployed anywhere, its capabilities should be understood. What can it do? What risks does it pose? [Capability evaluations](/research/024-capability-evaluations/) conducted during development catch problems before they proliferate.

**Safety constraints.** Certain behaviors should be difficult or impossible regardless of use context. A model that refuses to provide instructions for synthesizing biological weapons is safer than one where that refusal depends on downstream deployment choices.

**Transparent provenance.** [Output provenance](/research/012-output-provenance/) and model documentation create accountability chains. When something goes wrong, we can trace back to understand why. Pure use-based regulation obscures this lineage.

**Supply chain accountability.** Modern AI systems are built on layers of other systems: foundation models, fine-tuned variants, scaffolded applications. Without model-level governance, responsibility fragments across this supply chain until no one is accountable for anything.

## The Choke Point Illusion

DeVadoss proposes enforcing AI governance at "real-world choke points": app stores, cloud platforms, payment systems, insurers. This sounds practical. These are concrete entities with assets to protect and licenses to lose. They can be held accountable in ways that anonymous model developers cannot.

But choke point enforcement has three problems.

### It Creates Centralization Dependencies

If safety depends on app stores and cloud providers, we have made those entities gatekeepers of AI governance. What happens when they are captured by commercial interests? When they decide that enforcement is too costly? When their interests diverge from public welfare?

The history of platform governance is not encouraging. App stores have been accused of anticompetitive behavior disguised as safety review. Cloud providers have hosted illegal content for years before acting. Payment systems have been weaponized for political purposes unrelated to genuine harm prevention.

Making AI safety dependent on these actors is not governance; it is outsourcing.

### It Enables Cat-and-Mouse Dynamics

Sophisticated actors route around choke points. They self-host. They use cryptocurrency. They operate from jurisdictions beyond enforcement reach. They build on open-weight models that never touch controlled platforms.

Choke point enforcement catches the compliant and the careless. It misses the sophisticated. This is not useless, but we should be clear about its limits.

### It Provides No Upstream Accountability

By the time a harmful application reaches a choke point, the capability has already proliferated. The model has been trained, the weights have been released, the misuse has become possible. We are now in remediation mode: blocking specific harms after they become feasible rather than preventing them from becoming feasible in the first place.

Use-based regulation is reactive. Model-level governance can be preventive. Both have roles; neither substitutes for the other.

## The Missing Layer: Reflexive Governance

Neither deVadoss nor most regulatory frameworks address the fundamental innovation enabled by AI's nature: the system itself can participate in governance.

Traditional technologies are passive. A pharmaceutical does not refuse to poison someone. A car does not decline to be used as a weapon. But AI systems can incorporate constraints directly into their operation, can explain those constraints to users, and can flag potential misuse to overseers.

This is reflexive governance, the central focus of [our initiative](/research/030-manifesto/).

Reflexive governance means:

**Constraints that travel with the model.** [Machine-readable constraint schemas](/research/003-machine-readable-constraint-schema/) allow capabilities and limitations to be documented in verifiable formats. These can be checked at deployment time without relying on downstream platforms to understand what they're handling.

**AI systems that refuse harmful uses proactively.** When a system [refuses a request](/research/025-when-ai-should-refuse/), it does so because the refusal is built into its operation, not because an app store blocked installation. This creates defense in depth.

**Transparency about capabilities and limitations.** [Honest self-representation](/research/029-honest-ai/) makes governance possible. Systems that can articulate what they are and what they can do support oversight; systems that obscure this undermine it.

**Protocols for AI-to-regulator communication.** [AI-regulator protocols](/research/014-ai-regulator-protocol/) allow systems to flag anomalies, report potential misuse, and support human oversight. This creates a feedback loop between deployed systems and governance authorities.

Reflexive mechanisms do not replace external governance. They complement it. A layered approach with model-level requirements, use-level enforcement, and reflexive capabilities creates redundancy where the failure of one layer does not collapse the entire system.

## Constitutional Concerns in Perspective

DeVadoss argues that model-publication licensing "likely collides with speech law" because "federal courts have treated software source code as protected expression."

This framing conflates several distinct issues.

First, "speech" protections for code have not precluded regulation of software distribution. Export controls restrict sharing of cryptographic algorithms. Medical device software requires FDA approval. Safety-critical systems in aviation and automobiles must meet regulatory standards. None of these have been struck down as unconstitutional prior restraint.

Second, the claim that any publication requirement violates the First Amendment proves too much. If true, it would invalidate export controls on technology transfer, professional licensing for software engineers, and disclosure requirements for securities-related algorithms. Courts have generally upheld these under rational basis review.

Third, safety requirements are not prior restraint. Requiring that a model undergo safety evaluation before broad release is analogous to requiring clinical trials before a drug is marketed. The goal is not to suppress expression but to ensure that dangerous capabilities are not deployed recklessly.

Fourth, framing all AI as "speech" is a category error. A model that can synthesize biological weapons instructions is not primarily engaged in expression. Treating it as such because it is implemented in code stretches the First Amendment beyond recognition.

Constitutional concerns about AI governance deserve serious attention. But they should not be used as a trump card to forestall any model-level regulation.

## What Actually Works

If neither pure use-based nor pure model-based regulation is sufficient, what is?

A layered approach with several integrated components:

**Capability-Proportional Model Requirements.** Systems with dangerous capabilities should face requirements proportional to those capabilities: safety evaluations, documentation, and access controls. This is not prior restraint; it is responsible deployment. [Proportionality](/research/001-proportionality-disclosure/) is key: research prototypes should not face the same burden as systems deployed to millions.

**Context-Sensitive Use Regulation.** High-risk deployment contexts should have heightened requirements. Healthcare AI, critical infrastructure AI, and hiring AI should face scrutiny appropriate to their potential impacts. DeVadoss's risk tiers for use are directionally correct.

**Choke Point Enforcement as One Layer.** App stores, cloud providers, and payment systems can serve as enforcement points, but not as the only enforcement points. They should reinforce other layers, not substitute for them.

**Reflexive Mechanisms.** Systems should participate in their own governance through machine-readable constraints, explainable refusals, uncertainty communication, and AI-to-regulator protocols. This creates defense in depth that does not depend entirely on external enforcement.

**International Coordination.** As we analyzed in [regulatory arbitrage](/research/008-regulatory-arbitrage/), purely national governance creates gaps that will be exploited. Even imperfect international coordination is better than fragmented approaches that race to the bottom.

## Conclusion

"Regulate use, not models" is a slogan, not a strategy. It captures a valid insight: enforcement should focus where AI affects the real world. But it packages that insight in a false dichotomy that weakens governance.

Effective AI governance requires layered mechanisms: model-level requirements that create upstream accountability, use-level regulation that addresses deployment context, reflexive mechanisms that make AI systems contributors to their own oversight, and choke point enforcement that reinforces other layers.

DeVadoss's article addresses real problems with model-level governance: definitional challenges, enforcement difficulties, innovation tradeoffs. These problems deserve serious engagement. But the solution is not to abandon model governance for a use-only approach. It is to build layered systems where each mechanism compensates for the weaknesses of others.

The technology is too powerful, the stakes too high, for governance that relies on a single point of control.

## Related Research

- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Why 'Just Regulate AI' Is Harder Than It Sounds](/research/018-regulation-is-hard/)
- [The EU AI Act: What It Misses](/research/019-eu-ai-act-gaps/)
- [A Reflexive AI Manifesto](/research/030-manifesto/)
