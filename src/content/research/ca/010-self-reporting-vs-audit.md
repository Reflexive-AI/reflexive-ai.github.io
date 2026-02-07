---
title: "Autoinforme enfront d'auditoria externa: l'espai de compensació"
excerpt: "Una anàlisi de teoria de jocs dels incentius de divulgació. Per què l'autoinforme falla sense una amenaça creïble de verificació externa."
date: 2025-12-23
categories:
  - Governance Analysis
tags:
  - game-theory
  - auditing
  - incentives
  - institutional-design
version: "1.0"
toc: true
---

**Objecte de Recerca Reflexiva 010**  
*Tipus: Anàlisi de Teoria de Jocs*

## El mercat dels llimones

Si les proves de seguretat són purament internes (autoinforme), el mercat de la IA es converteix en un "Mercat de Llimones" com va descriure l'economista George Akerlof en la seva anàlisi de l'asimetria d'informació.

La lògica és directa: els laboratoris que retallen en seguretat poden iterar més ràpid i arribar al mercat abans. Si afirmen "l'hem provat, és segur" i ningú pot verificar aquesta afirmació, obtenen avantatge competitiu sobre els laboratoris que realment inverteixen en proves exhaustives. El mercat no pot distingir entre seguretat genuïna i seguretat declarada, per la qual cosa no pot recompensar la primera ni castigar la segona.

Amb el temps, aquesta dinàmica expulsa els actors responsables. Els laboratoris que inverteixen fortament en seguretat paguen costos reals (temps, còmput, talent) que els seus competidors menys escrupolosos eviten. Si ambdós semblen igualment "segurs" al mercat (perquè ambdós fan les mateixes afirmacions i cap no afronta verificació), el laboratori més segur està en desavantatge. L'equilibri del mercat es desplaça cap a sistemes insegurs i ràpids.

Això no és especulació; és el resultat previsible de l'autoinforme no verificat en qualsevol mercat amb alta asimetria d'informació. Ho hem vist en productes financers, en proves d'emissions, en seguretat alimentària abans de la regulació. No hi ha raó per esperar que la IA sigui diferent.

## El cost de la verificació

L'auditoria externa resol el problema de confiança, en teoria. Un tercer independent, amb experiència i incentius per trobar problemes, pot verificar les afirmacions de seguretat i certificar els sistemes conformes. El mercat pot aleshores distingir entre sistemes certificats i no certificats, recompensant la seguretat genuïna.

Però l'auditoria externa introdueix els seus propis costos:

**Risc de propietat intel·lectual:** Els laboratoris no volen lliurar els pesos als auditors. Els pesos codifiquen milers de milions de dòlars d'inversió en arquitectura, dades d'entrenament i optimització. Un auditor que veu els pesos podria filtrar-los, copiar-los o derivar-ne coneixements competitius. Fins i tot amb proteccions contractuals, el risc és real.

**Asimetria de capacitat:** Com es va discutir a l'Objecte de Recerca 006, els auditors no poden igualar la comprensió que els desenvolupadors tenen dels seus propis models. Un laboratori que gasta 100 milions de dòlars en entrenament sempre sabrà més que un auditor que gasta 100.000 dòlars en proves. L'auditoria proporciona falsa seguretat en lloc de verificació genuïna.

**Cost temporal:** L'auditoria externa exhaustiva requereix temps (setmanes o mesos). En un entorn competitiu de ràpid moviment, aquest retard és costós. Els laboratoris acceleren les auditories, els auditors retallen per complir terminis, i la certificació resultant reflecteix la pressió del calendari en lloc d'una avaluació exhaustiva.

**Captura regulatòria:** Les dinàmiques que porten els auditors a afavorir els seus clients (vegeu l'Objecte de Recerca 006) soscaven la independència que fa valuosa l'auditoria externa. Amb el temps, el mercat d'auditors selecciona els que són "fàcils" en lloc dels que són exhaustius.

## L'espai de compensació

L'autoinforme i l'auditoria externa representen pols d'un espectre, i cap enfocament pur funciona:

**Autoinforme pur:**
- Avantatge: Sense risc de propietat intel·lectual, sense retard, sense cost d'auditoria
- Desavantatge: Sense credibilitat, sense diferenciació de mercat, cursa cap al fons

**Auditoria externa pura:**
- Avantatge: Verificació independent, el mercat pot recompensar la seguretat
- Desavantatge: Risc de propietat intel·lectual, captura regulatòria, asimetria de capacitat

La majoria dels règims de governança intenten trobar un punt mig, exigint algun nivell de verificació externa mentre limiten el que s'ha de divulgar. Però aquest punt mig és inestable. Si el component extern és massa feble, recaiem en les dinàmiques d'autoinforme. Si és massa fort, imposem costos que inhibeixen la innovació o que empenyen el desenvolupament cap a jurisdiccions menys regulades.

## Formulació de teoria de jocs

Podem modelar la interacció com un joc entre el laboratori i el regulador:

**Conjunt d'estratègies del laboratori:**
1. Invertir fortament en seguretat; informar honestament
2. Invertir mínimament en seguretat; afirmar ser segur
3. Invertir fortament en seguretat; exagerar les afirmacions
4. Invertir mínimament en seguretat; no fer afirmacions

**Conjunt d'estratègies del regulador:**
1. Exigir auditoria externa per a totes les afirmacions
2. Acceptar l'autoinforme al peu de la lletra
3. Auditoria probabilística (verificar algunes afirmacions a l'atzar)
4. Aplicació basada en resultats (castigar danys, no fallades de procés)

Sota autoinforme pur (el regulador juga l'estratègia 2), l'estratègia dominant del laboratori és minimitzar la inversió mentre afirma ser segur. El regulador no pot distingir, per la qual cosa el laboratori no assumeix cap cost per l'engany.

Sota auditoria externa pura (el regulador juga l'estratègia 1), el laboratori ha d'invertir en seguretat o arriscar-se a fallar l'auditoria. Però el laboratori també afronta costos de propietat intel·lectual i retards, la qual cosa l'empeny a evitar la regulació completament (arbitratge jurisdiccional) o a capturar l'auditor.

Les dinàmiques més interessants emergeixen amb l'auditoria probabilística (estratègia 3) i l'aplicació basada en resultats (estratègia 4). Aquests enfocaments mereixen un examen més profund.

## Auditoria probabilística

En lloc d'auditar cada afirmació, el regulador audita una mostra aleatòria. Això té diversos avantatges:

**Escalabilitat:** Auditar cada sistema d'IA és impossible; auditar una mostra és factible.

**Dissuasió:** Si la probabilitat d'auditoria és prou alta, els laboratoris han de comportar-se com si anessin a ser auditats, fins i tot quan no ho són.

**Reducció de costos:** Els laboratoris que no són seleccionats per a auditoria eviten el risc de propietat intel·lectual i el retard; el cost esperat és menor que l'auditoria universal.

La pregunta clau de disseny és la probabilitat d'auditoria i la penalització per fallar. Si la probabilitat és massa baixa, els laboratoris aposten que no seran seleccionats. Si la penalització és massa lleu, fallar una auditoria és simplement un cost de fer negocis.

El règim òptim estableix la penalització esperada (probabilitat x penalització si es detecta) més alta que el cost del compliment genuí. Els laboratoris aleshores escullen racionalment el compliment per sobre de l'aposta.

Els reptes d'implementació inclouen: Com es seleccionen els laboratoris? (La selecció aleatòria prevé la manipulació, però passa per alt els sistemes de major risc.) Què activa l'auditoria? (Els desencadenants basats en risc es manipulen; els desencadenants aleatoris malbaraten recursos en sistemes de baix risc.) Com s'estructuren les penalitzacions? (Multes, exclusió del mercat, responsabilitat penal?)

## Aplicació basada en resultats

Una alternativa a auditar el procés és castigar els resultats. En lloc de verificar que un laboratori va seguir els procediments de seguretat, els reguladors imposen responsabilitat pels danys que es produeixin. Si el teu model causa dany, pagues, independentment de quins procediments vas afirmar seguir.

Aquest enfocament té elegància teòrica:

**Incentius correctes:** Els laboratoris tenen incentiu directe per evitar danys, com sigui que escullin aconseguir-ho.

**Flexibilitat:** Diferents laboratoris poden usar diferents enfocaments de seguretat adequats als seus sistemes; els reguladors no necessiten especificar mètodes.

**Sense exposició de propietat intel·lectual:** Els laboratoris no necessiten divulgar processos interns; només necessiten garantir bons resultats.

Però l'aplicació basada en resultats té severes limitacions:

**Atribució:** Si un model contribueix a un dany, demostrar la causalitat és difícil. Va proporcionar el model la informació clau, o el dany hauria ocorregut igualment?

**Esdeveniments rars:** Els danys que més ens preocupen (bioarmes, ciberatacs a infraestructura) són rars però catastròfics. Esperar que el dany es produeixi abans d'imposar penalitzacions significa permetre catàstrofes. Volem prevenir danys, no només castigar-los després.

**Danys difusos:** Alguns danys (biaix, desinformació, erosió de la confiança) són difusos i acumulatius. Cap interacció individual causa un dany mesurable; el dany emergeix de patrons al llarg de milions d'usos. L'aplicació basada en resultats té dificultats amb danys que manquen de víctimes discretes i danys mesurables.

**Cua llarga:** Un laboratori desplega cent models amb problemes menors abans que un causi un dany catastròfic. L'aplicació basada en resultats podria portar a la fallida del laboratori després de la catàstrofe, però això no ajuda les víctimes ni desfà el dany.

## La solució reflexiva: compliment de coneixement zero

Proposem avançar cap a **Protocols de Compliment de Coneixement Zero (ZK)** que escapin la compensació entre autoinforme i auditoria completa.

La idea central: un laboratori demostra a un regulador que "Aquest model satisfà la Restricció C-004 (Sense biorisc)" sense revelar els pesos ni les dades d'entrenament. La prova és criptogràfica; pot verificar-se sense aprendre res més enllà de la veritat de l'afirmació.

Això requereix tres components:

**1. Restriccions formalitzades:** La restricció ha de ser matemàticament precisa, no vaga. Vegeu l'Objecte de Recerca 003 per a com les restriccions poden expressar-se en format llegible per màquina. "El model no aconsegueix >X% de precisió al benchmark de biorisc Y" és verificable; "el model és segur" no ho és.

**2. Computació segura:** L'avaluació s'executa en un enclau segur, maquinari que impedeix a l'avaluador extreure informació més enllà del resultat de la computació. Alternativament, les tècniques emergents de ZK-ML (Machine Learning de Coneixement Zero) permeten generar proves sobre el comportament del model sense revelar els pesos del model.

**3. Prova criptogràfica:** La sortida és una prova matemàtica que pot ser verificada per qualsevol. La prova diu: "L'afirmació és certa, i aquí està l'evidència que la computació es va realitzar correctament". El verificador només aprèn que l'afirmació és certa, no els detalls de com funciona el model.

Això desplaça el debat de "Confia en mi" (autoinforme) enfront de "Mostra-m'ho tot" (auditoria externa) a "Aquí està la prova matemàtica de compliment".

## Limitacions actuals

El Compliment ZK no és encara pràctic per a l'avaluació de seguretat exhaustiva:

**Cost computacional:** Generar proves ZK per a computacions de xarxes neuronals és extremadament costós, ordres de magnitud més que executar el model directament.

**Expressivitat de restriccions:** Actualment podem provar afirmacions sobre les sortides del model en entrades específiques, però no afirmacions sobre el comportament del model en totes les entrades possibles. "El model mai produeix contingut de bioamenaça" és molt més difícil de provar que "El model no va produir contingut de bioamenaça en aquests 10.000 casos de prova".

**Disseny d'avaluació:** Encara no sabem com dissenyar avaluacions que capturin de manera significativa el risc de seguretat en una forma susceptible de prova ZK. Les avaluacions mateixes necessiten treball, independentment de com es verifiquin.

La recerca activa aborda aquestes limitacions. A mesura que les tècniques de ZK-ML madurin, la viabilitat d'aquest enfocament millorarà.

## Enfocaments híbrids

A curt termini, els enfocaments híbrids que combinen múltiples mecanismes de verificació ofereixen el millor camí:

**Verificació per nivells:** Les afirmacions de baix risc s'autoinformen. Les afirmacions de risc mitjà requereixen auditoria probabilística. Les afirmacions d'alt risc requereixen avaluació exhaustiva, possiblement amb components ZK on sigui tècnicament factible.

**Dipòsit en garantia:** Els laboratoris fan dipòsits que es perden si les auditories revelen tergiversació. Això crea incentius financers per a l'autoinforme honest sense requerir auditoria universal.

**Sistemes de reputació:** Els laboratoris que passen múltiples auditories construeixen reputació; els que fallen la perden. Els participants del mercat poden considerar la reputació en decidir quins sistemes usar.

**Mercats d'assegurances:** Exigir als proveïdors d'IA que contractin assegurances de responsabilitat. Les asseguradores tenen un fort incentiu per avaluar el risc amb precisió i desenvoluparan els seus propis mecanismes de verificació. Això privatitza part de la càrrega de verificació.

## Conclusió

L'elecció entre autoinforme i auditoria externa és una falsa dicotomia. L'autoinforme pur falla perquè no pot ser verificat; l'auditoria externa pura falla perquè és costosa, manipulable i intrusiva.

El camí endavant combina múltiples enfocaments: auditoria probabilística que crea dissuasió, responsabilitat basada en resultats per a danys rars però atribuïbles, proves criptogràfiques per a afirmacions de seguretat específiques, i mecanismes de mercat que recompensin la inversió genuïna en seguretat.

L'objectiu no és aconseguir una verificació perfecta (això és impossible) sinó fer que el cost esperat de les violacions de seguretat sigui major que el cost del compliment genuí. Quan la matemàtica d'incentius canvia, el comportament segueix.
