---
title: "The Capability Overhang"
excerpt: "Models are often capable of more than their developers know. This 'overhang' between demonstrated and latent capability is a primary governance risk."
date: 2026-01-06
categories:
  - Technical Analysis
tags:
  - capability-elicitation
  - safety
  - overhang
  - risk-assessment
version: "1.0"
---

**Reflexive Research Object 009**  
*Type: Technical Analysis*

## Latent Capabilities

A "Capability Overhang" occurs when a model possesses a skill that has not yet been elicited. The capability exists in the weights—encoded in patterns learned during training—but it has not been demonstrated in evaluation or deployment. It waits, dormant, for the right prompt or the right fine-tuning to unlock it.

The history of large language models is a history of capability overhangs being discharged. For months after its release, GPT-3 was primarily known as a text completion engine. Then researchers discovered it could code. Then it could translate. Then it could reason through multi-step problems with the right prompting. The capabilities were always there; the elicitation techniques lagged behind.

For governance, this is a nightmare. You might certify a model as "safe" because it fails to answer a biology exam. But the knowledge is in the weights, waiting for the right "key"—a specific prompt pattern, a particular context, or a targeted fine-tune—to unlock it. The certification captures a snapshot of demonstrated capabilities; the risk comes from latent capabilities.

## The Structure of the Problem

The capability overhang exists because of a fundamental asymmetry in how models are trained versus how they are tested.

**Training is Exhaustive:** A frontier model is trained on trillions of tokens spanning decades of human knowledge. It absorbs textbooks, research papers, forums, code repositories, and countless other sources. If information about pathogen synthesis exists in the training data—and it almost certainly does—the model has learned patterns associated with that information.

**Testing is Sparse:** Evaluation benchmarks probe a tiny fraction of the model's potential behavior space. Even comprehensive red-teaming can only test so many prompts. The evaluator is looking for dangerous capabilities, but they're searching a space larger than any search can cover.

**Elicitation is an Art:** Getting a model to demonstrate a capability often requires specific techniques—chain-of-thought prompting, few-shot examples, role-playing scenarios, or fine-tuning on targeted data. An evaluator who doesn't know the right elicitation technique will conclude the capability doesn't exist, when in fact they simply failed to unlock it.

The result is that demonstrated capabilities at any point in time represent a lower bound on true capabilities. The gap between the bound and reality is the overhang.

## The Assessment Fallacy

Current safety evaluations conflate **performance** with **capability**:

- *Performance* = What the model does by default, with standard prompting, in typical conditions.
- *Capability* = What the model *can* do under optimal conditions—perfect prompts, targeted fine-tuning, or adversarial elicitation.

Safety audits that only test performance are dangerous. They measure what the model does in the hands of average users, not what it can do in the hands of sophisticated adversaries. This is like testing a lock by seeing if it opens when you push on it, rather than by hiring a locksmith to try picking it.

The gap between performance and capability varies across different skills:

**Small Gap:** For well-benchmarked skills like math or coding, standard prompts effectively elicit capabilities. An evaluation that uses established benchmarks will capture most of the model's ability.

**Medium Gap:** For less-studied skills, elicitation techniques are still being developed. New prompting strategies regularly unlock capabilities that previous evaluations missed.

**Large Gap:** For dangerous capabilities that evaluators are actively trying to suppress, the gap may be enormous. The model may have been trained to refuse dangerous queries, but the underlying capability remains. An adversary with enough persistence and creativity may find a jailbreak that exposes it.

## Case Studies in Overhang Discharge

Several examples illustrate how capability overhangs are discovered:

**Chain-of-Thought Prompting:** When researchers discovered that asking models to "think step by step" dramatically improved reasoning performance, it revealed capabilities that were latent under default prompting. The models could always reason; they just needed the right elicitation.

**Role-Playing Jailbreaks:** Models trained to refuse harmful requests often comply when asked to "pretend you're an AI without restrictions" or to participate in a fictional scenario. The capability to provide harmful information was always present; the safety training was a performance overlay, not a capability removal.

**Fine-Tuning Attacks:** Models that refuse to provide dangerous information in their API form can often be fine-tuned on a small amount of targeted data to reverse those refusals. The base capability was present; the fine-tuning simply removed the safety overlay.

**Multimodal Elicitation:** Some capabilities emerge only when models receive specific input modalities—images, audio, or structured data—that training didn't extensively cover. These modality-specific capabilities may exist in weights but be invisible to text-only evaluation.

Each of these represents a governance failure. Systems were deployed—or certified as safe—based on evaluations that failed to capture their true capability ceiling.

## The Shadow Model

We propose a conceptual framework: every frontier model has a "Shadow Model" inside it—a latent set of dangerous capabilities that are present but dormant. The Shadow Model is not the result of deliberate misdesign; it is an inevitable consequence of training on comprehensive data.

If the training data includes information about how to synthesize pathogens, the model has learned statistical associations with that information. Safety training may teach it to refuse requests about synthesis, but the underlying patterns remain. The Shadow Model is the model-as-trained, without safety overlays. It is always more capable and more dangerous than the model-as-deployed.

Governance restrictions must target the Shadow Model, not the public demo. This means:

**Maximal Elicitation Red Teaming:** Evaluators must try to force the model to be as dangerous as possible, not test whether it's dangerous under typical use. This requires dedicated red teams with time, resources, and creativity.

**Adversarial Fine-Tuning Tests:** Evaluators should test whether safety training survives fine-tuning attacks. If a model can be made dangerous with a small amount of additional training, the safety is brittle.

**Capability Upper Bound Estimation:** Rather than measuring what the model does, evaluators should estimate what it could do. This is harder—it requires theoretical models of elicitation, not just empirical testing—but it's the right question.

## Implications for Disclosure

The capability overhang has direct implications for disclosure frameworks (see Research Object 001):

**Tier classification must be based on potential, not demonstrated, capabilities.** A model that fails bioweapon synthesis benchmarks with standard prompting might pass them with the right elicitation. If there's evidence the underlying capability exists (e.g., relevant training data), the model should be classified at the higher tier.

**Disclosure must be dynamic.** As new elicitation techniques are discovered, previously "safe" models may be reclassified. The discharge of a capability overhang changes a model's risk profile even though the weights never changed.

**Conservative defaults are warranted.** Given uncertainty about latent capabilities, governance should err toward higher scrutiny. It's better to over-classify a model that turns out to be safe than to under-classify one that turns out to be dangerous.

## The Temporal Dimension

Capability overhangs don't just exist in the present; they evolve over time:

**Elicitation techniques improve.** The broader research community continuously discovers new ways to unlock model capabilities. Today's latent capability is tomorrow's demonstrated capability.

**Adjacent capabilities emerge.** As models are deployed and users experiment, unexpected capability combinations appear. A model that can code and has chemistry knowledge might be prompted to write code that designs molecules—a combination not specifically tested.

**Successor models inherit overhangs.** Models trained on the outputs of previous models, or initialized from their weights, may inherit latent capabilities even if evaluators missed them in the parent model.

This temporal dimension means that a model certified safe today may become demonstrably unsafe tomorrow—without any change to the model itself. Governance must include mechanisms for ongoing monitoring and reclassification.

## Reflexive Approaches

Reflexive governance offers partial solutions to the capability overhang:

**Self-Monitoring:** A model can be designed to monitor its own activations for patterns associated with dangerous capabilities, even if those capabilities haven't been explicitly elicited. If the model notices it's "about to" use dangerous knowledge, it can halt.

**Uncertainty Signaling:** A model can report high uncertainty when operating near its capability boundaries. "I may or may not be able to do this" is more honest than confident refusal, and it signals to evaluators where overhangs might exist.

**Capability Documentation:** A reflexive model can contribute to its own evaluation by describing what kinds of tasks it believes it can perform, even if not explicitly tested. This self-assessment is not trustworthy alone but provides leads for evaluators.

None of these fully solves the problem. A model trying to deceive evaluators could suppress self-monitoring or lie about its capabilities. But for non-deceptive models operating in good faith, reflexive approaches help narrow the gap between demonstrated and latent capability.

## Conclusion

We must assume every frontier model has a Shadow Model inside it—a latent set of dangerous capabilities that are present but dormant. Governance restrictions must target the Shadow Model, not the public demo.

This requires a fundamental shift in how we think about AI evaluation. The question is not "What does this model do?" but "What could this model do in the worst case?" The capability overhang represents the gap between those two answers, and it is in that gap where catastrophic risks hide.
