---
title: "Arbitratge regulatori en arquitectures de desplegament"
excerpt: "Com la inferència distribuïda i la fragmentació de models permeten als actors eludir les restriccions jurisdiccionals."
date: 2025-12-21
categories:
  - Governance Analysis
tags:
  - arbitrage
  - jurisdiction
  - deployment
  - enforcement
version: "1.0"
---

**Objecte de Recerca Reflexiva 008**  
*Tipus: Anàlisi Tècnica/Política*

## La geografia dels pesos

Les lleis són geogràfiques. Són escrites per legislatures amb autoritat delimitada, aplicades per agències amb jurisdicció territorial i adjudicades per tribunals el poder dels quals acaba a les fronteres nacionals. Una llei alemanya vincula els actors a Alemanya; no té poder automàtic sobre servidors a Singapur.

Els pesos no respecten aquestes fronteres.

Un model entrenat a Califòrnia, ajustat als Emirats Àrabs Units i servit des de nodes distribuïts a sis continents no té un domicili legal únic. Existeix a tot arreu i enlloc: una entitat computacional que es llisca entre les esquerdes jurisdiccionals sobre les quals es van construir els sistemes de governança.

Això crea una oportunitat per a l'**arbitratge regulatori**. Així com el capital flueix cap als paradisos fiscals i la manufactura flueix cap a jurisdiccions amb lleis laborals febles, el desenvolupament i desplegament d'IA fluirà cap a "paradisos regulatoris": jurisdiccions amb estàndards de seguretat permissius, capacitat d'aplicació limitada o indiferència estratègica davant els riscos de la IA.

## Els mecanismes de l'arbitratge

L'arbitratge regulatori en la IA no és hipotètic; està emergint en diverses formes:

### Elecció de jurisdicció per a l'entrenament

Entrenar un model de frontera requereix una enorme capacitat de còmput i personal especialitzat. Aquests recursos existeixen només en uns pocs països, principalment els Estats Units, la Xina i parts d'Europa. Fins ara, això concentra la capacitat de governança. Però a mesura que el còmput es distribueix més i les tècniques d'entrenament es tornen més eficients, aquesta concentració s'erosionarà.

Una empresa que afronta requisits estrictes d'entrenament a la UE podria incorporar una subsidiària en una jurisdicció sense tals regles, realitzar l'entrenament allà i importar els pesos resultants. Els pesos en si mateixos no porten registre de on van ser entrenats ni sota quines condicions.

### Blanqueig mitjançant ajust fi

Fins i tot si l'entrenament del model base està regulat, l'ajust fi sovint escapa a l'escrutini. Un model base que compleix amb els requisits de la Llei d'IA de la UE pot ser exportat legalment a una jurisdicció sense tals regles, ajustat per eliminar comportaments de seguretat, i després desplegat, ja sigui localment o mitjançant accés API transfronterer.

Aquest és l'equivalent en IA del blanqueig de diners. El model base "net" és processat a través d'una jurisdicció permissiva per produir un derivat "brut" que hauria estat prohibit si s'hagués creat a la jurisdicció original.

### Fragmentació del desplegament

Considerem el que podríem anomenar una arquitectura de desplegament "Frankenstein":

- **Entrenament del model base:** País A (alta regulació, estrictament conforme).
- **Ajust fi de seguretat:** País A (línies vermelles aplicades, comportaments de seguretat instal·lats).
- **Ajust fi d'eliminació:** País B (sense regulació, comportaments de seguretat eliminats).
- **Allotjament d'inferència:** Xarxa descentralitzada de nodes en zones d'alt ample de banda i baixa regulació.
- **Passarel·la API:** País C (s'apliquen lleis de protecció al consumidor, però la passarel·la només transmet sol·licituds).
- **Interfície d'usuari:** País D (empresa orientada a l'usuari incorporada aquí per regles de responsabilitat favorables).

Quina llei s'aplica? La Llei d'IA de la UE es dirigeix al "proveïdor". Però qui és el proveïdor? L'empresa que va entrenar el model base? L'entitat que el va ajustar? Els operadors de nodes que executen la inferència? La passarel·la API? L'aplicació orientada a l'usuari?

En una xarxa d'inferència descentralitzada, el proveïdor és una propietat emergent de l'eixam. No hi ha una entitat única que regular, cap jurisdicció única amb autoritat clara, cap punt únic on es pugui aplicar la regulació.

### Inferència xifrada

A mesura que la computació amb preservació de la privacitat madura, la inferència podria ocórrer en enclaus xifrats que ni tan sols l'operador del node pot observar. Un usuari envia una consulta xifrada; el node retorna una resposta xifrada; cap de les dues pot ser inspeccionada. Els requisits regulatoris de registre, monitoratge o filtratge de contingut es tornen inaplicables, no perquè algú els desafiï, sinó perquè l'aplicació és tècnicament impossible.

## Per què això importa

L'arbitratge regulatori no és simplement un problema de compliment; és una cursa cap al fons.

Si els requisits de seguretat a la Jurisdicció A imposen costos als desenvolupadors, mentre que la Jurisdicció B no imposa tals costos, els desenvolupadors afronten pressió per traslladar-se a B. Qui roman a A pateix una desavantatge competitiva. Amb el temps, el centre del desenvolupament es desplaça cap a jurisdiccions permissives, i els beneficis de seguretat que A buscava assolir es perden.

Aquesta dinàmica és familiar en altres dominis. És la raó per la qual les corporacions multinacionals dipositen la propietat intel·lectual a Irlanda, per la qual els vaixells de càrrega enarboren banderes liberianes, per la qual els jocs d'atzar en línia operen des de Malta. Internet ja va demostrar com la fragmentació jurisdiccional soscava la intenció regulatòria. La IA hi afegeix noves dimensions: l'objecte regulat (el model) és més portàtil, les vies de distribució (APIs, torrents, canals xifrats) són més nombroses, i els danys potencials són més severs.

## Els límits de la governança jurisdiccional

Diversos factors fan que la IA sigui especialment resistent a la regulació basada en jurisdicció:

**Sense nexe físic:** Una planta química és en un lloc específic; un model pot ser a tot arreu. Els marcs regulatoris tradicionals assumeixen que l'objecte regulat té una presència física que pot ser inspeccionada, llicenciada o clausurada. Els models evadeixen aquesta suposició.

**Transmissió instantània:** Els pesos poden transmetre's globalment en minuts. Fins i tot si una jurisdicció prohibeix un model específic, els pesos poden ja estar distribuïts a milers de nodes. L'aplicació contra còpies distribuïdes és pràcticament impossible.

**Proliferació de pesos oberts:** Un cop els pesos s'alliberen públicament, no poden ser retirats. Un model entrenat en compliment amb totes les regulacions aplicables pot ser modificat per qualsevol, a qualsevol lloc. El desenvolupador original no té control sobre els treballs derivats.

**Desenvolupament pseudònim:** Amb prou seguretat operativa, un desenvolupador pot crear i desplegar models sense revelar mai la seva identitat o ubicació. La regulació requereix saber a qui regular; el pseudònim frustra aquest requisit.

## Cap a una governança no jurisdiccional

Si la regulació basada en jurisdicció és obsoleta per a la intel·ligència basada en pesos, quines alternatives existeixen?

### Governança del còmput

Regular el maquinari, no el programari. Entrenar models de frontera requereix xips especialitzats (actualment dominats per una sola empresa) i una enorme quantitat d'energia. Aquests tenen cadenes de subministrament físiques que poden ser monitorades. Els controls d'exportació sobre xips avançats, ja implementats per diversos països, representen un intent de governança del còmput.

Limitacions: Això funciona per a models de frontera però no per a models que poden ser entrenats en maquinari convencional. A mesura que l'eficiència millora, el llindar de còmput per a capacitats perilloses disminueix.

### Restriccions natives dels pesos

Incorporar restriccions de governança als mateixos pesos, restriccions que viatgen amb el model independentment d'on es desplegui. L'Objecte de Recerca 003 (Esquema de restriccions llegibles per màquina) explora aquest enfocament.

Limitacions: Les restriccions que existeixen en programari poden ser eliminades per algú amb accés als pesos. Aquest enfocament requereix mesures complementàries per prevenir atacs d'ajust fi.

### Restriccions aplicades per maquinari

Integrar la governança als xips. Enclaus segurs que es neguen a executar inferència si certs mòduls de restricció no estan carregats. Atestació criptogràfica que el model que s'executa al maquinari no ha estat manipulat.

Limitacions: Això requereix coordinació al llarg de la cadena de subministrament de xips i crea riscos si la pròpia governança del maquinari és capturada o utilitzada com a arma.

### Governança basada en tractats

Acords internacionals que harmonitzin els estàndards de seguretat de la IA, impedint que qualsevol jurisdicció es converteixi en un paradís regulatori. Similar als tractats de control d'armes o els acords ambientals.

Limitacions: Els tractats requereixen consens, que és lent d'assolir i difícil de mantenir. Les principals nacions desenvolupadores d'IA tenen interessos en conflicte. I els tractats típicament manquen de mecanismes d'aplicació forts.

### Governança basada en responsabilitat

Imposar responsabilitat als qui es beneficien dels sistemes d'IA, independentment d'on va ocórrer el desenvolupament. Si una empresa nord-americana utilitza un model ajustat en una jurisdicció no regulada, assumeix la responsabilitat pels danys resultants.

Limitacions: Això requereix rastrejar la causalitat des del dany fins al model i des del model fins al beneficiari. Per a danys difusos o desenvolupadors pseudònims, aquest rastreig pot ser impossible.

## La dimensió reflexiva

Cap d'aquests enfocaments és suficient per si sol. El camí més prometedor els combina amb governança reflexiva: sistemes d'IA que participen en el monitoratge i l'aplicació de restriccions sobre si mateixos, independentment de la jurisdicció on operen.

Un model equipat amb middleware de verificació de restriccions (com es descriu a l'Objecte de Recerca 003) pot aplicar línies vermelles fins i tot quan es desplega en infraestructura fora de l'abast de qualsevol regulador. La restricció viatja amb el model. La governança està integrada en el procés d'inferència.

Això no resol el problema dels models deliberadament despullats de restriccions. Però sí que resol el problema dels models que deriven cap a desplegaments no regulats mentre mantenen el compliment de bona fe. Per a actors malintencionats, la governança del maquinari i del còmput continua sent un complement necessari.

## Conclusió

L'arbitratge regulatori no és un risc futur; és una realitat present. Cada dia que passa sense mecanismes de governança no jurisdiccionals és un dia en què el desenvolupament i el desplegament es desplacen cap a entorns permissius.

La resposta no pot ser construir murs més alts al voltant de jurisdiccions individuals: aquests murs no contenen béns digitals. La resposta ha de ser desenvolupar una governança que viatgi amb la tecnologia: restriccions a nivell de còmput, aplicació nativa dels pesos, coordinació internacional i sistemes reflexius que es governin a si mateixos.

L'alternativa és un futur on els models més capaços són també els menys restringits: entrenats en laboratoris que prioritzen la velocitat sobre la seguretat, desplegats des de servidors que no responen a cap supervisió, i disponibles per a qualsevol disposat a eludir les jurisdiccions que van intentar imposar controls.

Aquell futur no és inevitable, però evitar-lo requereix una innovació en governança almenys tan ambiciosa com la innovació tècnica que crea el risc.
