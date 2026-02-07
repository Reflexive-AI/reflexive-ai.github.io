---
title: "Autoinforme frente a auditoría externa: el espacio de compensación"
excerpt: "Un análisis de teoría de juegos de los incentivos de divulgación. Por qué el autoinforme falla sin una amenaza creíble de verificación externa."
date: 2025-12-23
categories:
  - Governance Analysis
tags:
  - game-theory
  - auditing
  - incentives
  - institutional-design
version: "1.0"
toc: true
---

**Objeto de Investigación Reflexiva 010**  
*Tipo: Análisis de Teoría de Juegos*

## El mercado de los limones

Si las pruebas de seguridad son puramente internas (autoinforme), el mercado de IA se convierte en un "Mercado de Limones" como describió el economista George Akerlof en su análisis de la asimetría de información.

La lógica es directa: los laboratorios que recortan en seguridad pueden iterar más rápido y llegar al mercado antes. Si afirman "lo hemos probado, es seguro" y nadie puede verificar esa afirmación, obtienen ventaja competitiva sobre los laboratorios que realmente invierten en pruebas exhaustivas. El mercado no puede distinguir entre seguridad genuina y seguridad declarada, por lo que no puede recompensar la primera ni castigar la segunda.

Con el tiempo, esta dinámica expulsa a los actores responsables. Los laboratorios que invierten fuertemente en seguridad pagan costos reales (tiempo, cómputo, talento) que sus competidores menos escrupulosos evitan. Si ambos parecen igualmente "seguros" para el mercado (porque ambos hacen las mismas afirmaciones y ninguno enfrenta verificación), el laboratorio más seguro está en desventaja. El equilibrio del mercado se desplaza hacia sistemas inseguros y rápidos.

Esto no es especulación; es el resultado predecible del autoinforme no verificado en cualquier mercado con alta asimetría de información. Lo hemos visto en productos financieros, en pruebas de emisiones, en seguridad alimentaria antes de la regulación. No hay razón para esperar que la IA sea diferente.

## El costo de la verificación

La auditoría externa resuelve el problema de confianza, en teoría. Un tercero independiente, con experiencia e incentivos para encontrar problemas, puede verificar las afirmaciones de seguridad y certificar los sistemas conformes. El mercado puede entonces distinguir entre sistemas certificados y no certificados, recompensando la seguridad genuina.

Pero la auditoría externa introduce sus propios costos:

**Riesgo de propiedad intelectual:** Los laboratorios no quieren entregar los pesos a los auditores. Los pesos codifican miles de millones de dólares de inversión en arquitectura, datos de entrenamiento y optimización. Un auditor que ve los pesos podría filtrarlos, copiarlos o derivar conocimientos competitivos. Incluso con protecciones contractuales, el riesgo es real.

**Asimetría de capacidad:** Como se discutió en el Objeto de Investigación 006, los auditores no pueden igualar la comprensión que los desarrolladores tienen de sus propios modelos. Un laboratorio que gasta 100 millones de dólares en entrenamiento siempre sabrá más que un auditor que gasta 100.000 dólares en pruebas. La auditoría proporciona falsa seguridad en lugar de verificación genuina.

**Costo temporal:** La auditoría externa exhaustiva requiere tiempo (semanas o meses). En un entorno competitivo de rápido movimiento, este retraso es costoso. Los laboratorios aceleran las auditorías, los auditores recortan para cumplir plazos, y la certificación resultante refleja la presión del calendario en lugar de una evaluación exhaustiva.

**Captura regulatoria:** Las dinámicas que llevan a los auditores a favorecer a sus clientes (ver Objeto de Investigación 006) socavan la independencia que hace valiosa la auditoría externa. Con el tiempo, el mercado de auditores selecciona a los que son "fáciles" en lugar de a los que son exhaustivos.

## El espacio de compensación

El autoinforme y la auditoría externa representan polos de un espectro, y ningún enfoque puro funciona:

**Autoinforme puro:**
- Ventaja: Sin riesgo de propiedad intelectual, sin retraso, sin costo de auditoría
- Desventaja: Sin credibilidad, sin diferenciación de mercado, carrera hacia el fondo

**Auditoría externa pura:**
- Ventaja: Verificación independiente, el mercado puede recompensar la seguridad
- Desventaja: Riesgo de propiedad intelectual, captura regulatoria, asimetría de capacidad

La mayoría de los regímenes de gobernanza intentan encontrar un punto medio, exigiendo algún nivel de verificación externa mientras limitan lo que debe divulgarse. Pero este punto medio es inestable. Si el componente externo es demasiado débil, recaemos en las dinámicas de autoinforme. Si es demasiado fuerte, imponemos costos que inhiben la innovación o que empujan el desarrollo hacia jurisdicciones menos reguladas.

## Formulación de teoría de juegos

Podemos modelar la interacción como un juego entre el laboratorio y el regulador:

**Conjunto de estrategias del laboratorio:**
1. Invertir fuertemente en seguridad; informar honestamente
2. Invertir mínimamente en seguridad; afirmar ser seguro
3. Invertir fuertemente en seguridad; exagerar las afirmaciones
4. Invertir mínimamente en seguridad; no hacer afirmaciones

**Conjunto de estrategias del regulador:**
1. Exigir auditoría externa para todas las afirmaciones
2. Aceptar el autoinforme al pie de la letra
3. Auditoría probabilística (verificar algunas afirmaciones al azar)
4. Aplicación basada en resultados (castigar daños, no fallos de proceso)

Bajo autoinforme puro (el regulador juega la estrategia 2), la estrategia dominante del laboratorio es minimizar la inversión mientras afirma ser seguro. El regulador no puede distinguir, por lo que el laboratorio no asume ningún costo por el engaño.

Bajo auditoría externa pura (el regulador juega la estrategia 1), el laboratorio debe invertir en seguridad o arriesgarse a fallar la auditoría. Pero el laboratorio también enfrenta costos de propiedad intelectual y retrasos, lo que lo empuja a evitar la regulación por completo (arbitraje jurisdiccional) o a capturar al auditor.

Las dinámicas más interesantes emergen con la auditoría probabilística (estrategia 3) y la aplicación basada en resultados (estrategia 4). Estos enfoques merecen un examen más profundo.

## Auditoría probabilística

En lugar de auditar cada afirmación, el regulador audita una muestra aleatoria. Esto tiene varias ventajas:

**Escalabilidad:** Auditar cada sistema de IA es imposible; auditar una muestra es factible.

**Disuasión:** Si la probabilidad de auditoría es suficientemente alta, los laboratorios deben comportarse como si fueran a ser auditados, incluso cuando no lo son.

**Reducción de costos:** Los laboratorios que no son seleccionados para auditoría evitan el riesgo de propiedad intelectual y el retraso; el costo esperado es menor que la auditoría universal.

La pregunta clave de diseño es la probabilidad de auditoría y la penalización por fallar. Si la probabilidad es demasiado baja, los laboratorios apuestan a que no serán seleccionados. Si la penalización es demasiado leve, fallar una auditoría es simplemente un costo de hacer negocios.

El régimen óptimo establece la penalización esperada (probabilidad x penalización si se detecta) más alta que el costo del cumplimiento genuino. Los laboratorios entonces eligen racionalmente el cumplimiento sobre la apuesta.

Los desafíos de implementación incluyen: ¿Cómo se seleccionan los laboratorios? (La selección aleatoria previene la manipulación, pero pasa por alto los sistemas de mayor riesgo.) ¿Qué activa la auditoría? (Los disparadores basados en riesgo se manipulan; los disparadores aleatorios desperdician recursos en sistemas de bajo riesgo.) ¿Cómo se estructuran las penalizaciones? (¿Multas, exclusión del mercado, responsabilidad penal?)

## Aplicación basada en resultados

Una alternativa a auditar el proceso es castigar los resultados. En lugar de verificar que un laboratorio siguió los procedimientos de seguridad, los reguladores imponen responsabilidad por los daños que ocurran. Si tu modelo causa daño, pagas, independientemente de qué procedimientos afirmaste seguir.

Este enfoque tiene elegancia teórica:

**Incentivos correctos:** Los laboratorios tienen incentivo directo para evitar daños, como sea que elijan lograrlo.

**Flexibilidad:** Diferentes laboratorios pueden usar diferentes enfoques de seguridad adecuados a sus sistemas; los reguladores no necesitan especificar métodos.

**Sin exposición de propiedad intelectual:** Los laboratorios no necesitan divulgar procesos internos; solo necesitan garantizar buenos resultados.

Pero la aplicación basada en resultados tiene severas limitaciones:

**Atribución:** Si un modelo contribuye a un daño, demostrar la causalidad es difícil. ¿Proporcionó el modelo la información clave, o el daño habría ocurrido de todos modos?

**Eventos raros:** Los daños que más nos preocupan (bioarmas, ciberataques a infraestructura) son raros pero catastróficos. Esperar a que ocurra el daño antes de imponer penalizaciones significa permitir catástrofes. Queremos prevenir daños, no solo castigarlos después.

**Daños difusos:** Algunos daños (sesgo, desinformación, erosión de la confianza) son difusos y acumulativos. Ninguna interacción individual causa un daño medible; el daño emerge de patrones a lo largo de millones de usos. La aplicación basada en resultados tiene dificultades con daños que carecen de víctimas discretas y daños medibles.

**Cola larga:** Un laboratorio despliega cien modelos con problemas menores antes de que uno cause un daño catastrófico. La aplicación basada en resultados podría llevar a la quiebra del laboratorio después de la catástrofe, pero eso no ayuda a las víctimas ni deshace el daño.

## La solución reflexiva: cumplimiento de conocimiento cero

Proponemos avanzar hacia **Protocolos de Cumplimiento de Conocimiento Cero (ZK)** que escapen la compensación entre autoinforme y auditoría completa.

La idea central: un laboratorio demuestra a un regulador que "Este modelo satisface la Restricción C-004 (Sin bioriesgo)" sin revelar los pesos ni los datos de entrenamiento. La prueba es criptográfica; puede verificarse sin aprender nada más allá de la verdad de la afirmación.

Esto requiere tres componentes:

**1. Restricciones formalizadas:** La restricción debe ser matemáticamente precisa, no vaga. Ver Objeto de Investigación 003 para cómo las restricciones pueden expresarse en formato legible por máquina. "El modelo no logra >X% de precisión en el benchmark de bioriesgo Y" es verificable; "el modelo es seguro" no lo es.

**2. Computación segura:** La evaluación se ejecuta en un enclave seguro, hardware que impide al evaluador extraer información más allá del resultado de la computación. Alternativamente, las técnicas emergentes de ZK-ML (Machine Learning de Conocimiento Cero) permiten generar pruebas sobre el comportamiento del modelo sin revelar los pesos del modelo.

**3. Prueba criptográfica:** La salida es una prueba matemática que puede ser verificada por cualquiera. La prueba dice: "La afirmación es verdadera, y aquí está la evidencia de que la computación se realizó correctamente". El verificador solo aprende que la afirmación es verdadera, no los detalles de cómo funciona el modelo.

Esto desplaza el debate de "Confía en mí" (autoinforme) frente a "Muéstrame todo" (auditoría externa) a "Aquí está la prueba matemática de cumplimiento".

## Limitaciones actuales

El Cumplimiento ZK no es aún práctico para la evaluación de seguridad exhaustiva:

**Costo computacional:** Generar pruebas ZK para computaciones de redes neuronales es extremadamente costoso, órdenes de magnitud más que ejecutar el modelo directamente.

**Expresividad de restricciones:** Actualmente podemos probar afirmaciones sobre las salidas del modelo en entradas específicas, pero no afirmaciones sobre el comportamiento del modelo en todas las entradas posibles. "El modelo nunca produce contenido de bioamenaza" es mucho más difícil de probar que "El modelo no produjo contenido de bioamenaza en estos 10.000 casos de prueba".

**Diseño de evaluación:** Aún no sabemos cómo diseñar evaluaciones que capturen de manera significativa el riesgo de seguridad en una forma susceptible de prueba ZK. Las evaluaciones mismas necesitan trabajo, independientemente de cómo se verifiquen.

La investigación activa aborda estas limitaciones. A medida que las técnicas de ZK-ML maduren, la viabilidad de este enfoque mejorará.

## Enfoques híbridos

A corto plazo, los enfoques híbridos que combinan múltiples mecanismos de verificación ofrecen el mejor camino:

**Verificación por niveles:** Las afirmaciones de bajo riesgo se autoinforman. Las afirmaciones de riesgo medio requieren auditoría probabilística. Las afirmaciones de alto riesgo requieren evaluación exhaustiva, posiblemente con componentes ZK donde sea técnicamente factible.

**Depósito en garantía:** Los laboratorios realizan depósitos que se pierden si las auditorías revelan tergiversación. Esto crea incentivos financieros para el autoinforme honesto sin requerir auditoría universal.

**Sistemas de reputación:** Los laboratorios que pasan múltiples auditorías construyen reputación; los que fallan la pierden. Los participantes del mercado pueden considerar la reputación al decidir qué sistemas usar.

**Mercados de seguros:** Exigir a los proveedores de IA que contraten seguros de responsabilidad. Las aseguradoras tienen un fuerte incentivo para evaluar el riesgo con precisión y desarrollarán sus propios mecanismos de verificación. Esto privatiza parte de la carga de verificación.

## Conclusión

La elección entre autoinforme y auditoría externa es una falsa dicotomía. El autoinforme puro falla porque no puede ser verificado; la auditoría externa pura falla porque es costosa, manipulable e intrusiva.

El camino hacia adelante combina múltiples enfoques: auditoría probabilística que crea disuasión, responsabilidad basada en resultados para daños raros pero atribuibles, pruebas criptográficas para afirmaciones de seguridad específicas, y mecanismos de mercado que recompensen la inversión genuina en seguridad.

El objetivo no es lograr una verificación perfecta (eso es imposible) sino hacer que el costo esperado de las violaciones de seguridad sea mayor que el costo del cumplimiento genuino. Cuando la matemática de incentivos cambia, el comportamiento sigue.
