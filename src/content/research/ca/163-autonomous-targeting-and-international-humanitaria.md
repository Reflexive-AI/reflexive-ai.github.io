---
title: "Objectiu Autònom i Dret Internacional Humanitari"
excerpt: "Examinant les implicacions dels sistemes d'objectiu autònom per al Dret Internacional Humanitari, incloent-hi els principis de distinció, proporcionalitat i responsabilitat."
date: 2026-02-27
categories:
  - AI Governance
  - Military Ethics
  - International Law
tags:
  - autonomous-weapons
  - international-humanitarian-law
  - ai-governance
  - accountability
  - proportionality
version: "1.0"
toc: true
---

**Objecte de Recerca Reflexiva 163**  
*Tipus: Anàlisi de Recerca i Governança*

## Introducció

La integració de la intel·ligència artificial (IA) en els sistemes militars ha plantejat profundes qüestions ètiques, legals i tècniques, especialment pel que fa als sistemes d'objectiu autònom. Aquests sistemes, capaços d'identificar i atacar objectius amb una intervenció humana mínima o nul·la, desafien els principis fonamentals del Dret Internacional Humanitari (DIH). El DIH, també conegut com el Dret dels Conflictes Armats, està dissenyat per limitar els efectes de la violència armada, protegir els civils i regular la conducció de les hostilitats. Els sistemes d'objectiu autònom—sovint anomenats sistemes d'armes autònomes letals (LAWS, per les seves sigles en anglès)—plantegen reptes als principis del DIH com ara la distinció, la proporcionalitat i la responsabilitat.

Aquest article examina la intersecció entre l'objectiu autònom i el DIH, destacant les preocupacions clau i les possibles estratègies de governança. Analitzant els desafiaments que presenten aquests sistemes, pretenem contribuir als debats en curs sobre la regulació de les armes autònomes i el paper més ampli de la IA en la guerra.

## Els principis del Dret Internacional Humanitari

El Dret Internacional Humanitari es basa en diversos principis fonamentals:

1. **Distinció**: Les parts en conflicte han de distingir entre combatents i civils, assegurant-se que els atacs es dirigeixin només a objectius militars legítims.
2. **Proporcionalitat**: El dany causat als civils o a la propietat civil no ha de ser excessiu en relació amb l'avantatge militar esperat.
3. **Necessitat**: Les accions militars han de ser necessàries per assolir un objectiu militar legítim.
4. **Responsabilitat**: Les violacions del DIH han de ser abordades, i els responsables han de ser responsabilitzats.

Els sistemes d'objectiu autònom desafien aquests principis de maneres úniques. A diferència dels operadors humans, els sistemes d'IA manquen d'intuïció moral i es basen completament en regles preprogramades o models d'aprenentatge automàtic. Això planteja preguntes sobre la seva capacitat per complir amb les normes del DIH en entorns complexos i reals.

## Reptes al principi de distinció

El principi de distinció requereix que els combatents diferenciïn entre objectius militars i civils. Els sistemes d'objectiu autònom es basen en entrades de dades—com lectures de sensors, imatges i algorismes predefinits—per identificar objectius. Tanmateix, aquests sistemes s'enfronten a limitacions significatives a l'hora de distingir de manera fiable civils de combatents en entorns complexos i dinàmics.

### Limitacions i biaixos de les dades

Els sistemes autònoms són tan efectius com les dades amb què han estat entrenats. Els biaixos en les dades, els conjunts de dades incomplets i les tàctiques adversàries (per exemple, combatents disfressant-se de civils) poden minar la precisió de la identificació d'objectius. Per exemple, un sistema entrenat amb dades d'una zona de conflicte específica pot fallar quan s'implementa en un context cultural o ambiental diferent. Aquestes limitacions recorden les preocupacions plantejades a [Language Model Bias Against Low-Resource Languages](/research/134-language-model-bias-against-low-resource-languages), on l'absència de dades diverses i representatives crea fallades sistèmiques.

### Judicis contextuals

Fins i tot amb sensors i algorismes avançats, els sistemes d'IA tenen dificultats amb els judicis contextuals. Un soldat humà podria interpretar senyals subtils—com el llenguatge corporal o la presència de nens no combatents—com a indicadors per no disparar. Els sistemes autònoms, en canvi, manquen de la consciència situacional necessària per prendre decisions tan matisades. Aquesta limitació augmenta el risc de violacions del principi de distinció, incrementant la probabilitat de víctimes civils.

## Proporcionalitat i risc d'escalada

El principi de proporcionalitat prohibeix els atacs en què el dany esperat als civils superi l'avantatge militar. Els sistemes d'objectiu autònom presenten un doble repte per a aquest principi: primer, la seva capacitat per avaluar la proporcionalitat és fonamentalment limitada; segon, la seva velocitat i autonomia poden conduir a una escalada ràpida de la violència.

### Manca de judici humà

Avaluar la proporcionalitat requereix un raonament moral complex, ponderant el valor d'un objectiu militar contra els possibles costos humanitaris. Tot i que la IA pot ser programada per estimar danys col·laterals, no pot fer judicis morals sobre què constitueix un dany "excessiu". Això és especialment preocupant en escenaris amb informació incompleta o ambigua, on els comandants humans podrien exercir contenció però un sistema autònom podria no fer-ho.

### Bucles de retroalimentació i escalada

Els sistemes autònoms operen a velocitat de màquina, potencialment atacant múltiples objectius en ràpida successió. Aquesta velocitat d'operació, combinada amb una supervisió limitada, crea un risc de bucles de retroalimentació on els sistemes autònoms interpreten erròniament les accions dels altres, escalant els conflictes de manera inadvertida. Aquests riscos subratllen la importància del "control humà significatiu", un concepte explorat a [Meaningful Human Control: Operationalizing the Standard](/research/162-meaningful-human-control-operationalizing-the-stan).

## Llacunes de responsabilitat en l'objectiu autònom

Un dels temes més controvertits al voltant dels sistemes d'objectiu autònom és la responsabilitat. El DIH requereix que els individus o els estats siguin responsabilitzats per les violacions de la llei. Tanmateix, la delegació de la presa de decisions a les màquines complica aquest requisit.

### Difusió de la responsabilitat

Quan un sistema autònom comet una violació—com atacar un comboi civil—qui és responsable? Els possibles candidats inclouen els desenvolupadors del sistema, els comandants militars que el van desplegar o l'estat mateix. Aquesta difusió de la responsabilitat dificulta assignar culpabilitat i minva l'efecte dissuasiu del DIH.

### El paper de l'explicabilitat

La responsabilitat es complica encara més per la naturalesa de "caixa negra" de molts sistemes d'IA. Els models d'aprenentatge automàtic, especialment els algorismes d'aprenentatge profund, sovint operen de maneres que no són fàcilment interpretables pels humans. Sense explicabilitat, esdevé gairebé impossible determinar per què un sistema va prendre una decisió específica, i encara menys si va actuar dins dels límits del DIH.

## Enfocaments de governança i regulació

Davant dels desafiaments que els sistemes d'objectiu autònom plantegen al DIH, hi ha una necessitat urgent de mecanismes de governança efectius. Els esforços reguladors actuals, com la Convenció sobre Certes Armes Convencionals (CCW), han fet progressos limitats en establir normes vinculants per a les armes autònomes. Tanmateix, diverses estratègies de governança mereixen consideració:

### Proves i certificació prèvies al desplegament

Un enfocament potencial és l'establiment de processos rigorosos de proves i certificació prèvies al desplegament. Es podria requerir que els sistemes autònoms demostrin el compliment dels principis del DIH en condicions controlades abans del seu desplegament. Aquest enfocament s'alinea amb esforços més amplis per estandarditzar la seguretat de la IA, com es discuteix a [Benchmarking AI Safety: Beyond Capability Evaluations](/research/144-benchmarking-ai-safety-beyond-capability-evaluatio).

### Normes i prohibicions internacionals

Alguns estats i organitzacions de la societat civil defensen una prohibició preventiva de les armes autònomes. Tot i que una prohibició completa s'enfronta a obstacles polítics i pràctics, mesures incrementals—com limitar l'autonomia dels sistemes utilitzats en zones urbanes o civils—podrien mitigar els riscos. Les normes internacionals, fins i tot si no són vinculants, també poden jugar un paper en modelar el comportament dels estats i reduir el desplegament de sistemes d'alt risc.

### Requisits de supervisió humana

Garantir que els operadors humans mantinguin un control significatiu sobre els sistemes autònoms és una altra estratègia crítica de governança. Això podria implicar salvaguardes tècniques, com requerir autorització humana per a accions letals, o polítiques operatives que exigeixin una supervisió humana propera.

## Conclusió

Els sistemes d'objectiu autònom representen un desafiament profund per al Dret Internacional Humanitari. La seva incapacitat per distingir de manera fiable entre combatents i civils, avaluar la proporcionalitat i proporcionar responsabilitat posa en risc els fonaments legals i ètics de la guerra. Abordar aquests desafiaments requereix una combinació d'innovació tècnica, proves rigoroses i marcs de governança robustos.

A mesura que el ritme del desenvolupament de la IA s'accelera, la necessitat de cooperació internacional i claredat reguladora es fa cada vegada més urgent. Els principis del DIH no han de ser compromesos en la recerca d'avantatges militars; en canvi, han de guiar el desenvolupament i el desplegament responsables dels sistemes autònoms.

*L'abast d'aquest article es limita als desafiaments legals i ètics plantejats pels sistemes d'objectiu autònom sota el Dret Internacional Humanitari actual. La recerca futura hauria d'explorar les implicacions més àmplies de la IA en la guerra, incloent-hi el seu impacte en l'estabilitat global i el potencial per a curses armamentístiques.*

## Articles relacionats

1. [Autonomous Weapons: The State of Treaty Negotiations](/research/161-autonomous-weapons-the-state-of-treaty-negotiation)  
2. [Meaningful Human Control: Operationalizing the Standard](/research/162-meaningful-human-control-operationalizing-the-stan)  
3. [Benchmarking AI Safety: Beyond Capability Evaluations](/research/144-benchmarking-ai-safety-beyond-capability-evaluatio)