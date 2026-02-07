---
title: "IA en l'atenció sanitària: reptes de governança"
excerpt: "La IA sanitària promet millors diagnòstics, tractaments i resultats. Però també concentra decisions crítiques en sistemes opacs. Una anàlisi de governança específica del domini."
date: 2026-01-10
categories:
  - Governance Analysis
  - Public
tags:
  - healthcare
  - safety
  - regulation
  - risk-assessment
  - liability
---

## Un domini d'alt risc

L'atenció sanitària es troba entre les aplicacions més transcendents de la IA. Els sistemes que diagnostiquen malalties, recomanen tractaments, prediuen resultats de pacients i assignen recursos mèdics afecten directament la salut i la supervivència humanes.

Els beneficis potencials són substancials. La IA pot processar imatges mèdiques amb una precisió sobrehumana, detectar patrons en dades de pacients que els humans no perceben i proporcionar suport a les decisions que millora els resultats clínics. Els estudis mostren que el diagnòstic assistit per IA supera els experts humans en dominis específics.

Però els riscos de fallada són igualment substancials. Un diagnòstic erroni pot retardar el tractament. Una recomanació defectuosa pot causar danys. Un sistema opac que els clínics no comprenen no pot ser escrutat apropiadament. La governança de la IA sanitària ha d'assegurar que els beneficis es materialitzin mentre els riscos es gestionen.

Aquesta anàlisi examina els reptes de governança distintius que la IA presenta en l'atenció sanitària.

## El panorama regulatori

La IA sanitària opera dins de marcs regulatoris existents dissenyats per a dispositius mèdics i pràctica clínica.

### Regulació de dispositius mèdics

Als Estats Units, la FDA regula els sistemes d'IA que qualifiquen com a dispositius mèdics, l'anomenat "Software as a Medical Device" (SaMD). El Reglament de Dispositius Mèdics (MDR) de la UE cobreix de manera similar la IA amb finalitats mèdiques.

Aquests marcs requereixen revisió prèvia a la comercialització, validació clínica i vigilància contínua. Proporcionen una supervisió significativa però afronten limitacions.

**Aprovació estàtica enfront de sistemes dinàmics.** Els dispositius tradicionals s'aproven en una forma fixa. Els sistemes d'IA poden actualitzar-se contínuament, aprenent de noves dades. Cada actualització potencialment canvia el comportament del sistema, però requerir una reaprovació completa per a cada actualització seria impracticable.

La FDA ha desenvolupat enfocaments per a "plans de control de canvis predeterminats", que especifiquen per endavant quins tipus d'actualitzacions són acceptables sense nova aprovació. Però això segueix en evolució, i el límit entre actualitzacions acceptables i canvis substancials que requereixen revisió continua sent poc clar.

**Reptes de la validació clínica.** Demostrar que un sistema d'IA funciona requereix assaigs clínics, que són costosos i requereixen molt de temps. Per a una IA en ràpida evolució, l'evidència dels assaigs pot estar desactualitzada quan es completen.

A més, el rendiment de la IA pot variar entre poblacions, entorns i contextos de maneres que poden no ser capturades pels estudis de validació. Un sistema que funciona bé en condicions d'assaig pot comportar-se de manera diferent en el desplegament real.

### Supervisió professional

Més enllà de la regulació de dispositius, la IA sanitària està subjecta a la supervisió professional. Els metges continuen sent responsables de la cura del pacient, fins i tot quan usen eines d'IA. Això crea una capa de rendició de comptes humana que pot detectar errors de la IA.

No obstant això, aquesta supervisió té límits. A mesura que els sistemes d'IA es tornen més sofisticats, els clínics poden mancar de l'experiència per avaluar les seves recomanacions. La "fatiga d'alertes" per massa suggeriments del sistema pot portar els clínics a anul·lar o ignorar rutinàriament les indicacions de la IA. I si les recomanacions de la IA són consistentment correctes, els clínics poden perdre l'habilitat de detectar els casos en què estan equivocades.

## Reptes distintius

La IA sanitària presenta reptes de governança que van més enllà de la governança general de la IA.

### Complexitat de la validació

La IA sanitària ha de funcionar de manera fiable en poblacions de pacients diverses, contextos clínics i entorns d'atenció. Un sistema validat en una població pot no generalitzar-se a d'altres.

Demostrar aquesta robustesa és difícil. La privacitat del pacient limita l'intercanvi de dades. Les condicions rares tenen mostres limitades. Els resultats a llarg termini triguen anys a observar-se. El repte de validació és fonamentalment més difícil en l'atenció sanitària que en dominis on la retroalimentació immediata i objectiva està disponible.

Això es connecta amb les [avaluacions de capacitats perilloses](/research/024-capability-evaluations/): el repte d'avaluar les capacitats de la IA és especialment agut quan les capacitats han de ser fiables en tota la distribució de casos mèdics.

### Responsabilitat civil

Quan la IA contribueix a un error mèdic, qui n'és responsable? El metge que va confiar en la IA? L'hospital que la va desplegar? L'empresa que la va desenvolupar?

Els marcs de responsabilitat actuals tenen dificultats amb aquesta responsabilitat distribuïda, com vam analitzar a [marcs de responsabilitat civil per danys d'IA](/research/020-liability-frameworks/). L'atenció sanitària afegeix complexitat addicional: les doctrines existents de negligència mèdica i responsabilitat mèdica interactuen amb la responsabilitat del producte de maneres poc clares.

El resultat és incertesa. Si la responsabilitat recau principalment en els metges, aquests poden evitar usar eines d'IA beneficioses. Si la responsabilitat recau principalment en els desenvolupadors, aquests poden evitar el mercat sanitari. Si la responsabilitat és poc clara, totes les parts poden prendre decisions subòptimes.

### Governança de dades

La IA sanitària requereix accés a dades de pacients per al seu entrenament i operació. Això crea tensió amb les proteccions de privacitat.

Regulacions com HIPAA als Estats Units i el RGPD a la UE restringeixen com es poden usar les dades dels pacients. Aquestes proteccions són importants, ja que la informació de salut és sensible. Però també creen barreres per al desenvolupament d'IA que podria millorar l'atenció.

La desidentificació pot permetre l'ús de dades mentre es protegeix la privacitat, però les dades desidentificades poden perdre valor clínic, i la reidentificació és de vegades possible. Els enfocaments d'aprenentatge federat, on la IA s'entrena amb dades locals sense centralitzar-les, ofereixen solucions parcials però tenen limitacions.

El repte de governança consisteix a dissenyar règims de dades que permetin el desenvolupament beneficiós de la IA mentre es mantenen proteccions de privacitat apropiades, un equilibri que els marcs actuals no han assolit plenament.

### Equitat i biaix

La IA sanitària pot perpetuar o amplificar les disparitats existents. Els sistemes entrenats amb dades de poblacions ben ateses poden funcionar pitjor per a grups desatesos. Els sistemes que optimitzen l'eficiència poden assignar recursos de maneres que perjudiquen pacients marginats.

Els exemples abunden: IA dermatològica que funciona pitjor en tons de pell més foscos, eines de predicció de risc que subestimen la gravetat de la malaltia en pacients de raça negra, sistemes d'assignació de recursos que reflecteixen patrons històrics de discriminació.

La governança ha d'abordar aquestes preocupacions d'equitat de manera explícita. Això significa validació entre grups demogràfics, monitoratge continu del rendiment dispar i mecanismes per identificar i corregir el biaix.

### Integració clínica

Un sistema d'IA tècnicament excel·lent no proporciona benefici si no està integrat en el flux de treball clínic de maneres que realment millorin l'atenció. Aquesta integració és una preocupació de governança perquè afecta si els beneficis es materialitzen.

Els reptes d'integració inclouen: si les recomanacions de la IA es presenten de maneres accionables, si els clínics tenen temps per considerar-les, si els sistemes donen suport o pertorben el judici clínic, i si la IA encaixa dins dels protocols d'atenció existents.

Els marcs de governança enfocats purament en el rendiment tècnic poden passar per alt aquests factors d'integració que determinen l'impacte en el món real.

## Cap a una millor governança

Diverses direccions podrien millorar la governança de la IA sanitària.

### Evidència del món real

Més enllà dels assaigs clínics previs a la comercialització, la recollida contínua d'evidència del món real, és a dir, com funcionen els sistemes d'IA en el desplegament real, proporciona informació crucial per a la governança.

Això requereix infraestructura per a la vigilància poscomercialització, mecanismes per detectar la degradació del rendiment o danys inesperats, i cicles de retroalimentació que permetin la millora contínua. Es connecta amb els sistemes de notificació d'incidents que vam examinar a [lliçons de l'aviació](/research/021-aviation-lessons/).

### Requisits de transparència

Els clínics i els pacients necessiten comprendre com funcionen els sistemes d'IA i quines són les seves limitacions. Això requereix una transparència significativa, no només documentació tècnica sinó informació apropiada per a la presa de decisions clíniques.

Quina evidència clínica dona suport al sistema? En quines poblacions va ser validat? Quins són els modes de fallada coneguts? Quan s'haurien de qüestionar les seves recomanacions? Aquestes preguntes necessiten respostes accessibles per als usuaris.

### Clarificació de la responsabilitat civil

Marcs de responsabilitat més clars reduirien la incertesa i millorarien els incentius. Això podria incloure ports segurs per a l'ús apropiat de la IA, assignació clara de responsabilitat entre desenvolupadors i desplegadors, i mecanismes per a la compensació de pacients que no depenguin de provar la culpa.

### Estàndards d'equitat

Requisits explícits de proves i monitoratge d'equitat abordarien les preocupacions sobre el biaix. Els sistemes haurien de demostrar un rendiment comparable entre grups demogràfics abans del desplegament i ser monitorats per impacte dispar després.

### Participació del pacient

Els pacients haurien de tenir veu en com s'usa la IA en la seva atenció. Això inclou consentiment informat sobre la participació de la IA, accés a informació sobre com les recomanacions de la IA van afectar la seva atenció, i mecanismes per optar per no participar en la presa de decisions assistida per IA quan sigui apropiat.

Això es connecta amb els reptes més amplis del consentiment que vam analitzar a [consentiment i IA: una impossibilitat estructural](/research/007-consent-structural-impossibility/), la dificultat del consentiment significatiu per a sistemes complexos i opacs.

## La dimensió reflexiva

La IA sanitària ofereix oportunitats per a mecanismes de governança reflexiva.

Un sistema de diagnòstic d'IA podria monitorar la seva pròpia confiança en diferents poblacions de pacients, assenyalant quan el rendiment sembla degradat, una forma de [detecció reflexiva d'ús indegut](/research/011-reflexive-misuse-detection/) aplicada al monitoratge de la fiabilitat.

Els sistemes d'IA podrien comunicar la incertesa als clínics, assenyalant quan les recomanacions són menys fiables i es justifica un escrutini addicional, la [comunicació de la incertesa](/research/027-uncertainty-communication/) que vam explorar en un altre lloc.

I la IA sanitària podria participar en la vigilància poscomercialització registrant automàticament els resultats i identificant discrepàncies entre prediccions i resultats.

Aquests mecanismes reflexius no reemplacen la governança externa sinó que la complementen, creant capes addicionals de seguretat que operen en temps real.

## Conclusió

La governança de la IA sanitària ha d'equilibrar l'habilitació de la innovació beneficiosa amb la gestió de riscos genuïns. Els riscos són alts en ambdues direccions: una governança insuficient arrisca danys als pacients; una governança excessiva arrisca retardar millores beneficioses en l'atenció.

Els marcs actuals proporcionen una supervisió significativa però afronten reptes derivats de la naturalesa dinàmica de la IA, la complexitat de la validació clínica, la incertesa en la responsabilitat civil, les tensions en la governança de dades, les preocupacions d'equitat i les dificultats d'integració.

El progrés requereix regulació adaptativa que pugui seguir el ritme de la tecnologia, transparència que doni suport a la presa de decisions clíniques, marcs de responsabilitat clarificats, estàndards d'equitat explícits i participació del pacient. I requereix reconèixer que la governança de la IA sanitària no és només un problema regulatori sinó un repte sociotècnic que implica la pràctica clínica, l'organització institucional i les relacions amb els pacients.

Assolir una governança adequada de la IA sanitària és un dels reptes de governança específics del domini més importants i difícils. Les lliçons apreses aquí informaran la governança de la IA en altres dominis d'alt risc.

## Recerca relacionada

- [Avaluacions de capacitats perilloses](/research/024-capability-evaluations/)
- [Marcs de responsabilitat civil per danys d'IA](/research/020-liability-frameworks/)
- [Sistemes de notificació d'incidents: lliçons de l'aviació](/research/021-aviation-lessons/)
- [Consentiment i IA: una impossibilitat estructural?](/research/007-consent-structural-impossibility/)
- [Comunicació de la incertesa en les sortides d'IA](/research/027-uncertainty-communication/)
