---
title: "Comunicació de la incertesa en les sortides d'IA"
excerpt: "Els sistemes d'IA sovint presenten sortides amb confiança quan existeix una incertesa genuïna. Aquesta anàlisi examina com la IA pot comunicar millor la seva incertesa i per què la governança ho requereix."
date: 2026-01-09
categories:
  - Technical Artifact
  - Reflexivity
tags:
  - transparency
  - uncertainty
  - agents
  - trust
  - reporting
---

## El problema de la confiança

Els sistemes d'IA produeixen sortides amb una fluïdesa notable. Un model de llenguatge gran pot respondre preguntes complexes, explicar temes matisos i generar anàlisis detallades, tot plegat sense cap indicació de si el sistema està segur, insegur o simplement confabulant.

Aquesta uniformitat de presentació és perillosa. Una resposta en la qual el model té alta confiança sembla idèntica a una que essencialment ha inventat. Els usuaris no poden distingir la informació fiable de la fabricació. L'estat epistèmic del sistema, el que sap i com de bé ho sap, queda ocult darrere una superfície llisa de prosa segura.

Per a la governança de la IA, aquest és un problema fonamental. Els sistemes que no poden comunicar la seva incertesa no poden ser objecte de confiança apropiada. Els usuaris prenen decisions basades en les sortides de la IA sense saber com de fiables són aquestes sortides. I els sistemes que no rastegen la seva pròpia incertesa no poden participar de manera significativa en la seva pròpia governança.

## Per què importa la comunicació de la incertesa

Diverses consideracions de governança requereixen que els sistemes d'IA comuniquin la incertesa.

### Confiança calibrada

Diferents sortides mereixen diferents nivells de confiança. Un model que respon a una pregunta fàctica ben establerta basant-se en dades d'entrenament clares mereix més confiança que un que raona sobre situacions noves o fa prediccions més enllà de la seva distribució d'entrenament.

Els usuaris no poden calibrar la seva confiança sense informació sobre la incertesa. O confien massa (tractant totes les sortides com a fiables) o confien massa poc (tractant totes les sortides com a sospitoses). Cap de les dues respostes és apropiada. La confiança calibrada requereix saber quan confiar i quan verificar.

### Decisions d'alt risc

Quan les sortides de la IA informen decisions transcendents, com diagnòstics mèdics, judicis legals o recomanacions de polítiques, els riscos dels errors són alts. Els responsables de les decisions necessiten saber no només què pensa la IA, sinó com de segura n'està.

Un diagnòstic amb un 95% de confiança justifica una acció diferent d'un amb un 50% de confiança. Però si tots dos es presenten de manera idèntica, els responsables de les decisions no poden aplicar la cautela apropiada.

### Detecció de fallades

Els sistemes d'IA fallen de maneres que no sempre són òbvies. Les al·lucinacions, el desplaçament distribucional i la manipulació adversària poden produir sortides que semblen normals però no són fiables.

Els senyals d'incertesa poden marcar fallades potencials. Els patrons d'incertesa inusuals, com alta incertesa en preguntes suposadament fàcils, o baixa incertesa en preguntes fora de les dades d'entrenament, poden indicar problemes que val la pena investigar.

### Governança reflexiva

Perquè els sistemes d'IA participin en la seva pròpia governança, han de tenir alguna representació de la seva pròpia fiabilitat. Un sistema que no modela la seva incertesa no pot informar amb precisió quan està operant fora de la seva competència.

Això es connecta amb les capacitats d'automonitoratge que vam explorar a [poden els sistemes d'IA detectar el seu propi ús indegut?](/research/011-reflexive-misuse-detection/). La consciència de la incertesa és una precondició per als sistemes que monitoren el seu propi comportament.

## Enfocaments tècnics

Diversos enfocaments poden habilitar la comunicació de la incertesa.

### Sortides probabilístiques

Alguns models poden produir distribucions de probabilitat en lloc d'estimacions puntuals. En lloc de dir "la resposta és X", el model diu "la probabilitat de X és 0,8, de Y és 0,15 i de Z és 0,05."

Això funciona bé per a tasques de classificació i preguntes tancades. Per a la generació oberta, és més difícil; no existeix una distribució de probabilitat natural sobre totes les possibles sortides de text.

Els mètodes de conjunt, que executen múltiples models o múltiples mostres i examinen la concordança, poden aproximar la incertesa fins i tot per a models generatius. Si 8 de 10 mostres coincideixen en una resposta, això suggereix més confiança que si totes difereixen.

### Puntuacions de confiança

Els models poden entrenar-se o instruir-se per produir estimacions explícites de confiança juntament amb les seves sortides. "Tinc un 90% de confiança en aquesta resposta" o "Confiança baixa: si us plau, verifiqueu."

El repte és la calibració. La confiança autoinformada ha de correlacionar-se amb la precisió real per ser útil. Els models poden entrenar-se per a una millor calibració, però assolir una calibració fiable, especialment en consultes fora de distribució, continua sent difícil.

### Marcadors epistèmics

El llenguatge natural en si conté marcadors d'incertesa: "probablement", "sembla que", "no n'estic segur, però", "les fonts suggereixen". Entrenar models per usar aquests marcadors apropiadament és una forma de comunicació de la incertesa.

Aquest enfocament és més natural per als models de llenguatge i no requereix canvis arquitectònics. Però també és menys precís: "probablement" podria significar 60% o 95%, i depèn d'un entrenament que recompensi la moderació apropiada.

### Atribució de fonts

En lloc de comunicar la incertesa directament, els models poden citar fonts, assenyalant d'on prové la informació. Els usuaris poden llavors avaluar la fiabilitat basant-se en la qualitat de la font.

Això desplaça l'avaluació de la incertesa als usuaris, la qual cosa pot o no ser apropiada. Funciona bé per a afirmacions fàctiques amb fonts citables, però menys bé per a síntesi, raonament o afirmacions sense fonts clares.

### Metadades d'incertesa

Les sortides poden etiquetar-se amb metadades d'incertesa estructurades, no només el contingut, sinó informació sobre com de segur està el sistema, quin tipus d'incertesa s'aplica i quins factors hi contribueixen.

Això es connecta amb el nostre treball sobre [etiquetatge de procedència de sortides](/research/012-output-provenance/). Així com les metadades de procedència rastegen d'on prové el contingut, les metadades d'incertesa rastegen com de fiable és.

## Tipus d'incertesa

No tota la incertesa és igual. Distingir tipus permet una comunicació més informativa.

### Incertesa aleatòria

Aleatorietat inherent en el fenomen que es modela. Fins i tot amb coneixement perfecte, els resultats són estocàstics. "La moneda té un 50% de probabilitat de caure de cara."

Aquesta incertesa no pot reduir-se amb més dades o millors models. És una propietat del món, no una limitació del sistema.

### Incertesa epistèmica

Incertesa deguda al coneixement limitat. "No tinc prou informació per respondre això amb confiança." Podria reduir-se amb més dades d'entrenament, més capacitat computacional o accés a fonts rellevants.

La incertesa epistèmica assenyala que el sistema està operant prop dels límits del seu coneixement; les sortides podrien no ser fiables i la verificació està justificada.

### Incertesa del model

Incertesa sobre si l'estructura del model és apropiada per a la tasca. Un model de llenguatge al qual se li demana predir el plegament de proteïnes pot ser fonamentalment inadequat per a la tasca, independentment de les seves dades d'entrenament.

Aquesta és una forma d'incertesa epistèmica però mereix un tractament separat; suggereix no només manca de coneixement sinó manca de capacitat apropiada.

### Desplaçament distribucional

Incertesa que sorgeix quan les condicions de desplegament difereixen de les d'entrenament. Un model entrenat amb text formal pot estar insegur davant l'argot. Un model entrenat amb dades de 2022 pot estar insegur davant esdeveniments de 2026.

Detectar i comunicar el desplaçament distribucional és particularment important perquè sovint es correlaciona amb una fiabilitat degradada.

## Integració en la governança

La comunicació de la incertesa hauria d'integrar-se en els mecanismes de governança.

### Llindars i activadors

Els marcs de governança poden especificar nivells mínims de confiança per a diferents tipus de sortides. Les aplicacions mèdiques podrien requerir un 95% de confiança; l'assistència casual podria tolerar un 70%.

Les sortides per sota del llindar activen accions addicionals: revisió humana, advertiments als usuaris o rebuig a proporcionar la sortida. Això fa que la incertesa sigui accionable.

### Auditoria i monitoratge

Els senyals d'incertesa proporcionen dades per al monitoratge continu. Els patrons d'incertesa inusuals poden indicar problemes: desplaçament distribucional en el desplegament, degradació de la qualitat del model o intents de manipulació.

Això es connecta amb l'avaluació contínua que vam discutir a [avaluacions de capacitats perilloses](/research/024-capability-evaluations/); el monitoratge de la incertesa és una forma d'avaluació contínua de capacitats.

### Interfícies d'usuari

La incertesa ha de comunicar-se de maneres que els usuaris puguin comprendre. Els valors de probabilitat crus poden no ser informatius. La codificació per colors, les etiquetes verbals o els indicadors visuals poden ser més accessibles.

L'objectiu no és aclaparar els usuaris amb informació sobre la incertesa, sinó ajudar-los a calibrar la seva resposta apropiadament. "Aquesta resposta està verificada a partir de fonts fiables" enfront de "Aquesta és la meva millor estimació basada en informació limitada."

### Documentació

Les capacitats de comunicació de la incertesa haurien de documentar-se com a part de la divulgació del model. Els usuaris necessiten saber no només què pot fer un model, sinó com de bé sap el que sap.

Aquesta és una extensió del marc de [divulgació proporcional](/research/001-proportionality-disclosure/): la divulgació hauria d'incloure informació sobre la fiabilitat, no només sobre la capacitat.

## Reptes i limitacions

La comunicació de la incertesa afronta diversos reptes.

### Dificultat de calibració

Produir estimacions d'incertesa ben calibrades és tècnicament difícil, especialment per a models de llenguatge i tasques obertes. Els models actuals sovint expressen més confiança de la justificada.

Una mala calibració és pitjor que cap calibració: els usuaris que confien en puntuacions de confiança que no es correlacionen amb la precisió estan sent activament enganyats.

### Cost computacional

Moltes tècniques d'estimació de la incertesa (conjunts, mostreig múltiple) augmenten significativament el cost computacional. Per a desplegaments amb recursos limitats, això pot ser prohibitiu.

Es necessita recerca sobre l'estimació eficient de la incertesa per fer això pràctic a escala.

### Comprensió de l'usuari

Els usuaris poden no comprendre correctament la probabilitat i la incertesa. Proporcionar un interval de confiança del 90% pot no transmetre el significat apropiat a usuaris sense formació estadística.

El disseny d'interfícies ha de fer de pont entre les representacions tècniques de la incertesa i la comprensió de l'usuari.

### Explotació adversària

Si els adversaris poden observar els senyals d'incertesa, poden usar-los per identificar debilitats del sistema, concentrant els atacs en àrees d'alta incertesa.

Això crea una tensió entre transparència i seguretat, similar a la que vam discutir a [sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints/).

## Conclusió

Els sistemes d'IA que comuniquen la seva incertesa permeten als usuaris calibrar la confiança, donen suport a la presa de decisions d'alt risc i proporcionen senyals per a la detecció de fallades. Aquesta capacitat és essencial per a una governança de la IA que prengui seriosament la fiabilitat.

Existeixen enfocaments tècnics, com les sortides probabilístiques, les puntuacions de confiança, els marcadors epistèmics i l'etiquetatge de metadades, tot i que la calibració continua sent un repte. Diferents tipus d'incertesa requereixen diferent tractament i comunicació.

L'objectiu no és una quantificació perfecta de la incertesa (probablement impossible), sinó una comunicació útil de la incertesa, que ajudi usuaris i sistemes a prendre millors decisions en saber quan les sortides són fiables i quan justifiquen cautela.

Els sistemes d'IA que operen com si sempre estiguessin segurs són enganyosos. Els sistemes d'IA que comuniquen la seva incertesa honestament són dignes de confiança. Aquesta distinció importa per a la governança.

## Recerca relacionada

- [Poden els sistemes d'IA detectar el seu propi ús indegut?](/research/011-reflexive-misuse-detection/)
- [Etiquetatge de procedència de sortides](/research/012-output-provenance/)
- [Proporcionalitat en la divulgació de models](/research/001-proportionality-disclosure/)
- [Avaluacions de capacitats perilloses](/research/024-capability-evaluations/)
- [Sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints/)
