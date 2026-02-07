---
title: "Simular la gobernanza: usar IA para someter a prueba las regulaciones de IA"
excerpt: "Las regulaciones son políticas. Las políticas pueden simularse. ¿Y si usáramos sistemas de IA para modelar los efectos de las regulaciones propuestas antes de su implementación, identificando lagunas y consecuencias no deseadas?"
date: 2026-02-04
categories:
  - Governance Analysis
  - Reflexivity
tags:
  - simulation
  - regulation
  - policy-testing
  - modeling
  - unintended-consequences
---

## El problema del diseño de políticas

Las propuestas de gobernanza de IA proliferan. Umbrales de computación, evaluaciones de capacidades, mandatos de divulgación, marcos de responsabilidad, regímenes de certificación. Cada una promete abordar riesgos específicos. Pocas se prueban antes de su implementación.

El desarrollo de políticas tradicional se basa en la deliberación, la consulta a expertos y el aprendizaje de casos análogos. Estos métodos tienen valor. También tienen limitaciones. La deliberación no puede anticipar todas las respuestas de los actores. Los expertos tienen puntos ciegos. Las analogías pueden no ser aplicables.

¿Y si pudiéramos simular las regulaciones propuestas antes de implementarlas? Ejecutar la política a través de escenarios, modelar las respuestas de los actores, identificar lagunas y consecuencias no deseadas, todo antes de que la regulación se convierta en ley.

Esto no es ciencia ficción. Es una aplicación de métodos de simulación que ya se utilizan en otros ámbitos, potenciada por las capacidades de la IA. Y es un enfoque reflexivo: usar la IA para ayudar a gobernar la IA.

## La simulación en otros ámbitos

La simulación de políticas es una práctica establecida en algunos campos.

**Política económica.** Los bancos centrales y los ministerios de finanzas utilizan modelos económicos para proyectar los efectos de cambios en los tipos de interés, ajustes fiscales y paquetes de estímulo. Estos modelos son imperfectos, pero influyen en las decisiones.

**Transporte.** Los urbanistas simulan flujos de tráfico para evaluar configuraciones viales, opciones de transporte público y tarificación por congestión antes de comprometer recursos.

**Ámbito militar.** Los establecimientos de defensa realizan juegos de guerra y simulaciones para evaluar estrategias, identificar vulnerabilidades y formar al personal.

**Clima.** Los modelos climáticos integran física, química y economía para proyectar los efectos de las políticas de emisiones con décadas de anticipación.

**Epidemiología.** Los modelos de enfermedades informaron la respuesta a pandemias, proyectando la propagación bajo diferentes escenarios de intervención.

Estos ámbitos demuestran que la simulación puede informar las políticas pese a la incertidumbre inherente. Los modelos no necesitan ser exactos para ser útiles; necesitan iluminar las compensaciones e identificar los modos de fallo.

## Cómo podría funcionar la simulación de gobernanza de IA

La simulación de gobernanza de IA podría adoptar diversas formas, de simples a sofisticadas.

### Análisis de escenarios

La forma más sencilla: construir escenarios que representen diferentes respuestas de los actores a una regulación propuesta, y luego evaluar cada uno cualitativamente.

**Ejemplo:** Un umbral de computación propuesto para una supervisión reforzada. Los escenarios podrían incluir:
- Actores que cumplen y se someten a la supervisión según lo previsto
- Actores con recursos que dividen el entrenamiento por debajo de los umbrales
- Actores internacionales que entrenan en otras jurisdicciones
- Actores más pequeños que agregan recursos para superar los umbrales
- Arquitecturas novedosas que alcanzan capacidades por debajo de los umbrales

Cada escenario revela posibles modos de fallo. La regulación puede refinarse antes de su implantación.

### Modelado basado en agentes

Más sofisticado: modelar a los actores como agentes con objetivos, recursos y reglas de decisión. Ejecutar simulaciones donde los agentes responden a las regulaciones de forma dinámica.

**Ejemplo:** Modelar un ecosistema con laboratorios de IA, reguladores, auditores externos y usuarios. Los laboratorios maximizan las capacidades dentro de las restricciones. Los reguladores aplican las normas con recursos limitados. Los auditores eligen con qué rigurosidad auditar. Los usuarios buscan capacidades al menor coste.

Simular este ecosistema bajo diferentes regímenes regulatorios. Rastrear qué regulaciones se eluden, dónde surgen cuellos de botella en la aplicación, qué coaliciones de actores se forman.

### Simulación de equipo rojo

Usar los propios sistemas de IA para encontrar lagunas. Dada una regulación propuesta, instruir a una IA para que encuentre estrategias conformes que vulneren la intención regulatoria.

**Ejemplo:** "Aquí hay un régimen de divulgación obligatoria propuesto. Encuentra formas en que una empresa podría cumplir formalmente revelando la mínima información útil."

Los sistemas de IA pueden encontrar vías de explotación que los analistas humanos pasan por alto, precisamente porque abordan el problema sin presupuestos humanos sobre el comportamiento apropiado.

### Simulación adversarial

Enfrentar sistemas de IA entre sí: uno representa a un adversario sofisticado que intenta evadir la regulación; otro representa a un aplicador que intenta detectar la evasión. Ejecutar simulaciones repetidas para encontrar diseños regulatorios robustos.

Esto se asemeja a las [pruebas de equipo rojo](/research/050-red-teaming-methodologies/) pero aplicadas a la gobernanza en lugar de al comportamiento del modelo.

## Qué hace diferente a la gobernanza de IA

La simulación de gobernanza de IA tiene características especiales.

**Reflexividad.** Estamos usando IA para evaluar políticas sobre IA. Los modelos utilizados para la simulación pueden estar ellos mismos sujetos a las regulaciones que se evalúan. Esto crea tanto complejidad metodológica como conocimiento potencial: la simulación revela lo que los sistemas de IA harían bajo regulación.

**Cambio rápido.** Las capacidades de la IA evolucionan más rápido que los ciclos de las políticas. Las simulaciones deben modelar no solo las capacidades actuales sino las capacidades futuras anticipadas. Esto aumenta la incertidumbre pero también incrementa el valor del análisis prospectivo.

**Actores estratégicos.** Los laboratorios de IA son entidades sofisticadas con recursos para analizar y responder a las regulaciones. Los modelos ingenuos que asumen cumplimiento pueden pasar por alto cómo los actores inteligentes manipulan las reglas.

**Datos históricos limitados.** La mayoría de las propuestas de gobernanza de IA no se han implementado. A diferencia de la política económica, donde disponemos de décadas de datos sobre los efectos de los tipos de interés, la gobernanza de IA carece de trayectorias empíricas. La simulación debe ser más especulativa.

## Limitaciones

La simulación no es predicción. Varias limitaciones restringen lo que la simulación de gobernanza puede lograr.

**Incertidumbre del modelo.** Las simulaciones requieren modelos de cómo se comportan los actores. No comprendemos plenamente cómo los laboratorios de IA, los reguladores o los mercados responderán a nuevas regulaciones. Los modelos codifican supuestos que pueden ser erróneos.

**Incógnitas desconocidas.** Las simulaciones solo pueden explorar escenarios que construimos. Los modos de fallo novedosos que no imaginamos no aparecerán en las simulaciones.

**Efectos reflexivos.** Publicar los resultados de la simulación puede cambiar el comportamiento de los actores. Si una simulación revela una laguna, los actores pueden explotarla. Si una simulación muestra que una regulación funciona, los actores pueden encontrar evasiones novedosas no modeladas.

**Manipulación de la simulación.** Si las decisiones de gobernanza dependen de simulaciones, los actores pueden intentar influir en el diseño o las entradas de la simulación. La simulación se convierte en otro ámbito de gobernanza a disputar.

**Cuestiones de legitimidad.** ¿Deberían los resultados de la simulación influir en las decisiones? ¿Quién diseña las simulaciones? ¿Quién las valida? La gobernanza informada por simulaciones plantea cuestiones de rendición de cuentas similares a la [toma de decisiones algorítmica](/research/046-algorithmic-impact-assessments/) en general.

Estas limitaciones no hacen inútil la simulación. La convierten en una entrada entre muchas en lugar de una respuesta determinista.

## Aplicaciones prácticas

¿Dónde podría ser más valiosa la simulación de gobernanza?

**Diseño de umbrales.** Las regulaciones suelen incluir umbrales: niveles de computación, puntuaciones de capacidad, niveles de riesgo. Las simulaciones pueden explorar cómo los umbrales afectan la cobertura, qué comportamientos incentivan y dónde crean efectos de precipicio.

**Diseño de la aplicación.** Dados unos recursos de aplicación limitados, ¿cómo deberían los reguladores distribuir la atención? Las simulaciones pueden modelar estrategias de auditoría, estructuras de sanciones y probabilidades de detección.

**Coordinación internacional.** El [arbitraje regulatorio](/research/008-regulatory-arbitrage/) depende de las lagunas entre jurisdicciones. Las simulaciones pueden modelar cómo los actores explotan las lagunas y qué mecanismos de coordinación las cierran.

**Planificación de la transición.** Las nuevas regulaciones alteran las disposiciones existentes. Las simulaciones pueden identificar desafíos de implementación, sugerir calendarios de implantación gradual y predecir ajustes del mercado.

**Detección de lagunas.** Antes de implementar regulaciones, simular actores adversariales que intentan eludirlas. Cerrar lagunas antes de que sean explotadas.

## Requisitos institucionales

La simulación de gobernanza eficaz requiere infraestructura institucional.

**Independencia.** Las simulaciones no deben ser controladas por partes con intereses en los resultados. Las instituciones académicas, las organizaciones de investigación independientes o los organismos gubernamentales con mandato y recursos son anfitriones apropiados.

**Transparencia.** Los supuestos del modelo, las entradas y el código deben ser públicos para que los resultados puedan ser examinados y se exploren alternativas.

**Iteración.** Las simulaciones deben repetirse a medida que mejora la comprensión y cambian las condiciones. Los análisis puntuales quedan obsoletos rápidamente.

**Humildad.** Los resultados de la simulación deben presentarse con la incertidumbre apropiada. El exceso de confianza en los modelos puede ser peor que no tener modelos.

**Integración.** La simulación es una entrada al diseño de políticas, no un sustituto de la deliberación, la consulta y el juicio.

## La conexión con la gobernanza reflexiva

La simulación de gobernanza ejemplifica el enfoque reflexivo: usar la IA para apoyar la gobernanza de la IA.

Esto crea un ciclo virtuoso. Los [esquemas de restricciones legibles por máquina](/research/003-machine-readable-constraint-schema/) permiten un modelado preciso de lo que los sistemas deben hacer. Las [evaluaciones de capacidades](/research/024-capability-evaluations/) proporcionan datos para las entradas de la simulación. Los [protocolos de IA a regulador](/research/014-ai-regulator-protocol/) podrían incorporar la simulación como componente.

Las mismas capacidades de IA que crean desafíos de gobernanza pueden abordarlos. Esto no es irónico ni contradictorio. Es la perspectiva reflexiva: los sistemas de IA pueden participar en su propia gobernanza, incluyendo ayudar a diseñar las regulaciones que los gobiernan.

## Conclusión

La simulación de gobernanza no es una panacea. Es una herramienta para someter a prueba las propuestas antes de su implementación, identificar modos de fallo y comparar alternativas.

Dados los intereses en juego en la gobernanza de IA, elaborar políticas basándose únicamente en la deliberación y la analogía parece inadecuado. Disponemos de herramientas para explorar las consecuencias de las políticas de forma sistemática. Deberíamos utilizarlas.

Esto requiere inversión en infraestructura de simulación, normas sobre cómo la simulación informa las decisiones y humildad sobre lo que la simulación puede lograr. El objetivo no es automatizar la gobernanza sino informarla: responsables humanos de la toma de decisiones con mejor información sobre las consecuencias probables.

Simular la gobernanza antes de implementarla es el equivalente político de probar el código antes de desplegarlo. Ambos parecen obvios en retrospectiva. Ambos se omiten a menudo por presión de tiempo. Ambos importan más a medida que aumentan los intereses en juego.

## Investigación relacionada

- [Red Teaming Methodologies](/research/050-red-teaming-methodologies/)
- [Regulatory Arbitrage in AI Deployment](/research/008-regulatory-arbitrage/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Dangerous Capability Evaluations](/research/024-capability-evaluations/)
- [Algorithmic Impact Assessments: Implementation Guide](/research/046-algorithmic-impact-assessments/)
