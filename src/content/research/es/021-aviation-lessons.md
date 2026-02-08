---
title: "Sistemas de notificación de incidentes: lecciones de la aviación"
excerpt: "La aviación ha desarrollado sistemas sofisticados para notificar y aprender de los incidentes. ¿Qué puede aprender la gobernanza de la IA de este experimento de décadas en cultura de seguridad?"
date: 2026-01-03
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - incident-reporting
  - safety
  - transparency
  - auditing
  - standards
---

## El modelo de la aviación

En la década de 1970, la aviación era peligrosa. Los accidentes eran frecuentes y la industria carecía de formas sistemáticas para aprender de ellos. Los pilotos que cometían errores enfrentaban castigos, por lo que ocultaban sus fallos. Los mismos fracasos se repetían porque nadie sabía que habían ocurrido antes.

Entonces la aviación desarrolló algo revolucionario: sistemas confidenciales de notificación de incidentes que priorizaban el aprendizaje sobre la culpa. Hoy, la aviación es la forma de transporte más segura, y su cultura de seguridad --construida sobre la notificación sistemática de incidentes, su análisis y su difusión-- se considera una razón fundamental.

La gobernanza de la IA enfrenta un desafío análogo. Ocurren incidentes dañinos con la IA, pero carecemos de mecanismos sistemáticos para notificarlos, analizarlos y asegurar que todo el campo aprenda de ellos. La experiencia de la aviación ofrece lecciones para construir tales mecanismos.

## Por qué importa la notificación de incidentes

El objetivo de la notificación de incidentes no es el castigo, sino el aprendizaje. Cada incidente, cuasi-accidente y anomalía contiene información sobre cómo pueden fallar los sistemas. Capturar esta información y ponerla a disposición de otros que puedan enfrentar situaciones similares es esencial para mejorar la seguridad con el tiempo.

Sin notificación sistemática, los fallos son eventos aislados. Cada organización aprende solo de sus propios errores, y a menudo ni siquiera aprende de esos, porque los individuos ocultan errores para evitar consecuencias. Los mismos fallos se repiten entre organizaciones y a lo largo del tiempo.

Con notificación sistemática, los fallos se convierten en conocimiento compartido. Una organización que enfrenta un problema novedoso puede verificar si otras lo han enfrentado. Los patrones a través de muchos incidentes revelan problemas sistémicos que no serían visibles desde un solo evento. Todo el campo aprende de la experiencia de cada organización.

Esto es particularmente valioso en la IA, donde todavía estamos en las primeras etapas de comprensión de cómo fallan los sistemas. Los patrones que surgen de la agregación de muchos incidentes podrían revelar modos de fallo que nadie ha anticipado aún.

## Características clave de la notificación en aviación

Varias características hacen que la notificación de incidentes en aviación sea efectiva. Cada una tiene implicaciones para la IA.

### Confidencialidad y ausencia de castigo

El Sistema de Notificación de Seguridad de la Aviación de la NASA (ASRS) garantiza confidencialidad a los notificantes. Los informes se desidentifican antes del análisis y la difusión. Y de manera crítica, presentar un informe proporciona inmunidad limitada frente al castigo por el incidente notificado.

Este compromiso --aceptar que algunos errores quedarán sin castigo a cambio del aprendizaje que proporciona la notificación-- fue inicialmente controvertido. Pero resultó esencial. Los pilotos comenzaron a notificar errores que de otro modo habrían ocultado. El volumen y la calidad de los informes aumentaron dramáticamente.

La notificación de incidentes de IA enfrenta el mismo desafío. Las organizaciones tienen fuertes incentivos para ocultar incidentes dañinos: responsabilidad legal, daño reputacional y desventaja competitiva. Sin protecciones, la mayoría de los incidentes no se notificarán.

Diseñar protecciones apropiadas es complejo. La inmunidad completa eliminaría la rendición de cuentas. Ninguna protección eliminaría la notificación. El modelo de la aviación ofrece un camino intermedio: protecciones limitadas para informes de buena fe, con violaciones graves aún sujetas a aplicación de la ley.

### Separación de la aplicación de la ley

Los sistemas de notificación de aviación son típicamente operados por entidades separadas de los reguladores que aplican las normas. La NASA opera el ASRS, no la FAA. Esta separación es crítica para la confianza: los notificantes creen que su información no será utilizada en su contra.

La notificación de incidentes de IA se beneficiaría de una separación similar. Si la misma agencia que investiga violaciones también recibe informes voluntarios, las organizaciones dudarán en notificar. Una entidad independiente --quizá una organización no gubernamental o una oficina gubernamental separada con fuertes cortafuegos-- podría generar más confianza y más informes.

### Recopilación estructurada de datos

Los informes de aviación utilizan formatos estandarizados que capturan información esencial: qué sucedió, cuándo, dónde, qué equipo estuvo involucrado, qué condiciones existían, qué cree el notificante que causó el incidente.

La estandarización permite el análisis entre informes. Los patrones se hacen visibles cuando los datos son consistentes. Las narrativas ad hoc, aunque valiosas para el contexto, son difíciles de agregar.

La notificación de incidentes de IA se beneficiaría de una estructura similar. Un esquema estandarizado para incidentes de IA podría capturar: el sistema involucrado (con caracterización de capacidades), el contexto de implementación, el daño que ocurrió, la causa aparente, cualquier mitigación que se intentó. Esto se conecta con nuestro trabajo sobre [esquemas de restricciones legibles por máquina](/research/003-machine-readable-constraint-schema/) --formatos estructurados que permiten el análisis computacional.

### Análisis y difusión

Recopilar informes es inútil sin análisis y difusión. Los sistemas de aviación emplean analistas que revisan informes, identifican patrones y producen alertas y recomendaciones de seguridad.

Estos resultados se difunden ampliamente. Las aerolíneas, los pilotos, los fabricantes y los reguladores reciben hallazgos relevantes. Las mejoras de seguridad derivadas del incidente de una organización benefician a toda la industria.

La IA se beneficiaría de mecanismos similares de análisis y difusión. Una entidad que agregue incidentes de IA, identifique patrones y difunda hallazgos podría acelerar el aprendizaje en todo el campo. Esto es particularmente valioso para las organizaciones que no tienen los recursos para realizar investigaciones extensas de seguridad por cuenta propia.

## Adaptación a la IA

Las lecciones de la aviación proporcionan dirección, pero la IA tiene características distintivas que requieren adaptación.

### Velocidad y volumen

Los incidentes de aviación son eventos relativamente raros que ocurren en períodos de tiempo extensos. Los sistemas de IA toman millones de decisiones por segundo, y las salidas dañinas pueden ocurrir continuamente.

La notificación de incidentes de IA debe abordar la escala. No cada salida problemática puede notificarse individualmente. Será necesaria alguna combinación de detección automatizada (señalando salidas que cumplan ciertos criterios), muestreo (notificando incidentes representativos en lugar de todos ellos) y notificación basada en umbrales (informes obligatorios para incidentes graves, voluntarios para menores).

### Complejidad de la atribución

Cuando un avión falla, el avión, su operador y las condiciones son típicamente identificables. Cuando un sistema de IA produce una salida dañina, la atribución es más compleja: el mismo modelo podría implementarse en muchos contextos, ser modificado por usuarios posteriores y activarse por entradas de usuarios que varían enormemente.

Los informes de incidentes de IA necesitan capturar suficiente contexto para permitir un análisis significativo. Esto incluye no solo la identidad del modelo, sino el contexto de implementación, la entrada que desencadenó la salida, cualquier modificación o ajuste fino aplicado, y el historial de interacción si es relevante.

### Dinámicas competitivas

La notificación de incidentes de aviación se beneficia del hecho de que las aerolíneas no compiten principalmente en reclamos de seguridad. Usan los mismos aviones, procedimientos similares e información de seguridad compartida sin desventaja competitiva.

Los desarrolladores de IA compiten en parte por la seguridad. Admitir incidentes dañinos podría beneficiar a los competidores. Esta dinámica competitiva podría suprimir la notificación incluso con protecciones de confidencialidad.

Abordar esto podría requerir notificación obligatoria (eliminando la opción competitiva) o compromisos de participación a nivel de toda la industria que aseguren que ninguna organización individual se vea perjudicada por notificar.

### Evolución rápida

Los diseños de aviones cambian a lo largo de décadas. Las capacidades de la IA cambian en meses. Los patrones de incidentes de hace un año podrían ser irrelevantes para los sistemas actuales.

El análisis de incidentes de IA debe ser más rápido que el análisis de aviación, y los hallazgos deben difundirse más rápidamente para seguir siendo útiles. Esto podría requerir herramientas de análisis automatizado que puedan identificar patrones en tiempo real, complementadas con revisión humana.

## Conexión con la gobernanza reflexiva

La notificación de incidentes es particularmente relevante para la gobernanza reflexiva de la IA. Los sistemas de IA podrían participar ellos mismos en la detección y notificación de incidentes.

Un sistema que monitorea sus propias salidas y señala daños potenciales contribuye a la detección de incidentes. Exploramos esto en [pueden los sistemas de IA detectar su propio uso indebido](/research/011-reflexive-misuse-detection/). Dicho automonitoreo podría alimentar automáticamente los sistemas de notificación de incidentes.

Del mismo modo, nuestro trabajo sobre [protocolos para la comunicación de IA a regulador](/research/014-ai-regulator-protocol/) prevé sistemas de IA que pueden informar directamente preocupaciones a los organismos de supervisión. Esto crea una vía para la notificación de incidentes en tiempo real que no depende de que los operadores humanos los noten y decidan notificar.

La combinación de notificación humana y de IA podría capturar incidentes que cualquiera de los dos por separado pasaría por alto. Los humanos notan daños que los sistemas no reconocen; los sistemas notan patrones que los humanos pasan por alto.

## Pasos de implementación

Avanzar hacia una notificación efectiva de incidentes de IA requiere pasos concretos.

**Establecer una entidad independiente de notificación.** Esta entidad recibiría informes, mantendría la confidencialidad, realizaría análisis y difundiría hallazgos. La independencia tanto de la industria como de la aplicación de la ley es crítica para la confianza.

**Desarrollar formatos de notificación estandarizados.** ¿Qué información debe contener cada informe? ¿Qué información opcional es valiosa? Los estándares permiten la agregación y el análisis.

**Crear protecciones apropiadas.** Los notificantes necesitan confianza en que los informes de buena fe no serán utilizados en su contra. Esto requiere protecciones legales que equilibren el aprendizaje con la rendición de cuentas.

**Construir capacidad de análisis.** La entidad necesita recursos para analizar informes, identificar patrones y producir hallazgos accionables. Esto requiere tanto experiencia humana como herramientas computacionales.

**Asegurar la difusión.** Los hallazgos son inútiles si no llegan a quienes pueden actuar en consecuencia. Deben establecerse canales para compartir lecciones en toda la industria.

**Integrar con los sistemas de IA.** A medida que los mecanismos reflexivos maduren, los sistemas de IA deberían poder contribuir a la notificación de incidentes directamente, señalando daños potenciales en tiempo real.

## Conclusión

Los sistemas de notificación de incidentes de la aviación representan décadas de aprendizaje sobre cómo construir cultura de seguridad en un dominio técnico complejo. La gobernanza de la IA puede beneficiarse de esta experiencia mientras se adapta a las características distintivas de la IA.

La idea central es que el aprendizaje requiere información, y la información requiere confianza. Crear sistemas en los que las organizaciones confíen lo suficiente como para notificar honestamente es la base del aprendizaje colectivo sobre la seguridad de la IA.

Esta no es una solución completa para la gobernanza de la IA: la notificación de incidentes aborda el aprendizaje pero no la prevención. Pero aprender de los incidentes es esencial para prevenir los futuros. La transformación de la aviación de peligrosa a segura ofrece esperanza de que la gobernanza de la IA pueda lograr un progreso similar.

## Related Research

- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [A Protocol for AI-to-Regulator Communication](/research/014-ai-regulator-protocol/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
