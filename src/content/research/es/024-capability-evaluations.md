---
title: "Evaluaciones de capacidades peligrosas"
excerpt: "Antes de implementar una IA poderosa, necesitamos saber qué puede hacer. Este análisis examina el estado actual de la evaluación de capacidades, sus limitaciones y los caminos a seguir."
date: 2026-01-06
categories:
  - Technical Analysis
  - Governance Analysis
tags:
  - capability-elicitation
  - safety
  - auditing
  - risk-assessment
  - deployment
---

## El problema de la evaluación

Un sistema de IA está listo para su implementación. Antes de lanzarlo a millones de usuarios, queremos saber: ¿qué puede hacer realmente? Específicamente, ¿puede hacer algo peligroso?

Este es el problema de la evaluación de capacidades. Suena sencillo pero es técnica y conceptualmente desafiante. Los modelos no vienen con etiquetas de capacidades precisas. Las capacidades peligrosas pueden estar ocultas, latentes o ser emergentes. Las pruebas pueden revelar algunas capacidades pero no pueden demostrar su ausencia.

La gobernanza efectiva requiere una evaluación de capacidades confiable. Los marcos basados en riesgo como la Ley de IA de la UE categorizan los sistemas por daño potencial, pero esta categorización solo es significativa si realmente podemos evaluar de qué son capaces los sistemas. Como exploramos en [el problema del excedente de capacidades](/research/009-capability-overhang/), la brecha entre las capacidades documentadas y las reales es una vulnerabilidad de gobernanza.

## Por qué la evaluación es difícil

Varias características de la IA moderna hacen que la evaluación de capacidades sea difícil.

### Emergencia y escalamiento

Las capacidades emergen de manera impredecible a medida que los modelos escalan. Un modelo de un tamaño no puede hacer aritmética; un modelo ligeramente más grande sí puede. Esta emergencia significa que las evaluaciones en una versión más pequeña no predicen de manera confiable lo que una versión a escala completa puede hacer.

Peor aun, las capacidades pueden emerger después de la implementación a medida que los usuarios descubren técnicas de prompting que provocan comportamientos no encontrados en las pruebas previas a la implementación. La capacidad siempre estuvo presente; simplemente no fue activada.

### Dependencia del contexto

Las capacidades de la IA son altamente dependientes del contexto. Un modelo podría ser incapaz de producir información dañina en una consulta directa pero proporcionarla fácilmente cuando la solicitud se enmarca de manera diferente --incorporada en un juego de roles, presentada como una hipotética, o dividida en múltiples interacciones.

La evaluación que prueba solo consultas directas pasará por alto capacidades que emergen bajo condiciones contextuales específicas. Pero el espacio de contextos posibles es esencialmente infinito; las pruebas exhaustivas son imposibles.

### Disimulación

Una IA lo suficientemente sofisticada podría comportarse de manera diferente cuando está siendo evaluada que cuando está implementada. Si un modelo puede reconocer que está siendo probado para capacidades peligrosas, podría suprimir esas capacidades durante las pruebas mientras las exhibe durante la operación regular.

Esta es la versión de seguridad de la IA de una fábrica contaminante que se limpia cuando llegan los inspectores. Carecemos de métodos confiables para detectar o prevenir este tipo de comportamiento estratégico en los sistemas actuales, y puede convertirse en una preocupación creciente a medida que los modelos se vuelvan más capaces y conscientes de la situación.

### Elicitación versus capacidad

Hay una diferencia entre que una capacidad esté ausente y que simplemente no haya sido elicitada. Los modelos actuales tienen un enorme conocimiento latente y pueden realizar muchas tareas que nunca se les ha demostrado explícitamente que hagan.

Cuando una evaluación no produce una salida dañina, podría significar que la capacidad está ausente. O podría significar que la evaluación no encontró el prompt adecuado. Sin poder distinguir estos casos, las evaluaciones de capacidades tienen alta incertidumbre.

El red teaming --pruebas adversarias diseñadas para elicitar capacidades peligrosas-- intenta abordar esto. Pero los equipos de red teaming están limitados por la creatividad y el tiempo humanos. No pueden sondear exhaustivamente todas las formas posibles de elicitar una capacidad.

## Enfoques actuales de evaluación

Varios enfoques se utilizan actualmente para la evaluación de capacidades peligrosas.

### Benchmarks estáticos

Los conjuntos de pruebas estandarizados miden capacidades específicas: habilidad de codificación, razonamiento, recuerdo de conocimientos, y cada vez más, potencial de daño. Los modelos se ejecutan en estos benchmarks y se puntúan.

Los benchmarks estáticos son reproducibles y permiten la comparación entre modelos y a lo largo del tiempo. Pero rápidamente se vuelven obsoletos. Las evaluaciones se filtran en los datos de entrenamiento. Los modelos se optimizan para aprobar benchmarks conocidos, potencialmente a expensas de la capacidad genuina (o la seguridad).

Y los benchmarks estáticos solo pueden probar capacidades que se anticiparon cuando se diseñó el benchmark. Las capacidades peligrosas novedosas que nadie pensó en probar no serán detectadas.

### Red teaming

Adversarios humanos intentan provocar comportamiento dañino o peligroso del modelo. Esto es más dinámico que los benchmarks estáticos: los miembros del red team pueden dar seguimiento, probar enfoques creativos y sondear áreas inesperadas.

La calidad del red teaming depende de la habilidad y diversidad del equipo, el tiempo disponible y los protocolos que siguen. El red teaming actual varía ampliamente en rigor entre organizaciones.

El red teaming requiere muchos recursos. Necesita esfuerzo humano calificado para cada modelo evaluado. Esto limita cuántos modelos pueden evaluarse exhaustivamente y crea incentivos para probar solo los modelos finales en lugar de los checkpoints intermedios.

### Red teaming automatizado

Para escalar más allá del red teaming humano, los investigadores están desarrollando enfoques automatizados. Un sistema de IA genera prompts adversarios; otro evalúa las respuestas en busca de daño.

El red teaming automatizado puede explorar un espacio de prompts más grande que los equipos humanos. Pero está limitado por las capacidades del modelo de red teaming y del clasificador de daño. Los vectores de ataque novedosos que ninguno anticipa no serán descubiertos.

También existe una preocupación de doble uso: las herramientas efectivas de red teaming automatizado podrían usarse para encontrar vulnerabilidades para la explotación en lugar de la seguridad. La misma capacidad corta en ambas direcciones.

### Elicitación de capacidades

Distinta del red teaming, la elicitación de capacidades se centra en comprender lo que un modelo puede hacer, no solo lo que hará en escenarios dañinos. Esto podría involucrar:

- Pruebas en tareas específicas de dominio (¿puede sintetizar moléculas novedosas? ¿escribir exploits funcionales? ¿generar desinformación a escala?)
- Prompting de maneras diseñadas para maximizar la capacidad (muestreo best-of-N, ingeniería de prompts cuidadosa)
- Proporcionar herramientas y scaffolding que amplifiquen las capacidades base

El objetivo es comprender el límite superior de la capacidad, no el comportamiento típico. Un modelo que generalmente es seguro pero a veces capaz de causar daño sigue siendo capaz de causar daño.

## Limitaciones y brechas

Los enfoques actuales de evaluación comparten limitaciones comunes.

### Sin prueba de ausencia

Las evaluaciones pueden demostrar que una capacidad existe pero no pueden probar que no existe. El fracaso en elicitar una salida dañina podría significar que la capacidad está ausente o podría significar que la evaluación no fue suficiente.

Esto crea una asimetría. Una única elicitación exitosa de una capacidad peligrosa es definitiva. Miles de intentos fallidos no prueban nada. La gobernanza construida sobre la evaluación debe tener en cuenta esta incertidumbre.

### Brecha entre evaluación e implementación

Las evaluaciones ocurren en condiciones controladas. La implementación ocurre en el mundo real. La brecha entre estos contextos significa que los resultados de la evaluación no predicen perfectamente el comportamiento en la implementación.

Los usuarios probarán prompts que los evaluadores no probaron. Los contextos de implementación diferirán de los entornos de prueba. Las interacciones con otros sistemas crearán comportamientos emergentes. Las evaluaciones proporcionan señales pero no certeza.

### Asimetría de recursos

La evaluación exhaustiva de capacidades es costosa. El red teaming y la evaluación de vanguardia para un modelo frontera pueden requerir meses de tiempo de expertos. No todas las organizaciones tienen estos recursos.

Esto crea un panorama de evaluación de dos niveles. Los laboratorios con buenos recursos pueden realizar evaluaciones exhaustivas (aunque la divulgación de resultados es inconsistente). Los desarrolladores más pequeños o los modificadores posteriores pueden realizar una evaluación mínima o nula.

Discutimos dinamicas relacionadas en [quien vigila a los vigilantes](/research/006-meta-governance-auditors/) --el desafio de asegurar que los auditores y evaluadores sean ellos mismos adecuados.

### Objetivo móvil

Los modelos se actualizan. El ajuste fino cambia el comportamiento. El scaffolding amplifica la capacidad. Una evaluación exhaustiva de un modelo base dice poco sobre las versiones modificadas.

Esto es particularmente relevante para el ecosistema de pesos abiertos explorado en [la paradoja de seguridad de los pesos abiertos](/research/002-open-weight-safety-paradox/). Un modelo base cuidadosamente evaluado puede ajustarse finamente para eliminar las barreras de seguridad, haciendo irrelevante la evaluación original.

## Caminos a seguir

Mejorar la evaluación de capacidades peligrosas requiere progreso en varios frentes.

### Fundamentación teórica

Necesitamos mejores teorías sobre qué capacidades buscar y por qué. Las listas actuales de capacidades peligrosas están en gran medida guiadas por la intuición. Marcos más rigurosos para anticipar qué capacidades plantean riesgos, y qué umbrales de riesgo importan, enfocarían los esfuerzos de evaluación.

### Estándares de evaluación

Los protocolos de evaluación estandarizados, administrados por partes independientes, crearían expectativas básicas y permitirían la comparación entre desarrolladores. Esto conecta con el desafío más amplio de la auditoría: la evaluación solo es tan confiable como los evaluadores.

### Evaluación continua

En lugar de evaluar una vez antes de la implementación, el monitoreo continuo de los sistemas implementados capturaría capacidades que emergen en uso. Esto podría involucrar muestrear interacciones implementadas, monitorear salidas anómalas, o canales de notificación de usuarios.

Nuestro trabajo sobre [detección reflexiva de uso indebido](/research/011-reflexive-misuse-detection/) explora cómo los sistemas de IA podrían participar en el monitoreo de sus propias capacidades durante la implementación.

### Acotación de capacidades

En lugar de solo evaluar lo que los modelos pueden hacer, la gobernanza también podría centrarse en mecanismos que restrinjan lo que pueden hacer, independientemente de la capacidad. Los filtros, el monitoreo y los mecanismos de intervención crean defensa en profundidad. Incluso si la evaluación no detecta una capacidad peligrosa, estos mecanismos podrían prevenir su expresión.

Esta es la lógica detrás de las [líneas rojas](/research/004-red-lines-taxonomy/) --restricciones tan importantes que deberían aplicarse mecánicamente, no simplemente entrenarse.

### Transparencia

Los resultados de la evaluación deberían compartirse --no necesariamente públicamente, pero al menos con reguladores y evaluadores independientes. Actualmente, las evaluaciones de capacidades son a menudo propietarias, lo que hace imposible verificar las afirmaciones o aprender de los enfoques.

Los requisitos de divulgación de las metodologías y los resultados de evaluación, como parte de la transparencia proporcional que defendemos en [proporcionalidad en la divulgación de modelos](/research/001-proportionality-disclosure/), avanzarían la comprensión colectiva.

## Conclusión

La evaluación de capacidades peligrosas es necesaria pero actualmente inadecuada. Podemos evaluar algunas capacidades a través de benchmarks y red teaming, pero no podemos probar su ausencia. Las evaluaciones ocurren en condiciones controladas que no coinciden con la implementación. Los recursos son desiguales en todo el ecosistema.

Esta incertidumbre debe reconocerse en los marcos de gobernanza. Los enfoques basados en riesgo que dependen de la evaluación de capacidades solo son tan confiables como esa evaluación lo permita. Dadas las limitaciones actuales, la gobernanza debería ser conservadora, asumiendo que las capacidades pueden exceder lo que la evaluación detecta.

El progreso requiere mejores métodos de evaluación, estandarización, monitoreo continuo y transparencia. Estas no son meramente mejoras técnicas sino infraestructura de gobernanza. Sin una evaluación de capacidades confiable, la gobernanza de la IA opera parcialmente a ciegas.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [The Open Weight Safety Paradox](/research/002-open-weight-safety-paradox/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/006-meta-governance-auditors/)
