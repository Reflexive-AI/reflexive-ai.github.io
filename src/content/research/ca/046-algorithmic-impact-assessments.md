---
title: "Avaluacions d'impacte algorítmic: guia d'implementació"
excerpt: "Un marc pràctic per dur a terme avaluacions d'impacte algorítmic significatives que vagin més enllà del compliment formal cap a una veritable prevenció de danys."
date: 2026-01-28
toc: true
categories:
  - Research
  - Policy
tags:
  - Impact Assessment
  - Risk Governance
  - Implementation
  - Best Practices
---

Les avaluacions d'impacte algorítmic (AIA) prometen identificar i mitigar els danys abans que es despleguin els sistemes d'IA. A la pràctica, la majoria de les implementacions no compleixen aquesta promesa. Aquesta guia presenta un marc per a avaluacions que realment influeixin en les decisions de disseny en lloc de limitar-se a documentar-les a posteriori.

## L'escletxa de l'avaluació

Les AIA van sorgir de les avaluacions d'impacte ambiental i de privacitat, adaptant eines regulatòries establertes per als sistemes algorítmics. La Llei d'IA de la UE, l'Eina d'Avaluació d'Impacte Algorítmic del Canadà i diverses ordenances municipals exigeixen ara alguna forma d'avaluació d'impacte. Tanmateix, ha sorgit un patró preocupant: les organitzacions duen a terme les avaluacions, marquen les caselles requerides i procedeixen al desplegament sense canvis.

L'escletxa entre l'avaluació i l'acció es deu a problemes estructurals. Molts marcs se centren a descriure els sistemes en lloc de qüestionar-los. Les categories de risc sovint passen per alt els danys específics del context. La temporització sol produir-se massa tard per influir en l'arquitectura. I la rendició de comptes rarament s'estén més enllà de l'equip d'avaluació.

## Base prèvia a l'avaluació

Una avaluació eficaç comença abans que s'iniciï cap procés formal. Les organitzacions han d'establir una autoritat clara per a l'equip d'avaluació, inclosa la capacitat de retardar o bloquejar el desplegament si els danys no es poden mitigar. Sense autoritat real, les avaluacions es converteixen en exercicis de documentació.

L'equip d'avaluació requereix independència de l'equip de desplegament. Això no vol dir revisors externs per a cada sistema, però els avaluadors interns no haurien de dependre de gerents de projecte amb pressions de lliurament. Les [estructures de governança corporativa](/research/042-corporate-governance/) que separen la supervisió del desenvolupament permeten una avaluació més honesta.

Les decisions sobre l'abast determinen tot el que segueix. El límit del sistema determina quins impactes es comptabilitzen. Traçar el límit de forma estreta —comptabilitzant només els resultats directes en lloc dels efectes posteriors— subestima sistemàticament el dany. Una pràctica millor: estendre el límit per incloure usos raonablement previsibles i efectes de segon ordre, reconeixent que la incertesa augmenta amb la distància.

## Identificació de les parts interessades

La majoria de les AIA fallen en la identificació de les parts interessades. L'enfocament estàndard enumera categories òbvies: usuaris, operadors, reguladors. Això omet les poblacions afectades que poden no interactuar mai directament amb el sistema però que en suporten les conseqüències.

Considerem un algorisme de detecció de frau. Les parts interessades directes inclouen la institució financera i els clients assenyalats. Però els efectes posteriors afecten els comerciants que enfronten una fricció més gran, les comunitats on es concentren els falsos positius i els negocis competidors les estructures de costos dels quals canvien com a resposta. Una avaluació exhaustiva rastreja aquestes cadenes.

Mètodes per identificar parts interessades no considerades:
- **Anàlisi contrafactual**: Qui es veuria afectat si el sistema cometés errors sistemàtics?
- **Mapeig de distribució**: Quins grups demogràfics enfronten els riscos més grans?
- **Anàlisi de poder**: Qui no té veu en les decisions de desplegament?
- **Revisió històrica**: Qui va ser perjudicat per sistemes anàlegs?

La participació significativa de les parts interessades requereix recursos: temps, accessibilitat, compensació per la participació. Les consultes precipitades que extreuen informació sense permetre una influència genuïna soscaven tant l'avaluació com la confiança de la comunitat. Els [marcs de participació pública](/research/045-public-participation/) ofereixen models per a un compromís autèntic.

## Metodologia d'identificació de riscos

Les taxonomies genèriques de risc —biaix, privacitat, seguretat— proporcionen punts de partida però no haurien de limitar l'avaluació. Els riscos específics del sistema sorgeixen de la intersecció del disseny tècnic, el context de desplegament i l'entorn social.

La capa tècnica examina les característiques del model: procedència de les dades d'entrenament, quantificació de la incertesa, modes de fallada, vulnerabilitats davant la manipulació. Aquesta anàlisi requereix accés als components interns del model, no només a les entrades i sortides. Els [marcs d'avaluació prèvia al desplegament](/research/007-consent-structural-impossibility/) estableixen línies de base per a la revisió tècnica.

La capa de desplegament considera el context operatiu: qui té l'autoritat d'anul·lació, quin recurs existeix per a les persones afectades, com es gestionen els casos límit, quina monitorització existeix després del desplegament. Molts danys sorgeixen no de fallades del model sinó d'una integració inadequada entre l'ésser humà i el sistema.

La capa social situa el sistema dins de les relacions de poder: el desplegament concentra o distribueix el poder? Afecta els grups de manera diferent en funció de les vulnerabilitats existents? Crea noves dependències o bloquejos? Aquestes preguntes requereixen una anàlisi de les ciències socials, no només una avaluació tècnica.

## Mesurament de l'impacte

Quantificar els danys potencials abans del desplegament requereix especulació estructurada. Alguns marcs exigeixen estimacions de probabilitat i valoracions monetàries. Aquesta precisió sovint oculta la incertesa inherent a la predicció de resultats sociotècnics.

Els enfocaments més honestos reconeixen la incertesa de forma explícita. L'anàlisi d'escenaris explora futurs plausibles: millor cas, cas esperat, pitjor cas i —de forma crítica— incògnites desconegudes que els precedents històrics podrien suggerir. L'objectiu no és la predicció sinó la preparació.

L'anàlisi d'impacte diferencial examina com es distribueixen els danys entre les poblacions. Les mètriques de precisió global sovint oculten danys concentrats. Un algorisme de contractació amb un 90 % de precisió general podria tenir un 60 % de precisió per a grups protegits, un patró distributiu invisible per al mesurament agregat.

Les escales de gravetat haurien de reflectir conseqüències reals, no categories abstractes. "Risc mitjà" significa poc. "Un de cada vint usuaris rep una alerta falsa de frau, cosa que provoca una congelació mitjana del compte de tres dies i costos associats de 150 $" permet l'avaluació.

## Jerarquies de mitigació

L'avaluació d'impacte no està completa sense una planificació de mitigació. La jerarquia segueix un principi: prevenció per sobre de remediació, canvis de disseny per sobre de controls procedimentals.

**Nivell 1: Eliminació**
No desplegar el sistema. Si els danys no es poden mitigar adequadament i el cas d'ús no és prou valuós, el no desplegament és una conclusió legítima. Les avaluacions que mai arriben a aquesta conclusió poden mancar d'autoritat real.

**Nivell 2: Substitució**
Substituir l'enfocament problemàtic amb una alternativa menys nociva. Un model predictiu podria substituir-se per regles més simples o pel judici humà. Les [consideracions de seguretat tècnica](/research/034-technical-vs-societal-safety/) informen quines alternatives existeixen.

**Nivell 3: Controls d'enginyeria**
Redissenyar el sistema per reduir el dany. Modificar les dades d'entrenament, ajustar els llindars de decisió, afegir senyalització d'incertesa, limitar l'abast dels resultats. Aquests canvis requereixen tornar al desenvolupament, ampliant els terminis.

**Nivell 4: Controls administratius**
Implementar procediments per gestionar el risc. Revisió humana per a decisions d'alt impacte, monitorització millorada, contexts de desplegament restringits. Aquests controls són menys fiables que els canvis d'enginyeria: els procediments es poden eludir o erosionar.

**Nivell 5: Documentació i divulgació**
Si persisteix un risc residual, les parts afectades han de ser informades. Aquesta és la forma més feble de mitigació: trasllada la càrrega als afectats en lloc de prevenir el dany.

## Cronologia del procés

Les AIA realitzades al final del desenvolupament arriben massa tard. L'arquitectura del sistema s'ha fixat, les dades d'entrenament s'han recollit, les mètriques d'èxit s'han definit. L'avaluació es converteix en una valoració de decisions ja preses en lloc d'una aportació a decisions en curs.

Una cronologia millor integra l'avaluació al llarg del desenvolupament:
- **Fase d'ideació**: S'hauria de construir aquest sistema? Quins propòsits serviria i els interessos de qui?
- **Fase de disseny**: Quins enfocaments tècnics minimitzen els danys previsibles?
- **Fase de desenvolupament**: Són adequades les dades d'entrenament i els procediments d'avaluació?
- **Fase prèvia al desplegament**: Avaluació d'impacte completa amb aportacions de les parts interessades
- **Fase posterior al desplegament**: Monitorització i reavaluació a mesura que sorgeixen els efectes al món real

Aquest enfocament escalonat requereix considerar l'avaluació com a governança contínua en lloc de compliment puntual. La [monitorització de models desplegats](/research/010-self-reporting-vs-audit/) estén l'avaluació més enllà del desplegament inicial.

## Estàndards de documentació

La documentació de l'avaluació serveix a múltiples audiències: responsables interns de la presa de decisions, reguladors externs, comunitats afectades, futurs auditors. Cada audiència necessita informació diferent a nivells de detall diferents.

Els resums executius han de presentar les troballes en un llenguatge accessible per als responsables de la presa de decisions no tècnics, emfatitzant els riscos clau i les accions recomanades. Els annexos tècnics proporcionen detall per a la revisió especialitzada. Les divulgacions públiques equilibren la transparència amb les preocupacions legítimes de confidencialitat.

La documentació ha d'estar controlada per versions i conservar-se. Els sistemes evolucionen; les avaluacions han de ser actualitzables. Quan es produeixen canvis significatius —actualitzacions de dades d'entrenament, canvis en el context de desplegament, noves capacitats— cal realitzar una reavaluació.

## Integració organitzativa

Les AIA que resideixen en un compartiment de compliment tenen un impacte limitat. La integració amb els processos de desenvolupament de productes, els marcs de gestió de riscos i les estructures de governança n'amplifica la influència.

Els requisits de producte han de fer referència a les troballes de l'avaluació. Les revisions de disseny han de verificar que s'han implementat les mitigacions recomanades per l'avaluació. Les portes de llançament han d'incloure l'aprovació de les funcions d'avaluació.

La [supervisió a nivell de consell](/research/043-board-oversight/) proporciona vies d'escalament per a avaluacions d'alt impacte. Quan els equips d'avaluació identifiquen riscos que excedeixen la seva autoritat per mitigar, les estructures de governança han de permetre la presa de decisions executives amb plena visibilitat.

## Alineació regulatòria

Múltiples marcs regulatoris exigeixen ara avaluacions d'impacte: la Llei d'IA de la UE per a sistemes d'alt risc, requisits sectorials en finances i sanitat, ordenances municipals per a ús en el sector públic. Dissenyar processos d'avaluació que satisfacin múltiples requisits redueix la duplicació alhora que garanteix el compliment.

Tanmateix, els mínims regulatoris no haurien de convertir-se en sostres. L'avaluació impulsada pel compliment satisfà els requisits legals però pot passar per alt danys específics del context. Les organitzacions amb compromisos genuïns de seguretat superen els requisits mínims, tractant la regulació com a línia de base en lloc d'objectiu. Els [marcs de dret tou](/research/040-soft-law-hard-law/) sovint s'estenen més enllà dels requisits del dret dur.

## Errors comuns

**La fal·làcia del formulari completat**: Omplir plantilles d'avaluació no constitueix una avaluació. Els formularis estructuren la indagació però no substitueixen el judici.

**Quantificació prematura**: Assignar números a danys incerts crea una falsa precisió. Els rangs i els escenaris reflecteixen millor la incertesa real.

**Teatre de parts interessades**: La consulta que no influeix en els resultats genera cinisme. És millor avaluar sense consulta que extreure informació i ignorar-la.

**Extensió descontrolada de l'avaluació**: No tots els sistemes requereixen una avaluació d'impacte completa. Calibrar l'esforç segons el que està en joc. La [divulgació proporcional al risc](/research/001-proportionality-disclosure/) ofereix marcs per escalar la governança.

**Pensament puntual**: L'avaluació és una activitat en un moment donat; la governança és contínua. Els sistemes que passen l'avaluació prèvia al desplegament poden desenvolupar problemes en funcionament.

## Conclusió

L'avaluació d'impacte algorítmic pot ser governança significativa o ritual burocràtic. La diferència rau en l'autoritat, la cronologia, la metodologia i la integració organitzativa. Les organitzacions que es prenen seriosament la governança de la IA inverteixen en infraestructura d'avaluació, no com un cost de compliment sinó com un mecanisme per construir sistemes millors.

Els marcs presentats aquí exigeixen més que completar caselles de verificació. Requereixen un compromís genuí amb les comunitats afectades, un reconeixement honest de la incertesa i la voluntat de canviar els plans en funció de les troballes. La majoria de les organitzacions encara no hi són. Però a mesura que els sistemes d'IA es tornen més transcendents, una avaluació eficaç es converteix no en quelcom opcional sinó en quelcom essencial.

---

*Aquesta guia presenta marcs d'avaluació alineats amb els requisits regulatoris emergents, alhora que emfatitza la prevenció substantiva de danys per sobre del compliment procedimental. Les organitzacions poden necessitar adaptar els marcs als seus contexts específics preservant els principis fonamentals d'autoritat, participació de les parts interessades i rendició de comptes.*
