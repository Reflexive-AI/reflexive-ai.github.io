---
title: "Sistemes de notificacio d'incidents: llicons de l'aviacio"
excerpt: "L'aviacio ha desenvolupat sistemes sofisticats per notificar i aprendre dels incidents. Que pot aprendre la governanca de la IA d'aquest experiment de decades en cultura de seguretat?"
date: 2026-01-03
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - incident-reporting
  - safety
  - transparency
  - auditing
  - standards
---

## El model de l'aviacio

A la decada de 1970, l'aviacio era perillosa. Els accidents eren frequents i la industria no disposava de formes sistematiques per aprendre'n. Els pilots que cometien errors s'enfrontaven a castics, de manera que amagaven les seves errades. Els mateixos fracassos es repetien perque ningu sabia que havien passat abans.

Llavors l'aviacio va desenvolupar quelcom revolucionari: sistemes confidencials de notificacio d'incidents que prioritzaven l'aprenentatge per sobre de la culpa. Avui, l'aviacio es la forma de transport mes segura, i la seva cultura de seguretat --bastida sobre la notificacio sistematica d'incidents, la seva analisi i la seva difusio-- es considera una rao fonamental.

La governanca de la IA afronta un repte analeg. Es produeixen incidents perjudicials amb la IA, pero no disposem de mecanismes sistematics per notificar-los, analitzar-los i assegurar que tot el camp n'aprengui. L'experiencia de l'aviacio ofereix llicons per construir aquests mecanismes.

## Per que importa la notificacio d'incidents

L'objectiu de la notificacio d'incidents no es el castig, sino l'aprenentatge. Cada incident, quasi-accident i anomalia conte informacio sobre com poden fallar els sistemes. Capturar aquesta informacio i posar-la a disposicio d'altres que puguin enfrontar-se a situacions similars es essencial per millorar la seguretat al llarg del temps.

Sense notificacio sistematica, les fallades son esdeveniments aillats. Cada organitzacio nomes apren dels seus propis errors, i sovint ni tan sols n'apren, perque els individus amaguen errors per evitar consequencies. Les mateixes fallades es repeteixen entre organitzacions i al llarg del temps.

Amb notificacio sistematica, les fallades es converteixen en coneixement compartit. Una organitzacio que afronta un problema nou pot verificar si d'altres l'han afrontat. Els patrons a traves de molts incidents revelen problemes sistemics que no serien visibles des d'un sol esdeveniment. Tot el camp apren de l'experiencia de cada organitzacio.

Aixo es particularment valuos en la IA, on encara som a les primeres etapes de comprensio de com fallen els sistemes. Els patrons que sorgeixen de l'agregacio de molts incidents podrien revelar modes de fallada que ningu ha anticipat encara.

## Caracteristiques clau de la notificacio en aviacio

Diverses caracteristiques fan que la notificacio d'incidents en aviacio sigui efectiva. Cadascuna te implicacions per a la IA.

### Confidencialitat i absencia de castig

El Sistema de Notificacio de Seguretat de l'Aviacio de la NASA (ASRS) garanteix confidencialitat als notificants. Els informes es desidentifiquen abans de l'analisi i la difusio. I de manera critica, presentar un informe proporciona immunitat limitada davant del castig per l'incident notificat.

Aquest compromis --acceptar que alguns errors quedaran sense castig a canvi de l'aprenentatge que proporciona la notificacio-- va ser inicialment controvertit. Pero va resultar essencial. Els pilots van comenar a notificar errors que altrament haurien amagat. El volum i la qualitat dels informes van augmentar dramaticament.

La notificacio d'incidents d'IA afronta el mateix repte. Les organitzacions tenen forts incentius per amagar incidents perjudicials: responsabilitat legal, dany reputacional i desavantatge competitiu. Sense proteccions, la majoria dels incidents no es notificaran.

Dissenyar proteccions adequades es complex. La immunitat completa eliminaria la rendicio de comptes. Cap proteccio eliminaria la notificacio. El model de l'aviacio ofereix un cami intermedi: proteccions limitades per a informes de bona fe, amb violacions greus encara subjectes a l'aplicacio de la llei.

### Separacio de l'aplicacio de la llei

Els sistemes de notificacio d'aviacio son tipicament operats per entitats separades dels reguladors que apliquen les normes. La NASA opera l'ASRS, no la FAA. Aquesta separacio es critica per a la confianca: els notificants creuen que la seva informacio no s'utilitzara en contra seva.

La notificacio d'incidents d'IA es beneficiaria d'una separacio similar. Si la mateixa agencia que investiga violacions tambe rep informes voluntaris, les organitzacions dubtaran a notificar. Una entitat independent --potser una organitzacio no governamental o una oficina governamental separada amb forts tallafocs-- podria generar mes confianca i mes informes.

### Recollida estructurada de dades

Els informes d'aviacio utilitzen formats estandarditzats que capturen informacio essencial: que va passar, quan, on, quin equip hi estava involucrat, quines condicions existien, que creu el notificant que va causar l'incident.

L'estandarditzacio permet l'analisi entre informes. Els patrons es fan visibles quan les dades son consistents. Les narratives ad hoc, tot i ser valuoses per al context, son dificils d'agregar.

La notificacio d'incidents d'IA es beneficiaria d'una estructura similar. Un esquema estandarditzat per a incidents d'IA podria capturar: el sistema involucrat (amb caracteritzacio de capacitats), el context d'implementacio, el dany que es va produir, la causa aparent, qualsevol mitigacio que es va intentar. Aixo connecta amb el nostre treball sobre [esquemes de restriccions llegibles per maquina](/research/003-machine-readable-constraint-schema/) --formats estructurats que permeten l'analisi computacional.

### Analisi i difusio

Recollir informes es inutil sense analisi i difusio. Els sistemes d'aviacio empren analistes que revisen informes, identifiquen patrons i produeixen alertes i recomanacions de seguretat.

Aquests resultats es difonen ampliament. Les aerolinies, els pilots, els fabricants i els reguladors reben troballes rellevants. Les millores de seguretat derivades de l'incident d'una organitzacio beneficien tota la industria.

La IA es beneficiaria de mecanismes similars d'analisi i difusio. Una entitat que agregui incidents d'IA, identifiqui patrons i difongui troballes podria accelerar l'aprenentatge a tot el camp. Aixo es particularment valuos per a les organitzacions que no tenen els recursos per dur a terme recerques extensives de seguretat pel seu compte.

## Adaptacio a la IA

Les llicons de l'aviacio proporcionen direccio, pero la IA te caracteristiques distintives que requereixen adaptacio.

### Velocitat i volum

Els incidents d'aviacio son esdeveniments relativament rars que es produeixen durant periodes de temps extensos. Els sistemes d'IA prenen milions de decisions per segon, i les sortides perjudicials poden produir-se continuament.

La notificacio d'incidents d'IA ha d'abordar l'escala. No cada sortida problematica pot notificar-se individualment. Sera necessaria alguna combinacio de deteccio automatitzada (assenyalant sortides que compleixin certs criteris), mostreig (notificant incidents representatius en lloc de tots) i notificacio basada en llindars (informes obligatoris per a incidents greus, voluntaris per als menors).

### Complexitat de l'atribucio

Quan un avio falla, l'avio, el seu operador i les condicions son tipicament identificables. Quan un sistema d'IA produeix una sortida perjudicial, l'atribucio es mes complexa: el mateix model podria implementar-se en molts contextos, ser modificat per usuaris posteriors i activar-se per entrades d'usuaris que varien enormement.

Els informes d'incidents d'IA necessiten capturar prou context per permetre una analisi significativa. Aixo inclou no nomes la identitat del model, sino el context d'implementacio, l'entrada que va desencadenar la sortida, qualsevol modificacio o ajust fi aplicat, i l'historial d'interaccio si es rellevant.

### Dinamiques competitives

La notificacio d'incidents d'aviacio es beneficia del fet que les aerolinies no competeixen principalment en reclamacions de seguretat. Utilitzen els mateixos avions, procediments similars i informacio de seguretat compartida sense desavantatge competitiu.

Els desenvolupadors d'IA competeixen en part per la seguretat. Admetre incidents perjudicials podria beneficiar els competidors. Aquesta dinamica competitiva podria suprimir la notificacio fins i tot amb proteccions de confidencialitat.

Abordar aixo podria requerir notificacio obligatoria (eliminant l'opcio competitiva) o compromisos de participacio a nivell de tota la industria que assegurin que cap organitzacio individual es vegi perjudicada per notificar.

### Evolucio rapida

Els dissenys d'avions canvien al llarg de decades. Les capacitats de la IA canvien en mesos. Els patrons d'incidents d'fa un any podrien ser irrellevants per als sistemes actuals.

L'analisi d'incidents d'IA ha de ser mes rapida que l'analisi d'aviacio, i les troballes s'han de difondre mes rapidament per continuar sent utils. Aixo podria requerir eines d'analisi automatitzada que puguin identificar patrons en temps real, complementades amb revisio humana.

## Connexio amb la governanca reflexiva

La notificacio d'incidents es particularment rellevant per a la governanca reflexiva de la IA. Els sistemes d'IA podrien participar ells mateixos en la deteccio i notificacio d'incidents.

Un sistema que monitoritza les seves propies sortides i assenyala danys potencials contribueix a la deteccio d'incidents. Vam explorar aixo a [poden els sistemes d'IA detectar el seu propi us indegut](/research/011-reflexive-misuse-detection/). Aquest automonitoratge podria alimentar automaticament els sistemes de notificacio d'incidents.

De la mateixa manera, el nostre treball sobre [protocols per a la comunicacio d'IA a regulador](/research/014-ai-regulator-protocol/) preve sistemes d'IA que poden informar directament preocupacions als organismes de supervisio. Aixo crea una via per a la notificacio d'incidents en temps real que no depen que els operadors humans els notin i decideixin notificar.

La combinacio de notificacio humana i d'IA podria capturar incidents que qualsevol dels dos per separat passaria per alt. Els humans noten danys que els sistemes no reconeixen; els sistemes noten patrons que els humans passen per alt.

## Passos d'implementacio

Avancar cap a una notificacio efectiva d'incidents d'IA requereix passos concrets.

**Establir una entitat independent de notificacio.** Aquesta entitat rebria informes, mantindria la confidencialitat, realitzaria analisis i difondria troballes. La independencia tant de la industria com de l'aplicacio de la llei es critica per a la confianca.

**Desenvolupar formats de notificacio estandarditzats.** Quina informacio ha de contenir cada informe? Quina informacio opcional es valuosa? Els estandards permeten l'agregacio i l'analisi.

**Crear proteccions adequades.** Els notificants necessiten confianca en que els informes de bona fe no s'utilitzaran en contra seva. Aixo requereix proteccions legals que equilibrin l'aprenentatge amb la rendicio de comptes.

**Construir capacitat d'analisi.** L'entitat necessita recursos per analitzar informes, identificar patrons i produir troballes accionables. Aixo requereix tant experiencia humana com eines computacionals.

**Assegurar la difusio.** Les troballes son inutils si no arriben a aquells que poden actuar en consequencia. S'han d'establir canals per compartir llicons a tota la industria.

**Integrar amb els sistemes d'IA.** A mesura que els mecanismes reflexius madurin, els sistemes d'IA haurien de poder contribuir a la notificacio d'incidents directament, assenyalant danys potencials en temps real.

## Conclusio

Els sistemes de notificacio d'incidents de l'aviacio representen decades d'aprenentatge sobre com construir cultura de seguretat en un domini tecnic complex. La governanca de la IA pot beneficiar-se d'aquesta experiencia mentre s'adapta a les caracteristiques distintives de la IA.

La idea central es que l'aprenentatge requereix informacio, i la informacio requereix confianca. Crear sistemes en els quals les organitzacions confiïn prou com per notificar honestament es la base de l'aprenentatge col·lectiu sobre la seguretat de la IA.

Aquesta no es una solucio completa per a la governanca de la IA: la notificacio d'incidents aborda l'aprenentatge pero no la prevencio. Pero aprendre dels incidents es essencial per prevenir els futurs. La transformacio de l'aviacio de perillosa a segura ofereix esperanca que la governanca de la IA pugui assolir un progres similar.

## Related Research

- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [A Protocol for AI-to-Regulator Communication](/research/014-ai-regulator-protocol/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
