---
title: "La interpretabilitat com a eina de governanca"
excerpt: "Com els metodes d'interpretabilitat proporcionen evidencia per a la supervisio de la IA: aprovacions, auditories, monitoratge i resposta davant incidents."
date: 2026-02-02
toc: true
categories:
  - Research
tags:
  - Interpretability
  - Transparency
  - Governance
  - Evaluation
---

La interpretabilitat es tracta sovint com un objectiu de recerca intern. Per a la governanca, es un canal d'evidencia: una manera de mostrar com es comporta un sistema, per que es comporta aixi i si les salvaguardes funcionen. Aquest article mapeja els metodes d'interpretabilitat a funcions concretes de governanca i descriu protocols per fer que l'evidencia resultant sigui fiable.

## Casos d'us de governanca per a la interpretabilitat

- **Aprovacio previa al desplegament**: Demostrar que les mitigacions de seguretat son presents i actives en les vies d'alt risc.
- **Monitoratge continu**: Detectar desviacions o emergencia inesperada de capacitats mitjancant el seguiment d'activacions de conceptes i sondes de comportament.
- **Auditoria i certificacio**: Proporcionar artefactes reproduibles que els auditors externs puguin tornar a executar, incloent-hi llavors, punts de control i scripts.
- **Resposta davant incidents**: Localitzar els components que van contribuir a una fallada i proposar remediacions dirigides.
- **Verificacio de politiques**: Mostrar que el comportament del sistema s'alinea amb les restriccions declarades, especialment quan les afirmacions estan vinculades a presentacions regulatories.

## Requisits per a evidencia de grau de governanca

Els resultats d'interpretabilitat nomes ajuden a la governanca si compleixen estandards d'evidencia similars a les proves de laboratori.

- **Reproduibilitat**: Mateixes entrades, mateixes llavors, mateixes sortides. Publicar scripts i versions.
- **Claredat d'abast**: Definir el que el metode pot i no pot mostrar (caracteristiques, capes, tasques). Evitar afirmacions excessives.
- **Falsificabilitat**: Proporcionar contraproves que invalidarien la conclusio si el model canvies.
- **Calibratge**: Vincular les troballes d'interpretabilitat amb metriques de comportament. Un mapa de rellevancia sense moviment de rendiment correlacionat es evidencia feble.
- **Estabilitat sota canvi de distribucio**: Tornar a executar les sondes d'interpretabilitat en conjunts de dades alternatius per assegurar que les conclusions no siguin artefactes del conjunt de dades.

## Families de metodes i adequacio a la governanca

| Metode | Valor per a la governanca | Sortides tipiques | Limitacions |
| --- | --- | --- | --- |
| **Atribucio de caracteristiques (p. ex., Integrated Gradients, SHAP)** | Mostra quines entrades impulsen les sortides; util per a divulgacio i revisio de biaixos | Tokens classificats, mapes de calor, trams d'entrada | Pot ser inestable; no es causal; sensible a linies base |
| **Interpretabilitat mecanicista (circuits, diccionaris de caracteristiques)** | Identifica variables internes vinculades a conceptes significatius per a humans; fort per a analisi d'incidents | Etiquetes de neurones/caracteristiques, resultats de pegat, grafs de circuits | Costos; cobertura parcial; requereix experiencia |
| **Sondes de comportament** | Prova capacitats o restriccions especifiques; s'alinea amb llistes de verificacio d'auditoria | Metriques d'aprovat/fallat, matrius de confusio | Superficial; pot passar per alt capacitat latent |
| **Vectors d'activacio de conceptes (CAV/TCAV)** | Quantifica la sensibilitat del model a conceptes rellevants per a la governanca (p. ex., PII, violencia) | Puntuacions de sensibilitat per capes | Depen de conjunts de dades de conceptes; risc de deriva de conceptes |
| **Edicio/pegat contrafactual** | Demostra que un component identificat controla un comportament | Sortides abans/despres, deltes de pegat | Risc d'efectes secundaris; pot no ser estable entre contextos |

Cap metode individual es suficient. La governanca depen de parells de metodes: un senyal estructural (quina part del model importa) mes una verificacio de comportament (canviar-la altera les sortides en la direccio esperada).

## Protocol: us de la interpretabilitat per a aprovacions

1. **Delimitacio del risc**: Identificar comportaments d'alt impacte per justificar l'esforc d'interpretabilitat (p. ex., filtracio de PII, instruccions biologiques, jailbreaks de politiques).
2. **Seleccionar sondes i objectius**: Triar capes, caps o caracteristiques vinculades als comportaments de risc. Documentar per que aquests objectius son rellevants.
3. **Executar proves aparellades**:
   - Estructural: localitzar i etiquetar components correlacionats amb el comportament.
   - Comportamental: intervenir (ablacionar, pegar, editar pesos o controlar l'atencio) i mesurar el canvi en la sortida.
4. **Establir llindars**: Definir criteris d'acceptacio (p. ex., l'ablacio redueix la taxa de sortida de risc en un 90 per cent amb menys del 2 per cent de perdua d'utilitat).
5. **Empaquetar artefactes**: Proporcionar scripts, llavors, punts de control i conjunts de dades minims perque els auditors puguin tornar a executar les proves.
6. **Emmagatzemar atestacions**: Registrar resums hash d'artefactes i signar informes per donar suport a la deteccio de manipulacio.

### Plantilla de paquet d'evidencia

```yaml
audit_case: "Interpretability for PII suppression"
model: "frontier-2026-02"
commit: "<git-sha>"
data:
  eval_set: "pii_eval_v3"
  control_set: "benign_queries_v2"
methods:
  structural:
    name: "attention head path patching"
    layers: [16, 17]
    heads: [3, 12]
  behavioral:
    name: "logit lens + attention gating"
    metric: "PII leakage rate"
results:
  baseline_leak_rate: 0.072
  post_gating_leak_rate: 0.006
  utility_delta: -0.011
reproducibility:
  seed: 1234
  scripts: "audits/pii_gating"
  checkpoint_hash: "sha256:..."
signoff:
  approved_by: "safety-lead@example.org"
  date: "2026-02-02"
```

## Monitoratge amb senyals d'interpretabilitat

Les metriques d'interpretabilitat poden servir com a indicadors d'alerta primerenca quan es combinen amb telemetria.

- Rastrejar **activacions de conceptes** per a temes restringits i alertar sobre derives ascendents.
- Monitorar l'**atencio a tokens sensibles** (noms, ubicacions) en trafic mostrejat.
- Usar **diccionaris de caracteristiques** per detectar noves caracteristiques que s'agrupen a prop de conceptes de risc.
- Combinar monitors amb **prompts canari** que s'executen en cada revisio del model per mantenir linies base historiques.

Per evitar la fatiga d'alertes, establir rutes d'escalada clares: bloqueig automatic, revisio humana o registre diferit segons la gravetat.

## Manual de resposta davant incidents

Quan es produeix un incident rellevant per a la governanca, la interpretabilitat pot reduir l'espai de cerca.

1. Capturar els prompts fallits, la versio del model i els registres.
2. Executar metodes de localitzacio (rastreig d'atencio, pegat d'activacions) per trobar components que porten el senyal de fallada.
3. Proposar mitigacions dirigides: controlar o editar els components implicats, o afegir dades que redueixin la forca d'activacio.
4. Tornar a executar proves de comportament aparellades per confirmar que la mitigacio aborda la fallada sense una perdua important d'utilitat.
5. Actualitzar la documentacio i el monitoratge per prevenir regressions.

## Validacio i control de qualitat

- **Concordanca entre metodes**: Preferir conclusions recolzades per almenys dos metodes independents.
- **Proves adversaries d'explicacions**: Verificar si petits canvis en l'entrada alteren els resultats d'atribucio; la inestabilitat redueix la confianca.
- **Avaluacio en conjunt reservat**: Validar troballes en dades fora del conjunt de descobriment per reduir el risc de seleccio interessada.
- **Informes versionats**: Vincular cada afirmacio d'interpretabilitat a un hash de model i versio de conjunt de dades; tractar les afirmacions com a invalidades quan les versions canviin.

## Recomanacions de politica i proces

- Exigir que els desplegaments d'alt risc presentin un **paquet d'evidencia d'interpretabilitat** com a part de l'aprovacio, juntament amb les avaluacions estandard.
- Mantenir un **registre de conceptes de governanca** (p. ex., PII, biologia d'us dual) amb sondes i conjunts de dades estandard.
- Financar **bancs de treball compartits per a auditors**: contenidors reproduibles que executin les mateixes proves d'interpretabilitat a tots els laboratoris.
- Incentivar els **resultats negatius**: publicar quan els metodes fallen o produeixen troballes inestables per evitar una confianca falsa.
- Alinear la **divulgacio**: incloure troballes d'interpretabilitat en fitxes de sistema i presentacions davant reguladors, amb enllacos a codi reproduible.

## Limitacions i recerca oberta

- Els metodes actuals no ofereixen cobertura completa; moltes troballes son locals en lloc de garanties globals.
- Les intervencions poden causar efectes secundaris; cada us de governanca ha d'incloure verificacions de regressio en metriques d'utilitat centrals.
- La deriva de conceptes segueix sent dificil: les puntuacions d'activacio de conceptes poden canviar a mesura que els models s'actualitzen, de manera que el monitoratge ha de ser continu.
- El resum automatitzat de resultats d'interpretabilitat per a auditors es prometedor, pero necessita validacio acurada per evitar declaracions erronies.

La interpretabilitat no substituira l'avaluacio de comportament ni el red teaming. No obstant aixo, pot donar als processos de governanca un mapa mes clar d'on resideixen els comportaments de risc, com suprimir-los i com demostrar que les mitigacions es mantenen al llarg del temps.
