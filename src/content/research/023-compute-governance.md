---
title: "Compute Governance: Promises and Limits"
excerpt: "Compute is one of the few measurable inputs to AI development. Governing at the compute layer is appealing but faces significant challenges. An honest assessment."
date: 2026-01-15
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - compute
  - governance
  - regulation
  - safety
  - enforcement
---

## The Appeal of Compute

Of the three inputs to modern AI—data, algorithms, and compute—compute is the most measurable. Training runs can be quantified in FLOPs. GPU clusters can be counted. Energy consumption can be monitored.

This measurability makes compute an attractive target for governance. Instead of trying to regulate intangible capabilities or ambiguous behaviors, regulate the physical resources that enable them. Know where large training runs are happening. Require notification above certain thresholds. Perhaps even license access to frontier-scale compute.

The appeal is understandable. AI governance struggles with the difficulty of measuring and verifying capabilities—a challenge we explored in [the capability overhang problem](/research/009-capability-overhang/). Compute offers something governance usually lacks: a concrete, quantifiable input.

But compute governance also has significant limitations. This analysis examines both the promise and the limits.

## What Compute Governance Can Do

Compute governance can serve several legitimate purposes.

### Visibility

Governments currently have limited insight into who is training large AI models. Compute monitoring provides visibility. Requirements to register large training runs, or to notify regulators when compute usage exceeds thresholds, create awareness of frontier development activity.

This visibility has intrinsic value. Governance is impossible if regulators don't know what's happening. Even if compute monitoring doesn't restrict development, it enables other governance mechanisms by revealing who is developing what.

### Choke Points

The supply chain for advanced AI compute is concentrated. Only a few companies manufacture cutting-edge GPUs. Only a few cloud providers offer large-scale AI infrastructure. These choke points enable governance interventions that would be impossible for more distributed resources.

Export controls on advanced chips are already an example of compute governance. By restricting chip flows to certain countries or entities, governments can influence who has access to frontier AI development resources.

### Enforcement Mechanism

Compute requirements create an enforcement lever. If other AI regulations are violated, compute access can be restricted. Cloud providers can be required to verify that customers meet regulatory requirements before providing frontier-scale resources.

This mirrors how financial regulations use banking access as an enforcement mechanism. Entities that violate rules lose access to the financial system. Similarly, entities that violate AI safety requirements might lose access to compute.

### Threshold Triggers

Compute thresholds can trigger additional oversight requirements. The EU AI Act, for example, uses training compute (along with other criteria) to identify foundation models requiring heightened obligations.

This is a form of the proportionality principle we explored in [proportionality in model disclosure](/research/001-proportionality-disclosure/)—more capable systems face more intensive governance.

## The Limits

Compute governance is appealing but not sufficient. Several limitations constrain what it can achieve.

### Compute Is a Proxy

Compute is a proxy for capability, not capability itself. The correlation between compute and capability is imperfect and changing.

Algorithmic improvements can achieve the same capabilities with less compute. Fine-tuning and scaffolding can amplify base model capabilities without additional training compute. Inference-time compute can unlock capabilities that pure training didn't produce.

A governance regime calibrated to training compute thresholds may miss dangerous capabilities achieved through algorithmic innovation or novel architectures. Worse, it may create incentives for exactly these compute-efficient approaches, pushing development in directions that are harder to monitor.

### The Threshold Problem

Any compute-based threshold will be arbitrary. Why 10^25 FLOPs and not 10^24 or 10^26? The relationship between compute and risk is not a step function with a clear break point.

Thresholds that are too low capture many low-risk systems, creating compliance burden without safety benefit. Thresholds that are too high miss dangerous systems that fall just below. And any fixed threshold becomes outdated as algorithmic efficiency improves.

### Distributed Training

Large training runs have historically required concentrated compute—massive GPU clusters in single locations. This concentration enables monitoring.

But distributed training techniques are improving. Training across multiple data centers, or even across many smaller facilities, becomes more feasible. If training can be distributed enough, concentration-based monitoring becomes ineffective.

The trend toward distributed approaches may be driven by efficiency considerations rather than governance evasion, but the effect on governability is the same.

### Gaming and Evasion

Entities seeking to evade compute-based governance have options.

Multiple smaller training runs that individually fall below thresholds can be combined in various ways. Fine-tuning approaches can build on publicly available base models, with the fine-tuning step falling below thresholds even if the effective capability is high. Training can be moved to jurisdictions with less oversight.

Some evasion is technically difficult. Others are trivial. Governance that relies heavily on compute thresholds invites gaming by sophisticated actors.

### Cloud vs. On-Premises

Compute governance is much easier for cloud-based training than for on-premises. Cloud providers can be regulated as intermediaries, required to know their customers and enforce requirements.

On-premises compute is harder to monitor. Large organizations can purchase and operate their own GPU clusters without intermediary oversight. Export controls can restrict acquisition, but once hardware is in place, usage is difficult to observe.

The trend toward proprietary compute infrastructure, driven partly by supply chain concerns, complicates governance that assumes cloud-mediated access.

### International Coordination

Compute governance requires international coordination to be effective. If one jurisdiction imposes restrictions, development can move elsewhere. If export controls limit chip access for some countries, alternative supply chains may develop.

Current coordination is limited. The US has imposed export controls unilaterally; other countries have not necessarily followed. Compute installed before controls remains usable. And the global distribution of training data means that restricting compute doesn't restrict all inputs to AI development.

We explored related dynamics in [regulatory arbitrage](/research/008-regulatory-arbitrage/). AI development seeks paths of least resistance, and compute governance creates incentives to find those paths.

### Inference vs. Training

Compute governance typically focuses on training—the phase where models are created. But inference—running trained models—may also be relevant to governance.

Dangerous capabilities exist at inference time, not training time. A model that can assist with harmful tasks does so when queried, regardless of when or where it was trained. Governing training compute doesn't address inference-time risks.

Governing inference compute is much harder. Inference is distributed, occurs at smaller scale per interaction, and involves many more actors. The governance approaches that work for concentrated training don't translate to distributed inference.

## A Realistic Assessment

Compute governance is useful but insufficient. It provides visibility into frontier development, creates enforcement levers, and can trigger proportional oversight for large training runs.

But it cannot be the sole or primary mechanism for AI safety governance. Compute thresholds are proxies that will become less accurate over time. Evasion is possible. Inference-time risks are not addressed. International coordination is limited.

Compute governance should be part of a layered approach that includes:

- **Capability-based evaluation** to assess what systems can actually do, regardless of how much compute was used to create them
- **Behavioral monitoring** at inference time to detect concerning patterns
- **Reflexive mechanisms** where systems themselves participate in governance, as we've explored in [reflexive misuse detection](/research/011-reflexive-misuse-detection/)
- **Supply chain governance** that addresses fine-tuning, scaffolding, and other capability amplification
- **International coordination** to limit arbitrage

Compute governance is a valuable component of this layered approach. It is not a substitute for other governance mechanisms.

## Conclusion

Compute's measurability makes it attractive for governance in a domain where most things are hard to measure. But measurability is not the same as sufficiency. Compute governance can provide visibility and enforcement levers, but cannot by itself ensure AI safety.

The most dangerous AI development scenarios might involve exactly the compute-efficient approaches that slip through compute-based thresholds. Governance that relies too heavily on compute creates incentives for these approaches.

Effective AI governance must address capabilities, behaviors, and deployments—not just inputs. Compute governance is a useful tool in the governance toolkit. It is not a complete solution.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
