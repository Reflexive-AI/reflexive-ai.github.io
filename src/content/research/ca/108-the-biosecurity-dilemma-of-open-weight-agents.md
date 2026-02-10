---
title: "El dilema de bioseguretat dels agents de pesos oberts"
excerpt: "Explorant els riscos de bioseguretat que plantegen els sistemes d'IA de pesos oberts i els reptes de governança per equilibrar innovació i seguretat."
date: 2026-02-09
categories:
  - Governança de la IA
  - Bioseguretat
tags:
  - bioseguretat
  - models-de-pesos-oberts
  - governança
  - seguretat
  - riscos-ia
version: "1.0"
toc: true
---

**Objecte de Recerca Reflexiva 108**  
*Tipus: Article de recerca*

## Introducció

La proliferació de sistemes d'intel·ligència artificial (IA) de pesos oberts —aquells amb paràmetres de model accessibles públicament— ha generat beneficis significatius en la democratització de la recerca en IA i l'acceleració de la innovació. No obstant això, aquesta obertura també introdueix riscos substancials, particularment en l'àmbit de la bioseguretat. Els agents de pesos oberts permeten que un ventall més ampli d'actors, inclosos aquells amb intencions malicioses, explotin capacitats avançades d'IA amb finalitats perjudicials, com ara el disseny de patògens o l'evasió de mesures de bioseguretat establertes.

Aquest dilema d'ús dual, on la mateixa tecnologia pot ser utilitzada tant amb finalitats beneficioses com perjudicials, no és nou. Tanmateix, en el context de la IA, s'amplifica per l'escala, la velocitat i l'accessibilitat d'aquests sistemes. Aquest article examina les implicacions de bioseguretat dels agents d'IA de pesos oberts, centrant-se en els reptes de governança que presenten, les eines tècniques i polítiques que podrien mitigar aquests riscos i els equilibris inherents entre obertura i seguretat.

## Els riscos singulars dels sistemes d'IA de pesos oberts

Els sistemes d'IA de pesos oberts, sovint publicats a través de repositoris de codi obert, proporcionen accés directe als paràmetres entrenats dels models d'aprenentatge automàtic. A diferència dels sistemes d'IA tancats, on l'accés es restringeix a APIs o casos d'ús específics, els sistemes de pesos oberts atorguen als usuaris un control total sobre les capacitats del model. Aquesta obertura té diverses implicacions per a la bioseguretat:

1. **Disseny i síntesi de patògens**: Els sistemes d'IA generativa, particularment aquells entrenats amb conjunts de dades biològiques, poden ser utilitzats per dissenyar patògens nous. L'accés de pesos oberts permet als actors maliciosos ajustar aquests models per crear soques més virulentes, transmissibles o resistents.

2. **Evasió dels controls de bioseguretat**: Els sistemes d'IA poden facilitar l'evasió de mesures de bioseguretat existents, com les emprades en els protocols de seguretat d'enginyeria genètica. Per exemple, models entrenats per optimitzar seqüències genètiques podrien ser utilitzats per eludir sistemes de cribatge dissenyats per detectar i bloquejar comandes de DNA perillós.

3. **Acceleració de la recerca maliciosa**: Els sistemes de pesos oberts redueixen les barreres d'entrada per als actors adversaris. Governs, actors no estatals i individus amb experiència tècnica limitada poden explotar aquests models sense necessitat dels recursos computacionals ni l'expertesa per entrenar sistemes des de zero.

Aquests riscos no són hipotètics. L'any 2022, un estudi de prova de concepte va demostrar que un model d'IA generativa podia dissenyar molècules semblants a agents tòxics amb una intervenció humana mínima. Tot i que el model no era de pesos oberts, l'experiment va posar de manifest la facilitat amb què la IA pot ser reutilitzada amb finalitats perjudicials. La publicació de sistemes de pesos oberts magnifica aquest risc, ja que elimina moltes de les barreres tècniques que actualment limiten l'accés.

## Reptes de governança: obertura davant seguretat

La governança dels sistemes d'IA de pesos oberts es veu complicada per la tensió entre obertura i seguretat. La transparència i l'accessibilitat en el desenvolupament de la IA han estat defensades durant molt de temps com a mecanismes per fomentar la innovació, millorar la rendició de comptes i facilitar la supervisió col·laborativa. Tanmateix, l'obertura no regulada crea vulnerabilitats que podrien ser explotades amb finalitats malicioses.

### El problema de l'atribució

Un dels reptes principals en la governança dels sistemes de pesos oberts és la dificultat d'atribució. Un cop un model és publicat, hi ha poc control sobre com s'utilitza o es modifica. Els actors maliciosos poden alterar els paràmetres del model, integrar-lo en altres sistemes o ocultar-ne els orígens, fent gairebé impossible rastrejar les aplicacions perjudicials fins a la seva font. Aquesta manca de traçabilitat mina els esforços per responsabilitzar els actors malintencionats i complica l'aplicació de les regulacions de bioseguretat.

### Estructures de governança fragmentades

Tal com es discuteix a [Fragmentació de la governança: massa marcs, poca coherència](/research/082-governance-fragmentation), el panorama global de governança de la IA continua fragmentat. Diferents països i organitzacions adopten enfocaments diversos per regular la IA, alguns prioritzant la innovació per sobre de la seguretat i d'altres imposant controls estrictes. Aquesta manca d'uniformitat crea escletxes que els actors adversaris poden explotar operant en jurisdiccions amb una supervisió més feble. Per als sistemes de pesos oberts, aquesta fragmentació és particularment problemàtica, ja que la naturalesa global d'internet permet que aquests models proliferin ràpidament a través de les fronteres.

### El dilema de la innovació

Restringir l'accés als sistemes de pesos oberts comporta el risc d'ofegar la innovació. Molts dels avenços en IA han sorgit de la col·laboració oberta i de la capacitat dels investigadors de construir sobre el treball dels altres. Limitar l'accés als pesos del model podria alentir el progrés en àrees crítiques com el descobriment de fàrmacs, la modelització climàtica i l'optimització agrícola, on la IA ja ha demostrat un potencial substancial ([La IA a l'agricultura: governança de dades](/research/083-ai-in-agriculture-data-governance)).

## Estratègies de mitigació: intervencions tècniques i polítiques

Abordar els riscos de bioseguretat dels sistemes d'IA de pesos oberts requereix un enfocament multifacètic que combini salvaguardes tècniques, intervencions polítiques i coordinació internacional. A continuació es presenten algunes de les estratègies més prometedores:

### Salvaguardes tècniques

1. **Ús de verificació criptogràfica**: Incrustar signatures criptogràfiques en els models de pesos oberts podria ajudar a rastrejar-ne l'origen i les modificacions al llarg del temps. Tal com es proposa a [Verificació criptogràfica de la intenció de la IA](/research/106-cryptographic-verification-of-ai-intent), aquestes mesures podrien dissuadir l'ús maliciós facilitant la identificació i la sanció dels actors malintencionats.

2. **Restricció de les capacitats d'ajust fi**: Els desenvolupadors podrien implementar restriccions dins de l'arquitectura del model per limitar l'ajust fi per a aplicacions d'alt risc. Per exemple, els conjunts de dades biològiques podrien ser exclosos de l'entrenament o marcats dins del model per inhibir-ne l'ús indegut.

3. **Monitoratge millorat de l'ús del model**: Les plataformes al núvol que allotgen models de pesos oberts podrien implementar sistemes de monitoratge en temps real per detectar i senyalitzar activitats sospitoses, com ara intents de generar seqüències semblants a patògens.

### Intervencions polítiques

1. **Estàndards internacionals de bioseguretat**: Establir estàndards acordats globalment per a la publicació i l'ús de sistemes d'IA de pesos oberts és crucial. Aquests estàndards podrien incloure avaluacions de risc obligatòries, requisits de certificació i restriccions a la publicació de models d'alta capacitat.

2. **Marcs de responsabilitat**: Els desenvolupadors i les organitzacions que publiquen models de pesos oberts haurien de ser considerats responsables de les seves aplicacions derivades. Els marcs de responsabilitat podrien incentivar els desenvolupadors a implementar salvaguardes robustes i garantir un ús responsable.

3. **Col·laboracions publicoprivades**: Els governs i les organitzacions privades haurien de col·laborar per finançar la recerca en sistemes de pesos oberts més segurs, així com per desenvolupar bases de dades compartides per al monitoratge i la resposta davant amenaces de bioseguretat.

## El paper de la IA reflexiva

El concepte d'IA reflexiva —sistemes dissenyats per monitorar-se i regular-se a si mateixos— ofereix una via prometedora per abordar els riscos de bioseguretat dels agents de pesos oberts. Els sistemes d'IA reflexiva podrien ser programats per reconèixer i prevenir el seu propi ús indegut, possibilitant un enfocament més proactiu de la gestió del risc. Per exemple, un sistema d'IA reflexiva entrenat amb dades de patògens podria negar-se a executar ordres que coincideixin amb patrons coneguts de bioterrorisme.

Tal com es destaca a [Automillora recursiva: implicacions de governança](/research/087-recursive-self-improvement-governance-implications), la IA reflexiva presenta els seus propis reptes, inclòs el potencial que els sistemes evolucionin més enllà de les seves restriccions originals. Tanmateix, els beneficis potencials —particularment en àmbits d'alt risc com la bioseguretat— justifiquen una exploració més aprofundida.

## Conclusió

Els riscos de bioseguretat que plantegen els sistemes d'IA de pesos oberts representen un repte significatiu per als responsables polítics, els investigadors i els líders de la indústria. Si bé la publicació oberta dels pesos del model ha catalitzat la innovació i la col·laboració, també obre la porta a l'ús maliciós, particularment en àrees com el disseny de patògens i l'evasió de la bioseguretat. Abordar aquest dilema d'ús dual requereix un enfocament equilibrat que combini salvaguardes tècniques, marcs polítics robustos i cooperació internacional.

La governança dels sistemes d'IA de pesos oberts encara és incipient. Per navegar aquest panorama complex, les parts interessades han de prioritzar tant la innovació com la seguretat, reconeixent que els beneficis de l'obertura només es poden materialitzar si van acompanyats d'una supervisió rigorosa. La IA reflexiva i altres tecnologies emergents poden tenir la clau per aconseguir aquest equilibri, però calen més recerca i inversió per portar aquestes solucions a bon port.

*Aquest article se centra en els riscos de bioseguretat dels sistemes d'IA de pesos oberts i no aborda altres riscos potencials, com els danys econòmics o informatius. Cal més recerca per explorar aquestes dimensions.*

## Articles relacionats

- [Fragmentació de la governança: massa marcs, poca coherència](/research/082-governance-fragmentation)
- [Verificació criptogràfica de la intenció de la IA](/research/106-cryptographic-verification-of-ai-intent)
- [Automillora recursiva: implicacions de governança](/research/087-recursive-self-improvement-governance-implications)
