---
title: "Monitorització de models desplegats"
excerpt: "Un marc integral per garantir la seguretat, fiabilitat i rendició de comptes dels models d'IA després del seu desplegament."
date: 2026-02-03
toc: true
categories:
  - Risk Management
tags:
  - monitoring
  - ai-safety
  - governance
  - accountability
version: "1.0"
---

## Introducció

A mesura que els sistemes d'intel·ligència artificial (IA) es tornen més potents i es despleguen de manera generalitzada, la seva monitorització posterior al desplegament esdevé un component crític de la governança, la seguretat i la rendició de comptes. Tot i que les avaluacions prèvies al desplegament, com els [Marcs d'avaluació de riscos previs al desplegament](/research/047-pre-deployment-risk-assessment), són essencials per identificar i mitigar riscos, la naturalesa dinàmica dels entorns reals requereix una supervisió contínua. Els models d'IA desplegats sovint interactuen amb condicions imprevisibles, distribucions de dades canviants i actors adversaris. Sense mecanismes de monitorització robustos, aquests sistemes corren el risc de fallar, ser utilitzats indegudament o causar danys a gran escala.

Aquest article explora la importància crítica de la monitorització de models d'IA desplegats, desglossant la qüestió en aspectes diferenciats: per què la monitorització és necessària, els reptes que comporta, els components d'un marc de monitorització eficaç i les consideracions clau de governança. En abordar aquestes facetes, pretenem proporcionar als responsables polítics, desenvolupadors i organismes de supervisió coneixements pràctics per gestionar els sistemes d'IA de manera responsable després del seu desplegament.

## Per què importa la monitorització

### El panorama canviant de riscos

Els models d'IA, un cop desplegats, no operen en entorns estàtics. Les distribucions de dades canvien (un fenomen sovint anomenat "deriva de dades"), els comportaments dels usuaris evolucionen i els adversaris poden explotar vulnerabilitats. Per exemple, un sistema de moderació de contingut basat en IA, entrenat amb un conjunt específic de publicacions a xarxes socials, pot tornar-se menys eficaç amb el temps a mesura que sorgeixen noves expressions col·loquials o tàctiques adversàries. De manera similar, en àmbits d'alt risc com l'atenció sanitària, els models dissenyats per al suport diagnòstic poden trobar-se amb condicions poc freqüents no representades en les seves dades d'entrenament, posant en risc la seguretat del pacient.

La monitorització de models desplegats no consisteix només a detectar aquests canvis, sinó també a mantenir la confiança. Els usuaris, els reguladors i altres parts interessades necessiten la certesa que els sistemes d'IA funcionen segons el que s'ha previst i que les desviacions es detecten i corregeixen de manera oportuna. Sense monitorització, la rendició de comptes s'erosiona i augmenta la probabilitat de fallades sistèmiques.

### Exemples de fallades degudes a una monitorització insuficient

Hi ha nombrosos exemples reals de fallades d'IA vinculades a una supervisió post-desplegament inadequada:

- **Algorismes de policia predictiva:** Alguns sistemes de policia predictiva han perpetuat biaixos racials perquè les seves dades d'entrenament reflectien inequitats històriques. Sense monitorització, aquests biaixos van quedar sense abordar, agreujant el dany social.
- **Sistemes de detecció de frau financer:** En els serveis financers, els models de detecció de frau poden tornar-se menys eficaços a mesura que els defraudadors adapten les seves tècniques. La manca de monitorització i reentrenament d'aquests models condueix a més vulnerabilitats.
- **Models de llenguatge en ús obert:** Els models generatius de propòsit general com GPT-3 s'han desplegat amb salvaguardes limitades, donant lloc a resultats que reforcen estereotips o propaguen desinformació. La monitorització en temps real podria mitigar aquests riscos assenyalant resultats perjudicials.

Aquests exemples subratllen la necessitat de mecanismes de monitorització robustos per garantir que els sistemes d'IA desplegats continuïn sent segurs, eficaços i alineats amb els valors socials.

## Reptes de la monitorització de models d'IA desplegats

### Reptes tècnics

La monitorització dels sistemes d'IA és intrínsecament complexa a causa de diversos factors tècnics:

1. **Opacitat del model:** Molts sistemes d'IA, especialment els models d'aprenentatge profund, funcionen com a "caixes negres", cosa que dificulta la interpretació dels seus processos de presa de decisions. Aquesta opacitat complica la identificació de modes de fallada.
2. **Escalabilitat:** Els sistemes de monitorització han d'operar a escala, processant sovint milions d'interaccions o prediccions en temps real. Dissenyar una infraestructura capaç de gestionar aquesta càrrega és un repte significatiu d'enginyeria.
3. **Definició de normalitat:** Determinar què constitueix un comportament "normal" per a un sistema d'IA pot ser altament dependent del context. En entorns dinàmics, els llindars de rendiment acceptable poden requerir ajustos periòdics.

### Reptes de governança

Els marcs de governança per a la monitorització es troben encara en fase inicial. Les qüestions clau inclouen:

- **Buits de responsabilitat:** Sovint no queda clar qui és responsable de la monitorització: el desenvolupador, l'operador o un regulador extern.
- **Retard regulatori:** Les regulacions existents sovint no exigeixen requisits de monitorització específics, deixant que les organitzacions estableixin els seus propis estàndards.
- **Desigualtats de recursos:** Les organitzacions petites poden mancar dels recursos per implementar sistemes de monitorització robustos, creant estàndards de seguretat desiguals en tota la indústria.

### Riscos adversaris

Els models desplegats són vulnerables a atacs adversaris. Per exemple, els adversaris poden alterar subtilment les entrades per enganyar els sistemes d'IA, un problema conegut com a exemples adversaris. Els sistemes de monitorització s'han de dissenyar per detectar i mitigar aquests atacs en temps real, cosa que afegeix una altra capa de complexitat.

## Components d'un marc de monitorització eficaç

### Validació contínua de rendiment

El primer pilar de la monitorització és la validació contínua del rendiment del model respecte a mètriques predefinides. Això implica:

- **Detecció de deriva:** Identificar quan les dades d'entrada difereixen significativament de les dades d'entrenament. Eines com els gràfics de control estadístic de processos o els detectors de deriva basats en aprenentatge automàtic poden resultar útils.
- **Mètriques robustes:** Utilitzar mètriques adaptades al domini d'aplicació específic. Per exemple, en un sistema de diagnòstic mèdic, mètriques com la sensibilitat i l'especificitat poden ser crítiques, mentre que la precisió i l'exhaustivitat podrien ser més rellevants per a un sistema de moderació de contingut.

### Informe d'incidents i escalament

Un marc de monitorització eficaç ha d'incloure mecanismes per a l'informe d'incidents. Quan es detecten anomalies, han d'existir protocols clars per a la investigació i l'escalament. Aquest procés podria beneficiar-se de les idees exposades a [El problema de la IA honesta](/research/029-honest-ai), que analitza la importància que els sistemes siguin capaços d'informar sobre les seves pròpies limitacions.

### Bucles de retroalimentació

Els bucles de retroalimentació són essencials per adaptar-se a les condicions canviants. Aquests bucles impliquen el reentrenament o l'ajust fi dels models en funció de dades noves o requisits en evolució. Per exemple, un sistema de recomanació podria necessitar actualitzacions periòdiques per tenir en compte els canvis estacionals en les preferències dels usuaris.

### Mecanismes de transparència

Els marcs de monitorització han de ser transparents per a les parts interessades. Això inclou proporcionar documentació clara dels processos de monitorització, els llindars i les accions correctores. La transparència fomenta la confiança i permet auditories externes, en consonància amb els principis discutits a [Sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints).

## Consideracions de governança

### Estàndards i certificació

El desenvolupament de protocols de monitorització estandarditzats pot ajudar a garantir la coherència entre indústries i geografies. Els règims de certificació, tal com s'exploren a [Règims de certificació per a sistemes d'IA](/research/041-certification-regimes), podrien exercir un paper clau en la verificació que els marcs de monitorització compleixen els estàndards mínims de seguretat i fiabilitat.

### Estructures de rendició de comptes

Una monitorització eficaç requereix estructures de rendició de comptes clares. Les organitzacions haurien de designar funcions o equips específics per supervisar les activitats de monitorització, i aquestes entitats han d'estar facultades per prendre accions correctores quan sigui necessari. Les estructures de governança també podrien incloure organismes de supervisió externs per garantir la imparcialitat.

### Governança de dades

Els sistemes de monitorització depenen de grans volums de dades, cosa que planteja qüestions sobre privacitat i seguretat de les dades. Cal polítiques sòlides de governança de dades per equilibrar la necessitat de monitorització amb els drets de privacitat dels usuaris.

## Tendències emergents en la monitorització

### Monitorització assistida per IA

Els sistemes d'IA es poden utilitzar per monitoritzar altres sistemes d'IA. Per exemple, els metamodels dissenyats per detectar anomalies en les sortides de models desplegats representen una àrea de recerca prometedora. No obstant això, l'ús d'IA per a la monitorització introdueix els seus propis riscos, com les fallades en cascada.

### Desenvolupaments regulatoris

Els governs i els organismes reguladors estan començant a abordar la necessitat de monitorització post-desplegament. Per exemple, la Llei d'IA de la UE inclou disposicions per a la gestió contínua de riscos, que podria servir com a model per a altres jurisdiccions.

### Plataformes de monitorització obertes

Les plataformes obertes i col·laboratives per a la monitorització de sistemes d'IA són una altra tendència emergent. Aquestes plataformes permeten que múltiples parts interessades, incloses les organitzacions de la societat civil, contribueixin als esforços de monitorització, millorant la transparència i la rendició de comptes.

## Conclusió

La monitorització de models d'IA desplegats és una pedra angular de la governança responsable de la IA. A mesura que els sistemes d'IA s'integren cada vegada més en funcions socials crítiques, els riscos de descuidar la monitorització post-desplegament creixen exponencialment. Aquest article ha exposat la necessitat de la monitorització, els reptes que comporta i els components d'un marc de monitorització eficaç. En abordar aquests aspectes, les parts interessades poden garantir que els sistemes d'IA continuïn sent segurs, fiables i alineats amb els valors socials al llarg del temps.

*Aquest article se centra en els principis generals per a la monitorització de models desplegats i no aborda els reptes específics de cada domini en detall (p. ex., atenció sanitària o vehicles autònoms). La recerca futura hauria d'explorar aquestes àrees de manera més exhaustiva.*

## Articles relacionats

- [Sistemes d'IA que expliquen les seves restriccions](/research/026-explaining-constraints)
- [El problema de la IA honesta](/research/029-honest-ai)
- [Règims de certificació per a sistemes d'IA](/research/041-certification-regimes)
