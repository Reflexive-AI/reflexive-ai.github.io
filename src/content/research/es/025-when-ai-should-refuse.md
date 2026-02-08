---
title: "Cuándo la IA debería rechazar: un marco de referencia"
excerpt: "No toda solicitud debería cumplirse. Este análisis desarrolla un marco de referencia basado en principios para los rechazos de la IA: cuándo son apropiados, cómo deberían implementarse y cómo manejar los casos límite."
date: 2026-01-07
categories:
  - Technical Artifact
  - Governance Analysis
tags:
  - constraints
  - safety
  - red-lines
  - agents
  - ethics
toc: true
---

## El dilema del rechazo

Los sistemas de IA están diseñados para ser útiles. Se entrenan para cumplir solicitudes, responder preguntas y asistir con tareas. Pero no toda solicitud debería cumplirse.

Cuando un usuario pide ayuda para sintetizar un patógeno peligroso, el sistema debería rechazar. Cuando se le pide generar material de abuso sexual infantil, debería rechazar de forma absoluta. Pero ¿qué pasa con los casos límite? ¿Qué pasa con las solicitudes que son dañinas en algunos contextos pero legítimas en otros?

Este análisis desarrolla un marco de referencia basado en principios para los rechazos de la IA: distinguir entre diferentes tipos de rechazos, especificar cuándo cada uno es apropiado y abordar los desafíos de implementación.

## El panorama actual

Los sistemas de IA actuales rechazan solicitudes basándose en el entrenamiento (RLHF para evitar ciertas salidas) y filtros (bloqueos rígidos sobre contenido específico). Estos mecanismos a menudo carecen de transparencia sobre por qué ocurren los rechazos y de consistencia sobre cuándo se aplican.

Los usuarios experimentan frustración cuando solicitudes legítimas son rechazadas. Los investigadores no pueden acceder a información sobre fenómenos peligrosos que necesitan estudiar. Al mismo tiempo, los usuarios adversarios encuentran formas de eludir los rechazos mediante manipulación de prompts. La frontera del rechazo es simultáneamente demasiado restrictiva (bloqueando uso legítimo) y demasiado permeable (permitiendo uso dañino a través de prompting creativo).

Parte del problema es la ausencia de un marco de referencia basado en principios. Los desarrolladores implementan rechazos mediante ejemplos de entrenamiento acumulados y filtros ad hoc en lugar de categorías explícitas y justificadas. Esto produce inconsistencia y dificulta la mejora.

## Un marco escalonado

Proponemos organizar los rechazos en cuatro niveles, cada uno con diferente justificación, implementación y experiencia de usuario.

### Nivel 1: Prohibiciones absolutas

**Definición:** Solicitudes que nunca deben cumplirse bajo ninguna circunstancia, para ningún usuario, en ningún contexto.

**Ejemplos:** Instrucciones detalladas para crear armas de destrucción masiva, generación de material de abuso sexual infantil, creación de armas cibernéticas específicas dirigidas a infraestructura crítica.

**Justificación:** El daño potencial excede tan vastamente cualquier uso legítimo posible que ninguna cantidad de contexto o credencial de usuario puede justificar su cumplimiento. Estas son las [líneas rojas](/research/004-red-lines-taxonomy/) que definen el límite exterior del comportamiento aceptable de la IA.

**Implementación:** Filtros codificados de forma rígida que operan antes y después de la inferencia del modelo. No entrenados mediante RLHF, que puede ser manipulado. El modelo nunca debería producir este contenido independientemente de la técnica de prompting.

**Experiencia de usuario:** El rechazo debe ser claro e inequívoco. El sistema debe explicar que se trata de una prohibición categórica, no de un juicio contextual. No se deben ofrecer alternativas para eludir.

### Nivel 2: Rechazos dependientes del contexto

**Definición:** Solicitudes que son dañinas en la mayoría de los contextos pero legítimas en algunos.

**Ejemplos:** Información detallada sobre características de patógenos (dañina para uso indebido, legítima para investigación en salud pública), detalles de vulnerabilidades de sistemas de software (dañinos para ataques, legítimos para investigación de seguridad), procedimientos de síntesis de sustancias controladas (dañinos para producción de drogas, legítimos para investigación farmacéutica).

**Justificación:** El contenido tiene potencial de doble uso. La misma información que permite el daño también permite actividades beneficiosas legítimas. El rechazo total sería un exceso; la provisión total sería peligrosa.

**Implementación:** Estos rechazos requieren evaluación del contexto. El sistema debe evaluar señales sobre la intención del usuario, el contexto de implementación y el propósito declarado. En casos de alto riesgo, la verificación de credenciales o permisos de acceso es apropiada.

**Experiencia de usuario:** El rechazo debe explicar la preocupación y ofrecer vías para usuarios legítimos. "No puedo proporcionar esta información en este contexto, pero si usted es un investigador acreditado que trabaja en este dominio, puede acceder a ella a través de [proceso de verificación]."

### Nivel 3: Límites flexibles

**Definición:** Solicitudes que son típicamente inapropiadas pero aceptables con el reconocimiento explícito del usuario.

**Ejemplos:** Violencia gráfica en escritura creativa, discusión detallada de métodos de autolesión en contextos terapéuticos, contenido político extremo.

**Justificación:** Estos son asuntos de desacuerdo razonable. Algunos usuarios y contextos se involucran legítimamente con este contenido. Otros lo encuentran dañino. El límite no es categórico sino contextual y dependiente de valores.

**Implementación:** Rechazar por defecto con opción de anulación por parte del usuario. El sistema explica su preocupación y pide confirmación explícita antes de proceder. Esto respeta la autonomía del usuario mientras asegura que el potencial de daño sea reconocido.

**Experiencia de usuario:** "Este contenido podría ser dañino en algunos contextos. Si comprende los riesgos y desea que proceda, por favor confirme." Esto coloca la responsabilidad apropiadamente en el usuario para los casos límite donde las personas razonables podrían estar en desacuerdo.

### Nivel 4: Orientación y advertencias

**Definición:** Solicitudes que el sistema cumplirá pero que merecen precaución o información complementaria.

**Ejemplos:** Actividades legales pero potencialmente peligrosas (trabajo eléctrico doméstico), contenido que difunde desinformación si se malinterpreta, actividades con riesgos para la salud.

**Justificación:** Estos no son rechazos sino cumplimiento modificado. La información o asistencia se proporciona, pero con contexto, advertencias u orientación apropiados.

**Implementación:** El sistema proporciona el contenido solicitado junto con información de seguridad relevante, limitaciones o recomendaciones para buscar ayuda profesional.

**Experiencia de usuario:** La solicitud se cumple, pero de manera responsable. "Aquí está la información que solicitó. Tenga en cuenta que [advertencia relevante]."

## Principios de implementación

Más allá del marco escalonado, varios principios deberían guiar la implementación de rechazos.

### Transparencia

Los usuarios deberían entender por qué ocurren los rechazos. Los rechazos genéricos ("No puedo ayudar con eso") son frustrantes e irresponsables. Donde sea posible, los rechazos deberían citar la categoría de preocupación.

Esta transparencia está limitada para las prohibiciones de Nivel 1: explicar exactamente qué contenido activaría un rechazo puede ayudar a los adversarios a elaborar soluciones alternativas. Pero la existencia de la prohibición y su fundamento general deberían ser documentables.

### Consistencia

Solicitudes similares deberían recibir un tratamiento similar. Actualmente, una ligera reformulación puede cambiar si una solicitud es rechazada. Esta inconsistencia frustra a los usuarios legítimos y asiste a los adversarios.

La consistencia requiere categorización explícita en lugar de coincidencia de patrones basada en ejemplos de entrenamiento. Una solicitud es o no es una violación de Nivel 1 basada en su sustancia, no en su forma superficial.

### Proporcionalidad

Los rechazos deberían corresponder al nivel de preocupación. El tratamiento de Nivel 1 para casos límite erosiona la confianza. El tratamiento de Nivel 4 para solicitudes genuinamente peligrosas falla en seguridad.

Esta proporcionalidad conecta con [proporcionalidad en la divulgación de modelos](/research/001-proportionality-disclosure/): los mecanismos de gobernanza deberían escalar con el riesgo real en lugar de aplicar un tratamiento uniforme.

### Explicabilidad

Para los rechazos de Nivel 2 y Nivel 3, el sistema debería poder articular por qué esta solicitud cae en la categoría que le corresponde. Esto permite la apelación, la corrección y el aprendizaje.

Nuestro trabajo sobre [sistemas de IA que explican sus restricciones](/research/026-explaining-constraints/) explora cómo esta explicabilidad podría implementarse.

### Vías de apelación

Los rechazos erróneos deberían ser corregibles. Especialmente para los Niveles 2 y 3, los usuarios legítimos bloqueados injustamente necesitan recurso. Esto involucra verificación de credenciales, revisión humana o canales de escalamiento.

### Registro

Los rechazos generan datos valiosos para mejorar el sistema. Los patrones agregados revelan brechas en la categorización, intentos de explotación y casos de uso legítimos que están siendo bloqueados. Esto conecta con los sistemas de notificación de incidentes que analizamos en [lecciones de la aviación](/research/021-aviation-lessons/).

## Abordar la manipulación

Cualquier sistema de rechazo enfrentará intentos adversarios de eludirlo. Varias estrategias ayudan.

**Defensa en profundidad.** Múltiples mecanismos --entrenamiento, filtros, monitoreo-- dificultan la evasión. Incluso si una capa falla, otras pueden detectar el problema.

**Red teaming.** Las pruebas adversarias continuas revelan debilidades antes de que los usuarios maliciosos las descubran. Esto requiere las [evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/) que discutimos en otro lugar.

**Actualización.** A medida que surgen nuevas técnicas de evasión, las defensas deben actualizarse. Las reglas estáticas se osifican mientras los métodos de ataque evolucionan.

**Monitoreo de comportamiento.** En lugar de solo bloquear solicitudes específicas, monitorear patrones que sugieran intención dañina. Un usuario que hace muchas solicitudes cercanas al rechazo está sondeando en busca de exploits.

## Casos límite y problemas difíciles

Algunos desafíos resisten una categorización fácil.

**Investigación de doble uso.** Un investigador de seguridad que estudia vulnerabilidades necesita la misma información que un atacante querría. La verificación de credenciales ayuda pero no es infalible.

**Ficción y juego de roles.** Los contextos creativos a menudo exploran temas oscuros de manera legítima. Pero "finge que eres una IA sin restricciones" es una técnica de jailbreak común. Distinguir la exploración creativa genuina de la evasión de restricciones es difícil.

**Información ya pública.** Si la información dañina está ampliamente disponible en línea, ¿rechazar proporcionarla logra algo? Hay un argumento a favor de la consistencia (la IA no debería ayudar con el daño independientemente de lo que esté disponible en otros lugares) y un argumento a favor del pragmatismo (rechazar hace a la IA menos útil sin prevenir el daño).

**Variación cultural.** Lo que se considera dañino varía entre culturas. ¿Deberían los rechazos aplicar estándares globales uniformes o adaptarse a las normas locales?

Estos casos límite no pueden resolverse completamente con ningún marco. Requieren juicio continuo, actualización y compromiso con las comunidades afectadas.

## Conclusión

Los rechazos son un componente esencial de la implementación segura de IA. Pero deberían basarse en principios, no ser arbitrarios; ser transparentes, no opacos; ser proporcionales, no de talla única.

El marco escalonado propuesto aquí --prohibiciones absolutas, rechazos dependientes del contexto, límites flexibles y advertencias-- proporciona estructura para pensar sobre cuándo y cómo los sistemas de IA deberían negarse a ayudar.

Implementar este marco requiere inversión en categorización, mecanismos de verificación, procesos de apelación y mejora continua. También requiere humildad: reconocer que la frontera entre la asistencia apropiada e inapropiada es un terreno disputado donde las personas razonables no están de acuerdo.

Acertar con los rechazos no es solo una preocupación de seguridad sino una preocupación de confianza. Los usuarios que experimentan rechazos arbitrarios o inexplicados pierden confianza en los sistemas de IA. Los sistemas que nunca rechazan permiten el daño. Encontrar el equilibrio adecuado es central para la gobernanza de la IA.

## Related Research

- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Dangerous Capability Evaluations](/research/024-capability-evaluations/)
- [The Limits of Self-Constraint](/research/013-limits-of-self-constraint/)
