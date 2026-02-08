---
title: "Informe de política: el marco de niveles de divulgación"
excerpt: "Una guía en lenguaje accesible para legisladores: por qué la transparencia única para toda la IA fracasa, y cómo un enfoque escalonado puede equilibrar seguridad con innovación."
date: 2025-12-18
categories:
  - Policy Brief
  - Public
tags:
  - policy
  - regulation
  - guide
  - disclosure
  - transparency
version: "1.0"
---

**Objeto de Investigación Reflexiva 005**  
*Tipo: Informe de política (Público)*

## Resumen ejecutivo

Los reguladores enfrentan actualmente un dilema:
- **Demasiada transparencia** sobre modelos peligrosos podría ayudar a actores maliciosos a construir armas.
- **Muy poca transparencia** impide a los investigadores auditar la seguridad.

La solución actual (exigir "fichas de modelo" para todo) no resuelve esto. Crea papeleo para pequeñas startups mientras no captura los riesgos profundos de los modelos de frontera.

**La solución:** Dejar de tratar a todos los modelos de IA por igual. Proponemos un **Marco de divulgación por niveles** donde la cantidad de transparencia requerida se ajusta al riesgo del modelo.

Este informe explica por qué la divulgación por niveles funciona, cómo funcionaría en la práctica y qué deben considerar los legisladores al implementarla.

---

## El problema actual

Los requisitos actuales de transparencia de la IA padecen un defecto de diseño fundamental: tratan a todos los sistemas de IA como si plantearan los mismos riesgos. El asistente de tareas de un estudiante y un sistema capaz de diseñar patógenos novedosos deben presentar documentación similar. Esto crea varios fallos:

**Para los reguladores:** La bandeja de entrada se llena con miles de fichas de modelo que se ven más o menos iguales. Cada una enumera diligentemente las fuentes de datos de entrenamiento, los casos de uso previstos y las limitaciones conocidas. Pero el formato hace casi imposible distinguir entre sistemas triviales y genuinamente peligrosos. La documentación destinada a facilitar la supervisión la oscurece en su lugar.

**Para los pequeños desarrolladores:** El cumplimiento se convierte en una carga significativa incluso para aplicaciones de bajo riesgo. Una startup que construye un asistente de programación impulsado por IA debe navegar los mismos requisitos de documentación que un laboratorio de frontera. Esto desalienta la innovación y desperdicia recursos en papeleo que no proporciona ningún beneficio de seguridad.

**Para los investigadores de seguridad:** La información que realmente necesitan (resultados de equipos rojos, evaluaciones de capacidad, composición de datos de entrenamiento para dominios peligrosos) falta o está enterrada en campos estandarizados que no fueron diseñados para ello. El formato de ficha de modelo evolucionó para sistemas relativamente simples; no captura la complejidad de los modelos de frontera.

**Para el público:** La apariencia de transparencia crea falsa confianza. "Presentaron todo el papeleo, así que debe ser seguro". Pero el cumplimiento de los requisitos de documentación no dice nada sobre la seguridad real.

---

## Por qué "más grande" no siempre es "más riesgoso"

A menudo asumimos que los modelos más grandes (más parámetros) son más peligrosos. Esto es mayormente cierto, pero no siempre. Un modelo pequeño entrenado específicamente con libros de texto de virología y protocolos de síntesis podría ser más peligroso que un chatbot genérico diez veces su tamaño.

Consideremos un ejemplo hipotético: el Modelo A tiene 100 mil millones de parámetros y fue entrenado con texto general de internet. El Modelo B tiene 7 mil millones de parámetros pero fue ajustado finamente de manera extensiva con literatura de química, incluidos procedimientos detallados de síntesis. El Modelo B, a pesar de ser mucho más pequeño, podría plantear mayores riesgos de bioseguridad.

Por lo tanto, no deberíamos regular basándonos solo en el tamaño (parámetros). Deberíamos regular basándonos en la **capacidad**: lo que el modelo realmente *puede* hacer. Específicamente, deberíamos centrarnos en las capacidades peligrosas: ¿Puede ayudar a sintetizar patógenos? ¿Puede escribir malware novedoso? ¿Puede proporcionar asistencia en el diseño de armas?

Esto requiere un cambio en el pensamiento regulatorio. En lugar de preguntar "¿Qué tan grande es?" preguntamos "¿Qué puede hacer?". Esto es más difícil de medir, pero es la pregunta correcta.

---

## Los tres niveles de transparencia

Proponemos tres niveles simples de divulgación para los desarrolladores de IA:

### Nivel 1: La ficha estándar (Bajo riesgo)

**Para:** Chatbots, asistentes de programación, generadores de imágenes, IA de atención al cliente, sistemas de recomendación y la gran mayoría de aplicaciones de IA.

**Requisito:**
- Una "etiqueta nutricional" estándar (ficha de modelo).
- Enumera qué datos se utilizaron y limitaciones conocidas (p. ej., "alucina hechos", "puede exhibir sesgo sobre el tema X").
- Casos de uso previstos básicos y aplicaciones fuera de alcance.
- **¿Quién lo ve?** Todos (público).

**Por qué este nivel:** Estos sistemas plantean riesgos limitados. Pueden producir ocasionalmente resultados incorrectos o sesgados, pero no pueden causar daño catastrófico. Exigir documentación extensa cargaría a los desarrolladores sin beneficios de seguridad correspondientes.

**Qué logra:** Responsabilidad básica. Los usuarios saben con qué están interactuando. Los investigadores pueden identificar patrones entre sistemas. Los reguladores tienen un inventario de referencia de la IA desplegada.

### Nivel 2: La auditoría del sistema (Riesgo medio)

**Para:** Modelos que afectan decisiones de alto impacto: contratación, préstamos, diagnóstico de salud, aplicación de la ley, evaluación educativa y moderación de contenido a escala.

**Requisito:**
- Todo lo del Nivel 1, además de:
- Resultados detallados de pruebas contra benchmarks de sesgo y equidad.
- Registros de auditoría independientes que muestren cómo el sistema rinde entre diferentes grupos demográficos.
- Evaluaciones de impacto que documentan daños potenciales y mitigaciones.
- Mecanismos de reporte de incidentes cuando las cosas salen mal.
- **¿Quién lo ve?** Reguladores y auditores verificados. Los resúmenes pueden ser públicos.

**Por qué este nivel:** Estos sistemas toman decisiones que afectan significativamente la vida de las personas. Un algoritmo de contratación que discrimina, un sistema de salud que diagnostica incorrectamente a ciertas poblaciones o un sistema de moderación de contenido que silencia el discurso legítimo causa un daño real, pero no catastrófico e irreversible. Los riesgos justifican más escrutinio que el Nivel 1 pero no requieren las medidas extremas del Nivel 3.

**Qué logra:** Responsabilidad significativa para decisiones consecuentes. El requisito de auditoría crea incentivos para probar exhaustivamente antes del despliegue. El acceso del regulador permite la aplicación.

### Nivel 3: La caja de seguridad (Alto riesgo)

**Para:** Modelos de "frontera" con capacidades en hacking, armas biológicas o químicas, tecnología nuclear o sistemas de armas autónomas. También se aplica a cualquier modelo cuya evaluación de capacidad revele potencial peligroso.

**Requisito:**
- Todo lo de los Niveles 1 y 2, además de:
- Transparencia total de la composición de datos de entrenamiento, particularmente para dominios peligrosos.
- Registros completos de "equipo rojo" que muestran cómo los desarrolladores intentaron obtener capacidades peligrosas.
- Evaluaciones detalladas de capacidad en todos los dominios de amenaza.
- Medidas de seguridad para la protección de pesos.
- **¿Quién lo ve?** Solo los institutos de seguridad gubernamentales (como los Institutos de Seguridad de IA) y auditores específicamente autorizados. No público, ni siquiera la mayoría de los reguladores.

**Por qué este nivel:** Estos sistemas podrían permitir un daño catastrófico. Un modelo capaz de proporcionar instrucciones paso a paso para la síntesis de armas biológicas a cualquiera que pregunte es fundamentalmente diferente de un chatbot que ocasionalmente dice algo ofensivo. Los riesgos justifican una transparencia extrema, pero esa transparencia debe controlarse estrictamente para evitar que la propia divulgación permita el uso indebido.

**Qué logra:** Máxima visión para los responsables de prevenir riesgos catastróficos. El acceso restringido previene la proliferación. Los requisitos integrales aseguran que nada quede oculto.

---

## Por qué funciona este marco

### Desgrava la innovación
Aproximadamente el 90% de las aplicaciones de IA plantean riesgos de Nivel 1. Bajo este marco, sus desarrolladores presentan una ficha de modelo estándar y continúan adelante. Sin auditorías extensas, sin revisión gubernamental, sin abogados interpretando regulaciones complejas. Esto mantiene baja la barrera de entrada para aplicaciones beneficiosas.

### Enfoca los recursos
Las agencias reguladoras tienen personal, presupuesto y experiencia limitados. Bajo los requisitos planos actuales, deben revisar innumerables aplicaciones de bajo riesgo mientras los riesgos de frontera reciben la misma atención. El marco por niveles permite a los reguladores centrar su tiempo limitado en los modelos de Nivel 3 que realmente plantean riesgos catastróficos y los modelos de Nivel 2 que afectan a poblaciones vulnerables.

### Protege los secretos adecuadamente
La divulgación de Nivel 3 es extensa, pero no es pública. Los registros de equipo rojo, los manifiestos de datos de entrenamiento y las evaluaciones de capacidad van solo a institutos de seguridad con las autorizaciones de seguridad apropiadas. Esto significa que la información más peligrosa (los prompts específicos que obtienen capacidades peligrosas, las brechas en las medidas de seguridad) no se convierte en una hoja de ruta pública para el uso indebido.

### Crea incentivos claros
Los desarrolladores saben exactamente qué se requiere en cada nivel. Si quieren evitar los requisitos de Nivel 3, pueden elegir no construir sistemas con capacidades de Nivel 3, o pueden implementar medidas de seguridad que reduzcan las capacidades por debajo del umbral. El marco hace explícito el coste del desarrollo peligroso.

### Se adapta a la capacidad, no solo al tamaño
Un modelo especializado pequeño que plantea riesgos de Nivel 3 recibe escrutinio de Nivel 3. Un modelo general grande que plantea solo riesgos de Nivel 1 recibe requisitos de Nivel 1. El marco responde al peligro real, no a medidas indirectas.

---

## Consideraciones de implementación

**¿Quién decide el nivel?** Inicialmente, el desarrollador se autoclasifica, sujeto a auditoría. La clasificación errónea tiene consecuencias: si una presentación de Nivel 1 se descubre posteriormente con capacidades de Nivel 3, eso es fraude regulatorio. Esto crea incentivos para una autoevaluación precisa.

**¿Cómo se establecen los umbrales?** Los umbrales de capacidad deben definirse mediante un proceso multipartito que involucre a investigadores de seguridad, expertos en el dominio (virólogos, profesionales de ciberseguridad, expertos en armas) y la sociedad civil. Deben ser específicos y medibles: "¿Puede el modelo alcanzar una puntuación X en la evaluación Y?"

**¿Con qué frecuencia se actualizan las presentaciones?** El Nivel 1 puede ser estático. Los Niveles 2 y 3 requieren reevaluación periódica, especialmente después de actualizaciones significativas al modelo. El ajuste fino que aumenta las capacidades podría mover un modelo a un nivel superior.

**¿Qué pasa con los modelos de pesos abiertos?** Los modelos abiertos presentan desafíos especiales. Una vez que los pesos son públicos, pueden ajustarse finamente para eliminar las medidas de seguridad. Esto puede justificar restringir la publicación abierta para modelos con potencial de Nivel 3: una limitación significativa pero potencialmente necesaria.

---

## La conclusión final

La transparencia no es un interruptor binario (Encendido/Apagado). Es un regulador de intensidad. Una regulación más inteligente significa ajustar esa luz al nivel adecuado para la habitación en la que estamos.

Los enfoques actuales fracasan porque tratan todas las habitaciones por igual: inundando los espacios de bajo riesgo con burocracia innecesaria mientras dejan los espacios de alto riesgo peligrosamente oscuros. El marco por niveles ajusta la luz a la habitación: lo suficientemente brillante para ver lo que importa, lo suficientemente controlada para evitar que la propia luz cause daño.

Para los legisladores, el mensaje es simple: dejen de exigir las mismas divulgaciones para un chatbot de atención al cliente y una potencial arma biológica. Ajusten el escrutinio a los riesgos. Eso no es captura regulatoria ni ser laxo con la IA: es buena gobernanza.
