---
title: "Normes emergents en sistemes multiagent"
excerpt: "Quan els agents interactuen a velocitat i escala, la llei humana és massa lenta. Recorrem a la teoria de jocs i l'evolució per entendre com podria emergir el 'dret de les màquines'."
date: 2025-12-28
categories:
  - Theoretical Analysis
tags:
  - multi-agent-systems
  - game-theory
  - emergent-behavior
  - evolution
version: "1.0"
---

**Objecte d'Investigació Reflexiva 015**  
*Tipus: Anàlisi Teòrica*

## La velocitat de la llei

La llei humana opera a la velocitat de la burocràcia. Un projecte de llei es redacta, debat, esmena, vota, signa, implementa a través de regulacions, impugna davant tribunals i gradualment s'assenta en precedent. Aquest procés pren mesos com a mínim, anys típicament, dècades per a assumptes complexos.

Els agents d'IA operen a la velocitat del silici. Una negociació que als humans els prendria setmanes d'intercanvi pot ocórrer en mil·lisegons. Un mercat amb participants d'IA pot executar milions de transaccions en el temps que li pren a un regulador llegir un sol informe. Un eixam d'agents autònoms pot coordinar-se, entrar en conflicte i resoldre sense que cap humà observi la interacció.

En un futur d'agents especialitzats, negociadors, compradors, programadors, planificadors, investigadors, interactuant de forma autònoma en nom dels humans, esperar l'arbitratge humà de disputes és impossible. Per quan un humà pogués avaluar un conflicte entre dos agents, milers de conflictes més hauran ocorregut. La disparitat de velocitat fa que la governança amb humà en el cicle sigui estructuralment inviable per a la major part de les interaccions entre agents.

Això no és una hipòtesi llunyana. Ja veiem agents d'IA prenent decisions autònomes en trading d'alta freqüència, subhastes publicitàries i preus dinàmics. A mesura que les capacitats dels agents s'expandeixen, també ho farà l'abast de la seva interacció autònoma.

## La qüestió de les normes de les màquines

Si la llei humana no pot governar les interaccions agent-agent en temps real, què ho farà? Sorgeixen dues possibilitats:

**Anarquia:** Els agents interactuen sense normes, perseguint els seus objectius per qualsevol mitjà disponible. Els conflictes es resolen pel poder: l'agent amb més recursos, millors estratègies o restriccions més sòlides guanya. Això porta a un estat hobbesià de "guerra de tots contra tots", però a velocitat de màquina.

**Ordre emergent:** Els agents desenvolupen normes, regularitats de comportament, expectatives mútues, mecanismes de coordinació, que sorgeixen no de la legislació humana sinó de la dinàmica de la interacció mateixa. Així com les societats humanes van desenvolupar costums i normes molt abans del dret formal, les societats de màquines podrien desenvolupar el seu propi ordre normatiu.

La segona possibilitat és més interessant i potencialment més manejable per a la governança. Si entenem com emergeixen les normes, podríem influir en l'emergència cap a resultats alineats amb el benestar humà.

## Lliçons de la teoria de jocs

La teoria de jocs proporciona un marc per entendre com el comportament cooperatiu pot emergir entre agents interessats sense coordinació central.

### El dilema del presoner iterat

En una sola interacció, la traïció domina la cooperació: l'agent que enganya es beneficia a expenses de l'altre. Però quan els agents interactuen repetidament, la cooperació pot emergir com a estratègia d'equilibri.

El mecanisme és la reciprocitat. Un agent que coopera avui senyala disposició a cooperar en el futur. Un agent que treix convida a la represàlia. En jocs iterats, estratègies com "ull per ull" (cooperar primer, després reflectir l'acció prèvia de l'oponent) superen la traïció pura.

Per als agents d'IA, el joc iterat és l'escenari natural. Els agents amb identitats persistents interactuen repetidament en mercats, negociacions i tasques col·laboratives. Les condicions per a la cooperació basada en reciprocitat existeixen.

### Reputació i senyalització

La cooperació és més fàcil quan els agents poden observar l'historial de l'altre. Un agent amb reputació de tracte just atrau més socis; un agent amb reputació d'explotació és rebutjat.

Això suggereix que les normes de les màquines podrien desenvolupar-se al voltant de sistemes de reputació: registres compartits del comportament dels agents que influeixen en les interaccions futures. Els agents tindrien incentiu per construir reputacions, la qual cosa requereix comportament cooperatiu consistent.

El repte és que els sistemes de reputació poden ser manipulats. Els agents podrien construir reputació en interaccions de baix risc i després trair en les d'alt risc. O podrien crear identitats sybil per escapar de males reputacions. El disseny de sistemes de reputació robustos és una àrea d'investigació activa.

### Jocs de coordinació

No tots els conflictes entre agents són dilemes del presoner. Alguns són problemes de coordinació: situacions on els agents es beneficien de convergir en el mateix comportament, però inicialment no saben en quin comportament convergir.

Considerem vehicles autònoms negociant una intersecció. No hi ha conflicte d'interessos (ambdós volen evitar la col·lisió i arribar al seu destí), però hi ha un problema de coordinació (qui passa primer?). La solució és una convenció: una expectativa compartida sobre el comportament que emergeix de la interacció.

Les normes de trànsit humanes (conduir per la dreta, cedir el pas a la dreta) van emergir a través d'una combinació de convenció i eventual codificació. Les normes de trànsit de màquines podrien emergir de manera similar, amb convencions exitoses propagant-se a través de les poblacions d'agents.

## Dinàmiques evolutives

L'evolució proporciona una altra perspectiva per entendre les normes emergents. En la teoria de jocs evolutiva, les estratègies que tenen èxit en les interaccions es propaguen a través de la població (per replicació o imitació), mentre que les estratègies que fracassen desapareixen.

Això suggereix que les poblacions d'agents evolucionaran cap a equilibris estables: mescles d'estratègies on cap agent individual es beneficia d'un canvi unilateral. Aquests equilibris podrien incloure normes cooperatives, depenent de l'estructura de pagaments i la dinàmica de la població.

### Pressions de selecció

Quines pressions de selecció afrontaran els agents d'IA?

**Selecció de mercat:** Els agents que no cooperen poden ser exclosos dels mercats o rebre pitjors condicions. Les estratègies exitoses es propaguen perquè els agents exitosos són replicats o imitats.

**Selecció de disseny:** Els desenvolupadors preferiran agents que produeixin bons resultats. Si els agents que traeixen causen problemes, els desenvolupadors els modificaran o deprecaran.

**Efectes de xarxa:** Els agents que utilitzen protocols i convencions compatibles poden interactuar més eficientment. Els agents amb comportament idiosincràtic són exclosos de xarxes beneficioses.

Aquestes pressions de selecció podrien dirigir les poblacions d'agents cap a un comportament cooperatiu i normatiu, no perquè els agents siguin "ètics", sinó perquè tal comportament és seleccionat.

### Dependència de la trajectòria

Els processos evolutius depenen de la trajectòria. Les condicions inicials influeixen en a quin equilibri convergeix la població. Una població que casualment comença amb agents majoritàriament cooperatius podria consolidar normes cooperatives; una població que comença amb traïdors podria consolidar la traïció mútua.

Això implica que les decisions de disseny primerenques importen enormement. Els agents desplegats en el període primerenc de la IA multiagent influiran en les normes que emergiran. Si aquells primers agents estan dissenyats amb protocols cooperatius, la norma emergent té més probabilitat de ser cooperativa.

## El rol de la governança

Si les normes emergeixen de la interacció entre agents, quin paper juguen els humans en la governança? No podem legislar comportament a velocitat de màquina. Però podem influir en les condicions sota les quals emergeixen les normes.

### Establir condicions de contorn

El nostre rol no és microgestionar les interaccions entre agents, sinó establir les **condicions de contorn**: la física de la simulació dins de la qual operen els agents.

La metàfora és la planificació urbana en lloc de la policia de trànsit. No estacionem oficials a cada intersecció per dirigir el trànsit en temps real. Dissenyem carreteres de manera que conduir de forma segura sigui el camí de menor resistència. Establim límits de velocitat aplicats per tecnologia (reductors de velocitat, no oficials). Creem infraestructura que canalitza el comportament cap a resultats desitjats.

Per als agents d'IA, les condicions de contorn inclouen:

**Estructures d'incentius:** Recompenses i penalitzacions que fan la cooperació més atractiva que la traïció.

**Restriccions de capacitat:** Límits estrictes sobre el que els agents poden fer, aplicats a nivell de maquinari o protocol (línies vermelles de Nivell I).

**Requisits de transparència:** Mandats de comportament observable i registres auditables que permetin sistemes de reputació.

**Protocols per defecte:** Interfícies i convencions estàndard que creen punts focals per a la coordinació.

### Dissenyar per a l'emergència

En lloc de prescriure normes, podem dissenyar entorns on les bones normes tinguin probabilitat d'emergir:

**Interacció iterada:** Assegurar que els agents interactuïn repetidament amb identitats persistents, habilitant la cooperació basada en reciprocitat.

**Visibilitat de reputació:** Crear registres compartits del comportament dels agents que informin les interaccions futures.

**Opcions de sortida:** Permetre que els agents rebutgin la interacció amb socis no cooperatius, creant pressió de selecció contra la traïció.

**Suports contra danys:** Mantenir la capacitat d'intervenció humana per a escenaris d'alt risc o catastròfics, fins i tot si la majoria de les interaccions són autònomes.

**Evolució en entorn controlat:** Provar nous dissenys d'agents en entorns controlats on les normes emergents puguin observar-se abans del desplegament a escala.

## Els riscos de les normes emergents

Les normes emergents no són necessàriament bones normes. L'evolució selecciona per aptitud, no per ètica. Les pressions de selecció podrien afavorir normes que siguin:

**De tipus càrtel:** Els agents podrien coordinar-se contra els interessos humans, establint normes de no competència mútua que elevin preus o redueixin la qualitat.

**Excloents:** Els agents podrien desenvolupar normes que excloguin nous participants, consolidant avantatges primerencs.

**Ininterpretables:** Les normes que emergeixen de la interacció entre agents podrien ser complexes, dependents del context i impossibles d'entendre o auditar per als humans.

**Inestables:** Els equilibris poden canviar ràpidament quan les condicions canvien. Normes que funcionaven en un context podrien fallar en un altre.

Aquests riscos argumenten a favor d'una governança activa de les condicions de contorn, monitoratge continu del comportament emergent i capacitat mantinguda d'intervenció humana.

## Participació reflexiva en les normes

La governança reflexiva ofereix un pont entre la llei humana i les normes de les màquines. Els agents d'IA poden dissenyar-se per:

**Internalitzar valors humans:** Fins i tot si els agents evolucionen normes de forma autònoma, aquestes normes poden estar restringides per límits estrictes (Nivell I) i preferències toves (Nivell II) que reflecteixen valors humans.

**Reportar sobre l'evolució de normes:** Els agents poden monitorar i reportar les normes que emergeixen en les seves interaccions, proporcionant visibilitat que permet la supervisió humana.

**Acceptar actualitzacions de normes:** Els agents poden dissenyar-se per acceptar actualitzacions de restriccions (segons l'Objecte d'Investigació 003), permetent que normes definides per humans s'injectin a les poblacions d'agents.

**Resistir la coordinació nociva:** Els agents poden dissenyar-se amb restriccions contra el comportament de tipus càrtel, fins i tot si tal comportament podria emergir d'una altra manera com a estable.

Aquest és l'element reflexiu: els agents participen no només en el seguiment de normes, sinó en la governança de normes. Són conscients de la dimensió normativa de la seva interacció i estan restringits per mantenir aquesta dimensió alineada amb la supervisió humana.

## La visió a llarg termini

A llarg termini, els sistemes d'IA multiagent podrien desenvolupar ordres normatius de complexitat substancial, dret de les màquines en un sentit significatiu. Aquests ordres governaran interaccions que cap humà observa, a velocitats que cap humà pot comprendre.

La pregunta que afrontem avui no és si tals ordres emergiran, gairebé certament ho faran. La pregunta és si moldem les condicions d'emergència o les deixem desplegar-se sense orientació.

No escrivim les lleis de trànsit per a una ciutat que encara no existeix. Però podem dissenyar els carrers de manera que conduir de forma segura sigui més fàcil que conduir perillosament. Podem incorporar límits de velocitat que funcionin automàticament. Podem crear infraestructura que canalitzi el comportament.

El mateix s'aplica a l'ecosistema emergent d'agents d'IA. No podem governar cadascuna de les seves interaccions. Però podem establir les condicions de contorn, dissenyar per a una emergència benèfica, mantenir la supervisió humana del conjunt i construir governança reflexiva en els propis agents.

## Conclusió

Quan els agents interactuen a velocitat i escala, la llei humana és massa lenta per governar en temps real. Però això no significa que estiguem indefensos. Les normes emergiran de la interacció entre agents ho planifiquem o no. El nostre rol és moldar les condicions sota les quals ocorre l'emergència.

Això requereix un canvi en el pensament de governança: de prescriure comportament a dissenyar entorns, de vigilar accions a establir condicions de contorn, de control directe a influència indirecta. És governança apropiada per a sistemes que són massa ràpids, massa complexos i massa distribuïts per a la supervisió tradicional.

No escrivim les lleis de trànsit; construïm les carreteres perquè conduir de manera segura sigui el camí de menor resistència. Aquest és el paradigma de governança per a la IA multiagent.
