---
title: "Self-Reporting vs. External Audit: The Trade-off Space"
excerpt: "A game-theoretic analysis of disclosure incentives. Why self-reporting fails without a credible threat of external verification."
date: 2025-12-23
categories:
  - Governance Analysis
tags:
  - game-theory
  - auditing
  - incentives
  - institutional-design
version: "1.0"
---

**Reflexive Research Object 010**  
*Type: Game Theoretic Analysis*

## The Lemon Market

If safety testing is purely internal (self-reporting), the AI market becomes a "Market for Lemons" as described by economist George Akerlof in his analysis of information asymmetry.

The logic is straightforward: Labs that cut corners on safety can iterate faster and reach market sooner. If they claim "we tested it, it's safe," and no one can verify that claim, they gain competitive advantage over labs that actually invest in comprehensive testing. The market cannot distinguish between genuine safety and claimed safety, so it cannot reward the former or punish the latter.

Over time, this dynamic drives out responsible actors. Labs that invest heavily in safety pay real costs—time, compute, talent—that their less scrupulous competitors avoid. If both appear equally "safe" to the market (because both make the same claims and neither faces verification), the safer lab is at disadvantage. The market equilibrium shifts toward unsafe, fast systems.

This is not speculation; it is the predictable outcome of unverified self-reporting in any high-information-asymmetry market. We have seen it in financial products, in emissions testing, in food safety prior to regulation. There is no reason to expect AI to be different.

## The Verification Cost

External audit solves the trust issue—in theory. An independent third party, with expertise and incentive to find problems, can verify safety claims and certify compliant systems. The market can then distinguish between certified and uncertified systems, rewarding genuine safety.

But external audit introduces its own costs:

**Intellectual Property Risk:** Labs do not want to hand over weights to auditors. The weights encode billions of dollars of investment in architecture, training data, and optimization. An auditor who sees the weights could leak them, copy them, or derive competitive insights. Even with contractual protections, the risk is real.

**Capability Asymmetry:** As discussed in Research Object 006, auditors cannot match the understanding that developers have of their own models. A lab spending $100M on training will always know more than an auditor spending $100K on testing. The audit may provide false assurance rather than genuine verification.

**Time Cost:** Comprehensive external audit takes time—weeks or months. In a fast-moving competitive environment, this delay is costly. Labs may rush through audits, auditors may cut corners to meet deadlines, and the resulting certification may reflect schedule pressure rather than thorough evaluation.

**Regulatory Capture:** The dynamics that lead auditors to favor their clients (see Research Object 006) undermine the independence that makes external audit valuable. Over time, the market for auditors may select for those who are "easy" rather than those who are thorough.

## The Trade-off Space

Self-reporting and external audit represent poles of a spectrum, and neither pure approach works:

**Pure Self-Reporting:**
- Advantage: No IP risk, no delay, no audit cost
- Disadvantage: No credibility, no market differentiation, race to bottom

**Pure External Audit:**
- Advantage: Independent verification, market can reward safety
- Disadvantage: IP risk, regulatory capture, capability asymmetry

Most governance regimes try to find a middle ground—require some level of external verification while limiting what must be disclosed. But this middle ground is unstable. If the external component is too weak, we slide back toward self-reporting dynamics. If it's too strong, we impose costs that inhibit innovation or drive development to less regulated jurisdictions.

## Game-Theoretic Framing

We can model the interaction as a game between the lab and the regulator:

**The Lab's Strategy Set:**
1. Invest heavily in safety; report honestly
2. Invest minimally in safety; claim to be safe
3. Invest heavily in safety; exaggerate claims
4. Invest minimally in safety; don't make claims

**The Regulator's Strategy Set:**
1. Require external audit for all claims
2. Accept self-reporting at face value
3. Probabilistic audit (verify some claims randomly)
4. Outcome-based enforcement (punish harms, not process failures)

Under pure self-reporting (regulator plays strategy 2), the lab's dominant strategy is to minimize investment while claiming safety. The regulator cannot distinguish, so the lab bears no cost for deception.

Under pure external audit (regulator plays strategy 1), the lab must either invest in safety or risk failing the audit. But the lab also faces IP costs and delays, which may drive it to avoid regulation entirely (jurisdictional arbitrage) or to capture the auditor.

The most interesting dynamics emerge with probabilistic audit (strategy 3) and outcome-based enforcement (strategy 4). These approaches merit deeper examination.

## Probabilistic Auditing

Rather than auditing every claim, the regulator audits a random sample. This has several advantages:

**Scalability:** Auditing every AI system is impossible; auditing a sample is feasible.

**Deterrence:** If the probability of audit is high enough, labs must behave as if they will be audited, even when they aren't.

**Cost Reduction:** Labs that aren't selected for audit avoid IP risk and delay; the expected cost is lower than universal audit.

The key design question is the audit probability and the penalty for failing. If the probability is too low, labs gamble that they won't be selected. If the penalty is too mild, failing an audit is just a cost of doing business.

The optimal regime sets the expected penalty (probability × penalty if caught) higher than the cost of genuine compliance. Labs then rationally choose compliance over gambling.

Implementation challenges include: How are labs selected? (Random selection prevents gaming, but may miss the highest-risk systems.) What triggers audit? (Risk-based triggers may be gamed; random triggers may waste resources on low-risk systems.) How are penalties structured? (Fines, market exclusion, criminal liability?)

## Outcome-Based Enforcement

An alternative to auditing process is punishing outcomes. Rather than verifying that a lab followed safety procedures, regulators impose liability for harms that occur. If your model causes damage, you pay—regardless of what procedures you claimed to follow.

This approach has theoretical elegance:

**Right Incentives:** Labs have direct incentive to avoid harms, however they choose to achieve that.

**Flexibility:** Different labs can use different safety approaches suited to their systems; regulators don't need to specify methods.

**No IP Exposure:** Labs don't need to disclose internal processes; they just need to ensure good outcomes.

But outcome-based enforcement has severe limitations:

**Attribution:** If a model contributes to harm, proving causation is difficult. Did the model provide the crucial information, or would the harm have occurred anyway?

**Rare Events:** The harms we most worry about (bioweapons, cyberattacks on infrastructure) are rare but catastrophic. Waiting for harm to occur before imposing penalties means allowing catastrophes. We want to prevent harm, not just punish it after the fact.

**Diffuse Harms:** Some harms (bias, misinformation, erosion of trust) are diffuse and cumulative. No single interaction causes measurable damage; the harm emerges from patterns across millions of uses. Outcome-based enforcement struggles with harms that lack discrete victims and measurable damages.

**Long Tail:** A lab might deploy a hundred models with minor issues before one causes catastrophic harm. Outcome-based enforcement might bankrupt the lab after the catastrophe, but that doesn't help the victims or undo the damage.

## The Reflexive Solution: Zero-Knowledge Compliance

We propose moving toward **Zero-Knowledge (ZK) Compliance Protocols** that escape the trade-off between self-reporting and full audit.

The core idea: A lab proves to a regulator that "This model satisfies Constraint C-004 (No Bio-risk)" without revealing the weights or the training data. The proof is cryptographic; it can be verified without learning anything beyond the truth of the claim.

This requires three components:

**1. Formalized Constraints:** The constraint must be mathematically precise, not vague. See Research Object 003 for how constraints can be expressed in machine-readable form. "The model does not achieve >X% accuracy on bio-risk benchmark Y" is verifiable; "the model is safe" is not.

**2. Secure Computation:** The evaluation runs on a secure enclave—hardware that prevents the evaluator from extracting information beyond the computation result. Alternatively, emerging ZK-ML (Zero-Knowledge Machine Learning) techniques allow generating proofs about model behavior without revealing model weights.

**3. Cryptographic Proof:** The output is a mathematical proof that can be verified by anyone. The proof says: "The claim is true, and here is evidence that the computation was performed correctly." The verifier learns only that the claim is true, not the details of how the model works.

This shifts the debate from "Trust me" (Self-reporting) vs "Show me everything" (External audit) to "Here is the mathematical proof of compliance."

## Current Limitations

ZK Compliance is not yet practical for comprehensive safety evaluation:

**Computational Cost:** Generating ZK proofs for neural network computations is extremely expensive—orders of magnitude more than running the model directly.

**Constraint Expressiveness:** We can currently prove claims about model outputs on specific inputs, but not claims about model behavior across all possible inputs. "The model never produces bio-threat content" is much harder to prove than "The model didn't produce bio-threat content on these 10,000 test cases."

**Evaluation Design:** We don't yet know how to design evaluations that meaningfully capture safety risk in a form amenable to ZK proof. The evaluations themselves need work, independent of how they're verified.

These limitations are being addressed by active research. As ZK-ML techniques mature, the feasibility of this approach will improve.

## Hybrid Approaches

In the near term, hybrid approaches combining multiple verification mechanisms offer the best path:

**Tiered Verification:** Low-risk claims are self-reported. Medium-risk claims require probabilistic audit. High-risk claims require comprehensive evaluation, possibly with ZK components where technically feasible.

**Escrow and Deposit:** Labs make deposits that are forfeit if audits reveal misrepresentation. This creates financial incentive for honest self-reporting without requiring universal audit.

**Reputation Systems:** Labs that pass multiple audits build reputation; labs that fail lose it. Market participants can consider reputation when deciding which systems to use.

**Insurance Markets:** Require AI providers to carry liability insurance. Insurers have strong incentive to assess risk accurately and will develop their own verification mechanisms. This privatizes part of the verification burden.

## Conclusion

The choice between self-reporting and external audit is a false binary. Pure self-reporting fails because it cannot be verified; pure external audit fails because it is costly, gameable, and intrusive.

The path forward combines multiple approaches: probabilistic auditing that creates deterrence, outcome-based liability for rare but attributable harms, cryptographic proofs for specific safety claims, and market mechanisms that reward genuine safety investment.

The goal is not to achieve perfect verification—that's impossible—but to make the expected cost of safety violations higher than the cost of genuine compliance. When the incentive math changes, behavior follows.
