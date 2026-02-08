---
title: "Gobernanza del cómputo: promesas y límites"
excerpt: "El cómputo es uno de los pocos insumos medibles del desarrollo de IA. Gobernar en la capa de cómputo es atractivo pero enfrenta desafíos significativos. Una evaluación honesta."
date: 2026-01-05
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - compute
  - governance
  - regulation
  - safety
  - enforcement
---

## El atractivo del cómputo

De los tres insumos de la IA moderna --datos, algoritmos y cómputo-- el cómputo es el más medible. Las ejecuciones de entrenamiento se pueden cuantificar en FLOPs. Los clusters de GPU se pueden contar. El consumo de energía se puede monitorear.

Esta medibilidad hace del cómputo un objetivo atractivo para la gobernanza. En lugar de intentar regular capacidades intangibles o comportamientos ambiguos, se regulan los recursos físicos que los habilitan. Saber dónde se están realizando grandes ejecuciones de entrenamiento. Requerir notificación por encima de ciertos umbrales. Quizá incluso licenciar el acceso al cómputo de escala frontera.

El atractivo es comprensible. La gobernanza de la IA lucha con la dificultad de medir y verificar capacidades --un desafío que exploramos en [el problema del excedente de capacidades](/research/009-capability-overhang/). El cómputo ofrece algo de lo que la gobernanza generalmente carece: un insumo concreto y cuantificable.

Pero la gobernanza del cómputo también tiene limitaciones significativas. Este análisis examina tanto la promesa como los límites.

## Qué puede hacer la gobernanza del cómputo

La gobernanza del cómputo puede servir a varios propósitos legítimos.

### Visibilidad

Los gobiernos actualmente tienen una perspectiva limitada sobre quien está entrenando grandes modelos de IA. El monitoreo del cómputo proporciona visibilidad. Los requisitos de registrar grandes ejecuciones de entrenamiento, o de notificar a los reguladores cuando el uso de cómputo excede umbrales, crean conciencia de la actividad de desarrollo frontera.

Esta visibilidad tiene valor intrínseco. La gobernanza es imposible si los reguladores no saben qué está sucediendo. Incluso si el monitoreo del cómputo no restringe el desarrollo, habilita otros mecanismos de gobernanza al revelar quién está desarrollando qué.

### Puntos de control

La cadena de suministro de cómputo avanzado para IA está concentrada. Solo unas pocas empresas fabrican GPU de vanguardia. Solo unos pocos proveedores de nube ofrecen infraestructura de IA a gran escala. Estos puntos de control permiten intervenciones de gobernanza que serían imposibles para recursos más distribuidos.

Los controles de exportación de chips avanzados ya son un ejemplo de gobernanza del cómputo. Al restringir los flujos de chips a ciertos países o entidades, los gobiernos pueden influir en quién tiene acceso a los recursos de desarrollo de IA frontera.

### Mecanismo de aplicación

Los requisitos de cómputo crean una palanca de aplicación. Si se violan otras regulaciones de IA, el acceso al cómputo puede restringirse. Se puede requerir que los proveedores de nube verifiquen que los clientes cumplan con los requisitos regulatorios antes de proporcionar recursos de escala frontera.

Esto refleja cómo las regulaciones financieras usan el acceso bancario como mecanismo de aplicación. Las entidades que violan las reglas pierden acceso al sistema financiero. De manera similar, las entidades que violen los requisitos de seguridad de la IA podrían perder acceso al cómputo.

### Activadores de umbral

Los umbrales de cómputo pueden activar requisitos adicionales de supervisión. La Ley de IA de la UE, por ejemplo, usa el cómputo de entrenamiento (junto con otros criterios) para identificar modelos de base que requieren obligaciones más exigentes.

Esta es una forma del principio de proporcionalidad que exploramos en [proporcionalidad en la divulgación de modelos](/research/001-proportionality-disclosure/) --los sistemas más capaces enfrentan una gobernanza más intensiva.

## Los límites

La gobernanza del cómputo es atractiva pero no suficiente. Varias limitaciones restringen lo que puede lograr.

### El cómputo es un proxy

El cómputo es un proxy de la capacidad, no la capacidad en sí. La correlación entre cómputo y capacidad es imperfecta y cambiante.

Las mejoras algorítmicas pueden lograr las mismas capacidades con menos cómputo. El ajuste fino y el scaffolding pueden amplificar las capacidades del modelo base sin cómputo adicional de entrenamiento. El cómputo en tiempo de inferencia puede desbloquear capacidades que el entrenamiento puro no produjo.

Un régimen de gobernanza calibrado a umbrales de cómputo de entrenamiento puede pasar por alto capacidades peligrosas logradas mediante innovación algorítmica o arquitecturas novedosas. Peor aun, puede crear incentivos para exactamente estos enfoques eficientes en cómputo, empujando el desarrollo en direcciones que son más difíciles de monitorear.

### El problema de los umbrales

Cualquier umbral basado en cómputo será arbitrario. ¿Por qué 10^25 FLOPs y no 10^24 o 10^26? La relación entre cómputo y riesgo no es una función escalonada con un punto de ruptura claro.

Umbrales demasiado bajos capturan muchos sistemas de bajo riesgo, creando carga de cumplimiento sin beneficio de seguridad. Umbrales demasiado altos dejan pasar sistemas peligrosos que caen justo por debajo. Y cualquier umbral fijo se vuelve obsoleto a medida que la eficiencia algorítmica mejora.

### Entrenamiento distribuido

Las grandes ejecuciones de entrenamiento han requerido históricamente cómputo concentrado --clusters masivos de GPU en ubicaciones únicas. Esta concentración permite el monitoreo.

Pero las técnicas de entrenamiento distribuido están mejorando. Entrenar a través de múltiples centros de datos, o incluso a través de muchas instalaciones más pequeñas, se vuelve más factible. Si el entrenamiento puede distribuirse lo suficiente, el monitoreo basado en la concentración se vuelve ineficaz.

La tendencia hacia enfoques distribuidos puede estar impulsada por consideraciones de eficiencia en lugar de evasión de la gobernanza, pero el efecto sobre la gobernabilidad es el mismo.

### Manipulación y evasión

Las entidades que buscan evadir la gobernanza basada en cómputo tienen opciones.

Múltiples ejecuciones de entrenamiento más pequeñas que individualmente caen por debajo de los umbrales pueden combinarse de varias maneras. Los enfoques de ajuste fino pueden construirse sobre modelos base disponibles públicamente, con el paso de ajuste fino cayendo por debajo de los umbrales incluso si la capacidad efectiva es alta. El entrenamiento puede trasladarse a jurisdicciones con menos supervisión.

Parte de la evasión es técnicamente difícil. Otra es trivial. La gobernanza que depende en gran medida de los umbrales de cómputo invita a la manipulación por parte de actores sofisticados.

### Nube versus instalaciones propias

La gobernanza del cómputo es mucho más fácil para el entrenamiento basado en la nube que para el entrenamiento en instalaciones propias. Los proveedores de nube pueden regularse como intermediarios, obligados a conocer a sus clientes y hacer cumplir los requisitos.

El cómputo en instalaciones propias es más difícil de monitorear. Las grandes organizaciones pueden comprar y operar sus propios clusters de GPU sin supervisión intermediaria. Los controles de exportación pueden restringir la adquisición, pero una vez que el hardware está en su lugar, el uso es difícil de observar.

La tendencia hacia infraestructura de cómputo propietaria, impulsada en parte por preocupaciones de la cadena de suministro, complica la gobernanza que asume acceso mediado por la nube.

### Coordinación internacional

La gobernanza del cómputo requiere coordinación internacional para ser efectiva. Si una jurisdicción impone restricciones, el desarrollo puede trasladarse a otro lugar. Si los controles de exportación limitan el acceso a chips para algunos países, pueden desarrollarse cadenas de suministro alternativas.

La coordinación actual es limitada. Estados Unidos ha impuesto controles de exportación unilateralmente; otros países no necesariamente han seguido. El cómputo instalado antes de los controles sigue siendo utilizable. Y la distribución global de datos de entrenamiento significa que restringir el cómputo no restringe todos los insumos del desarrollo de IA.

Exploramos dinámicas relacionadas en [arbitraje regulatorio](/research/008-regulatory-arbitrage/). El desarrollo de IA busca caminos de menor resistencia, y la gobernanza del cómputo crea incentivos para encontrar esos caminos.

### Inferencia versus entrenamiento

La gobernanza del cómputo típicamente se centra en el entrenamiento --la fase en la que se crean los modelos. Pero la inferencia --ejecutar modelos entrenados-- también puede ser relevante para la gobernanza.

Las capacidades peligrosas existen en el momento de la inferencia, no en el del entrenamiento. Un modelo que puede asistir con tareas dañinas lo hace cuando se le consulta, independientemente de cuándo o dónde fue entrenado. Gobernar el cómputo de entrenamiento no aborda los riesgos en tiempo de inferencia.

Gobernar el cómputo de inferencia es mucho más difícil. La inferencia es distribuida, ocurre a menor escala por interacción e involucra a muchos más actores. Los enfoques de gobernanza que funcionan para el entrenamiento concentrado no se trasladan a la inferencia distribuida.

## Una evaluación realista

La gobernanza del cómputo es útil pero insuficiente. Proporciona visibilidad sobre el desarrollo frontera, crea palancas de aplicación y puede activar supervisión proporcional para grandes ejecuciones de entrenamiento.

Pero no puede ser el mecanismo único o primario para la gobernanza de seguridad de la IA. Los umbrales de cómputo son proxies que se volverán menos precisos con el tiempo. La evasión es posible. Los riesgos en tiempo de inferencia no se abordan. La coordinación internacional es limitada.

La gobernanza del cómputo debería ser parte de un enfoque por capas que incluya:

- **Evaluación basada en capacidades** para evaluar lo que los sistemas realmente pueden hacer, independientemente de cuánto cómputo se usó para crearlos
- **Monitoreo de comportamiento** en tiempo de inferencia para detectar patrones preocupantes
- **Mecanismos reflexivos** donde los sistemas mismos participan en la gobernanza, como hemos explorado en [detección reflexiva de uso indebido](/research/011-reflexive-misuse-detection/)
- **Gobernanza de la cadena de suministro** que aborde el ajuste fino, el scaffolding y otra amplificación de capacidades
- **Coordinación internacional** para limitar el arbitraje

La gobernanza del cómputo es un componente valioso de este enfoque por capas. No es un sustituto de otros mecanismos de gobernanza.

## Conclusión

La medibilidad del cómputo lo hace atractivo para la gobernanza en un dominio donde la mayoría de las cosas son difíciles de medir. Pero la medibilidad no es lo mismo que la suficiencia. La gobernanza del cómputo puede proporcionar visibilidad y palancas de aplicación, pero no puede por sí sola garantizar la seguridad de la IA.

Los escenarios de desarrollo de IA más peligrosos podrían involucrar exactamente los enfoques eficientes en cómputo que se filtran a través de los umbrales basados en cómputo. La gobernanza que depende demasiado del cómputo crea incentivos para estos enfoques.

La gobernanza efectiva de la IA debe abordar las capacidades, los comportamientos y las implementaciones, no solo los insumos. La gobernanza del cómputo es una herramienta útil en el conjunto de herramientas de gobernanza. No es una solución completa.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
