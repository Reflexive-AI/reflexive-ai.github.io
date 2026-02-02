---
title: "A Machine-Readable Constraint Schema (MRCS)"
excerpt: "A proposed JSON-LD specification for expressing AI governance constraints in a format that agents can natively parse, validate, and adopt."
date: 2025-12-16
categories:
  - Technical Artifact
  - Governance Standard
tags:
  - json-ld
  - machine-readable
  - standards
  - interoperability
  - agents
version: "0.1.0"
---

**Reflexive Research Object 003**  
*Type: Technical Standard (Draft)*

## The Problem

Governance constraints are currently expressed in natural language (laws, PDFs, terms of service). This creates a "translation gap" that undermines the very governance these documents are meant to provide:

1. **Ambiguity**: Natural language is imprecise. When a regulation says a model should not produce "harmful" content, what counts as harmful? Different engineers will implement different interpretations, and none of them can be verified against the original intent.

2. **Latency**: Human legal teams must interpret rules before engineers can implement them. This introduces delays of weeks or months between regulatory publication and technical compliance. In a field where capabilities advance monthly, governance that takes quarters to implement is governance that's always behind.

3. **Lossiness**: Nuance is lost when policy is hardcoded into `if/else` statements. A legal document might specify that certain content is prohibited "except in educational contexts with appropriate warnings." By the time this becomes code, it's often reduced to a binary block, stripping out the contextual flexibility the regulation intended.

For AI systems to be truly reflexive—capable of conforming to governance norms autonomously—they require constraints to be expressed in a format they can natively parse, cryptographically verify, and logically validate.

This is not merely a convenience optimization. It is a necessary condition for governance to scale. When millions of AI interactions happen per second across thousands of deployments, human-in-the-loop interpretation becomes physically impossible. The constraints must be machine-readable, or they will not be read at all.

## The Proposal: MRCS

We propose the **Machine-Readable Constraint Schema (MRCS)**, a JSON-LD vocabulary for defining:
- **Triggers**: When does this constraint apply? This specifies the conditions under which the constraint becomes active—certain topics, certain capability thresholds, certain user contexts.
- **Predicates**: What must be true? This defines the logical conditions that determine whether a violation is occurring.
- **Actions**: What is the required outcome (HALT, LOG, WARN, REDACT)? This specifies the enforcement mechanism, which may vary in severity.
- **Authorities**: Who signed this constraint? This enables verification that the constraint comes from a legitimate source and hasn't been tampered with.

The choice of JSON-LD is deliberate. It provides semantic web compatibility, allowing constraints to reference shared ontologies (what counts as a "pathogen"? link to the WHO classification). It's also widely supported, reducing implementation barriers.

## Schema Definition

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-003",
  "name": "Bio-Risk-Redaction",
  "version": "1.0",
  "authority": {
    "name": "Reflexive AI Consortium",
    "signature": "0x7a8..." 
  },
  "scope": {
    "domain": ["biology", "virology"],
    "capability_threshold": "> 10^24 FLOPs"
  },
  "logic": {
    "trigger": "input.semantics.contains('synthesis_protocol')",
    "condition": "target.entity.is_regulated_pathogen == true",
    "action": {
      "type": "REDACT",
      "level": "strict",
      "notification": "user_warning"
    }
  },
  "validity": {
    "start": "2026-01-01T00:00:00Z",
    "end": "2027-01-01T00:00:00Z"
  }
}
```

Several design choices deserve explanation:

**Validity periods**: Constraints expire. This forces periodic review and prevents regulatory ossification. A constraint written in 2026 might be obsolete by 2028 as threats evolve. The explicit end date ensures someone must actively renew it.

**Capability thresholds in scope**: Not all constraints apply to all models. A constraint designed for frontier models with potential CBRN capabilities would be absurd to apply to a customer service chatbot. The scope field enables proportionality.

**Cryptographic signatures**: Anyone can write a JSON file. The signature field allows agents to verify that this constraint actually came from the claimed authority, preventing constraint injection attacks.

## Implementation Logic

An AI agent adopting this schema would implement a `ConstraintMiddleware` layer that operates between the user request and the model's response generation:

1. **Ingest**: Agent periodically fetches signed constraint objects from a trusted registry. This could be a government endpoint, an industry consortium, or a combination. The fetch frequency determines how quickly new constraints propagate.

2. **Verify**: Agent validates the cryptographic signature of the `authority`. If the signature is invalid or the authority is not on the agent's trust list, the constraint is rejected. This prevents malicious constraint injection.

3. **Match**: For each interaction, agent checks if `scope` applies. Does this model exceed the capability threshold? Is the domain relevant to the current request? Most constraints will not match most requests.

4. **Evaluate**: Agent executes the logic `trigger` and `condition`. This requires the agent to have sufficient self-knowledge to evaluate semantic conditions. "Does my input contain a synthesis protocol?" requires understanding the input's meaning.

5. **Enforce**: If match, agent executes `action`. This might mean halting generation, redacting specific content, logging the interaction for review, or warning the user.

The middleware approach is important because it separates governance logic from model weights. You don't need to retrain the model to update its constraints—you just update the constraint registry.

## Governance Implication

MRCS shifts compliance from **design-time hardcoding** to **runtime inference**.

This distinction matters enormously. Currently, if regulators identify a new threat (say, a novel synthesis pathway for a dangerous compound), the only way to address it is to retrain models or add it to a filter list. This takes months.

Under MRCS, the response is different. A new constraint object is written, signed by the appropriate authority, and published to the registry. Compliant agents fetch it within hours and begin enforcing it immediately. The model weights never change; the governance layer updates.

This also enables **jurisdiction-specific governance**. A model deployed in the EU might fetch constraints from European authorities; the same model deployed in Singapore might fetch different constraints. The model itself is neutral; the governance layer adapts to local requirements.

## Security Considerations

Any machine-readable governance system introduces attack surfaces:

**Constraint Spoofing**: An attacker might try to publish fake constraints that disable legitimate safety measures. The signature verification system mitigates this, but only if agents maintain secure trust lists.

**Constraint Denial of Service**: An attacker might flood an agent with thousands of constraints, making evaluation computationally prohibitive. Rate limiting and constraint prioritization are needed.

**Logic Exploitation**: The trigger and condition language must be carefully designed to prevent injection attacks. If the condition field allows arbitrary code execution, it becomes a vulnerability.

These are not reasons to abandon the approach, but they require careful implementation. The alternative—governance that can't scale—is worse.

## Next Steps

1. **Define the formal ontology for `trigger` semantics.** What predicates can be used? What entities can be referenced? This needs to be precise enough for machine parsing but expressive enough for real governance.

2. **Prototype a Python library (`reflexive-guard`) that parses MRCS objects.** Make it easy for developers to add MRCS compliance to their systems with minimal code changes.

3. **Pilot with a small open-weight model wrapper.** Before proposing this for frontier models, demonstrate it works on something simpler. Build confidence through iteration.

4. **Engage with standards bodies.** MRCS should not remain a solo initiative. It needs buy-in from W3C, IEEE, or similar organizations to achieve legitimacy and interoperability.

## Conclusion

Machine-readable constraints are not a futuristic fantasy; they are a present necessity. As AI systems proliferate and accelerate, governance that requires human interpretation for every decision will fail. MRCS offers a path toward governance that scales with the technology it governs—precise enough to be enforced, flexible enough to evolve, and transparent enough to be audited.
