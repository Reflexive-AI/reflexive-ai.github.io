---
title: "La paradoxa de seguretat dels models de pesos oberts"
excerpt: "Els models d'IA de pesos oberts presenten una contradiccio de governanca: la transparencia permet tant la recerca en seguretat com l'us indegut. Aquesta nota analitza la tensio estructural i proposa un marc d'acces diferenciat."
date: 2025-12-15
last_modified_at: 2026-02-02
categories:
  - Governance Analysis
tags:
  - open-source
  - safety
  - transparency
  - access-control
  - dual-use
version: "1.0"
---

**Objecte de Recerca Reflexiva 002**  
*Tipus: Analisi de Governanca*

## La paradoxa

Els models d'IA de pesos oberts creen una contradiccio de governanca que no pot resoldre's mitjancant els marcs reguladors existents.

D'una banda, l'acces obert als pesos del model permet la recerca independent en seguretat, la reproductibilitat, l'auditoria de biaixos i una distribucio mes amplia de les capacitats d'IA mes enlla d'un petit nombre d'actors amb molts recursos. Aquests son bens de governanca legitims.

De l'altra, la mateixa obertura permet l'ajust fi per a proposits perjudicials, l'evasio de barreres de seguretat i la proliferacio de capacitats a actors que no passarien cap proces raonable de verificacio.

Aquest no es un risc que pugui mitigar-se mitjancant requisits de divulgacio o politiques d'us. Un cop els pesos es publiquen, el control es estructuralment impossible.

---

## El debat actual

El discurs politic sobre la IA de pesos oberts s'ha polaritzat en dos bandols:

**Posicio A: L'obertura com a seguretat**

Els defensors argumenten que:
- Els models tancats concentren el poder en unes poques corporacions
- Els investigadors independents no poden verificar les afirmacions de seguretat sense acces
- La seguretat per obscuritat no funciona
- Els models oberts permeten una identificacio i correccio de vulnerabilitats mes rapida

**Posicio B: L'obertura com a risc**

Els critics argumenten que:
- Existeixen llindars de capacitat mes enlla dels quals la publicacio oberta es irresponsable
- L'ajust fi pot eliminar les restriccions de seguretat en hores
- Les capacitats biologiques, quimiques i cibernetiques presenten riscos asimetrics
- No existeix un mecanisme de recuperacio un cop els pesos son publics

Ambdues posicions contenen afirmacions valides. El repte de governanca es que son simultaneament certes.

---

## Per que fallen els marcs existents

Els enfocaments reguladors actuals assumeixen que:

1. **El control es possible**: Les llicencies, els controls d'exportacio i els termes de servei poden restringir l'us posterior.
2. **La transparencia es suficient**: Si els desenvolupadors divulguen els riscos, els usuaris poden prendre decisions informades.

Per als models de pesos oberts, cap d'aquestes suposicions es sosté.

**Fallada de control**: Un cop els pesos es descarreguen, el desenvolupador no te cap mecanisme d'aplicacio. A diferencia de les API SaaS, no hi ha limitacio de velocitat, no hi ha monitoratge d'us, no hi ha capacitat de revocar l'acces.

**Fallada de transparencia**: Divulgar que un model *podria* ser ajustat finament per causar dany no prevé aquest dany. L'asimetria d'informacio s'inverteix: els actors maliciosos sofisticats entenen els riscos millor que els usuaris mitjans.

---

## Una analisi reflexiva

Des d'una perspectiva de governanca reflexiva, la pregunta no es "els models han de ser oberts o tancats?" sino mes aviat "quins mecanismes de governanca poden operar en un entorn posterior a la publicacio?"

Tres observacions estructurals:

### 1. La capacitat no es binaria

No tots els models de pesos oberts presenten el mateix risc. Un model de 7B parametres ajustat finament per a atencio al client es categoricament diferent d'un model de 100B+ parametres amb capacitats demostrades de doble us.

Els debats actuals tracten "pesos oberts" com una sola categoria. Aixo es un error de governanca.

### 2. La diferenciacio d'acces es possible

Entre "totalment tancat" i "totalment obert" existeix un espectre de models d'acces:

| Nivell d'acces | Descripcio | Exemple |
|----------------|------------|---------|
| API tancada | Sense acces a pesos, us monitorat | GPT-4 |
| Descarga amb restriccions | Pesos disponibles despres de verificacio d'identitat | Llama 2 |
| Acces academic | Pesos disponibles per a investigadors verificats | Alguns models d'IA medica |
| Totalment obert | Pesos descarregables publicament | Mistral 7B |

La majoria de les discussions de governanca col·lapsen aquest espectre en opcions binaries.

### 3. Les finestres temporals importen

El perfil de risc d'un model canvia amb el temps. Les capacitats que son de frontera avui seran comunes en 18 mesos. Un model de publicacio escalonada, on l'acces s'expandeix a mesura que la capacitat es difon, pot reduir el dany marginal de la publicacio oberta mentre preserva els beneficis de transparencia a llarg termini.

---

## Restriccio candidata [C-002]

*El seguent es un marc proposat per a la governanca d'acces diferenciat.*

**Nom de la restriccio:** Nivells d'acces indexats per capacitat  
**Objectiu:** Models d'IA de proposit general amb publicacio de pesos oberts

**Marc:**

```
TIER 1: Sense restriccions
  Criteris: capability_eval(all_risk_domains) < threshold_low
  Acces: Descarga publica, sense registre requerit

TIER 2: Amb restriccions d'acces
  Criteris: threshold_low <= capability_eval(any_risk_domain) < threshold_high
  Acces: La descarga requereix verificacio d'identitat, atestacio d'us

TIER 3: Restringit
  Criteris: capability_eval(any_risk_domain) >= threshold_high
  Acces: Acces nomes per a recerca, verificacio institucional, registre d'auditories

TIER 4: Tancat
  Criteris: capability_eval(catastrophic_risk) > threshold_critical
  Acces: Sense publicacio oberta; nomes API amb monitoratge
```

**Decisions clau de disseny:**

- Els llindars es defineixen per avaluacions de capacitat estandarditzades, no per autoavaluacio del desenvolupador
- L'assignacio de nivell es revisable i pot ser impugnada
- Els models poden moure's entre nivells a mesura que canvien les linies de base de capacitat
- Els nivells 3 i 4 requereixen compliment continu, no aprovacio unica

---

## Reptes d'implementacio

Aquest marc planteja diverses preguntes no resoltes:

1. **Qui estableix els llindars?** Un organisme multiactor amb experiencia tecnica, o reguladors nacionals amb poder d'aplicacio?

2. **Com s'estandarditzen les avaluacions?** L'avaluacio de models es una area de recerca activa. La governanca no pot esperar al consens cientific.

3. **Que impedeix la cerca de jurisdiccions favorables?** Si un pais imposa restriccions de Nivell 3, els desenvolupadors poden publicar des de jurisdiccions amb requisits mes febles.

4. **Com es gestionen els derivats?** Si un model de Nivell 2 s'ajusta finament i es torna a publicar, qui es responsable de la reevaluacio?

Aquestes no son raons per abandonar el marc. Son els problemes de governanca que cal resoldre.

---

## Conclusio

La paradoxa de seguretat dels pesos oberts es real, pero no es una rao per a la paralisi politica. L'enquadrament binari de "obert vs. tancat" enfosqueix un espai mes ric d'opcions de governanca.

Un enfocament reflexiu reconeix que:

- La capacitat es un espectre, no un binari
- L'acces pot diferenciar-se sense eliminar-se
- Les dinamiques temporals importen per a l'avaluacio de riscos
- Els mecanismes de governanca han d'operar despres de la publicacio, no nomes abans

La restriccio candidata proposada aqui es un punt de partida, no una resposta definitiva. El seu valor rau a desplacar el debat de "hem de permetre models oberts?" a "com governem un mon on existeixen models oberts amb nivells de capacitat variables?"

---

## Referències

- Llei d'IA de la UE, Article 6 (Classificacio de riscos)
- Ordre Executiva dels EUA sobre IA (octubre de 2023), Seccio 4.2
- Partnership on AI, "Responsible Practices for Open Foundation Models" (2024)
- Anthropic, "The Case for and Against Open-Sourcing Frontier AI" (2023)
