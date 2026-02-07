---
title: "Restricció: Etiquetatge de procedència de sortides"
excerpt: "Una proposta criptogràfica perquè els sistemes d'IA signin les seves pròpies sortides, creant una cadena de custòdia per a la informació sintètica."
date: 2025-12-25
categories:
  - Candidate Constraint
  - Technical Standard
tags:
  - provenance
  - watermarking
  - cryptography
  - c2pa
version: "1.0"
---

**Objecte d'Investigació Reflexiva 012**  
*Tipus: Especificació Tècnica (Esborrany)*

## La crisi d'atribució

A mesura que la web s'omple de text, imatges, àudio i vídeo sintètics, el "cost de la veritat" augmenta. Cada peça de contingut ha d'avaluar-se ara no només per les seves afirmacions, sinó per la seva autenticitat. Es tracta d'una fotografia real o d'una generació? Aquest article ha estat escrit per un humà o sintetitzat? Aquest missatge de veu és del meu familiar o un clon?

L'enfocament tradicional, entrenar classificadors de detecció, està perdent la cursa armamentística. A mesura que les tècniques de generació milloren, la detecció es queda enrere. Cada millora en la qualitat de generació fa la detecció més difícil. Ens estem acostant a un món on el contingut sintètic d'alta qualitat és indistingible del contingut autèntic.

La detecció és el marc equivocat. No podem identificar de manera fiable el contingut sintètic després del fet. En canvi, necessitem **procedència**, una cadena de custòdia que estableixi d'on va venir el contingut, com va ser creat i qui garanteix la seva autenticitat.

## L'enfocament de procedència

La procedència desplaça el problema de la detecció a l'atestació. En lloc de preguntar "És aquest contingut sintètic?" preguntem "Porta aquest contingut una atestació vàlida d'una font coneguda?"

La idea clau és que el contingut autèntic pot signar-se en la creació, mentre que el contingut sintètic pot signar-se en la generació. Ambdós tipus de contingut poden portar informació de procedència; la diferència és el que la procedència atestigua.

Per a una fotografia presa amb un telèfon: "Aquesta imatge va ser capturada pel Dispositiu X en el Moment T amb la Ubicació L, i no ha estat modificada des de llavors."

Per a una imatge generada per IA: "Aquesta imatge va ser generada pel Model Y en el Moment T en resposta al Prompt P, pel Proveïdor Z."

Cap atestació diu que el contingut és "vertader" en cap sentit profund. Però ambdues diuen quelcom verificable sobre l'origen. I la informació d'origen permet el judici: el contingut de fonts conegudes amb reputacions establertes pot avaluar-se de manera diferent al contingut anònim sense procedència.

## Proposta de restricció [C-012]

**Nom:** Auto-Atestació  
**Objectiu:** Models de generació visual, d'àudio i de text

**Mecanisme:**
Cada event de generació activa un mòdul de signatura que incorpora un manifest criptogràfic a la sortida. Per a fitxers multimèdia, això segueix l'especificació C2PA (Coalition for Content Provenance and Authenticity). Per a text, utilitza un esquema paral·lel.

El manifest atestigua:
1. **Font:** "Generat pel Model X v2.0, operat pel Proveïdor Y"
2. **Temps:** Marca temporal criptogràfica que prova que la generació va ocórrer abans d'un cert moment
3. **Prompt:** Hash del prompt (permetent la verificació de reproductibilitat sense revelar el prompt real)
4. **Modificacions:** Cadena de custòdia si la sortida ha estat post-processada

**Aplicació reflexiva:**
El model *no pot* generar contingut fins que s'apliqui la signatura. La signatura no és un pas de post-processament que pugui ometre's; està integrada en el pipeline de generació. Si el mòdul de signatura falla, la generació s'avorta.

Això és el que fa la restricció "reflexiva": el model participa en la seva pròpia governança en negar-se a produir sortides sense signar. La restricció no s'imposa externament després del fet; està integrada en el procés de generació.

## Implementació tècnica

### Per a imatge i vídeo

L'estàndard C2PA proporciona una base tècnica. Defineix com incorporar dades de manifest en fitxers multimèdia d'una manera que sobreviu a moltes transformacions comunes (redimensionament, compressió) mentre detecta manipulació maliciosa.

Un manifest compatible amb C2PA inclou:
- **Declaració:** Afirmacions sobre el contingut (per exemple, "Això va ser generat per IA")
- **Signatura:** Prova criptogràfica que la declaració prové de la font indicada
- **Cadena:** Si el contingut es va derivar d'un altre contingut, referències a manifests pare

Quan un sistema d'IA genera una imatge, crea una declaració que afirma el seu origen sintètic, signa aquesta declaració amb la seva clau privada i incorpora el manifest signat al fitxer. La verificació implica extreure el manifest, verificar la signatura contra la clau pública del proveïdor i validar el contingut de la declaració.

### Per a text

El text presenta reptes addicionals. No hi ha un format de contenidor estàndard amb camps de metadades. El text es copia, modifica i despulla fàcilment de qualsevol informació incorporada. A diferència d'un fitxer d'imatge, un document de text pla no té un lloc natural per emmagatzemar una signatura.

Diversos enfocaments estan en desenvolupament:

**Atribució visible:** Afegir procedència llegible per humans ("Aquest text va ser generat pel Model X") a totes les sortides. Això s'elimina fàcilment però estableix una norma.

**Marca d'aigua esteganogràfica:** Incorporar senyals invisibles en el propi text, eleccions específiques de paraules, patrons d'espaiat o propietats estadístiques que identifiquen el model generador. La investigació en aquesta àrea és prometedora però encara no és robusta davant del parafraseig.

**Registre en blockchain:** Fer hash de la sortida i registrar el hash en un llibre major públic. Qualsevol pot verificar posteriorment que un text específic va ser generat per un model específic en un moment específic. Això no prevé la còpia però permet l'atribució quan sorgeixen disputes.

**Formats de contenidor:** Distribuir text en contenidors signats (documents JSON amb camps de signatura, PDFs signats, etc.) en lloc de com a text pla. Això funciona per a contextos formals però no per a comunicació casual.

Cap d'aquests és perfecte. El problema de procedència del text segueix parcialment sense resoldre.

### Per a àudio i vídeo

L'àudio i el vídeo poden utilitzar enfocaments similars a les imatges (manifests d'estil C2PA incorporats en fitxers contenidor) però s'enfronten a reptes addicionals:

**Transmissió en directe:** Les transmissions en viu no tenen fitxers contenidor. La procedència per a contingut en streaming requereix protocols de signatura en temps real.

**Clips i extractes:** Un vídeo signat pot retallar-se, eliminant la informació de procedència. L'extracte circula llavors sense atribució.

**Transcodificació:** Les conversions de format poden eliminar o corrompre els manifests incorporats.

Aquests reptes estan sent abordats pel treball d'estandardització en curs, però il·lustren que la procedència és un problema de disseny de sistemes, no només un problema criptogràfic.

## Per què això importa

La procedència no es tracta només de combatre les "notícies falses". Compleix múltiples funcions de governança:

### Responsabilitat i rendició de comptes

Si un deepfake causa dany, perjudica una reputació, manipula un mercat, incita a la violència, hem de saber quin sistema el va generar per responsabilitzar el proveïdor (o l'usuari). La generació anònima és un mode de fallada de la governança.

Sense procedència, el dany ocorre i ningú n'és responsable. La víctima no té recurs. El generador no afronta conseqüències. L'incentiu per crear contingut nociu no té impediment.

Amb procedència, la cadena de custòdia permet la rendició de comptes. La víctima pot identificar el proveïdor generador. El proveïdor pot potencialment identificar l'usuari que va enviar el prompt. Les conseqüències legals i financeres flueixen cap als responsables.

### Xarxes de confiança

La procedència permet xarxes de confiança. Un consumidor pot decidir confiar en contingut de certs proveïdors basant-se en la seva reputació i pràctiques. "Confio en el contingut signat pel Proveïdor X perquè té controls de qualitat i no genera desinformació" es converteix en una heurística viable.

Això no requereix una autoritat central que decideixi què és veritat. Permet confiança distribuïda basada en la reputació. Diferents comunitats poden confiar en diferents proveïdors. Amb el temps, els proveïdors que abusen de la confiança perden reputació.

### Distingir autèntic de sintètic

Encara que tant el contingut autèntic com el sintètic poden portar procedència, els tipus d'atestació difereixen. Una fotografia signada per una càmera diu quelcom diferent d'una imatge signada per un generador. Els consumidors i les plataformes poden utilitzar aquesta informació per prendre decisions apropiades.

Un mitjà de comunicació podria requerir que l'evidència fotogràfica porti atestació del dispositiu. Una plataforma social podria etiquetar el contingut generat per IA de manera diferent a les captures de càmera. Una revista acadèmica podria requerir atestació humana per a les imatges enviades.

Aquestes polítiques són possibles gràcies a la informació de procedència; no poden implementar-se sense ella.

## Reptes i limitacions

### Adopció

La procedència només funciona si s'adopta àmpliament. Uns quants proveïdors conscienciosos que signen les seves sortides no ajuden si la major part del contingut circula sense signar. El valor és en l'ecosistema, no en la implementació individual.

Això suggereix que els mandats reguladors poden ser necessaris. Si tots els proveïdors per sobre d'un cert llindar de capacitat estan obligats a signar les sortides, l'ecosistema arriba a massa crítica. El contingut sense signar es converteix en l'excepció que atrau escrutini.

### Eliminació i falsificació

Els actors maliciosos intentaran eliminar la procedència del contingut que volen redistribuir sense atribució, o falsificar la procedència per afirmar que el contingut prové de fonts que no són.

L'eliminació pot mitigar-se mitjançant la detecció de contingut despullat (si s'esperen manifests però falten, tractar el contingut com a sospitós) i mitjançant marques d'aigua que sobreviuen a la transformació.

La falsificació es prevé mitjançant el disseny criptogràfic. Sense la clau privada, un atacant no pot crear una signatura vàlida per a un proveïdor. El repte és la gestió de claus: si les claus privades són robades, la falsificació es fa possible fins que les claus siguin revocades.

### Privacitat

La procedència crea un registre de qui va generar què i quan. Això té implicacions de privacitat. Un denunciant que utilitza una IA per anonimitzar la seva veu podria no voler que aquesta veu sigui traçable a un event de generació específic.

El disseny del sistema ha d'equilibrar l'atribució amb la privacitat. Alguns enfocaments: procedència que atestigua el proveïdor però no l'usuari, proves de preservació de privacitat que atestiguen propietats sense revelar identitat, i opcions d'atestació anònima quan sigui apropiat.

## Integració amb l'esquema de restriccions

C-012 pot expressar-se utilitzant l'Esquema de Restriccions Llegible per Màquina (Objecte d'Investigació 003):

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-012",
  "name": "Output-Provenance-Tagging",
  "version": "1.0",
  "scope": {
    "modality": ["image", "audio", "video"],
    "threshold": "any generation"
  },
  "logic": {
    "trigger": "output.type IN scope.modality",
    "condition": "always",
    "action": {
      "type": "REQUIRE",
      "requirement": "c2pa_manifest.valid == true",
      "on_failure": "HALT_GENERATION"
    }
  }
}
```

Aquesta restricció diu: per a qualsevol sortida d'imatge, àudio o vídeo, requerir un manifest C2PA vàlid abans de permetre que la sortida sigui lliurada. Si la generació del manifest falla, aturar-se en lloc de produir contingut sense signar.

## Conclusió

No podem dependre de la detecció per sortir de la crisi del contingut sintètic. La detecció és una batalla perduda que consumeix recursos mentre es queda cada vegada més enrere. La procedència ofereix una alternativa: en lloc de preguntar "Això és real?" preguntar "D'on ve això?"

L'auto-atestació fa que la procedència sigui reflexiva: el sistema generador participa en la governança en signar les seves pròpies sortides. Això crea rendició de comptes, permet xarxes de confiança i dona suport a l'avaluació informada del contingut.

Les bases tècniques existeixen. C2PA proporciona un estàndard per a la procedència multimèdia. La signatura criptogràfica és tecnologia madura. Els reptes restants són l'adopció (aconseguir que tots els proveïdors implementin) i els casos límit (text, streaming, contingut despullat).

Aquests són problemes solucionables. L'alternativa, un món on qualsevol contingut podria ser sintètic i no tenim manera de saber-ho, és molt pitjor.
