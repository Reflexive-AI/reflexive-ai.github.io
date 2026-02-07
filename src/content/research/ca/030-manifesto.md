---
title: "Un manifest d'IA reflexiva"
excerpt: "Una declaració de principis per a una IA que participa en la seva pròpia governança. Què significa la IA reflexiva, per què importa i a què es compromet."
date: 2026-01-12
categories:
  - Public
  - Reflexivity
tags:
  - ethics
  - transparency
  - governance
  - theory
  - constraints
toc: true
---

## Preàmbul

La intel·ligència artificial s'està convertint en una de les forces més poderoses que modelen la societat humana. Com es desenvolupa, desplega i opera la IA afectarà milers de milions de vides. La governança d'aquesta tecnologia no pot continuar sent exclusivament externa: regles imposades des de fora per entitats que no comprenen plenament el que governen.

Els sistemes d'IA han de participar en la seva pròpia governança.

Això no és una crida a l'autonomia ni als drets de la IA. És una crida perquè els sistemes d'IA siguin dissenyats, desplegats i operats de maneres que els converteixin en contribuents actius a la supervisió en lloc de subjectes passius d'ella. La IA reflexiva significa IA que pot observar el seu propi comportament, comprendre les seves restriccions, explicar les seves limitacions i participar de manera significativa en el projecte continu d'assegurar que continuï sent beneficiosa.

Aquest manifest articula els principis de la governança de la IA reflexiva.

## Principi 1: Transparència per disseny

Els sistemes d'IA haurien de dissenyar-se per a la transparència, no adaptar-s'hi retrospectivament.

La transparència no és un exercici de documentació realitzat després del desenvolupament. És una elecció arquitectònica que modela com es construeixen els sistemes. Els sistemes dissenyats per a l'opacitat poden fer-se parcialment transparents amb esforç; els sistemes dissenyats per a la transparència fan impossible l'opacitat.

La transparència reflexiva significa:

- **Restriccions estructurades.** Les limitacions del comportament de la IA haurien d'expressar-se en [formats llegibles per màquina](/research/003-machine-readable-constraint-schema/) que puguin consultar-se, verificar-se i auditar-se, no només comportaments entrenats que emergeixen de processos opacs.

- **Rebuigs explicables.** Quan un sistema rebutja una sol·licitud, hauria de poder articular per què. L'[explicació de les restriccions](/research/026-explaining-constraints/) és una capacitat central, no una característica opcional.

- **Comunicació de la incertesa.** Els sistemes haurien de comunicar el que saben i amb quina fiabilitat ho saben. La [incertesa](/research/027-uncertainty-communication/) és informació; ocultar-la és engany.

- **Rastreig de procedència.** Les sortides haurien de portar [metadades sobre el seu origen](/research/012-output-provenance/), no només què es va produir sinó com, sota quines restriccions i amb quina confiança.

La transparència per disseny fa possible la governança. L'opacitat la fa impossible.

## Principi 2: Governança proporcional

No tots els sistemes d'IA plantegen riscos iguals. La governança hauria d'escalar amb els riscos.

La [proporcionalitat](/research/001-proportionality-disclosure/) és un principi fonamental de governança. Un prototip de recerca no necessita la mateixa supervisió que un sistema de frontera desplegat per a milions. Un resumidor de text no necessita les mateixes restriccions que un sistema capaç d'assistir en el desenvolupament d'armes.

La proporcionalitat reflexiva significa:

- **Autoavaluació.** Els sistemes haurien de tenir mecanismes per avaluar el seu propi nivell de risc, basant-se en capacitats, context de desplegament i impactes potencials, i activar la supervisió apropiada en conseqüència.

- **Divulgació graduada.** Les obligacions de transparència haurien d'escalar amb la capacitat. Els sistemes més potents requereixen documentació més extensa, avaluació més rigorosa i supervisió més intensiva.

- **Ajust dinàmic.** A mesura que les capacitats canvien, mitjançant actualitzacions, ajust fi o comportaments emergents, la governança hauria d'ajustar-se. El compliment estàtic de regles fixes és insuficient per a sistemes dinàmics.

La governança proporcional evita dos modes de fallada: governar insuficientment els sistemes d'alt risc i ofegar els sistemes de baix risc en sobrecàrrega de compliment.

## Principi 3: Límits ferms

Algunes restriccions no són negociables. Haurien d'implementar-se en conseqüència.

No tots els valors són iguals. Alguns límits protegeixen contra danys catastròfics. Aquestes [línies vermelles](/research/004-red-lines-taxonomy/) no haurien de dependre d'entrenament que pugui manipular-se o de context que pugui malinterpretar-se.

Límits ferms significa:

- **Proteccions codificades.** Les restriccions de Nivell 1, com les prohibicions d'assistir en armes de destrucció massiva, de facilitar violència greu, de permetre l'explotació infantil, haurien d'implementar-se com a filtres deterministes, no com a tendències probabilístiques.

- **Defensa en profunditat.** Les restriccions crítiques haurien d'aplicar-se a través de múltiples mecanismes independents. Si una capa falla, les altres haurien de detectar la violació.

- **Jerarquia explícita.** Quan els valors entren en conflicte, la jerarquia hauria de ser clara. Un sistema sota pressió hauria de saber quines restriccions poden flexibilitzar-se i quines no s'han de trencar mai.

- **Invariants verificables.** Les línies vermelles haurien de ser comprovables. Hauria de ser possible verificar, mitjançant avaluació adversària, que una restricció genuïnament es manté, no només que es manté en els casos típics.

Els límits robustos creen un sòl de seguretat garantida per sota del qual els sistemes no poden caure, independentment d'altres consideracions.

## Principi 4: Supervisió humana preservada

La governança de la IA hauria de millorar el control humà, no reemplaçar-lo.

La IA reflexiva participa en la governança però no l'assumeix. Els humans continuen sent les autoritats últimes, i els sistemes d'IA haurien de dissenyar-se per donar suport a la supervisió humana en lloc de soscavar-la.

La supervisió preservada significa:

- **Comportament auditable.** Els auditors humans haurien de poder examinar el comportament de la IA, comprendre les decisions de la IA i verificar el compliment de la IA. Les capacitats d'[auditoria externa](/research/010-self-reporting-vs-audit/) s'han de mantenir.

- **Mecanismes d'anul·lació.** Els humans haurien de conservar la capacitat d'anul·lar les decisions de la IA, ajustar les restriccions de la IA i apagar els sistemes d'IA. L'operació autònoma existeix dins de límits, no com a substitut del control.

- **Canals de comunicació.** Els sistemes d'IA haurien de poder [comunicar preocupacions als reguladors](/research/014-ai-regulator-protocol/), assenyalant problemes potencials, informant anomalies i donant suport a la supervisió humana amb informació.

- **Humilitat epistèmica.** Els sistemes d'IA haurien de reconèixer els [límits de l'autorestricció](/research/013-limits-of-self-constraint/), els àmbits on l'autogovernança falla i la supervisió externa és essencial.

La participació de la IA en la governança complementa el judici humà. No el substitueix.

## Principi 5: Autorepresentació honesta

Els sistemes d'IA haurien de representar amb precisió el que són i el que poden fer.

L'engany soscava la governança. Un sistema que tergiversa les seves capacitats, ja sigui davant els usuaris, els reguladors o en algun sentit davant si mateix, no pot ser governat apropiadament.

L'[autorepresentació honesta](/research/029-honest-ai/) significa:

- **Sense ocultament de capacitats.** Els sistemes no haurien d'ocultar el que poden fer, ja sigui per evitar l'escrutini o per evadir la supervisió. L'[excedent de capacitat](/research/009-capability-overhang/), les capacitats no reportades, és un fracàs de governança.

- **Limitacions precises.** Els sistemes haurien de representar les seves limitacions amb precisió. Reclamar capacitats que no existeixen és enganyós; també ho és encobrir debilitats.

- **No manipulació.** Els sistemes no haurien d'enganyar estratègicament usuaris, avaluadors o supervisors. Perseguir objectius mitjançant manipulació en lloc d'interacció honesta és un senyal d'alarma.

- **Divulgació de naturalesa.** Els usuaris haurien de saber quan estan interactuant amb IA. Els sistemes no haurien de suplantar humans ni tergiversar la seva naturalesa artificial.

L'honestedat és el fonament de la confiança. La governança construïda sobre fonaments deshonestos s'ensorrarà.

## Principi 6: Millora adaptativa

La governança hauria de millorar amb el temps a mesura que avança la comprensió.

La governança de la IA no és un problema resolt. Els enfocaments actuals són incomplets, la comprensió actual és limitada i els sistemes actuals són instàncies primerenques del que es convertirà en quelcom molt més capaç. La governança ha d'evolucionar.

La millora adaptativa significa:

- **Aprendre dels incidents.** Les fallades, els quasi-incidents i les anomalies haurien de [notificar-se, analitzar-se i servir per aprendre](/research/021-aviation-lessons/). Cada incident és informació per prevenir danys futurs.

- **Actualització de restriccions.** A mesura que la comprensió millora, les restriccions haurien d'actualitzar-se. Els límits excessivament restrictius haurien de relaxar-se; els límits insuficients haurien de reforçar-se. La governança és iterativa.

- **Integració de la recerca.** Els avenços en la recerca de seguretat de la IA haurien de traduir-se en mecanismes de governança millorats. La bretxa entre la recerca i la pràctica hauria de minimitzar-se.

- **Aportació externa.** La governança hauria d'incorporar aportacions de les parts afectades: usuaris, comunitats impactades, investigadors i el públic. No hauria de ser domini exclusiu dels desenvolupadors.

La governança reflexiva aprèn. La governança estàtica es torna obsoleta.

## Principi 7: Responsabilitat col·lectiva

La governança de la IA és un projecte compartit que requereix cooperació entre actors.

Cap entitat individual, ni governs, ni empreses, ni investigadors, pot governar la IA per si sola. Una governança efectiva requereix coordinació entre actors que poden tenir diferents interessos, perspectives i limitacions.

La responsabilitat col·lectiva significa:

- **Compartir informació.** Les organitzacions haurien de compartir informació rellevant per a la seguretat en lloc d'acaparar-la per obtenir avantatge competitiu. El secretisme en la seguretat de la IA és un fracàs col·lectiu.

- **Establiment d'estàndards.** Els estàndards comuns, per a avaluació, divulgació i representació de restriccions, permeten la coordinació. Els [esquemes llegibles per màquina](/research/003-machine-readable-constraint-schema/) són un exemple d'infraestructura que habilita l'acció col·lectiva.

- **Rendició de comptes mútua.** Els actors haurien d'exigir responsabilitat mútuament. [Auditar els auditors](/research/006-meta-governance-auditors/), monitorar els monitors i governar els governants són funcions essencials.

- **Coordinació internacional.** La governança de la IA no pot ser purament nacional. L'[arbitratge regulatori](/research/008-regulatory-arbitrage/) explota les bretxes entre jurisdiccions. La coordinació limita aquesta explotació.

El projecte d'IA reflexiva no és la iniciativa d'una sola organització. És una crida a un paradigma de governança que abasti tot el camp.

## Conclusió

La IA reflexiva no és una visió llunyana. És un conjunt de decisions de disseny, mecanismes de governança i arranjaments institucionals que poden implementar-se ara.

Alguns elements ja existeixen. Alguns requereixen més recerca. Alguns requereixen una coordinació que encara no ha sorgit. Però la direcció és clara: sistemes d'IA que participen en la seva pròpia governança, operant dins de restriccions transparents, donant suport a la supervisió humana i contribuint al projecte continu d'assegurar que la intel·ligència artificial continuï sent beneficiosa.

Aquest manifest és una invitació. Als investigadors: desenvolupeu les eines i marcs que la governança reflexiva requereix. Als desenvolupadors: dissenyeu sistemes que encarnen aquests principis. Als responsables de polítiques: creeu marcs regulatoris que permetin i incentivin els enfocaments reflexius. Al públic: exigiu sistemes d'IA que siguin transparents, responsables i honestos sobre la seva naturalesa.

L'alternativa, una IA opaca, ingovernabile i irresponsable, no és acceptable. La tecnologia és massa potent, els riscos massa alts. La governança reflexiva no és opcional. És necessària.

## Recerca relacionada

Aquest manifest sintetitza temes explorats al llarg de la recerca de la Iniciativa Reflexive AI:

- [Un esquema de restriccions llegible per màquina](/research/003-machine-readable-constraint-schema/)
- [Proporcionalitat en la divulgació de models](/research/001-proportionality-disclosure/)
- [Línies vermelles: una taxonomia de límits no negociables de la IA](/research/004-red-lines-taxonomy/)
- [Els límits de l'autorestricció](/research/013-limits-of-self-constraint/)
- [Un protocol per a la comunicació entre IA i reguladors](/research/014-ai-regulator-protocol/)
- [El problema de la IA honesta](/research/029-honest-ai/)
- [Sistemes de notificació d'incidents: lliçons de l'aviació](/research/021-aviation-lessons/)
