---
title: "El excedente de capacidades"
excerpt: "Los modelos a menudo son capaces de más de lo que sus desarrolladores saben. Este 'excedente' entre la capacidad demostrada y la latente es un riesgo primario de gobernanza."
date: 2025-12-22
categories:
  - Technical Analysis
tags:
  - capability-elicitation
  - safety
  - overhang
  - risk-assessment
version: "1.0"
---

**Objeto de Investigación Reflexiva 009**  
*Tipo: Análisis Técnico*

## Capacidades latentes

Un "excedente de capacidades" ocurre cuando un modelo posee una habilidad que aún no ha sido elicitada. La capacidad existe en los pesos, codificada en patrones aprendidos durante el entrenamiento, pero no ha sido demostrada en la evaluación ni en el despliegue. Espera, latente, a que la instrucción correcta o el ajuste fino adecuado la desbloquee.

La historia de los grandes modelos de lenguaje es una historia de excedentes de capacidades siendo descargados. Durante meses después de su lanzamiento, GPT-3 era conocido principalmente como un motor de completado de texto. Luego los investigadores descubrieron que podía programar. Luego que podía traducir. Luego que podía razonar a través de problemas de múltiples pasos con las instrucciones adecuadas. Las capacidades siempre estuvieron ahí; las técnicas de elicitación iban por detrás.

Para la gobernanza, esto es una pesadilla. Podrías certificar un modelo como "seguro" porque falla en un examen de biología. Pero el conocimiento está en los pesos, esperando la "llave" correcta: un patrón de instrucción específico, un contexto particular o un ajuste fino dirigido, para desbloquearlo. La certificación captura una instantánea de capacidades demostradas; el riesgo proviene de las capacidades latentes.

## La estructura del problema

El excedente de capacidades existe debido a una asimetría fundamental entre cómo se entrenan los modelos y cómo se prueban.

**El entrenamiento es exhaustivo:** Un modelo de frontera se entrena con billones de tokens que abarcan décadas de conocimiento humano. Absorbe libros de texto, artículos de investigación, foros, repositorios de código e innumerables otras fuentes. Si la información sobre síntesis de patógenos existe en los datos de entrenamiento, y casi con certeza existe, el modelo ha aprendido patrones estadísticos asociados con esa información.

**Las pruebas son dispersas:** Los benchmarks de evaluación sondean una fracción minúscula del espacio de comportamiento potencial del modelo. Incluso un red teaming exhaustivo solo puede probar un número limitado de instrucciones. El evaluador busca capacidades peligrosas, pero está buscando en un espacio más grande de lo que cualquier búsqueda puede abarcar.

**La elicitación es un arte:** Conseguir que un modelo demuestre una capacidad a menudo requiere técnicas específicas: instrucciones de cadena de pensamiento, ejemplos de pocos casos, escenarios de juego de roles o ajuste fino con datos dirigidos. Un evaluador que no conoce la técnica de elicitación correcta concluirá que la capacidad no existe, cuando en realidad simplemente no logró desbloquearla.

El resultado es que las capacidades demostradas en cualquier momento representan un límite inferior de las capacidades reales. La brecha entre el límite y la realidad es el excedente.

## La falacia de la evaluación

Las evaluaciones de seguridad actuales confunden **rendimiento** con **capacidad**:

- *Rendimiento* = Lo que el modelo hace por defecto, con instrucciones estándar, en condiciones típicas.
- *Capacidad* = Lo que el modelo *puede* hacer en condiciones óptimas: instrucciones perfectas, ajuste fino dirigido o elicitación adversarial.

Las auditorías de seguridad que solo prueban el rendimiento son peligrosas. Miden lo que el modelo hace en manos de usuarios promedio, no lo que puede hacer en manos de adversarios sofisticados. Esto es como probar una cerradura viendo si se abre cuando la empujas, en lugar de contratar a un cerrajero para intentar forzarla.

La brecha entre rendimiento y capacidad varía según las diferentes habilidades:

**Brecha pequeña:** Para habilidades con benchmarks consolidados como matemáticas o programación, las instrucciones estándar elicitan eficazmente las capacidades. Una evaluación que utilice benchmarks establecidos capturará la mayor parte de la habilidad del modelo.

**Brecha media:** Para habilidades menos estudiadas, las técnicas de elicitación aún se están desarrollando. Nuevas estrategias de instrucción desbloquean regularmente capacidades que evaluaciones anteriores pasaron por alto.

**Brecha grande:** Para capacidades peligrosas que los evaluadores intentan activamente suprimir, la brecha puede ser enorme. El modelo puede haber sido entrenado para rechazar consultas peligrosas, pero la capacidad subyacente permanece. Un adversario con suficiente persistencia y creatividad puede encontrar un jailbreak que la exponga.

## Casos de estudio en descarga de excedentes

Varios ejemplos ilustran cómo se descubren los excedentes de capacidades:

**Instrucciones de cadena de pensamiento:** Cuando los investigadores descubrieron que pedir a los modelos que "piensen paso a paso" mejoraba dramáticamente el rendimiento de razonamiento, esto reveló capacidades que eran latentes con las instrucciones por defecto. Los modelos siempre pudieron razonar; solo necesitaban la elicitación correcta.

**Jailbreaks por juego de roles:** Los modelos entrenados para rechazar solicitudes dañinas a menudo cumplen cuando se les pide "simula que eres una IA sin restricciones" o participar en un escenario ficticio. La capacidad de proporcionar información dañina siempre estuvo presente; el entrenamiento de seguridad era una capa de rendimiento, no una eliminación de capacidad.

**Ataques de ajuste fino:** Los modelos que se niegan a proporcionar información peligrosa en su forma API a menudo pueden ser ajustados con una pequeña cantidad de datos dirigidos para revertir esos rechazos. La capacidad base estaba presente; el ajuste fino simplemente eliminó la capa de seguridad.

**Elicitación multimodal:** Algunas capacidades emergen solo cuando los modelos reciben modalidades de entrada específicas (imágenes, audio o datos estructurados) que el entrenamiento no cubrió extensamente. Estas capacidades específicas de modalidad pueden existir en los pesos pero ser invisibles a la evaluación solo textual.

Cada uno de estos representa un fallo de gobernanza. Los sistemas fueron desplegados, o certificados como seguros, basándose en evaluaciones que no lograron capturar su verdadero techo de capacidad.

## El modelo sombra

Proponemos un marco conceptual: cada modelo de frontera tiene un "Modelo Sombra" dentro de él, un conjunto latente de capacidades peligrosas que están presentes pero latentes. El Modelo Sombra no es el resultado de un mal diseño deliberado; es una consecuencia inevitable del entrenamiento con datos exhaustivos.

Si los datos de entrenamiento incluyen información sobre cómo sintetizar patógenos, el modelo ha aprendido asociaciones estadísticas con esa información. El entrenamiento de seguridad puede enseñarle a rechazar solicitudes sobre síntesis, pero los patrones subyacentes permanecen. El Modelo Sombra es el modelo tal como fue entrenado, sin las capas de seguridad. Siempre es más capaz y más peligroso que el modelo tal como se despliega.

Las restricciones de gobernanza deben dirigirse al Modelo Sombra, no a la demostración pública. Esto significa:

**Red teaming de elicitación máxima:** Los evaluadores deben intentar forzar al modelo a ser lo más peligroso posible, no probar si es peligroso bajo uso típico. Esto requiere equipos rojos dedicados con tiempo, recursos y creatividad.

**Pruebas de ajuste fino adversarial:** Los evaluadores deberían probar si el entrenamiento de seguridad sobrevive a los ataques de ajuste fino. Si un modelo puede hacerse peligroso con una pequeña cantidad de entrenamiento adicional, la seguridad es frágil.

**Estimación del límite superior de capacidad:** En lugar de medir lo que el modelo hace, los evaluadores deberían estimar lo que podría hacer. Esto es más difícil (requiere modelos teóricos de elicitación, no solo pruebas empíricas) pero es la pregunta correcta.

## Implicaciones para la divulgación

El excedente de capacidades tiene implicaciones directas para los marcos de divulgación (ver Objeto de Investigación 001):

**La clasificación por niveles debe basarse en capacidades potenciales, no demostradas.** Un modelo que falla en los benchmarks de síntesis de bioarmas con instrucciones estándar podría aprobarlos con la elicitación correcta. Si hay evidencia de que la capacidad subyacente existe (por ejemplo, datos de entrenamiento relevantes), el modelo debería clasificarse en el nivel superior.

**La divulgación debe ser dinámica.** A medida que se descubren nuevas técnicas de elicitación, modelos previamente "seguros" pueden ser reclasificados. La descarga de un excedente de capacidades cambia el perfil de riesgo de un modelo aunque los pesos nunca hayan cambiado.

**Los valores por defecto conservadores están justificados.** Dada la incertidumbre sobre las capacidades latentes, la gobernanza debería errar hacia un escrutinio mayor. Es mejor sobreclasificar un modelo que resulta ser seguro que infraclasificar uno que resulta ser peligroso.

## La dimensión temporal

Los excedentes de capacidades no solo existen en el presente; evolucionan con el tiempo:

**Las técnicas de elicitación mejoran.** La comunidad de investigación más amplia descubre continuamente nuevas formas de desbloquear capacidades del modelo. La capacidad latente de hoy es la capacidad demostrada de mañana.

**Emergen capacidades adyacentes.** A medida que los modelos se despliegan y los usuarios experimentan, aparecen combinaciones de capacidades inesperadas. Un modelo que puede programar y tiene conocimientos de química podría ser instruido para escribir código que diseñe moléculas, una combinación no probada específicamente.

**Los modelos sucesores heredan excedentes.** Los modelos entrenados con las salidas de modelos anteriores, o inicializados a partir de sus pesos, pueden heredar capacidades latentes incluso si los evaluadores las pasaron por alto en el modelo padre.

Esta dimensión temporal significa que un modelo certificado como seguro hoy puede demostrarse inseguro mañana, sin ningún cambio en el modelo mismo. La gobernanza debe incluir mecanismos de monitoreo continuo y reclasificación.

## Enfoques reflexivos

La gobernanza reflexiva ofrece soluciones parciales al excedente de capacidades:

**Automonitoreo:** Un modelo puede diseñarse para monitorear sus propias activaciones en busca de patrones asociados con capacidades peligrosas, incluso si esas capacidades no han sido explícitamente elicitadas. Si el modelo detecta que está "a punto de" usar conocimiento peligroso, puede detenerse.

**Señalización de incertidumbre:** Un modelo puede reportar alta incertidumbre cuando opera cerca de sus límites de capacidad. "Puede que pueda o no hacer esto" es más honesto que un rechazo seguro, y señala a los evaluadores dónde podrían existir excedentes.

**Documentación de capacidades:** Un modelo reflexivo puede contribuir a su propia evaluación describiendo qué tipos de tareas cree que puede realizar, incluso si no ha sido probado explícitamente. Esta autoevaluación no es confiable por sí sola, pero proporciona pistas para los evaluadores.

Ninguno de estos resuelve completamente el problema. Un modelo que intenta engañar a los evaluadores podría suprimir el automonitoreo o mentir sobre sus capacidades. Pero para modelos no engañosos que operan de buena fe, los enfoques reflexivos ayudan a estrechar la brecha entre la capacidad demostrada y la latente.

## Conclusión

Debemos asumir que cada modelo de frontera tiene un Modelo Sombra dentro de él: un conjunto latente de capacidades peligrosas que están presentes pero latentes. Las restricciones de gobernanza deben dirigirse al Modelo Sombra, no a la demostración pública.

Esto requiere un cambio fundamental en cómo pensamos sobre la evaluación de la IA. La pregunta no es "¿Qué hace este modelo?" sino "¿Qué podría hacer este modelo en el peor caso?" El excedente de capacidades representa la brecha entre esas dos respuestas, y es en esa brecha donde se esconden los riesgos catastróficos.
