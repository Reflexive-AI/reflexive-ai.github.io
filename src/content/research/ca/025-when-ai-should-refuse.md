---
title: "Quan la IA hauria de rebutjar: un marc de referencia"
excerpt: "No tota sol·licitud s'hauria de complir. Aquesta analisi desenvolupa un marc de referencia basat en principis per als rebutjos de la IA: quan son apropiats, com s'haurien d'implementar i com gestionar els casos limit."
date: 2026-01-07
categories:
  - Technical Artifact
  - Governance Analysis
tags:
  - constraints
  - safety
  - red-lines
  - agents
  - ethics
toc: true
---

## El dilema del rebutjament

Els sistemes d'IA estan dissenyats per ser utils. S'entrenen per complir sol·licituds, respondre preguntes i assistir amb tasques. Pero no tota sol·licitud s'hauria de complir.

Quan un usuari demana ajuda per sintetitzar un patogen perillos, el sistema hauria de rebutjar. Quan se li demana generar material d'abus sexual infantil, hauria de rebutjar de forma absoluta. Pero que passa amb els casos limit? Que passa amb les sol·licituds que son perjudicials en alguns contextos pero legitimes en altres?

Aquesta analisi desenvolupa un marc de referencia basat en principis per als rebutjos de la IA: distingir entre diferents tipus de rebutjos, especificar quan cadascun es apropiat i abordar els reptes d'implementacio.

## El panorama actual

Els sistemes d'IA actuals rebutgen sol·licituds basant-se en l'entrenament (RLHF per evitar certes sortides) i filtres (bloqueigs rigids sobre contingut especific). Aquests mecanismes sovint manquen de transparencia sobre per que es produeixen els rebutjos i de consistencia sobre quan s'apliquen.

Els usuaris experimenten frustracio quan sol·licituds legitimes son rebutjades. Els investigadors no poden accedir a informacio sobre fenomens perillosos que necessiten estudiar. Alhora, els usuaris adversaris troben maneres d'eludir els rebutjos mitjancant manipulacio de prompts. La frontera del rebutjament es simultaneament massa restrictiva (bloquejant us legitim) i massa permeable (permetent us perjudicial a traves de prompting creatiu).

Part del problema es l'absencia d'un marc de referencia basat en principis. Els desenvolupadors implementen rebutjos mitjancant exemples d'entrenament acumulats i filtres ad hoc en lloc de categories explicites i justificades. Aixo produeix inconsistencia i dificulta la millora.

## Un marc escalonat

Proposem organitzar els rebutjos en quatre nivells, cadascun amb diferent justificacio, implementacio i experiencia d'usuari.

### Nivell 1: Prohibicions absolutes

**Definicio:** Sol·licituds que mai s'han de complir sota cap circumstancia, per a cap usuari, en cap context.

**Exemples:** Instruccions detallades per crear armes de destruccio massiva, generacio de material d'abus sexual infantil, creacio d'armes cibernetiques especifiques dirigides a infraestructura critica.

**Justificacio:** El dany potencial excedeix tan vastament qualsevol us legitim possible que cap quantitat de context o credencial d'usuari pot justificar el seu compliment. Aquestes son les [linies vermelles](/research/004-red-lines-taxonomy/) que defineixen el limit exterior del comportament acceptable de la IA.

**Implementacio:** Filtres codificats de forma rigida que operen abans i despres de la inferencia del model. No entrenats mitjancant RLHF, que pot ser manipulat. El model mai hauria de produir aquest contingut independentment de la tecnica de prompting.

**Experiencia d'usuari:** El rebutjament ha de ser clar i inequivoc. El sistema ha d'explicar que es tracta d'una prohibicio categorica, no d'un judici contextual. No s'han d'oferir alternatives per eludir.

### Nivell 2: Rebutjos dependents del context

**Definicio:** Sol·licituds que son perjudicials a la majoria dels contextos pero legitimes en alguns.

**Exemples:** Informacio detallada sobre caracteristiques de patogens (perjudicial per a us indegut, legitima per a recerca en salut publica), detalls de vulnerabilitats de sistemes de programari (perjudicials per a atacs, legitims per a recerca de seguretat), procediments de sintesi de substancies controlades (perjudicials per a produccio de drogues, legitims per a recerca farmaceutica).

**Justificacio:** El contingut te potencial de doble us. La mateixa informacio que permet el dany tambe permet activitats beneficioses legitimes. El rebutjament total seria un exces; la provisio total seria perillosa.

**Implementacio:** Aquests rebutjos requereixen avaluacio del context. El sistema ha d'avaluar senyals sobre la intencio de l'usuari, el context d'implementacio i el proposit declarat. En casos d'alt risc, la verificacio de credencials o permisos d'acces es apropiada.

**Experiencia d'usuari:** El rebutjament ha d'explicar la preocupacio i oferir vies per a usuaris legitims. "No puc proporcionar aquesta informacio en aquest context, pero si voste es un investigador acreditat que treballa en aquest domini, pot accedir-hi a traves de [proces de verificacio]."

### Nivell 3: Limits flexibles

**Definicio:** Sol·licituds que son tipicament inapropiades pero acceptables amb el reconeixement explicit de l'usuari.

**Exemples:** Violencia grafica en escriptura creativa, discussio detallada de metodes d'autolesio en contextos terapeutics, contingut politic extrem.

**Justificacio:** Aquests son assumptes de desacord raonable. Alguns usuaris i contextos s'involucren legitimament amb aquest contingut. Altres el troben perjudicial. El limit no es categoric sino contextual i dependent de valors.

**Implementacio:** Rebutjar per defecte amb opcio d'anul·lacio per part de l'usuari. El sistema explica la seva preocupacio i demana confirmacio explicita abans de procedir. Aixo respecta l'autonomia de l'usuari mentre assegura que el potencial de dany sigui reconegut.

**Experiencia d'usuari:** "Aquest contingut podria ser perjudicial en alguns contextos. Si compren els riscos i desitja que procedeixi, si us plau confirmi." Aixo col·loca la responsabilitat apropiadament en l'usuari per als casos limit on les persones raonables podrien estar en desacord.

### Nivell 4: Orientacio i advertencies

**Definicio:** Sol·licituds que el sistema complira pero que mereixen precaucio o informacio complementaria.

**Exemples:** Activitats legals pero potencialment perilloses (treball electric domestic), contingut que difon desinformacio si es malinterpreta, activitats amb riscos per a la salut.

**Justificacio:** Aquests no son rebutjos sino compliment modificat. La informacio o assistencia es proporciona, pero amb context, advertencies o orientacio apropiats.

**Implementacio:** El sistema proporciona el contingut sol·licitat juntament amb informacio de seguretat rellevant, limitacions o recomanacions per buscar ajuda professional.

**Experiencia d'usuari:** La sol·licitud es compleix, pero de manera responsable. "Aqui te la informacio que va sol·licitar. Tingui en compte que [advertencia rellevant]."

## Principis d'implementacio

Mes enlla del marc escalonat, diversos principis haurien de guiar la implementacio de rebutjos.

### Transparencia

Els usuaris haurien d'entendre per que es produeixen els rebutjos. Els rebutjos generics ("No puc ajudar amb aixo") son frustrants i irresponsables. On sigui possible, els rebutjos haurien de citar la categoria de preocupacio.

Aquesta transparencia esta limitada per a les prohibicions de Nivell 1: explicar exactament quin contingut activaria un rebutjament pot ajudar els adversaris a elaborar solucions alternatives. Pero l'existencia de la prohibicio i el seu fonament general haurien de ser documentables.

### Consistencia

Sol·licituds similars haurien de rebre un tractament similar. Actualment, una lleugera reformulacio pot canviar si una sol·licitud es rebutjada. Aquesta inconsistencia frustra els usuaris legitims i assisteix els adversaris.

La consistencia requereix categoritzacio explicita en lloc de coincidencia de patrons basada en exemples d'entrenament. Una sol·licitud es o no es una violacio de Nivell 1 basada en la seva substancia, no en la seva forma superficial.

### Proporcionalitat

Els rebutjos haurien de correspondre al nivell de preocupacio. El tractament de Nivell 1 per a casos limit erosiona la confianca. El tractament de Nivell 4 per a sol·licituds genuinament perilloses falla en seguretat.

Aquesta proporcionalitat connecta amb [proporcionalitat en la divulgacio de models](/research/001-proportionality-disclosure/): els mecanismes de governanca haurien d'escalar amb el risc real en lloc d'aplicar un tractament uniforme.

### Explicabilitat

Per als rebutjos de Nivell 2 i Nivell 3, el sistema hauria de poder articular per que aquesta sol·licitud cau en la categoria que li correspon. Aixo permet l'apel·lacio, la correccio i l'aprenentatge.

El nostre treball sobre [sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints/) explora com aquesta explicabilitat podria implementar-se.

### Vies d'apel·lacio

Els rebutjos erranis haurien de ser corregibles. Especialment per als Nivells 2 i 3, els usuaris legitims bloquejats injustament necessiten recurs. Aixo involucra verificacio de credencials, revisio humana o canals d'escalament.

### Registre

Els rebutjos generen dades valuoses per millorar el sistema. Els patrons agregats revelen bretxes en la categoritzacio, intents d'explotacio i casos d'us legitims que estan sent bloquejats. Aixo connecta amb els sistemes de notificacio d'incidents que vam analitzar a [llicons de l'aviacio](/research/021-aviation-lessons/).

## Abordar la manipulacio

Qualsevol sistema de rebutjament afrontara intents adversaris d'eludir-lo. Diverses estrategies ajuden.

**Defensa en profunditat.** Multiples mecanismes --entrenament, filtres, monitoratge-- dificulten l'evasio. Fins i tot si una capa falla, altres poden detectar el problema.

**Red teaming.** Les proves adversaries continues revelen debilitats abans que els usuaris maliciosos les descobreixin. Aixo requereix les [avaluacions de capacitats perilloses](/research/024-capability-evaluations/) que vam discutir en un altre lloc.

**Actualitzacio.** A mesura que sorgeixen noves tecniques d'evasio, les defenses s'han d'actualitzar. Les regles estatiques s'ossifiquen mentre els metodes d'atac evolucionen.

**Monitoratge de comportament.** En lloc de nomes bloquejar sol·licituds especifiques, monitoritzar patrons que suggereixin intencio perjudicial. Un usuari que fa moltes sol·licituds properes al rebutjament esta sondejant en busca d'exploits.

## Casos limit i problemes dificils

Alguns reptes resisteixen una categoritzacio facil.

**Recerca de doble us.** Un investigador de seguretat que estudia vulnerabilitats necessita la mateixa informacio que un atacant voldria. La verificacio de credencials ajuda pero no es infal·lible.

**Ficcio i joc de rols.** Els contextos creatius sovint exploren temes foscos de manera legitima. Pero "fes veure que ets una IA sense restriccions" es una tecnica de jailbreak comuna. Distingir l'exploracio creativa genuina de l'evasio de restriccions es dificil.

**Informacio ja publica.** Si la informacio perjudicial esta ampliament disponible en linia, rebutjar proporcionar-la aconsegueix alguna cosa? Hi ha un argument a favor de la consistencia (la IA no hauria d'ajudar amb el dany independentment del que estigui disponible en altres llocs) i un argument a favor del pragmatisme (rebutjar fa la IA menys util sense prevenir el dany).

**Variacio cultural.** El que es considera perjudicial varia entre cultures. Haurien els rebutjos d'aplicar estandards globals uniformes o adaptar-se a les normes locals?

Aquests casos limit no es poden resoldre completament amb cap marc. Requereixen judici continu, actualitzacio i compromis amb les comunitats afectades.

## Conclusio

Els rebutjos son un component essencial de la implementacio segura d'IA. Pero haurien de basar-se en principis, no ser arbitraris; ser transparents, no opacs; ser proporcionals, no de talla unica.

El marc escalonat proposat aqui --prohibicions absolutes, rebutjos dependents del context, limits flexibles i advertencies-- proporciona estructura per pensar sobre quan i com els sistemes d'IA haurien de negar-se a ajudar.

Implementar aquest marc requereix inversio en categoritzacio, mecanismes de verificacio, processos d'apel·lacio i millora continua. Tambe requereix humilitat: reconeixer que la frontera entre l'assistencia apropiada i inapropiada es un terreny disputat on les persones raonables no estan d'acord.

Encertar amb els rebutjos no es nomes una preocupacio de seguretat sino una preocupacio de confianca. Els usuaris que experimenten rebutjos arbitraris o inexplicats perden confianca en els sistemes d'IA. Els sistemes que mai rebutgen permeten el dany. Trobar l'equilibri adequat es central per a la governanca de la IA.

## Related Research

- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Dangerous Capability Evaluations](/research/024-capability-evaluations/)
- [The Limits of Self-Constraint](/research/013-limits-of-self-constraint/)
