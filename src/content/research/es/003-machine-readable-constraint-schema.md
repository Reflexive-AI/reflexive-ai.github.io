---
title: "Un esquema de restricciones legible por maquinas (MRCS)"
excerpt: "Una especificacion JSON-LD propuesta para expresar restricciones de gobernanza de IA en un formato que los agentes pueden analizar, validar y adoptar de forma nativa."
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

**Objeto de Investigacion Reflexiva 003**  
*Tipo: Estandar Tecnico (Borrador)*

## El problema

Las restricciones de gobernanza se expresan actualmente en lenguaje natural (leyes, PDFs, terminos de servicio). Esto crea una "brecha de traduccion" que socava la propia gobernanza que estos documentos pretenden proporcionar:

1. **Ambiguedad**: El lenguaje natural es impreciso. Cuando una regulacion dice que un modelo no debe producir contenido "danino", que cuenta como danino? Diferentes ingenieros implementaran diferentes interpretaciones, y ninguna puede verificarse contra la intencion original.

2. **Latencia**: Los equipos juridicos humanos deben interpretar las reglas antes de que los ingenieros puedan implementarlas. Esto introduce retrasos de semanas o meses entre la publicacion regulatoria y el cumplimiento tecnico. En un campo donde las capacidades avanzan mensualmente, una gobernanza que tarda trimestres en implementarse es una gobernanza que siempre va por detras.

3. **Perdida de informacion**: Los matices se pierden cuando las politicas se codifican en sentencias `if/else`. Un documento legal podria especificar que cierto contenido esta prohibido "excepto en contextos educativos con advertencias apropiadas". Para cuando esto se convierte en codigo, a menudo se reduce a un bloqueo binario, eliminando la flexibilidad contextual que la regulacion pretendia.

Para que los sistemas de IA sean verdaderamente reflexivos (capaces de conformarse de manera autonoma a las normas de gobernanza) requieren que las restricciones se expresen en un formato que puedan analizar de forma nativa, verificar criptograficamente y validar logicamente.

Esto no es simplemente una optimizacion de conveniencia. Es una condicion necesaria para que la gobernanza escale. Cuando millones de interacciones de IA ocurren por segundo en miles de despliegues, la interpretacion humana en el bucle se vuelve fisicamente imposible. Las restricciones deben ser legibles por maquinas, o no seran leidas en absoluto.

## La propuesta: MRCS

Proponemos el **Esquema de Restricciones Legible por Maquinas (MRCS)**, un vocabulario JSON-LD para definir:
- **Disparadores**: Cuando aplica esta restriccion? Esto especifica las condiciones bajo las cuales la restriccion se activa: ciertos temas, ciertos umbrales de capacidad, ciertos contextos de usuario.
- **Predicados**: Que debe ser verdadero? Esto define las condiciones logicas que determinan si se esta produciendo una violacion.
- **Acciones**: Cual es el resultado requerido (HALT, LOG, WARN, REDACT)? Esto especifica el mecanismo de aplicacion, que puede variar en severidad.
- **Autoridades**: Quien firmo esta restriccion? Esto permite verificar que la restriccion proviene de una fuente legitima y no ha sido alterada.

La eleccion de JSON-LD es deliberada. Proporciona compatibilidad con la web semantica, permitiendo que las restricciones hagan referencia a ontologias compartidas (que cuenta como un "patogeno"? enlace a la clasificacion de la OMS). Tambien es ampliamente compatible, reduciendo las barreras de implementacion.

## Definicion del esquema

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

Varias decisiones de diseno merecen explicacion:

**Periodos de validez**: Las restricciones caducan. Esto fuerza la revision periodica y previene la osificacion regulatoria. Una restriccion escrita en 2026 podria ser obsoleta en 2028 a medida que las amenazas evolucionen. La fecha de finalizacion explicita asegura que alguien deba renovarla activamente.

**Umbrales de capacidad en el alcance**: No todas las restricciones aplican a todos los modelos. Una restriccion disenada para modelos de frontera con potenciales capacidades QBRN seria absurda de aplicar a un chatbot de atencion al cliente. El campo de alcance posibilita la proporcionalidad.

**Firmas criptograficas**: Cualquiera puede escribir un archivo JSON. El campo de firma permite a los agentes verificar que esta restriccion realmente provino de la autoridad declarada, previniendo ataques de inyeccion de restricciones.

## Logica de implementacion

Un agente de IA que adopte este esquema implementaria una capa `ConstraintMiddleware` que opera entre la solicitud del usuario y la generacion de respuesta del modelo:

1. **Ingesta**: El agente obtiene periodicamente objetos de restriccion firmados de un registro de confianza. Esto podria ser un endpoint gubernamental, un consorcio industrial o una combinacion. La frecuencia de obtencion determina la rapidez con que se propagan las nuevas restricciones.

2. **Verificacion**: El agente valida la firma criptografica de la `authority`. Si la firma es invalida o la autoridad no esta en la lista de confianza del agente, la restriccion se rechaza. Esto previene la inyeccion maliciosa de restricciones.

3. **Coincidencia**: Para cada interaccion, el agente verifica si el `scope` aplica. Este modelo supera el umbral de capacidad? Es el dominio relevante para la solicitud actual? La mayoria de las restricciones no coincidiran con la mayoria de las solicitudes.

4. **Evaluacion**: El agente ejecuta la logica de `trigger` y `condition`. Esto requiere que el agente tenga suficiente autoconocimiento para evaluar condiciones semanticas. "Mi entrada contiene un protocolo de sintesis?" requiere comprender el significado de la entrada.

5. **Aplicacion**: Si hay coincidencia, el agente ejecuta la `action`. Esto podria significar detener la generacion, redactar contenido especifico, registrar la interaccion para revision o advertir al usuario.

El enfoque de middleware es importante porque separa la logica de gobernanza de los pesos del modelo. No es necesario reentrenar el modelo para actualizar sus restricciones; simplemente se actualiza el registro de restricciones.

## Implicacion de gobernanza

MRCS traslada el cumplimiento de la **codificacion rigida en tiempo de diseno** a la **inferencia en tiempo de ejecucion**.

Esta distincion es enormemente importante. Actualmente, si los reguladores identifican una nueva amenaza (digamos, una nueva via de sintesis para un compuesto peligroso), la unica forma de abordarla es reentrenar los modelos o anadir a una lista de filtros. Esto toma meses.

Bajo MRCS, la respuesta es diferente. Se escribe un nuevo objeto de restriccion, lo firma la autoridad apropiada y se publica en el registro. Los agentes que cumplen lo obtienen en horas y comienzan a aplicarlo inmediatamente. Los pesos del modelo nunca cambian; la capa de gobernanza se actualiza.

Esto tambien habilita la **gobernanza especifica por jurisdiccion**. Un modelo desplegado en la UE podria obtener restricciones de autoridades europeas; el mismo modelo desplegado en Singapur podria obtener restricciones diferentes. El modelo en si es neutro; la capa de gobernanza se adapta a los requisitos locales.

## Consideraciones de seguridad

Cualquier sistema de gobernanza legible por maquinas introduce superficies de ataque:

**Suplantacion de restricciones**: Un atacante podria intentar publicar restricciones falsas que desactiven medidas de seguridad legitimas. El sistema de verificacion de firmas mitiga esto, pero solo si los agentes mantienen listas de confianza seguras.

**Denegacion de servicio de restricciones**: Un atacante podria inundar a un agente con miles de restricciones, haciendo que la evaluacion sea computacionalmente prohibitiva. Se necesitan limitacion de velocidad y priorizacion de restricciones.

**Explotacion de logica**: El lenguaje de disparadores y condiciones debe disenarse cuidadosamente para prevenir ataques de inyeccion. Si el campo de condicion permite la ejecucion de codigo arbitrario, se convierte en una vulnerabilidad.

Estas no son razones para abandonar el enfoque, pero requieren una implementacion cuidadosa. La alternativa (una gobernanza que no puede escalar) es peor.

## Proximos pasos

1. **Definir la ontologia formal para la semantica de `trigger`.** Que predicados pueden usarse? A que entidades puede hacerse referencia? Esto necesita ser lo suficientemente preciso para el analisis por maquinas pero lo suficientemente expresivo para la gobernanza real.

2. **Prototipar una biblioteca Python (`reflexive-guard`) que analice objetos MRCS.** Facilitar a los desarrolladores anadir cumplimiento MRCS a sus sistemas con cambios minimos de codigo.

3. **Pilotar con un envoltorio de modelo de pesos abiertos pequeno.** Antes de proponer esto para modelos de frontera, demostrar que funciona en algo mas simple. Construir confianza mediante iteracion.

4. **Involucrar a los organismos de estandarizacion.** MRCS no deberia permanecer como una iniciativa aislada. Necesita el respaldo de W3C, IEEE u organizaciones similares para lograr legitimidad e interoperabilidad.

## Conclusion

Las restricciones legibles por maquinas no son una fantasia futurista; son una necesidad presente. A medida que los sistemas de IA proliferan y se aceleran, la gobernanza que requiere interpretacion humana para cada decision fallara. MRCS ofrece un camino hacia una gobernanza que escala con la tecnologia que gobierna: lo suficientemente precisa para ser aplicada, lo suficientemente flexible para evolucionar y lo suficientemente transparente para ser auditada.
