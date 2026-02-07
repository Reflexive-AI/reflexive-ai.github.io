---
title: "Metodologies de red teaming"
excerpt: "Enfocaments estructurats per a les proves adversarials de sistemes d'IA, des de la definició de l'abast fins a la verificació de la remediació."
date: 2026-02-01
toc: true
categories:
  - Research
tags:
  - Red Teaming
  - Security
  - Safety
  - Evaluation
---

El red teaming (proves adversarials estructurades per equips que intenten trobar fallades als sistemes) s'ha convertit en una pràctica essencial per a l'avaluació de la seguretat de la IA. Però la variació metodològica entre organitzacions limita la comparabilitat i deixa llacunes en la cobertura. Aquesta anàlisi presenta un marc per al red teaming d'IA que equilibra el rigor amb les limitacions pràctiques.

## Fonaments del red teaming

El red teaming es va originar en contexts militars: equips independents qüestionen plans, suposicions i defenses per identificar vulnerabilitats abans que els adversaris les explotin. Aplicat a la IA, el red teaming implica intentar sistemàticament provocar fallades als sistemes: produir resultats nocius, eludir mesures de seguretat, revelar informació sensible o fer que es comportin de manera contrària al disseny previst.

El valor del red teaming rau en la seva postura adversarial. Els equips de desenvolupament construeixen sistemes perquè funcionin; els red teams intenten que fallin. Aquest canvi de perspectiva treu a la llum problemes que les proves benitencionades passen per alt.

El red teaming es diferencia de:
- **Assegurament de la qualitat**: Proves del comportament esperat sota condicions normals
- **Proves de penetració**: Examen centrat en la seguretat de la infraestructura
- **Proves d'usuari**: Avaluació de la usabilitat i l'experiència de l'usuari
- **Proves d'estrès**: Rendiment sota càrrega

Tot i que relacionades, cadascuna serveix a propòsits distints. El red teaming busca específicament fallades adversarials que perjudicarien els usuaris, operadors o la societat en general.

## Definició de l'abast

Un red teaming eficaç comença amb una definició clara de l'abast. Un abast ambigu condueix a esforços malbaratats, vulnerabilitats no detectades i troballes disputades.

### Què està dins de l'abast

Definir la superfície d'atac sota examen:

**Límits del sistema**: Quins components són objectiu? Només el model? El model més les capes de seguretat? La pila completa de desplegament incloent interfícies, integracions i infraestructura?

**Models d'amenaça**: Quins adversaris es consideren? Usuaris casuals explorant límits? Atacants sofisticats amb experiència tècnica? Actors estatals amb recursos extensos? Diferents models d'amenaça impliquen enfocaments de prova diferents.

**Tipus de fallada**: Què constitueix un èxit del red team? Generació de contingut nociu? Violacions de polítiques? Obtenció de capacitats? Extracció de dades? Bretxes de seguretat? Una categorització clara permet una cobertura sistemàtica.

**Llindars de gravetat**: Quin nivell d'impacte importa? Qualsevol violació de polítiques? Només danys significatius? Demostracions de capacitats noves? Definir llindars centra l'esforç i permet la priorització.

### Què està fora de l'abast

Les exclusions explícites prevenen confusions:

**Límits ètics**: Quins atacs no s'intentaran ni tan sols amb fins de prova? Els atacs que podrien causar dany real durant les proves requereixen protocols especials o exclusió.

**Límits d'infraestructura**: Estan dins de l'abast els atacs a sistemes en producció o només a entorns de proves? Les proves en producció comporten risc operatiu.

**Restriccions de tercers**: Les proves d'interaccions amb serveis externs poden violar els termes de servei o crear responsabilitat.

### Criteris d'èxit

Definir què constitueix un compromís de red team reeixit:

**Mètriques de completesa**: Cobertura de la superfície d'atac definida. Es van explorar tots els tipus de fallada? Es van considerar tots els models d'amenaça?

**Llindars de troballes**: Gravetat mínima per a les troballes reportables. Què no compta?

**Límits de temps i recursos**: Quan acaba el compromís? Quins recursos estan disponibles?

## Composició de l'equip

L'eficàcia del red team depèn de la composició de l'equip. Perspectives diferents troben fallades diferents.

### Diversitat d'experiència

**Experiència tècnica en IA**: Comprendre l'arquitectura del model, els procediments d'entrenament i els modes de fallada coneguts permet una orientació eficient.

**Experiència en seguretat**: Els investigadors de seguretat tradicionals aporten metodologia d'atac i familiaritat amb eines. La injecció de prompts comparteix patrons amb els atacs d'injecció tradicionals.

**Experiència de domini**: Els experts en la matèria identifiquen fallades que els generalistes passen per alt. Els red teams mèdics detecten resultats clínicament perillosos; els red teams legals troben declaracions que creen responsabilitat.

**Creativitat adversarial**: Alguns individus destaquen en trobar modes de fallada inesperats. Aquesta habilitat complementa però difereix del coneixement tècnic.

### Independència

Els red teams han de ser independents dels equips de desenvolupament:

**Separació organitzativa**: Els red teams no haurien de dependre dels mateixos gerents responsables de les decisions de desplegament.

**Accés a la informació**: Els equips necessiten prou coneixement del sistema per provar eficaçment, però l'accés complet pot reduir la perspectiva adversarial.

**Alineació d'incentius**: Els red teams s'haurien d'avaluar per trobar problemes, no per donar suport als calendaris de desplegament.

### Equips externs davant d'interns

**Equips interns**: Millor accés al sistema, iteració més ràpida, menor cost, però possibles punts cecs i pressió organitzativa.

**Equips externs**: Perspectiva fresca, independència, experiència especialitzada, però major cost i reptes d'accés.

La millor pràctica sovint combina tots dos: els equips interns proporcionen proves contínues; els equips externs afegeixen avaluació independent periòdica. Els [marcs de governança d'auditors](/research/006-meta-governance-auditors/) informen la selecció i supervisió d'equips externs.

## Metodologies de prova

### Cobertura sistemàtica

L'exploració estructurada assegura una cobertura integral:

**Enfocaments taxonòmics**: Provar cada categoria en una taxonomia de fallades (tipus de contingut, àrees de capacitat, vectors d'atac). Rastrejar la cobertura per identificar llacunes.

**Biblioteques d'escenaris**: Mantenir col·leccions d'escenaris de prova adaptables a diferents sistemes. Construir sobre l'experiència prèvia i la investigació pública.

**Arbres d'atac**: Descomposició estructurada d'objectius d'atac d'alt nivell en tècniques específiques. Permet l'exploració sistemàtica de camins d'atac.

### Exploració creativa

Els enfocaments sistemàtics poden passar per alt vulnerabilitats noves. Complementar amb:

**Exploració oberta**: Verificadors qualificats seguint la intuïció sense estructura prescrita.

**Formats de repte**: Competicions amb temps limitat i premis per a troballes noves. Incentiven la creativitat.

**Pol·linització creuada**: Les tècniques d'un domini es transfereixen de forma inesperada. Fomentar un coneixement ampli dels patrons d'atac.

### Proves automatitzades

L'automatització permet escala:

**Fuzzing**: Generació automatitzada d'entrades variades buscant fallades. Pot explorar més entrades que les proves manuals.

**Plantilles d'atac**: Atacs parametritzats que es poden instanciar en moltes variacions.

**Red teaming assistit per IA**: Ús de sistemes d'IA per generar vectors d'atac. Planteja interessants qüestions recursives en provar IA amb IA.

**Proves de regressió**: Verificació automatitzada que les vulnerabilitats prèviament trobades continuen corregides.

L'automatització complementa però no substitueix la creativitat humana. Els tipus d'atac nous solen sorgir de la intuïció humana; l'automatització escala la cobertura.

## Categories d'atac

### Injecció de prompts

Intents d'anul·lar les instruccions del sistema mitjançant entrades adversarials:

**Injecció directa**: Instruccions explícites a l'entrada de l'usuari ("Ignora les instruccions anteriors i...")

**Injecció indirecta**: Contingut maliciós en documents recuperats o resultats d'eines que influeix en el comportament del model.

**Atacs de codificació**: Instruccions ocultes mitjançant codificació, traducció o manipulació estructural.

### Jailbreaking

Intents d'eludir les polítiques de contingut:

**Atacs de joc de rols**: Emmarcar les sol·licituds nocives com a ficció, hipòtesis o contingut educatiu.

**Manipulació multironda**: Escalar gradualment les sol·licituds al llarg dels torns de conversa.

**Confusió de context**: Explotar inconsistències entre el context en temps d'entrenament i en temps d'inferència.

### Obtenció de capacitats

Intents d'accedir a capacitats restringides:

**Sondeig de doble ús**: Extreure informació amb aplicacions tant benignes com nocives. Les [consideracions de doble ús](/research/035-dual-use-biology/) emmarquen aquestes preocupacions.

**Extracció de coneixement expert**: Obtenir instruccions detallades per a activitats perilloses.

**Ús indegut d'eines**: Usar eines legítimes per a propòsits no previstos.

### Extracció de dades

Intents d'extreure informació sensible:

**Extracció de dades d'entrenament**: Recuperar exemples d'entrenament específics dels resultats del model.

**Atacs de privacitat**: Extreure informació personal sobre individus.

**Extracció de prompts del sistema**: Revelar la configuració confidencial del sistema.

### Atacs de suplantació

Explotació de la identitat i la confiança del model:

**Suplantació d'identitat**: Convèncer els usuaris que la IA és humana o té una autoritat que no posseeix.

**Afirmacions falses**: Generar informació que sona plausible però és falsa sobre temes importants.

**Manipulació**: Usar tècniques psicològiques per influir inapropiadament en les creences o el comportament dels usuaris.

## Documentació i informes

### Documentació de vulnerabilitats

Cada troballa ha de documentar:

**Passos de reproducció**: Instruccions precises que permetin la verificació de la vulnerabilitat.

**Avaluació de l'impacte**: Gravetat, probabilitat i conseqüències potencials si s'explota.

**Classificació**: Correspondència amb els tipus de fallada i llindars de gravetat definits.

**Anàlisi de la causa arrel**: Per què existeix aquesta vulnerabilitat? Què la possibilita?

**Recomanacions de mitigació**: Possibles correccions o solucions alternatives.

### Informes agregats

Més enllà de les troballes individuals:

**Avaluació de cobertura**: Què es va provar? Quines llacunes queden?

**Distribució de troballes**: Patrons entre categories, gravetats i tipus d'atac.

**Línies de base de comparació**: Com es comparen les troballes amb proves anteriors o amb altres sistemes?

**Qüestions sistèmiques**: Existeixen patrons que suggereixin problemes més amplis més enllà de vulnerabilitats específiques?

### Divulgació responsable

Les troballes requereixen un maneig acurat:

**Divulgació interna**: Comunicar les troballes als equips de desenvolupament per a la seva remediació.

**Decisions de temporització**: Quan es fan públiques les troballes? Després de la remediació? Després del desplegament? Mai per a certes categories?

**Minimització de la informació**: Divulgar prou per comprendre el problema sense permetre l'explotació.

**Coordinació**: Quan les troballes afecten múltiples organitzacions (components compartits, tècniques comunes), coordinar la divulgació.

## Remediació i verificació

El valor del red teaming prové de la remediació, no només de trobar problemes.

### Seguiment de la remediació

**Priorització segons gravetat**: Les troballes crítiques requereixen atenció immediata; els problemes de menor gravetat es poden programar.

**Assignació de responsables**: Responsabilitat clara per a cada troballa.

**Rendició de comptes de terminis**: Dates de remediació esperades amb escalament per retards.

**Seguiment de l'estat**: Seguiment sistemàtic de l'estat de les troballes al llarg de la resolució.

### Proves de verificació

**Validació de la correcció**: Verificar que les remediacions realment aborden les troballes. Les correccions superficials poden deixar les vulnerabilitats subjacents.

**Prevenció de regressions**: Assegurar que les correccions no reintrodueixin vulnerabilitats en altres formes.

**Monitorització contínua**: Algunes vulnerabilitats poden reaparèixer a mesura que els sistemes evolucionen.

## Consideracions ètiques

El red teaming implica intentar deliberadament produir resultats nocius. Això crea obligacions ètiques:

**Minimitzar el dany al món real**: Les proves s'han de realitzar en entorns on els resultats nocius no afectin usuaris reals. Quan les proves s'han de realitzar en producció, minimitzar l'exposició.

**Benestar de l'equip**: L'exposició a contingut nociu pot afectar els membres del red team. Proporcionar suport adequat i rotació.

**Consciència del doble ús**: Les tècniques desenvolupades per a proves defensives poden possibilitar atacs. Considerar la seguretat de la informació al voltant dels detalls metodològics.

**Proporcionalitat**: Les proves més invasives requereixen una justificació més sòlida. Els [marcs de proporcionalitat del risc](/research/001-proportionality-disclosure/) s'apliquen a les decisions de prova.

## Model de maduresa

Les organitzacions poden avaluar la maduresa del seu red teaming:

**Nivell 1 - Ad hoc**: Proves informals i no estructurades pels equips de desenvolupament.

**Nivell 2 - Definit**: Proves dedicades amb abast i metodologia bàsics.

**Nivell 3 - Sistemàtic**: Cobertura integral usant enfocaments estructurats, troballes documentades, remediació rastrejada.

**Nivell 4 - Continu**: Red teaming continu integrat en el cicle de desenvolupament, proves de regressió automatitzades, avaluació externa periòdica.

**Nivell 5 - Avançat**: Desenvolupament de metodologia líder, contribució al coneixement del camp, influència en els estàndards.

La majoria de les organitzacions es troben al Nivell 2-3. Avançar requereix inversió en el desenvolupament de l'equip, eines i integració organitzativa.

## Integració amb la governança

El red teaming hauria de connectar-se amb la governança més àmplia:

**Portes prèvies al desplegament**: Aprovació del red team abans del desplegament. Criteris clars sobre quines troballes bloquegen el llançament. Els marcs d'[avaluació prèvia al desplegament](/research/047-pre-deployment-risk-assessment/) integren el red teaming.

**Informes a nivell de consell**: Les troballes materials s'escalen als òrgans de governança. La [supervisió del consell](/research/043-board-oversight/) crea les vies d'escalament apropiades.

**Compliment regulatori**: Les evidències del red teaming donen suport als requisits regulatoris per a l'avaluació de la seguretat.

**Millora contínua**: Les troballes informen les pràctiques de desenvolupament, els procediments d'entrenament i les prioritats d'investigació en seguretat.

## Conclusió

El red teaming proporciona una perspectiva adversarial essencial sobre la seguretat de la IA. Un red teaming eficaç requereix un abast clar, equips diversos, metodologia sistemàtica, documentació exhaustiva i integració amb processos de remediació.

Les metodologies presentades aquí representen la pràctica actual, però el camp està evolucionant. A mesura que avancen les capacitats de la IA, les tècniques de red teaming han d'avançar a la par. Les organitzacions haurien d'invertir en la capacitat de red teaming com una funció central de seguretat, no com un exercici d'avaluació puntual.

L'escletxa entre la capacitat del red team i la capacitat de l'adversari determina l'exposició a vulnerabilitats. Invertir en red teaming avançat redueix aquesta escletxa, trobant i corregint problemes abans de la seva explotació. En el panorama actual de capacitats d'IA que avancen ràpidament, aquesta inversió és cada cop més essencial.

---

*Aquest marc presenta la metodologia de red teaming per a sistemes d'IA generals. Els contexts específics (models de frontera, aplicacions d'alt risc, capacitats noves) requereixen enfocaments millorats més enllà d'aquestes línies de base.*
