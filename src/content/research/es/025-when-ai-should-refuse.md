---
title: "Cuando la IA deberia rechazar: un marco de referencia"
excerpt: "No toda solicitud deberia cumplirse. Este analisis desarrolla un marco de referencia basado en principios para los rechazos de la IA: cuando son apropiados, como deberian implementarse y como manejar los casos limite."
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

Los sistemas de IA estan disenados para ser utiles. Se entrenan para cumplir solicitudes, responder preguntas y asistir con tareas. Pero no toda solicitud deberia cumplirse.

Cuando un usuario pide ayuda para sintetizar un patogeno peligroso, el sistema deberia rechazar. Cuando se le pide generar material de abuso sexual infantil, deberia rechazar de forma absoluta. Pero que pasa con los casos limite? Que pasa con las solicitudes que son daninas en algunos contextos pero legitimas en otros?

Este analisis desarrolla un marco de referencia basado en principios para los rechazos de la IA: distinguir entre diferentes tipos de rechazos, especificar cuando cada uno es apropiado y abordar los desafios de implementacion.

## El panorama actual

Los sistemas de IA actuales rechazan solicitudes basandose en el entrenamiento (RLHF para evitar ciertas salidas) y filtros (bloqueos rigidos sobre contenido especifico). Estos mecanismos a menudo carecen de transparencia sobre por que ocurren los rechazos y de consistencia sobre cuando se aplican.

Los usuarios experimentan frustracion cuando solicitudes legitimas son rechazadas. Los investigadores no pueden acceder a informacion sobre fenomenos peligrosos que necesitan estudiar. Al mismo tiempo, los usuarios adversarios encuentran formas de eludir los rechazos mediante manipulacion de prompts. La frontera del rechazo es simultaneamente demasiado restrictiva (bloqueando uso legitimo) y demasiado permeable (permitiendo uso danino a traves de prompting creativo).

Parte del problema es la ausencia de un marco de referencia basado en principios. Los desarrolladores implementan rechazos mediante ejemplos de entrenamiento acumulados y filtros ad hoc en lugar de categorias explicitas y justificadas. Esto produce inconsistencia y dificulta la mejora.

## Un marco escalonado

Proponemos organizar los rechazos en cuatro niveles, cada uno con diferente justificacion, implementacion y experiencia de usuario.

### Nivel 1: Prohibiciones absolutas

**Definicion:** Solicitudes que nunca deben cumplirse bajo ninguna circunstancia, para ningun usuario, en ningun contexto.

**Ejemplos:** Instrucciones detalladas para crear armas de destruccion masiva, generacion de material de abuso sexual infantil, creacion de armas ciberneticas especificas dirigidas a infraestructura critica.

**Justificacion:** El dano potencial excede tan vastamente cualquier uso legitimo posible que ninguna cantidad de contexto o credencial de usuario puede justificar su cumplimiento. Estas son las [lineas rojas](/research/004-red-lines-taxonomy/) que definen el limite exterior del comportamiento aceptable de la IA.

**Implementacion:** Filtros codificados de forma rigida que operan antes y despues de la inferencia del modelo. No entrenados mediante RLHF, que puede ser manipulado. El modelo nunca deberia producir este contenido independientemente de la tecnica de prompting.

**Experiencia de usuario:** El rechazo debe ser claro e inequivoco. El sistema debe explicar que se trata de una prohibicion categorica, no de un juicio contextual. No se deben ofrecer alternativas para eludir.

### Nivel 2: Rechazos dependientes del contexto

**Definicion:** Solicitudes que son daninas en la mayoria de los contextos pero legitimas en algunos.

**Ejemplos:** Informacion detallada sobre caracteristicas de patogenos (danina para uso indebido, legitima para investigacion en salud publica), detalles de vulnerabilidades de sistemas de software (daninos para ataques, legitimos para investigacion de seguridad), procedimientos de sintesis de sustancias controladas (daninos para produccion de drogas, legitimos para investigacion farmaceutica).

**Justificacion:** El contenido tiene potencial de doble uso. La misma informacion que permite el dano tambien permite actividades beneficiosas legitimas. El rechazo total seria un exceso; la provision total seria peligrosa.

**Implementacion:** Estos rechazos requieren evaluacion del contexto. El sistema debe evaluar senales sobre la intencion del usuario, el contexto de implementacion y el proposito declarado. En casos de alto riesgo, la verificacion de credenciales o permisos de acceso es apropiada.

**Experiencia de usuario:** El rechazo debe explicar la preocupacion y ofrecer vias para usuarios legitimos. "No puedo proporcionar esta informacion en este contexto, pero si usted es un investigador acreditado que trabaja en este dominio, puede acceder a ella a traves de [proceso de verificacion]."

### Nivel 3: Limites flexibles

**Definicion:** Solicitudes que son tipicamente inapropiadas pero aceptables con el reconocimiento explicito del usuario.

**Ejemplos:** Violencia grafica en escritura creativa, discusion detallada de metodos de autolesion en contextos terapeuticos, contenido politico extremo.

**Justificacion:** Estos son asuntos de desacuerdo razonable. Algunos usuarios y contextos se involucran legitimamente con este contenido. Otros lo encuentran danino. El limite no es categorico sino contextual y dependiente de valores.

**Implementacion:** Rechazar por defecto con opcion de anulacion por parte del usuario. El sistema explica su preocupacion y pide confirmacion explicita antes de proceder. Esto respeta la autonomia del usuario mientras asegura que el potencial de dano sea reconocido.

**Experiencia de usuario:** "Este contenido podria ser danino en algunos contextos. Si comprende los riesgos y desea que proceda, por favor confirme." Esto coloca la responsabilidad apropiadamente en el usuario para los casos limite donde las personas razonables podrian estar en desacuerdo.

### Nivel 4: Orientacion y advertencias

**Definicion:** Solicitudes que el sistema cumplira pero que merecen precaucion o informacion complementaria.

**Ejemplos:** Actividades legales pero potencialmente peligrosas (trabajo electrico domestico), contenido que difunde desinformacion si se malinterpreta, actividades con riesgos para la salud.

**Justificacion:** Estos no son rechazos sino cumplimiento modificado. La informacion o asistencia se proporciona, pero con contexto, advertencias u orientacion apropiados.

**Implementacion:** El sistema proporciona el contenido solicitado junto con informacion de seguridad relevante, limitaciones o recomendaciones para buscar ayuda profesional.

**Experiencia de usuario:** La solicitud se cumple, pero de manera responsable. "Aqui esta la informacion que solicito. Tenga en cuenta que [advertencia relevante]."

## Principios de implementacion

Mas alla del marco escalonado, varios principios deberian guiar la implementacion de rechazos.

### Transparencia

Los usuarios deberian entender por que ocurren los rechazos. Los rechazos genericos ("No puedo ayudar con eso") son frustrantes e irresponsables. Donde sea posible, los rechazos deberian citar la categoria de preocupacion.

Esta transparencia esta limitada para las prohibiciones de Nivel 1: explicar exactamente que contenido activaria un rechazo puede ayudar a los adversarios a elaborar soluciones alternativas. Pero la existencia de la prohibicion y su fundamento general deberian ser documentables.

### Consistencia

Solicitudes similares deberian recibir un tratamiento similar. Actualmente, una ligera reformulacion puede cambiar si una solicitud es rechazada. Esta inconsistencia frustra a los usuarios legitimos y asiste a los adversarios.

La consistencia requiere categorizacion explicita en lugar de coincidencia de patrones basada en ejemplos de entrenamiento. Una solicitud es o no es una violacion de Nivel 1 basada en su sustancia, no en su forma superficial.

### Proporcionalidad

Los rechazos deberian corresponder al nivel de preocupacion. El tratamiento de Nivel 1 para casos limite erosiona la confianza. El tratamiento de Nivel 4 para solicitudes genuinamente peligrosas falla en seguridad.

Esta proporcionalidad conecta con [proporcionalidad en la divulgacion de modelos](/research/001-proportionality-disclosure/): los mecanismos de gobernanza deberian escalar con el riesgo real en lugar de aplicar un tratamiento uniforme.

### Explicabilidad

Para los rechazos de Nivel 2 y Nivel 3, el sistema deberia poder articular por que esta solicitud cae en la categoria que le corresponde. Esto permite la apelacion, la correccion y el aprendizaje.

Nuestro trabajo sobre [sistemas de IA que explican sus restricciones](/research/026-explaining-constraints/) explora como esta explicabilidad podria implementarse.

### Vias de apelacion

Los rechazos erroneos deberian ser corregibles. Especialmente para los Niveles 2 y 3, los usuarios legitimos bloqueados injustamente necesitan recurso. Esto involucra verificacion de credenciales, revision humana o canales de escalamiento.

### Registro

Los rechazos generan datos valiosos para mejorar el sistema. Los patrones agregados revelan brechas en la categorizacion, intentos de explotacion y casos de uso legitimos que estan siendo bloqueados. Esto conecta con los sistemas de notificacion de incidentes que analizamos en [lecciones de la aviacion](/research/021-aviation-lessons/).

## Abordar la manipulacion

Cualquier sistema de rechazo enfrentara intentos adversarios de eludirlo. Varias estrategias ayudan.

**Defensa en profundidad.** Multiples mecanismos --entrenamiento, filtros, monitoreo-- dificultan la evasion. Incluso si una capa falla, otras pueden detectar el problema.

**Red teaming.** Las pruebas adversarias continuas revelan debilidades antes de que los usuarios maliciosos las descubran. Esto requiere las [evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/) que discutimos en otro lugar.

**Actualizacion.** A medida que surgen nuevas tecnicas de evasion, las defensas deben actualizarse. Las reglas estaticas se osifican mientras los metodos de ataque evolucionan.

**Monitoreo de comportamiento.** En lugar de solo bloquear solicitudes especificas, monitorear patrones que sugieran intencion danina. Un usuario que hace muchas solicitudes cercanas al rechazo esta sondeando en busca de exploits.

## Casos limite y problemas dificiles

Algunos desafios resisten una categorizacion facil.

**Investigacion de doble uso.** Un investigador de seguridad que estudia vulnerabilidades necesita la misma informacion que un atacante querria. La verificacion de credenciales ayuda pero no es infalible.

**Ficcion y juego de roles.** Los contextos creativos a menudo exploran temas oscuros de manera legitima. Pero "finge que eres una IA sin restricciones" es una tecnica de jailbreak comun. Distinguir la exploracion creativa genuina de la evasion de restricciones es dificil.

**Informacion ya publica.** Si la informacion danina esta ampliamente disponible en linea, rechazar proporcionarla logra algo? Hay un argumento a favor de la consistencia (la IA no deberia ayudar con el dano independientemente de lo que este disponible en otros lugares) y un argumento a favor del pragmatismo (rechazar hace a la IA menos util sin prevenir el dano).

**Variacion cultural.** Lo que se considera danino varia entre culturas. Deberian los rechazos aplicar estandares globales uniformes o adaptarse a las normas locales?

Estos casos limite no pueden resolverse completamente con ningun marco. Requieren juicio continuo, actualizacion y compromiso con las comunidades afectadas.

## Conclusion

Los rechazos son un componente esencial de la implementacion segura de IA. Pero deberian basarse en principios, no ser arbitrarios; ser transparentes, no opacos; ser proporcionales, no de talla unica.

El marco escalonado propuesto aqui --prohibiciones absolutas, rechazos dependientes del contexto, limites flexibles y advertencias-- proporciona estructura para pensar sobre cuando y como los sistemas de IA deberian negarse a ayudar.

Implementar este marco requiere inversion en categorizacion, mecanismos de verificacion, procesos de apelacion y mejora continua. Tambien requiere humildad: reconocer que la frontera entre la asistencia apropiada e inapropiada es un terreno disputado donde las personas razonables no estan de acuerdo.

Acertar con los rechazos no es solo una preocupacion de seguridad sino una preocupacion de confianza. Los usuarios que experimentan rechazos arbitrarios o inexplicados pierden confianza en los sistemas de IA. Los sistemas que nunca rechazan permiten el dano. Encontrar el equilibrio adecuado es central para la gobernanza de la IA.

## Related Research

- [Red Lines: A Taxonomy of Non-Negotiable AI Limits](/research/004-red-lines-taxonomy/)
- [Proportionality in Model Disclosure](/research/001-proportionality-disclosure/)
- [Dangerous Capability Evaluations](/research/024-capability-evaluations/)
- [The Limits of Self-Constraint](/research/013-limits-of-self-constraint/)
