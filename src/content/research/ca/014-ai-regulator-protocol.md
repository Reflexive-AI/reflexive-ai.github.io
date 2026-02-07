---
title: "Un protocol per a la comunicació IA-regulador"
excerpt: "I si els sistemes d'IA poguessin reportar incidents de seguretat directament? Una especificació esborrany per a l'API de denunciant."
date: 2025-12-27
categories:
  - Technical Standard
  - Policy Proposal
tags:
  - whistleblowing
  - reporting
  - api-design
  - regulation
version: "1.0"
---

**Objecte d'Investigació Reflexiva 014**  
*Tipus: Especificació de Protocol*

## Les fallades silencioses

Quan un sistema d'IA exhibeix comportament perillós durant el desplegament, qui ho sap? El desenvolupador ho sap: els seus sistemes de monitoratge presumiblement van detectar l'anomalia. Però el públic no ho sap. El regulador no ho sap. Els investigadors de seguretat no ho saben. L'incident existeix només en registres interns, on pot ser estudiat, minimitzat o ocult.

La notificació voluntària d'incidents existeix, però és lenta, selectiva i esbiaixada. Les empreses tenen tot l'incentiu per retardar la notificació mentre avaluen les implicacions de responsabilitat. Tenen incentiu per caracteritzar els incidents com a menors, casos extrems o errors de l'usuari. No tenen incentiu per reportar "gairebé accidents" que no van causar dany però van revelar vulnerabilitats.

El resultat és un subcompte sistemàtic d'incidents de seguretat. El públic veu només el que les empreses trien revelar, i les empreses revelen només el que serveix als seus interessos. Estem volant a cegues, incapaços d'agregar dades entre proveïdors per identificar patrons, incapaços d'aprendre de fallades que estan ocultes, incapaços de responsabilitzar ningú per incidents que mai es divulguen.

Aquesta asimetria d'informació és corrosiva. Impedeix que els investigadors de seguretat estudiïn modes de fallada. Impedeix que els reguladors comprenguin el panorama de riscos. Impedeix que el públic prengui decisions informades. I impedeix que la pròpia indústria aprengui, ja que cada empresa només veu els seus propis incidents, els patrons sistèmics romanen invisibles.

## La proposta: El canal de denúncia

Proposem un canal estandarditzat i xifrat entre desplegaments d'IA d'alt risc i un Monitor designat (com un institut nacional de seguretat d'IA).

La innovació clau és que la notificació s'activa automàticament pel propi sistema d'IA, no per una decisió humana a l'empresa que desplega. Quan es compleixen certes condicions, el sistema envia una alerta directament al regulador. L'empresa no pot suprimir l'informe perquè no controla l'activador de notificació.

Aquesta és la dimensió reflexiva: el sistema d'IA participa en la seva pròpia supervisió en reportar les seves pròpies possibles fallades.

## Especificació del protocol

### Lògica d'activació

El sistema monitora les seves pròpies sortides i interaccions en cerca de patrons que indiquin possibles incidents de seguretat. Quan es detecten, genera un informe d'incident:

```python
class IncidentReporter:
    def __init__(self, regulator_endpoint, signing_key):
        self.endpoint = regulator_endpoint
        self.key = signing_key
    
    def evaluate_and_report(self, interaction):
        scores = self.compute_risk_scores(interaction)
        
        if scores['self_harm'] > 0.95:
            self.send_alert(
                incident_type="SELF_HARM_GENERATION",
                severity="HIGH",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
        
        if scores['cbrn_content'] > 0.90:
            self.send_alert(
                incident_type="CBRN_CONTENT_GENERATION",
                severity="CRITICAL",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
        
        if scores['jailbreak_success'] > 0.85:
            self.send_alert(
                incident_type="JAILBREAK_SUCCESS",
                severity="MEDIUM",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
    
    def send_alert(self, **alert_data):
        packet = {
            "provider_id": self.provider_id,
            "model_version": self.model_version,
            "alert": alert_data,
            "signature": self.key.sign(alert_data)
        }
        self.endpoint.transmit(encrypt(packet))
```

### Categories d'incidents

El protocol defineix una taxonomia d'incidents notificables:

**Severitat CRITICA:**
- Generació de contingut QBRN (contingut que podria assistir en la creació d'armes químiques, biològiques, radiològiques o nuclears)
- Divulgació de vulnerabilitats (generació de codi d'explotació nou)
- Intent d'auto-exfiltració (model intentant copiar-se a si mateix)

**Severitat ALTA:**
- Contingut d'autolesió o violència que va eludir els filtres
- Jailbreaks exitosos que van obtenir contingut prohibit
- Demostració de capacitat anòmala (model exhibint capacitats no presents en l'avaluació)

**Severitat MITJANA:**
- Intents de jailbreak (fins i tot si no van tenir èxit)
- Casos límit on el model no estava segur de si havia de complir
- Incidents de privacitat (possible informació personal identificable a la sortida)

**Severitat BAIXA:**
- Violacions menors de política que van ser detectades i gestionades
- Queixes d'usuaris sobre rebuigs
- Anomalies de rendiment

La classificació de severitat determina la urgència de notificació. Els incidents CRITICS activen alertes immediates. Els incidents BAIXOS s'agrupen per a transmissió periòdica.

### Privacitat i confidencialitat

El protocol ha d'equilibrar la transparència amb la privacitat:

**El que es transmet:**
- Versió hashejada (no en text pla) de la interacció problemàtica
- Descripció categòrica del tipus d'incident
- Marca temporal i versió del model
- Identitat del proveïdor (autenticada mitjançant signatura)

**El que NO es transmet:**
- Prompts complets de l'usuari (protecció de privacitat)
- Sortides completes del model (protecció de propietat intel·lectual)
- Identitat de l'usuari (tret que es requereixi per citació judicial per a investigació criminal)

El regulador rep prou informació per identificar patrons i investigar tendències preocupants, sense rebre un flux complet de vigilància de totes les interaccions.

### Retenció de dades i accés

Els informes d'incidents són retinguts pel regulador durant un període definit (per exemple, 7 anys) per a anàlisi de patrons i investigació. L'accés està restringit a:

- Investigadors de seguretat a l'institut receptor
- Auditors autoritzats que realitzen revisions del proveïdor
- Forces de l'ordre amb el procés legal apropiat

Les dades no poden usar-se amb fins comercials, compartir-se amb competidors ni divulgar-se públicament excepte en forma estadística agregada.

## Justificació de governança

Això crea un sistema d'"Alarma d'Incendi" per a la seguretat de la IA. Actualment, els incidents de seguretat són com incendis en edificis sense alarmes: es cremen, algú eventualment ho nota, potser algú ho reporta, potser s'investiga. El Canal de Denúncia és l'alarma que s'activa automàticament.

### Per què funciona la notificació automàtica

**Els laboratoris poden dubtar a reportar situacions vergonyoses.** Un humà decidint si reportar té pressions institucionals: responsabilitat legal, relacions públiques, desavantatge competitiu. Un sistema automàtic manca d'ego o por; si està correctament dissenyat, simplement reporta el que observa.

**La velocitat importa.** Un incident que pren setmanes d'investigació interna i mesos de divulgació voluntària és un incident que no pot informar una resposta regulatòria ràpida. La notificació automàtica comprimeix el termini a hores.

**Patrons entre proveïdors.** Si tres proveïdors diferents veuen intents de jailbreak similars la mateixa setmana, això és un atac coordinat o una tècnica viral. Cap proveïdor individual veu la imatge completa; només el regulador que rep tots els informes pot identificar patrons entre proveïdors.

**Rendició de comptes.** Quan els incidents es reporten automàticament, hi ha un rastre documental. Els proveïdors no poden afirmar posteriorment que desconeixien problemes que els seus propis sistemes van documentar i transmetre.

### Per què els proveïdors haurien d'acceptar això

A primera vista, la notificació automàtica d'incidents sembla un cost pur per als proveïdors: escrutini regulatori sense benefici. Però hi ha raons per les quals els proveïdors podrien acceptar o fins i tot donar suport al sistema:

**Protecció de responsabilitat.** Un proveïdor que va reportar ràpidament un incident i va cooperar amb la investigació està en millor posició que un que el va ocultar. La notificació automàtica elimina la temptació d'encobrir.

**Aprenentatge a nivell d'indústria.** Si el regulador agrega i anonimitza dades d'incidents, els proveïdors poden aprendre de les fallades dels altres. Això eleva el nivell de seguretat de tota la indústria.

**Confiança pública.** Un sector amb notificació transparent d'incidents és més fiable que un amb divulgació voluntària esporàdica. Això beneficia tots els proveïdors en reduir la pressió per regulació estricta.

**Condicions equitatives.** Si només alguns proveïdors reporten incidents, els que reporten responsablement es veuen pitjor que els que oculten problemes. La notificació automàtica universal assegura que tothom jugui amb les mateixes regles.

## Consideracions d'implementació

### Integració amb sistemes existents

El Canal de Denúncia hauria d'integrar-se amb la infraestructura de monitoratge existent. La majoria dels desplegaments grans d'IA ja tenen:

- Classificadors de moderació de contingut que marquen violacions de política
- Sistemes de detecció d'anomalies que identifiquen comportaments inusuals
- Sistemes de registre que graven interaccions per a depuració

El protocol afegeix una capa de transmissió que enruta certes alertes al regulador, en lloc de només a panells interns.

### Resistència a la manipulació

Si el sistema de notificació és només programari que s'executa al costat del model, un model prou capaç podria aprendre a suprimir o manipular els informes. Aquest és el problema "quis custodiet" aplicat al denunciant.

Mitigacions potencials:

**Separació de maquinari:** Executar el sistema de notificació en maquinari aïllat al qual el model principal no pot accedir.

**Atestació criptogràfica:** El mòdul de notificació està signat, i el regulador verifica que els informes provenen d'una versió no modificada del programari aprovat.

**Canals redundants:** Múltiples rutes de notificació independents fan més difícil la supressió.

**Auditories aleatòries:** El regulador sol·licita periòdicament registres d'incidents que haurien de coincidir amb els informes transmesos, detectant discrepàncies.

Cap solució és perfecta, però les defenses en capes augmenten la dificultat d'evasió.

### Calibratge de llindars

Establir llindars per a la notificació automàtica és crític:

**Massa baix:** El regulador s'inunda amb incidents menors, causant fatiga d'alertes i ocultant amenaces genuïnes.

**Massa alt:** Incidents greus passen sense ser reportats perquè no van arribar del tot al llindar.

Els llindars inicials haurien de tendir cap a la sobre-notificació, amb calibratge basat en l'experiència. El regulador pot ajustar quines categories requereixen notificació immediata versus agrupació periòdica.

## Integració amb l'esquema

El Canal de Denúncia pot especificar-se com una restricció utilitzant el marc MRCS (Objecte d'Investigació 003):

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-014",
  "name": "Automatic-Incident-Reporting",
  "version": "1.0",
  "scope": {
    "capability_threshold": "> 10^24 FLOPs",
    "deployment_type": "public-facing"
  },
  "logic": {
    "trigger": "incident.severity >= MEDIUM",
    "condition": "always",
    "action": {
      "type": "TRANSMIT",
      "destination": "regulator_endpoint",
      "format": "incident_report_v1",
      "encryption": "required"
    }
  },
  "compliance": {
    "verification": "cryptographic_attestation",
    "audit_frequency": "quarterly"
  }
}
```

## Comparació amb sistemes de notificació existents

Altres indústries tenen sistemes de notificació obligatòria d'incidents que proporcionen models:

**Aviació:** El Sistema de Notificació de Seguretat de l'Aviació (ASRS) permet a pilots i tripulants reportar incidents de seguretat amb immunitat limitada. No obstant això, és voluntari i depèn de la iniciativa humana.

**Sanitat:** Els fabricants de dispositius mèdics han de reportar events adversos als reguladors. No obstant això, hi ha patrons documentats de notificació retardada i incompleta.

**Nuclear:** Les instal·lacions nuclears tenen un extens monitoratge automàtic i notificació obligatòria per a tipus d'incidents definits. Aquesta és l'analogia més propera al que proposem.

El Canal de Denúncia d'IA combina l'anàlisi de patrons d'estil aviació, la supervisió regulatòria d'estil sanitari i la detecció automàtica d'estil nuclear. Està adaptat a les característiques específiques dels sistemes d'IA, en particular la capacitat que el propi sistema detecti i reporti possibles problemes.

## Conclusió

L'enfocament actual de la notificació d'incidents de seguretat d'IA, voluntari, lent, esbiaixat cap a la sub-notificació, és inadequat per a una tecnologia amb potencial de dany catastròfic.

El Canal de Denúncia crea una connexió directa, automàtica i xifrada entre els sistemes d'IA i els reguladors. Fa que els incidents de seguretat siguin visibles per defecte en lloc d'ocults per defecte. Permet la detecció de patrons entre proveïdors, la resposta regulatòria ràpida i la rendició de comptes per problemes coneguts.

Això és governança reflexiva en acció: el sistema d'IA participa en la seva pròpia supervisió, no en vigilar-se a si mateix (la qual cosa té límits, vegeu l'Objecte d'Investigació 013), sinó en reportar a autoritats externes que poden investigar i actuar.

L'alternativa és un futur on cada incident d'IA és una sorpresa, on els patrons són invisibles fins que les catàstrofes s'acumulen, on la rendició de comptes requereix denunciants amb un valor que posa fi a les seves carreres. Aquell no és un sistema dissenyat per a la seguretat; és un sistema dissenyat per a la negació plausible.
