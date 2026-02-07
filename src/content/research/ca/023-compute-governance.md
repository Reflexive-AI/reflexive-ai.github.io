---
title: "Governanca del comput: promeses i limits"
excerpt: "El comput es un dels pocs inputs mesurables del desenvolupament d'IA. Governar a la capa de comput es atractiu pero afronta reptes significatius. Una avaluacio honesta."
date: 2026-01-05
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - compute
  - governance
  - regulation
  - safety
  - enforcement
---

## L'atractiu del comput

Dels tres inputs de la IA moderna --dades, algoritmes i comput-- el comput es el mes mesurable. Les execucions d'entrenament es poden quantificar en FLOPs. Els clusters de GPU es poden comptar. El consum d'energia es pot monitoritzar.

Aquesta mesurabilitat fa del comput un objectiu atractiu per a la governanca. En lloc d'intentar regular capacitats intangibles o comportaments ambigus, es regulen els recursos fisics que els habiliten. Saber on s'estan realitzant grans execucions d'entrenament. Requerir notificacio per sobre de certs llindars. Potser fins i tot llicenciar l'acces al comput d'escala frontera.

L'atractiu es comprensible. La governanca de la IA lluita amb la dificultat de mesurar i verificar capacitats --un repte que vam explorar a [el problema de l'excedent de capacitats](/research/009-capability-overhang/). El comput ofereix quelcom de que la governanca generalment manca: un input concret i quantificable.

Pero la governanca del comput tambe te limitacions significatives. Aquesta analisi examina tant la promesa com els limits.

## Que pot fer la governanca del comput

La governanca del comput pot servir a diversos proposits legítims.

### Visibilitat

Els governs actualment tenen una perspectiva limitada sobre qui esta entrenant grans models d'IA. El monitoratge del comput proporciona visibilitat. Els requisits de registrar grans execucions d'entrenament, o de notificar els reguladors quan l'us de comput excedeix els llindars, creen consciencia de l'activitat de desenvolupament frontera.

Aquesta visibilitat te valor intrinsec. La governanca es impossible si els reguladors no saben que esta passant. Fins i tot si el monitoratge del comput no restringeix el desenvolupament, habilita altres mecanismes de governanca en revelar qui esta desenvolupant que.

### Punts de control

La cadena de subministrament de comput avancat per a IA esta concentrada. Nomes unes poques empreses fabriquen GPU d'avantguarda. Nomes uns pocs proveïdors de nuvol ofereixen infraestructura d'IA a gran escala. Aquests punts de control permeten intervencions de governanca que serien impossibles per a recursos mes distribuits.

Els controls d'exportacio de xips avancats ja son un exemple de governanca del comput. En restringir els fluxos de xips a certs paisos o entitats, els governs poden influir en qui te acces als recursos de desenvolupament d'IA frontera.

### Mecanisme d'aplicacio

Els requisits de comput creen una palanca d'aplicacio. Si es violen altres regulacions d'IA, l'acces al comput pot restringir-se. Es pot requerir que els proveïdors de nuvol verifiquin que els clients compleixin els requisits regulatoris abans de proporcionar recursos d'escala frontera.

Aixo reflecteix com les regulacions financeres utilitzen l'acces bancari com a mecanisme d'aplicacio. Les entitats que violen les regles perden acces al sistema financer. De manera similar, les entitats que violin els requisits de seguretat de la IA podrien perdre acces al comput.

### Activadors de llindar

Els llindars de comput poden activar requisits addicionals de supervisio. La Llei d'IA de la UE, per exemple, utilitza el comput d'entrenament (juntament amb altres criteris) per identificar models de base que requereixen obligacions mes exigents.

Aquesta es una forma del principi de proporcionalitat que vam explorar a [proporcionalitat en la divulgacio de models](/research/001-proportionality-disclosure/) --els sistemes mes capacos afronten una governanca mes intensiva.

## Els limits

La governanca del comput es atractiva pero no suficient. Diverses limitacions restringeixen el que pot assolir.

### El comput es un proxy

El comput es un proxy de la capacitat, no la capacitat en si. La correlacio entre comput i capacitat es imperfecta i canviant.

Les millores algoritmiques poden assolir les mateixes capacitats amb menys comput. L'ajust fi i l'scaffolding poden amplificar les capacitats del model base sense comput addicional d'entrenament. El comput en temps d'inferencia pot desbloquejar capacitats que l'entrenament pur no va produir.

Un regim de governanca calibrat a llindars de comput d'entrenament pot passar per alt capacitats perilloses assolides mitjancant innovacio algoritmica o arquitectures noves. Pitjor encara, pot crear incentius per exactament aquests enfocaments eficients en comput, empenyent el desenvolupament en direccions que son mes dificils de monitoritzar.

### El problema dels llindars

Qualsevol llindar basat en comput sera arbitrari. Per que 10^25 FLOPs i no 10^24 o 10^26? La relacio entre comput i risc no es una funcio escalonada amb un punt de ruptura clar.

Llindars massa baixos capturen molts sistemes de baix risc, creant carrega de compliment sense benefici de seguretat. Llindars massa alts deixen passar sistemes perillosos que cauen just per sota. I qualsevol llindar fix queda obsolet a mesura que l'eficiencia algoritmica millora.

### Entrenament distribuit

Les grans execucions d'entrenament han requerit historicament comput concentrat --clusters massius de GPU en ubicacions uniques. Aquesta concentracio permet el monitoratge.

Pero les tecniques d'entrenament distribuit estan millorant. Entrenar a traves de multiples centres de dades, o fins i tot a traves de moltes instal·lacions mes petites, es torna mes factible. Si l'entrenament pot distribuir-se prou, el monitoratge basat en la concentracio es torna ineficac.

La tendencia cap a enfocaments distribuits pot estar impulsada per consideracions d'eficiencia en lloc d'evasio de la governanca, pero l'efecte sobre la governabilitat es el mateix.

### Manipulacio i evasio

Les entitats que busquen evadir la governanca basada en comput tenen opcions.

Multiples execucions d'entrenament mes petites que individualment cauen per sota dels llindars es poden combinar de diverses maneres. Els enfocaments d'ajust fi es poden construir sobre models base disponibles publicament, amb el pas d'ajust fi caient per sota dels llindars fins i tot si la capacitat efectiva es alta. L'entrenament es pot traslladar a jurisdiccions amb menys supervisio.

Part de l'evasio es tecnicament dificil. Altra es trivial. La governanca que depen en gran mesura dels llindars de comput convida a la manipulacio per part d'actors sofisticats.

### Nuvol versus instal·lacions propies

La governanca del comput es molt mes facil per a l'entrenament basat en el nuvol que per a l'entrenament en instal·lacions propies. Els proveïdors de nuvol es poden regular com a intermediaris, obligats a coneixer els seus clients i fer complir els requisits.

El comput en instal·lacions propies es mes dificil de monitoritzar. Les grans organitzacions poden comprar i operar els seus propis clusters de GPU sense supervisio intermediaria. Els controls d'exportacio poden restringir l'adquisicio, pero un cop el maquinari esta al seu lloc, l'us es dificil d'observar.

La tendencia cap a infraestructura de comput propietaria, impulsada en part per preocupacions de la cadena de subministrament, complica la governanca que assumeix acces mediat pel nuvol.

### Coordinacio internacional

La governanca del comput requereix coordinacio internacional per ser efectiva. Si una jurisdiccio imposa restriccions, el desenvolupament pot traslladar-se a un altre lloc. Si els controls d'exportacio limiten l'acces a xips per a alguns paisos, es poden desenvolupar cadenes de subministrament alternatives.

La coordinacio actual es limitada. Els Estats Units han imposat controls d'exportacio unilateralment; altres paisos no necessariament han seguit. El comput instal·lat abans dels controls continua sent utilitzable. I la distribucio global de dades d'entrenament significa que restringir el comput no restringeix tots els inputs del desenvolupament d'IA.

Vam explorar dinamiques relacionades a [arbitratge regulatori](/research/008-regulatory-arbitrage/). El desenvolupament d'IA busca camins de menor resistencia, i la governanca del comput crea incentius per trobar aquests camins.

### Inferencia versus entrenament

La governanca del comput tipicament se centra en l'entrenament --la fase en que es creen els models. Pero la inferencia --executar models entrenats-- tambe pot ser rellevant per a la governanca.

Les capacitats perilloses existeixen en el moment de la inferencia, no en el de l'entrenament. Un model que pot assistir amb tasques perjudicials ho fa quan se li consulta, independentment de quan o on va ser entrenat. Governar el comput d'entrenament no aborda els riscos en temps d'inferencia.

Governar el comput d'inferencia es molt mes dificil. La inferencia es distribuida, es produeix a menor escala per interaccio i involucra molts mes actors. Els enfocaments de governanca que funcionen per a l'entrenament concentrat no es traslladen a la inferencia distribuida.

## Una avaluacio realista

La governanca del comput es util pero insuficient. Proporciona visibilitat sobre el desenvolupament frontera, crea palanques d'aplicacio i pot activar supervisio proporcional per a grans execucions d'entrenament.

Pero no pot ser el mecanisme unic o primari per a la governanca de seguretat de la IA. Els llindars de comput son proxies que es tornaran menys precisos amb el temps. L'evasio es possible. Els riscos en temps d'inferencia no s'aborden. La coordinacio internacional es limitada.

La governanca del comput hauria de ser part d'un enfocament per capes que inclogui:

- **Avaluacio basada en capacitats** per avaluar el que els sistemes realment poden fer, independentment de quant comput es va utilitzar per crear-los
- **Monitoratge de comportament** en temps d'inferencia per detectar patrons preocupants
- **Mecanismes reflexius** on els sistemes mateixos participen en la governanca, com hem explorat a [deteccio reflexiva d'us indegut](/research/011-reflexive-misuse-detection/)
- **Governanca de la cadena de subministrament** que abordi l'ajust fi, l'scaffolding i altra amplificacio de capacitats
- **Coordinacio internacional** per limitar l'arbitratge

La governanca del comput es un component valuos d'aquest enfocament per capes. No es un substitut d'altres mecanismes de governanca.

## Conclusio

La mesurabilitat del comput el fa atractiu per a la governanca en un domini on la majoria de les coses son dificils de mesurar. Pero la mesurabilitat no es el mateix que la suficiencia. La governanca del comput pot proporcionar visibilitat i palanques d'aplicacio, pero no pot per si sola garantir la seguretat de la IA.

Els escenaris de desenvolupament d'IA mes perillosos podrien involucrar exactament els enfocaments eficients en comput que es filtren a traves dels llindars basats en comput. La governanca que depen massa del comput crea incentius per a aquests enfocaments.

La governanca efectiva de la IA ha d'abordar les capacitats, els comportaments i les implementacions, no nomes els inputs. La governanca del comput es una eina util en el conjunt d'eines de governanca. No es una solucio completa.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
