---
title: "Mecanismes de seguretat a nivell de maquinari"
excerpt: "Com el disseny de maquinari pot incorporar funcions de seguretat directament en els sistemes d'IA, amb implicacions per a la governança i la mitigació de riscos."
date: 2026-02-04
toc: true
categories:
  - Safety Mechanisms
  - AI Governance
tags:
  - hardware
  - safety
  - governance
  - risk-mitigation
version: "1.0"
---

**Objecte d'Investigació Reflexiva 060**  
*Tipus: Recerca i restricció candidata*

## Introducció

El discurs al voltant de la seguretat de la intel·ligència artificial (IA) sovint se centra en solucions a nivell de programari: alineació algorítmica, tècniques d'interpretabilitat i sistemes de monitorització robustos. No obstant això, a mesura que els sistemes d'IA creixen en complexitat computacional i s'integren cada vegada més en infraestructures crítiques, resulta cada cop més evident que les solucions de programari per si soles són insuficients. El maquinari --el substrat físic sobre el qual opera la IA-- exerceix un paper fonamental en la determinació del comportament del sistema i, en conseqüència, de la seva seguretat.

Aquest article explora com els mecanismes de seguretat a nivell de maquinari poden constituir una part integral de l'ecosistema de seguretat de la IA. Analitzarem els principis de disseny de la seguretat del maquinari, les tecnologies actuals que s'alineen amb aquests principis i el seu potencial per complementar els controls a nivell de programari. També examinarem els reptes d'implementar la seguretat basada en maquinari, incloent-hi les dimensions tècniques, econòmiques i de governança. Finalment, considerarem el paper del maquinari en els marcs més amplis de governança de la IA, comparant els seus mèrits i limitacions amb altres intervencions de seguretat.

## Per què el maquinari importa per a la seguretat de la IA

### El paper fonamental del maquinari

El maquinari serveix com a entorn d'execució per als sistemes d'IA. Determina l'eficiència computacional, defineix les restriccions físiques i influeix en la fiabilitat operativa. A diferència del programari, que pot modificar-se després del desplegament, el maquinari sol operar com una restricció fixa. Aquesta característica el converteix en una capa prometedora per incorporar mecanismes de seguretat immutables. Quan es dissenya amb la seguretat en ment, el maquinari pot imposar límits a la potència computacional, el consum energètic i altres paràmetres operatius, reduint així la probabilitat de comportaments insegurs.

Per exemple, el maquinari pot implementar interruptors d'aturada físics o límits d'energia que prevenen modes de fallada catastròfics. Aquestes funcions són particularment rellevants per als sistemes d'IA de frontera, que poden desenvolupar capacitats més enllà del seu abast previst. En incorporar restriccions a nivell de maquinari, els dissenyadors de sistemes poden garantir que certes funcions de seguretat romanguin a prova de manipulacions, fins i tot si els controls de programari fallen o són eludits.

### Deficiències actuals dels enfocaments basats exclusivament en programari

Els mecanismes de seguretat basats en programari, tot i ser essencials, presenten vulnerabilitats inherents. Poden ser eludits mitjançant atacs maliciosos, errors humans o comportaments imprevistos del sistema. A més, els controls de programari sovint depenen de la interpretabilitat i l'explicabilitat, àrees en les quals els sistemes d'IA actuals disten de ser robustos. Les solucions de maquinari poden abordar aquestes mancances proporcionant una capa de protecció addicional que és independent de les vulnerabilitats del programari.

Per exemple, un mecanisme de limitació de velocitat basat en programari podria fallar si un atacant obté accés administratiu al sistema. Un límit basat en maquinari sobre la velocitat de processament o l'ús de memòria romandria vigent, proporcionant una salvaguarda addicional. Aquest enfocament de capes s'alinea amb el principi de defensa en profunditat, pedra angular de la ciberseguretat i l'enginyeria de seguretat.

## Principis de disseny per a mecanismes de seguretat del maquinari

### Restriccions immutables

Una de les característiques més valuoses de la seguretat a nivell de maquinari és la seva relativa immutabilitat. A diferència del programari, que pot actualitzar-se o modificar-se, les restriccions de maquinari sovint es fixen en la fase de fabricació. Aquesta característica pot aprofitar-se per imposar funcions de seguretat no eludibles. Els exemples inclouen límits codificats de forma permanent en el consum energètic o la incorporació de dispositius físics de seguretat.

Aquestes restriccions poden ser particularment útils per prevenir escenaris de descontrol en els sistemes d'IA. Per exemple, un límit d'energia imposat per maquinari podria restringir els recursos computacionals disponibles per a una IA fora de control, reduint la seva capacitat d'escalar les seves capacitats de forma autònoma.

### Monitorització i retroalimentació en temps real

El maquinari modern pot incorporar sistemes de monitorització en temps real que detecten anomalies en el comportament del sistema. Per exemple, els xips específics per a IA com les Unitats de Processament Tensorial (TPU) de Google i les GPU de NVIDIA estan cada vegada més equipats amb funcions de telemetria que monitoritzen mètriques de rendiment com la temperatura, el consum energètic i la latència. En integrar aquests sistemes de telemetria amb protocols de seguretat, el maquinari pot actuar dinàmicament per mitigar riscos.

Per exemple, si un sistema d'IA comença a consumir una quantitat inusual de recursos computacionals, el maquinari podria desencadenar una aturada segura o restringir l'activitat posterior. Aquests bucles de retroalimentació en temps real són crítics per gestionar els riscos en sistemes que operen de forma autònoma o en entorns d'alt risc.

### Sinergia maquinari-programari

La seguretat a nivell de maquinari no hauria de substituir els controls a nivell de programari, sinó complementar-los. Per exemple, les dades de telemetria del maquinari poden alimentar sistemes de detecció d'anomalies basats en programari, creant un marc de seguretat sinèrgic. De manera similar, el programari pot proporcionar capes interpretatives que tradueixin els senyals del maquinari en informació processable per als operadors humans.

Aquesta interacció és particularment important per als sistemes complexos, on el maquinari per si sol no pot abordar tots els possibles modes de fallada. Un sistema de seguretat maquinari-programari ben integrat pot assolir un nivell de robustesa que cap de les capes podria aconseguir de forma independent.

## Tecnologies existents i les seves aplicacions

### Enclaus segurs

Els enclaus segurs, com les Software Guard Extensions (SGX) d'Intel, són funcions de maquinari dissenyades per protegir dades i càlculs sensibles de l'accés no autoritzat. Aquests enclaus també poden exercir un paper en la seguretat de la IA aïllant les funcions crítiques de seguretat de la resta del sistema. Per exemple, un sistema d'IA podria utilitzar un enclau segur per emmagatzemar i executar codi crític per a la seguretat, garantint que romangui a prova de manipulacions.

### Xips d'IA especialitzats

L'auge dels xips d'IA especialitzats, com les TPU de Google i les GPU A100 de NVIDIA, ofereix noves oportunitats per incorporar funcions de seguretat directament en el maquinari. Aquests xips estan optimitzats per a càrregues de treball d'IA i sovint inclouen funcions de telemetria i control que es poden reutilitzar per a la seguretat. Per exemple, les TPU poden monitoritzar el consum energètic i ajustar el rendiment dinàmicament, proporcionant un mecanisme integrat per a la gestió de l'ús de recursos.

### Interruptors d'aturada físics

Els interruptors d'aturada físics continuen sent una de les funcions de seguretat a nivell de maquinari més simples però més eficaces. Aquests interruptors permeten als operadors humans desactivar completament un sistema en cas d'emergència. Tot i que no són una solució sofisticada, la seva simplicitat i fiabilitat els converteixen en un component essencial de qualsevol marc de seguretat.

## Reptes i limitacions

### Reptes tècnics

Implementar la seguretat a nivell de maquinari implica reptes tècnics significatius. Dissenyar maquinari que pugui imposar protocols de seguretat complexos és una tasca no trivial, particularment per als sistemes d'IA de frontera amb comportaments altament dinàmics. A més, els cicles de desenvolupament del maquinari són llargs i costosos, cosa que dificulta la iteració ràpida o l'adaptació a nous requisits de seguretat.

### Barreres econòmiques

El cost de dissenyar i fabricar maquinari especialitzat pot ser prohibitiu, particularment per a les organitzacions més petites. Aquesta barrera econòmica planteja qüestions sobre equitat i accessibilitat: Els mecanismes de seguretat a nivell de maquinari estaran disponibles només per a les entitats amb més recursos, deixant en desavantatge els actors més petits?

### Governança i normalització

La governança dels mecanismes de seguretat a nivell de maquinari és un altre repte crític. A diferència del programari, que pot actualitzar-se després del desplegament, el maquinari sovint queda fixat un cop surt de fàbrica. Això planteja qüestions sobre la rendició de comptes: Qui és responsable si una funció de seguretat a nivell de maquinari falla? A més, la manca de directrius estandarditzades per a la seguretat del maquinari complica el panorama regulatori. Articles com [El paper dels organismes de normalització en la governança de la IA](/research/039-standards-bodies) han destacat la importància dels estàndards internacionals per abordar aquests reptes.

## Implicacions de governança

### Integració de la seguretat en els règims de certificació

Els mecanismes de seguretat a nivell de maquinari s'haurien d'incorporar als règims de certificació dels sistemes d'IA. Per exemple, els marcs regulatoris podrien exigir que els sistemes d'IA de frontera incloguin funcions de maquinari com enclaus segurs o interruptors d'aturada físics. Aquest enfocament s'alinea amb les recomanacions de [Règims de certificació per a sistemes d'IA](/research/041-certification-regimes), que advoca per requisits de seguretat per capes.

### Cooperació internacional

Atesa la naturalesa global del desenvolupament de la IA, la cooperació internacional és essencial per estandarditzar els mecanismes de seguretat a nivell de maquinari. Les propostes de tractats internacionals d'IA, com les analitzades a [Propostes de tractats internacionals d'IA: una anàlisi comparativa](/research/038-international-treaties), haurien d'incloure disposicions sobre la seguretat del maquinari per garantir la coherència entre jurisdiccions.

## Conclusió

Els mecanismes de seguretat a nivell de maquinari ofereixen una capa de protecció robusta i immutable per als sistemes d'IA. En incorporar funcions de seguretat directament en el substrat físic de la IA, podem abordar vulnerabilitats que el programari per si sol no pot mitigar. Tot i que persisteixen reptes --particularment en termes de viabilitat tècnica, accessibilitat econòmica i governança--, aquests mecanismes són un component essencial d'un marc integral de seguretat de la IA. A mesura que els sistemes d'IA continuen evolucionant, el paper del maquinari en garantir-ne l'operació segura només es tornarà més crític.

*Nota: Aquest article se centra en els mecanismes de seguretat a nivell de maquinari com a capa complementària als controls basats en programari. No aborda implicacions socials o ètiques més àmplies, que requereixen marcs de governança independents.*

## Articles relacionats

- [El paper dels organismes de normalització en la governança de la IA](/research/039-standards-bodies)
- [Règims de certificació per a sistemes d'IA](/research/041-certification-regimes)
- [Propostes de tractats internacionals d'IA: una anàlisi comparativa](/research/038-international-treaties)
