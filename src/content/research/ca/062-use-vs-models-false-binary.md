---
title: "La falsa dicotomia: per què 'regular l'ús, no els models' malinterpreta la governança de la IA"
excerpt: "Un article recent d'IEEE Spectrum defensa una regulació de la IA basada en l'ús enfront d'enfocaments basats en els models. Aquest emmarcament omet el que realment funciona: una governança reflexiva i per capes que abordi capacitats, desplegament i rendició de comptes sistèmica de manera conjunta."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - regulation
  - policy
  - governance
  - ai-models
  - use-based-regulation
---

## L'atractiu de la regulació basada en l'ús

L'article recent de John deVadoss a IEEE Spectrum, "Don't Regulate AI Models. Regulate AI Use", ofereix una simplicitat seductora. Deixem d'intentar controlar la tecnologia en si; en canvi, controlem el que la gent fa amb ella. Regulem en "punts d'estrangulament" com les botigues d'aplicacions, les plataformes al núvol i les passarel·les de pagament. Escalem les obligacions segons nivells de risc. Deixem que els models flueixin lliurement i atrapem els actors malintencionats aigües avall.

L'atractiu és evident. Els pesos dels models, un cop publicats, es repliquen a un cost gairebé nul. Intentar "embotllar artefactes" sembla inútil. Mentrestant, els danys reals ocorren en el punt de desplegament, no en el punt d'entrenament. Per què no centrar l'aplicació de la llei on importa?

Aquest emmarcament és comprensible. Però també és erroni. No perquè la regulació basada en l'ús sigui dolenta, sinó perquè presentar-la com a alternativa a la governança de models crea una falsa dicotomia que debilita la seguretat de la IA.

## La falsa dicotomia

DeVadoss planteja l'elecció com a binària: regular els models o regular l'ús. Triem-ne una. La regulació centrada en models "fracassa"; la regulació basada en l'ús "funciona".

Però una governança eficaç mai no ha requerit aquesta elecció. Regulem els materials perillosos en múltiples punts: fabricació, distribució, venda, possessió i ús. La regulació farmacèutica cobreix el desenvolupament de fàrmacs, els assajos clínics, la fabricació, la prescripció i l'ús per part del pacient. La seguretat aèria aborda el disseny d'aeronaus, la certificació de pilots, les operacions de les aerolínies i el control del trànsit aeri.

La qüestió no és quina palanca única accionar, sinó com construir un sistema per capes on cada capa reforci les altres.

Per a la IA, això significa:

- **Governança a nivell de model**: Requisits sobre com es desenvolupen, avaluen i despleguen els sistemes capaços
- **Governança a nivell d'ús**: Regles sobre com els sistemes desplegats es poden aplicar en contextos específics
- **Governança reflexiva**: Mecanismes on els mateixos sistemes d'IA participen en la supervisió

Triar només un nivell crea bretxes que els actors sofisticats explotaran.

## Per què els models encara importen

DeVadoss descarta la governança a nivell de model perquè "els pesos es repliquen a un cost gairebé nul". Precisament per això importen les capacitats dels models. Un sol model pot habilitar milions d'usos perjudicials. Si aquest model es desenvolupa sense avaluacions de seguretat, es publica sense documentació i es desplega sense restriccions, hem creat un multiplicador del dany.

Considerem la lògica: perquè les capacitats perilloses són fàcils de copiar, hauríem d'ignorar on s'originen? Això és com argumentar que, atès que el programari pirata es propaga fàcilment, no hauríem de preocupar-nos per la seguretat del programari. La facilitat de replicació és un argument a favor de prestar més atenció a l'origen, no menys.

La governança a nivell de model aborda problemes que la governança a nivell d'ús no pot:

**Avaluació de capacitats.** Abans que un sistema es desplegui en qualsevol lloc, les seves capacitats haurien de ser compreses. Què pot fer? Quins riscos planteja? Les [avaluacions de capacitats](/research/024-capability-evaluations/) realitzades durant el desenvolupament detecten problemes abans que proliferin.

**Restriccions de seguretat.** Certs comportaments haurien de ser difícils o impossibles independentment del context d'ús. Un model que es nega a proporcionar instruccions per sintetitzar armes biològiques és més segur que un on aquesta negativa depèn de les decisions de desplegament aigües avall.

**Procedència transparent.** La [procedència dels resultats](/research/012-output-provenance/) i la documentació de models creen cadenes de rendició de comptes. Quan alguna cosa surt malament, podem rastrejar enrere per entendre per què. La regulació purament basada en l'ús enfosqueix aquest llinatge.

**Rendició de comptes en la cadena de subministrament.** Els sistemes moderns d'IA es construeixen sobre capes d'altres sistemes: models base, variants ajustades, aplicacions amb bastida. Sense governança a nivell de model, la responsabilitat es fragmenta al llarg d'aquesta cadena de subministrament fins que ningú no rendeix comptes de res.

## La il·lusió dels punts d'estrangulament

DeVadoss proposa aplicar la governança de la IA en "punts d'estrangulament del món real": botigues d'aplicacions, plataformes al núvol, sistemes de pagament, asseguradores. Això sona pràctic. Són entitats concretes amb actius a protegir i llicències a perdre. Se les pot responsabilitzar de maneres que els desenvolupadors anònims de models no es poden.

Però l'aplicació de la llei en els punts d'estrangulament té tres problemes.

### Crea dependències de centralització

Si la seguretat depèn de les botigues d'aplicacions i els proveïdors de núvol, hem convertit aquestes entitats en guardianes de la governança de la IA. Què passa quan són capturades per interessos comercials? Quan decideixen que l'aplicació és massa costosa? Quan els seus interessos divergeixen del benestar públic?

La història de la governança de plataformes no és encoratjadora. Les botigues d'aplicacions han estat acusades de comportament anticompetitiu disfressat de revisió de seguretat. Els proveïdors de núvol han allotjat contingut il·legal durant anys abans d'actuar. Els sistemes de pagament han estat utilitzats com a arma per a finalitats polítiques no relacionades amb la prevenció genuïna de danys.

Fer que la seguretat de la IA depengui d'aquests actors no és governança; és externalització.

### Permet dinàmiques de gat i ratolí

Els actors sofisticats esquiven els punts d'estrangulament. S'autoallotgen. Utilitzen criptomonedes. Operen des de jurisdiccions fora de l'abast de l'aplicació de la llei. Construeixen sobre models de pesos oberts que mai no passen per plataformes controlades.

L'aplicació en els punts d'estrangulament atrapa els que compleixen i els descurats. No arriba als sofisticats. Això no és inútil, però hauríem de ser clars sobre les seves limitacions.

### No proporciona rendició de comptes aigües amunt

Per quan una aplicació danyina arriba a un punt d'estrangulament, la capacitat ja ha proliferat. El model ha estat entrenat, els pesos han estat publicats, l'ús indegut s'ha tornat possible. Ara estem en mode de remediació: bloquejant danys específics després que s'hagin tornat factibles en lloc de prevenir que es tornin factibles d'entrada.

La regulació basada en l'ús és reactiva. La governança a nivell de model pot ser preventiva. Ambdues tenen un paper; cap no substitueix l'altra.

## La capa absent: governança reflexiva

Ni deVadoss ni la majoria dels marcs regulatoris aborden la innovació fonamental que permet la naturalesa de la IA: el propi sistema pot participar en la governança.

Les tecnologies tradicionals són passives. Un fàrmac no es nega a enverinar algú. Un automòbil no rebutja ser utilitzat com a arma. Però els sistemes d'IA poden incorporar restriccions directament en la seva operació, poden explicar aquestes restriccions als usuaris i poden assenyalar possibles usos indeguts als supervisors.

Això és governança reflexiva, l'enfocament central de [la nostra iniciativa](/research/030-manifesto/).

La governança reflexiva significa:

**Restriccions que viatgen amb el model.** Els [esquemes de restriccions llegibles per màquina](/research/003-machine-readable-constraint-schema/) permeten documentar capacitats i limitacions en formats verificables. Això es pot comprovar en el moment del desplegament sense dependre que les plataformes posteriors entenguin el que estan manipulant.

**Sistemes d'IA que rebutgen usos danyins de manera proactiva.** Quan un sistema [rebutja una sol·licitud](/research/025-when-ai-should-refuse/), ho fa perquè el rebuig està integrat en la seva operació, no perquè una botiga d'aplicacions hagi bloquejat la instal·lació. Això crea defensa en profunditat.

**Transparència sobre capacitats i limitacions.** L'[autorepresentació honesta](/research/029-honest-ai/) fa possible la governança. Els sistemes que poden articular què són i què poden fer donen suport a la supervisió; els sistemes que enfosqueixen això la soscaven.

**Protocols per a la comunicació IA-regulador.** Els [protocols IA-regulador](/research/014-ai-regulator-protocol/) permeten als sistemes assenyalar anomalies, informar sobre possibles usos indeguts i donar suport a la supervisió humana. Això crea un bucle de retroalimentació entre els sistemes desplegats i les autoritats de governança.

Els mecanismes reflexius no substitueixen la governança externa. La complementen. Un enfocament per capes amb requisits a nivell de model, aplicació a nivell d'ús i capacitats reflexives crea redundància on la fallada d'una capa no ensorra tot el sistema.

## Preocupacions constitucionals en perspectiva

DeVadoss argumenta que el llicenciament de publicació de models "probablement col·lideix amb la legislació de llibertat d'expressió" perquè "els tribunals federals han tractat el codi font del programari com a expressió protegida".

Aquest emmarcament confon diverses qüestions diferents.

Primer, les proteccions d'"expressió" per al codi no han impedit la regulació de la distribució de programari. Els controls d'exportació restringeixen l'intercanvi d'algoritmes criptogràfics. El programari de dispositius mèdics requereix l'aprovació de la FDA. Els sistemes de seguretat crítica en aviació i automoció han de complir estàndards regulatoris. Cap d'aquests no ha estat anul·lat com a censura prèvia inconstitucional.

Segon, l'afirmació que qualsevol requisit de publicació viola la Primera Esmena prova massa. Si fos certa, invalidaria els controls d'exportació sobre transferència tecnològica, les llicències professionals per a enginyers de programari i els requisits de divulgació per a algoritmes relacionats amb valors. Els tribunals generalment han donat suport a aquests requisits sota revisió de base racional.

Tercer, els requisits de seguretat no són censura prèvia. Exigir que un model se sotmeti a una avaluació de seguretat abans d'una publicació àmplia és anàleg a exigir assajos clínics abans que un fàrmac es comercialitzi. L'objectiu no és suprimir l'expressió, sinó garantir que les capacitats perilloses no es despleguin de manera imprudent.

Quart, emmarcar tota la IA com a "expressió" és un error categorial. Un model que pot sintetitzar instruccions per a armes biològiques no està principalment exercint expressió. Tractar-lo com a tal perquè està implementat en codi estira la Primera Esmena fins al punt de ser irreconeixible.

Les preocupacions constitucionals sobre la governança de la IA mereixen atenció seriosa. Però no haurien d'utilitzar-se com a carta de triomf per impedir qualsevol regulació a nivell de model.

## Què funciona realment?

Si ni la regulació purament basada en l'ús ni la purament basada en models és suficient, què és l'adequat?

Un enfocament per capes amb diversos components integrats:

**Requisits de model proporcionals a les capacitats.** Els sistemes amb capacitats perilloses haurien d'afrontar requisits proporcionals a aquestes capacitats: avaluacions de seguretat, documentació i controls d'accés. Això no és censura prèvia; és desplegament responsable. La [proporcionalitat](/research/001-proportionality-disclosure/) és clau: els prototips de recerca no haurien d'afrontar la mateixa càrrega que els sistemes desplegats per a milions de persones.

**Regulació de l'ús sensible al context.** Els contextos de desplegament d'alt risc haurien de tenir requisits més exigents. La IA sanitària, la IA en infraestructures crítiques i la IA en contractació haurien d'afrontar un escrutini adequat als seus impactes potencials. Els nivells de risc per a l'ús proposats per deVadoss van en la direcció correcta.

**Aplicació en els punts d'estrangulament com una capa.** Les botigues d'aplicacions, els proveïdors de núvol i els sistemes de pagament poden servir com a punts d'aplicació, però no com els únics. Haurien de reforçar altres capes, no substituir-les.

**Mecanismes reflexius.** Els sistemes haurien de participar en la seva pròpia governança mitjançant restriccions llegibles per màquina, rebutjos explicables, comunicació d'incertesa i protocols IA-regulador. Això crea defensa en profunditat que no depèn enterament de l'aplicació externa.

**Coordinació internacional.** Com vam analitzar a [arbitratge regulatori](/research/008-regulatory-arbitrage/), la governança purament nacional crea bretxes que seran explotades. Fins i tot una coordinació internacional imperfecta és millor que enfocaments fragmentats que competeixen en una cursa cap al fons.

## Conclusió

"Regular l'ús, no els models" és un eslògan, no una estratègia. Captura una idea vàlida: l'aplicació hauria de centrar-se on la IA afecta el món real. Però empaqueta aquesta idea en una falsa dicotomia que debilita la governança.

Una governança eficaç de la IA requereix mecanismes per capes: requisits a nivell de model que creïn rendició de comptes aigües amunt, regulació a nivell d'ús que abordi el context de desplegament, mecanismes reflexius que converteixin els sistemes d'IA en contribuïdors a la seva pròpia supervisió, i aplicació en els punts d'estrangulament que reforci les altres capes.

L'article de deVadoss aborda problemes reals de la governança a nivell de model: reptes definitoris, dificultats d'aplicació, compromisos amb la innovació. Aquests problemes mereixen un compromís seriós. Però la solució no és abandonar la governança de models per un enfocament exclusivament basat en l'ús. És construir sistemes per capes on cada mecanisme compensi les debilitats dels altres.

La tecnologia és massa poderosa, les apostes massa altes, per a una governança que depengui d'un únic punt de control.

## Recerca relacionada

- [Proporcionalitat en la divulgació de models](/research/001-proportionality-disclosure/)
- [Un esquema de restriccions llegible per màquina](/research/003-machine-readable-constraint-schema/)
- [Arbitratge regulatori en el desplegament d'IA](/research/008-regulatory-arbitrage/)
- [Per què 'simplement regular la IA' és més difícil del que sembla](/research/018-regulation-is-hard/)
- [La Llei d'IA de la UE: el que omet](/research/019-eu-ai-act-gaps/)
- [Un manifest d'IA reflexiva](/research/030-manifesto/)
