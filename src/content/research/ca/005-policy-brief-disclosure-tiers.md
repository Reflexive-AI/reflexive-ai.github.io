---
title: "Informe de politica: el marc de nivells de divulgacio"
excerpt: "Una guia en llenguatge accessible per a legisladors: per que la transparencia unica per a tota la IA fracassa, i com un enfocament escalonat pot equilibrar seguretat amb innovacio."
date: 2025-12-18
categories:
  - Policy Brief
  - Public
tags:
  - policy
  - regulation
  - guide
  - disclosure
  - transparency
version: "1.0"
---

**Objecte de Recerca Reflexiva 005**  
*Tipus: Informe de politica (Public)*

## Resum executiu

Els reguladors enfronten actualment un dilema:
- **Massa transparencia** sobre models perillosos podria ajudar actors maliciosos a construir armes.
- **Massa poca transparencia** impedeix als investigadors auditar la seguretat.

La solucio actual (exigir "fitxes de model" per a tot) no resol aixo. Crea paperassa per a petites startups mentre no captura els riscos profunds dels models de frontera.

**La solucio:** Deixar de tractar tots els models d'IA per igual. Proposem un **Marc de divulgacio per nivells** on la quantitat de transparencia requerida s'ajusta al risc del model.

Aquest informe explica per que la divulgacio per nivells funciona, com funcionaria a la practica i que han de considerar els legisladors en implementar-la.

---

## El problema actual

Els requisits actuals de transparencia de la IA pateixen un defecte de disseny fonamental: tracten tots els sistemes d'IA com si planteguessin els mateixos riscos. L'assistent de deures d'un estudiant i un sistema capac de dissenyar patogens nous han de presentar documentacio similar. Aixo crea diversos errors:

**Per als reguladors:** La safata d'entrada s'omple amb milers de fitxes de model que semblen mes o menys iguals. Cadascuna enumera diligentment les fonts de dades d'entrenament, els casos d'us previstos i les limitacions conegudes. Pero el format fa gairebe impossible distingir entre sistemes trivials i genuinament perillosos. La documentacio destinada a facilitar la supervisio l'enfosqueix en el seu lloc.

**Per als petits desenvolupadors:** El compliment es converteix en una carrega significativa fins i tot per a aplicacions de baix risc. Una startup que construeix un assistent de programacio impulsat per IA ha de navegar els mateixos requisits de documentacio que un laboratori de frontera. Aixo descoratja la innovacio i malgasta recursos en paperassa que no proporciona cap benefici de seguretat.

**Per als investigadors de seguretat:** La informacio que realment necessiten (resultats d'equips vermells, avaluacions de capacitat, composicio de dades d'entrenament per a dominis perillosos) falta o esta enterrada en camps estandarditzats que no van ser dissenyats per a aixo. El format de fitxa de model va evolucionar per a sistemes relativament simples; no captura la complexitat dels models de frontera.

**Per al public:** L'aparenca de transparencia crea falsa confianca. "Van presentar tota la paperassa, aixi que deu ser segur". Pero el compliment dels requisits de documentacio no diu res sobre la seguretat real.

---

## Per que "mes gran" no sempre es "mes arriscat"

Sovint assumim que els models mes grans (mes parametres) son mes perillosos. Aixo es principalment cert, pero no sempre. Un model petit entrenat especificament amb llibres de text de virologia i protocols de sintesi podria ser mes perillos que un xatbot generic deu vegades el seu tamany.

Considerem un exemple hipotetic: el Model A te 100 mil milions de parametres i va ser entrenat amb text general d'internet. El Model B te 7 mil milions de parametres pero va ser ajustat finament de manera extensiva amb literatura de quimica, inclosos procediments detallats de sintesi. El Model B, malgrat ser molt mes petit, podria plantejar majors riscos de bioseguretat.

Per tant, no hauriem de regular basant-nos nomes en la mida (parametres). Hauriem de regular basant-nos en la **capacitat**: el que el model realment *pot* fer. Especificament, hauriem de centrar-nos en les capacitats perilloses: Pot ajudar a sintetitzar patogens? Pot escriure malware nou? Pot proporcionar assistencia en el disseny d'armes?

Aixo requereix un canvi en el pensament regulatori. En lloc de preguntar "Com de gran es?" preguntem "Que pot fer?". Aixo es mes dificil de mesurar, pero es la pregunta correcta.

---

## Els tres nivells de transparencia

Proposem tres nivells simples de divulgacio per als desenvolupadors d'IA:

### Nivell 1: La fitxa estandard (Baix risc)

**Per a:** Xatbots, assistents de programacio, generadors d'imatges, IA d'atencio al client, sistemes de recomanacio i la gran majoria d'aplicacions d'IA.

**Requisit:**
- Una "etiqueta nutricional" estandard (fitxa de model).
- Enumera quines dades es van utilitzar i limitacions conegudes (p. ex., "al·lucina fets", "pot exhibir biaix sobre el tema X").
- Casos d'us previstos basics i aplicacions fora d'abast.
- **Qui ho veu?** Tothom (public).

**Per que aquest nivell:** Aquests sistemes plantegen riscos limitats. Poden produir ocasionalment resultats incorrectes o esbiaixats, pero no poden causar dany catastrofic. Exigir documentacio extensa carregaria els desenvolupadors sense beneficis de seguretat corresponents.

**Que aconsegueix:** Responsabilitat basica. Els usuaris saben amb que estan interactuant. Els investigadors poden identificar patrons entre sistemes. Els reguladors tenen un inventari de referencia de la IA desplegada.

### Nivell 2: L'auditoria del sistema (Risc mitja)

**Per a:** Models que afecten decisions d'alt impacte: contractacio, prestecs, diagnostic de salut, aplicacio de la llei, avaluacio educativa i moderacio de contingut a escala.

**Requisit:**
- Tot el del Nivell 1, a mes de:
- Resultats detallats de proves contra benchmarks de biaix i equitat.
- Registres d'auditoria independents que mostrin com el sistema rendeix entre diferents grups demografics.
- Avaluacions d'impacte que documenten danys potencials i mitigacions.
- Mecanismes de report d'incidents quan les coses surten malament.
- **Qui ho veu?** Reguladors i auditors verificats. Els resums poden ser publics.

**Per que aquest nivell:** Aquests sistemes prenen decisions que afecten significativament la vida de les persones. Un algoritme de contractacio que discrimina, un sistema de salut que diagnostica incorrectament certes poblacions o un sistema de moderacio de contingut que silencia el discurs legitim causa un dany real, pero no catastrofic i irreversible. Els riscos justifiquen mes escrutini que el Nivell 1 pero no requereixen les mesures extremes del Nivell 3.

**Que aconsegueix:** Responsabilitat significativa per a decisions consequents. El requisit d'auditoria crea incentius per provar exhaustivament abans del desplegament. L'acces del regulador permet l'aplicacio.

### Nivell 3: La caixa de seguretat (Alt risc)

**Per a:** Models de "frontera" amb capacitats en hacking, armes biologiques o quimiques, tecnologia nuclear o sistemes d'armes autonomes. Tambe s'aplica a qualsevol model la avaluacio de capacitat del qual reveli potencial perillos.

**Requisit:**
- Tot el dels Nivells 1 i 2, a mes de:
- Transparencia total de la composicio de dades d'entrenament, particularment per a dominis perillosos.
- Registres complets d'"equip vermell" que mostren com els desenvolupadors van intentar obtenir capacitats perilloses.
- Avaluacions detallades de capacitat en tots els dominis d'amenaca.
- Mesures de seguretat per a la proteccio de pesos.
- **Qui ho veu?** Nomes els instituts de seguretat governamentals (com els Instituts de Seguretat d'IA) i auditors especificament autoritzats. No public, ni tan sols la majoria dels reguladors.

**Per que aquest nivell:** Aquests sistemes podrien permetre un dany catastrofic. Un model capac de proporcionar instruccions pas a pas per a la sintesi d'armes biologiques a qualsevol que pregunti es fonamentalment diferent d'un xatbot que ocasionalment diu alguna cosa ofensiva. Els riscos justifiquen una transparencia extrema, pero aquesta transparencia s'ha de controlar estrictament per evitar que la propia divulgacio permeti l'us indegut.

**Que aconsegueix:** Maxima visio per als responsables de prevenir riscos catastrofics. L'acces restringit prevé la proliferacio. Els requisits integrals asseguren que res quedi ocult.

---

## Per que funciona aquest marc

### Desgrava la innovacio
Aproximadament el 90% de les aplicacions d'IA plantegen riscos de Nivell 1. Sota aquest marc, els seus desenvolupadors presenten una fitxa de model estandard i continuen endavant. Sense auditories extenses, sense revisio governamental, sense advocats interpretant regulacions complexes. Aixo mante baixa la barrera d'entrada per a aplicacions beneficioses.

### Enfoca els recursos
Les agencies reguladores tenen personal, pressupost i experiencia limitats. Sota els requisits plans actuals, han de revisar innombrables aplicacions de baix risc mentre els riscos de frontera reben la mateixa atencio. El marc per nivells permet als reguladors centrar el seu temps limitat en els models de Nivell 3 que realment plantegen riscos catastrofics i els models de Nivell 2 que afecten poblacions vulnerables.

### Protegeix els secrets adequadament
La divulgacio de Nivell 3 es extensa, pero no es publica. Els registres d'equip vermell, els manifests de dades d'entrenament i les avaluacions de capacitat van nomes a instituts de seguretat amb les autoritzacions de seguretat apropiades. Aixo significa que la informacio mes perillosa (els prompts especifics que obtenen capacitats perilloses, les bretxes en les mesures de seguretat) no es converteix en un full de ruta public per a l'us indegut.

### Crea incentius clars
Els desenvolupadors saben exactament que es requereix a cada nivell. Si volen evitar els requisits de Nivell 3, poden triar no construir sistemes amb capacitats de Nivell 3, o poden implementar mesures de seguretat que redueixin les capacitats per sota del llindar. El marc fa explicit el cost del desenvolupament perillos.

### S'adapta a la capacitat, no nomes a la mida
Un model especialitzat petit que planteja riscos de Nivell 3 rep escrutini de Nivell 3. Un model general gran que planteja nomes riscos de Nivell 1 rep requisits de Nivell 1. El marc respon al perill real, no a mesures indirectes.

---

## Consideracions d'implementacio

**Qui decideix el nivell?** Inicialment, el desenvolupador s'autoclassifica, subjecte a auditoria. La classificacio erronea te consequencies: si una presentacio de Nivell 1 es descobreix posteriorment amb capacitats de Nivell 3, aixo es frau regulatori. Aixo crea incentius per a una autoavaluacio precisa.

**Com s'estableixen els llindars?** Els llindars de capacitat s'han de definir mitjancant un proces multipartit que involucri investigadors de seguretat, experts en el domini (virolegs, professionals de ciberseguretat, experts en armes) i la societat civil. Han de ser especifics i mesurables: "Pot el model assolir una puntuacio X en l'avaluacio Y?"

**Amb quina frequencia s'actualitzen les presentacions?** El Nivell 1 pot ser estatic. Els Nivells 2 i 3 requereixen reevaluacio periodica, especialment despres d'actualitzacions significatives al model. L'ajust fi que augmenta les capacitats podria moure un model a un nivell superior.

**Que passa amb els models de pesos oberts?** Els models oberts presenten reptes especials. Un cop els pesos son publics, es poden ajustar finament per eliminar les mesures de seguretat. Aixo pot justificar restringir la publicacio oberta per a models amb potencial de Nivell 3: una limitacio significativa pero potencialment necessaria.

---

## La conclusio final

La transparencia no es un interruptor binari (Ences/Apaga). Es un regulador d'intensitat. Una regulacio mes intel·ligent significa ajustar aquesta llum al nivell adequat per a l'habitacio on som.

Els enfocaments actuals fracassen perque tracten totes les habitacions per igual: inundant els espais de baix risc amb burocracia innecessaria mentre deixen els espais d'alt risc perillosament foscos. El marc per nivells ajusta la llum a l'habitacio: prou brillant per veure el que importa, prou controlada per evitar que la propia llum causi dany.

Per als legisladors, el missatge es simple: deixeu d'exigir les mateixes divulgacions per a un xatbot d'atencio al client i una potencial arma biologica. Ajusteu l'escrutini als riscos. Aixo no es captura regulatoria ni ser lax amb la IA: es bona governanca.
