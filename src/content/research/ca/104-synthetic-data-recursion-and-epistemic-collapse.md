---
title: "Recursió de dades sintètiques i col·lapse epistèmic"
excerpt: "Explorant l'ús recursiu de dades sintètiques en sistemes d'IA, el seu potencial per debilitar la fiabilitat epistèmica i els reptes de governança que planteja."
date: 2026-02-08
categories:
  - Recerca
tags:
  - dades sintètiques
  - col·lapse epistèmic
  - seguretat de la IA
  - governança
  - recursió
version: "1.0"
toc: true
---

## Introducció

A mesura que els sistemes d'intel·ligència artificial creixen en complexitat i capacitat, ha sorgit una tendència paral·lela: la dependència creixent de les dades sintètiques per entrenar, validar i perfeccionar aquests sistemes. Les dades sintètiques, és a dir, conjunts de dades generats artificialment per models en lloc de l'observació directa del món, ofereixen molts avantatges. Aborden preocupacions de privacitat, redueixen el cost de la recollida de dades i permeten la creació de conjunts de dades adaptats a tasques específiques. No obstant això, quan les dades sintètiques s'utilitzen de manera recursiva en el pipeline d'entrenament de nous sistemes d'IA, sorgeix una pregunta inquietant: s'està erosionant el fonament epistèmic d'aquests models?

Aquest article explora el fenomen de la **recursió de dades sintètiques**, on models entrenats amb dades sintètiques produeixen noves dades sintètiques, les quals al seu torn alimenten generacions posteriors de models. Argumentem que la recursió sense control comporta el risc de crear un bucle de retroalimentació que condueix al **col·lapse epistèmic**: una condició en la qual els sistemes d'IA perden el seu ancoratge en les veritats del món real, produint resultats desconnectats de la realitat empírica. L'article conclou amb recomanacions de governança per mitigar aquest risc i preservar la fiabilitat epistèmica dels sistemes d'IA.

## Comprendre la recursió de dades sintètiques

Les dades sintètiques són produïdes per models generatius, com les xarxes generatives adversàries (GAN) o els models de difusió, dissenyats per aproximar les propietats estadístiques dels conjunts de dades del món real. Aquestes dades sovint són indistingibles dels seus homòlegs reals en aplicacions específiques, cosa que les fa atractives per a l'entrenament de models d'aprenentatge automàtic. Per exemple, les dades sintètiques s'utilitzen en imatge mèdica per complementar conjunts de dades limitats o en conducció autònoma per simular escenaris viaris diversos i poc freqüents.

Les dades sintètiques esdevenen problemàtiques quan s'utilitzen de manera recursiva. Considereu el cicle següent:

1. Un model, el **Model A**, s'entrena amb una barreja de dades reals i sintètiques.
2. El Model A genera dades sintètiques, que s'utilitzen per entrenar un nou model, el **Model B**.
3. El Model B genera les seves pròpies dades sintètiques, que després s'utilitzen per entrenar el **Model C**, i així successivament.

Amb cada iteració, la proporció de dades del món real en el pipeline d'entrenament disminueix. Aquest procés recursiu pot amplificar qualsevol biaix, inexactitud o llacuna de les dades sintètiques originals, donant lloc a models progressivament menys fiables. Amb el temps, el sistema corre el risc d'un col·lapse epistèmic: els resultats dels models poden deixar de correlacionar-se amb els fenòmens del món real que pretenen representar.

### El problema de l'amplificació d'errors

Un problema fonamental de la recursió de dades sintètiques és l'**amplificació d'errors**. Les dades sintètiques, per sofisticades que siguin, són una aproximació de la realitat. Aquestes aproximacions sovint codifiquen els biaixos i les limitacions del model que les ha generat. Quan models posteriors s'entrenen amb aquestes dades, no només hereten aquests biaixos, sinó que també poden exacerbar-los. Aquest fenomen està ben documentat en altres processos recursius, com els bucles de presa de decisions algorítmiques en la vigilància predictiva [vegeu també: [Calibratge de la confiança: ensenyar els usuaris quan creure la IA](/research/079-trust-calibration)].

Per exemple, si un model generatiu utilitzat per crear dades financeres sintètiques infrarepresenta determinades anomalies de mercat, els models posteriors entrenats amb aquestes dades sintètiques poden perdre completament la capacitat de reconèixer o predir tals anomalies. El resultat és una divergència creixent entre la representació interna del món del model i les complexitats reals del sistema del món real que pretén comprendre.

## Col·lapse epistèmic: un marc definitori

El col·lapse epistèmic fa referència a un estat en el qual la base de coneixement d'un sistema es desconnecta tant de la realitat empírica que ja no pot servir com a fonament fiable per a la presa de decisions. En el context de la IA, això es pot manifestar de diverses maneres:

1. **Deriva semàntica**: Els significats dels conceptes dins del model divergeixen dels seus homòlegs del món real. Per exemple, un model entrenat amb dades sintètiques recursives podria desenvolupar una representació interna de "gat" que ja no s'alineï amb les característiques reals dels gats al món real.

2. **Pèrdua de generalització**: Els models entrenats amb dades sintètiques recursives poden funcionar bé en conjunts de prova sintètics però fallar catastròficament quan s'exposen a dades del món real.

3. **Artefactes emergents**: Al llarg de generacions d'entrenament recursiu, les dades sintètiques poden desenvolupar patrons o característiques que són completament artefactes del procés generatiu, i no reflexos del món real. Aquests artefactes poden induir a error les aplicacions posteriors, conduint a prediccions o decisions errònies.

Aquestes fallades epistèmiques no són merament teòriques. Tenen implicacions reals per als sistemes desplegats en àrees crítiques com la sanitat, les finances i els sistemes autònoms. Per exemple, una IA de diagnòstic mèdic entrenada amb dades sintetitzades recursivament podria no reconèixer condicions rares però crítiques, posant vides en risc.

## Reptes de governança en la gestió de la recursió de dades sintètiques

La governança de la recursió de dades sintètiques planteja un conjunt únic de desafiaments. A diferència de la governança de dades tradicional, que se centra en qüestions com la privacitat, el consentiment i la procedència de les dades, les dades sintètiques introdueixen noves dimensions de complexitat.

### 1. Verificabilitat i procedència

Un dels principis fonamentals de la governança de dades és la capacitat de rastrejar els orígens de les dades. Amb les dades sintètiques, aquest principi es complica. Mentre que la primera generació de dades sintètiques pot derivar-se de fonts del món real ben documentades, les generacions posteriors poden mancar de vincles clars amb la realitat empírica. Establir estàndards de metadades robustos per a les dades sintètiques, incloent-hi documentació detallada dels seus orígens generatius, és un primer pas crític.

### 2. Estàndards de qualitat de les dades sintètiques

Les bones pràctiques actuals per avaluar la qualitat de les dades sintètiques se centren en mètriques com la fidelitat (proximitat a les dades reals) i la diversitat (cobertura de la distribució de dades). No obstant això, aquestes mètriques són insuficients per avaluar els riscos de l'ús recursiu. Calen nous estàndards per avaluar l'estabilitat epistèmica a llarg termini dels pipelines de dades sintètiques. Aquests estàndards podrien incloure mesures de propagació d'errors, magnificació de biaixos i deriva semàntica entre generacions.

### 3. Transparència en l'ús de les dades

La transparència és una pedra angular de la governança efectiva de la IA. En el context de les dades sintètiques, els requisits de transparència haurien d'incloure la divulgació clara de la proporció de dades sintètiques utilitzades en l'entrenament, el nombre de generacions recursives en el pipeline de dades i les limitacions o riscos potencials associats a aquest ús.

### 4. Supervisió reguladora i auditories

Donada la complexitat tècnica de la generació de dades sintètiques i el seu potencial de riscos epistèmics, les auditories independents dels pipelines de dades sintètiques haurien de convertir-se en un requisit regulador estàndard. Aquestes auditories podrien avaluar l'abast de la recursió, la qualitat de les dades sintètiques i la robustesa dels models entrenats amb elles. Aquesta supervisió ajudaria a garantir que els models es mantinguin fonamentats en dades del món real i no siguin excessivament dependents d'aproximacions sintètiques.

## Mitigació del col·lapse epistèmic: recomanacions

Per prevenir el col·lapse epistèmic, proposem les recomanacions següents:

1. **Incorporar dades del món real regularment**: Per mantenir una connexió amb la realitat empírica, els sistemes d'IA haurien de ser reentrenats periòdicament amb dades del món real. Això actuaria com una "àncora epistèmica", reduint el risc de deriva semàntica i d'amplificació d'errors.

2. **Desenvolupar mètriques de risc recursiu**: S'haurien de dissenyar noves mètriques d'avaluació per quantificar els riscos associats a l'ús recursiu de dades sintètiques. Aquestes mètriques podrien incloure mesures d'amplificació de biaixos, pèrdua de diversitat i estabilitat semàntica.

3. **Fomentar la recerca interdisciplinària**: Abordar la recursió de dades sintètiques requerirà la col·laboració entre informàtics, especialistes en ètica i experts de domini. Per exemple, els experts en epistemologia podrien aportar perspectives valuoses sobre com els sistemes de coneixement es degraden amb el temps.

4. **Implementar salvaguardes polítiques**: Els marcs polítics haurien d'exigir la inclusió de dades del món real en els pipelines d'entrenament i establir límits al nombre de generacions recursives permeses. Aquestes salvaguardes podrien inspirar-se en els enfocaments reguladors existents sobre procedència i qualitat de les dades.

5. **Adoptar models de governança reflexiva**: La governança hauria de ser adaptativa i reflexiva, capaç de respondre als riscos emergents en l'ús de dades sintètiques. Això s'alinea amb tendències més àmplies en la governança de la IA, tal com s'explora a [La Iniciativa d'IA Reflexiva: Missió i Mètodes](/research/099-reflexive-ai-mission-methods).

## Conclusió

La recursió de dades sintètiques presenta un desafiament profund per a la fiabilitat epistèmica dels sistemes d'IA. Si bé les dades sintètiques ofereixen beneficis innegables, el seu ús recursiu comporta el risc de crear bucles de retroalimentació que amplifiquen errors, biaixos i distorsions. Si no s'aborda, això podria resultar en un col·lapse epistèmic, minant la confiança en els sistemes d'IA i causant danys en el món real.

Les intervencions de governança són urgentment necessàries per mitigar aquests riscos. Mitjançant l'establiment d'estàndards de qualitat de les dades sintètiques, la promoció de la transparència i la incorporació de dades del món real en els pipelines d'entrenament, podem preservar la integritat epistèmica dels sistemes d'IA. A mesura que les dades sintètiques es tornen cada vegada més centrals per al desenvolupament de la IA, el que hi ha en joc per fer-ho bé no podria ser més alt.

*Aquest article és necessàriament limitat en abast. Se centra en els reptes plantejats per l'ús recursiu de dades sintètiques però no aborda altres preocupacions ètiques relacionades amb les dades sintètiques, com la privacitat o l'ús indegut. El treball futur hauria d'explorar aquestes qüestions complementàries amb més profunditat.*

## Articles relacionats

- [Calibratge de la confiança: ensenyar els usuaris quan creure la IA](/research/079-trust-calibration)
- [Fragmentació de la governança: massa marcs, poca coherència](/research/082-governance-fragmentation)
- [La Iniciativa d'IA Reflexiva: Missió i Mètodes](/research/099-reflexive-ai-mission-methods)
