---
title: "Interfícies cervell-ordinador i IA: governança a la frontera neuronal"
excerpt: "Quan els sistemes d'IA es connecten directament al teixit neuronal humà, els marcs de governança existents es descomponen. Aquest article cartografia el buit regulador a la interfície cervell-màquina i proposa principis de governança per als sistemes d'IA neuronals."
date: 2026-02-07
toc: true
categories:
  - Governance Analysis
tags:
  - brain-computer-interfaces
  - neurotechnology
  - ai-governance
  - bodily-autonomy
  - medical-devices
  - emerging-technology
version: "1.0"
---

**Objecte de Recerca Reflexiva 094**
*Tipus: Recerca*

## Introducció

Les interfícies cervell-ordinador (BCI) ja no són especulatives. L'implant N1 de Neuralink està en assajos clínics amb humans des del 2024. L'Stentrode de Synchron ha estat implantat en pacients amb ELA. L'Utah Array de Blackrock Neurotech s'ha utilitzat en entorns de recerca durant més d'una dècada. Aquests sistemes ja llegeixen senyals neuronals i els tradueixen en ordres; la propera generació escriurà senyals de retorn, tancant el bucle entre silici i sinapsis.

La pregunta de governança no és si les BCI s'integraran amb la IA. Ja ho fan. Tota BCI moderna utilitza aprenentatge automàtic per descodificar senyals neuronals. La pregunta és què passa quan el component d'IA d'una BCI esdevé prou sofisticat per *interpretar*, *predir* i *influir* en l'activitat neuronal que monitoritza. En aquest punt, el dispositiu ja no és un traductor passiu. És un participant actiu en la cognició.

Aquest article examina els reptes de governança específics de les BCI integrades amb IA. Argumentem que els marcs reguladors existents (regulació de dispositius mèdics, llei de protecció de dades, regulació de la IA) cadascun captura un fragment del problema, però cap no el captura sencer. El resultat és un buit regulador a la interfície més sensible de la tecnologia: la frontera entre una màquina i una ment humana.

## El mosaic regulador

### Regulació de dispositius mèdics

La FDA classifica les BCI com a dispositius mèdics de Classe III, la categoria de risc més alt, que requereixen aprovació prèvia a la comercialització (PMA). El Reglament europeu sobre productes sanitaris (MDR) aplica un escrutini similar. Aquests marcs estan dissenyats per a dispositius amb funcions ben definides i estàtiques: un marcapassos lliura polsos elèctrics dins de paràmetres especificats.

Les BCI integrades amb IA trenquen aquest model de tres maneres:

1. **Comportament adaptatiu**: El component d'IA aprèn i s'adapta als patrons neuronals de l'usuari al llarg del temps. El dispositiu que va ser aprovat no és el dispositiu que opera sis mesos després. El concepte regulador d'un dispositiu "fix" no és aplicable.

2. **Actualitzacions de programari**: Els fabricants de BCI despleguen actualitzacions per via aèria als models d'IA que s'executen en dispositius implantats. Cada actualització és funcionalment un dispositiu nou, però el procés PMA no va ser dissenyat per al desplegament continu.

3. **Interacció bidireccional**: Les BCI de només lectura són eines de diagnòstic. Les BCI de lectura-escriptura que estimulen el teixit neuronal basant-se en decisions impulsades per IA són intervencionistes. El perfil de risc és categòricament diferent, però la via regulatòria no distingeix entre ells amb prou granularitat.

### Protecció de dades

Les dades neuronals són la categoria de dades més íntima concebible. Codifiquen no només el que una persona fa, sinó el que pensa, sent, pretén i imagina. El RGPD classifica les dades de salut com una "categoria especial" que requereix consentiment explícit. Però les dades neuronals transcendeixen les dades de salut. Un senyal neuronal podria revelar:

- Estats emocionals (ansietat, excitació, disgust)
- Estats cognitius (atenció, engany, confusió)
- Intencions (plans motors, precursors de decisions)
- Reaccions involuntàries (biaixos implícits, associacions inconscients)

Cap marc de protecció de dades existent aborda dades que una persona no pot controlar conscientment ni tan sols accedir-hi. Es pot triar no compartir els registres mèdics. No es pot triar no generar senyals neuronals. El model de consentiment (vegeu l'article 007) es col·lapsa completament quan la font de dades és el propi cervell.

L'esmena constitucional de Xile del 2021 que reconeix els "neurodrets" representa el primer intent d'abordar aquesta llacuna a nivell constitucional. La proposta espanyola de *Carta de Derechos Digitales* inclou disposicions per a la privacitat mental. Aquests són instruments primerencs i imprecisos. Estableixen el principi però no el mecanisme.

### Regulació de la IA

La Llei d'IA de la UE classifica els sistemes d'IA per nivell de risc. Un sistema d'IA integrat en una BCI mèdica probablement seria classificat com a "alt risc" i requeriria una avaluació de conformitat. Però la Llei no va ser redactada pensant en IA adaptativa i implantada. Els seus requisits de transparència, supervisió humana i governança de dades pressuposen un sistema d'IA que opera en el domini digital, no un que executa inferència dins d'un crani humà.

El requisit de la Llei de "supervisió humana" esdevé paradoxal quan el sistema d'IA *és* part del procés cognitiu de l'humà. La supervisió implica separació entre el supervisor i el sistema supervisat. Si la IA augmenta la presa de decisions del propi usuari, qui supervisa a qui?

## Cinc reptes de governança sense precedent

### 1. Llibertat cognitiva i el dret a l'autodeterminació mental

Si una BCI integrada amb IA pot llegir la intenció i influir en l'activitat neuronal, l'autonomia mental de l'usuari és contingent al comportament del dispositiu. Un mal funcionament, un model esbiaixat o una actualització deliberadament manipuladora podrien alterar els patrons de pensament sense que l'usuari en sigui conscient. Això no és una preocupació hipotètica; s'ha documentat que l'estimulació cerebral profunda (DBS) per al Parkinson altera la personalitat, la impulsivitat i l'afecte emocional (Pugh et al., 2018).

El repte de governança: com protegim la llibertat cognitiva quan la frontera entre la persona i el dispositiu és difusa? El consentiment informat tradicional pressuposa un decisor estable i autònom. Si el dispositiu pot alterar els mateixos processos cognitius que sustenten el consentiment, el consentiment es torna circular.

### 2. Responsabilitat pels errors de la IA neuronal

Si el component d'IA d'una BCI interpreta malament un senyal neuronal i fa que l'usuari realitzi una acció que no pretenia, qui n'és responsable? El fabricant? El desenvolupador del model d'IA? El clínic que va implantar el dispositiu? L'usuari?

Els marcs de responsabilitat existents (vegeu l'article 020) pressuposen una cadena causal clara. Els errors de la IA neuronal creen problemes d'atribució que el dret de danys existent no pot resoldre. L'error pot ser un biaix subtil en la descodificació de senyals neuronals ambigus per part del model, quelcom que es manifesta com una lleugera desviació en el control motor o la regulació emocional de l'usuari, no com una fallada dramàtica. Demostrar la causalitat requeriria una interpretació experta de dades neuronals que l'usuari no pot verificar de manera independent.

### 3. Seguretat i atacs adversaris

Una BCI compromesa no és com un ordinador portàtil compromès. Si un adversari obté accés a una interfície neuronal, podria:

- Llegir els estats cognitius de l'usuari (vigilància neuronal)
- Injectar senyals falsos (manipulació neuronal)
- Denegar el servei (interrupció neuronal)

Els estàndards de ciberseguretat per a dispositius mèdics (IEC 62443, guia de precomercialització de la FDA) no van ser dissenyats per a dispositius amb aquesta superfície d'amenaça. El que està en joc és categòricament major: el pitjor dels casos no és el robatori de dades sinó la manipulació involuntària del pensament.

### 4. Influència algorísmica en el desenvolupament neuronal

Per a les BCI pediàtriques (utilitzades en nens amb epilèpsia o paràlisi cerebral), el sistema d'IA interactua amb un cervell en desenvolupament. La plasticitat neuronal implica que el dispositiu no només assisteix el cervell; el configura. El model de descodificació de la IA passa a formar part de l'arquitectura cognitiva del nen. Retirar el dispositiu no retorna el cervell al seu estat previ.

Això planteja preguntes que cap marc de governança existent no aborda: quines són les obligacions de desenvolupament a llarg termini dels fabricants de BCI? Si el model d'IA s'actualitza i els patrons cognitius del nen canvien, es tracta d'una intervenció mèdica que requereix un consentiment renovat dels tutors?

### 5. Dependència i el dret a desconnectar-se

Si els processos cognitius d'un usuari es tornen dependents d'una BCI integrada amb IA, retirar el dispositiu pot causar un deteriorament cognitiu significatiu. Això crea una dinàmica de dependència anàloga a la dependència de plataformes en els mercats digitals, però amb implicacions existencials.

Haurien de tenir els usuaris un "dret a desconnectar-se" que inclogui l'obligació del fabricant de mantenir la funcionalitat del dispositiu durant tota la vida de l'usuari? Què passa si el fabricant fa fallida? Qui manté el model d'IA? Aquestes preguntes no tenen resposta en el dret actual.

## Principis de governança proposats

Basant-nos en l'anàlisi anterior, proposem cinc principis de governança per a les BCI integrades amb IA:

1. **Les dades neuronals com a categoria sui generis**: Les dades neuronals no haurien de ser classificades dins de les categories de dades existents (salut, biomètriques, sensibles). Requereixen la seva pròpia classificació legal amb proteccions que tinguin en compte la seva naturalesa involuntària, contínua i íntima.

2. **Regulació de dispositius adaptatius**: Els marcs reguladors han d'acomodar dispositius el comportament dels quals canvia amb el temps. Això requereix un seguiment continu en lloc d'una aprovació única, i un mecanisme per avaluar les actualitzacions del model d'IA abans del seu desplegament en dispositius implantats.

3. **Proteccions de la llibertat cognitiva**: Proteccions constitucionals o estatutàries de l'autodeterminació mental, construint sobre el precedent de Xile del 2021. Aquestes han d'incloure el dret a saber quan un sistema d'IA està influint en l'activitat neuronal, i el dret a refusar aquesta influència.

4. **Obligacions de suport de per vida**: Els fabricants de dispositius d'IA implantats han d'estar obligats a mantenir la funcionalitat del dispositiu durant la vida operativa de l'implant, amb provisions de dipòsit en garantia per al codi font i els pesos del model en cas de fallida empresarial.

5. **Proves adversàries obligatòries**: Les BCI integrades amb IA han de ser sotmeses a proves de seguretat adversàries que abordin específicament els vectors d'atac de manipulació neuronal i vigilància, amb estàndards que superin els requisits actuals de ciberseguretat de dispositius mèdics.

## La dimensió reflexiva

El marc d'aquest article s'aplica a si mateix. Si els sistemes d'IA s'utilitzen per dissenyar, avaluar o recomanar polítiques de governança per a les BCI (com cada vegada fan més), el sistema d'IA participa en la governança d'una tecnologia que afecta directament la cognició humana. Un assessor de governança d'IA que recomana polítiques sobre BCI està, a un grau de separació, influint en com la IA interactua amb els cervells humans.

Aquest bucle recursiu és característic dels problemes de governança reflexiva (vegeu l'article 063). La conclusió no és que la IA hagi de ser exclosa del desenvolupament de polítiques sobre BCI. És que la naturalesa reflexiva d'aquesta disposició ha de ser reconeguda i feta visible. Qualsevol recomanació de polítiques sobre BCI generada per IA hauria de revelar les restriccions de governança sota les quals opera el propi sistema d'IA que fa la recomanació.

## Conclusió

Les BCI integrades amb IA representen el problema de governança més difícil de la tecnologia. Combinen els reptes reguladors dels dispositius mèdics, els reptes de privacitat de les dades íntimes, els reptes de seguretat de la IA adaptativa i els reptes filosòfics de la llibertat cognitiva. Cap marc existent és adequat per si sol. El que cal és una arquitectura de governança construïda expressament que reconegui la IA neuronal com una categoria diferenciada de tecnologia, una que no opera en el món sinó en la ment.

Els set articles restants d'aquesta sèrie abordaran fronteres relacionades: les ments digitals (095), les institucions de governança (096) i la revisió anual (100). Però cap no igualarà la urgència d'aquest. Les BCI estan en cervells humans avui. El buit de governança no és un problema futur. És un problema present.

---

## Referències

- Pugh, J., Pycroft, L., Sandberg, A., Aziz, T., & Savulescu, J. (2018). Brainjacking in deep brain stimulation and autonomy. *Ethics and Information Technology*, 20(3), 219-232.
- Shumailov, I., Shumilo, Z., Zhao, Y., Gal, Y., Papernot, N., & Anderson, R. (2024). The Curse of Recursion: Training on Generated Data Makes Models Forget. *arXiv:2305.17493*.
- Ienca, M., & Andorno, R. (2017). Towards new human rights in the age of neurotechnology and AI. *Life Sciences, Society and Policy*, 13(1), 5.
- Yuste, R., et al. (2017). Four ethical priorities for neurotechnologies and AI. *Nature*, 551(7679), 159-163.
- Republic of Chile. (2021). Constitutional Reform on Neurorights. *Law No. 21.383*.
