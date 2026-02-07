---
title: "Sistemes d'IA que expliquen les seves restriccions"
excerpt: "Quan la IA rebutja o limita el seu comportament, pot explicar per què? Aquesta anàlisi examina l'explicabilitat de les restriccions: el seu valor per a la governança, els reptes tècnics i els enfocaments d'implementació."
date: 2026-01-08
categories:
  - Technical Artifact
  - Reflexivity
tags:
  - transparency
  - constraints
  - agents
  - machine-readable
  - ethics
---

## La bretxa d'explicabilitat

Un sistema d'IA rebutja una sol·licitud. L'usuari pregunta per què. El sistema respon: "No puc ajudar amb això."

Aquesta resposta no proporciona cap informació. L'usuari no sap si la sol·licitud va ser malinterpretada, si va activar un filtre de seguretat, si la restricció és absoluta o contextual, o quines alternatives podrien ser acceptables.

Aquesta opacitat soscava la confiança i la rendició de comptes. Els usuaris se senten frustrats per limitacions inexplicades. Els investigadors no poden avaluar si les restriccions són apropiades. Els reguladors no poden verificar que els sistemes operin dins dels límits esperats. La bretxa entre el que el sistema fa i el que pot explicar constitueix una vulnerabilitat de governança.

L'explicabilitat de les restriccions, és a dir, la capacitat dels sistemes d'IA per articular per què limiten el seu comportament, aborda aquesta bretxa. Aquesta anàlisi examina per què importa, què la fa difícil i com podria assolir-se.

## Per què importa l'explicació de les restriccions

Diverses funcions de governança depenen que els sistemes d'IA puguin explicar les seves restriccions.

### Confiança de l'usuari

Els usuaris accepten les limitacions amb més facilitat quan les comprenen. Un rebuig inexplicat es percep com a arbitrari. Un rebuig explicat, com ara "No puc proporcionar instruccions detallades de síntesi perquè això podria facilitar danys", ofereix un context que permet a l'usuari donar sentit a la limitació.

Això és rellevant per a l'adopció del sistema. Els usuaris que experimenten restriccions inexplicades, inconsistents o aparentment arbitràries perdran la confiança en el sistema i cercaran alternatives, potencialment menys segures.

### Rendició de comptes

La supervisió externa requereix comprendre què fan els sistemes i per què. Si els sistemes d'IA no poden explicar les seves restriccions, els reguladors i auditors han de dependre exclusivament de la documentació del desenvolupador, que pot ser incompleta, desactualitzada o inexacta.

Els sistemes que poden explicar les seves pròpies restriccions permeten una forma de transparència en temps real. En lloc d'auditar documentació estàtica, els supervisors poden consultar directament els sistemes sobre les seves limitacions.

### Depuració i millora

Quan les restriccions són incorrectes, ja sigui massa restrictives o insuficients, el primer pas per corregir-les és comprendre-les. Un sistema que pot explicar per què està rebutjant ajuda els desenvolupadors a identificar activacions errònies, casos omesos i interaccions no previstes.

Això es connecta amb els mecanismes de notificació d'incidents i aprenentatge que vam explorar a [lliçons de l'aviació](/research/021-aviation-lessons/). Aprendre dels problemes requereix comprendre el que va passar; l'explicabilitat possibilita aquesta comprensió.

### Contestació

Els usuaris que creuen que han estat restringits erròniament necessiten una base per apel·lar. Si el sistema pot articular per què s'aplica una restricció, l'usuari pot respondre amb context rellevant: "Això és per a recerca acadèmica", "Tinc les credencials apropiades", "Heu malinterpretat la sol·licitud."

Sense explicabilitat, la contestació és impossible. L'usuari només pot reformular i tornar-ho a intentar, esperant evitar l'activador desconegut.

## Reptes tècnics

Explicar les restriccions és més difícil del que podria semblar.

### Opacitat del comportament entrenat

Moltes restriccions s'implementen mitjançant RLHF, un entrenament que modela el comportament sense regles explícites. El model aprèn a rebutjar certes sol·licituds basant-se en patrons de retroalimentació durant l'entrenament.

Aquestes restriccions no s'emmagatzemen com a regles explícites que es puguin citar. El model "sap" que ha de rebutjar sense tenir una raó articulable. Explicar això requereix reconstruir la lògica implícita, que pot no tenir una formulació verbal clara.

Aquesta és una instància específica del repte general d'interpretabilitat en l'aprenentatge automàtic. Podem observar que un model es comporta d'una certa manera sense comprendre per què, internament, ho fa així.

### Múltiples mecanismes en interacció

Els sistemes reals tenen múltiples mecanismes de restricció: comportament entrenat, filtres codificats, classificadors de contingut, avaluacions de context. Un rebuig pot resultar d'un d'aquests, de diversos en combinació o de la seva interacció.

Una explicació precisa requereix saber quin mecanisme va activar el rebuig i articular-ne la lògica, la qual cosa pot no ser trivial quan els mecanismes interactuen.

### Preocupacions d'elusió

Explicar completament les restriccions pot ajudar els adversaris a evadir-les. Si el sistema explica "Estic rebutjant perquè la vostra sol·licitud coincideix amb el patró X", els usuaris poden modificar les seves sol·licituds per evitar el patró mentre preserven la intenció maliciosa.

Hi ha una tensió entre explicabilitat i seguretat. Les prohibicions de Nivell 1, els límits absoluts que vam discutir a [quan la IA hauria de rebutjar](/research/025-when-ai-should-refuse/), poden requerir menys especificitat per evitar proporcionar un full de ruta d'elusió.

### Precisió i veracitat

Explicar les restriccions només és valuós si les explicacions són precises. Un sistema que proporciona explicacions segures però incorrectes confon els usuaris i soscava la confiança.

Els models actuals poden generar explicacions plausibles sobre el seu comportament que no reflecteixen els mecanismes reals. Aquest és el problema de l'"al·lucinació" aplicat a la introspecció: el sistema explica una història coherent que pot no ser certa.

## Enfocaments d'implementació

Diversos enfocaments poden habilitar l'explicabilitat de les restriccions.

### Esquemes de restriccions explícits

En lloc de dependre exclusivament del comportament entrenat, les restriccions poden representar-se explícitament en formats llegibles per màquina. El nostre treball sobre [esquemes de restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) proposa exactament això.

Quan les restriccions són explícites, l'explicació és directa: citar la restricció que s'aplica. "Estic rebutjant aquesta sol·licitud perquè cau sota la restricció C-004: Informació de síntesi per a patògens controlats. Aquesta és una prohibició de Nivell 1 que s'aplica independentment del context."

Els esquemes explícits no reemplacen el comportament entrenat, sinó que el complementen. Proporcionen una veritat de referència contra la qual les explicacions poden validar-se.

### Etiquetatge de restriccions

Quan un mecanisme de restricció s'activa, pot etiquetar el rebuig amb metadades estructurades: quina restricció, amb quina confiança, en quina categoria. Aquesta etiqueta es converteix en la base de l'explicació.

Fins i tot si el mecanisme en si és opac (un classificador que detecta contingut nociu), l'etiqueta pot dissenyar-se per a l'explicabilitat: "Aquesta sol·licitud ha estat marcada pel nostre classificador de contingut nociu com a Categoria 3 (contingut violent) amb un 94% de confiança."

### Transparència de la cadena de raonament

Per a judicis complexos i contextuals, les restriccions de Nivell 2 que depenen d'avaluar la intenció de l'usuari i el context de desplegament, el sistema pot exposar la seva cadena de raonament. "He avaluat la vostra sol·licitud de la manera següent: el tema és d'ús dual (recerca de patògens), no es detecten senyals de credencials, el context de desplegament és públic general. Basant-me en això, estic aplicant restriccions d'accés a recerca."

Aquest enfocament proporciona visibilitat sobre el procés de decisió, permetent als usuaris abordar malentesos ("Estic accedint a això a través del portal de recerca de la meva universitat, per tant les credencials haurien de detectar-se").

### Comunicació de la incertesa

Quan el sistema no està segur de si s'aplica una restricció, hauria de dir-ho. "No estic segur de si aquesta sol·licitud cau sota les nostres restriccions de contingut violent. Estic declinant perquè la meva incertesa s'inclina cap a la precaució, però podeu sol·licitar una revisió humana."

La comunicació honesta de la incertesa és en si mateixa una forma d'explicació. Distingeix els rebuigs segurs dels cautelosos i proporciona un context apropiat per a l'apel·lació.

## Connexió amb la governança reflexiva

L'explicabilitat de les restriccions és un component central de la governança reflexiva. Un sistema que pot articular les seves pròpies limitacions participa en el discurs de governança de maneres que un sistema opac no pot.

Això es connecta amb diversos fils de la recerca de la Iniciativa Reflexive AI:

- [L'esquema de restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) proporciona la capa de representació per a restriccions explícites i explicables
- [L'etiquetatge de procedència de sortides](/research/012-output-provenance/) inclou metadades que podrien abastar informació relacionada amb les restriccions
- [El protocol per a la comunicació entre IA i reguladors](/research/014-ai-regulator-protocol/) preveu sistemes que poden explicar el seu comportament als organismes de supervisió
- [Els límits de l'autorestricció](/research/013-limits-of-self-constraint/) reconeix que l'explicació en si té límits: un sistema pot no tenir accés complet als seus propis impulsors de comportament

En conjunt, aquests formen una visió de sistemes d'IA que no només estan restringits, sinó articuladament restringits, capaços de participar en discussions sobre les seves pròpies limitacions.

## Recomanacions de disseny

A partir d'aquesta anàlisi, sorgeixen diverses recomanacions de disseny.

**Invertir en la representació explícita de restriccions.** Les restriccions que existeixen només com a comportament entrenat són difícils d'explicar. Avançar cap a esquemes de restriccions explícits i consultables permet una explicació fiable.

**Dissenyar explicacions per a diferents audiències.** Els usuaris finals, els desenvolupadors i els reguladors necessiten diferents nivells de detall. Els sistemes d'explicació haurien de proporcionar la profunditat apropiada per a cadascun.

**Validar les explicacions contra els mecanismes.** Una explicació que no coincideix amb el mecanisme de restricció real és pitjor que cap explicació. Les proves haurien de verificar que les explicacions reflecteixen amb precisió per què es produeixen els rebuigs.

**Equilibrar especificitat amb seguretat.** Les restriccions de Nivell 1 poden requerir explicacions genèriques per evitar proporcionar orientació d'elusió. Els Nivells 2 i 3 poden ser més específics.

**Permetre el seguiment.** Una bona explicació és interactiva. Els usuaris haurien de poder fer preguntes aclaridores, proporcionar context addicional i rebre explicacions actualitzades basades en nova informació.

**Registrar i aprendre de les explicacions.** Les interaccions d'explicació generen dades sobre on les restriccions són confuses, on els usos legítims estan sent bloquejats i on es necessita claredat addicional.

## Conclusió

Els sistemes d'IA que poden explicar les seves restriccions són més fiables, més responsables i més millorables que aquells que no poden. Aquesta capacitat no és simplement una característica d'experiència d'usuari, sinó una infraestructura de governança.

Els reptes tècnics són reals però abordables. Passar del comportament entrenat opac cap a esquemes de restriccions explícits, etiquetar els rebuigs amb metadades estructurades i exposar el raonament per a judicis contextuals contribueix a l'explicabilitat.

A mesura que els sistemes d'IA es tornen més potents i més integrats en decisions transcendents, la seva capacitat per explicar-se es torna corresponentment més important. L'explicabilitat de les restriccions és un component necessari dels sistemes d'IA que els humans poden supervisar de manera significativa.

## Recerca relacionada

- [Un esquema de restriccions llegible per màquina](/research/003-machine-readable-constraint-schema/)
- [Quan la IA hauria de rebutjar: un marc](/research/025-when-ai-should-refuse/)
- [Etiquetatge de procedència de sortides](/research/012-output-provenance/)
- [Un protocol per a la comunicació entre IA i reguladors](/research/014-ai-regulator-protocol/)
- [Els límits de l'autorestricció](/research/013-limits-of-self-constraint/)
