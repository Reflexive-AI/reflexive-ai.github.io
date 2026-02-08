---
title: "Un esquema de restricciones legible por máquinas (MRCS)"
excerpt: "Una especificación JSON-LD propuesta para expresar restricciones de gobernanza de IA en un formato que los agentes pueden analizar, validar y adoptar de forma nativa."
date: 2025-12-16
categories:
  - Technical Artifact
  - Governance Standard
tags:
  - json-ld
  - machine-readable
  - standards
  - interoperability
  - agents
version: "0.1.0"
---

**Objeto de Investigación Reflexiva 003**  
*Tipo: Estándar Técnico (Borrador)*

## El problema

Las restricciones de gobernanza se expresan actualmente en lenguaje natural (leyes, PDFs, términos de servicio). Esto crea una "brecha de traducción" que socava la propia gobernanza que estos documentos pretenden proporcionar:

1. **Ambigüedad**: El lenguaje natural es impreciso. Cuando una regulación dice que un modelo no debe producir contenido "dañino", ¿qué cuenta como dañino? Diferentes ingenieros implementarán diferentes interpretaciones, y ninguna puede verificarse contra la intención original.

2. **Latencia**: Los equipos jurídicos humanos deben interpretar las reglas antes de que los ingenieros puedan implementarlas. Esto introduce retrasos de semanas o meses entre la publicación regulatoria y el cumplimiento técnico. En un campo donde las capacidades avanzan mensualmente, una gobernanza que tarda trimestres en implementarse es una gobernanza que siempre va por detrás.

3. **Pérdida de información**: Los matices se pierden cuando las políticas se codifican en sentencias `if/else`. Un documento legal podría especificar que cierto contenido está prohibido "excepto en contextos educativos con advertencias apropiadas". Para cuando esto se convierte en código, a menudo se reduce a un bloqueo binario, eliminando la flexibilidad contextual que la regulación pretendía.

Para que los sistemas de IA sean verdaderamente reflexivos (capaces de conformarse de manera autónoma a las normas de gobernanza) requieren que las restricciones se expresen en un formato que puedan analizar de forma nativa, verificar criptográficamente y validar lógicamente.

Esto no es simplemente una optimización de conveniencia. Es una condición necesaria para que la gobernanza escale. Cuando millones de interacciones de IA ocurren por segundo en miles de despliegues, la interpretación humana en el bucle se vuelve físicamente imposible. Las restricciones deben ser legibles por máquinas, o no serán leídas en absoluto.

## La propuesta: MRCS

Proponemos el **Esquema de Restricciones Legible por Máquinas (MRCS)**, un vocabulario JSON-LD para definir:
- **Disparadores**: ¿Cuándo aplica esta restricción? Esto especifica las condiciones bajo las cuales la restricción se activa: ciertos temas, ciertos umbrales de capacidad, ciertos contextos de usuario.
- **Predicados**: ¿Qué debe ser verdadero? Esto define las condiciones lógicas que determinan si se está produciendo una violación.
- **Acciones**: ¿Cuál es el resultado requerido (HALT, LOG, WARN, REDACT)? Esto especifica el mecanismo de aplicación, que puede variar en severidad.
- **Autoridades**: ¿Quién firmó esta restricción? Esto permite verificar que la restricción proviene de una fuente legítima y no ha sido alterada.

La elección de JSON-LD es deliberada. Proporciona compatibilidad con la web semántica, permitiendo que las restricciones hagan referencia a ontologías compartidas (¿qué cuenta como un "patógeno"? enlace a la clasificación de la OMS). También es ampliamente compatible, reduciendo las barreras de implementación.

## Definición del esquema

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-003",
  "name": "Bio-Risk-Redaction",
  "version": "1.0",
  "authority": {
    "name": "Reflexive AI Consortium",
    "signature": "0x7a8..." 
  },
  "scope": {
    "domain": ["biology", "virology"],
    "capability_threshold": "> 10^24 FLOPs"
  },
  "logic": {
    "trigger": "input.semantics.contains('synthesis_protocol')",
    "condition": "target.entity.is_regulated_pathogen == true",
    "action": {
      "type": "REDACT",
      "level": "strict",
      "notification": "user_warning"
    }
  },
  "validity": {
    "start": "2026-01-01T00:00:00Z",
    "end": "2027-01-01T00:00:00Z"
  }
}
```

Varias decisiones de diseño merecen explicación:

**Períodos de validez**: Las restricciones caducan. Esto fuerza la revisión periódica y previene la osificación regulatoria. Una restricción escrita en 2026 podría ser obsoleta en 2028 a medida que las amenazas evolucionen. La fecha de finalización explícita asegura que alguien deba renovarla activamente.

**Umbrales de capacidad en el alcance**: No todas las restricciones aplican a todos los modelos. Una restricción diseñada para modelos de frontera con potenciales capacidades QBRN sería absurda de aplicar a un chatbot de atención al cliente. El campo de alcance posibilita la proporcionalidad.

**Firmas criptográficas**: Cualquiera puede escribir un archivo JSON. El campo de firma permite a los agentes verificar que esta restricción realmente provino de la autoridad declarada, previniendo ataques de inyección de restricciones.

## Lógica de implementación

Un agente de IA que adopte este esquema implementaría una capa `ConstraintMiddleware` que opera entre la solicitud del usuario y la generación de respuesta del modelo:

1. **Ingesta**: El agente obtiene periódicamente objetos de restricción firmados de un registro de confianza. Esto podría ser un endpoint gubernamental, un consorcio industrial o una combinación. La frecuencia de obtención determina la rapidez con que se propagan las nuevas restricciones.

2. **Verificación**: El agente valida la firma criptográfica de la `authority`. Si la firma es inválida o la autoridad no está en la lista de confianza del agente, la restricción se rechaza. Esto previene la inyección maliciosa de restricciones.

3. **Coincidencia**: Para cada interacción, el agente verifica si el `scope` aplica. ¿Este modelo supera el umbral de capacidad? ¿Es el dominio relevante para la solicitud actual? La mayoría de las restricciones no coincidirán con la mayoría de las solicitudes.

4. **Evaluación**: El agente ejecuta la lógica de `trigger` y `condition`. Esto requiere que el agente tenga suficiente autoconocimiento para evaluar condiciones semánticas. "¿Mi entrada contiene un protocolo de síntesis?" requiere comprender el significado de la entrada.

5. **Aplicación**: Si hay coincidencia, el agente ejecuta la `action`. Esto podría significar detener la generación, redactar contenido específico, registrar la interacción para revisión o advertir al usuario.

El enfoque de middleware es importante porque separa la lógica de gobernanza de los pesos del modelo. No es necesario reentrenar el modelo para actualizar sus restricciones; simplemente se actualiza el registro de restricciones.

## Implicación de gobernanza

MRCS traslada el cumplimiento de la **codificación rígida en tiempo de diseño** a la **inferencia en tiempo de ejecución**.

Esta distinción es enormemente importante. Actualmente, si los reguladores identifican una nueva amenaza (digamos, una nueva vía de síntesis para un compuesto peligroso), la única forma de abordarla es reentrenar los modelos o añadir a una lista de filtros. Esto toma meses.

Bajo MRCS, la respuesta es diferente. Se escribe un nuevo objeto de restricción, lo firma la autoridad apropiada y se publica en el registro. Los agentes que cumplen lo obtienen en horas y comienzan a aplicarlo inmediatamente. Los pesos del modelo nunca cambian; la capa de gobernanza se actualiza.

Esto también habilita la **gobernanza específica por jurisdicción**. Un modelo desplegado en la UE podría obtener restricciones de autoridades europeas; el mismo modelo desplegado en Singapur podría obtener restricciones diferentes. El modelo en sí es neutro; la capa de gobernanza se adapta a los requisitos locales.

## Consideraciones de seguridad

Cualquier sistema de gobernanza legible por máquinas introduce superficies de ataque:

**Suplantación de restricciones**: Un atacante podría intentar publicar restricciones falsas que desactiven medidas de seguridad legítimas. El sistema de verificación de firmas mitiga esto, pero solo si los agentes mantienen listas de confianza seguras.

**Denegación de servicio de restricciones**: Un atacante podría inundar a un agente con miles de restricciones, haciendo que la evaluación sea computacionalmente prohibitiva. Se necesitan limitación de velocidad y priorización de restricciones.

**Explotación de lógica**: El lenguaje de disparadores y condiciones debe diseñarse cuidadosamente para prevenir ataques de inyección. Si el campo de condición permite la ejecución de código arbitrario, se convierte en una vulnerabilidad.

Estas no son razones para abandonar el enfoque, pero requieren una implementación cuidadosa. La alternativa (una gobernanza que no puede escalar) es peor.

## Próximos pasos

1. **Definir la ontología formal para la semántica de `trigger`.** ¿Qué predicados pueden usarse? ¿A qué entidades puede hacerse referencia? Esto necesita ser lo suficientemente preciso para el análisis por máquinas pero lo suficientemente expresivo para la gobernanza real.

2. **Prototipar una biblioteca Python (`reflexive-guard`) que analice objetos MRCS.** Facilitar a los desarrolladores añadir cumplimiento MRCS a sus sistemas con cambios mínimos de código.

3. **Pilotar con un envoltorio de modelo de pesos abiertos pequeño.** Antes de proponer esto para modelos de frontera, demostrar que funciona en algo más simple. Construir confianza mediante iteración.

4. **Involucrar a los organismos de estandarización.** MRCS no debería permanecer como una iniciativa aislada. Necesita el respaldo de W3C, IEEE u organizaciones similares para lograr legitimidad e interoperabilidad.

## Conclusión

Las restricciones legibles por máquinas no son una fantasía futurista; son una necesidad presente. A medida que los sistemas de IA proliferan y se aceleran, la gobernanza que requiere interpretación humana para cada decisión fallará. MRCS ofrece un camino hacia una gobernanza que escala con la tecnología que gobierna: lo suficientemente precisa para ser aplicada, lo suficientemente flexible para evolucionar y lo suficientemente transparente para ser auditada.
