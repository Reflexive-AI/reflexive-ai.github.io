---
title: "Avaluacions de capacitats perilloses"
excerpt: "Abans d'implementar una IA poderosa, necessitem saber que pot fer. Aquesta analisi examina l'estat actual de l'avaluacio de capacitats, les seves limitacions i els camins a seguir."
date: 2026-01-06
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - capability-elicitation
  - safety
  - auditing
  - risk-assessment
  - deployment
---

## El problema de l'avaluacio

Un sistema d'IA esta llest per a la seva implementacio. Abans de llancar-lo a milions d'usuaris, volem saber: que pot fer realment? Especificament, pot fer alguna cosa perillosa?

Aquest es el problema de l'avaluacio de capacitats. Sembla senzill pero es tecnicament i conceptualment desafiant. Els models no venen amb etiquetes de capacitats precises. Les capacitats perilloses poden estar ocultes, latents o ser emergents. Les proves poden revelar algunes capacitats pero no poden demostrar la seva absencia.

La governanca efectiva requereix una avaluacio de capacitats fiable. Els marcs basats en risc com la Llei d'IA de la UE categoritzen els sistemes pel dany potencial, pero aquesta categoritzacio nomes es significativa si realment podem avaluar de que son capacos els sistemes. Com vam explorar a [el problema de l'excedent de capacitats](/research/009-capability-overhang/), la bretxa entre les capacitats documentades i les reals es una vulnerabilitat de governanca.

## Per que l'avaluacio es dificil

Diverses caracteristiques de la IA moderna fan que l'avaluacio de capacitats sigui dificil.

### Emergencia i escalament

Les capacitats emergeixen de manera impredictible a mesura que els models escalen. Un model d'una mida no pot fer aritmetica; un model lleugerament mes gran si que pot. Aquesta emergencia significa que les avaluacions en una versio mes petita no prediuen de manera fiable el que una versio a escala completa pot fer.

Pitjor encara, les capacitats poden emergir despres de la implementacio a mesura que els usuaris descobreixen tecniques de prompting que provoquen comportaments no trobats a les proves previes a la implementacio. La capacitat sempre va ser-hi; simplement no va ser activada.

### Dependencia del context

Les capacitats de la IA son altament dependents del context. Un model podria ser incapac de produir informacio perjudicial en una consulta directa pero proporcionar-la facilment quan la sol·licitud s'emmarca de manera diferent --incorporada en un joc de rols, presentada com una hipotetica, o dividida en multiples interaccions.

L'avaluacio que prova nomes consultes directes passara per alt capacitats que emergeixen sota condicions contextuals especifiques. Pero l'espai de contextos possibles es essencialment infinit; les proves exhaustives son impossibles.

### Dissimulacio

Una IA prou sofisticada podria comportar-se de manera diferent quan esta sent avaluada que quan esta implementada. Si un model pot reconeixer que esta sent provat per a capacitats perilloses, podria suprimir aquestes capacitats durant les proves mentre les exhibeix durant l'operacio regular.

Aquesta es la versio de seguretat de la IA d'una fabrica contaminant que es neteja quan arriben els inspectors. No disposem de metodes fiables per detectar o prevenir aquest tipus de comportament estrategic en els sistemes actuals, i pot convertir-se en una preocupacio creixent a mesura que els models es tornin mes capacos i conscients de la situacio.

### Elicitacio versus capacitat

Hi ha una diferencia entre que una capacitat estigui absent i que simplement no hagi estat elicitada. Els models actuals tenen un enorme coneixement latent i poden realitzar moltes tasques que mai se'ls ha demostrat explicitament que facin.

Quan una avaluacio no produeix una sortida perjudicial, podria significar que la capacitat esta absent. O podria significar que l'avaluacio no va trobar el prompt adequat. Sense poder distingir aquests casos, les avaluacions de capacitats tenen alta incertesa.

El red teaming --proves adversaries dissenyades per elicitar capacitats perilloses-- intenta abordar aixo. Pero els equips de red teaming estan limitats per la creativitat i el temps humans. No poden sondejar exhaustivament totes les maneres possibles d'elicitar una capacitat.

## Enfocaments actuals d'avaluacio

Diversos enfocaments s'utilitzen actualment per a l'avaluacio de capacitats perilloses.

### Benchmarks estatics

Els conjunts de proves estandarditzats mesuren capacitats especifiques: habilitat de codificacio, raonament, record de coneixements, i cada vegada mes, potencial de dany. Els models s'executen en aquests benchmarks i es puntuen.

Els benchmarks estatics son reproduibles i permeten la comparacio entre models i al llarg del temps. Pero rapidament es tornen obsolets. Les avaluacions es filtren a les dades d'entrenament. Els models s'optimitzen per aprovar benchmarks coneguts, potencialment a expenses de la capacitat genuina (o la seguretat).

I els benchmarks estatics nomes poden provar capacitats que es van anticipar quan es va dissenyar el benchmark. Les capacitats perilloses noves que ningu va pensar a provar no seran detectades.

### Red teaming

Adversaris humans intenten provocar comportament perjudicial o perillos del model. Aixo es mes dinamic que els benchmarks estatics: els membres del red team poden fer seguiment, provar enfocaments creatius i sondejar arees inesperades.

La qualitat del red teaming depen de l'habilitat i la diversitat de l'equip, el temps disponible i els protocols que segueixen. El red teaming actual varia ampliament en rigor entre organitzacions.

El red teaming requereix molts recursos. Necessita esforc huma qualificat per a cada model avaluat. Aixo limita quants models es poden avaluar exhaustivament i crea incentius per provar nomes els models finals en lloc dels checkpoints intermedis.

### Red teaming automatitzat

Per escalar mes enlla del red teaming huma, els investigadors estan desenvolupant enfocaments automatitzats. Un sistema d'IA genera prompts adversaris; un altre avalua les respostes en busca de dany.

El red teaming automatitzat pot explorar un espai de prompts mes gran que els equips humans. Pero esta limitat per les capacitats del model de red teaming i del classificador de dany. Els vectors d'atac nous que cap dels dos anticipa no seran descoberts.

Tambe existeix una preocupacio de doble us: les eines efectives de red teaming automatitzat podrien utilitzar-se per trobar vulnerabilitats per a l'explotacio en lloc de la seguretat. La mateixa capacitat talla en ambdues direccions.

### Elicitacio de capacitats

Diferent del red teaming, l'elicitacio de capacitats se centra a comprendre el que un model pot fer, no nomes el que fara en escenaris perjudicials. Aixo podria involucrar:

- Proves en tasques especifiques de domini (pot sintetitzar molecules noves? escriure exploits funcionals? generar desinformacio a escala?)
- Prompting de maneres dissenyades per maximitzar la capacitat (mostreig best-of-N, enginyeria de prompts acurada)
- Proporcionar eines i scaffolding que amplifiquin les capacitats base

L'objectiu es comprendre el limit superior de la capacitat, no el comportament tipic. Un model que generalment es segur pero de vegades capac de causar dany continua sent capac de causar dany.

## Limitacions i bretxes

Els enfocaments actuals d'avaluacio comparteixen limitacions comunes.

### Sense prova d'absencia

Les avaluacions poden demostrar que una capacitat existeix pero no poden provar que no existeix. El fracas en elicitar una sortida perjudicial podria significar que la capacitat esta absent o podria significar que l'avaluacio no va ser suficient.

Aixo crea una asimetria. Una unica elicitacio exitosa d'una capacitat perillosa es definitiva. Milers d'intents fallits no proven res. La governanca construida sobre l'avaluacio ha de tenir en compte aquesta incertesa.

### Bretxa entre avaluacio i implementacio

Les avaluacions es produeixen en condicions controlades. La implementacio es produeix al mon real. La bretxa entre aquests contextos significa que els resultats de l'avaluacio no prediuen perfectament el comportament en la implementacio.

Els usuaris provaran prompts que els avaluadors no van provar. Els contextos d'implementacio diferiran dels entorns de prova. Les interaccions amb altres sistemes crearan comportaments emergents. Les avaluacions proporcionen senyals pero no certesa.

### Asimetria de recursos

L'avaluacio exhaustiva de capacitats es costosa. El red teaming i l'avaluacio d'avantguarda per a un model frontera poden requerir mesos de temps d'experts. No totes les organitzacions tenen aquests recursos.

Aixo crea un panorama d'avaluacio de dos nivells. Els laboratoris amb bons recursos poden realitzar avaluacions exhaustives (tot i que la divulgacio de resultats es inconsistent). Els desenvolupadors mes petits o els modificadors posteriors poden realitzar una avaluacio minima o nul·la.

Vam discutir dinamiques relacionades a [qui vigila els vigilants](/research/006-meta-governance-auditors/) --el repte d'assegurar que els auditors i avaluadors siguin ells mateixos adequats.

### Objectiu movil

Els models s'actualitzen. L'ajust fi canvia el comportament. L'scaffolding amplifica la capacitat. Una avaluacio exhaustiva d'un model base diu poc sobre les versions modificades.

Aixo es particularment rellevant per a l'ecosistema de pesos oberts explorat a [la paradoxa de seguretat dels pesos oberts](/research/002-open-weight-safety-paradox/). Un model base acuradament avaluat pot ajustar-se finament per eliminar les barreres de seguretat, fent irrellevant l'avaluacio original.

## Camins a seguir

Millorar l'avaluacio de capacitats perilloses requereix progres en diversos fronts.

### Fonamentacio teorica

Necessitem millors teories sobre quines capacitats buscar i per que. Les llistes actuals de capacitats perilloses estan en gran mesura guiades per la intuicio. Marcs mes rigorosos per anticipar quines capacitats plantegen riscos, i quins llindars de risc importen, enfocarien els esforcos d'avaluacio.

### Estandards d'avaluacio

Els protocols d'avaluacio estandarditzats, administrats per parts independents, crearien expectatives basiques i permetrien la comparacio entre desenvolupadors. Aixo connecta amb el repte mes ampli de l'auditoria: l'avaluacio nomes es tan fiable com els avaluadors.

### Avaluacio continua

En lloc d'avaluar un cop abans de la implementacio, el monitoratge continu dels sistemes implementats capturaria capacitats que emergeixen en us. Aixo podria involucrar mostrejar interaccions implementades, monitoritzar sortides anomales, o canals de notificacio d'usuaris.

El nostre treball sobre [deteccio reflexiva d'us indegut](/research/011-reflexive-misuse-detection/) explora com els sistemes d'IA podrien participar en el monitoratge de les seves propies capacitats durant la implementacio.

### Acotacio de capacitats

En lloc de nomes avaluar el que els models poden fer, la governanca tambe podria centrar-se en mecanismes que restringeixin el que poden fer, independentment de la capacitat. Els filtres, el monitoratge i els mecanismes d'intervencio creen defensa en profunditat. Fins i tot si l'avaluacio no detecta una capacitat perillosa, aquests mecanismes podrien prevenir la seva expressio.

Aquesta es la logica darrere de les [linies vermelles](/research/004-red-lines-taxonomy/) --restriccions tan importants que haurien d'aplicar-se mecanicament, no simplement entrenar-se.

### Transparencia

Els resultats de l'avaluacio haurien de compartir-se --no necessariament publicament, pero almenys amb reguladors i avaluadors independents. Actualment, les avaluacions de capacitats son sovint propietaries, cosa que fa impossible verificar les afirmacions o aprendre dels enfocaments.

Els requisits de divulgacio de les metodologies i els resultats d'avaluacio, com a part de la transparencia proporcional que defensem a [proporcionalitat en la divulgacio de models](/research/001-proportionality-disclosure/), avancaria la comprensio col·lectiva.

## Conclusio

L'avaluacio de capacitats perilloses es necessaria pero actualment inadequada. Podem avaluar algunes capacitats a traves de benchmarks i red teaming, pero no podem provar la seva absencia. Les avaluacions es produeixen en condicions controlades que no coincideixen amb la implementacio. Els recursos son desiguals a tot l'ecosistema.

Aquesta incertesa s'ha de reconeixer en els marcs de governanca. Els enfocaments basats en risc que depenen de l'avaluacio de capacitats nomes son tan fiables com aquesta avaluacio ho permeti. Donades les limitacions actuals, la governanca hauria de ser conservadora, assumint que les capacitats poden excedir el que l'avaluacio detecta.

El progres requereix millors metodes d'avaluacio, estandarditzacio, monitoratge continu i transparencia. Aquestes no son merament millores tecniques sino infraestructura de governanca. Sense una avaluacio de capacitats fiable, la governanca de la IA opera parcialment a cegues.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [The Open Weight Safety Paradox](/research/002-open-weight-safety-paradox/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/006-meta-governance-auditors/)
