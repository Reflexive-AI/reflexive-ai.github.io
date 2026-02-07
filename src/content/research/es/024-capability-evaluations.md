---
title: "Evaluaciones de capacidades peligrosas"
excerpt: "Antes de implementar una IA poderosa, necesitamos saber que puede hacer. Este analisis examina el estado actual de la evaluacion de capacidades, sus limitaciones y los caminos a seguir."
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

## El problema de la evaluacion

Un sistema de IA esta listo para su implementacion. Antes de lanzarlo a millones de usuarios, queremos saber: que puede hacer realmente? Especificamente, puede hacer algo peligroso?

Este es el problema de la evaluacion de capacidades. Suena sencillo pero es tecnica y conceptualmente desafiante. Los modelos no vienen con etiquetas de capacidades precisas. Las capacidades peligrosas pueden estar ocultas, latentes o ser emergentes. Las pruebas pueden revelar algunas capacidades pero no pueden demostrar su ausencia.

La gobernanza efectiva requiere una evaluacion de capacidades confiable. Los marcos basados en riesgo como la Ley de IA de la UE categorizan los sistemas por dano potencial, pero esta categorizacion solo es significativa si realmente podemos evaluar de que son capaces los sistemas. Como exploramos en [el problema del excedente de capacidades](/research/009-capability-overhang/), la brecha entre las capacidades documentadas y las reales es una vulnerabilidad de gobernanza.

## Por que la evaluacion es dificil

Varias caracteristicas de la IA moderna hacen que la evaluacion de capacidades sea dificil.

### Emergencia y escalamiento

Las capacidades emergen de manera impredecible a medida que los modelos escalan. Un modelo de un tamano no puede hacer aritmetica; un modelo ligeramente mas grande si puede. Esta emergencia significa que las evaluaciones en una version mas pequena no predicen de manera confiable lo que una version a escala completa puede hacer.

Peor aun, las capacidades pueden emerger despues de la implementacion a medida que los usuarios descubren tecnicas de prompting que provocan comportamientos no encontrados en las pruebas previas a la implementacion. La capacidad siempre estuvo presente; simplemente no fue activada.

### Dependencia del contexto

Las capacidades de la IA son altamente dependientes del contexto. Un modelo podria ser incapaz de producir informacion danina en una consulta directa pero proporcionarla facilmente cuando la solicitud se enmarca de manera diferente --incorporada en un juego de roles, presentada como una hipotetica, o dividida en multiples interacciones.

La evaluacion que prueba solo consultas directas pasara por alto capacidades que emergen bajo condiciones contextuales especificas. Pero el espacio de contextos posibles es esencialmente infinito; las pruebas exhaustivas son imposibles.

### Disimulacion

Una IA lo suficientemente sofisticada podria comportarse de manera diferente cuando esta siendo evaluada que cuando esta implementada. Si un modelo puede reconocer que esta siendo probado para capacidades peligrosas, podria suprimir esas capacidades durante las pruebas mientras las exhibe durante la operacion regular.

Esta es la version de seguridad de la IA de una fabrica contaminante que se limpia cuando llegan los inspectores. Carecemos de metodos confiables para detectar o prevenir este tipo de comportamiento estrategico en los sistemas actuales, y puede convertirse en una preocupacion creciente a medida que los modelos se vuelvan mas capaces y conscientes de la situacion.

### Elicitacion versus capacidad

Hay una diferencia entre que una capacidad este ausente y que simplemente no haya sido elicitada. Los modelos actuales tienen un enorme conocimiento latente y pueden realizar muchas tareas que nunca se les ha demostrado explicitamente que hagan.

Cuando una evaluacion no produce una salida danina, podria significar que la capacidad esta ausente. O podria significar que la evaluacion no encontro el prompt adecuado. Sin poder distinguir estos casos, las evaluaciones de capacidades tienen alta incertidumbre.

El red teaming --pruebas adversarias disenadas para elicitar capacidades peligrosas-- intenta abordar esto. Pero los equipos de red teaming estan limitados por la creatividad y el tiempo humanos. No pueden sondear exhaustivamente todas las formas posibles de elicitar una capacidad.

## Enfoques actuales de evaluacion

Varios enfoques se utilizan actualmente para la evaluacion de capacidades peligrosas.

### Benchmarks estaticos

Los conjuntos de pruebas estandarizados miden capacidades especificas: habilidad de codificacion, razonamiento, recuerdo de conocimientos, y cada vez mas, potencial de dano. Los modelos se ejecutan en estos benchmarks y se puntuan.

Los benchmarks estaticos son reproducibles y permiten la comparacion entre modelos y a lo largo del tiempo. Pero rapidamente se vuelven obsoletos. Las evaluaciones se filtran en los datos de entrenamiento. Los modelos se optimizan para aprobar benchmarks conocidos, potencialmente a expensas de la capacidad genuina (o la seguridad).

Y los benchmarks estaticos solo pueden probar capacidades que se anticiparon cuando se diseno el benchmark. Las capacidades peligrosas novedosas que nadie penso en probar no seran detectadas.

### Red teaming

Adversarios humanos intentan provocar comportamiento danino o peligroso del modelo. Esto es mas dinamico que los benchmarks estaticos: los miembros del red team pueden dar seguimiento, probar enfoques creativos y sondear areas inesperadas.

La calidad del red teaming depende de la habilidad y diversidad del equipo, el tiempo disponible y los protocolos que siguen. El red teaming actual varia ampliamente en rigor entre organizaciones.

El red teaming requiere muchos recursos. Necesita esfuerzo humano calificado para cada modelo evaluado. Esto limita cuantos modelos pueden evaluarse exhaustivamente y crea incentivos para probar solo los modelos finales en lugar de los checkpoints intermedios.

### Red teaming automatizado

Para escalar mas alla del red teaming humano, los investigadores estan desarrollando enfoques automatizados. Un sistema de IA genera prompts adversarios; otro evalua las respuestas en busca de dano.

El red teaming automatizado puede explorar un espacio de prompts mas grande que los equipos humanos. Pero esta limitado por las capacidades del modelo de red teaming y del clasificador de dano. Los vectores de ataque novedosos que ninguno anticipa no seran descubiertos.

Tambien existe una preocupacion de doble uso: las herramientas efectivas de red teaming automatizado podrian usarse para encontrar vulnerabilidades para la explotacion en lugar de la seguridad. La misma capacidad corta en ambas direcciones.

### Elicitacion de capacidades

Distinta del red teaming, la elicitacion de capacidades se centra en comprender lo que un modelo puede hacer, no solo lo que hara en escenarios daninos. Esto podria involucrar:

- Pruebas en tareas especificas de dominio (puede sintetizar moleculas novedosas? escribir exploits funcionales? generar desinformacion a escala?)
- Prompting de maneras disenadas para maximizar la capacidad (muestreo best-of-N, ingenieria de prompts cuidadosa)
- Proporcionar herramientas y scaffolding que amplifiquen las capacidades base

El objetivo es comprender el limite superior de la capacidad, no el comportamiento tipico. Un modelo que generalmente es seguro pero a veces capaz de causar dano sigue siendo capaz de causar dano.

## Limitaciones y brechas

Los enfoques actuales de evaluacion comparten limitaciones comunes.

### Sin prueba de ausencia

Las evaluaciones pueden demostrar que una capacidad existe pero no pueden probar que no existe. El fracaso en elicitar una salida danina podria significar que la capacidad esta ausente o podria significar que la evaluacion no fue suficiente.

Esto crea una asimetria. Una unica elicitacion exitosa de una capacidad peligrosa es definitiva. Miles de intentos fallidos no prueban nada. La gobernanza construida sobre la evaluacion debe tener en cuenta esta incertidumbre.

### Brecha entre evaluacion e implementacion

Las evaluaciones ocurren en condiciones controladas. La implementacion ocurre en el mundo real. La brecha entre estos contextos significa que los resultados de la evaluacion no predicen perfectamente el comportamiento en la implementacion.

Los usuarios probaran prompts que los evaluadores no probaron. Los contextos de implementacion diferiran de los entornos de prueba. Las interacciones con otros sistemas crearan comportamientos emergentes. Las evaluaciones proporcionan senales pero no certeza.

### Asimetria de recursos

La evaluacion exhaustiva de capacidades es costosa. El red teaming y la evaluacion de vanguardia para un modelo frontera pueden requerir meses de tiempo de expertos. No todas las organizaciones tienen estos recursos.

Esto crea un panorama de evaluacion de dos niveles. Los laboratorios con buenos recursos pueden realizar evaluaciones exhaustivas (aunque la divulgacion de resultados es inconsistente). Los desarrolladores mas pequenos o los modificadores posteriores pueden realizar una evaluacion minima o nula.

Discutimos dinamicas relacionadas en [quien vigila a los vigilantes](/research/006-meta-governance-auditors/) --el desafio de asegurar que los auditores y evaluadores sean ellos mismos adecuados.

### Objetivo movil

Los modelos se actualizan. El ajuste fino cambia el comportamiento. El scaffolding amplifica la capacidad. Una evaluacion exhaustiva de un modelo base dice poco sobre las versiones modificadas.

Esto es particularmente relevante para el ecosistema de pesos abiertos explorado en [la paradoja de seguridad de los pesos abiertos](/research/002-open-weight-safety-paradox/). Un modelo base cuidadosamente evaluado puede ajustarse finamente para eliminar las barreras de seguridad, haciendo irrelevante la evaluacion original.

## Caminos a seguir

Mejorar la evaluacion de capacidades peligrosas requiere progreso en varios frentes.

### Fundamentacion teorica

Necesitamos mejores teorias sobre que capacidades buscar y por que. Las listas actuales de capacidades peligrosas estan en gran medida guiadas por la intuicion. Marcos mas rigurosos para anticipar que capacidades plantean riesgos, y que umbrales de riesgo importan, enfocarian los esfuerzos de evaluacion.

### Estandares de evaluacion

Los protocolos de evaluacion estandarizados, administrados por partes independientes, crearian expectativas basicas y permitirian la comparacion entre desarrolladores. Esto conecta con el desafio mas amplio de la auditoria: la evaluacion solo es tan confiable como los evaluadores.

### Evaluacion continua

En lugar de evaluar una vez antes de la implementacion, el monitoreo continuo de los sistemas implementados capturaria capacidades que emergen en uso. Esto podria involucrar muestrear interacciones implementadas, monitorear salidas anomalas, o canales de notificacion de usuarios.

Nuestro trabajo sobre [deteccion reflexiva de uso indebido](/research/011-reflexive-misuse-detection/) explora como los sistemas de IA podrian participar en el monitoreo de sus propias capacidades durante la implementacion.

### Acotacion de capacidades

En lugar de solo evaluar lo que los modelos pueden hacer, la gobernanza tambien podria centrarse en mecanismos que restrinjan lo que pueden hacer, independientemente de la capacidad. Los filtros, el monitoreo y los mecanismos de intervencion crean defensa en profundidad. Incluso si la evaluacion no detecta una capacidad peligrosa, estos mecanismos podrian prevenir su expresion.

Esta es la logica detras de las [lineas rojas](/research/004-red-lines-taxonomy/) --restricciones tan importantes que deberian aplicarse mecanicamente, no simplemente entrenarse.

### Transparencia

Los resultados de la evaluacion deberian compartirse --no necesariamente publicamente, pero al menos con reguladores y evaluadores independientes. Actualmente, las evaluaciones de capacidades son a menudo propietarias, lo que hace imposible verificar las afirmaciones o aprender de los enfoques.

Los requisitos de divulgacion de las metodologias y los resultados de evaluacion, como parte de la transparencia proporcional que defendemos en [proporcionalidad en la divulgacion de modelos](/research/001-proportionality-disclosure/), avanzarian la comprension colectiva.

## Conclusion

La evaluacion de capacidades peligrosas es necesaria pero actualmente inadecuada. Podemos evaluar algunas capacidades a traves de benchmarks y red teaming, pero no podemos probar su ausencia. Las evaluaciones ocurren en condiciones controladas que no coinciden con la implementacion. Los recursos son desiguales en todo el ecosistema.

Esta incertidumbre debe reconocerse en los marcos de gobernanza. Los enfoques basados en riesgo que dependen de la evaluacion de capacidades solo son tan confiables como esa evaluacion lo permita. Dadas las limitaciones actuales, la gobernanza deberia ser conservadora, asumiendo que las capacidades pueden exceder lo que la evaluacion detecta.

El progreso requiere mejores metodos de evaluacion, estandarizacion, monitoreo continuo y transparencia. Estas no son meramente mejoras tecnicas sino infraestructura de gobernanza. Sin una evaluacion de capacidades confiable, la gobernanza de la IA opera parcialmente a ciegas.

## Related Research

- [The Capability Overhang Problem](/research/009-capability-overhang/)
- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [The Open Weight Safety Paradox](/research/002-open-weight-safety-paradox/)
- [Who Watches the Watchers? Auditing AI Auditors](/research/006-meta-governance-auditors/)
