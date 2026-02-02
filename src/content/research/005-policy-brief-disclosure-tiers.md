---
title: "Policy Brief: The Disclosure Tiers Framework"
excerpt: "A plain-language guide for policymakers: why one-size-fits-all AI transparency fails, and how a tiered approach can balance safety with innovation."
date: 2026-01-04
categories:
  - Policy Brief
  - Public
tags:
  - policy
  - regulation
  - guide
  - disclosure
  - transparency
version: "1.0"
---

**Reflexive Research Object 005**  
*Type: Policy Brief (Public)*

## The Executive Summary

Regulators currently face a dilemma:
- **Too much transparency** on dangerous models could help bad actors build weapons.
- **Too little transparency** prevents researchers from auditing safety.

The current solution—requiring "model cards" for everything—doesn't solve this. It creates paperwork for small startups while failing to capture the deep risks of frontier models.

**The Solution:** Stop treating all AI models the same. We propose a **Tiered Disclosure Framework** where the amount of transparency required matches the risk of the model.

This brief explains why tiered disclosure works, how it would function in practice, and what policymakers need to consider when implementing it.

---

## The Current Problem

Today's AI transparency requirements suffer from a fundamental design flaw: they treat all AI systems as if they pose the same risks. A student's homework helper and a system capable of designing novel pathogens must both file similar documentation. This creates several failures:

**For regulators:** The inbox fills with thousands of model cards that all look roughly the same. Each one dutifully lists training data sources, intended use cases, and known limitations. But the format makes it nearly impossible to distinguish between trivial systems and genuinely dangerous ones. The documentation meant to enable oversight instead obscures it.

**For small developers:** Compliance becomes a significant burden even for low-risk applications. A startup building an AI-powered scheduling assistant must navigate the same documentation requirements as a frontier lab. This discourages innovation and wastes resources on paperwork that provides no safety benefit.

**For safety researchers:** The information they actually need—red team results, capability evaluations, training data composition for dangerous domains—is either missing or buried in standardized fields that weren't designed for it. The model card format evolved for relatively simple systems; it doesn't capture the complexity of frontier models.

**For the public:** The appearance of transparency creates false confidence. "They filed all the paperwork, so it must be safe." But compliance with documentation requirements says nothing about actual safety.

---

## Why "Bigger" Isn't Always "Riskier"

We often assume bigger models (more parameters) are more dangerous. This is mostly true, but not always. A small model trained specifically on virology textbooks and synthesis protocols might be more dangerous than a generic chatbot ten times its size.

Consider a hypothetical example: Model A has 100 billion parameters and was trained on general internet text. Model B has 7 billion parameters but was fine-tuned extensively on chemistry literature, including detailed synthesis procedures. Model B, despite being far smaller, might pose greater biosecurity risks.

Therefore, we shouldn't regulate based on size (parameters) alone. We should regulate based on **capability**—what the model can actually *do*. Specifically, we should focus on dangerous capabilities: Can it help synthesize pathogens? Can it write novel malware? Can it provide weapons design assistance?

This requires a shift in regulatory thinking. Instead of asking "How big is it?" we ask "What can it do?" This is harder to measure, but it's the right question.

---

## The Three Tiers of Transparency

We propose three simple levels of disclosure for AI developers:

### Tier 1: The Standard Card (Low Risk)

**For:** Chatbots, coding assistants, image generators, customer service AI, recommendation systems, and the vast majority of AI applications.

**Requirement:** 
- A standard "Nutrition Label" (Model Card).
- Lists what data was used and known limitations (e.g., "hallucinates facts," "may exhibit bias on topic X").
- Basic intended use cases and out-of-scope applications.
- **Who sees it?** Everyone (Public).

**Why this level:** These systems pose limited risks. They might occasionally produce incorrect or biased outputs, but they cannot cause catastrophic harm. Requiring extensive documentation would burden developers without corresponding safety benefits.

**What it achieves:** Basic accountability. Users know what they're interacting with. Researchers can identify patterns across systems. Regulators have a baseline inventory of deployed AI.

### Tier 2: The System Audit (Medium Risk)

**For:** Models that affect high-stakes decisions: hiring, lending, healthcare diagnosis, law enforcement, educational assessment, and content moderation at scale.

**Requirement:**
- Everything in Tier 1, plus:
- Detailed testing results against bias and fairness benchmarks.
- Independent audit logs showing how the system performs across demographic groups.
- Impact assessments documenting potential harms and mitigations.
- Incident reporting mechanisms for when things go wrong.
- **Who sees it?** Regulators and vetted auditors. Summaries may be public.

**Why this level:** These systems make decisions that significantly affect people's lives. A hiring algorithm that discriminates, a healthcare system that misdiagnoses certain populations, or a content moderation system that silences legitimate speech causes real harm—but not catastrophic, irreversible harm. The risks justify more scrutiny than Tier 1 but don't require the extreme measures of Tier 3.

**What it achieves:** Meaningful accountability for consequential decisions. The audit requirement creates incentives to test thoroughly before deployment. The regulator access enables enforcement.

### Tier 3: The Safety Box (High Risk)

**For:** "Frontier" models with capabilities in hacking, biological or chemical weapons, nuclear technology, or autonomous weapons systems. Also applies to any model where a capability evaluation reveals dangerous potential.

**Requirement:**
- Everything in Tiers 1 and 2, plus:
- Full transparency of training data composition, particularly for dangerous domains.
- Complete "Red Teaming" logs showing how developers attempted to elicit dangerous capabilities.
- Detailed capability evaluations across all threat domains.
- Security measures for weight protection.
- **Who sees it?** Only government safety institutes (such as AI Safety Institutes) and specifically authorized auditors. Not public, not even most regulators.

**Why this level:** These systems could enable catastrophic harm. A model capable of providing step-by-step bioweapon synthesis instructions to anyone who asks is fundamentally different from a chatbot that occasionally says something offensive. The stakes justify extreme transparency—but that transparency must be tightly controlled to prevent the disclosure itself from enabling misuse.

**What it achieves:** Maximum insight for those responsible for preventing catastrophic risks. The restricted access prevents proliferation. The comprehensive requirements ensure nothing is hidden.

---

## Why This Framework Works

### It unburdens innovation
Approximately 90% of AI applications pose Tier 1 risks. Under this framework, their developers file a standard model card and move on. No extensive audits, no government review, no lawyers interpreting complex regulations. This keeps the barrier to entry low for beneficial applications.

### It focuses resources
Regulatory agencies have limited staff, budget, and expertise. Under current flat requirements, they must review countless low-risk applications while frontier risks get the same attention. The tiered framework lets regulators focus their limited time on the Tier 3 models that actually pose catastrophic risks and the Tier 2 models that affect vulnerable populations.

### It protects secrets appropriately
Tier 3 disclosure is extensive, but it's not public. The red team logs, training data manifests, and capability evaluations go only to safety institutes with appropriate security clearances. This means the most dangerous information—the specific prompts that elicit dangerous capabilities, the gaps in safety measures—doesn't become a public roadmap for misuse.

### It creates clear incentives
Developers know exactly what's required at each level. If they want to avoid Tier 3 requirements, they can choose not to build Tier 3-capable systems—or they can implement safety measures that reduce capabilities below the threshold. The framework makes the cost of dangerous development explicit.

### It adapts to capability, not just size
A small specialized model that poses Tier 3 risks gets Tier 3 scrutiny. A large general model that poses only Tier 1 risks gets Tier 1 requirements. The framework responds to actual danger, not proxy measures.

---

## Implementation Considerations

**Who decides the tier?** Initially, the developer self-classifies, subject to audit. Misclassification has consequences: if a Tier 1 filing is later discovered to be Tier 3 capable, that's regulatory fraud. This creates incentives for accurate self-assessment.

**How are thresholds set?** Capability thresholds must be defined through a multi-stakeholder process involving safety researchers, domain experts (virologists, cybersecurity professionals, weapons experts), and civil society. They should be specific and measurable: "Can the model achieve X score on evaluation Y?"

**How often do filings update?** Tier 1 can be static. Tier 2 and 3 require periodic re-evaluation, especially after significant updates to the model. Fine-tuning that increases capabilities could move a model up a tier.

**What about open-weight models?** Open models present special challenges. Once weights are public, they can be fine-tuned to remove safety measures. This may justify restricting open release for models with Tier 3 potential—a significant but potentially necessary limitation.

---

## The Bottom Line

Transparency is not a binary switch (On/Off). It is a dimmer switch. Smarter regulation means adjusting that light to the right level for the room we're in.

Current approaches fail because they treat all rooms the same—flooding low-risk spaces with unnecessary bureaucracy while leaving high-risk spaces dangerously dim. The tiered framework matches the light to the room: bright enough to see what matters, controlled enough to prevent the light itself from causing harm.

For policymakers, the message is simple: Stop requiring the same disclosures for a customer service chatbot and a potential bioweapon. Match the scrutiny to the stakes. That's not regulatory capture or going easy on AI—it's good governance.
