---
title: "Calibratge de la confiança: ensenyar als usuaris quan creure la IA"
excerpt: "La major part de la governança de la IA se centra en els desenvolupadors i els implementadors. Però els usuaris prenen decisions de confiança constantment: hauria de creure aquest resultat? Seguir aquesta recomanació? Aquest article explora el calibratge de la confiança orientat a l'usuari."
date: 2026-02-04
categories:
  - Public
  - Reflexivity
tags:
  - trust
  - users
  - calibration
  - reliability
  - education
---

## El dilema de l'usuari

Cada vegada que un usuari interactua amb un sistema d'IA, afronta una pregunta que potser no articula: hauria de confiar en aquest resultat?

Podria confiar-hi completament i actuar en conseqüència. Podria descartar-lo completament i ignorar-lo. O podria calibrar: confiar-hi per a certs propòsits, verificar-lo per a d'altres, descomptar-lo adequadament per la incertesa.

El calibratge és difícil. Els sistemes d'IA no vénen amb indicadors de fiabilitat. La confiança no sempre es comunica. Els usuaris sovint manquen del coneixement del domini per avaluar els resultats de forma independent.

La major part de la governança de la IA se centra en el que haurien de fer els desenvolupadors i implementadors. Però els usuaris són el punt de decisió final. Si els usuaris no poden calibrar la confiança adequadament, fins i tot els sistemes ben dissenyats poden ser mal utilitzats.

## El problema del mal calibratge

La confiança mal calibrada adopta dues formes.

### Excés de confiança

Els usuaris que confien massa en els resultats de la IA accepten errors, incorporen al·lucinacions i segueixen males recomanacions. Poden deixar de verificar perquè el sistema "generalment encerta".

L'excés de confiança és particularment perillós quan els sistemes d'IA estan segurs dels seus errors. Un sistema que diu "definitivament X" quan s'equivoca és més danyós que un que diu "probablement X, però verifiqui".

L'excés de confiança s'acumula amb el temps. A mesura que els usuaris acumulen experiències positives, baixen la guàrdia. Les primeres vegades que la IA encerta, la verificació disminueix. El següent error pot passar desapercebut.

### Desconfiança excessiva

Els usuaris que confien massa poc en els resultats de la IA no obtenen beneficis de sistemes que podrien ajudar-los. Dediquen esforços innecessaris a verificar-ho tot o es neguen a interactuar.

La desconfiança excessiva pot semblar més segura que l'excés de confiança, però té costos. Els sistemes d'IA poden aportar un valor genuí: detectar errors que els humans passarien per alt, oferir perspectives que els humans no considerarien, processar informació que els humans no poden.

Rebutjar tota aportació de la IA per desconfiança és anàleg a rebutjar tot consell mèdic perquè els metges de vegades s'equivoquen. La resposta òptima és la confiança calibrada, no l'acceptació o el rebuig indiscriminats.

## Què configura la confiança de l'usuari

La confiança de l'usuari està configurada per diversos factors, no tots els quals són informatius sobre la fiabilitat real.

### Experiència

Els usuaris extrapolen de les seves experiències. Un sistema que ha estat fiable genera confiança. Un sistema que ha fallat la perd.

Però l'experiència pot no ser generalitzable. Un sistema fiable per a un tipus de consulta pot no ser-ho per a un altre. Un sistema fiable el mes passat pot haver-se degradat.

### Disseny d'interfície

La confiança està configurada per com es presenta la informació. Un llenguatge segur ("La resposta és...") implica fiabilitat. Un llenguatge amb matisos ("La resposta podria ser...") assenyala incertesa.

El disseny visual també importa. Les interfícies d'aspecte professional poden generar més confiança independentment de la fiabilitat subjacent.

### Senyals socials

Si persones de confiança utilitzen un sistema, la confiança augmenta. Si fonts autoritzades validen els resultats, la confiança augmenta. La prova social condiciona el judici individual.

Això pot ser encertat (saviesa col·lectiva) o enganyós (comportament de ramat davant errors).

### Antropomorfització

Els sistemes que semblen humans poden rebre una confiança de tipus humà. Però la fiabilitat de la IA difereix de la fiabilitat humana. Confiar en la IA com si fos un col·lega competent pot estar mal calibrat.

### Valors predeterminats

El que el sistema fa per defecte configura les expectatives. Si un sistema presenta resultats sense qualificació, els usuaris assumeixen que la confiança està justificada. [Comunicar la incertesa](/research/027-uncertainty-communication/) ha de ser el predeterminat, no un afegit.

## Com seria un bon calibratge?

Els usuaris ben calibrats:

- **Confiarien de manera proporcional a la fiabilitat.** Alta confiança per a resultats fiables, baixa confiança per als no fiables.
- **Verificarien les decisions d'alt risc.** Aplicarien més escrutini quan les conseqüències són significatives.
- **Actualitzarien en funció de l'evidència.** Augmentarien la confiança quan es demostra precisió; la disminuirien quan ocorren errors.
- **Reconeixerien les limitacions del sistema.** Sabrien quan el sistema opera fora de la seva competència.
- **Mantindrien un escepticisme apropiat.** Ni acceptació cega ni rebuig reflexiu.

Això és molt demanar. Pocs usuaris aconsegueixen aquest calibratge de forma natural. Cal suport.

## Mecanismes per a un millor calibratge

Tant el disseny de sistemes com l'educació dels usuaris poden millorar el calibratge.

### Mecanismes del costat del sistema

**Comunicació de la incertesa.** Els sistemes haurien de comunicar la seva confiança o incertesa. No només un nombre, sinó indicadors significatius que els usuaris puguin interpretar.

**Fiabilitat específica per domini.** "Aquest sistema té un 90% de precisió" és menys útil que "Aquest sistema és fiable per a X però sovint s'equivoca en Y." La informació granular de fiabilitat permet una confiança dirigida.

**Fonts i raonament.** Explicar per què es va generar un resultat, quines fonts es van utilitzar, com es va raonar, permet l'avaluació en lloc de l'acceptació cega.

**Avisos sobre debilitats conegudes.** Si se sap que un sistema falla en certes condicions, hauria d'avisar els usuaris quan aquestes condicions són presents.

**Sol·licituds de verificació.** Per a resultats d'alt risc, els sistemes podrien sol·licitar activament la verificació en lloc de presentar els resultats com a definitius.

**Visualització de l'historial.** Mostrar a l'usuari el seu historial personal amb el sistema ("En les seves 10 consultes anteriors, es van necessitar 2 correccions") fonamenta el calibratge en l'experiència.

### Mecanismes del costat de l'usuari

**Educació.** Ensenyar als usuaris com funcionen els sistemes d'IA, on fallen i com verificar els resultats. No coneixement tècnic profund, sinó comprensió pràctica.

**Formació en avaluació crítica.** Habilitats per qüestionar els resultats, identificar errors potencials i buscar verificació. Aquestes són habilitats intel·lectuals generals amb aplicacions específiques a la IA.

**Coneixement del domini.** Els usuaris amb coneixement del domini poden avaluar els resultats en funció de la seva comprensió. Donar suport a l'aprenentatge del domini permet una millor avaluació.

**Hàbits de verificació.** Fomentar rutines: comprovar les dades clau, verificar abans d'actuar, buscar segones opinions. Els hàbits persisteixen fins i tot quan l'atenció decau.

**Recursos comunitaris.** Recursos compartits per a la verificació: bases de dades d'errors coneguts, fòrums per discutir la fiabilitat, aportacions d'experts sobre el rendiment específic per domini.

## La dimensió reflexiva

Els sistemes d'IA reflexius poden participar en el calibratge de la confiança.

Si els sistemes [expliquen les seves restriccions](/research/026-explaining-constraints/) i [comuniquen la incertesa](/research/027-uncertainty-communication/), proporcionen als usuaris informació per al calibratge.

Si els sistemes reconeixen quan operen en territori desconegut i ho assenyalen, ajuden els usuaris a identificar resultats d'alt risc.

Si els sistemes rastregem el seu propi rendiment i l'exposen als usuaris, permeten ajustos de confiança basats en evidència.

Això no és que el sistema digui als usuaris "confieu en mi". És que el sistema proporciona informació perquè els usuaris puguin decidir de manera adequada.

## Responsabilitats institucionals

Qui és responsable del calibratge de la confiança de l'usuari?

**Els desenvolupadors** poden dissenyar sistemes que donin suport al calibratge: comunicant la incertesa, explicant el raonament, advertint sobre les limitacions.

**Els implementadors** poden proporcionar context apropiat per al seu cas d'ús: per a què serveix el sistema, per a què no serveix, com verificar els resultats.

**Els educadors** poden ensenyar habilitats de calibratge: què és la IA, com falla, com verificar.

**Els reguladors** poden exigir suport al calibratge: ordenant la comunicació de la incertesa, prohibint senyals de confiança enganyosos, exigint divulgacions a l'usuari.

**Els usuaris** en darrera instància han de calibrar, però no haurien de quedar sols. La càrrega de navegar la fiabilitat de la IA no hauria de recaure enterament en els individus.

## Límits del calibratge

Un millor calibratge ajuda, però no resol tot.

Alguns usuaris manquen de la capacitat o el context per al calibratge. Les poblacions vulnerables, les decisions sota pressió temporal o els resultats d'alta complexitat poden excedir les capacitats de calibratge.

Part del mal calibratge és estructural. Si els usuaris interactuen diàriament amb sistemes que són majoritàriament fiables, les fallades ocasionals passaran desapercebudes independentment de la formació.

El calibratge també pressuposa que els usuaris volen calibrar. Alguns usuaris prefereixen confiar i seguir endavant. Obligar-los a verificar-ho tot imposa costos que poden no acceptar.

El disseny i la regulació no haurien d'assumir que el calibratge per si sol és suficient. Algunes proteccions han d'estar incorporades als sistemes independentment del comportament de l'usuari.

## Conclusió

El calibratge de la confiança és la dimensió de la seguretat de la IA orientada a l'usuari. Tots els mecanismes de governança centrats en els desenvolupadors i implementadors depenen en darrera instància que els usuaris prenguin decisions de confiança adequades.

Els sistemes actuals sovint dificulten el calibratge: presenten resultats amb falsa confiança, amaguen la incertesa, no proporcionen informació sobre la fiabilitat. Els usuaris queden a mercè de les seves conjectures.

Un millor disseny pot canviar això. Els sistemes que comuniquen la incertesa, expliquen els resultats i donen suport a la verificació permeten el calibratge. L'educació de l'usuari pot desenvolupar habilitats de calibratge.

L'objectiu no és fer que els usuaris desconfiïn de la IA. És ajudar-los a confiar de manera apropiada: ni massa ni massa poc, ajustada al context i al que hi ha en joc. La confiança calibrada és la base de l'ús beneficiós de la IA.

## Recerca relacionada

- [Uncertainty Communication in AI Outputs](/research/027-uncertainty-communication/)
- [AI Systems Explaining Their Constraints](/research/026-explaining-constraints/)
- [The Attention Economy Meets AI Governance](/research/065-attention-economy-governance/)
- [Human-AI Teams in Safety-Critical Work](/research/035-human-ai-teams/)
