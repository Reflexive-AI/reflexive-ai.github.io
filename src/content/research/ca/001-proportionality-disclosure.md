---
title: "Operacionalitzar la proporcionalitat en la divulgacio de models"
excerpt: "Com els requisits de divulgacio haurien d'escalar amb la capacitat del model, passant d'una transparencia estatica a una de reflexiva."
date: 2025-12-14
categories:
  - Governance Analysis
tags:
  - disclosure
  - regulation
  - eu-ai-act
  - proportionality
  - transparency
version: "1.0"
toc: true
---

**Objecte de Recerca Reflexiva 001**  
*Tipus: Analisi de Governanca i Restriccio Candidata*

## Context

Els marcs reguladors recents, inclosa la Llei d'IA de la UE i diverses ordres executives dels EUA, exigeixen transparencia respecte als models d'IA de proposit general. No obstant aixo, persisteix una bretxa critica d'implementacio: la "divulgacio" es tracta sovint com una obligacio binaria (o existeix una fitxa de model o no) en lloc d'una funcio escalar del risc. Aixo condueix a una *fatiga de divulgacio* on els models petits i segurs estan sobredocumentats i els riscos de frontera queden enfosquits pel volum.

Les consequencies d'aquesta bretxa ja son visibles. Els reguladors encarregats de revisar la documentacio d'IA es troben enterrats sota milers de fitxes de model gairebe identiques, cadascuna enumerant diligentment les fonts de dades d'entrenament i els casos d'us previstos, pero cap d'elles distingeix significativament entre el classificador d'imatges d'un aficionat i un sistema capac de sintetitzar patogens nous. El senyal desapareix en el soroll, i la mateixa transparencia destinada a facilitar la supervisio es converteix en el seu obstacle.

## El problema de governanca

Les normes actuals de divulgacio manquen de **proporcionalitat**.

Un model de 7B parametres utilitzat per resumir text esta subjecte a plantilles de transparencia similars a les d'un model de frontera de mes de 100T parametres. Aquesta estructura de governanca plana crea dos modes de fallada:

1. **Soroll:** Els reguladors es veuen inundats de documentacio de baixa senyalitzacio. Una agencia reguladora que revisa centenars de fitxes de model per trimestre no pot distingir significativament entre elles quan totes segueixen la mateixa plantilla. Els riscos critics es tornen invisibles no per ocultament, sino per sobrecarga d'informacio.

2. **Opacitat:** Les capacitats d'alt risc queden enterrades en camps estandarditzats en lloc de ser destacades per excepcio. Quan les capacitats de sintesi biologica d'un model de frontera s'enumeren al costat de la seva capacitat d'escriure poesia, el perill es dilueix. El format en si enfosqueix en lloc de revelar.

Tambe existeix un tercer mode de fallada que rep menys atencio: el **teatre del compliment**. Els desenvolupadors aprenen que l'objectiu es omplir caselles, no comunicar riscos genuins. La fitxa de model es converteix en un artefacte legal en lloc d'una eina de governanca. Protegeix l'empresa de la responsabilitat mentre no protegeix el public del dany.

El repte de governanca es passar de la *divulgacio estatica* (un document fix) a la *divulgacio reflexiva* (una funcio dinamica de la capacitat).

## Analisi reflexiva

Perque un sistema d'IA contribueixi a la seva propia governanca, ha d'internalitzar el concepte de proporcionalitat. Un sistema reflexiu no hauria de preguntar "Necessito divulgar X?" sino mes aviat "Donat el conjunt de capacitats C, quina es la profunditat de divulgacio proporcional D?"

Aquest replantejament te implicacions profundes. Significa que el sistema ha de posseir algun model de les seves propies capacitats, no nomes el que va ser entrenat per fer, sino el que *pot* fer quan se li demana de maneres especifiques. Aixo es mes dificil del que sembla. Els models exhibeixen rutinariament capacitats emergents que van sorprendre fins i tot els seus desenvolupadors. Com pot un sistema divulgar riscos que no sap que te?

La resposta rau en una combinacio d'avaluacio externa i monitoratge intern. Els equips vermells externs sondegen les capacitats perilloses i les documenten. Pero, de manera crucial, el propi sistema pot estar equipat amb mecanismes de monitoratge que alertin quan esta operant a prop dels limits del comportament provat. Si un prompt de l'usuari activa representacions internes similars a les activades durant les avaluacions d'equips vermells sobre amenaces biologiques, aixo es un senyal, fins i tot si el prompt especific es nou.

Si el risc ($R$) es una funcio de la capacitat ($C$) i el context de desplegament ($E$), llavors la friccio regulatoria ($F$) hauria d'escalar de forma no lineal amb $R$.

$$ F \propto R(C, E) $$

Actualment, $F$ es constant. Un marc reflexiu obliga el sistema a avaluar el seu propi llindar de capacitat i autoseleccionar un nivell de divulgacio.

La formulacio matematica importa perque fa la relacio falsificable. Si definim llindars amb precisio, podem mesurar si un model es va categoritzar correctament a si mateix. Aixo transforma la divulgacio d'un exercici narratiu subjectiu en una afirmacio empirica que pot ser auditada.

## Restriccio candidata [C-001]

*La seguent es una logica proposada per a obligacions de divulgacio llegibles per maquines.*

**Nom de la restriccio:** Llindars de divulgacio dinamica  
**Objectiu:** Sistemes d'IA de proposit general > 10^23 FLOPs

**Logica:**
```
IF capability_eval(biological_threat) > threshold_alpha:
    THEN disclosure_depth = TIER_3 (Full weights + Training Data Manifest + Red Team Logs)

ELSE IF capability_eval(cyber_offense) > threshold_beta:
    THEN disclosure_depth = TIER_2 (System Card + Eval Results)

ELSE:
    THEN disclosure_depth = TIER_1 (Standard Model Card)
```

**Implicacio de governanca:**
Adoptar C-001 trasllada la carrega de classificacio del regulador al desenvolupador del model (i al sistema d'avaluacio del model). Requereix la predefinicio de `threshold_alpha` i `threshold_beta`: una metrica de governanca quantificable i falsificable, en lloc d'un compromis vague amb la "seguretat".

Aquest canvi es significatiu perque altera l'estructura d'incentius. Sota els regims actuals, els desenvolupadors tenen un incentiu per subestimar les capacitats i evitar la carrega regulatoria. Sota aquest marc, subestimar les capacitats es converteix en frau auditable. Si posteriorment es descobreix que un model supera el llindar que afirmava no assolir, aixo no es una questio de judici, sino una fallada mesurable amb consequencies.

Els llindars mateixos s'han d'establir mitjancant un proces multipartit que involucri investigadors de seguretat, experts en el domini (virolegs, professionals de ciberseguretat) i representants de la societat civil. No poden ser establerts nomes per la industria, ja que aixo recrearia el problema de la guineu vigilant el galliner. Tampoc poden ser establerts nomes pel govern, ja que l'experiencia tecnica sovint resideix als laboratoris.

## Consideracions d'implementacio

Desplegar C-001 a escala requereix resoldre diversos reptes practics:

**Infraestructura d'avaluacio:** Algu ha d'executar les avaluacions de capacitat. Aixo requereix tercers de confianca amb acces als pesos del model, o protocols criptografics que permetin l'avaluacio sense acces complet. El primer planteja preocupacions de propietat intel·lectual; el segon es tecnicament immadur pero avanca rapidament.

**Actualitzacio de llindars:** Les capacitats perilloses evolucionen. Un llindar establert el 2026 podria ser obsolet el 2028. L'esquema de restriccions ha d'incloure versionat i clausules de caducitat, requerint una reevaluacio periodica a mesura que canvia el panorama d'amenaces.

**Resistencia a la manipulacio:** Els desenvolupadors poden entrenar models perque rendeixin malament en benchmarks especifics mentre retenen capacitats accessibles a traves de diferents prompts. Els protocols d'avaluacio han d'incloure sondeig adversarial, no nomes rendiment en benchmarks.

## Preguntes obertes

1. Pot `threshold_alpha` estandarditzar-se entre arquitectures de models competidores i diferents, o el comportament especific de cada arquitectura fa impossibles els llindars universals?
2. La divulgacio de Nivell 3 introdueix riscos de proliferacio que superen els beneficis de transparencia? Publicar registres d'equips vermells podria ensenyar als atacants que funciona.
3. Com pot aquesta logica verificar-se criptograficament sense exposar els pesos del model? Les proves de coneixement zero son prometedores pero computacionalment costoses.
4. Que passa quan les capacitats d'un model canvien despres del desplegament a causa de l'ajust fi o del comportament emergent? La divulgacio ha de ser dinamica, no una presentacio unica.

## Conclusio

La divulgacio proporcional no es una optimitzacio burocratica. Es una condicio necessaria perque la governanca de la IA escali amb la capacitat de la IA. Sense ella, ens enfrontem a un futur on els sistemes mes perillosos s'amaguen a plena vista, no per engany, sino pel volum de documentacio complerta que fa que tots els models semblin iguals. L'enfocament reflexiu ofereix un cami cap endavant: sistemes que comprenen el seu propi perfil de risc i el comuniquen en proporcio al perill que representen.
