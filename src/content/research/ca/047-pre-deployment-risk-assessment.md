---
title: "Marcs d'avaluació de riscos previs al desplegament"
excerpt: "Enfocaments estructurats per avaluar els riscos dels sistemes d'IA abans del seu llançament, equilibrant l'exhaustivitat amb les limitacions pràctiques."
date: 2026-01-29
toc: true
categories:
  - Research
tags:
  - Risk Assessment
  - Deployment
  - Safety
  - Evaluation
---

Llançar un sistema d'IA crea fets consumats que són difícils de revertir. L'avaluació de riscos prèvia al desplegament té com a objectiu identificar problemes mentre encara es poden prevenir en lloc de simplement gestionar-se. Aquesta anàlisi examina els marcs que estructuren aquesta fase crítica d'avaluació.

## La finestra prèvia al desplegament

El període entre la finalització del desenvolupament i el llançament d'un sistema representa l'última oportunitat d'intervenció sense conseqüències al món real. Un cop desplegats, els sistemes d'IA generen dependències dels usuaris, compromisos empresarials i adaptacions socials que fan que la retirada sigui costosa. La finestra prèvia al desplegament és valuosa.

Tanmateix, aquesta finestra sovint es comprimeix. Els terminis de desenvolupament es retarden; les dates de llançament romanen fixes. La pressió competitiva accelera el llançament. L'avaluació es torna precipitada, incompleta o performativa. Els marcs que funcionen en teoria fracassen quan les restriccions de temps són vinculants.

L'avaluació prèvia al desplegament eficaç s'ha de dissenyar, per tant, per a condicions realistes, no ideals. Això significa processos paral·lels en lloc de seqüencials, enfocaments escalonats calibrats segons els nivells de risc i criteris clars per a una avaluació mínima viable.

## Taxonomia de riscos

Tot marc d'avaluació requereix una classificació dels riscos a examinar. Les taxonomies varien, però les categories útils inclouen:

**Riscos tècnics**: Modes de fallada del model, degradació de la precisió, vulnerabilitats adversarials, sensibilitat al canvi distribucional, comportaments d'escalat, capacitats emergents.

**Riscos de desplegament**: Fallades en la interacció humà-IA, biaix d'automatització, degradació d'habilitats, problemes d'integració, manipulació i engany.

**Riscos socials**: Impactes diferencials entre grups, concentració de poder, creació de dependències, efectes en el mercat, canvis normatius.

**Riscos de seguretat**: Robatori de models, extracció de dades, potencial d'ús indegut, aplicacions de doble ús.

**Riscos sistèmics**: Fallades correlacionades entre sistemes, dependències d'infraestructura, irreversibilitat dels resultats.

Cap avaluació individual pot examinar tots els riscos amb la màxima profunditat. Les [avaluacions d'impacte algorítmic](/research/046-algorithmic-impact-assessments/) proporcionen marcs integrals; l'avaluació prèvia al desplegament se centra en el subconjunt més rellevant per a les decisions de llançament.

## Disseny d'avaluació escalonada

No tots els sistemes requereixen el mateix escrutini. Un conversor de text a emoticones no necessita la mateixa avaluació que un sistema de diagnòstic mèdic. Els marcs escalonats calibren l'esforç segons el que està en joc.

**Nivell 1: Avaluació mínima** per a aplicacions de baix risc. Comprovacions automatitzades de propietats bàsiques de seguretat, proves puntuals de modes de fallada, verificació de compliment. Dies en lloc de setmanes.

**Nivell 2: Avaluació estàndard** per a aplicacions de risc moderat. Avaluació sistemàtica segons criteris definits, exercicis de red team, auditories de biaix, revisió de documentació. Setmanes d'esforç.

**Nivell 3: Avaluació millorada** per a aplicacions d'alt risc. Avaluació tècnica integral, revisió externa, consulta amb parts interessades, anàlisi d'escenaris, planificació de desplegament escalonat. Mesos de preparació.

**Nivell 4: Avaluació màxima** per a capacitats transformadores. Governança multipartida, períodes d'avaluació estesos, auditories de tercers, planificació de contingència, llançament per fases amb monitorització. Els [sistemes d'IA de frontera](/research/031-understanding-frontier-ai/) solen requerir aquest nivell.

Els criteris per a l'assignació de nivell han de ser explícits. Els factors inclouen: mida de la població afectada, reversibilitat dels danys, vulnerabilitat de les poblacions afectades, importància de les decisions, nivell d'autonomia del sistema i presència de supervisió humana.

## Components de l'avaluació tècnica

L'avaluació tècnica examina el comportament del model en condicions rellevants. Els components fonamentals inclouen:

**Caracterització de la precisió**: No només mètriques agregades sinó distribució del rendiment entre subgrups rellevants, variacions d'entrada i casos límit. Els sistemes sovint fallen en patrons invisibles per a les estadístiques generals.

**Quantificació de la incertesa**: Sap el model el que no sap? L'avaluació de calibratge mesura si la confiança es correlaciona amb la precisió. Els sistemes que s'equivoquen amb confiança plantegen riscos més grans que els que expressen incertesa.

**Proves de robustesa**: Com canvia el rendiment davant pertorbacions d'entrada, canvis distribucionals o atacs adversarials? Les [metodologies de red teaming](/research/050-red-teaming-methodologies/) sondegen les vulnerabilitats de forma sistemàtica.

**Anàlisi de modes de fallada**: Què passa quan el sistema falla? La degradació gradual és més segura que la fallada catastròfica. Els sistemes haurien de fallar de maneres que permetin la intervenció humana.

**Límits de comportament**: Produeix el sistema resultats fora de rangs acceptables? Les proves de límits verifiquen que els comportaments perillosos, no ètics o no autoritzats estiguin restringits.

## Avaluació del context de desplegament

Les propietats tècniques per si soles no determinen els resultats al món real. El context de desplegament importa enormement. Un model que funciona bé en proves controlades pot fallar quan es desplega en condicions realistes.

**Anàlisi de la població d'usuaris**: Qui usarà realment el sistema i les seves característiques coincideixen amb les suposicions d'entrenament? La discrepància entre usuaris suposats i reals és un mode de fallada comú.

**Integració del flux de treball de decisions**: Com encaixa el sistema en els processos existents? Què passa quan discrepa del judici humà? Revisaran els humans realment les recomanacions de la IA o prevaldrà el biaix d'automatització?

**Disponibilitat de recurs**: Quines opcions tenen les persones afectades si el sistema produeix resultats perjudicials? Els sistemes sense mecanismes de recurs significatius requereixen un escrutini més gran.

**Capacitats de monitorització**: Quina informació estarà disponible després del desplegament per detectar problemes? Els sistemes que es despleguen en caixes negres —sense visibilitat del rendiment al món real— requereixen una avaluació prèvia al desplegament més exhaustiva.

## Avaluació basada en escenaris

Els escenaris exploren futurs possibles de forma sistemàtica. En lloc d'intentar predir resultats específics, l'anàlisi d'escenaris identifica les condicions sota les quals es materialitzen els riscos i avalua la preparació.

**Escenaris nominals**: Ús esperat per usuaris típics sota condicions normals. La línia de base contra la qual es comparen els altres.

**Escenaris d'estrès**: Condicions d'alta càrrega, entrades inusuals, casos límit. Com es comporta el sistema als extrems?

**Escenaris adversarials**: Manipulació intencionada per actors sofisticats. Les [preocupacions sobre el doble ús](/research/035-dual-use-biology/) s'exploren aquí.

**Escenaris de fallada**: Què passa si el sistema falla? Què passa si la monitorització falla? Què passa si la remediació falla? L'anàlisi de fallades en cascada identifica punts únics de catàstrofe.

**Escenaris de canvi**: Com podria evolucionar l'entorn del sistema? Canvis regulatoris, adaptació dels usuaris, respostes competitives, desenvolupaments tecnològics. L'[excedent de capacitat](/research/009-capability-overhang/) considera els potencials latents.

## Criteris i llindars d'avaluació

L'avaluació genera evidència, però les decisions de desplegament requereixen criteris per interpretar aquesta evidència. Quin nivell de risc és acceptable? Quina taxa de fallada activa un retard?

Els llindars explícits forcen converses difícils abans que es compliquin pels costos irrecuperables i la pressió de llançament. Exemples:
- "No desplegar si la precisió per a grups protegits cau per sota del 80 % de la precisió general"
- "Retardar si el red team identifica jailbreaks assolibles en menys de 10 intents"
- "Cal revisió externa abans de desplegar sistemes amb potencial de doble ús"

Aquests llindars s'han d'establir amb antelació per l'autoritat competent, no pels equips d'avaluació que enfronten pressió de terminis ni per gerents de producte amb incentius comercials. Les [estructures de governança corporativa](/research/042-corporate-governance/) estableixen qui fixa els llindars i qui pot concedir excepcions.

## Integració de la revisió externa

L'avaluació interna té limitacions inherents: punts cecs organitzatius, conflictes d'incentius, llacunes de coneixement. La revisió externa proporciona perspectiva independent i experiència especialitzada.

**Auditors externs**: Les organitzacions especialitzades en avaluació d'IA aporten coneixement comparatiu entre sistemes i contexts. La [governança d'auditors](/research/006-meta-governance-auditors/) considera com garantir la qualitat i la independència dels auditors.

**Col·laboració acadèmica**: Els investigadors poden realitzar una avaluació tècnica més profunda, tot i que els terminis acadèmics poden no coincidir amb les necessitats comercials.

**Consulta regulatòria prèvia**: Alguns marcs permeten la consulta prèvia al desplegament amb els reguladors, establint expectatives abans de l'avaluació formal de compliment.

**Programes de recompenses per errors**: Les proves externes estructurades incentiven el descobriment de vulnerabilitats que els equips interns van passar per alt.

La integració de la revisió externa requereix planificació per a l'intercanvi d'informació, la coordinació de terminis i la incorporació de les troballes. La revisió externa precipitada proporciona un valor limitat.

## Requisits de documentació

Les activitats d'avaluació generen documentació que serveix per a múltiples propòsits: donar suport a les decisions de desplegament, permetre futures auditories, satisfer els requisits regulatoris i facilitar l'aprenentatge organitzatiu.

Elements fonamentals de la documentació:
- **Abast i metodologia de l'avaluació**: Què es va examinar i com
- **Troballes clau**: Quins riscos es van identificar i la seva gravetat
- **Mesures de mitigació**: Quins canvis es van fer com a resposta
- **Riscos residuals**: Quins riscos persisteixen i per què són acceptables
- **Supòsits i limitacions**: Què no va examinar o no va poder examinar l'avaluació
- **Registre de decisions**: Qui va aprovar el desplegament i sobre quina base

La documentació s'ha de conservar més enllà de la vida operativa del sistema; les investigacions regulatòries i els procediments de responsabilitat poden produir-se anys després.

## Cronologia i iteració de l'avaluació

Quan s'ha de realitzar l'avaluació? Massa aviat perd els canvis fets durant el desenvolupament final. Massa tard comprimeix la finestra per a la remediació. La resposta: avaluació iterativa al llarg del desenvolupament, amb una avaluació integral abans del llançament.

Les portes de fase proporcionen punts d'avaluació naturals:
- **Revisió d'arquitectura**: Abans d'una inversió significativa en desenvolupament
- **Revisió de dades**: Abans d'entrenar amb els conjunts de dades finals
- **Avaluació del model**: Després de l'entrenament, abans de la integració
- **Proves d'integració**: Després de la integració, abans de l'entorn de proves
- **Avaluació prèvia al llançament**: Avaluació integral final
- **Monitorització posterior al llançament**: Contínua després del desplegament

Cada porta ha de tenir criteris definits, parts responsables i procediments d'escalament. Fallar en una porta hauria d'activar processos definits en lloc de negociacions ad hoc.

## Avaluació ràpida per a situacions urgents

Els marcs estàndard assumeixen temps adequat. La realitat de vegades difereix. Les vulnerabilitats de seguretat requereixen pedaços immediats. Les dinàmiques competitives acceleren els terminis. Què constitueix una avaluació responsable quan el temps està severament limitat?

L'avaluació mínima viable se centra en les qüestions bloquejants:
1. **Comprovacions de seguretat crítica**: Causarà el desplegament un dany immediat?
2. **Verificació de compliment**: Viola el desplegament requisits legals?
3. **Cribratge de vulnerabilitats conegudes**: S'apliquen modes de fallada establerts?
4. **Planificació de reversió**: Es pot revertir el desplegament si sorgeixen problemes?

L'avaluació comprimida accepta més risc posterior al desplegament. Aquest compromís ha de ser explícit: "Estem desplegant amb avaluació prèvia reduïda perquè [raó], acceptant una càrrega de monitorització més gran i activadors de reversió més primerencs."

## Requisits organitzatius

L'avaluació prèvia al desplegament eficaç requereix infraestructura organitzativa més enllà del propi procés d'avaluació.

**Autoritat**: Els equips d'avaluació necessiten poder per retardar o bloquejar el desplegament. Sense autoritat, l'avaluació es converteix en consell, fàcilment anul·lable.

**Independència**: Els avaluadors no haurien de dependre de gerents enfocats en el desplegament. Certa distància organitzativa permet una avaluació honesta.

**Recursos**: L'avaluació requereix temps, experiència i eines. Una avaluació amb recursos insuficients produeix resultats superficials.

**Vies d'escalament**: Quan l'avaluació identifica preocupacions greus, les rutes clares cap a la presa de decisions executives permeten una resposta adequada. La [supervisió a nivell de consell](/research/043-board-oversight/) proporciona l'escalament definitiu.

## Conclusió

L'avaluació de riscos prèvia al desplegament és l'última oportunitat sistemàtica per prevenir danys abans que es produeixin. Els marcs eficaços combinen la identificació integral de riscos amb les limitacions pràctiques, els enfocaments escalonats amb llindars clars, l'avaluació interna amb la revisió externa.

Els marcs presentats aquí exigeixen un compromís organitzatiu: no només documents de processos sinó autoritat, recursos i responsabilitat genuïns. Les organitzacions que tracten l'avaluació com un obstacle al desplegament realitzaran avaluacions que no prevenen problemes. Les que tracten l'avaluació com un mecanisme per construir sistemes millors descobriran els problemes mentre encara es poden abordar.

La pressió de temps i les dinàmiques competitives treballen en contra d'una avaluació exhaustiva. Però les conseqüències d'una avaluació inadequada —dany als usuaris, accions regulatòries, dany reputacional, exposició a la responsabilitat— argumenten a favor de prendre seriosament la finestra prèvia al desplegament. L'avaluació no és un retard per arribar al desplegament; és un pas per desplegar bé.

---

*Aquesta anàlisi presenta marcs d'avaluació d'aplicació general. Els dominis específics —sanitat, serveis financers, transport— tenen requisits regulatoris addicionals i pràctiques establertes que s'haurien d'integrar amb aquests marcs.*
