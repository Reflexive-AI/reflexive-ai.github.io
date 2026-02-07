---
title: "Un esquema de restriccions llegible per maquines (MRCS)"
excerpt: "Una especificacio JSON-LD proposada per expressar restriccions de governanca d'IA en un format que els agents poden analitzar, validar i adoptar de forma nativa."
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

**Objecte de Recerca Reflexiva 003**  
*Tipus: Estandard Tecnic (Esborrany)*

## El problema

Les restriccions de governanca s'expressen actualment en llenguatge natural (lleis, PDFs, termes de servei). Aixo crea una "bretxa de traduccio" que soscava la propia governanca que aquests documents pretenen proporcionar:

1. **Ambiguitat**: El llenguatge natural es imprecis. Quan una regulacio diu que un model no ha de produir contingut "perjudicial", que compta com a perjudicial? Diferents enginyers implementaran diferents interpretacions, i cap d'elles pot verificar-se contra la intencio original.

2. **Latencia**: Els equips juridics humans han d'interpretar les regles abans que els enginyers puguin implementar-les. Aixo introdueix retards de setmanes o mesos entre la publicacio regulatoria i el compliment tecnic. En un camp on les capacitats avancen mensualment, una governanca que triga trimestres a implementar-se es una governanca que sempre va per darrere.

3. **Perdua d'informacio**: Els matisos es perden quan les politiques es codifiquen en sentencies `if/else`. Un document legal podria especificar que cert contingut esta prohibit "excepte en contextos educatius amb advertiments apropiats". Per quan aixo es converteix en codi, sovint es redueix a un bloqueig binari, eliminant la flexibilitat contextual que la regulacio pretenia.

Perque els sistemes d'IA siguin veritablement reflexius (capacos de conformar-se de manera autonoma a les normes de governanca) requereixen que les restriccions s'expressin en un format que puguin analitzar de forma nativa, verificar criptograficament i validar logicament.

Aixo no es simplement una optimitzacio de conveniencia. Es una condicio necessaria perque la governanca escali. Quan milions d'interaccions d'IA passen per segon en milers de desplegaments, la interpretacio humana en el bucle es torna fisicament impossible. Les restriccions han de ser llegibles per maquines, o no seran llegides en absolut.

## La proposta: MRCS

Proposem l'**Esquema de Restriccions Llegible per Maquines (MRCS)**, un vocabulari JSON-LD per definir:
- **Disparadors**: Quan s'aplica aquesta restriccio? Aixo especifica les condicions sota les quals la restriccio s'activa: certs temes, certs llindars de capacitat, certs contextos d'usuari.
- **Predicats**: Que ha de ser cert? Aixo defineix les condicions logiques que determinen si s'esta produint una violacio.
- **Accions**: Quin es el resultat requerit (HALT, LOG, WARN, REDACT)? Aixo especifica el mecanisme d'aplicacio, que pot variar en severitat.
- **Autoritats**: Qui va signar aquesta restriccio? Aixo permet verificar que la restriccio prové d'una font legitima i no ha estat alterada.

L'eleccio de JSON-LD es deliberada. Proporciona compatibilitat amb la web semantica, permetent que les restriccions facin referencia a ontologies compartides (que compta com un "patogen"? enllac a la classificacio de l'OMS). Tambe es ampliament compatible, reduint les barreres d'implementacio.

## Definicio de l'esquema

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

Diverses decisions de disseny mereixen explicacio:

**Periodes de validesa**: Les restriccions caduquen. Aixo forca la revisio periodica i prevé l'ossificacio regulatoria. Una restriccio escrita el 2026 podria ser obsoleta el 2028 a mesura que les amenaces evolucionen. La data de finalitzacio explicita assegura que algu l'hagi de renovar activament.

**Llindars de capacitat en l'abast**: No totes les restriccions s'apliquen a tots els models. Una restriccio dissenyada per a models de frontera amb potencials capacitats QBRN seria absurda d'aplicar a un xatbot d'atencio al client. El camp d'abast possibilita la proporcionalitat.

**Signatures criptografiques**: Qualsevol pot escriure un fitxer JSON. El camp de signatura permet als agents verificar que aquesta restriccio realment va provenir de l'autoritat declarada, prevenint atacs d'injeccio de restriccions.

## Logica d'implementacio

Un agent d'IA que adopti aquest esquema implementaria una capa `ConstraintMiddleware` que opera entre la sol·licitud de l'usuari i la generacio de resposta del model:

1. **Ingesta**: L'agent obte periodicament objectes de restriccio signats d'un registre de confianca. Aixo podria ser un endpoint governamental, un consorci industrial o una combinacio. La frequencia d'obtencio determina la rapidesa amb que es propaguen les noves restriccions.

2. **Verificacio**: L'agent valida la signatura criptografica de l'`authority`. Si la signatura es invalida o l'autoritat no esta a la llista de confianca de l'agent, la restriccio es rebutja. Aixo prevé la injeccio maliciosa de restriccions.

3. **Coincidencia**: Per a cada interaccio, l'agent verifica si l'`scope` s'aplica. Aquest model supera el llindar de capacitat? Es el domini rellevant per a la sol·licitud actual? La majoria de les restriccions no coincidiran amb la majoria de les sol·licituds.

4. **Avaluacio**: L'agent executa la logica de `trigger` i `condition`. Aixo requereix que l'agent tingui prou autoconeixement per avaluar condicions semantiques. "La meva entrada conte un protocol de sintesi?" requereix comprendre el significat de l'entrada.

5. **Aplicacio**: Si hi ha coincidencia, l'agent executa l'`action`. Aixo podria significar aturar la generacio, redactar contingut especific, registrar la interaccio per a revisio o advertir l'usuari.

L'enfocament de middleware es important perque separa la logica de governanca dels pesos del model. No cal reentrenar el model per actualitzar les seves restriccions; simplement s'actualitza el registre de restriccions.

## Implicacio de governanca

MRCS trasllada el compliment de la **codificacio rigida en temps de disseny** a la **inferencia en temps d'execucio**.

Aquesta distincio es enormement important. Actualment, si els reguladors identifiquen una nova amenaca (posem per cas, una nova via de sintesi per a un compost perillos), l'unica forma d'abordar-la es reentrenar els models o afegir-la a una llista de filtres. Aixo pren mesos.

Sota MRCS, la resposta es diferent. S'escriu un nou objecte de restriccio, el signa l'autoritat apropiada i es publica al registre. Els agents que compleixen l'obtenen en hores i comencen a aplicar-lo immediatament. Els pesos del model mai canvien; la capa de governanca s'actualitza.

Aixo tambe habilita la **governanca especifica per jurisdiccio**. Un model desplegat a la UE podria obtenir restriccions d'autoritats europees; el mateix model desplegat a Singapur podria obtenir restriccions diferents. El model en si es neutre; la capa de governanca s'adapta als requisits locals.

## Consideracions de seguretat

Qualsevol sistema de governanca llegible per maquines introdueix superficies d'atac:

**Suplantacio de restriccions**: Un atacant podria intentar publicar restriccions falses que desactivin mesures de seguretat legitimes. El sistema de verificacio de signatures mitiga aixo, pero nomes si els agents mantenen llistes de confianca segures.

**Denegacio de servei de restriccions**: Un atacant podria inundar un agent amb milers de restriccions, fent que l'avaluacio sigui computacionalment prohibitiva. Es necessiten limitacio de velocitat i priorització de restriccions.

**Explotacio de logica**: El llenguatge de disparadors i condicions s'ha de dissenyar acuradament per prevenir atacs d'injeccio. Si el camp de condicio permet l'execucio de codi arbitrari, es converteix en una vulnerabilitat.

Aquestes no son raons per abandonar l'enfocament, pero requereixen una implementacio acurada. L'alternativa (una governanca que no pot escalar) es pitjor.

## Propers passos

1. **Definir l'ontologia formal per a la semantica de `trigger`.** Quins predicats poden usar-se? A quines entitats pot fer-se referencia? Aixo necessita ser prou precis per a l'analisi per maquines pero prou expressiu per a la governanca real.

2. **Prototipar una biblioteca Python (`reflexive-guard`) que analitzi objectes MRCS.** Facilitar als desenvolupadors afegir compliment MRCS als seus sistemes amb canvis minims de codi.

3. **Pilotar amb un embolcall de model de pesos oberts petit.** Abans de proposar aixo per a models de frontera, demostrar que funciona en quelcom mes simple. Construir confianca mitjancant iteracio.

4. **Involucrar els organismes d'estandarditzacio.** MRCS no hauria de romandre com una iniciativa aillada. Necessita el suport de W3C, IEEE o organitzacions similars per assolir legitimitat i interoperabilitat.

## Conclusio

Les restriccions llegibles per maquines no son una fantasia futurista; son una necessitat present. A mesura que els sistemes d'IA proliferen i s'acceleren, la governanca que requereix interpretacio humana per a cada decisio fallara. MRCS ofereix un cami cap a una governanca que escala amb la tecnologia que governa: prou precisa per ser aplicada, prou flexible per evolucionar i prou transparent per ser auditada.
