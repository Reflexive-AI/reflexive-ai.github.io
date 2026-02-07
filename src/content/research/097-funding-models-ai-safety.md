---
title: "Funding Models for AI Safety Research"
excerpt: "AI safety research is chronically underfunded relative to capability work. This article examines current funding sources, compares alternative models from prizes to compute taxes, and proposes concrete mechanisms to close the gap."
date: 2026-02-07
toc: true
categories:
  - Governance Analysis
tags:
  - funding
  - ai-safety
  - research-policy
  - philanthropy
  - public-funding
version: "1.0"
---

**Reflexive Research Object 097**
*Type: Research*

## Introduction

AI safety research is underfunded. Not in absolute terms: hundreds of millions of dollars flow to safety-related work annually. But relative to the scale of capability investment, safety funding remains a rounding error. In 2024, global AI investment exceeded $100 billion. Estimates of dedicated safety research spending ranged from $500 million to $1.5 billion, depending on what counts as "safety" (Epoch AI, 2024). That is roughly one cent of safety spending for every dollar of capability investment.

This imbalance matters. As we examined in [The Economics of AI Safety](/research/078-economics-ai-safety/), who pays for safety shapes what safety work gets done. Funding structures determine which problems receive attention, which researchers can afford to work on safety, and whether safety keeps pace with capability.

The question is not whether AI safety research should receive more funding. It should. The question is how. Different funding models create different incentive structures, attract different researchers, and produce different kinds of work. Some models encourage independence. Others encourage relevance. Some generate sustained programs. Others produce bursts of effort. Getting the mechanism right matters as much as getting the amount right.

This article maps the current funding landscape, evaluates alternative funding models, and proposes specific mechanisms to close the gap between safety investment and capability investment.

## The Current Funding Landscape

### Philanthropic Funding

Private philanthropy has been the backbone of AI safety research for over a decade. Open Philanthropy has granted more than $300 million to AI safety and governance since 2016, making it the single largest funder of the field outside corporate labs (Open Philanthropy, 2025). The Survival and Flourishing Fund has distributed tens of millions more. Individual donors, many of them technology entrepreneurs, contribute through direct giving and donor-advised funds.

Philanthropic funding enabled the field to exist. Before governments or corporations took AI safety seriously, foundations funded the researchers, organizations, and institutions that defined the research agenda. Organizations like MIRI, the Center for AI Safety, the Centre for the Governance of AI, and Redwood Research owe their existence to philanthropic support.

But philanthropic funding has structural limitations. Donor priorities shift. A single foundation's strategic pivot can destabilize an entire research community. Philanthropic funding also reflects donor worldviews: for years, existential risk concerns dominated philanthropic AI safety funding while near-term fairness, bias, and accountability work received less attention from these sources. Additionally, philanthropic capital is finite in a way that government or corporate funding is not.

### Government Funding

Government investment in AI safety is growing rapidly but started from a low base. The US National Institute of Standards and Technology (NIST) received approximately $10 million annually for AI safety work through 2024 before receiving expanded funding. The UK AI Safety Institute (AISI), established in 2023, operates with a budget of roughly $100 million over several years. The EU allocated portions of its Horizon Europe program to trustworthy AI research. Japan, Canada, and South Korea have also announced safety-focused initiatives.

Government funding brings scale, legitimacy, and durability. Public research grants create long-term programs that survive individual donor decisions. Government funding also signals political priority, which influences corporate behavior and international coordination.

However, government funding moves slowly. Grant cycles take months. Bureaucratic requirements consume researcher time. Political priorities shift with elections. Funding often favors applied work with clear policy relevance over fundamental research. And government AI safety budgets remain small compared to defense and intelligence AI spending. The US Department of Defense spent over $1.8 billion on AI in fiscal year 2024 (Congressional Research Service, 2024); its explicit safety-focused spending was a fraction of that.

### Corporate Funding

The largest AI companies fund internal safety teams. Anthropic, whose stated mission centers on AI safety, allocates a significant share of its research budget to alignment and interpretability. Google DeepMind maintains safety and alignment teams. OpenAI's Superalignment initiative, announced in 2023 with a promise of 20% of compute, produced notable work before its leadership departed in 2024. Meta, Microsoft, and others fund safety research at varying scales.

Corporate safety funding is the largest category in absolute terms, but it is difficult to measure. Companies do not consistently report safety spending separately from general research. What counts as "safety" versus "capabilities" is often ambiguous: interpretability research, for example, improves both safety understanding and model performance.

Corporate funding also creates dependency. As we noted in [The Economics of AI Safety](/research/078-economics-ai-safety/), researchers funded by companies feel pressure to align their work with commercial interests. Safety research that slows deployment or imposes costs receives less support than safety research that enables deployment. Internal safety teams face political dynamics: too much friction with product teams reduces their influence.

### Academic Funding

Universities fund AI safety research through standard academic channels: faculty positions, graduate student support, and research grants. Dedicated centers exist at several institutions, including the Center for Human-Compatible AI at UC Berkeley and the Centre for the Study of Existential Risk at Cambridge.

Academic funding is modest in absolute terms but provides independence, long time horizons, and connection to the broader scientific community. Its limitations are the standard limitations of academic research: publication incentives that reward novelty over practical impact, tenure timelines that discourage applied work, and budgets that cannot support the compute-intensive experiments that frontier safety work requires.

## Alternative Funding Models

The current mix of philanthropy, government grants, and corporate budgets has brought the field to its current state. Scaling AI safety research to match the growth of capabilities requires additional mechanisms.

### Mandatory Safety Spending

The most direct approach: require AI companies to spend a fixed percentage of revenue or R&D budget on safety research. This mirrors requirements in other industries. Pharmaceutical companies must fund pharmacovigilance. Nuclear operators fund safety programs. Financial institutions spend mandated amounts on compliance and risk management.

A mandatory safety spending rule has clear advantages. It scales automatically with the industry's growth. It ensures that the companies creating risk bear the cost of managing it. It creates a floor below which safety investment cannot fall.

The challenges are definition and enforcement. What counts as safety spending? If interpretability research improves both safety and capabilities, does it count? Companies would have incentives to relabel existing work as safety research. Any mandatory spending rule requires clear definitions and independent auditing.

A reasonable starting point: require companies above a revenue threshold to spend at least 5% of AI-related R&D on safety work independently verified by a third-party auditor. This is modest compared to pharmaceutical industry safety spending, which typically exceeds 10% of revenue.

### Compute Taxes

Tax the computational resources used to train large models, and direct revenues to safety research. This approach targets the resource most directly associated with capability advancement. As explored in our analysis of [compute governance](/research/023-compute-governance/), compute is measurable, concentrated among a small number of cloud providers, and already subject to export controls.

A compute tax of $0.01 per GPU-hour on training runs above a threshold (say, 10^23 FLOP) would generate significant revenue while adding marginal cost to large training runs. At 2025 training scales, a single frontier model training run consumes millions of GPU-hours. Even a small per-hour tax generates tens of millions of dollars per model.

Revenue from compute taxes could fund an independent safety research institute, similar to how spectrum auction revenue funds telecommunications research. The key design choice is governance: who decides how the funds are spent, and how do they maintain independence from both industry and political pressure?

### Prize Models and Bounties

Prizes reward specific achievements rather than funding ongoing programs. DARPA's Grand Challenges, the Netflix Prize, and Kaggle competitions demonstrate that prizes can attract talent and accelerate progress on well-defined problems.

For AI safety, prizes work best when the problem is clearly defined and solutions are verifiable. Examples include red-teaming bounties (find and document specific failure modes), interpretability challenges (explain the internal reasoning of a given model), and evaluation development (create better benchmarks for measuring safety properties).

The X-Prize Foundation announced a $10 million AI safety prize in 2025. Several companies run bug bounty programs that include safety-relevant findings. These efforts are small but demonstrate the model's viability.

Prizes have limitations. They favor problems with clear success criteria. Much safety research involves open-ended exploration where success is hard to define in advance. Prizes also create winner-take-all dynamics that discourage collaboration and incremental work.

A hybrid approach combines bounties for specific, well-defined challenges with grant funding for open-ended research. Bounties of $100,000 to $1 million for specific safety contributions (discover a novel jailbreak category, develop a verified interpretability tool, create a safety evaluation that a frontier model fails) could complement broader research funding.

### Insurance-Linked Funding

As examined in [Insurance Markets and AI Risk Pricing](/research/036-insurance-markets/), insurance creates financial incentives for safety. Insurance-linked funding extends this logic: require AI deployers to carry liability insurance, and allow insurers to fund safety research that reduces their exposure.

This model exists in other industries. Workers' compensation insurers fund workplace safety research. Medical malpractice insurers fund patient safety initiatives. The Insurance Institute for Highway Safety, funded by auto insurers, has driven significant improvements in vehicle safety.

An AI Safety Insurance Institute, funded by premiums from mandatory AI liability insurance, could support independent safety research with direct relevance to real-world deployment risks. This links funding to the actual risk profile of AI systems rather than to political or philanthropic priorities.

### International Pooled Funding

AI safety is a global public good. No single country captures all the benefits of safety research, and risks cross borders. This creates a case for international pooled funding, similar to CERN for particle physics or the CGIAR system for agricultural research.

The Frontier AI Forum, established after the 2023 Bletchley Park summit, represents a first step. A more ambitious version would create an International AI Safety Research Fund with contributions from major AI-developing nations, governed by an independent scientific board, and distributing grants through open competition.

Annual contributions of 0.1% of national AI industry revenue from the US, China, EU, UK, Japan, and South Korea would generate over $1 billion annually. This exceeds current philanthropic funding and would support a significant independent research enterprise.

The obstacle is geopolitical. AI is embedded in strategic competition between the US and China. Pooled funding requires trust that research outputs will be shared openly, which conflicts with national security concerns. A more realistic near-term approach limits pooled funding to allies and partners, accepting reduced scale for increased feasibility.

## The Alignment Tax Problem

Every funding model must confront the alignment tax: safety research competes with capability research for the same scarce resources, particularly talented researchers and compute.

The best machine learning researchers can command salaries exceeding $1 million annually at frontier labs. Safety-focused organizations, especially nonprofits and academic groups, cannot match these offers. The result is a persistent talent drain from safety to capability work.

This dynamic is self-reinforcing. Capability labs attract top researchers. Top researchers produce impressive results. Impressive results attract funding and more researchers. Safety organizations struggle to compete for talent, produce fewer striking results, and find it harder to attract the next generation.

As discussed in [The Speed-Safety Tradeoff](/research/077-speed-safety-tradeoff/), this imbalance is not inevitable. It reflects choices about how resources are allocated. Several strategies can help close the gap.

**Salary competitiveness.** Safety organizations must pay competitive salaries. This requires larger funding pools. The expectation that safety researchers should accept below-market compensation for mission-driven reasons is unsustainable. Some philanthropic funders have begun supporting market-rate salaries at safety organizations.

**Compute access.** Safety research increasingly requires access to frontier-scale compute. Government-funded compute clusters dedicated to safety research, like the US National AI Research Resource (NAIRR) proposed in 2023, can provide this without requiring each safety organization to fund its own infrastructure.

**Career incentives.** Academic institutions should recognize safety research for hiring and tenure decisions. Government funding agencies should create dedicated safety research career tracks. Companies should create pathways for safety researchers that do not dead-end below the leadership level.

**Research prestige.** The safety research community has made progress in establishing publication venues (the SafeAI workshop series, dedicated ICML and NeurIPS tracks) and research recognition. Continued progress in making safety research intellectually prestigious attracts talent independently of compensation.

## A Concrete Proposal: A Diversified Funding Architecture

No single funding model is sufficient. Each has strengths and weaknesses. The goal should be a diversified architecture that combines multiple models to create redundancy, independence, and scale.

We propose five components:

1. **Mandatory corporate safety spending.** Require companies with AI revenue exceeding $1 billion to allocate at least 5% of AI R&D spending to safety research, independently audited. Estimated yield: $2 to 5 billion annually at current industry scale.

2. **Government safety research programs.** Expand NIST, UK AISI, and equivalent bodies to a combined budget of $1 billion annually across allied nations. Fund both intramural research and extramural grants through open competition.

3. **Compute tax for independent research.** Levy a tax on large training runs (above 10^23 FLOP) to fund an independent AI Safety Research Foundation governed by a scientific board with no industry or government majority. Estimated yield: $200 to 500 million annually.

4. **Expanded philanthropy with coordination.** Encourage philanthropic funders to coordinate through a shared strategy framework to reduce duplication and ensure coverage of neglected areas. Target: maintain current philanthropic funding ($500 million+) while improving allocation.

5. **International safety research fund.** Establish a multilateral fund for AI safety research, starting with Five Eyes nations and expanding. Initial target: $500 million annually.

This architecture would bring total AI safety funding to $4 to 7 billion annually: still modest relative to capability investment, but a significant increase from current levels and sufficient to support a large, diverse, independent safety research community.

## Reflexive Dimension

This analysis is itself shaped by the funding dynamics it describes. The Reflexive AI Initiative operates outside commercial AI development, which grants independence but limits access to frontier systems and internal knowledge. Our assessment of corporate safety spending relies on public disclosures that are incomplete by design.

We also note a tension in our proposal. Mandatory spending rules and compute taxes increase the cost of AI development. As we examined in [The Speed-Safety Tradeoff](/research/077-speed-safety-tradeoff/), imposing costs on development slows it. If AI applications provide genuine benefits, slowing development has costs. Our judgment is that the benefits of adequate safety research outweigh these costs, but reasonable people disagree.

There is a further reflexive concern: researchers funded by safety-specific mechanisms have incentives to emphasize the importance of safety research. Funders of safety research have incentives to believe that their funding is necessary. This does not make the arguments wrong, but it demands transparency about these dynamics.

Finally, any funding architecture creates power. Whoever controls funding decisions shapes the research agenda. The history of science funding shows that centralized control produces groupthink and neglect of heterodox ideas. Our proposed architecture deliberately distributes funding authority across multiple independent bodies to mitigate this risk.

## Conclusion

AI safety research funding is inadequate in scale, overly concentrated in its sources, and structurally misaligned with the problems it needs to address. The current mix of philanthropy, government grants, and corporate budgets built the field but will not sustain it at the scale that frontier AI development demands.

Closing the gap requires new mechanisms: mandatory safety spending, compute taxes, prize models, insurance-linked funding, and international cooperation. No single mechanism is sufficient. A diversified funding architecture, distributing authority and resources across independent bodies, provides the scale, independence, and resilience that safety research needs.

The alignment tax is real. Safety research competes with capability research for talent, compute, and attention. Overcoming this competition requires not just more money but better-designed funding systems that make safety research intellectually rewarding, financially competitive, and institutionally supported.

Adequate safety funding costs billions. Inadequate safety research, should advanced AI systems cause serious harm, costs more than anyone wants to quantify. The investment case is straightforward.

## References

1. Epoch AI. (2024). "Trends in AI Investment and Safety Spending." Epoch AI Research.
2. Open Philanthropy. (2025). "Grants Database: AI Safety and Governance." openphilanthropy.org.
3. Congressional Research Service. (2024). "Department of Defense Artificial Intelligence Spending." CRS Report R47976.
4. UK Department for Science, Innovation and Technology. (2023). "AI Safety Institute: Mission and Budget." gov.uk.
5. European Commission. (2024). "Horizon Europe: Trustworthy AI Cluster Funding." ec.europa.eu.
6. NIST. (2024). "AI Safety Research Program: Annual Report." National Institute of Standards and Technology.
7. Grunewald, E. & Heim, L. (2024). "Compute Governance and AI Safety." Centre for the Governance of AI Working Paper.
8. Amodei, D. (2023). "The Case for More AI Safety Funding." Anthropic Blog.
9. X-Prize Foundation. (2025). "AI Safety X-Prize: Competition Details." xprize.org.
10. National Academies of Sciences. (2024). "Funding Models for Emerging Technology Safety Research." National Academies Press.
11. Frontier AI Forum. (2024). "Charter and Funding Commitments." frontieraiforum.org.
12. Berger, A. & Lazar, S. (2024). "The Political Economy of AI Safety Research." Oxford University Working Paper.
