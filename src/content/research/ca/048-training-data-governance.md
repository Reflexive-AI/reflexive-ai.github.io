---
title: "Governança de les dades d'entrenament"
excerpt: "Marcs integrals per gestionar les dades que donen forma als sistemes d'IA, des de la recollida fins a la curació i la retirada."
date: 2026-01-30
toc: true
categories:
  - Research
  - Policy
tags:
  - Data Governance
  - Training Data
  - Privacy
  - Transparency
---

Els sistemes d'IA aprenen de les dades. Les dades utilitzades en l'entrenament, per tant, donen forma al comportament del sistema de maneres fonamentals: determinen quins patrons aprèn el model, quins biaixos codifica, quines capacitats adquireix. La governança de les dades d'entrenament aborda les polítiques, processos i controls que asseguren que aquest recurs fonamental serveixi als propòsits previstos sense causar danys no intencionats.

## Per què importen les dades d'entrenament

La relació entre les dades d'entrenament i el comportament del model no sempre és òbvia. Els patrons complexos emergeixen de grans conjunts de dades de maneres que resisteixen la predicció simple. Però diversos principis es mantenen en general:

**La representació determina la capacitat**: Els models només poden aprendre del que veuen. Si les dades d'entrenament manquen d'exemples de certs fenòmens, els models no els gestionaran bé. Les escletxes de representació geogràfica, demogràfica i lingüística es propaguen en escletxes de capacitat.

**Els biaixos s'amplifiquen**: Els patrons històrics a les dades —inclosos els patrons discriminatoris— es codifiquen als models. Els sistemes entrenats amb dades de contractació esbiaixades aprenen contractació esbiaixada. Sense una correcció deliberada, l'entrenament perpetua la injustícia històrica.

**La qualitat limita el rendiment**: Les dades sorolloses, mal etiquetades o contradictòries limiten el que els models poden aprendre. El sostre de la qualitat del model sovint està determinat per la qualitat de les dades més que per la sofisticació algorítmica.

**La procedència permet la rendició de comptes**: Quan els models es comporten de manera problemàtica, comprendre quines dades d'entrenament van contribuir a aquest comportament permet el diagnòstic i la correcció. Les dades d'entrenament sense documentar fan inexplicable el comportament del model.

## Components del marc de governança

La governança integral de les dades d'entrenament aborda el cicle de vida complet de les dades: recollida, curació, documentació, ús i retirada. Cada fase presenta reptes de governança diferenciats.

### Governança de la recollida

La recollida de dades és on comença la governança. Consideracions clau:

**Consentiment i autorització**: Quins permisos existeixen per usar les dades en l'entrenament d'IA? Els marcs de consentiment dissenyats per a un propòsit (publicacions a xarxes socials, per exemple) poden no estendre's a l'entrenament d'IA. Les [impossibilitats estructurals del consentiment](/research/007-consent-structural-impossibility/) examinen aquests reptes.

**Documentació de les fonts**: D'on procedeixen les dades? El web scraping, les contribucions d'usuaris, la generació sintètica i l'adquisició amb llicència tenen implicacions diferents. L'heterogeneïtat de fonts requereix rastrejar cada component.

**Compliment legal**: Les regulacions de protecció de dades (RGPD, CCPA, normativa sectorial) imposen requisits a la recollida. Les pràctiques de recollida que violen aquestes normes creen exposició legal posterior per als models entrenats amb les dades.

**Representativitat**: Produeix la recollida dades representatives de l'ús previst del model? El mostreig per conveniència —recollir el que està fàcilment disponible— sovint produeix conjunts de dades esbiaixats. Les estratègies de mostreig deliberades milloren la representació.

### Governança de la curació

Les dades brutes rarament entren en l'entrenament sense modificacions. Els processos de curació —filtratge, neteja, transformació, augment— donen forma al que els models realment aprenen.

**Criteris de filtratge**: Quines dades s'exclouen i per què? Els criteris s'han de documentar, aplicar de forma coherent i revisar periòdicament. Un filtratge excessivament agressiu pot eliminar senyals valuosos; un filtratge insuficient reté contingut nociu.

**Estàndards de qualitat**: Què constitueix una qualitat de dades acceptable? S'han de definir mètriques de precisió, completesa, coherència i oportunitat. Els llindars de qualitat determinen si les dades entren en l'entrenament o es remedien primer.

**Detecció i mitigació de biaixos**: Examen actiu dels conjunts de dades a la recerca de patrons problemàtics. Les proves estadístiques poden identificar desequilibris de representació; la revisió humana pot identificar problemes qualitatius. Les [avaluacions d'impacte algorítmic](/research/046-algorithmic-impact-assessments/) haurien d'incorporar l'examen de les dades.

**Polítiques d'augment**: La generació de dades sintètiques i l'augment de dades modifiquen els conjunts de dades d'entrenament. Les polítiques han de regular quan és apropiat l'augment, quins mètodes s'utilitzen i com es distingeixen les dades augmentades de les originals.

### Governança de la documentació

La documentació permet la governança: no es pot governar el que no es comprèn. La documentació de les dades d'entrenament ha d'abordar:

**Fitxes de dades**: Documentació estandarditzada que capturi el propòsit del conjunt de dades, la seva composició, la metodologia de recollida, el preprocessament, els usos previstos i l'estat de manteniment. El marc de "fitxes per a conjunts de dades" proporciona plantilles.

**Seguiment de la procedència**: Per a cada dada, d'on procedeix? Quan es va recollir? Com s'ha transformat? La procedència completa permet rastrejar el comportament del model fins a les seves causes en l'entrenament.

**Divulgació de limitacions**: Quines són les limitacions conegudes del conjunt de dades? Les escletxes de representació, els problemes de qualitat, els límits temporals i les restriccions d'aplicabilitat s'han de documentar explícitament.

**Control de versions**: Els conjunts de dades evolucionen. El control de versions permet comprendre quines dades van entrenar quina versió del model, facilitant la depuració i la reproductibilitat.

### Governança de l'ús

Com es poden utilitzar les dades d'entrenament —i per qui— requereix una política explícita.

**Limitació de propòsit**: Les dades recollides per a un propòsit no s'haurien d'utilitzar necessàriament per a altres. Un conjunt de dades apropiat per a la investigació podria ser inapropiat per a productes comercials. Les restriccions d'ús s'han de definir i aplicar.

**Controls d'accés**: Qui pot accedir a les dades d'entrenament i amb quins fins? L'accés basat en rols, el registre d'auditories i els principis de minimització de dades limiten l'exposició.

**Restriccions posteriors**: Quan es llancen models entrenats amb les dades, quines restriccions s'apliquen? Els llançaments de models poden necessitar traslladar les restriccions derivades de les dades sobre contexts d'ús, categories d'usuaris o desplegament geogràfic.

**Polítiques de retenció**: Quant de temps es conserven les dades d'entrenament i quan s'eliminen? Els requisits legals, els costos d'emmagatzematge i el valor continu determinen la retenció. Els models entrenats amb dades eliminades plantegen interessants qüestions de persistència.

### Governança de la retirada

Les dades d'entrenament no duren per sempre. La retirada aborda les consideracions de fi de vida:

**Verificació de l'eliminació**: Quan les dades s'han d'eliminar (per retirada del consentiment, límits de retenció o ordres legals), com es verifica l'eliminació? Els models entrenats amb les dades poden necessitar reentrenament; l'ajust fi pot no ser suficient.

**Dret de supressió**: El RGPD i regulacions similars atorguen als individus drets d'eliminació. Respectar aquests drets per a dades que ja han influït en els pesos del model presenta reptes tècnics i legals.

**Documentació heretada**: Fins i tot després de l'eliminació de les dades, la documentació ha de persistir per explicar el comportament històric del model. Els models que van ser entrenats amb dades ara eliminades romanen en funcionament; comprendre el seu entrenament continua sent important.

## Consideracions d'implementació

### Estructures organitzatives

La governança de les dades d'entrenament requereix rols i responsabilitats clars:

**Responsables de dades**: Individus responsables de conjunts de dades específics, que asseguren que es segueixin les polítiques de governança i es mantingui la documentació.

**Consell de governança de dades**: Òrgan multifuncional que estableix polítiques, resol disputes i supervisa la maduresa del programa de governança.

**Legal i compliment**: Assegurant que l'ús de les dades s'ajusti als requisits regulatoris i les obligacions contractuals.

**Revisió ètica**: Avaluant l'ús de les dades segons principis ètics, particularment per a aplicacions sensibles o noves.

Aquests rols necessiten autoritat. La governança sense autoritat d'aplicació es converteix en assessorament: útil però insuficient.

### Infraestructura tècnica

Les polítiques de governança requereixen implementació tècnica:

**Gestió de metadades**: Sistemes per capturar, emmagatzemar i consultar informació sobre les dades. Sense una infraestructura robusta de metadades, la governança es torna manual i propensa a errors.

**Gestió d'accés**: Controls tècnics que apliquen les polítiques d'accés. Això inclou autenticació, autorització i registre d'auditoria amb suficient granularitat.

**Catàlegs de dades**: Inventaris consultables de dades disponibles, que permeten el descobriment alhora que apliquen controls d'accés i restriccions d'ús.

**Integració amb pipelines**: Punts de control de governança integrats en els pipelines de processament de dades, assegurant que les polítiques s'apliquin de forma coherent en lloc de manualment.

### Monitorització i auditoria

L'eficàcia de la governança requereix verificació contínua:

**Monitorització del compliment**: Avaluació periòdica de si es segueixen les polítiques de governança. Comprovacions automatitzades quan sigui possible; revisió manual quan sigui necessari.

**Revisió de l'eficàcia de les polítiques**: Aconsegueixen les polítiques els resultats previstos? L'avaluació periòdica permet el refinament.

**Auditoria externa**: Verificació independent de les pràctiques de governança, particularment per a aplicacions d'alt risc. [Autoinforme davant d'auditoria](/research/010-self-reporting-vs-audit/) examina quan és necessària la revisió externa.

## Consideracions especials

### Dades personals

Les dades d'entrenament que contenen informació personal plantegen preocupacions majors:

**Privacitat per disseny**: Minimitzar les dades personals en l'entrenament, anonimitzar quan sigui possible, agregar quan sigui apropiat.

**Transparència**: Informar els individus quan les seves dades s'utilitzen per a l'entrenament d'IA, quan sigui factible.

**Drets individuals**: Mecanismes perquè els individus comprenguin si les seves dades van ser utilitzades, sol·licitin correccions o exigeixin l'eliminació.

**Categories especials**: Les dades sensibles (salut, biometria, opinions polítiques) requereixen una protecció millorada més enllà de la governança de referència.

### Contingut protegit per drets d'autor

Entrenar amb material protegit per drets d'autor planteja qüestions legals i ètiques:

**Anàlisi d'ús legítim**: Si l'entrenament constitueix ús legítim continua sent objecte de debat legal. Les organitzacions haurien de realitzar una anàlisi legal raonable.

**Llicències**: Part del contingut es pot llicenciar per a l'entrenament. Les llicències clares redueixen la incertesa legal.

**Mecanismes d'exclusió**: Sistemes perquè els creadors de contingut indiquin que la seva obra no s'hauria d'usar en l'entrenament. Si s'han de respectar i com les exclusions implica consideracions tant tècniques com ètiques.

**Atribució**: Fins i tot si l'entrenament és legalment permès, l'atribució als creadors pot ser èticament apropiada. La [procedència dels resultats](/research/012-output-provenance/) aborda com els resultats del model es relacionen amb les entrades d'entrenament.

### Dades sintètiques

Les dades d'entrenament generades per IA creen nous reptes de governança:

**Verificació de qualitat**: Les dades sintètiques poden no representar amb precisió els patrons del món real. La validació contra dades reals prevé l'entrenament amb artefactes.

**Propagació de biaixos**: Els models que generen dades sintètiques poden incorporar biaixos que després entrenen futurs models. Una avaluació acurada prevé l'acumulació de problemes.

**Documentació de la procedència**: Les dades sintètiques requereixen documentar la seva metodologia de generació, inclosos els models i processos que les van crear.

## Context regulatori

La governança de les dades d'entrenament es creua amb múltiples marcs regulatoris:

**Llei d'IA de la UE**: Exigeix que els sistemes d'IA d'alt risc tinguin dades d'entrenament que compleixin criteris de qualitat, incloent l'examen de biaixos, propietats estadístiques apropiades i documentació de la procedència.

**RGPD**: Regula l'ús de dades personals en l'entrenament, inclosos els requisits de consentiment, la limitació de propòsit i els drets individuals.

**Legislació de drets d'autor**: Jurisprudència en evolució sobre l'ús de materials protegits per a l'entrenament, amb variació jurisdiccional.

**Normativa sectorial**: Sanitat (HIPAA), serveis financers i altres sectors regulats imposen requisits addicionals de governança de dades.

El compliment requereix comprendre quins marcs s'apliquen, què exigeixen i com interactuen els requisits. Els [riscos d'arbitratge regulatori](/research/008-regulatory-arbitrage/) sorgeixen quan la governança difereix entre jurisdiccions.

## Avaluació de maduresa

Les organitzacions poden avaluar la maduresa de la seva governança de dades d'entrenament en diverses dimensions:

**Nivell 1 - Ad hoc**: Sense governança sistemàtica. Dades utilitzades segons la seva disponibilitat, amb documentació o controls limitats.

**Nivell 2 - Definit**: Les polítiques existeixen sobre el paper. Alguna documentació i controls, aplicats de forma inconsistent.

**Nivell 3 - Gestionat**: Els processos de governança estan operatius. Documentació coherent, controls d'accés i monitorització.

**Nivell 4 - Mesurat**: Mètriques quantitatives rastregen l'eficàcia de la governança. Revisió i millora periòdiques.

**Nivell 5 - Optimitzat**: Millora contínua basada en mètriques. Pràctiques líders, identificació proactiva de riscos.

La majoria de les organitzacions es troben al Nivell 2 o 3. Assolir nivells superiors requereix una inversió sostinguda en persones, processos i tecnologia.

## Conclusió

La governança de les dades d'entrenament és fonamental per a la governança de la IA en sentit ampli. Les dades que entrenen els sistemes donen forma al seu comportament de maneres que persisteixen al llarg del cicle de vida del sistema. Una governança inadequada de les dades d'entrenament es propaga en problemes del model que són difícils de remeiar a posteriori.

Els marcs presentats aquí requereixen compromís organitzatiu: no només polítiques sinó infraestructura d'implementació, dotació de personal i autoritat genuïna. Les organitzacions que tracten les dades d'entrenament com una consideració secundària construiran sistemes que no comprenen plenament i en els quals no poden confiar plenament.
