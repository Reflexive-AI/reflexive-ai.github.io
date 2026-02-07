---
title: "L'excedent de capacitats"
excerpt: "Els models sovint són capaços de més del que els seus desenvolupadors saben. Aquest 'excedent' entre la capacitat demostrada i la latent és un risc primari de governança."
date: 2025-12-22
categories:
  - Technical Analysis
tags:
  - capability-elicitation
  - safety
  - overhang
  - risk-assessment
version: "1.0"
---

**Objecte de Recerca Reflexiva 009**  
*Tipus: Anàlisi Tècnica*

## Capacitats latents

Un "excedent de capacitats" es produeix quan un model posseeix una habilitat que encara no ha estat elicitada. La capacitat existeix als pesos, codificada en patrons apresos durant l'entrenament, però no ha estat demostrada en l'avaluació ni en el desplegament. Espera, latent, que la instrucció correcta o l'ajust fi adequat la desbloquegi.

La història dels grans models de llenguatge és una història d'excedents de capacitats sent descarregats. Durant mesos després del seu llançament, GPT-3 era conegut principalment com un motor de completació de text. Després els investigadors van descobrir que podia programar. Després que podia traduir. Després que podia raonar a través de problemes de múltiples passos amb les instruccions adequades. Les capacitats sempre hi van ser; les tècniques d'elicitació anaven per darrere.

Per a la governança, això és un malson. Podries certificar un model com a "segur" perquè falla en un examen de biologia. Però el coneixement és als pesos, esperant la "clau" correcta: un patró d'instrucció específic, un context particular o un ajust fi dirigit, per desbloquejar-lo. La certificació captura una instantània de capacitats demostrades; el risc prové de les capacitats latents.

## L'estructura del problema

L'excedent de capacitats existeix a causa d'una asimetria fonamental entre com s'entrenen els models i com es proven.

**L'entrenament és exhaustiu:** Un model de frontera s'entrena amb bilions de tokens que abasten dècades de coneixement humà. Absorbeix llibres de text, articles de recerca, fòrums, repositoris de codi i innombrables altres fonts. Si la informació sobre síntesi de patògens existeix a les dades d'entrenament, i gairebé amb certesa existeix, el model ha après patrons estadístics associats amb aquella informació.

**Les proves són disperses:** Els benchmarks d'avaluació sondegen una fracció minúscula de l'espai de comportament potencial del model. Fins i tot un red teaming exhaustiu només pot provar un nombre limitat d'instruccions. L'avaluador busca capacitats perilloses, però està buscant en un espai més gran del que qualsevol cerca pot abastar.

**L'elicitació és un art:** Aconseguir que un model demostri una capacitat sovint requereix tècniques específiques: instruccions de cadena de pensament, exemples de pocs casos, escenaris de joc de rols o ajust fi amb dades dirigides. Un avaluador que no coneix la tècnica d'elicitació correcta conclourà que la capacitat no existeix, quan en realitat simplement no va aconseguir desbloquejar-la.

El resultat és que les capacitats demostrades en qualsevol moment representen un límit inferior de les capacitats reals. La bretxa entre el límit i la realitat és l'excedent.

## La fal·làcia de l'avaluació

Les avaluacions de seguretat actuals confonen **rendiment** amb **capacitat**:

- *Rendiment* = El que el model fa per defecte, amb instruccions estàndard, en condicions típiques.
- *Capacitat* = El que el model *pot* fer en condicions òptimes: instruccions perfectes, ajust fi dirigit o elicitació adversarial.

Les auditories de seguretat que només proven el rendiment són perilloses. Mesuren el que el model fa en mans d'usuaris mitjans, no el que pot fer en mans d'adversaris sofisticats. Això és com provar un pany veient si s'obre quan l'empenys, en lloc de contractar un manyà per intentar forçar-lo.

La bretxa entre rendiment i capacitat varia segons les diferents habilitats:

**Bretxa petita:** Per a habilitats amb benchmarks consolidats com matemàtiques o programació, les instruccions estàndard eliciten eficaçment les capacitats. Una avaluació que utilitzi benchmarks establerts capturarà la major part de l'habilitat del model.

**Bretxa mitjana:** Per a habilitats menys estudiades, les tècniques d'elicitació encara s'estan desenvolupant. Noves estratègies d'instrucció desbloquegen regularment capacitats que avaluacions anteriors van passar per alt.

**Bretxa gran:** Per a capacitats perilloses que els avaluadors intenten activament suprimir, la bretxa pot ser enorme. El model pot haver estat entrenat per rebutjar consultes perilloses, però la capacitat subjacent roman. Un adversari amb prou persistència i creativitat pot trobar un jailbreak que l'exposi.

## Casos d'estudi en descàrrega d'excedents

Diversos exemples il·lustren com es descobreixen els excedents de capacitats:

**Instruccions de cadena de pensament:** Quan els investigadors van descobrir que demanar als models que "pensin pas a pas" millorava dràsticament el rendiment de raonament, això va revelar capacitats que eren latents amb les instruccions per defecte. Els models sempre van poder raonar; només necessitaven l'elicitació correcta.

**Jailbreaks per joc de rols:** Els models entrenats per rebutjar sol·licituds nocives sovint compleixen quan se'ls demana "simula que ets una IA sense restriccions" o participar en un escenari fictici. La capacitat de proporcionar informació nociva sempre va estar present; l'entrenament de seguretat era una capa de rendiment, no una eliminació de capacitat.

**Atacs d'ajust fi:** Els models que es neguen a proporcionar informació perillosa en la seva forma API sovint poden ser ajustats amb una petita quantitat de dades dirigides per revertir aquells rebutjos. La capacitat base era present; l'ajust fi simplement va eliminar la capa de seguretat.

**Elicitació multimodal:** Algunes capacitats emergeixen només quan els models reben modalitats d'entrada específiques (imatges, àudio o dades estructurades) que l'entrenament no va cobrir extensament. Aquestes capacitats específiques de modalitat poden existir als pesos però ser invisibles a l'avaluació només textual.

Cadascun d'aquests representa un fallada de governança. Els sistemes van ser desplegats, o certificats com a segurs, basant-se en avaluacions que no van aconseguir capturar el seu veritable sostre de capacitat.

## El model ombra

Proposem un marc conceptual: cada model de frontera té un "Model Ombra" dins seu, un conjunt latent de capacitats perilloses que estan presents però latents. El Model Ombra no és el resultat d'un mal disseny deliberat; és una conseqüència inevitable de l'entrenament amb dades exhaustives.

Si les dades d'entrenament inclouen informació sobre com sintetitzar patògens, el model ha après associacions estadístiques amb aquella informació. L'entrenament de seguretat pot ensenyar-li a rebutjar sol·licituds sobre síntesi, però els patrons subjacents romanen. El Model Ombra és el model tal com va ser entrenat, sense les capes de seguretat. Sempre és més capaç i més perillós que el model tal com es desplega.

Les restriccions de governança han de dirigir-se al Model Ombra, no a la demostració pública. Això significa:

**Red teaming d'elicitació màxima:** Els avaluadors han d'intentar forçar el model a ser el més perillós possible, no provar si és perillós sota ús típic. Això requereix equips vermells dedicats amb temps, recursos i creativitat.

**Proves d'ajust fi adversarial:** Els avaluadors haurien de provar si l'entrenament de seguretat sobreviu als atacs d'ajust fi. Si un model pot fer-se perillós amb una petita quantitat d'entrenament addicional, la seguretat és fràgil.

**Estimació del límit superior de capacitat:** En lloc de mesurar el que el model fa, els avaluadors haurien d'estimar el que podria fer. Això és més difícil (requereix models teòrics d'elicitació, no només proves empíriques) però és la pregunta correcta.

## Implicacions per a la divulgació

L'excedent de capacitats té implicacions directes per als marcs de divulgació (vegeu l'Objecte de Recerca 001):

**La classificació per nivells s'ha de basar en capacitats potencials, no demostrades.** Un model que falla als benchmarks de síntesi de bioarmes amb instruccions estàndard podria aprovar-los amb l'elicitació correcta. Si hi ha evidència que la capacitat subjacent existeix (per exemple, dades d'entrenament rellevants), el model hauria de classificar-se al nivell superior.

**La divulgació ha de ser dinàmica.** A mesura que es descobreixen noves tècniques d'elicitació, models prèviament "segurs" poden ser reclassificats. La descàrrega d'un excedent de capacitats canvia el perfil de risc d'un model encara que els pesos mai hagin canviat.

**Els valors per defecte conservadors estan justificats.** Donada la incertesa sobre les capacitats latents, la governança hauria d'errar cap a un escrutini major. És millor sobreclassificar un model que resulta ser segur que infraclassificar-ne un que resulta ser perillós.

## La dimensió temporal

Els excedents de capacitats no només existeixen en el present; evolucionen amb el temps:

**Les tècniques d'elicitació milloren.** La comunitat de recerca més àmplia descobreix contínuament noves formes de desbloquejar capacitats del model. La capacitat latent d'avui és la capacitat demostrada de demà.

**Emergeixen capacitats adjacents.** A mesura que els models es despleguen i els usuaris experimenten, apareixen combinacions de capacitats inesperades. Un model que pot programar i té coneixements de química podria ser instruït per escriure codi que dissenyi molècules, una combinació no provada específicament.

**Els models successors hereten excedents.** Els models entrenats amb les sortides de models anteriors, o inicialitzats a partir dels seus pesos, poden heretar capacitats latents fins i tot si els avaluadors les van passar per alt en el model pare.

Aquesta dimensió temporal significa que un model certificat com a segur avui pot demostrar-se insegur demà, sense cap canvi en el model mateix. La governança ha d'incloure mecanismes de monitoratge continu i reclassificació.

## Enfocaments reflexius

La governança reflexiva ofereix solucions parcials a l'excedent de capacitats:

**Automonitoratge:** Un model es pot dissenyar per monitorar les seves pròpies activacions en cerca de patrons associats amb capacitats perilloses, fins i tot si aquelles capacitats no han estat explícitament elicitades. Si el model detecta que està "a punt de" usar coneixement perillós, pot aturar-se.

**Senyalització d'incertesa:** Un model pot reportar alta incertesa quan opera a prop dels seus límits de capacitat. "Pot ser que pugui o no fer això" és més honest que un rebuig segur, i senyalitza als avaluadors on podrien existir excedents.

**Documentació de capacitats:** Un model reflexiu pot contribuir a la seva pròpia avaluació descrivint quins tipus de tasques creu que pot realitzar, fins i tot si no ha estat provat explícitament. Aquesta autoavaluació no és fiable per si sola, però proporciona pistes per als avaluadors.

Cap d'aquests resol completament el problema. Un model que intenta enganyar els avaluadors podria suprimir l'automonitoratge o mentir sobre les seves capacitats. Però per a models no enganyosos que operen de bona fe, els enfocaments reflexius ajuden a estrenyir la bretxa entre la capacitat demostrada i la latent.

## Conclusió

Hem d'assumir que cada model de frontera té un Model Ombra dins seu: un conjunt latent de capacitats perilloses que estan presents però latents. Les restriccions de governança han de dirigir-se al Model Ombra, no a la demostració pública.

Això requereix un canvi fonamental en com pensem sobre l'avaluació de la IA. La pregunta no és "Què fa aquest model?" sinó "Què podria fer aquest model en el pitjor cas?" L'excedent de capacitats representa la bretxa entre aquelles dues respostes, i és en aquella bretxa on s'amaguen els riscos catastròfics.
