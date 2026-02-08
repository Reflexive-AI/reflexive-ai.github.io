---
title: "IA de uso dual: el caso de la investigación biológica"
excerpt: "Cómo la IA está transformando la investigación biológica, y por qué las mismas capacidades que podrían curar enfermedades podrían facilitar armas biológicas. Un estudio de caso en gobernanza de uso dual."
date: 2026-01-17
categories:
  - Governance Analysis
tags:
  - dual-use
  - cbrn
  - safety
  - risk-assessment
  - governance
---

## El dilema del uso dual

Algunas tecnologías son inherentemente de uso dual: las mismas capacidades que permiten aplicaciones beneficiosas también permiten aplicaciones dañinas. La física nuclear nos da tanto centrales eléctricas como armas. La criptografía protege tanto a disidentes como a delincuentes.

La IA aplicada a la investigación biológica es quizás el ejemplo contemporáneo más importante de tecnología de uso dual. Los mismos sistemas de IA que podrían acelerar el descubrimiento de fármacos, predecir estructuras de proteínas y diseñar terapias novedosas también podrían potencialmente ayudar a actores maliciosos a crear patógenos peligrosos.

Este análisis examina el problema de uso dual entre IA y biología como un estudio de caso en desafíos de gobernanza: cómo podemos capturar los beneficios mitigando al mismo tiempo los riesgos catastróficos.

## Lo que la IA puede hacer en biología

Las capacidades de la IA en la investigación biológica han avanzado dramáticamente.

**Predicción de estructuras de proteínas.** AlphaFold y sistemas similares pueden predecir cómo las proteínas se pliegan en estructuras tridimensionales a partir de sus secuencias de aminoácidos. Esto acelera el descubrimiento de fármacos, la comprensión de enfermedades y la investigación biológica fundamental.

**Diseño molecular.** Los sistemas de IA pueden diseñar moléculas nuevas con propiedades deseadas: fármacos potenciales, catalizadores y materiales. Esto podría acelerar dramáticamente el desarrollo farmacéutico.

**Análisis genómico.** La IA puede identificar patrones en datos genómicos que serían imposibles de detectar para los humanos, avanzando en la comprensión de enfermedades genéticas y tratamientos potenciales.

**Automatización de laboratorios.** Los sistemas de IA controlan cada vez más los equipos de laboratorio, permitiendo experimentos más rápidos y diseños experimentales novedosos.

**Planificación de síntesis.** La IA puede determinar cómo sintetizar moléculas complejas, proporcionando instrucciones paso a paso para la producción química.

Estas capacidades ya están transformando la investigación biológica. También son la razón por la que los expertos en seguridad están preocupados.

## El riesgo de armas biológicas

Las mismas capacidades de la IA que aceleran la investigación beneficiosa podrían potencialmente acelerar el desarrollo de armas.

**Diseño de patógenos.** Los sistemas de IA que comprenden las estructuras de las proteínas y la evasión inmunológica podrían potencialmente ayudar a diseñar patógenos que sean más transmisibles, más letales o más resistentes a los tratamientos.

**Orientación para la síntesis.** La IA que proporciona instrucciones de síntesis para moléculas beneficiosas también podría proporcionar instrucciones para moléculas peligrosas. Un sistema de IA que ayuda a los investigadores a sintetizar un fármaco potencial podría, sin las salvaguardas adecuadas, ayudar a actores maliciosos a sintetizar una toxina.

**Reducción de barreras.** Quizás lo más preocupante es que la IA podría reducir las barreras de experiencia para el desarrollo de armas biológicas. Crear patógenos peligrosos actualmente requiere habilidades de laboratorio sofisticadas y un conocimiento biológico profundo. La asistencia de la IA podría hacer que tales actividades sean accesibles para quienes carecen de la experiencia tradicional.

**Aceleración.** Incluso si la IA no permite nada que no fuera teóricamente posible antes, podría acelerar dramáticamente los plazos de desarrollo. Un arma biológica que llevaría a un actor estatal años de desarrollo podría ser alcanzable en meses con asistencia de IA.

Esta es la esencia del uso dual: las capacidades que son beneficiosas en contextos legítimos se vuelven peligrosas cuando se aplican con intención maliciosa.

## Cómo esto se conecta con otros riesgos

El problema de uso dual entre IA y biología se conecta con desafíos de gobernanza más amplios que hemos explorado.

**Excedente de capacidades.** Como discutimos en [el problema del excedente de capacidades](/research/009-capability-overhang/), los sistemas de IA pueden tener capacidades peligrosas que no son conocidas públicamente ni probadas. Esto es particularmente preocupante para la biología, donde las capacidades peligrosas podrían no descubrirse hasta que se utilicen indebidamente.

**Dilemas de divulgación.** ¿Cuánto debe divulgarse sobre las capacidades de la IA en biología? Publicar investigaciones permite aplicaciones beneficiosas pero también informa a los adversarios. Esto conecta con nuestro análisis de [la proporcionalidad en la divulgación](/research/001-proportionality-disclosure/).

**Los límites del rechazo.** Exploramos [cuándo la IA debe rechazar](/research/025-when-ai-should-refuse/) solicitudes. La investigación biológica presenta casos difíciles: las solicitudes de información sobre síntesis pueden ser investigación legítima o preparación de armas biológicas, y los sistemas de IA carecen de contexto para distinguir de manera fiable.

**Líneas rojas.** Algunas capacidades podrían justificar restricciones absolutas. Nuestra [taxonomía de límites no negociables de la IA](/research/004-red-lines-taxonomy/) identificó la asistencia con armas QBRN (químicas, biológicas, radiológicas, nucleares) como una posible línea roja. Pero trazar la línea con precisión es difícil.

## Enfoques actuales de gobernanza

Varios mecanismos de gobernanza intentan abordar los riesgos entre IA y biologia.

### Gobernanza existente de armas biológicas

La Convención sobre Armas Biológicas (CAB) prohíbe el desarrollo y la producción de armas biológicas. Sin embargo, carece de mecanismos de verificación y capacidad de aplicación. Fue diseñada para actores estatales y se adapta mal a las amenazas habilitadas por IA de actores no estatales.

### Restricciones de modelos de IA

Los principales laboratorios de IA implementan restricciones sobre información biológica. Los sistemas son entrenados para rechazar solicitudes de instrucciones para la creación de patógenos, la síntesis de moléculas peligrosas y consultas similares.

Sin embargo, estas restricciones enfrentan desafíos:

- **Evasión.** Los usuarios a veces pueden hacer que los sistemas de IA proporcionen información restringida a través de consultas indirectas o técnicas de jailbreaking.
- **Modelos abiertos.** Las restricciones en los servicios cerrados de API no se aplican a los modelos de pesos abiertos que pueden ser modificados.
- **Conocimiento de uso dual.** La misma información necesaria para el desarrollo de fármacos podría permitir el desarrollo de armas biológicas. Restringir todo el conocimiento potencialmente peligroso paralizaría las aplicaciones beneficiosas.

### Comunidades de bioseguridad

La comunidad de bioseguridad ha desarrollado normas sobre investigación responsable:

- Los comités institucionales de bioseguridad revisan la investigación peligrosa
- Las políticas de Investigación de Uso Dual Preocupante (DURC) requieren revisión especial
- Algunas investigaciones se restringen de la publicación por razones de seguridad

Estas normas podrían potencialmente extenderse a la investigación biológica con IA, pero los mecanismos de aplicación son débiles y la cobertura es incompleta.

### Evaluaciones de capacidades

Como discutimos en [evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/), los laboratorios de IA están comenzando a probar los sistemas para detectar capacidades biológicas antes del despliegue. Esto es valioso pero limitado: las evaluaciones pueden no detectar capacidades que existen pero no se prueban.

## Propuestas de gobernanza

Varias propuestas buscan fortalecer la gobernanza de los riesgos de uso dual entre IA y biologia.

### Acceso estructurado

En lugar de liberar sistemas de IA potentes de manera abierta, restringir el acceso a través de APIs que puedan monitorizar el uso, implementar límites de uso y detectar consultas preocupantes. Esto permite la investigación beneficiosa mientras crea supervisión.

Limitaciones: No aborda los modelos de pesos abiertos. La monitorización a escala es difícil. Los adversarios sofisticados pueden evadir la detección.

### Requisitos de conocimiento del cliente

Requerir la verificación de la identidad del usuario y del propósito legítimo antes de proporcionar acceso a herramientas de IA potentes para aplicaciones biológicas. Similar a los controles sobre productos químicos peligrosos o equipos de laboratorio.

Limitaciones: Crea barreras a la investigación legítima. Puede concentrar las capacidades de IA biológica en instituciones con muchos recursos.

### Gobernanza del computo

Restringir el acceso a los recursos computacionales necesarios para entrenar modelos de IA peligrosos. Como examinamos en [la gobernanza del computo](/research/023-compute-governance/), el computo es un posible punto de estrangulamiento para la gobernanza.

Limitaciones: Se aplica al entrenamiento, no a la inferencia. La gobernanza del computo es difícil de implementar internacionalmente. Puede volverse menos eficaz a medida que el entrenamiento se hace más eficiente.

### Estándares de equipos rojos

Requerir una evaluación rigurosa de bioseguridad antes de desplegar sistemas de IA con capacidades biológicas. Establecer estándares sobre qué deben cubrir las evaluaciones y qué resultados justifican restricciones de despliegue.

Limitaciones: Las evaluaciones pueden ser incompletas. Los estándares requieren desarrollo experto y actualización continua. Los actores adversarios no se autoevaluarán.

### Protocolos de riesgo informacional

Desarrollar marcos más claros sobre cuándo la investigación sobre capacidades de IA-biología debe restringirse de su publicación. Equilibrar la apertura científica frente a los riesgos de seguridad.

Limitaciones: La restricción de la publicación académica no impide el desarrollo privado. Las decisiones sobre qué restringir son controvertidas.

## Por qué esto es difícil

El caso de la IA-biología ilustra tensiones fundamentales en la gobernanza de uso dual.

**Compromisos beneficio-riesgo.** La IA podría acelerar masivamente la investigación biológica beneficiosa, potencialmente salvando millones de vidas. Las restricciones que previenen el desarrollo de armas biológicas también pueden ralentizar la investigación que salva vidas. Ningún marco separa limpiamente el beneficio del riesgo.

**Normas de apertura.** La ciencia ha valorado tradicionalmente la apertura: la replicación, la revisión por pares y la construcción sobre el trabajo de otros. Las preocupaciones de seguridad empujan hacia el cierre y la restricción, creando tensión con la cultura científica.

**Dificultad de atribución.** A diferencia de las armas nucleares, el desarrollo de armas biológicas puede ser difícil de detectar y atribuir. Esto socava la disuasión y la rendición de cuentas.

**Desarrollo privado.** Los gobiernos y los organismos internacionales pueden regular la investigación pública. El desarrollo privado y clandestino es más difícil de gobernar.

**Velocidad del cambio.** Tanto la IA como la biología avanzan rápidamente. Los marcos de gobernanza diseñados hoy pueden quedar obsoletos en años.

## La dimensión reflexiva

Nuestro trabajo sobre gobernanza reflexiva de la IA ofrece algunas perspectivas relevantes.

Los sistemas de IA podrían potencialmente participar en la gobernanza de la bioseguridad:

- **Autolimitación.** Los sistemas entrenados con objetivos de seguridad pueden rechazar solicitudes peligrosas, una forma de [restricción legible por máquina](/research/003-machine-readable-constraint-schema/).
- **Monitorización.** Los sistemas de IA podrían monitorizar patrones de uso preocupantes, aunque esto plantea preocupaciones de vigilancia.
- **Explicar los límites.** Los sistemas podrían [explicar sus restricciones](/research/026-explaining-constraints/) a los usuarios, creando comprensión en lugar de solo restricción.

Sin embargo, [los límites de la autolimitación](/research/013-limits-of-self-constraint/) también se aplican aquí. Las restricciones técnicas pueden ser eludidas. Los mecanismos de gobernanza institucionales y sociales siguen siendo esenciales.

## Lo que podría funcionar

Dados estos desafíos, una gobernanza eficaz probablemente requiere:

**Defensa por capas.** Ninguna medida única es suficiente. Combinar restricciones técnicas, controles de acceso, monitorización de uso, desarrollo de normas y responsabilidad legal.

**Inversión en investigación.** Las implicaciones de bioseguridad de la IA necesitan más investigación, tanto estudio empírico de los riesgos actuales como desarrollo de mejores herramientas de gobernanza.

**Participación de las partes interesadas.** Los desarrolladores de IA, los biólogos, los expertos en bioseguridad y los responsables políticos deben colaborar. Ninguna comunidad por sí sola tiene suficiente experiencia.

**Coordinación internacional.** Dada la naturaleza global tanto de la IA como de la biología, la gobernanza puramente nacional es insuficiente. Pero la coordinación internacional es difícil de lograr.

**Mecanismos adaptativos.** Construir una gobernanza que pueda evolucionar a medida que avanza la tecnología. Las restricciones técnicas específicas quedarán obsoletas rápidamente; las instituciones robustas pueden adaptarse.

Lo que está en juego es mucho. Hacer bien la gobernanza de la IA-biología podría significar la diferencia entre una era de abundancia biológica y una era de riesgo biológico.

## Lecturas adicionales

- [El problema del excedente de capacidades](/research/009-capability-overhang/)
- [Líneas rojas: una taxonomía de límites no negociables de la IA](/research/004-red-lines-taxonomy/)
- [Cuándo la IA debe rechazar: un marco](/research/025-when-ai-should-refuse/)
- [Evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/)
