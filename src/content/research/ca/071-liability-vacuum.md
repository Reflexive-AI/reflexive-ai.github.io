---
title: "El buit de responsabilitat: quan els danys de la IA queden entre categories jurídiques"
excerpt: "Els danys causats per la IA sovint no encaixen en els marcs legals existents: no són exactament responsabilitat per producte, ni mala praxi professional, ni negligència. Aquest article cartografia les llacunes específiques i proposa solucions focalitzades."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - liability
  - law
  - accountability
  - harms
  - legal-frameworks
---

## Danys sense remei

Quan els sistemes d'IA causen dany, la responsabilitat legal sol ser incerta. Les categories jurídiques existents van ser dissenyades per a tecnologies i relacions diferents. La IA hi encaixa de manera incòmoda.

Un pacient perjudicat per una eina de diagnòstic basada en IA pot tenir dificultats per exigir responsabilitats. Es tracta de responsabilitat per producte (l'eina era defectuosa)? Mala praxi mèdica (el metge hauria d'haver detectat l'error)? Negligència (algú no va actuar amb la diligència deguda)? Cada categoria té elements que els danys de la IA poden no satisfer.

Això crea un buit de responsabilitat: danys reals sense cap via viable de reparació.

## El problema de les categories

La responsabilitat legal sol exigir que un dany encaixi en una categoria establerta. En el cas de la IA, això resulta difícil.

### Responsabilitat per producte

La responsabilitat per producte fa els fabricants responsables de productes defectuosos. La doctrina es va desenvolupar per a objectes físics: cotxes que s'accidenten, electrodomèstics que s'incendien, fàrmacs que causen efectes secundaris.

**El problema amb la IA:** Un resultat de la IA és un "producte"? El programari ha rebut un tractament històricament inconsistent. Els serveis solen quedar exclosos. Els resultats d'un model poden assemblar-se més a la parla que a un producte. Fins i tot si la IA és un producte, els estàndards de defecte no estan clars: què fa que un model sigui "defectuós" quan produeix resultats probabilístics que de vegades fallen?

**Reptes probatoris:** La responsabilitat per producte exigeix demostrar que el defecte va causar el dany. En el cas de la IA, la causalitat pot ser difusa: el model va contribuir a una decisió però no la va determinar; el resultat del model va ser una entrada entre moltes.

### Mala praxi professional

La mala praxi fa responsables els professionals quan incompleixen els estàndards d'atenció. Metges, advocats i comptables poden ser demandats per una pràctica deficient.

**El problema amb la IA:** Qui és el professional? El desenvolupador d'IA no és un professional mèdic ni jurídic. El professional que utilitza l'eina pot al·legar que hi va confiar raonablement. Els estàndards d'atenció per a l'ús de la IA estan poc desenvolupats.

**L'intermediari qualificat:** En medicina, els fabricants solen evitar la responsabilitat perquè el metge prescriptor emet el judici final. Si un metge utilitza IA, el metge és l'intermediari qualificat que assumeix la responsabilitat? O la IA és diferent perquè les seves recomanacions són més directives?

### Negligència

La negligència requereix demostrar que el demandat tenia un deure de cura, va incomplir aquest deure i va causar dany.

**El problema amb la IA:** Quin és l'estàndard de cura per al desenvolupament d'IA? No existeixen estàndards professionals establerts. "Desenvolupador d'IA raonable" és un concepte indefinit. Si no existeix cap estàndard, com es pot provar el seu incompliment?

**Previsibilitat:** La negligència exigeix que el dany sigui previsible. Els danys de la IA poden sorgir d'interaccions que ningú no va anticipar. Si el dany no era previsible, les demandes per negligència fracassen.

### Responsabilitat objectiva

Algunes activitats són tan perilloses que la responsabilitat s'aplica independentment de la culpa. Operar reactors nuclears, mantenir animals salvatges i usar explosius generen responsabilitat objectiva.

**El problema amb la IA:** El desenvolupament d'IA és una "activitat anormalment perillosa"? Els tribunals generalment han dit que no, tractant el desenvolupament de programari com una activitat empresarial ordinària. Això pot canviar a mesura que augmentin les capacitats de la IA, però la doctrina actual no dona suport a la responsabilitat objectiva.

## Llacunes específiques

Més enllà del problema de les categories, llacunes específiques deixen determinats danys sense remei.

### La llacuna de desplegament

La responsabilitat sol recaure en la part que pren la decisió de desplegament. Però el desplegament de la IA implica cadenes: un desenvolupador crea un model, una empresa l'ajusta, una plataforma l'allotja, una organització l'integra, un usuari hi interactua.

En quin punt d'aquesta cadena s'atribueix la responsabilitat? Cada participant pot culpar els altres. El desenvolupador diu que va proporcionar una eina general. L'empresa diu que va confiar en les capacitats documentades. La plataforma diu que simplement l'allotjava. La responsabilitat es difumina fins a evaporar-se.

### La llacuna de capacitats

Els models desenvolupen capacitats que els seus creadors no van anticipar. Les [capacitats emergents](/research/009-capability-overhang/) poden causar danys que no eren previsibles quan el model va ser desplegat.

Els desenvolupadors haurien de ser responsables de capacitats que desconeixien? Si la resposta és sí, es crea una responsabilitat objectiva encoberta. Si la resposta és no, els danys derivats de capacitats emergents no tenen remei.

### La llacuna de dades d'entrenament

Alguns danys de la IA tenen el seu origen en les dades d'entrenament: dades esbiaixades produeixen resultats esbiaixats; dades protegides per drets d'autor plantegen qüestions de propietat intel·lectual; dades personals plantegen problemes de privadesa.

Però les dades d'entrenament solen estar agregades d'innombrables fonts. Qui és responsable dels danys causats per la composició de les dades d'entrenament? Les fonts de dades? Els agregadors? Els desenvolupadors del model que no van filtrar? Els demandants no poden rastrejar fàcilment el seu dany fins a dades específiques.

### La llacuna d'opacitat

Provar la causalitat requereix comprendre com el sistema va produir el resultat danyós. En models opacs, aquesta comprensió pot ser impossible. Els demandants no poden accedir als components interns del model. Fins i tot si poguessin, les [limitacions d'interpretabilitat](/research/051-interpretability-governance/) signifiquen que aquests components interns no expliquen els resultats en termes jurídicament útils.

### La llacuna d'autonomia

La responsabilitat tradicional pressuposa una decisió humana. Un ésser humà va decidir actuar; aquest ésser humà n'és responsable. Però els sistemes d'IA prenen cada vegada més decisions sense revisió humana.

Si cap ésser humà va revisar la decisió danyosa, qui n'és responsable? L'humà que va desplegar el sistema? L'humà que el va dissenyar? L'humà que el va entrenar? Cap d'aquests humans va prendre la decisió danyosa concreta.

## Solucions focalitzades

En lloc de règims de responsabilitat completament nous, solucions focalitzades poden abordar llacunes específiques.

### Classificació clara com a producte

Els legisladors podrien aclarir que els sistemes d'IA són productes subjectes a responsabilitat per producte. Això resol la qüestió de classificació però deixa sense resoldre els estàndards de defecte.

Més concretament, la legislació podria definir el defecte per a la IA: potser com una desviació material de les capacitats documentades, o com l'omissió de proves de seguretat raonables.

### Responsabilitat de l'implementador

L'entitat que pren la decisió de desplegament podria assumir la responsabilitat principal amb independència de les contribucions de la cadena de subministrament. Els implementadors estan en la millor posició per avaluar si la IA és adequada per al seu cas d'ús.

Això crea incentius perquè els implementadors avaluïn els sistemes abans del desplegament, exigeixin garanties contractuals als desenvolupadors i mantinguin la supervisió durant l'operació.

### Requisits de divulgació del desenvolupador

Si s'exigeix als desenvolupadors que [divulguin limitacions, modes de fallada coneguts i resultats d'avaluació](/research/001-proportionality-disclosure/), es fan responsables d'aquells danys que la informació divulgada hauria d'haver previngut.

Un implementador que va procedir malgrat els riscos divulgats n'assumeix la responsabilitat. Un implementador que no va ser advertit té una reclamació contra el desenvolupador.

### Estàndards de cura documentats

Els estàndards de la indústria, els [règims de certificació](/research/041-certification-regimes/) i els requisits reguladors creen estàndards aplicables per a les demandes per negligència.

Un cop l'estàndard de cura està documentat, l'incompliment es torna demostrable. Un desenvolupador que no va realitzar les avaluacions de seguretat requerides va infringir l'estàndard. Un implementador que va ometre la supervisió humana obligatòria va incomplir el seu deure.

### Requisits d'auditoria

Les [pistes d'auditoria](/research/010-self-reporting-vs-audit/) obligatòries poden abordar la llacuna d'opacitat. Si els sistemes han de mantenir registres d'entrades, sortides i factors de decisió, els demandants poden accedir a aquesta informació durant el procés de descobriment.

Els requisits d'auditoria també creen responsabilitat per no mantenir registres adequats.

### Mandats d'assegurança

Exigir als implementadors d'IA que contractin una assegurança de responsabilitat crea rendició de comptes financera fins i tot quan la responsabilitat individual no és clara.

Les asseguradores desenvolupen experiència en avaluació de riscos i generen pressió per a la reducció de riscos. Els [mercats d'assegurances](/research/036-insurance-markets/) es converteixen en mecanismes de governança.

## La contribució reflexiva

Els mecanismes de governança reflexiva donen suport als marcs de responsabilitat.

**Documentació.** Les [restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) i les limitacions documentades creen la base probatòria per a les demandes de responsabilitat. La desviació de les restriccions documentades és impugnable.

**Registre.** Els sistemes que mantenen registres exhaustius permeten la reconstrucció posterior del que va anar malament. Això aborda la llacuna d'opacitat.

**Automonitorització.** Els sistemes que [detecten les seves pròpies anomalies](/research/011-reflexive-misuse-detection/) i alerten els operadors creen oportunitats d'intervenció abans que es produeixi el dany. No respondre a les alertes podria constituir negligència.

**Transparència.** Una documentació clara de les restriccions redueix la capacitat de l'implementador d'al·legar desconeixement. Les limitacions publicades es converteixen en riscos assumits.

## Conclusió

El buit de responsabilitat no és un problema únic, sinó un conjunt de llacunes on els danys de la IA queden entre les categories jurídiques existents.

Els marcs de responsabilitat completament nous poden ser innecessaris i lents de desenvolupar. Solucions focalitzades que aclareixin la classificació de productes, estableixin estàndards de cura, creïn requisits de documentació i obliguin a contractar assegurances poden omplir llacunes específiques de manera incremental.

La governança reflexiva hi contribueix creant infraestructura probatòria: documentació que permet demandes de responsabilitat, registres que proven el que va passar i transparència que assigna la responsabilitat amb claredat.

La responsabilitat per si sola no prevé el dany. Però uns marcs de responsabilitat funcionals creen incentius per a la seguretat que la regulació per si sola no pot generar. Quan les organitzacions afronten conseqüències financeres pels danys, inverteixen en prevenció. El buit de responsabilitat elimina aquests incentius.

## Recerca relacionada

- [Liability Frameworks for AI Harm](/research/020-liability-frameworks/)
- [Insurance Markets and AI Risk Pricing](/research/036-insurance-markets/)
- [Certification Regimes for AI Systems](/research/041-certification-regimes/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
