---
title: "AI Governance Without Borders: Lessons from Internet Governance History"
excerpt: "The internet faced similar challenges: global technology, national regulation, coordination problems. What worked? What failed? Lessons from ICANN, IETF, and content moderation for AI governance."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - internet-governance
  - international
  - coordination
  - multistakeholder
  - history
---

## The Parallel

AI governance faces a familiar problem: how do you govern something that does not respect borders?

The internet faced this problem first. A global network operating across jurisdictions, controlled by no single entity, evolving faster than law could follow. The solutions developed for internet governance, imperfect as they are, offer lessons for AI.

This is not to say AI is just like the internet. The technologies differ, the actors differ, the risks differ. But the structural problem of governing a borderless technology with bordered institutions is the same.

## Internet Governance: A Brief History

Through the 1990s, the internet was largely self-governed by technical communities. The Internet Engineering Task Force (IETF) developed protocols through rough consensus and running code. The Internet Assigned Numbers Authority (IANA) coordinated addressing. Academic and research networks predominated.

Commercialization in the mid-1990s changed this. The domain name system became economically valuable. Disputes intensified. Governments took interest. In 1998, the U.S. government created ICANN (Internet Corporation for Assigned Names and Numbers) to manage domain names and IP addresses.

The 2000s saw repeated attempts to bring internet governance under intergovernmental control. The World Summit on the Information Society (WSIS) in 2003-2005 produced the Internet Governance Forum but no binding agreements. Proposals for ITU (International Telecommunication Union) oversight were resisted by the U.S. and technology companies.

By the 2010s, internet governance had fragmented. Technical coordination remained with ICANN and IETF. Content governance became the domain of platforms. National governments asserted jurisdiction over data, speech, and commerce within their borders. No unified global regime emerged.

## What Worked

**Multistakeholder processes.** The IETF model, including engineers, companies, civil society, and governments in one process, proved more adaptive than purely intergovernmental approaches. It enabled rapid standard-setting while incorporating diverse perspectives.

**Rough consensus.** Rather than requiring unanimity or voting, IETF sought rough consensus: general agreement among active participants with strong objections addressed. This allowed progress despite disagreement.

**Running code.** Standards that worked in practice were preferred over theoretical elegance. Implementation served as validation.

**Technical coordination separated from content governance.** Keeping the technical layer (addressing, routing, protocols) distinct from the content layer (what people say and do online) allowed technical coordination to proceed without resolving intractable content disputes.

**Distributed authority.** Rather than centralizing all governance in one body, authority was distributed across institutions with different mandates and competencies.

## What Failed

**Legitimacy deficits.** ICANN was created by the U.S. government and initially operated under U.S. contract. This undermined its legitimacy as a global institution. The 2016 transition to full multistakeholder control addressed this partially but not completely.

**Capture by powerful actors.** Multistakeholder processes can be captured by those with resources to participate intensively. Large technology companies dominate many governance forums.

**Enforcement gaps.** Voluntary standards work when participants want to comply. They fail against bad actors who ignore them. [Regulatory arbitrage](/research/008-regulatory-arbitrage/) became endemic.

**The content problem.** Technical governance worked; content governance failed. Platforms now make content decisions affecting billions without clear legitimacy, accountability, or consistency.

**Fragmentation.** The dream of a single, interoperable global internet has partially given way to national intranets, platform silos, and incompatible regulatory regimes.

## Lessons for AI Governance

**Lesson 1: Do not expect a unified global regime.**

The internet never achieved unified global governance. AI will not either. Jurisdictions will differ. Platforms will differ. Standards will fragment.

This is not necessarily failure. Distributed governance with partial coordination may be more robust than centralized governance that cannot achieve consensus or withstand defection.

**Lesson 2: Separate technical coordination from value-laden decisions.**

Internet governance succeeded at technical layers (protocols, addressing) and failed at value-laden layers (content, surveillance). AI governance should learn from this.

Technical standards for AI evaluation, documentation, and interoperability might be achievable through multistakeholder processes. Value-laden decisions about what AI should be allowed to do will remain contested across jurisdictions.

**Lesson 3: Multistakeholder processes are valuable but captureable.**

Including diverse perspectives produces better outcomes than closed government or industry processes. But participation costs money and time. Without explicit measures to include under-resourced voices, multistakeholder processes become vehicles for powerful actor preferences.

**Lesson 4: Running code matters.**

Standards that work in practice beat elegant theory. AI governance should prioritize implementable mechanisms. [Machine-readable constraint schemas](/research/003-machine-readable-constraint-schema/) are more useful than abstract principles that cannot be operationalized.

**Lesson 5: Enforcement requires leverage.**

Voluntary standards work for good-faith actors. [Regulatory arbitrage](/research/008-regulatory-arbitrage/) and bad actors require enforcement. Internet governance has struggled with enforcement because no entity has global jurisdiction.

AI governance has some potential advantages: compute infrastructure is more concentrated than internet infrastructure, making compute governance possible. Cloud platforms and chip manufacturers are leverage points that did not exist for early internet governance.

**Lesson 6: The content problem is hard.**

The most intractable internet governance problems involve what people do online, not how the network operates. AI governance faces analogous challenges: not just how AI systems work, but what they do, what outputs they produce, what behaviors they enable.

Expect AI content governance to be similarly contested and fragmented.

## Institutional Models

Several internet governance institutions offer models for AI.

**IETF model (technical standards through rough consensus).**

An AI equivalent might develop evaluation protocols, documentation standards, and constraint representation formats. Participation would be open. Consensus would be sought. Working implementations would carry weight.

The existing Partnership on AI, ML Commons, and various standards bodies approximate this model with varying success.

**ICANN model (operational coordination with multistakeholder oversight).**

An AI equivalent might coordinate model registries, capability classifications, or incident reporting systems. It would need legitimacy across jurisdictions, which requires genuine global participation rather than domination by one country or industry segment.

No such institution currently exists for AI.

**IGF model (discussion forum without decision authority).**

Forums for AI governance discussion exist (OECD, UN, various summits). Like the IGF, they facilitate dialogue without producing binding decisions. Useful for norm development, insufficient for enforcement.

## What AI Governance Might Do Differently

AI governance can learn from internet governance failures, not just successes.

**Address content from the start.** Internet governance deferred content questions and never successfully addressed them. AI governance cannot defer questions about what AI systems should do.

**Build enforcement mechanisms.** Voluntary standards are insufficient. [Liability frameworks](/research/020-liability-frameworks/), regulatory requirements, and market mechanisms create enforcement where international consensus is absent.

**Leverage compute concentration.** Unlike the distributed internet, AI compute is concentrated in a few cloud providers and chip manufacturers. This concentration can support governance enforcement that the distributed internet could not.

**Design for reflexive participation.** Internet governance involves humans representing interests. AI governance might involve AI systems that [participate in their own governance](/research/030-manifesto/), maintain [audit logs](/research/067-reflexive-logging/), and [communicate with regulators](/research/014-ai-regulator-protocol/).

## Conclusion

Internet governance history offers both warnings and templates for AI governance.

The warnings: expect fragmentation, capture, enforcement gaps, and persistent disagreement over values. Do not expect a unified global regime to emerge.

The templates: technical coordination through multistakeholder processes, rough consensus, working implementations, and distributed authority. These approaches achieved more than centralized intergovernmental processes.

AI governance should learn from this history rather than repeating its mistakes. The most important lesson may be the simplest: global technology governance is hard, takes time, and produces imperfect outcomes. Anyone promising quick, clean solutions is not paying attention to the historical record.

## Related Research

- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [International AI Treaty Proposals: A Comparative Analysis](/research/038-international-treaties/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Liability Frameworks for AI Harm](/research/020-liability-frameworks/)
- [The Role of Standards Bodies in AI Governance](/research/039-standards-bodies/)
