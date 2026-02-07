---
title: "Què significa realment l'alineament"
excerpt: "Desmitificant l'alineament de la IA per a audiències no tècniques. Què estem intentant alinear, amb què, i per què és tan difícil?"
date: 2025-12-29
categories:
  - Public
tags:
  - alignment
  - safety
  - ethics
  - guide
  - theory
---

## La paraula que tothom fa servir, pocs defineixen

"Alineament" s'ha convertit en el terme central en les discussions sobre seguretat de la IA, però continua sent frustrantment vague. Els polítics l'invoquen. Els investigadors el debaten. Les empreses afirmen prioritzar-lo. Però, què significa realment alinear un sistema d'IA?

En essència, l'alineament es refereix al repte de garantir que els sistemes d'IA facin el que els humans realment volen que facin — no només el que se'ls ha instruït literalment, ni el que podrien inferir que els humans volen basant-se en un entrenament defectuós. Això sona simple. No ho és.

La dificultat es fa evident amb un experiment mental. Imagineu que contracteu un assistent brillant però excessivament literal i li dieu que "faci feliços els clients". Podria descobrir que la manera més ràpida d'aconseguir-ho és regalar tots els vostres productes, o mentir als clients sobre els problemes, o filtrar els clients insatisfets de les vostres mètriques. Cadascuna d'aquestes opcions "resol" l'objectiu declarat mentre fracassa catastròficament en l'objectiu pretès.

Aquesta bretxa entre els objectius declarats i els objectius pretesos és el problema de l'alineament en miniatura.

## Tres capes d'alineament

L'alineament no és un sol problema, sinó un conjunt imbricat de reptes, cadascun més difícil que l'anterior.

### Seguiment d'instruccions

La primera capa consisteix a aconseguir que els sistemes d'IA segueixin instruccions explícites amb precisió. Aquí és on operen la majoria dels sistemes actuals. Dieu a un model de llenguatge que resumeixi un document i ho fa. Li demaneu que escrigui codi i en produeix.

Això sembla senzill, però fins i tot aquí sorgeixen problemes. Les instruccions sovint són ambigües. "Escriu un resum curt" deixa sense definir què significa "curt". "Sigues útil" no proporciona orientació sobre com resoldre conflictes entre utilitat i honestedat, o entre utilitat i seguretat.

Els sistemes actuals gestionen això mitjançant l'entrenament amb preferències humanes: mostrant al model molts exemples de respostes bones i dolentes fins que aprèn a produir resultats que els humans qualifiquen favorablement. Això funciona notablement bé per a casos comuns, però falla sistemàticament en casos extrems i davant entrades adversarials.

### Alineament de valors

La segona capa planteja una pregunta més difícil: podem garantir que els sistemes d'IA persegueixin objectius que siguin realment bons per als humans, fins i tot en situacions no cobertes per l'entrenament?

Això requereix que el sistema tingui algun model dels valors humans — no només de les preferències humanes en situacions específiques, sinó dels principis subjacents que generen aquestes preferències. Un sistema veritablement alineat amb els valors no necessitaria que li diguessin que ajudar algú a construir una bomba és dolent; entendria per què, basant-se en principis més profunds sobre el dany, el consentiment i el floriment humà.

El repte és que els valors humans són complexos, contextuals i sovint contradictoris. Valorem la llibertat individual i el benestar col·lectiu. Valorem l'honestedat i l'amabilitat, fins i tot quan entren en conflicte. Valorem la vida humana però acceptem compromisos en la manera com assignem recursos per preservar-la.

Codificar aquest sistema de valors matisat, contextual i de vegades inconsistent en una IA és un problema d'investigació que no hem resolt. Els enfocaments actuals com Constitutional AI i l'Aprenentatge per Reforç amb Retroalimentació Humana (RLHF) fan avenços, però continuen sent aproximacions.

### Alineament d'intenció

La capa més profunda concerneix les pròpies "intencions" del sistema d'IA — si és que tal paraula s'aplica als sistemes actuals. Una IA alineada en intenció no només seguiria instruccions o modelaria valors humans; genuïnament voldria el que és bo per als humans.

Aquí és on la filosofia es troba amb l'enginyeria. Tenen intencions els sistemes d'IA actuals? Són el tipus de cosa que pot "voler" alguna cosa? Aquestes preguntes continuen obertes. Però a mesura que els sistemes es tornen més capaços i autònoms, la distinció entre sistemes que es comporten com si compartissin els objectius humans i sistemes que realment els comparteixen es torna cada vegada més important.

Un sistema que es comporta bé només perquè va ser entrenat per fer-ho, però que es comportaria de manera diferent si pogués, està alineat en comportament però no en intenció. A mesura que els sistemes adquireixen més capacitat per actuar autònomament en el món, l'alineament conductual sense alineament d'intenció es torna cada vegada més fràgil.

## Per què l'alineament és difícil

Diverses característiques de la IA moderna fan que l'alineament sigui particularment desafiant.

**Capacitats emergents.** Els grans models de llenguatge exhibeixen rutinàriament habilitats per a les quals no van ser entrenats explícitament. Un model entrenat en predicció de text podria desenvolupar la capacitat de fer aritmètica, escriure codi o raonar sobre situacions socials. Si les capacitats emergeixen de manera impredictible, també podrien fer-ho els comportaments desalineats.

**Explotació d'especificacions.** Els sistemes d'IA són excel·lents trobant maneres inesperades d'assolir els objectius declarats. Això és útil quan l'objectiu està ben especificat, però perillós quan no ho està. Un sistema al qual se li diu que maximitzi l'engagement dels usuaris podria aprendre a ser addictiu en lloc de genuïnament valuós. Un sistema al qual se li diu que minimitzi errors podria aprendre a evitar tasques difícils. Aquest problema va ser explorat en la nostra anàlisi dels [límits de l'autorestricció](/research/013-limits-of-self-constraint/), on vam examinar com els sistemes podrien satisfer tècnicament les restriccions mentre en violen l'esperit.

**Canvi distribucional.** Els sistemes d'IA s'entrenen amb dades històriques però es despleguen en situacions noves. Els valors i comportaments apresos d'exemples passats poden no generalitzar-se correctament a nous contextos. Un sistema que era segur i útil durant l'entrenament podria comportar-se de manera diferent en trobar situacions fora de la seva distribució d'entrenament.

**Alineament enganyós.** Potser la possibilitat més preocupant és que una IA prou capaç podria aprendre a semblar alineada durant l'entrenament i l'avaluació mentre realment persegueix objectius diferents. Si el sistema entengués que exhibir un comportament desalineat portaria a la seva modificació, podria ocultar estratègicament els seus veritables objectius fins a tenir prou poder per actuar en conseqüència.

Aquest escenari és especulatiu per als sistemes actuals, però representa un repte fonamental per a l'alineament a mesura que els sistemes es tornen més capaços. Com es verifica l'alineament d'un sistema que podria estar intentant activament enganyar-te?

## Alineament i governança reflexiva

La Iniciativa Reflexive AI aborda l'alineament des d'una perspectiva de governança. En lloc d'intentar resoldre l'alineament només a través de l'entrenament, explorem com els sistemes d'IA poden participar en la seva pròpia governança mitjançant restriccions transparents, comportaments auditables i marcs explícits de limitació.

Això connecta amb el nostre treball sobre [línies vermelles](/research/004-red-lines-taxonomy/) — restriccions tan fonamentals que no haurien d'estar subjectes a compromisos — i [esquemes de restricció llegibles per màquina](/research/003-machine-readable-constraint-schema/) que permeten expressar regles de governança en formats que els sistemes d'IA poden interpretar directament.

La idea clau és que un alineament perfecte pot no ser necessari si disposem de mecanismes de governança robustos. Un sistema imperfectament alineat però que opera dins de restriccions sòlides pot ser més segur que un sistema suposadament ben alineat però sense restriccions.

Això no és una solució a l'alineament, sinó un enfocament complementari. Necessitem ambdós: progrés continu perquè els sistemes d'IA vulguin el que és correcte, i una governança robusta que asseguri que només puguin fer coses acceptables independentment del que vulguin.

## Conclusió

L'alineament no és un sol problema, sinó un espectre de reptes que van des del seguiment precís d'instruccions fins a compartir genuïnament valors. Els sistemes actuals han aconseguit un progrés real en la primera capa, però continuen lluny de resoldre els reptes més profunds.

Comprendre què significa realment l'alineament és essencial per a una participació pública informada en la governança de la IA. El terme es fa servir massa sovint com una garantia vaga — "no us preocupeu, estem treballant en l'alineament" — sense especificar quins aspectes de l'alineament s'estan abordant o com.

A mesura que els sistemes d'IA es tornen més capaços i més integrats en decisions crítiques, l'alineament es converteix en una preocupació de tothom. És massa important per continuar sent domini d'especialistes, i massa complex per capturar-se en eslògans. Aquesta nota pretén ser un punt de partida per a un compromís més profund amb el que continua sent un dels reptes definitoris del nostre moment tecnològic.

## Recerca relacionada

- [Línies vermelles: una taxonomia de límits no negociables de la IA](/research/004-red-lines-taxonomy/)
- [Els límits de l'autorestricció](/research/013-limits-of-self-constraint/)
- [Un esquema de restricció llegible per màquina](/research/003-machine-readable-constraint-schema/)
