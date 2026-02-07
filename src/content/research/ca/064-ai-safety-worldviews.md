---
title: "Per què els investigadors de seguretat de la IA discrepen: una taxonomia de visions del món"
excerpt: "El camp de la seguretat de la IA sembla fracturat. Alguns se centren en l'alineament, d'altres en la governança, d'altres en l'ús indegut. Aquest article mapeja les diferències de visió del món subjacents que produeixen agendes de recerca divergents."
date: 2026-02-04
categories:
  - Public
  - Governance Analysis
tags:
  - ai-safety
  - worldviews
  - alignment
  - governance
  - methodology
---

## L'aparença de desacord

Els experts en seguretat de la IA discrepen sobre gairebé tot. Discrepen sobre quins riscos importen més. Discrepen sobre quines intervencions ajuden. Discrepen sobre terminis, sobre estimacions de probabilitat, sobre si centrar-se en els sistemes actuals o en els futurs.

Per als observadors externs, això sembla caòtic. Si els experts no es poden posar d'acord, com haurien els responsables polítics, els periodistes o el públic avaluar les afirmacions sobre els riscos de la IA?

Però gran part d'aquest desacord no és aleatori. Es deriva de diferents visions del món subjacents: diferents suposicions sobre fets empírics, diferents compromisos metodològics i diferents prioritats de valors. Comprendre aquestes visions del món no resol els desacords, però els explica i ajuda a avaluar les afirmacions en competència.

## Visió del món 1: El problema de l'alineament és central

Alguns investigadors creuen que el repte fonamental és garantir que els sistemes d'IA persegueixin els objectius que pretenem.

**Preocupacions clau:**
- Explotació d'especificacions: Els sistemes assoleixen els objectius declarats de maneres no previstes
- Manipulació de recompenses: Els sistemes exploten defectes en les estructures de recompensa
- Generalització errònia d'objectius: Els sistemes aprenen objectius que funcionen en l'entrenament però fallen en el desplegament
- Alineament enganyós: Els sistemes avançats podrien aparentar estar alineats mentre persegueixen objectius ocults

**Compromisos metodològics:**
- Enfocament en solucions tècniques: interpretabilitat, verificació formal, entrenament robust
- Estudi dels modes de fallada actuals com a evidència sobre riscos futurs
- Anàlisi teòrica del que podria sortir malament amb optimitzadors cada vegada més capaços

**Investigadors representatius:** Stuart Russell, Paul Christiano, Eliezer Yudkowsky, investigadors de MIRI, l'equip d'alineament d'Anthropic.

**Intervencions típiques proposades:** Millors tècniques d'entrenament, eines d'interpretabilitat, mètodes formals per verificar l'alineament, control de capacitats durant el desenvolupament.

## Visió del món 2: La governança i la coordinació importen més

Altres investigadors creuen que el repte central és institucional: com els humans s'organitzen, regulen i coordinen al voltant del desenvolupament de la IA.

**Preocupacions clau:**
- Dinàmiques de cursa: La competència entre empreses o nacions soscava les pràctiques de seguretat
- [Arbitratge regulatori](/research/008-regulatory-arbitrage/): Els actors es reubiquen per evitar la supervisió
- Asimetries d'informació: Els desenvolupadors saben més que els reguladors
- Fracassos d'acció col·lectiva: Els incentius individuals divergeixen del benestar col·lectiu

**Compromisos metodològics:**
- Enfocament en polítiques públiques, dret i disseny institucional
- Extreure lliçons de la governança d'altres tecnologies (nuclear, biotecnologia, finances)
- Analitzar estructures d'incentius i problemes de coordinació

**Investigadors representatius:** Allan Dafoe, Helen Toner, investigadors de GovAI, diversos centres d'estudis sobre polítiques públiques.

**Intervencions típiques proposades:** Acords internacionals, marcs regulatoris, estàndards industrials, governança del còmput, [marcs de responsabilitat](/research/020-liability-frameworks/).

## Visió del món 3: L'ús indegut és el risc principal

Un tercer grup se centra menys en què els sistemes facin coses no previstes i més en què els humans utilitzin els sistemes amb finalitats perjudicials.

**Preocupacions clau:**
- Desinformació i manipulació a escala
- Ciberatacs automatitzats
- Assistència en el desenvolupament d'armes biològiques
- Vigilància i opressió
- Concentració del poder

**Compromisos metodològics:**
- Enfocament en capacitats actuals i a curt termini
- Estudi de casos reals d'ús indegut i comportament adversarial
- Èmfasi en controls d'accés, restriccions d'ús i monitorització

**Investigadors representatius:** Molts en les comunitats més àmplies de seguretat i polítiques públiques, alguns investigadors d'OpenAI i Google DeepMind, organitzacions de drets digitals.

**Intervencions típiques proposades:** Polítiques de contingut, [red teaming](/research/050-red-teaming-methodologies/), escalonament d'accés, restriccions per cas d'ús, [avaluacions de capacitats](/research/024-capability-evaluations/).

## Visió del món 4: Els danys actuals mereixen prioritat

Alguns investigadors argumenten que l'enfocament en riscos futurs especulatius desvia l'atenció dels danys presents documentats.

**Preocupacions clau:**
- Biaix algorítmic i discriminació
- Desplaçament laboral i disrupció econòmica
- Erosió de la vigilància i la privacitat
- Costos ambientals del còmput
- Concentració del poder en empreses tecnològiques

**Compromisos metodològics:**
- Estudi empíric dels sistemes desplegats
- Centrar les comunitats afectades en la recerca
- Escepticisme davant les afirmacions de risc especulatiu
- Enfocament en la rendició de comptes dels actors actuals

**Investigadors representatius:** Timnit Gebru, Emily Bender, Meredith Whittaker, investigadors de l'AI Now Institute.

**Intervencions típiques proposades:** [Avaluacions d'impacte algorítmic](/research/046-algorithmic-impact-assessments/), requisits de transparència, proteccions laborals, aplicació de la legislació antimonopoli, marcs de drets civils.

## Per què aquestes visions del món produeixen recerques diferents

Els desacords entre aquests grups no són principalment sobre fets. Són sobre:

**Estimacions de probabilitat.** Com de probable és un risc catastròfic per una IA desalineada? Els investigadors centrats en l'alineament sovint assignen majors probabilitats a escenaris que impliquen sistemes avançats que persegueixen objectius no previstos. Els investigadors centrats en danys actuals són més escèptics davant aquests escenaris i més segurs respecte als danys presents documentats.

**Terminis.** Quan podria arribar la IA transformadora? Terminis més curts afavoreixen l'enfocament en els sistemes actuals i la governança per al desplegament a curt termini. Terminis més llargs podrien justificar una recerca tècnica més fonamental.

**Tractabilitat.** En quins problemes podem realment avançar? Alguns creuen que la recerca tècnica en alineament està progressant; d'altres la veuen com a intractable i prefereixen centrar-se en la governança.

**Impacte contrafactual.** On és més valuós l'esforç addicional? Si l'alineament no està resolt, més recerca en alineament podria ser crítica. Si les institucions determinaran els resultats independentment de les solucions tècniques, la recerca en governança podria importar més.

**Valors i prioritats.** Qui mereix consideració prioritària? Quins danys són moralment més significatius? És el risc existencial categòricament més important que el patiment present, o hauríem de ponderar per probabilitat i magnitud?

## La perspectiva de síntesi

Aquestes visions del món no són mútuament excloents. Una síntesi coherent podria sostenir:

- Els problemes d'alineament són reals i mereixen recerca tècnica
- Els fracassos de governança podrien soscavar fins i tot les bones solucions tècniques
- L'ús indegut permet danys a escala amb els sistemes actuals
- Els danys actuals mereixen atenció independentment dels riscos futurs

El [marc de governança reflexiva](/research/030-manifesto/) intenta aquesta síntesi. Aborda l'alineament mitjançant [restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) i [automonitorització](/research/011-reflexive-misuse-detection/). Aborda la governança mitjançant [protocols IA-regulador](/research/014-ai-regulator-protocol/) i requisits de transparència. Aborda l'ús indegut mitjançant [divulgació gradual](/research/001-proportionality-disclosure/) i [avaluacions de capacitats](/research/024-capability-evaluations/). Aborda els danys actuals aplicant aquests marcs als sistemes desplegats, no només als futurs hipotètics.

La síntesi no és compromís. És el reconeixement que la seguretat de la IA és multidimensional i requereix múltiples enfocaments treballant en concert.

## Avaluar les afirmacions dels experts

Quan els experts discrepen, com haurien els no experts avaluar les seves afirmacions?

**Identificar la visió del món subjacent.** Des de quina perspectiva opera l'expert? Quines suposicions fa sobre terminis, probabilitats i prioritats?

**Considerar l'argument, no només la conclusió.** Dos experts podrien coincidir que "el risc de la IA és greu" mentre signifiquen coses completament diferents. L'argument importa més que el titular.

**Verificar la consistència interna.** La intervenció recomanada per l'expert realment aborda la seva preocupació declarada? Algú preocupat per les dinàmiques de cursa hauria de proposar mecanismes de coordinació, no només recerca tècnica.

**Avaluar els historials.** Quins investigadors han fet prediccions precises? Quins han actualitzat les seves opinions en funció de l'evidència? Els historials són guies imperfectes però no inútils.

**Reconèixer el desacord legítim.** Les persones intel·ligents i informades poden discrepar raonablement sobre estimacions de probabilitat i prioritats de valors. La certesa sobre qüestions disputades sol ser un senyal d'alerta.

## Conclusió

Els desacords del camp de la seguretat de la IA no són evidència de fracàs. Reflecteixen la genuïna dificultat del problema i la diversitat de consideracions rellevants.

Comprendre la taxonomia de visions del món no indica quina visió és correcta. Però ajuda a entendre per què els investigadors arriben a conclusions diferents, quina evidència actualitzaria aquelles conclusions i com avaluar les afirmacions que es troben.

La perspectiva de síntesi suggereix que l'enfocament més robust aborda múltiples tipus de risc simultàniament. La governança reflexiva és un intent d'aquesta síntesi, combinant mecanismes tècnics amb estructures institucionals per crear protecció per capes.

## Recerca relacionada

- [Un manifest d'IA reflexiva](/research/030-manifesto/)
- [Arbitratge regulatori en el desplegament d'IA](/research/008-regulatory-arbitrage/)
- [Marcs de responsabilitat per danys de la IA](/research/020-liability-frameworks/)
- [Metodologies de red teaming](/research/050-red-teaming-methodologies/)
- [Avaluacions d'impacte algorítmic: guia d'implementació](/research/046-algorithmic-impact-assessments/)
