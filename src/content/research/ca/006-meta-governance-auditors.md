---
title: "Meta-governança: Qui audita els auditors?"
excerpt: "A mesura que l'auditoria per tercers esdevé un requisit regulatori, emergeix un nou problema de principal-agent. Aquesta nota analitza el mercat de certificació i proposa un protocol de 'prova de verificació'."
date: 2025-12-19
categories:
  - Governance Analysis
tags:
  - auditing
  - meta-governance
  - institutional-design
  - incentives
version: "1.0"
---

**Objecte de Recerca Reflexiva 006**  
*Tipus: Anàlisi de Governança*

## El problema de la recursió

Els marcs regulatoris com la Llei d'IA de la UE depenen en gran mesura de les "avaluacions de conformitat per tercers". La lògica sembla sòlida: no confiar en què les empreses d'IA avaluïn la seva pròpia seguretat; exigir que auditors independents verifiquin les seves afirmacions. Això assumeix que els auditors independents actuen com a àrbitres neutrals de la seguretat.

La història suggereix el contrari.

Des de la crisi financera de 2008 (on les agències de qualificació creditícia van atorgar les màximes qualificacions a valors hipotecaris sense valor) fins a l'escàndol del dieselgate de Volkswagen (on les empreses de proves d'emissions no van detectar anys de frau sistemàtic), l'historial de l'auditoria per tercers en dominis d'alt risc és preocupant. El patró es repeteix: els auditors són capturats per les indústries que regulen, i la certificació esdevé un segell d'aprovació automàtic en lloc d'una avaluació significativa.

El model de "pagament per l'emissor" —on l'empresa auditada paga l'auditor— crea una captura estructural. L'incentiu comercial de l'auditor és retenir el client, no trobar la fallada. Un auditor que desenvolupa una reputació de suspendre empreses es trobarà amb menys clients. Un auditor que desenvolupa una reputació de ser "raonable" (llegiu: indulgent) prosperarà.

En l'àmbit de la IA, aquest problema s'agreuja per l'**asimetria epistèmica**. El laboratori que construeix el model sempre sap més sobre ell que l'auditor. Si un laboratori de Nivell 1 gasta 100 milions de dòlars entrenant un model durant sis mesos, un auditor que gasta 50.000 dòlars durant dues setmanes per provar-lo està fent teatre de seguretat, no seguretat. L'auditor no pot aspirar a comprendre el model tan bé com els seus creadors, i els creadors tenen tots els incentius per presentar el model en la seva millor versió.

## La profunditat del problema

El repte de la meta-governança va més enllà d'un simple desalineament d'incentius. Considerem tota la cadena de problemes:

**Asimetria d'informació:** L'auditat coneix les debilitats del model. Sap quines instruccions tendeixen a provocar respostes problemàtiques, quins casos límit no va cobrir l'entrenament de seguretat, quines capacitats són latents però no òbvies. L'auditor només veu el que se li acut provar, i la seva selecció de proves està influïda per la informació de l'auditat.

**Asimetria de capacitat:** Els models de frontera requereixen una comprensió de frontera. La firma auditora necessitaria personal amb la mateixa experiència que el laboratori, però aquest personal té alta demanda i alta remuneració als mateixos laboratoris. La firma auditora no pot competir pel talent, de manera que opera amb avaluadors menys capacitats.

**Asimetria temporal:** Els laboratoris iteren contínuament. Una auditoria captura un moment en el temps. Per quan es publica l'informe d'auditoria, el model pot haver estat actualitzat, ajustat o reemplaçat. La certificació cobreix una instantània, però el desplegament és un flux continu.

**Asimetria de responsabilitat:** Si el model causa dany, el laboratori afronta responsabilitat. L'auditor típicament renuncia a la responsabilitat ("la nostra auditoria tenia un abast limitat"). Això crea una situació on l'entitat amb menys informació assumeix la responsabilitat de certificació, però l'entitat que assumeix la responsabilitat civil ja ha estat exonerada per la certificació.

## Propostes estructurals

Per trencar aquest cicle, necessitem mecanismes d'auditoria fonamentalment diferents del model actual:

### 1. Auditoria adversarial

L'auditor hauria de ser pagat per *trobar* fallades, no per certificar la seguretat. Això s'assembla a un mercat de recompenses per errors més que a una llista de verificació de compliment.

Sota aquest model, múltiples auditors competidors tenen incentius per descobrir problemes. Un auditor que troba un problema de seguretat significatiu obté una recompensa, pagada no pel laboratori, sinó per un fons regulatori finançat amb taxes de la indústria. L'objectiu del laboratori és dificultar que els auditors trobin problemes; l'objectiu de l'auditor és trobar-los. Aquesta estructura adversarial alinea correctament els incentius.

El repte és la calibració. Què compta com una troballa "significativa"? Qui adjudica les disputes entre auditors i laboratoris? Aquests són problemes resolubles, però requereixen un disseny institucional que encara no existeix.

### 2. Verificació criptogràfica

"Prova de verificació" on el rastre d'auditoria —instruccions provades, respostes del model, activacions internes— es processa criptogràficament i es registra en un registre immutable. Si una auditoria afirma que un model és segur, però el model posteriorment falla d'una manera que l'auditoria hauria d'haver detectat, l'auditoria pot examinar-se retroactivament.

Això crea responsabilitat al llarg del temps. Actualment, si un model causa dany, el laboratori diu "però vam ser auditats" i l'auditor diu "el nostre abast era limitat". Amb el compromís criptogràfic, podem preguntar: "L'auditoria realment va provar aquest mode de fallada? El model va respondre de manera segura durant l'auditoria però no en el desplegament? El model en producció era realment el mateix que el model auditat?"

Això no prevé les fallades, però assigna correctament la responsabilitat quan es produeixen. També crea incentius per a una auditoria exhaustiva: si la teva auditoria està registrada, no pots amagar-te darrere de declaracions vagues d'abast.

### 3. Auditoria reflexiva

El model mateix hauria de participar en l'auditoria, no com un subjecte obedient, sinó com una font d'informació sobre les seves pròpies capacitats i limitacions.

Una "Auditoria Reflexiva" és aquella en la qual el model sap que està sent provat i està restringit d'optimitzar per a l'auditoria (per exemple, rendir millor durant l'avaluació que durant el desplegament). Però més enllà d'això, el model pot ser consultat sobre la seva pròpia incertesa, els seus propis límits de capacitat i els seus propis modes de fallada potencials.

Això requereix un disseny acurat. Un model que optimitza per semblar segur no és el mateix que un model que és segur. Però un model que pot informar honestament "no estic segur del meu comportament en el domini X" o "el meu entrenament va incloure dades que podrien habilitar la capacitat Y" proporciona informació que les proves externes per si soles no poden obtenir.

L'element reflexiu significa que el model contribueix a la seva pròpia governança, no perquè es confiï en ell per avaluar-se a si mateix, sinó perquè proporciona un canal d'informació addicional que els auditors poden utilitzar.

## Implementació: un enfocament per capes

Aquestes propostes no són mútuament excloents. Un sistema de meta-governança robust podria combinar les tres:

1. **Capa base:** L'auditoria tradicional estableix un compliment mínim, però amb compromís criptogràfic del registre d'auditoria.

2. **Capa adversarial:** Els programes de recompenses per errors funcionen contínuament, pagant per fallades descobertes. Els laboratoris que sobreviuen a proves adversarials durant períodes prolongats obtenen puntuacions de confiança més altes.

3. **Capa reflexiva:** Els models proporcionen autoinformes estructurats sobre les seves capacitats i incerteses, subjectes a verificació contra el comportament observat.

4. **Capa temporal:** Les auditories expiren. Un model certificat al gener ha de ser recertificat després d'actualitzacions significatives. El monitoratge continu complementa l'avaluació puntual.

## La bretxa institucional

Res d'això funciona sense institucions dissenyades per implementar-ho. Actualment, el mercat d'"auditors tercers" per a la IA és incipient i no està supervisat. Qualsevol pot afirmar ser un auditor de seguretat d'IA. No existeixen estàndards sobre el que una auditoria ha de cobrir, com s'acrediten els auditors o quina responsabilitat assumeixen els auditors per certificacions fallides.

Construir aquestes institucions és almenys tan important com els protocols tècnics. Necessitem:
- Organismes d'acreditació que certifiquin la competència dels auditors
- Organitzacions d'estàndards que defineixin l'abast i la metodologia d'auditoria
- Agències reguladores que supervisin el propi mercat d'auditors
- Mercats d'assegurances que valorin la responsabilitat dels auditors, creant incentius financers per a l'exhaustivitat

Això és el "meta" en meta-governança. No n'hi ha prou amb exigir auditories; hem de governar els governants.

## Conclusió

Estem construint un sistema de governança sobre fonaments de sorra. La suposició actual —que les auditories per tercers proporcionen una garantia de seguretat significativa— no està recolzada per l'anàlisi d'incentius ni per l'historial de l'auditoria en altres dominis d'alt risc.

Sense resoldre la meta-governança dels auditors, "certificat com a segur" no significa més que "conforme amb el paperassa actual". Els enfocaments adversarials, criptogràfics i reflexius aquí delineats ofereixen camins cap a una auditoria que realment funcioni, però implementar-los requereix una innovació institucional que tot just ha començat.

L'alternativa és un futur on cada sistema d'IA perillós ve amb un segell d'aprovació d'un auditor que va ser pagat per aprovar-lo. Això no és governança; és blanqueig de responsabilitats.
