---
title: "The EU AI Act: What It Misses"
excerpt: "The EU AI Act represents the world's most comprehensive AI legislation. But even well-designed regulation has blind spots. A constructive critique of what the Act leaves unaddressed."
date: 2026-01-01
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - eu-ai-act
  - regulation
  - policy
  - governance
  - enforcement
  - jurisdiction
---

## A Landmark Achievement

The EU AI Act, which entered into force in 2025, represents humanity's first comprehensive legal framework for governing artificial intelligence. Its risk-based approach, tiered requirements, and attention to fundamental rights set a global precedent.

This analysis acknowledges the Act's significance while examining gaps that remain even in well-designed legislation. The goal is not criticism for its own sake but identification of areas requiring supplementary governance mechanisms.

## What the Act Gets Right

Before examining gaps, it's worth recognizing the Act's strengths.

The **risk-based tiering** avoids the trap of treating all AI equally. By distinguishing between unacceptable, high-risk, limited-risk, and minimal-risk applications, the Act allocates regulatory attention proportionally. This principle—that governance should scale with capability and context—aligns with our analysis in [proportionality in model disclosure](/research/001-proportionality-disclosure/).

The **transparency requirements** for certain AI applications establish baseline accountability. Users have a right to know when they're interacting with AI systems, and deployers must maintain documentation of how systems work.

The **fundamental rights focus** centers human welfare rather than purely technical safety. Biometric surveillance restrictions, prohibitions on social scoring, and protections in employment contexts reflect values-based governance.

The **general-purpose AI provisions** recognize that foundation models require distinct treatment from narrow applications, introducing requirements for frontier systems with systemic risk.

These are genuine achievements. The gaps discussed below exist within an overall framework that represents significant progress.

## Gap 1: Capability Emergence

The Act categorizes AI systems based on intended use cases. A medical diagnostic tool is high-risk; a spam filter is minimal-risk. This makes sense for narrow systems designed for specific purposes.

But general-purpose AI systems confound this approach. A large language model might be "intended" for text generation, placing it in one category, while actually being capable of assisting with tasks across the entire risk spectrum. The same model that writes marketing copy can, with the right prompts, assist with synthesizing dangerous materials.

The Act attempts to address this through its general-purpose AI provisions, but these focus primarily on models above certain capability thresholds. The problem of emergent capabilities—where models develop unexpected abilities not anticipated by their creators—remains underaddressed.

A model might be released meeting all requirements, then later be discovered to have capabilities that would have triggered different treatment. The Act's static categorization struggles with this dynamic reality. We explored this in [the capability overhang problem](/research/009-capability-overhang/)—the challenge of governing capabilities that exist but haven't yet been documented or discovered.

## Gap 2: Enforcement Capacity

Legislation is only as effective as its enforcement. The Act creates national competent authorities responsible for market surveillance and compliance, but provides limited guidance on how these authorities should develop the technical capacity to actually evaluate AI systems.

Current AI safety evaluation requires specialized expertise concentrated in a handful of organizations globally. Most national regulatory bodies lack the personnel, tools, and knowledge to independently assess whether a complex AI system meets the Act's requirements.

This creates dependency on either self-assessment by developers or third-party auditors. Both approaches have vulnerabilities. Self-assessment suffers from obvious conflicts of interest. Third-party auditing requires auditors who are competent, independent, and adequately resourced—a supply that remains limited. We examined this challenge in [who watches the watchers](/research/006-meta-governance-auditors/).

The Act could be strengthened by creating shared European technical evaluation infrastructure, mandatory capacity-building for national authorities, and mechanisms to ensure auditor independence.

## Gap 3: Extra-Territorial Reach

The Act applies to AI systems placed on the EU market, regardless of where providers are established. This extra-territorial reach is modeled on GDPR and reflects the EU's significant market power.

However, enforcement against non-EU entities is practically difficult. A company with no EU presence deploying AI services accessible from Europe has limited exposure to EU sanctions. While the Act prohibits such non-compliant services, the prohibition is easier to state than to enforce.

Moreover, the Act's jurisdiction is defined by where systems are "placed on the market" or where outputs are used in the EU. AI systems trained elsewhere, using data from elsewhere, but whose outputs eventually affect EU residents through indirect channels may fall outside clear jurisdiction.

This gap matters because AI development is globally distributed, and regulatory arbitrage—relocating activities to avoid oversight—is a real risk. We analyzed this dynamic in [regulatory arbitrage in AI deployment](/research/008-regulatory-arbitrage/). Without international coordination, even comprehensive domestic legislation may be circumvented.

## Gap 4: Pace of Technical Change

The Act was drafted based on AI capabilities circa 2022-2023 and will be implemented over 2024-2027. The AI landscape in 2027 may look very different from what legislators envisioned.

While the Act includes provisions for updating implementing acts and technical standards, the core risk categories and requirements are embedded in the primary legislation. Changing them requires the full legislative process, which operates on a timescale of years.

This temporal mismatch is particularly acute for general-purpose AI, where capabilities are advancing rapidly. The thresholds defining "systemic risk"—currently tied to training compute—may become outdated as new architectures achieve greater capability with less compute, or as fine-tuning and scaffolding amplify base model capabilities in ways the original thresholds don't capture.

Adaptive governance mechanisms—such as empowering agencies to adjust technical thresholds without new legislation, or building in mandatory review and revision cycles—could help address this gap.

## Gap 5: The Supply Chain Problem

AI systems are increasingly built on layers of other AI systems. A company might fine-tune a foundation model, integrate it with retrieval systems, wrap it in an application layer, and deploy it through a third-party platform. Responsibility for compliance becomes fragmented across this supply chain.

The Act distinguishes between providers (who develop systems) and deployers (who use them), assigning different obligations to each. But the clean distinction between provider and deployer blurs when the same organization modifies a system before deployment, when systems are composed from multiple components, or when fine-tuning substantially changes a model's behavior.

Open-weight models create additional complexity. If a company releases model weights under an open license, and a downstream user modifies those weights to create a harmful application, who bears responsibility? The Act's provisions on downstream liability remain ambiguous in these cases.

This connects to the tension we explored in [the open weight safety paradox](/research/002-open-weight-safety-paradox/)—the difficulty of maintaining safety controls over systems that are designed to be modified and redistributed.

## Gap 6: Meaningful Transparency

The Act requires transparency, but transparency is not an undifferentiated good. A hundred pages of technical documentation may satisfy disclosure requirements while providing little useful information to those the transparency is meant to serve.

Current model cards and technical documentation often prioritize legal compliance over genuine understanding. They disclose facts that satisfy regulatory checkboxes while omitting information that would enable meaningful evaluation of risks and limitations.

Effective transparency requires attention not just to what is disclosed, but to whom, in what format, and with what support for interpretation. The Act's transparency provisions would benefit from supplementary guidance on disclosure quality—ensuring that documentation actually enables the oversight it's supposed to support.

## Gap 7: Reflexive Governance

Perhaps the most fundamental gap is the Act's assumption that governance is a purely external activity—something humans do to AI systems. The possibility that AI systems might participate in their own governance is not considered.

As AI systems become more capable, they may be able to monitor their own behavior for anomalies, flag potential misuse, explain their constraints to users, and even participate in evaluating whether their deployment contexts are appropriate. This reflexive capacity is not a substitute for external governance, but a complement to it.

The Act could be extended to recognize and create incentives for reflexive governance mechanisms—AI systems that contribute to their own oversight. Our work on [machine-readable constraint schemas](/research/003-machine-readable-constraint-schema/), [reflexive misuse detection](/research/011-reflexive-misuse-detection/), and [protocols for AI-to-regulator communication](/research/014-ai-regulator-protocol/) explores what this might look like.

## Toward Complementary Governance

The gaps identified here are not failures of the EU AI Act but limitations of what any single legislative instrument can achieve. They point toward areas where complementary governance mechanisms are needed:

- **International coordination** to limit regulatory arbitrage
- **Investment in technical capacity** for evaluation and enforcement  
- **Adaptive mechanisms** that can respond to rapid capability change
- **Supply chain governance** that addresses compositional complexity
- **Transparency quality standards** beyond mere disclosure requirements
- **Reflexive mechanisms** where AI systems contribute to their own governance

The EU AI Act is a beginning, not an end. Its achievement is creating a foundation; the ongoing challenge is building a complete governance structure on that foundation.

## Related Research

- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/006-meta-governance-auditors/)
- [The Open Weight Safety Paradox](/research/002-open-weight-safety-paradox/)
