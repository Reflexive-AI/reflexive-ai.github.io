---
title: "El vacío de responsabilidad: cuando los daños de la IA quedan entre categorías jurídicas"
excerpt: "Los daños causados por la IA a menudo no encajan en los marcos legales existentes: no son exactamente responsabilidad por producto, ni mala praxis profesional, ni negligencia. Este artículo cartografía las lagunas específicas y propone soluciones focalizadas."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - liability
  - law
  - accountability
  - harms
  - legal-frameworks
---

## Daños sin remedio

Cuando los sistemas de IA causan daño, la responsabilidad legal suele ser incierta. Las categorías jurídicas existentes fueron diseñadas para tecnologías y relaciones diferentes. La IA encaja de manera incómoda entre ellas.

Un paciente perjudicado por una herramienta de diagnóstico basada en IA puede tener dificultades para exigir responsabilidades. ¿Se trata de responsabilidad por producto (la herramienta era defectuosa)? ¿Mala praxis médica (el médico debería haber detectado el error)? ¿Negligencia (alguien no actuó con la diligencia debida)? Cada categoría tiene elementos que los daños de la IA pueden no satisfacer.

Esto crea un vacío de responsabilidad: daños reales sin una vía viable de reparación.

## El problema de las categorías

La responsabilidad legal suele exigir que un daño encaje en una categoría establecida. En el caso de la IA, esto resulta difícil.

### Responsabilidad por producto

La responsabilidad por producto hace a los fabricantes responsables de productos defectuosos. La doctrina se desarrolló para objetos físicos: coches que se accidentan, electrodomésticos que se incendian, fármacos que causan efectos secundarios.

**El problema con la IA:** ¿Es un resultado de la IA un "producto"? El software ha recibido un tratamiento históricamente inconsistente. Los servicios suelen quedar excluidos. Los resultados de un modelo pueden asemejarse más al habla que a un producto. Incluso si la IA es un producto, los estándares de defecto no están claros: ¿qué hace que un modelo sea "defectuoso" cuando produce resultados probabilísticos que a veces fallan?

**Desafíos probatorios:** La responsabilidad por producto exige demostrar que el defecto causó el daño. En el caso de la IA, la causalidad puede ser difusa: el modelo contribuyó a una decisión pero no la determinó; el resultado del modelo fue una entrada entre muchas.

### Mala praxis profesional

La mala praxis hace responsables a los profesionales cuando incumplen los estándares de atención. Médicos, abogados y contables pueden ser demandados por una práctica deficiente.

**El problema con la IA:** ¿Quién es el profesional? El desarrollador de IA no es un profesional médico ni jurídico. El profesional que utiliza la herramienta puede alegar que confió razonablemente en ella. Los estándares de atención para el uso de la IA están poco desarrollados.

**El intermediario cualificado:** En medicina, los fabricantes suelen evitar la responsabilidad porque el médico prescriptor emite el juicio final. Si un médico utiliza IA, ¿es el médico el intermediario cualificado que asume la responsabilidad? ¿O la IA es diferente porque sus recomendaciones son más directivas?

### Negligencia

La negligencia requiere demostrar que el demandado tenía un deber de cuidado, incumplió ese deber y causó daño.

**El problema con la IA:** ¿Cuál es el estándar de cuidado para el desarrollo de IA? No existen estándares profesionales establecidos. "Desarrollador de IA razonable" es un concepto indefinido. Si no existe un estándar, ¿cómo se puede probar su incumplimiento?

**Previsibilidad:** La negligencia exige que el daño sea previsible. Los daños de la IA pueden surgir de interacciones que nadie anticipó. Si el daño no era previsible, las demandas por negligencia fracasan.

### Responsabilidad objetiva

Algunas actividades son tan peligrosas que la responsabilidad se aplica independientemente de la culpa. Operar reactores nucleares, mantener animales salvajes y usar explosivos generan responsabilidad objetiva.

**El problema con la IA:** ¿Es el desarrollo de IA una "actividad anormalmente peligrosa"? Los tribunales generalmente han dicho que no, tratando el desarrollo de software como una actividad empresarial ordinaria. Esto puede cambiar a medida que aumenten las capacidades de la IA, pero la doctrina actual no respalda la responsabilidad objetiva.

## Lagunas específicas

Más allá del problema de las categorías, lagunas específicas dejan determinados daños sin remedio.

### La laguna de despliegue

La responsabilidad suele recaer en la parte que toma la decisión de despliegue. Pero el despliegue de la IA implica cadenas: un desarrollador crea un modelo, una empresa lo ajusta, una plataforma lo aloja, una organización lo integra, un usuario interactúa con él.

¿En qué punto de esta cadena se atribuye la responsabilidad? Cada participante puede culpar a los demás. El desarrollador dice que proporcionó una herramienta general. La empresa dice que confió en las capacidades documentadas. La plataforma dice que simplemente lo alojó. La responsabilidad se difumina hasta evaporarse.

### La laguna de capacidades

Los modelos desarrollan capacidades que sus creadores no anticiparon. Las [capacidades emergentes](/research/009-capability-overhang/) pueden causar daños que no eran previsibles cuando el modelo fue desplegado.

¿Deberían los desarrolladores ser responsables de capacidades que desconocían? Si la respuesta es sí, se crea una responsabilidad objetiva encubierta. Si la respuesta es no, los daños derivados de capacidades emergentes carecen de remedio.

### La laguna de datos de entrenamiento

Algunos daños de la IA tienen su origen en los datos de entrenamiento: datos sesgados producen resultados sesgados; datos protegidos por derechos de autor plantean cuestiones de propiedad intelectual; datos personales plantean problemas de privacidad.

Pero los datos de entrenamiento suelen estar agregados de innumerables fuentes. ¿Quién es responsable de los daños causados por la composición de los datos de entrenamiento? ¿Las fuentes de datos? ¿Los agregadores? ¿Los desarrolladores del modelo que no filtraron? Los demandantes no pueden rastrear fácilmente su daño hasta datos específicos.

### La laguna de opacidad

Probar la causalidad requiere comprender cómo el sistema produjo el resultado dañino. En modelos opacos, esta comprensión puede ser imposible. Los demandantes no pueden acceder a los componentes internos del modelo. Incluso si pudieran, las [limitaciones de interpretabilidad](/research/051-interpretability-governance/) significan que esos componentes internos no explican los resultados en términos jurídicamente útiles.

### La laguna de autonomía

La responsabilidad tradicional presupone una decisión humana. Un ser humano decidió actuar; ese ser humano es responsable. Pero los sistemas de IA toman cada vez más decisiones sin revisión humana.

Si ningún ser humano revisó la decisión dañina, ¿quién es responsable? ¿El humano que desplegó el sistema? ¿El humano que lo diseñó? ¿El humano que lo entrenó? Ninguno de estos humanos tomó la decisión dañina concreta.

## Soluciones focalizadas

En lugar de regímenes de responsabilidad completamente nuevos, soluciones focalizadas pueden abordar lagunas específicas.

### Clasificación clara como producto

Los legisladores podrían aclarar que los sistemas de IA son productos sujetos a responsabilidad por producto. Esto resuelve la cuestión de clasificación pero deja sin resolver los estándares de defecto.

Más concretamente, la legislación podría definir el defecto para la IA: quizás como una desviación material de las capacidades documentadas, o como la omisión de pruebas de seguridad razonables.

### Responsabilidad del implementador

La entidad que toma la decisión de despliegue podría asumir la responsabilidad principal con independencia de las contribuciones de la cadena de suministro. Los implementadores están en la mejor posición para evaluar si la IA es adecuada para su caso de uso.

Esto crea incentivos para que los implementadores evalúen los sistemas antes del despliegue, exijan garantías contractuales a los desarrolladores y mantengan la supervisión durante la operación.

### Requisitos de divulgación del desarrollador

Si se exige a los desarrolladores que [divulguen limitaciones, modos de fallo conocidos y resultados de evaluación](/research/001-proportionality-disclosure/), se convierten en responsables de aquellos daños que la información divulgada debería haber prevenido.

Un implementador que procedió a pesar de los riesgos divulgados asume la responsabilidad. Un implementador que no fue advertido tiene una reclamación contra el desarrollador.

### Estándares de cuidado documentados

Los estándares de la industria, los [regímenes de certificación](/research/041-certification-regimes/) y los requisitos regulatorios crean estándares aplicables para las demandas por negligencia.

Una vez que el estándar de cuidado está documentado, el incumplimiento se vuelve demostrable. Un desarrollador que no realizó las evaluaciones de seguridad requeridas infringió el estándar. Un implementador que omitió la supervisión humana obligatoria incumplió su deber.

### Requisitos de auditoría

Las [pistas de auditoría](/research/010-self-reporting-vs-audit/) obligatorias pueden abordar la laguna de opacidad. Si los sistemas deben mantener registros de entradas, salidas y factores de decisión, los demandantes pueden acceder a esta información durante el proceso de descubrimiento.

Los requisitos de auditoría también crean responsabilidad por no mantener registros adecuados.

### Mandatos de seguro

Exigir a los implementadores de IA que contraten un seguro de responsabilidad crea rendición de cuentas financiera incluso cuando la responsabilidad individual no está clara.

Las aseguradoras desarrollan experiencia en evaluación de riesgos y generan presión para la reducción de riesgos. Los [mercados de seguros](/research/036-insurance-markets/) se convierten en mecanismos de gobernanza.

## La contribución reflexiva

Los mecanismos de gobernanza reflexiva respaldan los marcos de responsabilidad.

**Documentación.** Las [restricciones legibles por máquina](/research/003-machine-readable-constraint-schema/) y las limitaciones documentadas crean la base probatoria para las demandas de responsabilidad. La desviación de las restricciones documentadas es impugnable.

**Registro.** Los sistemas que mantienen registros exhaustivos permiten la reconstrucción posterior de lo que salió mal. Esto aborda la laguna de opacidad.

**Automonitorización.** Los sistemas que [detectan sus propias anomalías](/research/011-reflexive-misuse-detection/) y alertan a los operadores crean oportunidades de intervención antes de que se produzca el daño. No responder a las alertas podría constituir negligencia.

**Transparencia.** Una documentación clara de las restricciones reduce la capacidad del implementador de alegar desconocimiento. Las limitaciones publicadas se convierten en riesgos asumidos.

## Conclusión

El vacío de responsabilidad no es un problema único, sino un conjunto de lagunas donde los daños de la IA quedan entre las categorías jurídicas existentes.

Los marcos de responsabilidad completamente nuevos pueden ser innecesarios y lentos de desarrollar. Soluciones focalizadas que aclaren la clasificación de productos, establezcan estándares de cuidado, creen requisitos de documentación y obliguen a contratar seguros pueden llenar lagunas específicas de manera incremental.

La gobernanza reflexiva contribuye creando infraestructura probatoria: documentación que permite demandas de responsabilidad, registros que prueban lo que sucedió y transparencia que asigna la responsabilidad con claridad.

La responsabilidad por sí sola no previene el daño. Pero unos marcos de responsabilidad funcionales crean incentivos para la seguridad que la regulación por sí sola no puede generar. Cuando las organizaciones afrontan consecuencias financieras por los daños, invierten en prevención. El vacío de responsabilidad elimina estos incentivos.

## Investigación relacionada

- [Liability Frameworks for AI Harm](/research/020-liability-frameworks/)
- [Insurance Markets and AI Risk Pricing](/research/036-insurance-markets/)
- [Certification Regimes for AI Systems](/research/041-certification-regimes/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
