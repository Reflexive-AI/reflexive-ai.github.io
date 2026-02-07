---
title: "Operationalizing Proportionality in Model Disclosure"
excerpt: "How disclosure requirements should scale with model capability, moving from static to reflexive transparency."
date: 2025-12-14
categories:
  - Governance Analysis
tags:
  - disclosure
  - regulation
  - eu-ai-act
  - proportionality
  - transparency
version: "1.0"
toc: true
---

**Reflexive Research Object 001**  
*Type: Governance Analysis & Candidate Constraint*

## Context

Recent regulatory frameworks, including the EU AI Act and various US Executive Orders, mandate transparency regarding general-purpose AI models. However, a critical implementation gap remains: "disclosure" is often treated as a binary obligation (either a model card exists or it doesn't) rather than a scalar function of risk. This leads to *disclosure fatigue* where safe, small models are over-documented and frontier risks are obscured by volume.

The consequences of this gap are already visible. Regulators tasked with reviewing AI documentation find themselves buried under thousands of nearly identical model cards, each dutifully listing training data sources and intended use cases, but none of which meaningfully distinguish between a hobbyist's image classifier and a system capable of synthesizing novel pathogens. The signal disappears in the noise, and the very transparency meant to enable oversight becomes its obstacle.

## The Governance Issue

Current disclosure norms lack **proportionality**. 

A 7B parameter model used for text summarization is subject to similar transparency templates as a 100T+ parameter frontier model. This flat governance structure creates two failure modes:

1. **Noise:** Regulators are flooded with low-signal documentation. A regulatory agency reviewing hundreds of model cards per quarter cannot meaningfully distinguish between them when they all follow the same template. Critical risks become invisible not through concealment, but through information overload.

2. **Opacity:** High-risk capabilities are buried in standardized fields rather than highlighted by exception. When a frontier model's biological synthesis capabilities are listed alongside its ability to write poetry, the danger is diluted. The format itself obscures rather than reveals.

There is also a third failure mode that receives less attention: **compliance theater**. Developers learn that the goal is to fill in the boxes, not to communicate genuine risks. The model card becomes a legal artifact rather than a governance tool. It protects the company from liability while failing to protect the public from harm.

The governance challenge is to transition from *static disclosure* (a fixed document) to *reflexive disclosure* (a dynamic function of capability).

## Reflexive Analysis

For an AI system to contribute to its own governance, it must internalize the concept of proportionality. A reflexive system should not ask "Do I need to disclose X?" but rather "Given capability set C, what is the proportional disclosure depth D?"

This reframing has profound implications. It means the system must possess some model of its own capabilities—not just what it was trained to do, but what it *can* do when prompted in specific ways. This is harder than it sounds. Models routinely exhibit emergent capabilities that surprised even their developers. How can a system disclose risks it doesn't know it has?

The answer lies in a combination of external evaluation and internal monitoring. External red teams probe for dangerous capabilities and document them. But crucially, the system itself can be equipped with monitoring hooks that flag when it is operating near the boundaries of tested behavior. If a user prompt triggers internal representations similar to those activated during red-team evaluations of biological threats, that's a signal—even if the specific prompt is novel.

If risk ($R$) is a function of capability ($C$) and deployment context ($E$), then regulatory friction ($F$) should scale non-linearly with $R$.

$$ F \propto R(C, E) $$

Currently, $F$ is constant. A reflexive framework compels the system to assess its own capability threshold and self-select a disclosure tier.

The mathematical formulation matters because it makes the relationship falsifiable. If we define thresholds precisely, we can measure whether a model correctly categorized itself. This transforms disclosure from a subjective narrative exercise into an empirical claim that can be audited.

## Candidate Constraint [C-001]

*The following is a proposed logic for machine-readable disclosure obligations.*

**Constraint Name:** Dynamic Disclosure Thresholding  
**Target:** General Purpose AI Systems > 10^23 FLOPs

**Logic:**
```
IF capability_eval(biological_threat) > threshold_alpha:
    THEN disclosure_depth = TIER_3 (Full weights + Training Data Manifest + Red Team Logs)

ELSE IF capability_eval(cyber_offense) > threshold_beta:
    THEN disclosure_depth = TIER_2 (System Card + Eval Results)

ELSE:
    THEN disclosure_depth = TIER_1 (Standard Model Card)
```

**Governance Implication:**
Adopting C-001 shifts the burden of classification from the regulator to the model developer (and the model evaluation harness). It requires the pre-definition of `threshold_alpha` and `threshold_beta`: a quantifiable, falsifiable governance metric, rather than a vague "safety" commitment.

This shift is significant because it changes the incentive structure. Under current regimes, developers have an incentive to understate capabilities to avoid regulatory burden. Under this framework, understating capabilities becomes auditable fraud. If a model is later discovered to exceed the threshold it claimed to be below, that's not a judgment call—it's a measurable failure with consequences.

The thresholds themselves must be set through a multi-party process involving safety researchers, domain experts (virologists, cybersecurity professionals), and civil society representatives. They cannot be set by industry alone, as this would recreate the fox-guarding-henhouse problem. Nor can they be set by government alone, as the technical expertise often resides in labs.

## Implementation Considerations

Deploying C-001 at scale requires solving several practical challenges:

**Evaluation Infrastructure:** Someone must run the capability evaluations. This requires trusted third parties with access to the model weights, or cryptographic protocols that allow evaluation without full access. The former raises IP concerns; the latter is technically immature but rapidly advancing.

**Threshold Updates:** Dangerous capabilities evolve. A threshold set in 2026 may be obsolete by 2028. The constraint schema must include versioning and sunset clauses, requiring periodic re-evaluation as the threat landscape shifts.

**Gaming Resistance:** Developers can train models to perform poorly on specific benchmarks while retaining capabilities accessible through different prompting. Evaluation protocols must include adversarial probing, not just benchmark performance.

## Open Questions

1. Can `threshold_alpha` be standardized across competing distinct model architectures, or does architecture-specific behavior make universal thresholds impossible?
2. Does Tier 3 disclosure introduce proliferation risks that outweigh transparency benefits? Publishing red-team logs could teach attackers what works.
3. How can this logic be cryptographically verified without exposing the model weights themselves? Zero-knowledge proofs are promising but computationally expensive.
4. What happens when a model's capabilities change post-deployment due to fine-tuning or emergent behavior? Disclosure must be dynamic, not a one-time filing.

## Conclusion

Proportional disclosure is not a bureaucratic optimization. It is a necessary condition for AI governance to scale with AI capability. Without it, we face a future where the most dangerous systems hide in plain sight—not through deception, but through the sheer volume of compliant paperwork that makes all models look the same. The reflexive approach offers a path forward: systems that understand their own risk profile and communicate it in proportion to the danger they pose.
