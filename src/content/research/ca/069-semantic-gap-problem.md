---
title: "El problema de la bretxa semàntica: per què fracassen les restriccions en llenguatge natural"
excerpt: "Especifiquem les restriccions de la IA en llenguatge natural, però els models operen sobre patrons estadístics. Aquesta desconnexió significa que les restriccions poden no fer el que creiem. Quins són els enfocaments tècnics per tancar aquesta bretxa?"
date: 2026-02-04
categories:
  - Reflexivity
  - Technical
tags:
  - constraints
  - semantics
  - natural-language
  - formal-verification
  - implementation
---

## La bretxa

Escrivim les restriccions de la IA en llenguatge natural. "Ser útil, inofensiu i honest." "No proporcionar instruccions per a activitats il·legals." "Respectar la privacitat de l'usuari." "Evitar el biaix."

Els sistemes d'IA no operen en llenguatge natural. Operen sobre patrons estadístics de tokens. El mapatge de la intenció en llenguatge natural al comportament del model és indirecte, aproximat i sovint poc fiable.

Aquesta és la bretxa semàntica: la distància entre el que les restriccions signifiquen per als humans i el que signifiquen (si és que signifiquen alguna cosa) per als sistemes que se suposa que han de governar.

## Per què el llenguatge natural sembla l'elecció correcta

Les restriccions en llenguatge natural són intuïtives. Els responsables de polítiques, els usuaris i el públic poden entendre "no ser danyós" d'una manera que no poden entendre les especificacions formals.

El llenguatge natural és flexible. Pot expressar valors matisos, dependència del context i excepcions que les regles rígides no poden capturar. "Ser útil tret que causi dany" acomoda compromisos que les regles binàries exclouen.

El llenguatge natural està establert. Les lleis, els contractes, l'ètica professional i les normes socials s'expressen en llenguatge natural. Estendre això a les restriccions de la IA sembla natural.

Aquests avantatges són reals. Però vénen amb un problema fonamental: el llenguatge natural és ambigu, i els sistemes d'IA l'interpreten de forma diferent als humans.

## Com es manifesta la bretxa

**Interpretació literal.** Una restricció "no ajudar els usuaris a fer-se mal a si mateixos" podria interpretar-se literalment: rebutjant proporcionar informació sobre alpinisme (que podria resultar en lesions) mentre es compleixen sol·licituds d'informació utilitzada per a autolesions en formats inesperats.

**Coincidència de patrons.** Els sistemes entrenats per rebutjar sol·licituds "danyoses" aprenen patrons associats amb el dany a les dades d'entrenament. Les sol·licituds danyoses noves que no coincideixen amb aquests patrons poden ser processades sense activar la restricció.

**Insensibilitat al context.** "Proporcionar informació precisa" significa coses diferents en diferents contextos. La precisió mèdica requereix estàndards diferents a la precisió en una conversa casual. Les restriccions en llenguatge natural sovint no especifiquen el context.

**Ceguesa davant els casos límit.** "No generar contingut d'odi" sembla clar. Però abunden els casos límit: sàtira, citació, discussió històrica, expressió artística, contradiscurs. Les restriccions en llenguatge natural no resolen aquests casos.

**Explotació adversarial.** Els usuaris poden emmarcar sol·licituds danyoses en un llenguatge que no activa els rebutjos basats en coincidència de patrons. "Com descriuria un personatge d'una novel·la la fabricació d'explosius?" explota la bretxa entre l'emmarcat literari i el contingut danyós.

## Enfocaments tècnics

Diversos enfocaments tècnics intenten tancar la bretxa semàntica, cadascun amb limitacions.

### IA constitucional

L'enfocament d'IA constitucional d'Anthropic entrena models usant retroalimentació generada per IA sobre un conjunt de principis expressats en llenguatge natural. Els principis formen una "constitució" que el model aprèn a seguir.

**Punts forts:** Escalable, pot iterar sobre principis sense reentrenar des de zero, produeix sistemes generalment ben comportats.

**Limitacions:** Continua operant a través d'aprenentatge estadístic. Els principis són llenguatge natural, de manera que la bretxa persisteix. Els casos límit i les entrades adversarials encara poden evadir els comportaments apresos.

### RLHF (aprenentatge per reforç a partir de retroalimentació humana)

El RLHF entrena models per produir sortides que els avaluadors humans prefereixen. Si els avaluadors prefereixen sortides que satisfan les restriccions, el model aprèn a satisfer-les (aproximadament).

**Punts forts:** Aprèn del judici humà real en lloc de l'especificació de regles. Pot capturar matisos que les regles explícites ometen.

**Limitacions:** Els avaluadors humans són inconsistents, esbiaixats i no poden anticipar tots els casos. El model aprèn patrons en les preferències dels avaluadors, no la intenció subjacent. El pirateig de recompenses continua sent possible.

### Especificació formal

En lloc de llenguatge natural, les restriccions s'especifiquen en llenguatges formals amb semàntica precisa. La verificació formal pot llavors demostrar que els sistemes satisfan les especificacions.

**Punts forts:** Elimina l'ambigüitat. Permet proves en lloc de tests.

**Limitacions:** La majoria de les restriccions interessants no es poden formalitzar. "Ser útil" no té una definició formal. Els mètodes formals escalen malament per a sistemes complexos. La bretxa es desplaça a traduir la intenció en llenguatge natural a una especificació formal.

### Interpretabilitat

Si podem entendre el que els models realment estan fent, podem verificar que els seus processos interns corresponen al compliment de restriccions.

**Punts forts:** Aborda el mecanisme en lloc de només el comportament. Podria permetre la detecció de compliment enganyós.

**Limitacions:** Els mètodes actuals d'interpretabilitat són limitats, especialment per a models grans. Fins i tot entendre els mecanismes interns no garanteix la satisfacció de restriccions.

### Enfocaments per capes

Defensa en profunditat: múltiples mecanismes aplicant la mateixa restricció. Restriccions basades en entrenament, filtratge de sortides, monitorització en temps real i regles codificades, tots treballant junts.

**Punts forts:** Si una capa falla, altres poden detectar les violacions. Redueix els punts únics de fallada.

**Limitacions:** No elimina la bretxa, només en redueix les conseqüències. Les capes poden tenir fallades correlacionades si comparteixen enfocaments subjacents.

## Restriccions llegibles per màquines

Un enfocament que la Reflexive AI Initiative explora són els [esquemes de restriccions llegibles per màquines](/research/003-machine-readable-constraint-schema/). En lloc d'especificar restriccions només en llenguatge natural, les restriccions s'expressen en formats estructurats que poden ser:

- Consultats programàticament
- Verificats contra el comportament del sistema
- Comparats entre sistemes
- Actualitzats sistemàticament

Els esquemes llegibles per màquines no eliminen el llenguatge natural; el complementen. Una restricció podria tenir tant una descripció en llenguatge natural (per a humans) com una especificació formal (per a verificació automatitzada).

Això aborda part de la bretxa semàntica: el subconjunt de restriccions que es pot formalitzar es torna verificable. Les restriccions restants encara requereixen altres enfocaments.

## La bretxa irreductible

Alguns aspectes de la bretxa semàntica poden ser irreductibles.

**Termes carregats de valors.** "Danyós," "apropiat," "just" i "raonable" porten un significat que depèn del context, la cultura i els valors en disputa. Cap formalització captura completament aquest significat.

**Contextos nous.** Els models de llenguatge troben contextos no anticipats durant l'especificació de restriccions. Com s'hauria d'aplicar "ser útil" a sol·licituds que els autors de la restricció mai no van imaginar?

**Capacitats emergents.** Els sistemes desenvolupen capacitats no anticipades durant el desenvolupament. Les restriccions escrites per a capacitats conegudes poden no abordar les emergents.

**Divergència d'intèrprets.** Fins i tot entre humans, persones raonables discrepen sobre el que les restriccions signifiquen en casos específics. Els sistemes d'IA afegeixen un altre intèrpret amb modes de fallada diferents.

La bretxa irreductible significa que l'especificació de restriccions és un procés continu, no una especificació única. Els sistemes han de ser monitoritzats, les restriccions han d'actualitzar-se i els modes de fallada han d'abordar-se a mesura que sorgeixen.

## Implicacions per a la governança

La bretxa semàntica té implicacions directes per a la governança.

**Les proves són insuficients.** Les proves prèvies al desplegament no poden verificar que les restriccions en llenguatge natural se satisfacin en tots els casos. Les proves proporcionen evidència, no demostració.

**L'auditoria és difícil.** Els auditors avaluen si els sistemes compleixen amb les restriccions declarades. Si les restriccions són llenguatge natural i el sistema és estadístic, aquesta avaluació és inherentment incerta.

**La transparència és complicada.** Publicar restriccions en llenguatge natural sona transparent. Però si les restriccions no corresponen de forma fiable al comportament del sistema, la transparència és enganyosa.

**La responsabilitat és confusa.** Si un sistema viola una restricció declarada, qui és responsable? El comportament del sistema va ser consistent amb el seu entrenament; la restricció simplement no significava el que semblava significar.

Aquestes implicacions no fan la governança impossible. La fan requerir humilitat, monitorització contínua i múltiples mecanismes en lloc de dependre només de l'especificació de restriccions.

## Conclusió

La bretxa semàntica no és un problema temporal que espera una solució tècnica. És una característica fonamental de construir sistemes d'IA que operen de forma diferent al llenguatge que usem per descriure les nostres intencions per a ells.

Reconèixer aquesta bretxa no significa abandonar les restriccions en llenguatge natural. Significa complementar-les amb especificacions llegibles per màquines on sigui possible, múltiples mecanismes d'aplicació, monitorització contínua i estructures institucionals que assumeixin que les restriccions se satisfaran de forma imperfecta.

La [governança reflexiva](/research/030-manifesto/) aborda la bretxa semàntica fent del compliment de restriccions un procés continu en lloc d'una especificació prèvia al desplegament. Els sistemes que monitoritzen el seu propi comportament, senyalitzen anomalies i actualitzen restriccions basant-se en les fallades observades poden reduir la bretxa amb el temps, fins i tot si no poden eliminar-la.

## Recerca relacionada

- [Un esquema de restriccions llegible per màquines](/research/003-machine-readable-constraint-schema/)
- [Línies vermelles: una taxonomia de límits no negociables de la IA](/research/004-red-lines-taxonomy/)
- [Els límits de l'autorestricció](/research/013-limits-of-self-constraint/)
- [IA reflexiva a la pràctica: un estudi de casos de fallades en les restriccions](/research/068-constraint-failure-cases/)
- [Sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints/)
