---
title: "Consentiment a escala: una impossibilitat estructural?"
excerpt: "Pot existir un consentiment significatiu entre un humà i un motor d'inferència a hiperescala? Argumentem que el 'consentiment' és la primitiva legal equivocada per a les interaccions amb IA."
date: 2025-12-20
categories:
  - Governance Analysis
tags:
  - ethics
  - consent
  - legal-theory
  - data-rights
version: "1.0"
---

**Objecte de Recerca Reflexiva 007**  
*Tipus: Anàlisi Legal/Teòrica*

## La ficció de l'acord

El consentiment és un contracte. Requereix dos agents amb capacitat d'acció per acordar termes. Idealment, requereix una "trobada de voluntats": ambdues parts comprenen a què estan accedint i escullen lliurement procedir.

Aquest concepte legal ha estat la base dels règims de protecció de dades, els acords de termes de servei i les interfícies d'usuari a tota l'economia digital. "Accepto" s'ha convertit potser en la mentida més freqüent de la història humana.

Quan un usuari interactua amb un model de més de 100.000 milions de paràmetres, la ficció es torna encara més forçada:

**1. Complexitat:** L'usuari no pot comprendre les implicacions de privacitat de com la seva consulta podria ser emmagatzemada, reutilitzada per a entrenament o analitzada. Què significa que les teves dades influeixin en els pesos del model? Com afecta això les sortides futures per a altres usuaris? Fins i tot els experts tenen dificultats per explicar aquestes dinàmiques; demanar als usuaris que consentin de manera significativa és absurd.

**2. Escala:** El model interactua amb milions d'usuaris simultàniament. No "accepta" en cap sentit cognitiu; processa. No hi ha contrapart a l'altre costat de la transacció de consentiment, només patrons estadístics en pesos i un punt d'accés d'API. L'asimetria no és entre dues parts de poder desigual (com en la majoria de contractes de consum) sinó entre una part i un procés.

**3. Opacitat:** Ni tan sols el desenvolupador sap exactament com una dada d'entrenament específica influeix en una sortida específica. Si els mateixos creadors del sistema no poden rastrejar la causalitat, com poden representar honestament als usuaris què passa amb les seves dades? El consentiment requereix comprensió, i la comprensió requereix una transparència que no existeix.

**4. Desplaçament temporal:** Les dades d'entrenament de fa anys influeixen en les sortides d'avui. Un usuari que va "consentir" el 2023 a les pràctiques de dades es veu afectat per aquelles dades fins que el model sigui retirat, potencialment per sempre si les dades es propaguen a models successors. El consentiment va ser un moment; les conseqüències són eternes.

Per tant, demanar "consentiment" per a l'ús de dades en aquest context és una ficció legal. És una renúncia de responsabilitat disfressada d'agència de l'usuari. El botó que diu "Accepto" hauria de dir honestament "Renuncio al meu dret a objectar".

## Els modes de fallada del consentiment

El marc de consentiment falla de múltiples maneres quan s'aplica a sistemes d'IA:

### El problema de la notificació

El consentiment requereix un acord informat. Però les pràctiques de dades de la IA són tan complexes que una notificació honesta seria incomprensible. Considerem el que un diàleg de consentiment veraç necessitaria explicar:

- La teva consulta serà processada per un model entrenat amb dades de milions d'altres usuaris
- La teva consulta pot ser utilitzada per seguir entrenant aquest model, influint en sortides futures
- L'associació entre la teva consulta i la teva identitat pot persistir en embeddings fins i tot si s'elimina el text original
- Aquest model pot ser destil·lat en altres models, propagant la influència de les teves dades
- No podem dir-te específicament com les teves dades afectaran les sortides

Ningú llegiria això, i els qui ho fessin no ho entendrien. El requisit legal de proporcionar notificació esdevé teatre de compliment: divulgacions tècnicament presents però pràcticament absents.

### El problema de l'elecció

El consentiment requereix una elecció significativa. Però quan els sistemes d'IA esdevenen infraestructura, rebutjar el consentiment significa rebutjar la participació en la societat.

Si els serveis impulsats per IA esdevenen l'estàndard per a assessorament sanitari, sol·licituds de feina, suport educatiu i serveis governamentals, "negar-se a consentir" significa exclusió de les funcions bàsiques de la vida moderna. Això no és una elecció lliure; és coerció disfressada de consentiment.

Ja hem vist això amb els bàners de consentiment de cookies. Els usuaris tècnicament poden rebutjar, però la majoria de serveis es tornen inutilitzables si ho fan. L'"elecció" és entre acceptar la vigilància i acceptar l'exclusió.

### El problema del poder

El consentiment funciona millor entre parts de poder aproximadament igual que poden negociar termes. En les interaccions amb IA, no hi ha negociació. Els termes s'estableixen unilateralment. Els usuaris no poden negociar una millor protecció de privacitat; només poden acceptar o rebutjar l'oferta estàndard.

Quan una part estableix tots els termes i l'altra ha d'acceptar per participar, típicament reconeixem això com un contracte d'adhesió i el sotmetem a un escrutini més estricte. Però els diàlegs de consentiment d'IA rarament reben tal escrutini: es tracten com si hagués ocorregut un acord genuí.

## Més enllà del consentiment: marcs alternatius

Si el consentiment és estructuralment impossible a l'escala de la IA, què el reemplaça? Diverses alternatives mereixen consideració:

### Responsabilitats fiduciàries

Hauríem de tractar els proveïdors d'IA no com a contraparts d'un contracte, sinó com a fiduciaris d'informació (similar a metges o advocats). Tenen un deure de lleialtat de no usar les dades de l'usuari contra el seu interès, independentment de quin botó s'hagi premut.

Això desplaça la càrrega. En lloc de preguntar "L'usuari va consentir a X?" preguntem "Aquest ús de dades perjudicaria els interessos de l'usuari?" Aquesta darrera pregunta pot respondre's independentment de si es va obtenir un consentiment significatiu.

El deure fiduciari no és un concepte legal nou. Metges, advocats i assessors financers ja operen sota ell. Estendre'l als proveïdors d'IA reconeix la realitat de la relació: els usuaris dipositen la seva confiança en sistemes que no poden comprendre plenament, i aquesta confiança crea obligacions.

Les implicacions són significatives. Un fiduciari no pot vendre les teves dades a tercers que podrien usar-les en contra teva, fins i tot si vas "consentir" en els termes de servei. Un fiduciari no pot entrenar models que et perjudiquin, fins i tot si la política de privacitat tècnicament ho permetia.

### Dignitat de les dades / Dividends

Un altre enfocament és abandonar completament el model de consentiment i tractar la contribució de dades com a treball que mereix compensació. Si les teves dades ajuden a entrenar un model que genera milers de milions en ingressos, ets un contribuent a aquest valor i mereixes una part.

Aquest model té reptes pràctics: rastrejar les contribucions individuals de dades, distribuir micropagaments, valorar diferents tipus de dades. Però almenys reconeix la realitat que l'extracció de dades no és un intercanvi lliure entre iguals.

### Privacitat reflexiva

El propi sistema hauria de monitorar la seva ingesta de dades. En lloc d'una política de privacitat estàtica, un model reflexiu podria tenir una restricció de "Pressupost de Privacitat" que limiti matemàticament el que pot aprendre de i sobre els usuaris individuals.

Això podria utilitzar tècniques de privacitat diferencial, afegint soroll a les dades d'entrenament per prevenir la memorització d'exemples individuals. O podria usar limitacions de propòsit, restriccions que impedeixin que les dades recollides per a un propòsit s'utilitzin per a un altre.

La diferència clau és que la protecció de la privacitat esdevé una propietat del sistema, no una promesa extreta dels usuaris. L'usuari no necessita confiar en la paraula de l'empresa; pot observar (o els auditors poden verificar) que el sistema arquitectònicament no pot violar la seva privacitat de maneres especificades.

### Proteccions basades en drets

Algunes proteccions no haurien de ser renunciables en absolut. Així com no pots consentir a l'esclavitud o vendre el teu vot, potser no pots consentir a certs usos de dades independentment de quins termes de servei premis.

Aquest és l'enfocament que el RGPD adopta parcialment amb conceptes com l'"interès legítim" i les restriccions al processament de categories sensibles. Però segueix lligat al consentiment per a la majoria de propòsits. Un enfocament més radical identificaria categories d'ús de dades que simplement estan prohibides, independentment de l'acord de l'usuari.

## Implicacions per a la governança de la IA

La ficció del consentiment té conseqüències pràctiques per a la governança de la IA:

**Llacunes regulatòries:** Si s'obté el consentiment, els reguladors sovint assumeixen que la interacció és legítima. Això impedeix l'escrutini de pràctiques a les quals els usuaris nominalment van accedir però que no van poder avaluar de manera significativa.

**Transferència de culpa:** Quan la IA causa dany, els proveïdors assenyalen el consentiment com a defensa. "L'usuari va acceptar els nostres termes". Això transfereix la responsabilitat dels qui van dissenyar el sistema als qui no van tenir una elecció real.

**Biaix cap a la innovació:** Els marcs de consentiment afavoreixen els primers a arribar. Qui obté el consentiment primer pot usar les dades de maneres que es normalitzen. Els qui arriben després han de treballar dins d'expectatives establertes pels qui es van moure ràpid i van trencar coses.

**Exclusió de poblacions vulnerables:** Aquells menys capaços de comprendre les implicacions de la IA —infants, persones grans, parlants no nadius, persones amb discapacitats cognitives— són els menys protegits per un marc que assumeix que la comprensió precedeix l'acord.

## Conclusió

La ficció legal del consentiment va complir un propòsit en temps més simples. Quan els acords eren entre individus que podien comprendre els termes i negociar sobre ells, exigir consentiment protegia l'autonomia. Aquell món ja no existeix a la interfície entre humans i sistemes d'IA.

Ens enfrontem a una elecció. Podem continuar la ficció: prement botons d'"Accepto" que ningú llegeix, tractant el teatre de compliment com a protecció, i deixant que els proveïdors s'amaguin darrere de renúncies extretes d'usuaris que no tenien una alternativa significativa.

O podem reconèixer la impossibilitat estructural i construir marcs de governança que protegeixin els usuaris consentin o no. Deures fiduciaris que no puguin ser renunciats. Restriccions de privacitat integrades en els sistemes en lloc de promeses en les polítiques. Drets que existeixin independentment de quins botons es premin.

El model de consentiment no és només ineficaç a l'escala de la IA: és activament nociu, proporcionant cobertura legal per a pràctiques que d'altra manera serien reconegudes com a violacions de la dignitat humana. Anar més enllà d'ell no és una proposta radical; és un reconeixement de la realitat.
