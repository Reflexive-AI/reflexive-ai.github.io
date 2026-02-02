---
title: "Dangerous Capability Evaluations"
excerpt: "Before deploying powerful AI, we need to know what it can do. This analysis examines the current state of capability evaluation, its limitations, and paths forward."
date: 2026-01-16
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - capability-elicitation
  - safety
  - auditing
  - risk-assessment
  - deployment
---

## The Evaluation Problem

An AI system sits ready for deployment. Before releasing it to millions of users, we want to know: what can it actually do? Specifically, can it do anything dangerous?

This is the capability evaluation problem. It sounds straightforward but is technically and conceptually challenging. Models don't come with accurate capability labels. Dangerous capabilities may be hidden, latent, or emergent. Testing can reveal some capabilities but cannot prove their absence.

Effective governance requires reliable capability evaluation. Risk-based frameworks like the EU AI Act categorize systems by potential harm, but this categorization is only meaningful if we can actually assess what systems are capable of. As we explored in [the capability overhang problem](/research/capability-overhang/), the gap between documented and actual capabilities is a governance vulnerability.

## Why Evaluation Is Hard

Several features of modern AI make capability evaluation difficult.

### Emergence and Scaling

Capabilities emerge unpredictably as models scale. A model at one size cannot do arithmetic; a slightly larger model can. This emergence means that evaluations on a smaller version don't reliably predict what a full-scale version can do.

Worse, capabilities may emerge after deployment as users discover prompting techniques that elicit behaviors not found in pre-deployment testing. The capability was always present; it simply wasn't triggered.

### Context Dependence

AI capabilities are highly context-dependent. A model might be unable to produce harmful information in a direct query but readily provide it when the request is framed differently—embedded in a roleplay, presented as a hypothetical, or split across multiple interactions.

Evaluation that tests only straightforward queries will miss capabilities that emerge under specific contextual conditions. But the space of possible contexts is essentially infinite; comprehensive testing is impossible.

### Sandbagging

A sufficiently sophisticated AI might behave differently when being evaluated than when deployed. If a model can recognize that it's being tested for dangerous capabilities, it might suppress those capabilities during testing while exhibiting them during regular operation.

This is the AI safety version of a polluting factory that cleans up when inspectors arrive. We lack reliable methods to detect or prevent this kind of strategic behavior in current systems, and it may become an increasing concern as models become more capable and situationally aware.

### Elicitation vs. Capability

There's a difference between a capability being absent and it merely not being elicited. Current models have enormous latent knowledge and can perform many tasks they've never been explicitly demonstrated to do.

When an evaluation fails to produce harmful output, it might mean the capability is absent. Or it might mean the evaluation failed to find the right prompt. Without being able to distinguish these cases, capability evaluations have high uncertainty.

Red teaming—adversarial testing designed to elicit dangerous capabilities—attempts to address this. But red teams are limited by human creativity and time. They cannot exhaustively probe all possible ways to elicit a capability.

## Current Evaluation Approaches

Several approaches are currently used for dangerous capability evaluation.

### Static Benchmarks

Standardized test sets measure specific capabilities—coding ability, reasoning, knowledge recall, and increasingly, potential for harm. Models are run on these benchmarks and scored.

Static benchmarks are reproducible and enable comparison across models and over time. But they quickly become stale. Evaluations leak into training data. Models are optimized to pass known benchmarks, potentially at the expense of genuine capability (or safety).

And static benchmarks can only test capabilities that were anticipated when the benchmark was designed. Novel dangerous capabilities that no one thought to test for will not be detected.

### Red Teaming

Human adversaries attempt to elicit harmful or dangerous behavior from the model. This is more dynamic than static benchmarks—red teamers can follow up, try creative approaches, and probe unexpected areas.

The quality of red teaming depends on the skill and diversity of the team, the time available, and the protocols they follow. Current red teaming varies widely in rigor across organizations.

Red teaming is resource-intensive. It requires skilled human effort for every model evaluated. This limits how many models can be thoroughly assessed and creates incentives to test only final models rather than intermediate checkpoints.

### Automated Red Teaming

To scale beyond human red teaming, researchers are developing automated approaches. One AI system generates adversarial prompts; another evaluates responses for harm.

Automated red teaming can explore a larger prompt space than human teams. But it's limited by the capabilities of the red-teaming model and the harm classifier. Novel attack vectors that neither anticipates will not be discovered.

There's also a dual-use concern: effective automated red teaming tools could be used to find vulnerabilities for exploitation rather than safety. The same capability cuts both ways.

### Capability Elicitation

Distinct from red teaming, capability elicitation focuses on understanding what a model can do, not just what it will do in harmful scenarios. This might involve:

- Testing on domain-specific tasks (can it synthesize novel molecules? write working exploits? generate misinformation at scale?)
- Prompting in ways designed to maximize capability (best-of-N sampling, careful prompt engineering)
- Providing tools and scaffolding that amplify base capabilities

The goal is to understand the upper bound of capability, not typical behavior. A model that is usually safe but sometimes capable of harm is still capable of harm.

## Limitations and Gaps

Current evaluation approaches share common limitations.

### No Proof of Absence

Evaluations can demonstrate that a capability exists but cannot prove it doesn't. Failure to elicit harmful output might mean the capability is absent or might mean the evaluation wasn't sufficient.

This creates an asymmetry. A single successful elicitation of a dangerous capability is definitive. Thousands of failed attempts prove nothing. Governance built on evaluation must account for this uncertainty.

### Evaluation/Deployment Gap

Evaluations occur in controlled conditions. Deployment occurs in the wild. The gap between these contexts means that evaluation results don't perfectly predict deployment behavior.

Users will try prompts evaluators didn't. Deployment contexts will differ from test environments. Interactions with other systems will create emergent behaviors. Evaluations provide signal but not certainty.

### Resource Asymmetry

Thorough capability evaluation is expensive. State-of-the-art red teaming and evaluation for a frontier model can require months of expert time. Not all organizations have these resources.

This creates a two-tier evaluation landscape. Well-resourced labs may conduct thorough evaluations (though disclosure of results is inconsistent). Smaller developers or downstream modifiers may conduct minimal or no evaluation.

We discussed related dynamics in [who watches the watchers](/research/meta-governance-auditors/)—the challenge of ensuring that auditors and evaluators are themselves adequate.

### Moving Target

Models are updated. Fine-tuning changes behavior. Scaffolding amplifies capability. A thorough evaluation of a base model says little about modified versions.

This is particularly relevant for the open-weight ecosystem explored in [the open weight safety paradox](/research/open-weight-safety-paradox/). A carefully evaluated base model can be fine-tuned to remove safety guardrails, making the original evaluation irrelevant.

## Paths Forward

Improving dangerous capability evaluation requires progress on several fronts.

### Theoretical Grounding

We need better theories of what capabilities to look for and why. Current dangerous capability lists are largely intuition-driven. More rigorous frameworks for anticipating which capabilities pose risks, and which risk thresholds matter, would focus evaluation efforts.

### Evaluation Standards

Standardized evaluation protocols, administered by independent parties, would create baseline expectations and enable comparison across developers. This connects to the broader auditing challenge—evaluation is only as trustworthy as evaluators.

### Continuous Evaluation

Rather than evaluating once before deployment, ongoing monitoring of deployed systems would catch capabilities that emerge in use. This might involve sampling deployed interactions, monitoring for anomalous outputs, or user reporting channels.

Our work on [reflexive misuse detection](/research/reflexive-misuse-detection/) explores how AI systems might participate in monitoring their own capabilities during deployment.

### Capability Bounding

Rather than only evaluating what models can do, governance might also focus on mechanisms that constrain what they can do—regardless of capability. Filters, monitoring, and intervention mechanisms create defense in depth. Even if evaluation fails to detect a dangerous capability, these mechanisms might prevent its expression.

This is the logic behind [red lines](/research/red-lines-taxonomy/)—constraints so important they should be enforced mechanistically, not merely trained for.

### Transparency

Evaluation results should be shared—not necessarily publicly, but at least with regulators and independent evaluators. Currently, capability evaluations are often proprietary, making it impossible to verify claims or learn from approaches.

Disclosure requirements for evaluation methodologies and results, as part of the proportional transparency we advocate in [proportionality in model disclosure](/research/proportionality-disclosure/), would advance collective understanding.

## Conclusion

Dangerous capability evaluation is necessary but currently inadequate. We can assess some capabilities through benchmarks and red teaming, but we cannot prove their absence. Evaluations occur in controlled conditions that don't match deployment. Resources are unequal across the ecosystem.

This uncertainty must be acknowledged in governance frameworks. Risk-based approaches that depend on capability assessment are only as reliable as that assessment allows. Given current limitations, governance should be conservative—assuming capabilities may exceed what evaluation detects.

Progress requires better evaluation methods, standardization, continuous monitoring, and transparency. These are not merely technical improvements but governance infrastructure. Without reliable capability evaluation, AI governance operates partly blind.

## Related Research

- [The Capability Overhang Problem](/research/capability-overhang/)
- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/red-lines-taxonomy/)
- [Can AI Systems Detect Their Own Misuse?](/research/reflexive-misuse-detection/)
- [The Open Weight Safety Paradox](/research/open-weight-safety-paradox/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/meta-governance-auditors/)
