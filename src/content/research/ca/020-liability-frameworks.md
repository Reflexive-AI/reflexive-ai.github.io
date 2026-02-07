---
title: "Marcs de responsabilitat civil per danys de la IA"
excerpt: "Quan els sistemes d'IA causen dany, qui paga? Els marcs de responsabilitat existents tenen dificultats amb les característiques distintives de la IA. Aquesta anàlisi mapeja el problema i avalua possibles solucions."
date: 2026-01-02
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - liability
  - legal-theory
  - governance
  - regulation
  - enforcement
---

## La bretxa de rendició de comptes

Un algorisme de contractació discrimina sistemàticament grups protegits. Un vehicle autònom causa un accident fatal. Una IA mèdica proporciona un diagnòstic que condueix a un tractament retardat. Un model de llenguatge assisteix algú en la planificació d'un acte danyós.

En cada cas, sorgeix una pregunta fonamental: qui és legalment responsable?

Els marcs de responsabilitat tradicionals assignen la responsabilitat a les entitats que causen dany mitjançant acció negligent o intencional. Però els sistemes d'IA compliquen aquest marc de maneres que creen bretxes de rendició de comptes — situacions en què es produeix un dany real però cap entitat s'enfronta a una responsabilitat significativa.

Comprendre aquestes bretxes és essencial per dissenyar mecanismes de governança que garanteixin que el desenvolupament de la IA procedeixi amb incentius adequats per a la seguretat.

## Per què la IA trenca la responsabilitat civil

Diverses característiques dels sistemes d'IA desafien les doctrines de responsabilitat existents.

### Causalitat distribuïda

Un resultat danyós de la IA típicament resulta de múltiples factors contribuents: les dades d'entrenament (recollides per una part), l'arquitectura del model (dissenyada per una altra), el procés d'entrenament (configurat per enginyers), el context de desplegament (triat per un operador) i l'entrada de l'usuari (proporcionada per algú més).

Quan la causalitat està tan distribuïda, no és clar quina part — si n'hi ha alguna — és legalment responsable. Cadascuna pot assenyalar les altres en la cadena. El proveïdor de dades no va construir el model; el desenvolupador del model no el va desplegar; l'operador no va proporcionar la indicació danyosa.

La responsabilitat per productes tradicional se centra en els fabricants, però el "fabricant" d'un resultat d'IA poden ser moltes entitats o cap d'elles en el sentit clàssic.

### Opacitat

La responsabilitat sovint requereix demostrar que una decisió o defecte específic va causar el dany. Per a molts sistemes d'IA, aquesta demostració és difícil o impossible. El procés de decisió del sistema no és transparent, i fins i tot els seus desenvolupadors poden no ser capaços d'explicar per què es va produir un resultat particular.

Aquesta qualitat de "caixa negra" dificulta provar la cadena causal necessària per a la responsabilitat. Fins i tot si sabem que el sistema d'IA hi va estar involucrat, és possible que no puguem demostrar que una decisió de disseny, una decisió d'entrenament o un paràmetre operatiu específic va ser la causa del dany.

### Comportament emergent

Els sistemes d'IA de vegades exhibeixen comportaments que no van ser intencionats, anticipats ni avaluats. Una capacitat podria emergir de l'escala o d'interaccions inesperades entre components. El dany resultant d'un comportament emergent és difícil d'atribuir a negligència, perquè el comportament no era previsible segons estàndards raonables.

Això connecta amb el que vam explorar a [el problema de l'excedent de capacitat](/research/009-capability-overhang/) — les capacitats que existeixen però que no han estat documentades o avaluades presenten reptes de responsabilitat perquè no eren conegudes per ningú que pogués ser considerat responsable.

### Acció autònoma

A mesura que els sistemes d'IA es tornen més autònoms — prenent decisions sense supervisió humana directa — la connexió entre les decisions humanes i els resultats danyosos es torna més tènue. La responsabilitat objectiva per a sistemes autònoms podria assignar responsabilitat amb independència de la culpa, però això planteja preguntes sobre com calibrar les indemnitzacions i si tal responsabilitat frenaria la innovació beneficiosa.

## Enfocaments actuals i les seves limitacions

Els marcs de responsabilitat existents no van ser dissenyats per a la IA i encaixen de manera imperfecta.

### Negligència

Sota els principis de negligència, una part és responsable si no va exercir una cura raonable i aquella mancança va causar dany. Aplicat a la IA, això podria significar responsabilitat per als desenvolupadors que no van fer proves adequades, els operadors que van usar sistemes en contextos inapropiats o els operadors que van ignorar senyals d'alarma.

El repte és definir "cura raonable" per a sistemes d'IA d'avantguarda. Quin nivell de proves és suficient? Quins contextos de desplegament són apropiats? Quins senyals d'alarma haurien d'haver estat reconeguts? Aquests estàndards estan evolucionant, i els tribunals poden mancar de l'experiència tècnica per establir-los.

A més, provar que una mancança específica de cura va causar el dany requereix comprendre el procés de decisió de la IA — sovint impossible donada l'opacitat.

### Responsabilitat per productes

La responsabilitat per productes fa que els fabricants siguin responsables dels productes defectuosos independentment de la negligència. Això podria semblar aplicable a la IA, però sorgeixen diverses dificultats.

És un sistema d'IA un "producte"? Els serveis solen regir-se per regles diferents. Una IA basada en el núvol accessible mitjançant API podria classificar-se com un servei en lloc d'un producte, escapant potencialment de la responsabilitat per productes.

Què constitueix un "defecte" en un sistema d'IA? Un resultat que causa dany no és necessàriament defectuós: el sistema podria estar funcionant segons el disseny mentre produeix errors rars però previsibles. O el resultat podria derivar-se de l'entrada de l'usuari en lloc d'una fallada del sistema.

### Responsabilitat vicària

Els ocupadors són responsables dels danys causats pels empleats que actuen en l'exercici de les seves funcions. Si els sistemes d'IA s'equiparen als empleats — o, més precisament, a agents que actuen en nom d'un principal — els desenvolupadors o operadors podrien assumir responsabilitat vicària per les accions de la IA.

Aquesta analogia és forçada. Els sistemes d'IA no són persones jurídiques i no poden formar intencions. Però la lògica subjacent — que les entitats que es beneficien de les accions d'un altre han d'assumir la responsabilitat dels danys que aquestes accions causen — podria donar suport a l'extensió dels principis de responsabilitat vicària.

## Cap a millors marcs

Diversos enfocaments podrien abordar les llacunes actuals.

### Responsabilitat objectiva per a IA d'alt risc

Un enfocament imposa responsabilitat objectiva als operadors de sistemes d'IA d'alt risc — responsabilitat sense requerir prova de culpa. Això crea forts incentius per a la seguretat perquè els operadors assumeixen les conseqüències independentment de si van ser negligents.

La UE ha avançat en aquesta direcció amb la seva Directiva de Responsabilitat en matèria d'IA, que crea presumpcions de causalitat per a sistemes d'alt risc i alleuja la càrrega de la prova per als demandants.

La contrapartida és la potencial dissuasió excessiva. Si la responsabilitat és massa estricta, les aplicacions d'alt risc beneficioses (la IA mèdica, per exemple) podrien no desplegar-se tot i que els seus beneficis esperats superin els seus danys esperats.

### Assegurança obligatòria

Exigir als operadors d'IA que contractin una assegurança de responsabilitat civil genera diversos beneficis. Les companyies d'assegurances tenen incentius per avaluar i fixar el preu del risc amb precisió, creant pressió de mercat per la seguretat. Les primes reflecteixen els nivells de risc, proporcionant senyals de preus que guien les decisions de desplegament. I les víctimes de danys tenen una font garantida de compensació fins i tot si l'operador es torna insolvent.

El repte és que les asseguradores poden mancar de la capacitat per avaluar els riscos de la IA, cosa que porta a primes que són massa altes (dissuadint l'ús beneficiós) o massa baixes (sense reflectir el risc real). Com vam discutir a [autoinformes vs. auditoria externa](/research/010-self-reporting-vs-audit/), avaluar les capacitats i els riscos de la IA és tècnicament difícil fins i tot per a especialistes.

### Fons de compensació

En lloc d'assignar la responsabilitat a parts específiques, algunes propostes creen fons de compensació de tota la indústria — reserves de diners aportades pels desenvolupadors d'IA que paguen a les víctimes de danys de la IA independentment de quin sistema o empresa específica va ser responsable.

Això assegura la compensació fins i tot quan l'atribució és impossible, però debilita l'incentiu perquè les empreses individuals prioritzin la seguretat, ja que els costos del dany es distribueixen entre la indústria.

### Requisits de documentació i auditoria

Els marcs de responsabilitat funcionen millor quan la informació necessària per establir responsabilitat està disponible. Els requisits de documentar els processos de desenvolupament de la IA, registrar les operacions del sistema i permetre l'anàlisi posterior de les decisions fan possible rastrejar la causalitat i assignar responsabilitat.

El nostre treball sobre [esquemes de restricció llegibles per màquina](/research/003-machine-readable-constraint-schema/) i [etiquetatge de procedència de la sortida](/research/012-output-provenance/) dona suport a aquest enfocament — creant registres estructurats que poden usar-se per comprendre què va passar quan es produeix un dany.

### Responsabilitat en la cadena de subministrament

Quan el dany resulta de la interacció de múltiples parts en una cadena de subministrament d'IA, l'assignació de responsabilitat entre elles es torna crítica. Regles clares sobre com flueix la responsabilitat a través de les cadenes de subministrament — des dels desenvolupadors de models fundacionals fins als que realitzen l'ajust fi, els operadors i els usuaris — redueixen la incertesa i garanteixen incentius per a la seguretat a cada nivell.

Això és particularment important per a l'ecosistema de models de pesos oberts, on la relació entre els desenvolupadors originals i els usuaris aigües avall s'atenua. Vam explorar qüestions relacionades a [la paradoxa de seguretat dels pesos oberts](/research/002-open-weight-safety-paradox/).

## Principis de disseny

Diversos principis haurien de guiar el disseny de marcs de responsabilitat per a la IA.

**Garantir la compensació.** Les víctimes de danys de la IA haurien de tenir accés a compensació. Els marcs de responsabilitat que deixen les víctimes sense recurs no només són injustos, sinó que minen la confiança pública en el desplegament de la IA.

**Crear incentius de seguretat.** La responsabilitat hauria d'incentivar una cura apropiada. Si les entitats que retallen en seguretat paguen els costos quan es produeixen danys, invertiran més en prevenció. Si la responsabilitat és impossible d'assignar o les indemnitzacions tenen un límit massa baix, l'incentiu desapareix.

**Evitar la dissuasió excessiva.** Els marcs de responsabilitat no haurien de dissuadir el desplegament beneficiós de la IA. Si l'exposició legal esperada d'una aplicació d'IA supera els seus beneficis esperats, no es desplegarà tot i que la seva veritable relació benefici-dany sigui favorable.

**Mantenir la viabilitat.** Els marcs de responsabilitat han de ser administrables. Si provar la causalitat o avaluar els danys és impossible a la pràctica, el marc no proporciona una rendició de comptes real independentment del seu disseny teòric.

**Adaptar-se al canvi.** Les capacitats i els patrons de desplegament de la IA evolucionen ràpidament. Els marcs de responsabilitat han de ser prou flexibles per continuar sent aplicables a mesura que la tecnologia canvia, evitant regles que es tornin obsoletes o creïn incentius perversos a mesura que la IA avança.

## Conclusió

La responsabilitat civil és un component crític de la governança de la IA. Quan es produeix un dany, hi ha d'haver rendició de comptes — tant per proporcionar justícia als perjudicats com per crear incentius que previnguin danys futurs.

Els marcs actuals són inadequats, però el camí cap a millors marcs s'està aclarint: alguna combinació de responsabilitat objectiva per a aplicacions d'alt risc, assegurança obligatòria, requisits de documentació que permetin l'atribució i regles clares d'assignació en la cadena de subministrament.

Encertar en això importa no només per a les víctimes de danys de la IA, sinó per a la legitimitat del desplegament de la IA en general. Una tecnologia que causa dany sense rendició de comptes s'enfrontarà — i hauria d'enfrontar-se — a resistència pública. Els marcs de responsabilitat eficaços ajuden a garantir que els beneficis de la IA puguin realitzar-se mentre els qui són perjudicats reben compensació i els qui causen dany assumeixen les conseqüències apropiades.

## Recerca relacionada

- [El problema de l'excedent de capacitat](/research/009-capability-overhang/)
- [Autoinformes vs. auditoria externa: compromisos](/research/010-self-reporting-vs-audit/)
- [La paradoxa de seguretat dels pesos oberts](/research/002-open-weight-safety-paradox/)
- [Etiquetatge de procedència de la sortida](/research/012-output-provenance/)
