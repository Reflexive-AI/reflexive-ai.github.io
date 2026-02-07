---
title: "Simular la governança: usar IA per posar a prova les regulacions d'IA"
excerpt: "Les regulacions són polítiques. Les polítiques es poden simular. I si féssim servir sistemes d'IA per modelar els efectes de les regulacions proposades abans de la seva implementació, identificant llacunes i conseqüències no desitjades?"
date: 2026-02-04
categories:
  - Governance Analysis
  - Reflexivity
tags:
  - simulation
  - regulation
  - policy-testing
  - modeling
  - unintended-consequences
---

## El problema del disseny de polítiques

Les propostes de governança d'IA proliferen. Llindars de computació, avaluacions de capacitats, mandats de divulgació, marcs de responsabilitat, règims de certificació. Cadascuna promet abordar riscos específics. Poques es proven abans de la seva implementació.

El desenvolupament de polítiques tradicional es basa en la deliberació, la consulta a experts i l'aprenentatge de casos anàlegs. Aquests mètodes tenen valor. També tenen limitacions. La deliberació no pot anticipar totes les respostes dels actors. Els experts tenen punts cecs. Les analogies poden no ser aplicables.

I si poguéssim simular les regulacions proposades abans d'implementar-les? Executar la política a través d'escenaris, modelar les respostes dels actors, identificar llacunes i conseqüències no desitjades, tot abans que la regulació es converteixi en llei.

Això no és ciència-ficció. És una aplicació de mètodes de simulació que ja s'utilitzen en altres àmbits, potenciada per les capacitats de la IA. I és un enfocament reflexiu: usar la IA per ajudar a governar la IA.

## La simulació en altres àmbits

La simulació de polítiques és una pràctica establerta en alguns camps.

**Política econòmica.** Els bancs centrals i els ministeris de finances utilitzen models econòmics per projectar els efectes de canvis en els tipus d'interès, ajustos fiscals i paquets d'estímul. Aquests models són imperfectes, però influeixen en les decisions.

**Transport.** Els urbanistes simulen fluxos de trànsit per avaluar configuracions viàries, opcions de transport públic i tarifació per congestió abans de comprometre recursos.

**Àmbit militar.** Els establiments de defensa realitzen jocs de guerra i simulacions per avaluar estratègies, identificar vulnerabilitats i formar el personal.

**Clima.** Els models climàtics integren física, química i economia per projectar els efectes de les polítiques d'emissions amb dècades d'anticipació.

**Epidemiologia.** Els models de malalties van informar la resposta a pandèmies, projectant la propagació sota diferents escenaris d'intervenció.

Aquests àmbits demostren que la simulació pot informar les polítiques malgrat la incertesa inherent. Els models no necessiten ser exactes per ser útils; necessiten il·luminar les compensacions i identificar els modes de fallada.

## Com podria funcionar la simulació de governança d'IA

La simulació de governança d'IA podria adoptar diverses formes, de simples a sofisticades.

### Anàlisi d'escenaris

La forma més senzilla: construir escenaris que representin diferents respostes dels actors a una regulació proposada, i després avaluar-ne cadascun qualitativament.

**Exemple:** Un llindar de computació proposat per a una supervisió reforçada. Els escenaris podrien incloure:
- Actors que compleixen i se sotmeten a la supervisió segons el que està previst
- Actors amb recursos que divideixen l'entrenament per sota dels llindars
- Actors internacionals que entrenen en altres jurisdiccions
- Actors més petits que agreguen recursos per superar els llindars
- Arquitectures noves que assoleixen capacitats per sota dels llindars

Cada escenari revela possibles modes de fallada. La regulació es pot refinar abans de la seva implantació.

### Modelatge basat en agents

Més sofisticat: modelar els actors com a agents amb objectius, recursos i regles de decisió. Executar simulacions on els agents responen a les regulacions de manera dinàmica.

**Exemple:** Modelar un ecosistema amb laboratoris d'IA, reguladors, auditors externs i usuaris. Els laboratoris maximitzen les capacitats dins de les restriccions. Els reguladors apliquen les normes amb recursos limitats. Els auditors trien amb quina rigorositat auditar. Els usuaris busquen capacitats al menor cost.

Simular aquest ecosistema sota diferents règims reguladors. Rastrejar quines regulacions s'eludeixen, on sorgeixen colls d'ampolla en l'aplicació, quines coalicions d'actors es formen.

### Simulació d'equip vermell

Usar els mateixos sistemes d'IA per trobar llacunes. Donada una regulació proposada, instruir una IA perquè trobi estratègies conformes que vulnerin la intenció reguladora.

**Exemple:** "Aquí hi ha un règim de divulgació obligatòria proposat. Troba maneres en què una empresa podria complir formalment revelant la mínima informació útil."

Els sistemes d'IA poden trobar vies d'explotació que els analistes humans passen per alt, precisament perquè aborden el problema sense pressupostos humans sobre el comportament apropiat.

### Simulació adversarial

Enfrontar sistemes d'IA entre ells: un representa un adversari sofisticat que intenta evadir la regulació; l'altre representa un aplicador que intenta detectar l'evasió. Executar simulacions repetides per trobar dissenys reguladors robustos.

Això s'assembla a les [proves d'equip vermell](/research/050-red-teaming-methodologies/) però aplicades a la governança en lloc del comportament del model.

## Què fa diferent la governança d'IA

La simulació de governança d'IA té característiques especials.

**Reflexivitat.** Estem usant IA per avaluar polítiques sobre IA. Els models utilitzats per a la simulació poden estar ells mateixos subjectes a les regulacions que s'avaluen. Això crea tant complexitat metodològica com coneixement potencial: la simulació revela el que els sistemes d'IA farien sota regulació.

**Canvi ràpid.** Les capacitats de la IA evolucionen més ràpid que els cicles de les polítiques. Les simulacions han de modelar no només les capacitats actuals sinó les capacitats futures anticipades. Això augmenta la incertesa però també incrementa el valor de l'anàlisi prospectiva.

**Actors estratègics.** Els laboratoris d'IA són entitats sofisticades amb recursos per analitzar i respondre a les regulacions. Els models ingenus que assumeixen compliment poden passar per alt com els actors intel·ligents manipulen les regles.

**Dades històriques limitades.** La majoria de les propostes de governança d'IA no s'han implementat. A diferència de la política econòmica, on disposem de dècades de dades sobre els efectes dels tipus d'interès, la governança d'IA manca de trajectòries empíriques. La simulació ha de ser més especulativa.

## Limitacions

La simulació no és predicció. Diverses limitacions restringeixen el que la simulació de governança pot aconseguir.

**Incertesa del model.** Les simulacions requereixen models de com es comporten els actors. No comprenem plenament com els laboratoris d'IA, els reguladors o els mercats respondran a noves regulacions. Els models codifiquen supòsits que poden ser erronis.

**Incògnites desconegudes.** Les simulacions només poden explorar escenaris que construïm. Els modes de fallada nous que no imaginem no apareixeran a les simulacions.

**Efectes reflexius.** Publicar els resultats de la simulació pot canviar el comportament dels actors. Si una simulació revela una llacuna, els actors poden explotar-la. Si una simulació mostra que una regulació funciona, els actors poden trobar evasions noves no modelades.

**Manipulació de la simulació.** Si les decisions de governança depenen de simulacions, els actors poden intentar influir en el disseny o les entrades de la simulació. La simulació es converteix en un altre àmbit de governança a disputar.

**Qüestions de legitimitat.** Haurien els resultats de la simulació d'influir en les decisions? Qui dissenya les simulacions? Qui les valida? La governança informada per simulacions planteja qüestions de rendició de comptes similars a la [presa de decisions algorítmica](/research/046-algorithmic-impact-assessments/) en general.

Aquestes limitacions no fan inútil la simulació. La converteixen en una entrada entre moltes en lloc d'una resposta determinista.

## Aplicacions pràctiques

On podria ser més valuosa la simulació de governança?

**Disseny de llindars.** Les regulacions solen incloure llindars: nivells de computació, puntuacions de capacitat, nivells de risc. Les simulacions poden explorar com els llindars afecten la cobertura, quins comportaments incentiven i on creen efectes de precipici.

**Disseny de l'aplicació.** Donats uns recursos d'aplicació limitats, com haurien els reguladors de distribuir l'atenció? Les simulacions poden modelar estratègies d'auditoria, estructures de sancions i probabilitats de detecció.

**Coordinació internacional.** L'[arbitratge regulador](/research/008-regulatory-arbitrage/) depèn de les llacunes entre jurisdiccions. Les simulacions poden modelar com els actors exploten les llacunes i quins mecanismes de coordinació les tanquen.

**Planificació de la transició.** Les noves regulacions alteren les disposicions existents. Les simulacions poden identificar reptes d'implementació, suggerir calendaris d'implantació gradual i predir ajustos del mercat.

**Detecció de llacunes.** Abans d'implementar regulacions, simular actors adversarials que intenten eludir-les. Tancar llacunes abans que siguin explotades.

## Requisits institucionals

La simulació de governança eficaç requereix infraestructura institucional.

**Independència.** Les simulacions no haurien de ser controlades per parts amb interessos en els resultats. Les institucions acadèmiques, les organitzacions de recerca independents o els organismes governamentals amb mandat i recursos són amfitrions apropiats.

**Transparència.** Els supòsits del model, les entrades i el codi haurien de ser públics perquè els resultats puguin ser examinats i s'explorin alternatives.

**Iteració.** Les simulacions s'haurien de repetir a mesura que millora la comprensió i canvien les condicions. Les anàlisis puntuals queden obsoletes ràpidament.

**Humilitat.** Els resultats de la simulació s'haurien de presentar amb la incertesa apropiada. L'excés de confiança en els models pot ser pitjor que no tenir models.

**Integració.** La simulació és una entrada al disseny de polítiques, no un substitut de la deliberació, la consulta i el judici.

## La connexió amb la governança reflexiva

La simulació de governança exemplifica l'enfocament reflexiu: usar la IA per donar suport a la governança de la IA.

Això crea un cicle virtuós. Els [esquemes de restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) permeten un modelatge precís del que els sistemes han de fer. Les [avaluacions de capacitats](/research/024-capability-evaluations/) proporcionen dades per a les entrades de la simulació. Els [protocols d'IA a regulador](/research/014-ai-regulator-protocol/) podrien incorporar la simulació com a component.

Les mateixes capacitats d'IA que creen reptes de governança poden abordar-los. Això no és irònic ni contradictori. És la perspectiva reflexiva: els sistemes d'IA poden participar en la seva pròpia governança, incloent-hi ajudar a dissenyar les regulacions que els governen.

## Conclusió

La simulació de governança no és una panacea. És una eina per posar a prova les propostes abans de la seva implementació, identificar modes de fallada i comparar alternatives.

Donats els interessos en joc en la governança d'IA, elaborar polítiques basant-se únicament en la deliberació i l'analogia sembla inadequat. Disposem d'eines per explorar les conseqüències de les polítiques de forma sistemàtica. Hauríem d'utilitzar-les.

Això requereix inversió en infraestructura de simulació, normes sobre com la simulació informa les decisions i humilitat sobre el que la simulació pot aconseguir. L'objectiu no és automatitzar la governança sinó informar-la: responsables humans de la presa de decisions amb millor informació sobre les conseqüències probables.

Simular la governança abans d'implementar-la és l'equivalent polític de provar el codi abans de desplegar-lo. Tots dos semblen obvis en retrospectiva. Tots dos s'ometen sovint per pressió de temps. Tots dos importen més a mesura que augmenten els interessos en joc.

## Recerca relacionada

- [Red Teaming Methodologies](/research/050-red-teaming-methodologies/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Dangerous Capability Evaluations](/research/024-capability-evaluations/)
- [Algorithmic Impact Assessments: Implementation Guide](/research/046-algorithmic-impact-assessments/)
