---
title: "Evaluaciones de impacto algorítmico: guía de implementación"
excerpt: "Un marco práctico para realizar evaluaciones de impacto algorítmico significativas que vayan más allá del cumplimiento formal hacia una verdadera prevención de daños."
date: 2026-01-28
toc: true
categories:
  - Research
  - Policy
tags:
  - Impact Assessment
  - Risk Governance
  - Implementation
  - Best Practices
---

Las evaluaciones de impacto algorítmico (EIA) prometen identificar y mitigar los daños antes de que se desplieguen los sistemas de IA. En la práctica, la mayoría de las implementaciones no cumplen esta promesa. Esta guía presenta un marco para evaluaciones que realmente influyan en las decisiones de diseño en lugar de limitarse a documentarlas a posteriori.

## La brecha de la evaluación

Las EIA surgieron de las evaluaciones de impacto ambiental y de privacidad, adaptando herramientas regulatorias establecidas para los sistemas algorítmicos. La Ley de IA de la UE, la Herramienta de Evaluación de Impacto Algorítmico de Canadá y diversas ordenanzas municipales exigen ahora alguna forma de evaluación de impacto. Sin embargo, ha surgido un patrón preocupante: las organizaciones llevan a cabo las evaluaciones, marcan las casillas requeridas y proceden al despliegue sin cambios.

La brecha entre la evaluación y la acción se debe a problemas estructurales. Muchos marcos se centran en describir los sistemas en lugar de cuestionarlos. Las categorías de riesgo a menudo pasan por alto los daños específicos del contexto. La temporización suele ocurrir demasiado tarde para influir en la arquitectura. Y la rendición de cuentas rara vez se extiende más allá del equipo de evaluación.

## Base previa a la evaluación

Una evaluación eficaz comienza antes de que se inicie cualquier proceso formal. Las organizaciones deben establecer una autoridad clara para el equipo de evaluación, incluida la capacidad de retrasar o bloquear el despliegue si los daños no pueden mitigarse. Sin autoridad real, las evaluaciones se convierten en ejercicios de documentación.

El equipo de evaluación requiere independencia del equipo de despliegue. Esto no significa revisores externos para cada sistema, pero los evaluadores internos no deberían depender de gerentes de proyecto con presiones de entrega. Las [estructuras de gobernanza corporativa](/research/042-corporate-governance/) que separan la supervisión del desarrollo permiten una evaluación más honesta.

Las decisiones sobre el alcance determinan todo lo que sigue. El límite del sistema determina qué impactos se contabilizan. Trazar el límite de forma estrecha —contabilizando solo los resultados directos en lugar de los efectos posteriores— subestima sistemáticamente el daño. Una mejor práctica: extender el límite para incluir usos razonablemente previsibles y efectos de segundo orden, reconociendo que la incertidumbre aumenta con la distancia.

## Identificación de partes interesadas

La mayoría de las EIA fallan en la identificación de las partes interesadas. El enfoque estándar enumera categorías obvias: usuarios, operadores, reguladores. Esto omite a las poblaciones afectadas que pueden no interactuar nunca directamente con el sistema pero que soportan sus consecuencias.

Consideremos un algoritmo de detección de fraude. Las partes interesadas directas incluyen la institución financiera y los clientes señalados. Pero los efectos posteriores afectan a los comerciantes que enfrentan mayor fricción, a las comunidades donde se concentran los falsos positivos y a los negocios competidores cuyas estructuras de costes cambian en respuesta. Una evaluación exhaustiva rastrea estas cadenas.

Métodos para identificar partes interesadas no consideradas:
- **Análisis contrafactual**: ¿Quién se vería afectado si el sistema cometiera errores sistemáticos?
- **Mapeo de distribución**: ¿Qué grupos demográficos enfrentan los mayores riesgos?
- **Análisis de poder**: ¿Quién carece de voz en las decisiones de despliegue?
- **Revisión histórica**: ¿Quién fue perjudicado por sistemas análogos?

La participación significativa de las partes interesadas requiere recursos: tiempo, accesibilidad, compensación por la participación. Las consultas apresuradas que extraen información sin permitir una influencia genuina socavan tanto la evaluación como la confianza de la comunidad. Los [marcos de participación pública](/research/045-public-participation/) ofrecen modelos para un compromiso auténtico.

## Metodología de identificación de riesgos

Las taxonomías genéricas de riesgo —sesgo, privacidad, seguridad— proporcionan puntos de partida pero no deberían limitar la evaluación. Los riesgos específicos del sistema surgen de la intersección del diseño técnico, el contexto de despliegue y el entorno social.

La capa técnica examina las características del modelo: procedencia de los datos de entrenamiento, cuantificación de la incertidumbre, modos de fallo, vulnerabilidades ante la manipulación. Este análisis requiere acceso a los componentes internos del modelo, no solo a las entradas y salidas. Los [marcos de evaluación previa al despliegue](/research/007-consent-structural-impossibility/) establecen líneas de base para la revisión técnica.

La capa de despliegue considera el contexto operativo: quién tiene la autoridad de anulación, qué recurso existe para las personas afectadas, cómo se gestionan los casos límite, qué monitorización existe tras el despliegue. Muchos daños surgen no de fallos del modelo sino de una integración inadecuada entre el ser humano y el sistema.

La capa social sitúa el sistema dentro de las relaciones de poder: ¿el despliegue concentra o distribuye el poder? ¿Afecta a los grupos de manera diferente en función de las vulnerabilidades existentes? ¿Crea nuevas dependencias o bloqueos? Estas preguntas requieren un análisis de las ciencias sociales, no solo una evaluación técnica.

## Medición del impacto

Cuantificar los daños potenciales antes del despliegue requiere especulación estructurada. Algunos marcos exigen estimaciones de probabilidad y valoraciones monetarias. Esta precisión a menudo oculta la incertidumbre inherente a la predicción de resultados sociotécnicos.

Los enfoques más honestos reconocen la incertidumbre de forma explícita. El análisis de escenarios explora futuros plausibles: mejor caso, caso esperado, peor caso y —de forma crítica— incógnitas desconocidas que los precedentes históricos podrían sugerir. El objetivo no es la predicción sino la preparación.

El análisis de impacto diferencial examina cómo se distribuyen los daños entre las poblaciones. Las métricas de precisión global a menudo ocultan daños concentrados. Un algoritmo de contratación con un 90 % de precisión general podría tener un 60 % de precisión para grupos protegidos, un patrón distributivo invisible para la medición agregada.

Las escalas de gravedad deberían reflejar consecuencias reales, no categorías abstractas. "Riesgo medio" significa poco. "Uno de cada veinte usuarios recibe una alerta falsa de fraude, lo que provoca una congelación media de la cuenta de tres días y costes asociados de 150 $" permite la evaluación.

## Jerarquías de mitigación

La evaluación de impacto no está completa sin una planificación de mitigación. La jerarquía sigue un principio: prevención sobre remediación, cambios de diseño sobre controles procedimentales.

**Nivel 1: Eliminación**
No desplegar el sistema. Si los daños no pueden mitigarse adecuadamente y el caso de uso no es suficientemente valioso, el no despliegue es una conclusión legítima. Las evaluaciones que nunca llegan a esta conclusión pueden carecer de autoridad real.

**Nivel 2: Sustitución**
Reemplazar el enfoque problemático con una alternativa menos dañina. Un modelo predictivo podría sustituirse por reglas más simples o por el juicio humano. Las [consideraciones de seguridad técnica](/research/034-technical-vs-societal-safety/) informan qué alternativas existen.

**Nivel 3: Controles de ingeniería**
Rediseñar el sistema para reducir el daño. Modificar los datos de entrenamiento, ajustar los umbrales de decisión, añadir señalización de incertidumbre, limitar el alcance de los resultados. Estos cambios requieren volver al desarrollo, ampliando los plazos.

**Nivel 4: Controles administrativos**
Implementar procedimientos para gestionar el riesgo. Revisión humana para decisiones de alto impacto, monitorización mejorada, contextos de despliegue restringidos. Estos controles son menos fiables que los cambios de ingeniería: los procedimientos pueden eludirse o erosionarse.

**Nivel 5: Documentación y divulgación**
Si persiste un riesgo residual, las partes afectadas deben ser informadas. Esta es la forma más débil de mitigación: traslada la carga a los afectados en lugar de prevenir el daño.

## Cronología del proceso

Las EIA realizadas al final del desarrollo llegan demasiado tarde. La arquitectura del sistema se ha fijado, los datos de entrenamiento se han recopilado, las métricas de éxito se han definido. La evaluación se convierte en una valoración de decisiones ya tomadas en lugar de una aportación a decisiones en curso.

Una mejor cronología integra la evaluación a lo largo del desarrollo:
- **Fase de ideación**: ¿Debería construirse este sistema? ¿Qué propósitos serviría y los intereses de quién?
- **Fase de diseño**: ¿Qué enfoques técnicos minimizan los daños previsibles?
- **Fase de desarrollo**: ¿Son adecuados los datos de entrenamiento y los procedimientos de evaluación?
- **Fase previa al despliegue**: Evaluación de impacto completa con aportaciones de las partes interesadas
- **Fase posterior al despliegue**: Monitorización y reevaluación a medida que surgen los efectos en el mundo real

Este enfoque escalonado requiere considerar la evaluación como gobernanza continua en lugar de cumplimiento puntual. La [monitorización de modelos desplegados](/research/010-self-reporting-vs-audit/) extiende la evaluación más allá del despliegue inicial.

## Estándares de documentación

La documentación de la evaluación sirve a múltiples audiencias: responsables internos de la toma de decisiones, reguladores externos, comunidades afectadas, futuros auditores. Cada audiencia necesita información diferente a diferentes niveles de detalle.

Los resúmenes ejecutivos deben presentar los hallazgos en un lenguaje accesible para los responsables de la toma de decisiones no técnicos, enfatizando los riesgos clave y las acciones recomendadas. Los anexos técnicos proporcionan detalle para la revisión especializada. Las divulgaciones públicas equilibran la transparencia con las preocupaciones legítimas de confidencialidad.

La documentación debe estar controlada por versiones y conservarse. Los sistemas evolucionan; las evaluaciones deben ser actualizables. Cuando se producen cambios significativos —actualizaciones de datos de entrenamiento, cambios en el contexto de despliegue, nuevas capacidades— debe realizarse una reevaluación.

## Integración organizativa

Las EIA que residen en un compartimento de cumplimiento tienen un impacto limitado. La integración con los procesos de desarrollo de productos, los marcos de gestión de riesgos y las estructuras de gobernanza amplifica su influencia.

Los requisitos de producto deben hacer referencia a los hallazgos de la evaluación. Las revisiones de diseño deben verificar que se han implementado las mitigaciones recomendadas por la evaluación. Las puertas de lanzamiento deben incluir la aprobación de las funciones de evaluación.

La [supervisión a nivel de consejo](/research/043-board-oversight/) proporciona vías de escalamiento para evaluaciones de alto impacto. Cuando los equipos de evaluación identifican riesgos que exceden su autoridad para mitigar, las estructuras de gobernanza deben permitir la toma de decisiones ejecutivas con plena visibilidad.

## Alineación regulatoria

Múltiples marcos regulatorios exigen ahora evaluaciones de impacto: la Ley de IA de la UE para sistemas de alto riesgo, requisitos sectoriales en finanzas y sanidad, ordenanzas municipales para uso en el sector público. Diseñar procesos de evaluación que satisfagan múltiples requisitos reduce la duplicación al tiempo que garantiza el cumplimiento.

Sin embargo, los mínimos regulatorios no deberían convertirse en techos. La evaluación impulsada por el cumplimiento satisface los requisitos legales pero puede pasar por alto daños específicos del contexto. Las organizaciones con compromisos genuinos de seguridad superan los requisitos mínimos, tratando la regulación como línea de base en lugar de objetivo. Los [marcos de derecho blando](/research/040-soft-law-hard-law/) a menudo se extienden más allá de los requisitos del derecho duro.

## Errores comunes

**La falacia del formulario completado**: Rellenar plantillas de evaluación no constituye una evaluación. Los formularios estructuran la indagación pero no reemplazan el juicio.

**Cuantificación prematura**: Asignar números a daños inciertos crea una falsa precisión. Los rangos y escenarios reflejan mejor la incertidumbre real.

**Teatro de partes interesadas**: La consulta que no influye en los resultados genera cinismo. Es mejor evaluar sin consulta que extraer información e ignorarla.

**Extensión descontrolada de la evaluación**: No todos los sistemas requieren una evaluación de impacto completa. Calibrar el esfuerzo según lo que está en juego. La [divulgación proporcional al riesgo](/research/001-proportionality-disclosure/) ofrece marcos para escalar la gobernanza.

**Pensamiento puntual**: La evaluación es una actividad en un momento dado; la gobernanza es continua. Los sistemas que pasan la evaluación previa al despliegue pueden desarrollar problemas en funcionamiento.

## Conclusión

La evaluación de impacto algorítmico puede ser gobernanza significativa o ritual burocrático. La diferencia reside en la autoridad, la cronología, la metodología y la integración organizativa. Las organizaciones que se toman en serio la gobernanza de la IA invierten en infraestructura de evaluación, no como un coste de cumplimiento sino como un mecanismo para construir mejores sistemas.

Los marcos presentados aquí exigen más que completar casillas de verificación. Requieren un compromiso genuino con las comunidades afectadas, un reconocimiento honesto de la incertidumbre y la voluntad de cambiar los planes en función de los hallazgos. La mayoría de las organizaciones aún no están ahí. Pero a medida que los sistemas de IA se vuelven más trascendentes, una evaluación eficaz se convierte no en algo opcional sino en algo esencial.

---

*Esta guía presenta marcos de evaluación alineados con los requisitos regulatorios emergentes, al tiempo que enfatiza la prevención sustantiva de daños por encima del cumplimiento procedimental. Las organizaciones pueden necesitar adaptar los marcos a sus contextos específicos preservando los principios fundamentales de autoridad, participación de las partes interesadas y rendición de cuentas.*
