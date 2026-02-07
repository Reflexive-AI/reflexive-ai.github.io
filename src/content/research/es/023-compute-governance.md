---
title: "Gobernanza del computo: promesas y limites"
excerpt: "El computo es uno de los pocos insumos medibles del desarrollo de IA. Gobernar en la capa de computo es atractivo pero enfrenta desafios significativos. Una evaluacion honesta."
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

## El atractivo del computo

De los tres insumos de la IA moderna --datos, algoritmos y computo-- el computo es el mas medible. Las ejecuciones de entrenamiento se pueden cuantificar en FLOPs. Los clusters de GPU se pueden contar. El consumo de energia se puede monitorear.

Esta medibilidad hace del computo un objetivo atractivo para la gobernanza. En lugar de intentar regular capacidades intangibles o comportamientos ambiguos, se regulan los recursos fisicos que los habilitan. Saber donde se estan realizando grandes ejecuciones de entrenamiento. Requerir notificacion por encima de ciertos umbrales. Quiza incluso licenciar el acceso al computo de escala frontera.

El atractivo es comprensible. La gobernanza de la IA lucha con la dificultad de medir y verificar capacidades --un desafio que exploramos en [el problema del excedente de capacidades](/research/009-capability-overhang/). El computo ofrece algo de lo que la gobernanza generalmente carece: un insumo concreto y cuantificable.

Pero la gobernanza del computo tambien tiene limitaciones significativas. Este analisis examina tanto la promesa como los limites.

## Que puede hacer la gobernanza del computo

La gobernanza del computo puede servir a varios propositos legitimos.

### Visibilidad

Los gobiernos actualmente tienen una perspectiva limitada sobre quien esta entrenando grandes modelos de IA. El monitoreo del computo proporciona visibilidad. Los requisitos de registrar grandes ejecuciones de entrenamiento, o de notificar a los reguladores cuando el uso de computo excede umbrales, crean conciencia de la actividad de desarrollo frontera.

Esta visibilidad tiene valor intrinseco. La gobernanza es imposible si los reguladores no saben que esta sucediendo. Incluso si el monitoreo del computo no restringe el desarrollo, habilita otros mecanismos de gobernanza al revelar quien esta desarrollando que.

### Puntos de control

La cadena de suministro de computo avanzado para IA esta concentrada. Solo unas pocas empresas fabrican GPU de vanguardia. Solo unos pocos proveedores de nube ofrecen infraestructura de IA a gran escala. Estos puntos de control permiten intervenciones de gobernanza que serian imposibles para recursos mas distribuidos.

Los controles de exportacion de chips avanzados ya son un ejemplo de gobernanza del computo. Al restringir los flujos de chips a ciertos paises o entidades, los gobiernos pueden influir en quien tiene acceso a los recursos de desarrollo de IA frontera.

### Mecanismo de aplicacion

Los requisitos de computo crean una palanca de aplicacion. Si se violan otras regulaciones de IA, el acceso al computo puede restringirse. Se puede requerir que los proveedores de nube verifiquen que los clientes cumplan con los requisitos regulatorios antes de proporcionar recursos de escala frontera.

Esto refleja como las regulaciones financieras usan el acceso bancario como mecanismo de aplicacion. Las entidades que violan las reglas pierden acceso al sistema financiero. De manera similar, las entidades que violen los requisitos de seguridad de la IA podrian perder acceso al computo.

### Activadores de umbral

Los umbrales de computo pueden activar requisitos adicionales de supervision. La Ley de IA de la UE, por ejemplo, usa el computo de entrenamiento (junto con otros criterios) para identificar modelos de base que requieren obligaciones mas exigentes.

Esta es una forma del principio de proporcionalidad que exploramos en [proporcionalidad en la divulgacion de modelos](/research/001-proportionality-disclosure/) --los sistemas mas capaces enfrentan una gobernanza mas intensiva.

## Los limites

La gobernanza del computo es atractiva pero no suficiente. Varias limitaciones restringen lo que puede lograr.

### El computo es un proxy

El computo es un proxy de la capacidad, no la capacidad en si. La correlacion entre computo y capacidad es imperfecta y cambiante.

Las mejoras algoritmicas pueden lograr las mismas capacidades con menos computo. El ajuste fino y el scaffolding pueden amplificar las capacidades del modelo base sin computo adicional de entrenamiento. El computo en tiempo de inferencia puede desbloquear capacidades que el entrenamiento puro no produjo.

Un regimen de gobernanza calibrado a umbrales de computo de entrenamiento puede pasar por alto capacidades peligrosas logradas mediante innovacion algoritmica o arquitecturas novedosas. Peor aun, puede crear incentivos para exactamente estos enfoques eficientes en computo, empujando el desarrollo en direcciones que son mas dificiles de monitorear.

### El problema de los umbrales

Cualquier umbral basado en computo sera arbitrario. Por que 10^25 FLOPs y no 10^24 o 10^26? La relacion entre computo y riesgo no es una funcion escalonada con un punto de ruptura claro.

Umbrales demasiado bajos capturan muchos sistemas de bajo riesgo, creando carga de cumplimiento sin beneficio de seguridad. Umbrales demasiado altos dejan pasar sistemas peligrosos que caen justo por debajo. Y cualquier umbral fijo se vuelve obsoleto a medida que la eficiencia algoritmica mejora.

### Entrenamiento distribuido

Las grandes ejecuciones de entrenamiento han requerido historicamente computo concentrado --clusters masivos de GPU en ubicaciones unicas. Esta concentracion permite el monitoreo.

Pero las tecnicas de entrenamiento distribuido estan mejorando. Entrenar a traves de multiples centros de datos, o incluso a traves de muchas instalaciones mas pequenas, se vuelve mas factible. Si el entrenamiento puede distribuirse lo suficiente, el monitoreo basado en la concentracion se vuelve ineficaz.

La tendencia hacia enfoques distribuidos puede estar impulsada por consideraciones de eficiencia en lugar de evasion de la gobernanza, pero el efecto sobre la gobernabilidad es el mismo.

### Manipulacion y evasion

Las entidades que buscan evadir la gobernanza basada en computo tienen opciones.

Multiples ejecuciones de entrenamiento mas pequenas que individualmente caen por debajo de los umbrales pueden combinarse de varias maneras. Los enfoques de ajuste fino pueden construirse sobre modelos base disponibles publicamente, con el paso de ajuste fino cayendo por debajo de los umbrales incluso si la capacidad efectiva es alta. El entrenamiento puede trasladarse a jurisdicciones con menos supervision.

Parte de la evasion es tecnicamente dificil. Otra es trivial. La gobernanza que depende en gran medida de los umbrales de computo invita a la manipulacion por parte de actores sofisticados.

### Nube versus instalaciones propias

La gobernanza del computo es mucho mas facil para el entrenamiento basado en la nube que para el entrenamiento en instalaciones propias. Los proveedores de nube pueden regularse como intermediarios, obligados a conocer a sus clientes y hacer cumplir los requisitos.

El computo en instalaciones propias es mas dificil de monitorear. Las grandes organizaciones pueden comprar y operar sus propios clusters de GPU sin supervision intermediaria. Los controles de exportacion pueden restringir la adquisicion, pero una vez que el hardware esta en su lugar, el uso es dificil de observar.

La tendencia hacia infraestructura de computo propietaria, impulsada en parte por preocupaciones de la cadena de suministro, complica la gobernanza que asume acceso mediado por la nube.

### Coordinacion internacional

La gobernanza del computo requiere coordinacion internacional para ser efectiva. Si una jurisdiccion impone restricciones, el desarrollo puede trasladarse a otro lugar. Si los controles de exportacion limitan el acceso a chips para algunos paises, pueden desarrollarse cadenas de suministro alternativas.

La coordinacion actual es limitada. Estados Unidos ha impuesto controles de exportacion unilateralmente; otros paises no necesariamente han seguido. El computo instalado antes de los controles sigue siendo utilizable. Y la distribucion global de datos de entrenamiento significa que restringir el computo no restringe todos los insumos del desarrollo de IA.

Exploramos dinamicas relacionadas en [arbitraje regulatorio](/research/008-regulatory-arbitrage/). El desarrollo de IA busca caminos de menor resistencia, y la gobernanza del computo crea incentivos para encontrar esos caminos.

### Inferencia versus entrenamiento

La gobernanza del computo tipicamente se centra en el entrenamiento --la fase en la que se crean los modelos. Pero la inferencia --ejecutar modelos entrenados-- tambien puede ser relevante para la gobernanza.

Las capacidades peligrosas existen en el momento de la inferencia, no en el del entrenamiento. Un modelo que puede asistir con tareas daninas lo hace cuando se le consulta, independientemente de cuando o donde fue entrenado. Gobernar el computo de entrenamiento no aborda los riesgos en tiempo de inferencia.

Gobernar el computo de inferencia es mucho mas dificil. La inferencia es distribuida, ocurre a menor escala por interaccion e involucra a muchos mas actores. Los enfoques de gobernanza que funcionan para el entrenamiento concentrado no se trasladan a la inferencia distribuida.

## Una evaluacion realista

La gobernanza del computo es util pero insuficiente. Proporciona visibilidad sobre el desarrollo frontera, crea palancas de aplicacion y puede activar supervision proporcional para grandes ejecuciones de entrenamiento.

Pero no puede ser el mecanismo unico o primario para la gobernanza de seguridad de la IA. Los umbrales de computo son proxies que se volveran menos precisos con el tiempo. La evasion es posible. Los riesgos en tiempo de inferencia no se abordan. La coordinacion internacional es limitada.

La gobernanza del computo deberia ser parte de un enfoque por capas que incluya:

- **Evaluacion basada en capacidades** para evaluar lo que los sistemas realmente pueden hacer, independientemente de cuanto computo se uso para crearlos
- **Monitoreo de comportamiento** en tiempo de inferencia para detectar patrones preocupantes
- **Mecanismos reflexivos** donde los sistemas mismos participan en la gobernanza, como hemos explorado en [deteccion reflexiva de uso indebido](/research/011-reflexive-misuse-detection/)
- **Gobernanza de la cadena de suministro** que aborde el ajuste fino, el scaffolding y otra amplificacion de capacidades
- **Coordinacion internacional** para limitar el arbitraje

La gobernanza del computo es un componente valioso de este enfoque por capas. No es un sustituto de otros mecanismos de gobernanza.

## Conclusion

La medibilidad del computo lo hace atractivo para la gobernanza en un dominio donde la mayoria de las cosas son dificiles de medir. Pero la medibilidad no es lo mismo que la suficiencia. La gobernanza del computo puede proporcionar visibilidad y palancas de aplicacion, pero no puede por si sola garantizar la seguridad de la IA.

Los escenarios de desarrollo de IA mas peligrosos podrian involucrar exactamente los enfoques eficientes en computo que se filtran a traves de los umbrales basados en computo. La gobernanza que depende demasiado del computo crea incentivos para estos enfoques.

La gobernanza efectiva de la IA debe abordar las capacidades, los comportamientos y las implementaciones, no solo los insumos. La gobernanza del computo es una herramienta util en el conjunto de herramientas de gobernanza. No es una solucion completa.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
