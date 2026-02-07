---
title: "Comunicación de la incertidumbre en las salidas de IA"
excerpt: "Los sistemas de IA a menudo presentan salidas con confianza cuando existe una incertidumbre genuina. Este análisis examina cómo la IA puede comunicar mejor su incertidumbre y por qué la gobernanza lo requiere."
date: 2026-01-09
categories:
  - Technical Artifact
  - Reflexivity
tags:
  - transparency
  - uncertainty
  - agents
  - trust
  - reporting
---

## El problema de la confianza

Los sistemas de IA producen salidas con una fluidez notable. Un modelo de lenguaje grande puede responder preguntas complejas, explicar temas matizados y generar análisis detallados, todo ello sin ninguna indicación de si el sistema está seguro, inseguro o simplemente confabulando.

Esta uniformidad de presentación es peligrosa. Una respuesta en la que el modelo tiene alta confianza parece idéntica a una que esencialmente ha inventado. Los usuarios no pueden distinguir la información fiable de la fabricación. El estado epistémico del sistema, lo que sabe y cuán bien lo sabe, queda oculto tras una superficie lisa de prosa segura.

Para la gobernanza de la IA, este es un problema fundamental. Los sistemas que no pueden comunicar su incertidumbre no pueden ser objeto de confianza apropiada. Los usuarios toman decisiones basadas en las salidas de la IA sin saber cuán fiables son esas salidas. Y los sistemas que no rastrean su propia incertidumbre no pueden participar de manera significativa en su propia gobernanza.

## Por qué importa la comunicación de la incertidumbre

Varias consideraciones de gobernanza requieren que los sistemas de IA comuniquen la incertidumbre.

### Confianza calibrada

Diferentes salidas merecen diferentes niveles de confianza. Un modelo que responde a una pregunta fáctica bien establecida basándose en datos de entrenamiento claros merece más confianza que uno que razona sobre situaciones nuevas o hace predicciones más allá de su distribución de entrenamiento.

Los usuarios no pueden calibrar su confianza sin información sobre la incertidumbre. O confían demasiado (tratando todas las salidas como fiables) o confían demasiado poco (tratando todas las salidas como sospechosas). Ninguna de las dos respuestas es apropiada. La confianza calibrada requiere saber cuándo confiar y cuándo verificar.

### Decisiones de alto riesgo

Cuando las salidas de la IA informan decisiones trascendentes, como diagnósticos médicos, juicios legales o recomendaciones de políticas, los riesgos de los errores son altos. Los responsables de las decisiones necesitan saber no solo qué piensa la IA, sino cuán segura está.

Un diagnóstico con un 95% de confianza justifica una acción diferente a uno con un 50% de confianza. Pero si ambos se presentan de manera idéntica, los responsables de las decisiones no pueden aplicar la cautela apropiada.

### Detección de fallos

Los sistemas de IA fallan de maneras que no siempre son obvias. Las alucinaciones, el desplazamiento distribucional y la manipulación adversaria pueden producir salidas que parecen normales pero no son fiables.

Las señales de incertidumbre pueden marcar fallos potenciales. Los patrones de incertidumbre inusuales, como alta incertidumbre en preguntas supuestamente fáciles, o baja incertidumbre en preguntas fuera de los datos de entrenamiento, pueden indicar problemas que vale la pena investigar.

### Gobernanza reflexiva

Para que los sistemas de IA participen en su propia gobernanza, deben tener alguna representación de su propia fiabilidad. Un sistema que no modela su incertidumbre no puede informar con precisión cuándo está operando fuera de su competencia.

Esto se conecta con las capacidades de automonitoreo que exploramos en [¿pueden los sistemas de IA detectar su propio uso indebido?](/research/011-reflexive-misuse-detection/). La conciencia de la incertidumbre es una precondición para los sistemas que monitorean su propio comportamiento.

## Enfoques técnicos

Varios enfoques pueden habilitar la comunicación de la incertidumbre.

### Salidas probabilísticas

Algunos modelos pueden producir distribuciones de probabilidad en lugar de estimaciones puntuales. En lugar de decir "la respuesta es X", el modelo dice "la probabilidad de X es 0,8, de Y es 0,15 y de Z es 0,05."

Esto funciona bien para tareas de clasificación y preguntas cerradas. Para la generación abierta, es más difícil; no existe una distribución de probabilidad natural sobre todas las posibles salidas de texto.

Los métodos de conjunto, que ejecutan múltiples modelos o múltiples muestras y examinan la concordancia, pueden aproximar la incertidumbre incluso para modelos generativos. Si 8 de 10 muestras coinciden en una respuesta, eso sugiere mayor confianza que si todas difieren.

### Puntuaciones de confianza

Los modelos pueden entrenarse o instruirse para producir estimaciones explícitas de confianza junto con sus salidas. "Tengo un 90% de confianza en esta respuesta" o "Confianza baja: por favor, verifique."

El desafío es la calibración. La confianza autoinformada debe correlacionarse con la precisión real para ser útil. Los modelos pueden entrenarse para una mejor calibración, pero lograr una calibración fiable, especialmente en consultas fuera de distribución, sigue siendo difícil.

### Marcadores epistémicos

El lenguaje natural en sí contiene marcadores de incertidumbre: "probablemente", "parece que", "no estoy seguro, pero", "las fuentes sugieren". Entrenar modelos para usar estos marcadores apropiadamente es una forma de comunicación de la incertidumbre.

Este enfoque es más natural para los modelos de lenguaje y no requiere cambios arquitectónicos. Pero también es menos preciso: "probablemente" podría significar 60% o 95%, y depende de un entrenamiento que recompense la moderación apropiada.

### Atribución de fuentes

En lugar de comunicar la incertidumbre directamente, los modelos pueden citar fuentes, señalando de dónde proviene la información. Los usuarios pueden entonces evaluar la fiabilidad basándose en la calidad de la fuente.

Esto desplaza la evaluación de la incertidumbre a los usuarios, lo cual puede o no ser apropiado. Funciona bien para afirmaciones fácticas con fuentes citables, pero menos bien para síntesis, razonamiento o afirmaciones sin fuentes claras.

### Metadatos de incertidumbre

Las salidas pueden etiquetarse con metadatos de incertidumbre estructurados, no solo el contenido, sino información sobre cuán seguro está el sistema, qué tipo de incertidumbre se aplica y qué factores contribuyen a ella.

Esto se conecta con nuestro trabajo sobre [etiquetado de procedencia de salidas](/research/012-output-provenance/). Así como los metadatos de procedencia rastrean de dónde proviene el contenido, los metadatos de incertidumbre rastrean cuán fiable es.

## Tipos de incertidumbre

No toda la incertidumbre es igual. Distinguir tipos permite una comunicación más informativa.

### Incertidumbre aleatoria

Aleatoriedad inherente en el fenómeno que se modela. Incluso con conocimiento perfecto, los resultados son estocásticos. "La moneda tiene un 50% de probabilidad de caer en cara."

Esta incertidumbre no puede reducirse con más datos o mejores modelos. Es una propiedad del mundo, no una limitación del sistema.

### Incertidumbre epistémica

Incertidumbre debida al conocimiento limitado. "No tengo suficiente información para responder esto con confianza." Podría reducirse con más datos de entrenamiento, más capacidad computacional o acceso a fuentes relevantes.

La incertidumbre epistémica señala que el sistema está operando cerca de los límites de su conocimiento; las salidas podrían no ser fiables y la verificación está justificada.

### Incertidumbre del modelo

Incertidumbre sobre si la estructura del modelo es apropiada para la tarea. Un modelo de lenguaje al que se le pide predecir el plegamiento de proteínas puede ser fundamentalmente inadecuado para la tarea, independientemente de sus datos de entrenamiento.

Esta es una forma de incertidumbre epistémica pero merece un tratamiento separado; sugiere no solo falta de conocimiento sino falta de capacidad apropiada.

### Desplazamiento distribucional

Incertidumbre que surge cuando las condiciones de despliegue difieren de las de entrenamiento. Un modelo entrenado con texto formal puede estar inseguro ante el argot. Un modelo entrenado con datos de 2022 puede estar inseguro ante eventos de 2026.

Detectar y comunicar el desplazamiento distribucional es particularmente importante porque a menudo se correlaciona con una fiabilidad degradada.

## Integración en la gobernanza

La comunicación de la incertidumbre debería integrarse en los mecanismos de gobernanza.

### Umbrales y activadores

Los marcos de gobernanza pueden especificar niveles mínimos de confianza para diferentes tipos de salidas. Las aplicaciones médicas podrían requerir un 95% de confianza; la asistencia casual podría tolerar un 70%.

Las salidas por debajo del umbral activan acciones adicionales: revisión humana, advertencias a los usuarios o rechazo a proporcionar la salida. Esto hace que la incertidumbre sea accionable.

### Auditoría y monitoreo

Las señales de incertidumbre proporcionan datos para el monitoreo continuo. Los patrones de incertidumbre inusuales pueden indicar problemas: desplazamiento distribucional en el despliegue, degradación de la calidad del modelo o intentos de manipulación.

Esto se conecta con la evaluación continua que discutimos en [evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/); el monitoreo de la incertidumbre es una forma de evaluación continua de capacidades.

### Interfaces de usuario

La incertidumbre debe comunicarse de maneras que los usuarios puedan comprender. Los valores de probabilidad crudos pueden no ser informativos. La codificación por colores, las etiquetas verbales o los indicadores visuales pueden ser más accesibles.

El objetivo no es abrumar a los usuarios con información sobre la incertidumbre, sino ayudarlos a calibrar su respuesta apropiadamente. "Esta respuesta está verificada a partir de fuentes fiables" frente a "Esta es mi mejor estimación basada en información limitada."

### Documentación

Las capacidades de comunicación de la incertidumbre deberían documentarse como parte de la divulgación del modelo. Los usuarios necesitan saber no solo qué puede hacer un modelo, sino cuán bien sabe lo que sabe.

Esta es una extensión del marco de [divulgación proporcional](/research/001-proportionality-disclosure/): la divulgación debería incluir información sobre la fiabilidad, no solo sobre la capacidad.

## Desafíos y limitaciones

La comunicación de la incertidumbre enfrenta varios desafíos.

### Dificultad de calibración

Producir estimaciones de incertidumbre bien calibradas es técnicamente difícil, especialmente para modelos de lenguaje y tareas abiertas. Los modelos actuales a menudo expresan más confianza de la justificada.

Una mala calibración es peor que ninguna calibración: los usuarios que confían en puntuaciones de confianza que no se correlacionan con la precisión están siendo activamente engañados.

### Coste computacional

Muchas técnicas de estimación de la incertidumbre (conjuntos, muestreo múltiple) aumentan significativamente el coste computacional. Para despliegues con recursos limitados, esto puede ser prohibitivo.

Se necesita investigación sobre la estimación eficiente de la incertidumbre para hacer esto práctico a escala.

### Comprensión del usuario

Los usuarios pueden no comprender correctamente la probabilidad y la incertidumbre. Proporcionar un intervalo de confianza del 90% puede no transmitir el significado apropiado a usuarios sin formación estadística.

El diseño de interfaces debe tender un puente entre las representaciones técnicas de la incertidumbre y la comprensión del usuario.

### Explotación adversaria

Si los adversarios pueden observar las señales de incertidumbre, pueden usarlas para identificar debilidades del sistema, concentrando los ataques en áreas de alta incertidumbre.

Esto crea una tensión entre transparencia y seguridad, similar a la que discutimos en [sistemas de IA que explican sus restricciones](/research/026-explaining-constraints/).

## Conclusión

Los sistemas de IA que comunican su incertidumbre permiten a los usuarios calibrar la confianza, apoyan la toma de decisiones de alto riesgo y proporcionan señales para la detección de fallos. Esta capacidad es esencial para una gobernanza de la IA que tome en serio la fiabilidad.

Existen enfoques técnicos, como las salidas probabilísticas, las puntuaciones de confianza, los marcadores epistémicos y el etiquetado de metadatos, aunque la calibración sigue siendo un desafío. Diferentes tipos de incertidumbre requieren diferente tratamiento y comunicación.

El objetivo no es una cuantificación perfecta de la incertidumbre (probablemente imposible), sino una comunicación útil de la incertidumbre, que ayude a usuarios y sistemas a tomar mejores decisiones al saber cuándo las salidas son fiables y cuándo justifican cautela.

Los sistemas de IA que operan como si siempre estuvieran seguros son engañosos. Los sistemas de IA que comunican su incertidumbre honestamente son dignos de confianza. Esta distinción importa para la gobernanza.

## Investigación relacionada

- [¿Pueden los sistemas de IA detectar su propio uso indebido?](/research/011-reflexive-misuse-detection/)
- [Etiquetado de procedencia de salidas](/research/012-output-provenance/)
- [Proporcionalidad en la divulgación de modelos](/research/001-proportionality-disclosure/)
- [Evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/)
- [Sistemas de IA que explican sus restricciones](/research/026-explaining-constraints/)
