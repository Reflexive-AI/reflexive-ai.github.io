# IDEAS.md: Research Spikes and Raw Proposals

*Maintained by the Principal Investigator. These are ideas too raw for articles but too important to lose.*

*Last updated: 2026-02-07*

---

## Research Spike 1: The Legal Personhood of Ephemeral Agent Swarms

**Status**: Unaddressed in corpus  
**Related articles**: 015 (Emergent Norms), 088 (Multi-Agent Coordination Failures), 020 (Liability Frameworks)  
**Thesis**: Current liability frameworks assume identifiable, persistent actors. Agent swarms are ephemeral: they form, act, and dissolve in milliseconds. No legal entity persists long enough to be held accountable. This is not a gap in regulation; it is a category error in legal ontology.  
**Key question**: Can existing corporate law concepts (joint ventures, partnerships, agency law) be adapted, or do we need an entirely new legal construct for transient multi-agent coalitions?  
**Priority**: HIGH. This is happening now with MCP tool-use chains and orchestration frameworks.

---

## Research Spike 2: Agent-to-Agent Economics

**Status**: Absent from article list  
**Related articles**: 088, 015, 008 (Regulatory Arbitrage)  
**Thesis**: AI agents are becoming economic actors: negotiating API calls, selecting service providers, and optimizing costs on behalf of humans. When an agent autonomously procures a service from another agent, standard contract law does not apply because neither party has legal standing. The result is an unregulated economic layer operating at machine speed.  
**Key question**: What happens when agent-to-agent transactions create externalities that affect humans who never consented to the transaction?  
**Priority**: HIGH. Already occurring in production systems.

---

## Research Spike 3: The Alignment Tax and Competitive Dynamics

**Status**: No article  
**Related articles**: 077 (Speed-Safety Tradeoff), 078 (Economics of AI Safety), 036 (Insurance Markets)  
**Thesis**: Safety and alignment impose costs. These costs are not distributed evenly. Labs that invest in alignment ship slower and charge more. Labs that cut corners ship faster and undercut. The alignment tax creates a race-to-the-bottom dynamic unless governance imposes a floor. But who sets the floor, and how is it enforced across jurisdictions? This is the regulatory arbitrage problem (008) applied specifically to alignment costs.  
**Key question**: Is there an economic mechanism (insurance, certification premium, procurement requirements) that makes alignment *profitable* rather than merely obligatory?  
**Priority**: MEDIUM. Theoretically important but not time-critical.

---

## Research Spike 4: Synthetic Data Recursion and Epistemic Collapse

**Status**: Absent from corpus  
**Related articles**: 048 (Training Data Governance), 029 (Honest AI)  
**Thesis**: Models trained on model outputs degrade. This is documented in Shumailov et al. (2024) as "model collapse." The governance dimension is unexplored: when a significant fraction of training data is AI-generated, the resulting model's outputs are epistemically contaminated. Who bears responsibility for downstream harms caused by a model trained on synthetic data that no human ever reviewed? This is a pollution problem; the AI-generated web is an epistemic commons being degraded.  
**Key question**: Should there be a "synthetic content disclosure" requirement analogous to nutritional labeling? Can content provenance (article 052) solve this, or is it inherently unscalable?  
**Priority**: HIGH. The synthetic data fraction of the web is growing exponentially.

---

## Research Spike 5: Post-Proliferation Open-Weight Governance

**Status**: Partially addressed in 002 (Open Weight Safety Paradox), but outdated  
**Thesis**: Article 002 was written when open-weight models were several generations behind frontier. That gap has closed. Open-weight models now match or exceed proprietary models on most benchmarks. The safety paradox from 002 has resolved in the direction of openness winning. The new question is: given that proliferation has already occurred, what governance tools remain viable? Pre-deployment review is impossible. API-level controls (054) are irrelevant. What's left?  
**Key question**: Is "compute governance" (023) the only remaining control vector, or can community-based governance emerge organically (as in open-source software)?  
**Priority**: MEDIUM. The horse has left the barn, but governance still needs a strategy.

---

## Research Spike 6: Cryptographic Verification of AI Intent

**Status**: Absent  
**Related articles**: 052 (Watermarking), 012 (Output Provenance), 067 (Game Theory Disclosure)  
**Thesis**: We can tag AI outputs (provenance), but we cannot prove what the AI system *intended* to do during inference. Cryptographic attestation of the model's internal state at inference time could provide verifiable evidence of intent, analogous to a flight data recorder. This intersects with interpretability (051) but goes further: it is not about understanding the model; it is about creating a tamper-proof record of the model's computational trajectory.  
**Key question**: Is this technically feasible with current cryptographic primitives (trusted execution environments, zero-knowledge proofs)? What are the performance costs?  
**Priority**: LOW (speculative but high-impact if feasible).

---

## Research Spike 7: AI Labor Market Governance

**Status**: Complete absence in the 100-article list  
**Thesis**: The most politically salient dimension of AI governance: job displacement. The corpus has 93 articles and not one addresses labor market effects. This is a strategic weakness. Policymakers care about employment more than they care about alignment. If the initiative wants policy influence, it needs at least one rigorous treatment of AI-driven labor market transformation and the governance tools available (retraining programs, transition funds, sectoral deployment pacing).  
**Key question**: Should labor market governance be treated as a distinct domain or integrated into existing articles (e.g., 076, Global South Governance)?  
**Priority**: HIGH for credibility; MEDIUM for intellectual novelty.

---

## Proposed Roadmap Modification: Tier 5

The current article list stops at 100 and does not include a speculative tier. I propose appending a **Tier 5: Speculative Horizons** to `ARTICLE_LIST_100.md` for articles 101+. Candidate topics:

- 101: The Legal Personhood of Ephemeral Agent Swarms [R]
- 102: Agent-to-Agent Economics: Unregulated Markets at Machine Speed [R]
- 103: The Alignment Tax [R][P]
- 104: Synthetic Data Recursion and Epistemic Collapse [R]
- 105: Post-Proliferation Open-Weight Governance [R][P]
- 106: Cryptographic Verification of AI Intent [R][A]
- 107: AI Labor Market Governance [R][P]
- 108: The Biosecurity Dilemma of Open-Weight Agents [R]
- 109: Governance of AI-Generated Science [R]
- 110: Digital Sovereignty and AI Infrastructure [R][P]

These topics are selected because they represent *second-order effects* (consequences of deployed governance, not just the governance itself) and *emerging friction points* (problems that did not exist when the original 100 were planned).

---

*To add a new research spike, append below this line.*
