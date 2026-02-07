---
title: "La interpretabilidad como herramienta de gobernanza"
excerpt: "Como los metodos de interpretabilidad proporcionan evidencia para la supervision de la IA: aprobaciones, auditorias, monitoreo y respuesta ante incidentes."
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

La interpretabilidad se trata a menudo como un objetivo de investigacion interno. Para la gobernanza, es un canal de evidencia: una forma de mostrar como se comporta un sistema, por que se comporta asi y si las salvaguardas funcionan. Este articulo mapea los metodos de interpretabilidad a funciones concretas de gobernanza y describe protocolos para hacer que la evidencia resultante sea confiable.

## Casos de uso de gobernanza para la interpretabilidad

- **Aprobacion previa al despliegue**: Demostrar que las mitigaciones de seguridad estan presentes y activas en las vias de alto riesgo.
- **Monitoreo continuo**: Detectar desviaciones o emergencia inesperada de capacidades mediante el seguimiento de activaciones de conceptos y sondas de comportamiento.
- **Auditoria y certificacion**: Proporcionar artefactos reproducibles que los auditores externos puedan volver a ejecutar, incluyendo semillas, puntos de control y scripts.
- **Respuesta ante incidentes**: Localizar los componentes que contribuyeron a un fallo y proponer remediaciones dirigidas.
- **Verificacion de politicas**: Mostrar que el comportamiento del sistema se alinea con las restricciones declaradas, especialmente cuando las afirmaciones estan vinculadas a presentaciones regulatorias.

## Requisitos para evidencia de grado de gobernanza

Los resultados de interpretabilidad solo ayudan a la gobernanza si cumplen estandares de evidencia similares a las pruebas de laboratorio.

- **Reproducibilidad**: Mismas entradas, mismas semillas, mismas salidas. Publicar scripts y versiones.
- **Claridad de alcance**: Definir lo que el metodo puede y no puede mostrar (caracteristicas, capas, tareas). Evitar afirmaciones excesivas.
- **Falsificabilidad**: Proporcionar contrapruebas que invalidarian la conclusion si el modelo cambiara.
- **Calibracion**: Vincular los hallazgos de interpretabilidad con metricas de comportamiento. Un mapa de relevancia sin movimiento de rendimiento correlacionado es evidencia debil.
- **Estabilidad bajo cambio de distribucion**: Volver a ejecutar las sondas de interpretabilidad en conjuntos de datos alternativos para asegurar que las conclusiones no sean artefactos del conjunto de datos.

## Familias de metodos y adecuacion a la gobernanza

| Metodo | Valor para la gobernanza | Salidas tipicas | Limitaciones |
| --- | --- | --- | --- |
| **Atribucion de caracteristicas (p. ej., Integrated Gradients, SHAP)** | Muestra que entradas impulsan las salidas; util para divulgacion y revision de sesgos | Tokens clasificados, mapas de calor, tramos de entrada | Puede ser inestable; no es causal; sensible a lineas base |
| **Interpretabilidad mecanicista (circuitos, diccionarios de caracteristicas)** | Identifica variables internas vinculadas a conceptos significativos para humanos; fuerte para analisis de incidentes | Etiquetas de neuronas/caracteristicas, resultados de parcheo, grafos de circuitos | Costoso; cobertura parcial; requiere experiencia |
| **Sondas de comportamiento** | Prueba capacidades o restricciones especificas; se alinea con listas de verificacion de auditoria | Metricas de aprobado/fallido, matrices de confusion | Superficial; puede pasar por alto capacidad latente |
| **Vectores de activacion de conceptos (CAV/TCAV)** | Cuantifica la sensibilidad del modelo a conceptos relevantes para la gobernanza (p. ej., PII, violencia) | Puntuaciones de sensibilidad por capas | Depende de conjuntos de datos de conceptos; riesgo de deriva de conceptos |
| **Edicion/parcheo contrafactual** | Demuestra que un componente identificado controla un comportamiento | Salidas antes/despues, deltas de parcheo | Riesgo de efectos secundarios; puede no ser estable entre contextos |

Ningun metodo individual es suficiente. La gobernanza depende de pares de metodos: una senal estructural (que parte del modelo importa) mas una verificacion de comportamiento (cambiarla altera las salidas en la direccion esperada).

## Protocolo: uso de la interpretabilidad para aprobaciones

1. **Delimitacion del riesgo**: Identificar comportamientos de alto impacto para justificar el esfuerzo de interpretabilidad (p. ej., filtracion de PII, instrucciones biologicas, jailbreaks de politicas).
2. **Seleccionar sondas y objetivos**: Elegir capas, cabezas o caracteristicas vinculadas a los comportamientos riesgosos. Documentar por que estos objetivos son relevantes.
3. **Ejecutar pruebas pareadas**:
   - Estructural: localizar y etiquetar componentes correlacionados con el comportamiento.
   - Comportamental: intervenir (ablacionar, parchear, editar pesos o controlar la atencion) y medir el cambio en la salida.
4. **Establecer umbrales**: Definir criterios de aceptacion (p. ej., la ablacion reduce la tasa de salida riesgosa en un 90 por ciento con menos del 2 por ciento de perdida de utilidad).
5. **Empaquetar artefactos**: Proporcionar scripts, semillas, puntos de control y conjuntos de datos minimos para que los auditores puedan volver a ejecutar las pruebas.
6. **Almacenar atestaciones**: Registrar resumenes hash de artefactos y firmar informes para soportar la deteccion de manipulacion.

### Plantilla de paquete de evidencia

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

## Monitoreo con senales de interpretabilidad

Las metricas de interpretabilidad pueden servir como indicadores de alerta temprana cuando se combinan con telemetria.

- Rastrear **activaciones de conceptos** para temas restringidos y alertar sobre derivas ascendentes.
- Monitorear la **atencion a tokens sensibles** (nombres, ubicaciones) en trafico muestreado.
- Usar **diccionarios de caracteristicas** para detectar nuevas caracteristicas que se agrupan cerca de conceptos riesgosos.
- Combinar monitores con **prompts canario** que se ejecutan en cada revision del modelo para mantener lineas base historicas.

Para evitar la fatiga de alertas, establecer rutas de escalada claras: bloqueo automatico, revision humana o registro diferido segun la gravedad.

## Manual de respuesta ante incidentes

Cuando ocurre un incidente relevante para la gobernanza, la interpretabilidad puede reducir el espacio de busqueda.

1. Capturar los prompts fallidos, la version del modelo y los registros.
2. Ejecutar metodos de localizacion (rastreo de atencion, parcheo de activaciones) para encontrar componentes que portan la senal de fallo.
3. Proponer mitigaciones dirigidas: controlar o editar los componentes implicados, o agregar datos que reduzcan la fuerza de activacion.
4. Volver a ejecutar pruebas de comportamiento pareadas para confirmar que la mitigacion aborda el fallo sin una perdida importante de utilidad.
5. Actualizar la documentacion y el monitoreo para prevenir regresiones.

## Validacion y control de calidad

- **Concordancia entre metodos**: Preferir conclusiones respaldadas por al menos dos metodos independientes.
- **Pruebas adversarias de explicaciones**: Verificar si pequenos cambios en la entrada alteran los resultados de atribucion; la inestabilidad reduce la confianza.
- **Evaluacion en conjunto reservado**: Validar hallazgos en datos fuera del conjunto de descubrimiento para reducir el riesgo de seleccion interesada.
- **Informes versionados**: Vincular cada afirmacion de interpretabilidad a un hash de modelo y version de conjunto de datos; tratar las afirmaciones como invalidadas cuando las versiones cambien.

## Recomendaciones de politica y proceso

- Exigir que los despliegues de alto riesgo presenten un **paquete de evidencia de interpretabilidad** como parte de la aprobacion, junto con las evaluaciones estandar.
- Mantener un **registro de conceptos de gobernanza** (p. ej., PII, biologia de uso dual) con sondas y conjuntos de datos estandar.
- Financiar **bancos de trabajo compartidos para auditores**: contenedores reproducibles que ejecuten las mismas pruebas de interpretabilidad en todos los laboratorios.
- Incentivar los **resultados negativos**: publicar cuando los metodos fallan o producen hallazgos inestables para evitar una confianza falsa.
- Alinear la **divulgacion**: incluir hallazgos de interpretabilidad en fichas de sistema y presentaciones ante reguladores, con enlaces a codigo reproducible.

## Limitaciones e investigacion abierta

- Los metodos actuales no ofrecen cobertura completa; muchos hallazgos son locales en lugar de garantias globales.
- Las intervenciones pueden causar efectos secundarios; cada uso de gobernanza debe incluir verificaciones de regresion en metricas de utilidad centrales.
- La deriva de conceptos sigue siendo dificil: las puntuaciones de activacion de conceptos pueden cambiar a medida que los modelos se actualizan, por lo que el monitoreo debe ser continuo.
- El resumen automatizado de resultados de interpretabilidad para auditores es prometedor, pero necesita validacion cuidadosa para evitar declaraciones erroneas.

La interpretabilidad no reemplazara la evaluacion de comportamiento ni el red teaming. Sin embargo, puede dar a los procesos de gobernanza un mapa mas claro de donde residen los comportamientos riesgosos, como suprimirlos y como demostrar que las mitigaciones se mantienen a lo largo del tiempo.
