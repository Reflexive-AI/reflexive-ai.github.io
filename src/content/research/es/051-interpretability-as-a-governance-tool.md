---
title: "La interpretabilidad como herramienta de gobernanza"
excerpt: "Cómo los métodos de interpretabilidad proporcionan evidencia para la supervisión de la IA: aprobaciones, auditorías, monitoreo y respuesta ante incidentes."
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

La interpretabilidad se trata a menudo como un objetivo de investigación interno. Para la gobernanza, es un canal de evidencia: una forma de mostrar cómo se comporta un sistema, por qué se comporta así y si las salvaguardas funcionan. Este artículo mapea los métodos de interpretabilidad a funciones concretas de gobernanza y describe protocolos para hacer que la evidencia resultante sea confiable.

## Casos de uso de gobernanza para la interpretabilidad

- **Aprobación previa al despliegue**: Demostrar que las mitigaciones de seguridad están presentes y activas en las vías de alto riesgo.
- **Monitoreo continuo**: Detectar desviaciones o emergencia inesperada de capacidades mediante el seguimiento de activaciones de conceptos y sondas de comportamiento.
- **Auditoría y certificación**: Proporcionar artefactos reproducibles que los auditores externos puedan volver a ejecutar, incluyendo semillas, puntos de control y scripts.
- **Respuesta ante incidentes**: Localizar los componentes que contribuyeron a un fallo y proponer remediaciones dirigidas.
- **Verificación de políticas**: Mostrar que el comportamiento del sistema se alinea con las restricciones declaradas, especialmente cuando las afirmaciones están vinculadas a presentaciones regulatorias.

## Requisitos para evidencia de grado de gobernanza

Los resultados de interpretabilidad solo ayudan a la gobernanza si cumplen estándares de evidencia similares a las pruebas de laboratorio.

- **Reproducibilidad**: Mismas entradas, mismas semillas, mismas salidas. Publicar scripts y versiones.
- **Claridad de alcance**: Definir lo que el método puede y no puede mostrar (características, capas, tareas). Evitar afirmaciones excesivas.
- **Falsificabilidad**: Proporcionar contrapruebas que invalidarían la conclusión si el modelo cambiara.
- **Calibración**: Vincular los hallazgos de interpretabilidad con métricas de comportamiento. Un mapa de relevancia sin movimiento de rendimiento correlacionado es evidencia débil.
- **Estabilidad bajo cambio de distribución**: Volver a ejecutar las sondas de interpretabilidad en conjuntos de datos alternativos para asegurar que las conclusiones no sean artefactos del conjunto de datos.

## Familias de métodos y adecuación a la gobernanza

| Método | Valor para la gobernanza | Salidas típicas | Limitaciones |
| --- | --- | --- | --- |
| **Atribución de características (p. ej., Integrated Gradients, SHAP)** | Muestra qué entradas impulsan las salidas; útil para divulgación y revisión de sesgos | Tokens clasificados, mapas de calor, tramos de entrada | Puede ser inestable; no es causal; sensible a líneas base |
| **Interpretabilidad mecanicista (circuitos, diccionarios de características)** | Identifica variables internas vinculadas a conceptos significativos para humanos; fuerte para análisis de incidentes | Etiquetas de neuronas/características, resultados de parcheo, grafos de circuitos | Costoso; cobertura parcial; requiere experiencia |
| **Sondas de comportamiento** | Prueba capacidades o restricciones específicas; se alinea con listas de verificación de auditoría | Métricas de aprobado/fallido, matrices de confusión | Superficial; puede pasar por alto capacidad latente |
| **Vectores de activación de conceptos (CAV/TCAV)** | Cuantifica la sensibilidad del modelo a conceptos relevantes para la gobernanza (p. ej., PII, violencia) | Puntuaciones de sensibilidad por capas | Depende de conjuntos de datos de conceptos; riesgo de deriva de conceptos |
| **Edición/parcheo contrafactual** | Demuestra que un componente identificado controla un comportamiento | Salidas antes/después, deltas de parcheo | Riesgo de efectos secundarios; puede no ser estable entre contextos |

Ningún método individual es suficiente. La gobernanza depende de pares de métodos: una señal estructural (qué parte del modelo importa) más una verificación de comportamiento (cambiarla altera las salidas en la dirección esperada).

## Protocolo: uso de la interpretabilidad para aprobaciones

1. **Delimitación del riesgo**: Identificar comportamientos de alto impacto para justificar el esfuerzo de interpretabilidad (p. ej., filtración de PII, instrucciones biológicas, jailbreaks de políticas).
2. **Seleccionar sondas y objetivos**: Elegir capas, cabezas o características vinculadas a los comportamientos riesgosos. Documentar por qué estos objetivos son relevantes.
3. **Ejecutar pruebas pareadas**:
   - Estructural: localizar y etiquetar componentes correlacionados con el comportamiento.
   - Comportamental: intervenir (ablacionar, parchear, editar pesos o controlar la atención) y medir el cambio en la salida.
4. **Establecer umbrales**: Definir criterios de aceptación (p. ej., la ablación reduce la tasa de salida riesgosa en un 90 por ciento con menos del 2 por ciento de pérdida de utilidad).
5. **Empaquetar artefactos**: Proporcionar scripts, semillas, puntos de control y conjuntos de datos mínimos para que los auditores puedan volver a ejecutar las pruebas.
6. **Almacenar atestaciones**: Registrar resúmenes hash de artefactos y firmar informes para soportar la detección de manipulación.

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

## Monitoreo con señales de interpretabilidad

Las métricas de interpretabilidad pueden servir como indicadores de alerta temprana cuando se combinan con telemetría.

- Rastrear **activaciones de conceptos** para temas restringidos y alertar sobre derivas ascendentes.
- Monitorear la **atención a tokens sensibles** (nombres, ubicaciones) en tráfico muestreado.
- Usar **diccionarios de características** para detectar nuevas características que se agrupan cerca de conceptos riesgosos.
- Combinar monitores con **prompts canario** que se ejecutan en cada revisión del modelo para mantener líneas base históricas.

Para evitar la fatiga de alertas, establecer rutas de escalada claras: bloqueo automático, revisión humana o registro diferido según la gravedad.

## Manual de respuesta ante incidentes

Cuando ocurre un incidente relevante para la gobernanza, la interpretabilidad puede reducir el espacio de búsqueda.

1. Capturar los prompts fallidos, la versión del modelo y los registros.
2. Ejecutar métodos de localización (rastreo de atención, parcheo de activaciones) para encontrar componentes que portan la señal de fallo.
3. Proponer mitigaciones dirigidas: controlar o editar los componentes implicados, o agregar datos que reduzcan la fuerza de activación.
4. Volver a ejecutar pruebas de comportamiento pareadas para confirmar que la mitigación aborda el fallo sin una pérdida importante de utilidad.
5. Actualizar la documentación y el monitoreo para prevenir regresiones.

## Validación y control de calidad

- **Concordancia entre métodos**: Preferir conclusiones respaldadas por al menos dos métodos independientes.
- **Pruebas adversarias de explicaciones**: Verificar si pequeños cambios en la entrada alteran los resultados de atribución; la inestabilidad reduce la confianza.
- **Evaluación en conjunto reservado**: Validar hallazgos en datos fuera del conjunto de descubrimiento para reducir el riesgo de selección interesada.
- **Informes versionados**: Vincular cada afirmación de interpretabilidad a un hash de modelo y versión de conjunto de datos; tratar las afirmaciones como invalidadas cuando las versiones cambien.

## Recomendaciones de política y proceso

- Exigir que los despliegues de alto riesgo presenten un **paquete de evidencia de interpretabilidad** como parte de la aprobación, junto con las evaluaciones estándar.
- Mantener un **registro de conceptos de gobernanza** (p. ej., PII, biología de uso dual) con sondas y conjuntos de datos estándar.
- Financiar **bancos de trabajo compartidos para auditores**: contenedores reproducibles que ejecuten las mismas pruebas de interpretabilidad en todos los laboratorios.
- Incentivar los **resultados negativos**: publicar cuando los métodos fallan o producen hallazgos inestables para evitar una confianza falsa.
- Alinear la **divulgación**: incluir hallazgos de interpretabilidad en fichas de sistema y presentaciones ante reguladores, con enlaces a código reproducible.

## Limitaciones e investigación abierta

- Los métodos actuales no ofrecen cobertura completa; muchos hallazgos son locales en lugar de garantías globales.
- Las intervenciones pueden causar efectos secundarios; cada uso de gobernanza debe incluir verificaciones de regresión en métricas de utilidad centrales.
- La deriva de conceptos sigue siendo difícil: las puntuaciones de activación de conceptos pueden cambiar a medida que los modelos se actualizan, por lo que el monitoreo debe ser continuo.
- El resumen automatizado de resultados de interpretabilidad para auditores es prometedor, pero necesita validación cuidadosa para evitar declaraciones erróneas.

La interpretabilidad no reemplazará la evaluación de comportamiento ni el red teaming. Sin embargo, puede dar a los procesos de gobernanza un mapa más claro de dónde residen los comportamientos riesgosos, cómo suprimirlos y cómo demostrar que las mitigaciones se mantienen a lo largo del tiempo.
