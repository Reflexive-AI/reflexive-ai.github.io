---
title: "La paradoxa de la governança: quan els sistemes d'IA són millors reguladors que els humans"
excerpt: "Els sistemes d'IA poden detectar violacions regulatòries de manera més fiable que els auditors humans. Això genera tensió amb el principi de supervisió humana. Què significa una supervisió significativa quan els humans són el coll d'ampolla?"
date: 2026-02-04
categories:
  - Governance Analysis
  - Reflexivity
tags:
  - oversight
  - human-in-the-loop
  - automation
  - governance
  - paradox
---

## La pregunta incòmoda

Un principi fonamental de la governança de la IA és la supervisió humana. Els humans han de mantenir el control. Els humans han de prendre les decisions finals. Els humans han de ser capaços de comprendre, intervenir i corregir.

Però què passa si els humans són pitjors en la supervisió que els sistemes que se suposa que han de supervisar?

Això no és hipotètic. En la detecció de frau, els sistemes d'IA identifiquen rutinàriament patrons que els analistes humans passen per alt. En la imatge mèdica, els algoritmes detecten càncers que els radiòlegs no veuen. En la revisió de codi, les eines automatitzades troben vulnerabilitats que els desenvolupadors experimentats ometen.

Si els sistemes d'IA poden superar els humans en detecció, monitorització i reconeixement de patrons, què significa això per als marcs de governança construïts sobre la suposició que la supervisió humana proporciona un control de seguretat?

## Els arguments a favor de la supervisió humana

Els arguments a favor de la supervisió humana estan ben establerts.

**Rendició de comptes.** Algú ha de ser responsable quan les coses surten malament. Les màquines no poden retre comptes en cap sentit significatiu. Els humans poden ser acomiadats, multats o empresonats. La rendició de comptes requereix un humà en algun punt de la cadena.

**Legitimitat.** La governança democràtica deriva la seva autoritat del consentiment dels governats. Les decisions que afecten la vida de les persones haurien de ser preses per altres persones, no per sistemes opacs. Fins i tot si un algoritme pren millors decisions de mitjana, hi ha alguna cosa pertorbadora en eliminar el judici humà de les decisions transcendentals.

**Judici contextual.** Els sistemes d'IA optimitzen per a objectius mesurables. Els humans poden reconèixer quan un objectiu és erroni, quan el context canvia el càlcul, quan una excepció està justificada. La supervisió humana proporciona una flexibilitat de la qual manquen els sistemes que segueixen regles.

**Correcció d'errors.** Els sistemes poden fallar de maneres sistemàtiques. Un revisor humà pot detectar errors que queden fora de la distribució d'entrenament del sistema: [el problema de l'excedent de capacitat](/research/009-capability-overhang/) a la inversa, on les limitacions en lloc de les capacitats passen desapercebudes.

Aquests arguments són sòlids. Expliquen per què [la supervisió humana significativa](/research/030-manifesto/) continua sent un principi fonamental de la governança reflexiva.

Però no aborden el problema empíric: què succeeix quan la supervisió humana és menys fiable que el sistema que està verificant?

## El repte empíric

Considerem un escenari. Un sistema d'IA monitoritza transaccions financeres per detectar violacions regulatòries. Marca 1000 transaccions al dia per a la seva revisió. Un oficial de compliment humà revisa cada alerta i decideix si escalar-la.

La IA identifica correctament el 95% de les violacions reals. També genera falsos positius a una taxa del 10%. El revisor humà, processant 1000 casos diaris, avalua correctament el 80% de les transaccions marcades. La fatiga, la distracció i la càrrega cognitiva hi fan estralls.

Quina és la taxa de detecció global? La IA identifica la violació. L'humà llavors té un 80% de probabilitat de processar correctament aquella identificació. Així que 95% x 80% = 76% de les violacions es detecten finalment. L'humà al bucle ha reduït el rendiment del sistema.

Aquest no és un exemple artificial. La recerca sobre el rendiment humà en tasques de monitorització troba consistentment degradació de l'atenció, biaix d'automatització (confiança excessiva en el sistema) i fatiga decisional. L'[economia de l'atenció](/research/044-civil-society-role/) modela no només el discurs públic sinó la capacitat cognitiva humana.

Si la supervisió humana disminueix la fiabilitat global del sistema, la supervisió no està complint la seva funció prevista. És teatre de governança.

## Reformular la supervisió significativa

La solució no és eliminar els humans de la governança. Els arguments de rendició de comptes, legitimitat i flexibilitat continuen sent vàlids. La solució és reformular què significa "supervisió significativa".

**De la revisió a l'auditoria.** En lloc de revisar cada decisió, els humans poden auditar mostres. La validació estadística del rendiment del sistema pot proporcionar una supervisió més fiable que la revisió exhaustiva però superficial. La pregunta passa de "un humà ha aprovat aquesta decisió?" a "la presa de decisions del sistema ha estat validada per humans?"

**Dels casos individuals al comportament del sistema.** Els humans són dolents en les microdecisions consistents sota pressió temporal. Són millors avaluant patrons, establint polítiques i jutjant el comportament global del sistema. La supervisió hauria d'aprofitar les fortaleses humanes en lloc d'exigir tasques en què els humans rendeixen de manera deficient.

**D'atrapar-ho tot a la gestió d'excepcions.** Els sistemes d'IA poden gestionar la majoria dels casos on el seu rendiment és fiable. Els humans es poden concentrar en els casos límit, les anomalies i les situacions que queden fora de la competència del sistema. Aquest és el principi darrere de [quan la IA hauria de rebutjar](/research/025-when-ai-should-refuse/): sistemes que reconeixen les seves pròpies limitacions i escalen de manera adequada.

**De l'aprovació a la rendició de comptes.** Un humà no necessita aprovar cada decisió per ser responsable del procés de presa de decisions. Un gerent és responsable del rendiment del seu equip sense revisar personalment cada acció. El mateix principi es pot aplicar a la supervisió de sistemes d'IA.

## La resposta reflexiva

La governança reflexiva ofereix una solució parcial a aquesta paradoxa.

Si els sistemes d'IA poden participar en la seva pròpia supervisió, no estem limitats a la dicotomia de "l'humà revisa" enfront de "sense supervisió". Els sistemes poden:

- Monitoritzar el seu propi comportament cercant anomalies i assenyalar desviacions per a l'atenció humana
- Explicar les seves decisions en termes que els humans puguin avaluar
- Rastrejar la seva pròpia confiança i incertesa, escalant els casos de baixa confiança
- Mantenir registres d'auditoria que permetin la revisió posterior

Això no és que la IA substitueixi la supervisió humana. És la IA donant suport a la supervisió humana en gestionar el problema de volum que fa poc fiable la revisió humana.

[La detecció reflexiva d'usos indeguts](/research/011-reflexive-misuse-detection/) i [els protocols IA-regulador](/research/014-ai-regulator-protocol/) exploren aquests mecanismes en detall. La idea clau és que el paper humà passa de la revisió línia per línia a establir paràmetres, validar el comportament del sistema i gestionar les escalacions.

## El problema de la legitimitat

Fins i tot si la supervisió reflexiva és més fiable, la preocupació per la legitimitat persisteix. S'haurien de prendre decisions transcendentals sense judici humà sobre cada cas?

Aquesta pregunta no té una resposta universal. Depèn del context.

Per a algunes decisions, el judici humà individual és essencial independentment de la fiabilitat. Sentències penals. Eleccions de tractament mèdic. Custòdia de menors. Decisions polítiques. Aquí, el valor procedimental de la presa de decisions humana pot superar el valor de resultat de decisions automatitzades més fiables.

Per a altres decisions, la fiabilitat pot ser dominant. Detecció de frau. Control de compliment fiscal. Filtratge de correu brossa. Monitorització de seguretat. Aquí, l'objectiu és la identificació precisa, i el procés és instrumental per a aquell objectiu.

La paradoxa de la governança no implica que totes les decisions hagin de ser automatitzades. Implica que el requisit generalitzat que "un humà ha de revisar cada cas" no sempre és la millor manera d'assolir els objectius de supervisió.

## Implicacions pràctiques

Què significa això per a la governança de la IA a la pràctica?

**Avaluar el rendiment humà real.** Abans d'exigir revisió humana, avaluar si els humans poden realment realitzar aquesta revisió de manera fiable. Quina és la taxa d'error? Quina és la degradació de l'atenció al llarg del temps? Com es compara el rendiment amb alternatives automatitzades?

**Dissenyar per a les fortaleses humanes.** Estructurar la supervisió per aprofitar el que els humans fan bé: judici polític, gestió d'excepcions, avaluació del context. No forçar els humans a realitzar tasques en què sistemàticament rendeixen pitjor que les màquines.

**Mesurar l'eficàcia de la supervisió.** "Supervisió humana" no hauria de ser una casella de verificació. Hauria de ser una propietat mesurable. La supervisió realment millora els resultats? Si no, no és supervisió significativa.

**Considerar enfocaments escalonats.** Les decisions d'alt risc poden justificar una participació humana intensiva malgrat els costos de fiabilitat. Les decisions de baix risc i alt volum es poden gestionar millor amb auditoria estadística. La [proporcionalitat](/research/001-proportionality-disclosure/) s'aplica tant a la supervisió com a la divulgació.

**Invertir en infraestructura de supervisió.** Si la supervisió humana és important, invertir a fer-la eficaç. Formació. Disseny d'interfícies. Gestió de la càrrega de treball. Estructures de rendició de comptes. Tractar la supervisió com una funció seriosa en lloc d'una ocurrència tardana.

## Conclusió

La paradoxa de la governança és incòmoda perquè desafia una suposició reconfortant: que la supervisió humana és inherentment protectora. De vegades ho és. De vegades no.

Reconèixer això no significa abandonar la supervisió humana. Significa dissenyar sistemes de supervisió que realment funcionin en lloc de sistemes que satisfacin requisits formals mentre fracassen a assolir el seu propòsit.

Els sistemes d'IA que són millors en certes tasques de monitorització que els humans no són una amenaça per a la governança humana. Són una eina per a ella, si es dissenyen adequadament. El marc de governança reflexiva ofereix un camí possible: sistemes d'IA que donen suport a la supervisió humana en lloc de substituir-la, que escalen de manera adequada en lloc de fallar silenciosament, que s'expliquen en lloc d'operar de manera opaca.

L'objectiu no és substituir el judici humà. És garantir que el judici humà s'apliqui on importa, amb la informació i el suport necessaris per ser eficaç.

## Recerca relacionada

- [Un manifest d'IA reflexiva](/research/030-manifesto/)
- [Quan la IA hauria de rebutjar: un marc](/research/025-when-ai-should-refuse/)
- [Poden els sistemes d'IA detectar el seu propi ús indegut?](/research/011-reflexive-misuse-detection/)
- [Un protocol per a la comunicació IA-regulador](/research/014-ai-regulator-protocol/)
- [Proporcionalitat en la divulgació de models](/research/001-proportionality-disclosure/)
