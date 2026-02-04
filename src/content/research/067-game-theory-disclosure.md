---
title: "The Game Theory of AI Disclosure: When Transparency is a Prisoner's Dilemma"
excerpt: "Companies face a collective action problem: all would benefit from industry-wide transparency, but unilateral disclosure may harm competitive position. How do we change the payoff structure?"
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - transparency
  - game-theory
  - collective-action
  - disclosure
  - incentives
---

## The Transparency Problem

Everyone agrees AI systems should be more transparent. Companies issue transparency reports. Regulators mandate disclosure. Researchers call for openness about training data, model capabilities, and safety evaluations.

Yet meaningful transparency remains rare. Model cards omit critical information. Safety evaluations are conducted privately and reported selectively. Competitive dynamics discourage disclosure.

Why? Because transparency is not just a technical or ethical question. It is a strategic one. And the strategic structure of AI disclosure resembles a prisoner's dilemma.

## The Basic Game

Consider two competing AI companies. Each must decide whether to disclose information about their models: training data composition, capability evaluations, safety testing results, known limitations.

If both disclose:
- Industry benefits from shared learning
- Regulators can compare and evaluate
- Trust in AI increases
- Neither gains competitive advantage over the other

If neither discloses:
- Industry loses shared learning opportunities
- Regulators cannot compare effectively
- Trust remains low
- Neither gains competitive advantage over the other

If one discloses and one withholds:
- The discloser reveals vulnerabilities competitors can exploit
- The discloser faces scrutiny the withholder avoids
- The withholder gains competitive advantage
- The discloser may face reputational damage if disclosed flaws are sensationalized

The payoff structure favors withholding regardless of what the other party does. This is the prisoner's dilemma structure: individual rationality produces collective suboptimality.

## Complications

The basic game is simplified. Real AI disclosure involves several complications.

**Asymmetric capabilities.** Companies differ in their systems' quality. High-quality systems benefit more from transparency (nothing to hide). Low-quality systems benefit more from opacity (flaws stay hidden). This creates asymmetric incentives.

**Reputational dynamics.** Disclosure can signal confidence. Companies with strong safety practices may benefit from transparency that demonstrates their superiority. But this only works if observers can evaluate disclosed information accurately.

**Sequential decisions.** Companies do not decide simultaneously. They observe each other's behavior and respond. Early disclosers may set norms that later entrants must follow, or may be punished for naivety.

**Heterogeneous disclosure.** Disclosure is not binary. Companies can selectively reveal information that makes them look good while concealing unfavorable information. This strategic disclosure may be worse than uniform opacity because it misleads while appearing transparent.

**Audience multiplicity.** Disclosure reaches multiple audiences: regulators, competitors, customers, researchers, the public. Information valuable to one audience may be harmful if seen by another.

## Why Voluntary Transparency Fails

Given this structure, calls for voluntary industry transparency will mostly fail.

Individual companies face pressure to withhold. Even if executives believe transparency is right, boards and investors may prioritize competitive position. The first-mover disadvantage in disclosure is real.

Industry associations cannot solve this. Associations represent members' collective interests, but those interests are to appear transparent while competitors actually are. Stated commitments to transparency typically produce minimal actual disclosure.

Cultural exhortations are insufficient. Telling companies they should be transparent does not change the payoff structure. As long as withholding is individually rational, most companies will withhold.

## Changing the Payoff Structure

If voluntary transparency fails, governance interventions must change the underlying game.

**Regulatory mandates.** Mandatory disclosure removes the competitive disadvantage of unilateral transparency. If everyone must disclose, no one loses relative position by disclosing.

The [EU AI Act](/research/019-eu-ai-act-gaps/) takes this approach, requiring documentation and disclosure for high-risk systems. Effectiveness depends on what disclosure is mandated and whether requirements are enforced.

**Verification and audit.** Companies might claim transparency while practicing selective disclosure. Third-party [audits](/research/006-meta-governance-auditors/) can verify that disclosures are complete and accurate. Auditors change the game by making strategic non-disclosure detectable.

**Liability linkage.** If non-disclosure increases liability exposure in the event of harm, the calculus changes. Companies might prefer disclosure that documents their safety practices over opacity that leaves them vulnerable to claims they did not exercise due care.

[Liability frameworks](/research/020-liability-frameworks/) can be structured to reward disclosure: safe harbors for companies that disclosed known risks, increased damages for those that concealed them.

**Reputational mechanisms.** Ratings, rankings, and public scorecards can reward disclosure and penalize opacity. If customers, investors, and talent prefer transparent companies, market dynamics shift.

This requires credible evaluators who can assess disclosure quality. Without this, reputational mechanisms reward appearance of transparency rather than substance.

**Coordinated industry commitment.** If all major players commit simultaneously to disclosure standards, none gains advantage from defection. This is collective self-regulation.

The challenge is enforcement. Absent external verification, companies may defect from stated commitments. [Self-reporting limitations](/research/010-self-reporting-vs-audit/) apply here.

## Tiers of Disclosure

Not all information is equally strategic. Disclosure can be tiered by sensitivity.

**Low-sensitivity disclosure.** General capability descriptions, broad training data categories, high-level safety evaluation results. Competitive harm is minimal. This disclosure should be straightforward to mandate.

**Medium-sensitivity disclosure.** Specific evaluation results, known failure modes, detailed training data composition. Some competitive information, but mostly relevant to safety evaluation. Regulators might receive this information under confidentiality while summaries are made public.

**High-sensitivity disclosure.** Model weights, proprietary training techniques, unreported capabilities. Significant competitive value. Public disclosure may not be appropriate, but [capability evaluations](/research/024-capability-evaluations/) by trusted third parties might be.

[Proportionality in disclosure](/research/001-proportionality-disclosure/) applies: the most sensitive information may warrant restricted rather than public transparency.

## The Reflexive Approach

Reflexive governance offers additional mechanisms.

[Machine-readable constraint documentation](/research/003-machine-readable-constraint-schema/) can be verified computationally. Unlike natural language disclosure, which can be strategically vague, machine-readable formats enable automated checking. Systems either satisfy stated constraints or they do not.

[AI-to-regulator protocols](/research/014-ai-regulator-protocol/) can enable continuous disclosure rather than point-in-time reports. Systems that flag anomalies in their own operation provide ongoing transparency without requiring companies to anticipate what to disclose.

[Output provenance](/research/012-output-provenance/) enables transparency about specific outputs without requiring disclosure of system internals. Users and downstream systems can verify what they received without access to how it was generated.

These mechanisms change the game by making non-disclosure detectable or irrelevant. If constraints are machine-verifiable, claiming false constraints fails. If systems report their own anomalies, companies cannot conceal problems they did not know about.

## Conclusion

AI transparency is not just an ethical aspiration. It is a strategic problem with a specific structure: the prisoner's dilemma.

Recognizing this structure clarifies why voluntary transparency initiatives fail and what interventions might succeed. Changing the payoff structure matters more than changing the rhetoric.

Regulatory mandates, verification mechanisms, liability linkage, and reflexive documentation all shift incentives toward disclosure. None is perfect. All are better than hoping companies will voluntarily disadvantage themselves.

The goal is not punishing companies for opacity. It is creating conditions where transparency is compatible with competitive success. When disclosure is universal, the competitive penalty disappears. When disclosure is verifiable, gaming becomes difficult. When disclosure is linked to liability, concealment becomes risky.

Game theory does not tell us what to value. But it tells us how to get what we value given how agents respond to incentives. If we value transparency, we must design systems where transparency pays.

## Related Research

- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/006-meta-governance-auditors/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Liability Frameworks for AI Harm](/research/020-liability-frameworks/)
