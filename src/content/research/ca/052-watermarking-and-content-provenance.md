---
title: "Marques d'aigua i procedencia del contingut"
excerpt: "Enfocaments tecnics i de governanca per marcar contingut generat per IA i establir cadenes de custodia per a les sortides dels models."
date: 2026-02-03
toc: true
categories:
  - Research
tags:
  - Watermarking
  - Provenance
  - Content Authentication
  - Governance
---

El contingut generat per IA circula ara a gran escala. Distingir el material sintetic del produit per humans, i rastrejar les sortides fins als seus models d'origen, s'ha convertit en una prioritat de governanca. Aquest article examina les tecniques de marques d'aigua, els estandards de metadades de procedencia i la infraestructura de politiques necessaria per fer que aquests mecanismes siguin efectius.

## Per que la procedencia importa per a la governanca

La procedencia del contingut proporciona evidencia per a la rendicio de comptes. Quan un sistema d'IA produeix sortides nocives, les dades de procedencia ajuden a identificar la part responsable, la versio del model i les condicions sota les quals es va generar el contingut.

Les aplicacions clau de governanca inclouen:

- **Atribucio d'us indegut**: Rastrejar contingut nociu fins al model o punt d'acces API d'origen.
- **Verificacio de compliment**: Demostrar que el contingut va ser generat sota restriccions de politica especifiques.
- **Pistes d'auditoria**: Proporcionar als reguladors evidencia reproduible que vinculi sortides amb entrades.
- **Proteccio del consumidor**: Permetre als usuaris verificar si el contingut es sintetic abans d'actuar-hi.
- **Propietat intel·lectual**: Establir cadenes de custodia per a treball creatiu assistit per IA.

Sense procedencia, l'aplicacio es converteix en conjectura. Els reguladors no poden responsabilitzar els proveïdors si no poden vincular el contingut amb els sistemes.

## Tecniques de marques d'aigua

Les marques d'aigua insereixen senyals detectables a les sortides d'IA. L'objectiu es fer que el contingut generat per IA sigui identificable fins i tot despres de la seva modificacio.

### Marques d'aigua estadistiques

Les marques d'aigua estadistiques alteren la distribucio de probabilitat sobre els tokens durant la generacio. El model s'entrena o instrueix per afavorir certes sequencies de tokens a taxes que es desvien lleugerament de les estadistiques del llenguatge natural.

Avantatges:
- Invisibles a la inspeccio casual
- Robustes davant edicions menors (parafraseig, truncament)
- Sense modificacio del format de sortida

Limitacions:
- Detectables nomes amb acces a la clau de marca d'aigua o a l'algoritme de deteccio
- Es poden eliminar mitjancant parafraseig suficientment agressiu o traduccio
- Poden degradar la qualitat de la sortida si el biaix es massa fort

### Signatures criptografiques

Els enfocaments criptografics adjunten metadades signades a les sortides. La signatura cobreix un hash del contingut i es verificable contra una clau publica vinculada al sistema generador.

Avantatges:
- Deteccio forta de manipulacio: qualsevol modificacio invalida la signatura
- Sense impacte en la qualitat del contingut
- Funciona per a qualsevol modalitat (text, imatge, audio, video)

Limitacions:
- Requereix infraestructura de metadades (emmagatzematge, transmissio, consulta)
- Les signatures s'eliminen facilment del contingut
- No sobreviu a la conversio de format o captura de pantalla

### Incrustacio esteganografica

L'esteganografia oculta dades dins del propi contingut. Per a imatges, aixo implica modificar els bits menys significatius. Per a text, pot usar caracters Unicode invisibles o eleccions de paraules controlades.

Avantatges:
- Dificil de detectar i eliminar sense degradar el contingut
- Sobreviu a moltes transformacions

Limitacions:
- La capacitat es limitada
- Atacants sofisticats poden degradar o sobreescriure les dades ocultes
- Les eines de deteccio s'han de desplegar ampliament per ser utils

## Estandards de metadades de procedencia

Les marques d'aigua per si soles no responen a totes les preguntes de governanca. Els estandards de metadades proporcionen context estructurat sobre com, quan i sota quines restriccions es va generar el contingut.

### C2PA (Coalition for Content Provenance and Authenticity)

C2PA defineix un format de manifest que viatja amb el contingut. Inclou:

- **Hashes d'actius**: Resums criptografics del contingut en cada etapa de produccio
- **Afirmacions de reclamacio**: Declaracions sobre com es va crear el contingut (p. ex., generat per IA)
- **Cadenes de signatura**: Vincles verificables amb l'entitat signant

C2PA esta recolzat per grans empreses tecnologiques i esta dissenyat per a imatges i video. El suport per a text es limitat pero esta en desenvolupament.

### Extensions IPTC i EXIF

Els estandards de metadades existents per a imatges (EXIF) i periodisme (IPTC) s'estan ampliant per cobrir la procedencia d'IA. Els camps inclouen:

- Nom i versio del model generador
- Text del prompt (opcional, sensible a la privadesa)
- Marca de temps i punt d'acces API
- Restriccions de politica actives durant la generacio

### Esquema especific de governanca

Per a fins regulatoris, les metadades tambe han de capturar:

```yaml
provenance:
  model_id: "frontier-2026-02"
  model_hash: "sha256:abc123..."
  api_endpoint: "https://api.example.com/v1/generate"
  timestamp: "2026-02-03T09:15:00Z"
  policy_constraints:
    - "no_pii"
    - "no_dual_use_biology"
  user_id_hash: "sha256:xyz789..."
  audit_log_ref: "log:2026-02-03/req-12345"
```

Aquest esquema permet als auditors vincular sortides amb configuracions de politica i sessions d'usuari sense exposar identificadors sense processar.

## Reptes i superficies d'atac

Les marques d'aigua i la procedencia no son infal·libles. Els marcs de governanca han de tenir en compte models d'amenaça realistes.

### Eliminacio i evasio

- **Atacs de parafraseig**: Reescriure contingut derrota les marques d'aigua estadistiques si el significat semantic es preserva pero les sequencies de tokens difereixen.
- **Viatges d'anada i tornada de traduccio**: Traduir a un altre idioma i tornar sovint elimina les marques d'aigua.
- **Captura de pantalla i OCR**: Per a imatges amb metadades incrustades, capturar una pantalla elimina tota la procedencia.
- **Destil·lacio de models**: Entrenar un nou model amb sortides amb marca d'aigua pot rentar el contingut.

### Suplantacio i falsificacio

- **Marques d'aigua falses**: Els atacants poden afegir marques d'aigua falses a contingut huma per causar confusio.
- **Robatori de claus**: Si les claus de marca d'aigua es filtren, els adversaris poden generar o eliminar marques a voluntat.
- **Injeccio de metadades**: Les metadades sense signar es poden falsificar; nomes la procedencia signada resisteix la manipulacio.

### Preocupacions de privadesa

- **Identificacio d'usuaris**: La procedencia detallada pot permetre el rastreig d'individus que van generar contingut.
- **Exposicio de prompts**: Registrar prompts planteja problemes de confidencialitat per a usuaris empresarials.

Els marcs de governanca han d'equilibrar la tracabilitat amb la privadesa, tipicament mitjancant hashing, agregacio o tecniques de privadesa diferencial.

## Requisits de politica i infraestructura

Les marques d'aigua tecniques son necessaries pero no suficients. Una procedencia efectiva requereix infraestructura de suport i recolzament legal.

### Ecosistema de deteccio

- **APIs de deteccio publiques**: Els proveïdors han d'oferir punts d'acces on qualsevol pugui verificar contingut en cerca de marques d'aigua.
- **Interoperabilitat**: Les eines de deteccio han de funcionar entre proveïdors. La deteccio nomes propietaria fragmenta l'ecosistema.
- **Estandards de llindar**: Definir que constitueix una deteccio positiva (nivells de confianca, taxes de falsos positius).

### Mandats de divulgacio

- **Requisits d'etiquetatge**: Les regulacions (p. ex., la Llei d'IA de la UE) exigeixen cada vegada mes que el contingut sintetic sigui etiquetat.
- **Persistencia de metadades**: Les plataformes han de preservar les metadades de procedencia quan el contingut es puja o comparteix.
- **Sancions per eliminacio**: Consequencies legals per eliminar intencionadament marques d'aigua o procedencia.

### Acces d'auditors

- **Diposit de claus**: Els organismes reguladors poden mantenir claus de deteccio de marques d'aigua per verificar contingut de forma independent.
- **Retencio de registres d'auditoria**: Els proveïdors han de retenir registres de procedencia durant un periode definit (p. ex., 2 anys) per donar suport a investigacions.
- **Coordinacio transfronterera**: Acords internacionals sobre estandards de procedencia i reconeixement mutu de marques d'aigua.

## Recomanacions d'implementacio

Per a proveïdors de models:

1. Desplegar marques d'aigua estadistiques per defecte en tots els punts d'acces de generacio de text i imatge.
2. Adjuntar manifests C2PA a les sortides d'imatge.
3. Oferir una API de deteccio publica amb metriques de precisio documentades.
4. Registrar metadades de procedencia internament, amb controls d'acces i politiques de retencio.
5. Permetre l'exclusio nomes per a casos d'us de baix risc verificats (p. ex., proves internes).

Per a plataformes que distribueixen contingut d'IA:

1. Preservar i mostrar metadades de procedencia quan estiguin disponibles.
2. Senyalar contingut que manca de procedencia de proveïdors d'IA coneguts.
3. Integrar APIs de deteccio en els fluxos de moderacio.

Per a reguladors:

1. Obligar l'us de marques d'aigua per a models generatius d'alt risc.
2. Establir requisits d'interoperabilitat perque la deteccio funcioni entre proveïdors.
3. Financar recerca sobre la robustesa de marques d'aigua i proves adversaries.
4. Crear ports segurs per a la divulgacio de procedencia de bona fe.

## Limitacions i preguntes obertes

- **Sostre de robustesa**: Cap marca d'aigua sobreviu a totes les transformacions. La governanca ha de combinar marques d'aigua amb altres senyals (monitoratge de comportament, verificacio d'usuaris).
- **Friccio d'adopcio**: La infraestructura de procedencia requereix coordinacio al llarg de la cadena de valor. El desplegament unilateral per un proveïdor te un impacte limitat.
- **Cursa armamentista adversaria**: A mesura que la deteccio millora, les tecniques d'evasio tambe avancaran. Es requereix inversio continua.
- **Procedencia semantica**: Els metodes actuals rastregen la identitat del contingut, no el significat. Detectar desinformacio parafraseada segueix sent dificil.

Les marques d'aigua i la procedencia son eines fonamentals per a la governanca de la IA, no solucions completes. Funcionen millor quan s'integren en marcs de rendicio de comptes mes amplis que inclouen controls d'acces, drets d'auditoria i consequencies legals per evasio.

---

*Aquest article se centra en mecanismes tecnics i de politica per a la procedencia del contingut. No aborda totes les formes d'us indegut de la IA, ni afirma que les marques d'aigua per si soles puguin prevenir el dany. Una governanca robusta requereix defenses en capes.*
