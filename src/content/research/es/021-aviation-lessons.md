---
title: "Sistemas de notificacion de incidentes: lecciones de la aviacion"
excerpt: "La aviacion ha desarrollado sistemas sofisticados para notificar y aprender de los incidentes. Que puede aprender la gobernanza de la IA de este experimento de decadas en cultura de seguridad?"
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

## El modelo de la aviacion

En la decada de 1970, la aviacion era peligrosa. Los accidentes eran frecuentes y la industria carecia de formas sistematicas para aprender de ellos. Los pilotos que cometian errores enfrentaban castigos, por lo que ocultaban sus fallos. Los mismos fracasos se repetian porque nadie sabia que habian ocurrido antes.

Entonces la aviacion desarrollo algo revolucionario: sistemas confidenciales de notificacion de incidentes que priorizaban el aprendizaje sobre la culpa. Hoy, la aviacion es la forma de transporte mas segura, y su cultura de seguridad --construida sobre la notificacion sistematica de incidentes, su analisis y su difusion-- se considera una razon fundamental.

La gobernanza de la IA enfrenta un desafio analogo. Ocurren incidentes daninos con la IA, pero carecemos de mecanismos sistematicos para notificarlos, analizarlos y asegurar que todo el campo aprenda de ellos. La experiencia de la aviacion ofrece lecciones para construir tales mecanismos.

## Por que importa la notificacion de incidentes

El objetivo de la notificacion de incidentes no es el castigo, sino el aprendizaje. Cada incidente, cuasi-accidente y anomalia contiene informacion sobre como pueden fallar los sistemas. Capturar esta informacion y ponerla a disposicion de otros que puedan enfrentar situaciones similares es esencial para mejorar la seguridad con el tiempo.

Sin notificacion sistematica, los fallos son eventos aislados. Cada organizacion aprende solo de sus propios errores, y a menudo ni siquiera aprende de esos, porque los individuos ocultan errores para evitar consecuencias. Los mismos fallos se repiten entre organizaciones y a lo largo del tiempo.

Con notificacion sistematica, los fallos se convierten en conocimiento compartido. Una organizacion que enfrenta un problema novedoso puede verificar si otras lo han enfrentado. Los patrones a traves de muchos incidentes revelan problemas sistemicos que no serian visibles desde un solo evento. Todo el campo aprende de la experiencia de cada organizacion.

Esto es particularmente valioso en la IA, donde todavia estamos en las primeras etapas de comprension de como fallan los sistemas. Los patrones que surgen de la agregacion de muchos incidentes podrian revelar modos de fallo que nadie ha anticipado aun.

## Caracteristicas clave de la notificacion en aviacion

Varias caracteristicas hacen que la notificacion de incidentes en aviacion sea efectiva. Cada una tiene implicaciones para la IA.

### Confidencialidad y ausencia de castigo

El Sistema de Notificacion de Seguridad de la Aviacion de la NASA (ASRS) garantiza confidencialidad a los notificantes. Los informes se desidentifican antes del analisis y la difusion. Y de manera critica, presentar un informe proporciona inmunidad limitada frente al castigo por el incidente notificado.

Este compromiso --aceptar que algunos errores quedaran sin castigo a cambio del aprendizaje que proporciona la notificacion-- fue inicialmente controvertido. Pero resulto esencial. Los pilotos comenzaron a notificar errores que de otro modo habrian ocultado. El volumen y la calidad de los informes aumentaron dramaticamente.

La notificacion de incidentes de IA enfrenta el mismo desafio. Las organizaciones tienen fuertes incentivos para ocultar incidentes daninos: responsabilidad legal, dano reputacional y desventaja competitiva. Sin protecciones, la mayoria de los incidentes no se notificaran.

Disenar protecciones apropiadas es complejo. La inmunidad completa eliminaria la rendicion de cuentas. Ninguna proteccion eliminaria la notificacion. El modelo de la aviacion ofrece un camino intermedio: protecciones limitadas para informes de buena fe, con violaciones graves aun sujetas a aplicacion de la ley.

### Separacion de la aplicacion de la ley

Los sistemas de notificacion de aviacion son tipicamente operados por entidades separadas de los reguladores que aplican las normas. La NASA opera el ASRS, no la FAA. Esta separacion es critica para la confianza: los notificantes creen que su informacion no sera utilizada en su contra.

La notificacion de incidentes de IA se beneficiaria de una separacion similar. Si la misma agencia que investiga violaciones tambien recibe informes voluntarios, las organizaciones dudaran en notificar. Una entidad independiente --quiza una organizacion no gubernamental o una oficina gubernamental separada con fuertes cortafuegos-- podria generar mas confianza y mas informes.

### Recopilacion estructurada de datos

Los informes de aviacion utilizan formatos estandarizados que capturan informacion esencial: que sucedio, cuando, donde, que equipo estuvo involucrado, que condiciones existian, que cree el notificante que causo el incidente.

La estandarizacion permite el analisis entre informes. Los patrones se hacen visibles cuando los datos son consistentes. Las narrativas ad hoc, aunque valiosas para el contexto, son dificiles de agregar.

La notificacion de incidentes de IA se beneficiaria de una estructura similar. Un esquema estandarizado para incidentes de IA podria capturar: el sistema involucrado (con caracterizacion de capacidades), el contexto de implementacion, el dano que ocurrio, la causa aparente, cualquier mitigacion que se intento. Esto se conecta con nuestro trabajo sobre [esquemas de restricciones legibles por maquina](/research/003-machine-readable-constraint-schema/) --formatos estructurados que permiten el analisis computacional.

### Analisis y difusion

Recopilar informes es inutil sin analisis y difusion. Los sistemas de aviacion emplean analistas que revisan informes, identifican patrones y producen alertas y recomendaciones de seguridad.

Estos resultados se difunden ampliamente. Las aerolineas, los pilotos, los fabricantes y los reguladores reciben hallazgos relevantes. Las mejoras de seguridad derivadas del incidente de una organizacion benefician a toda la industria.

La IA se beneficiaria de mecanismos similares de analisis y difusion. Una entidad que agregue incidentes de IA, identifique patrones y difunda hallazgos podria acelerar el aprendizaje en todo el campo. Esto es particularmente valioso para las organizaciones que no tienen los recursos para realizar investigaciones extensas de seguridad por cuenta propia.

## Adaptacion a la IA

Las lecciones de la aviacion proporcionan direccion, pero la IA tiene caracteristicas distintivas que requieren adaptacion.

### Velocidad y volumen

Los incidentes de aviacion son eventos relativamente raros que ocurren en periodos de tiempo extensos. Los sistemas de IA toman millones de decisiones por segundo, y las salidas daninas pueden ocurrir continuamente.

La notificacion de incidentes de IA debe abordar la escala. No cada salida problematica puede notificarse individualmente. Sera necesaria alguna combinacion de deteccion automatizada (senalando salidas que cumplan ciertos criterios), muestreo (notificando incidentes representativos en lugar de todos ellos) y notificacion basada en umbrales (informes obligatorios para incidentes graves, voluntarios para menores).

### Complejidad de la atribucion

Cuando un avion falla, el avion, su operador y las condiciones son tipicamente identificables. Cuando un sistema de IA produce una salida danina, la atribucion es mas compleja: el mismo modelo podria implementarse en muchos contextos, ser modificado por usuarios posteriores y activarse por entradas de usuarios que varian enormemente.

Los informes de incidentes de IA necesitan capturar suficiente contexto para permitir un analisis significativo. Esto incluye no solo la identidad del modelo, sino el contexto de implementacion, la entrada que desencadeno la salida, cualquier modificacion o ajuste fino aplicado, y el historial de interaccion si es relevante.

### Dinamicas competitivas

La notificacion de incidentes de aviacion se beneficia del hecho de que las aerolineas no compiten principalmente en reclamos de seguridad. Usan los mismos aviones, procedimientos similares e informacion de seguridad compartida sin desventaja competitiva.

Los desarrolladores de IA compiten en parte por la seguridad. Admitir incidentes daninos podria beneficiar a los competidores. Esta dinamica competitiva podria suprimir la notificacion incluso con protecciones de confidencialidad.

Abordar esto podria requerir notificacion obligatoria (eliminando la opcion competitiva) o compromisos de participacion a nivel de toda la industria que aseguren que ninguna organizacion individual se vea perjudicada por notificar.

### Evolucion rapida

Los disenos de aviones cambian a lo largo de decadas. Las capacidades de la IA cambian en meses. Los patrones de incidentes de hace un ano podrian ser irrelevantes para los sistemas actuales.

El analisis de incidentes de IA debe ser mas rapido que el analisis de aviacion, y los hallazgos deben difundirse mas rapidamente para seguir siendo utiles. Esto podria requerir herramientas de analisis automatizado que puedan identificar patrones en tiempo real, complementadas con revision humana.

## Conexion con la gobernanza reflexiva

La notificacion de incidentes es particularmente relevante para la gobernanza reflexiva de la IA. Los sistemas de IA podrian participar ellos mismos en la deteccion y notificacion de incidentes.

Un sistema que monitorea sus propias salidas y senala danos potenciales contribuye a la deteccion de incidentes. Exploramos esto en [pueden los sistemas de IA detectar su propio uso indebido](/research/011-reflexive-misuse-detection/). Dicho automonitoreo podria alimentar automaticamente los sistemas de notificacion de incidentes.

Del mismo modo, nuestro trabajo sobre [protocolos para la comunicacion de IA a regulador](/research/014-ai-regulator-protocol/) preve sistemas de IA que pueden informar directamente preocupaciones a los organismos de supervision. Esto crea una via para la notificacion de incidentes en tiempo real que no depende de que los operadores humanos los noten y decidan notificar.

La combinacion de notificacion humana y de IA podria capturar incidentes que cualquiera de los dos por separado pasaria por alto. Los humanos notan danos que los sistemas no reconocen; los sistemas notan patrones que los humanos pasan por alto.

## Pasos de implementacion

Avanzar hacia una notificacion efectiva de incidentes de IA requiere pasos concretos.

**Establecer una entidad independiente de notificacion.** Esta entidad recibiria informes, mantendria la confidencialidad, realizaria analisis y difundiria hallazgos. La independencia tanto de la industria como de la aplicacion de la ley es critica para la confianza.

**Desarrollar formatos de notificacion estandarizados.** Que informacion debe contener cada informe? Que informacion opcional es valiosa? Los estandares permiten la agregacion y el analisis.

**Crear protecciones apropiadas.** Los notificantes necesitan confianza en que los informes de buena fe no seran utilizados en su contra. Esto requiere protecciones legales que equilibren el aprendizaje con la rendicion de cuentas.

**Construir capacidad de analisis.** La entidad necesita recursos para analizar informes, identificar patrones y producir hallazgos accionables. Esto requiere tanto experiencia humana como herramientas computacionales.

**Asegurar la difusion.** Los hallazgos son inutiles si no llegan a quienes pueden actuar en consecuencia. Deben establecerse canales para compartir lecciones en toda la industria.

**Integrar con los sistemas de IA.** A medida que los mecanismos reflexivos maduren, los sistemas de IA deberian poder contribuir a la notificacion de incidentes directamente, senalando danos potenciales en tiempo real.

## Conclusion

Los sistemas de notificacion de incidentes de la aviacion representan decadas de aprendizaje sobre como construir cultura de seguridad en un dominio tecnico complejo. La gobernanza de la IA puede beneficiarse de esta experiencia mientras se adapta a las caracteristicas distintivas de la IA.

La idea central es que el aprendizaje requiere informacion, y la informacion requiere confianza. Crear sistemas en los que las organizaciones confien lo suficiente como para notificar honestamente es la base del aprendizaje colectivo sobre la seguridad de la IA.

Esta no es una solucion completa para la gobernanza de la IA: la notificacion de incidentes aborda el aprendizaje pero no la prevencion. Pero aprender de los incidentes es esencial para prevenir los futuros. La transformacion de la aviacion de peligrosa a segura ofrece esperanza de que la gobernanza de la IA pueda lograr un progreso similar.

## Related Research

- [Can AI Systems Detect Their Own Misuse?](/research/011-reflexive-misuse-detection/)
- [A Protocol for AI-to-Regulator Communication](/research/014-ai-regulator-protocol/)
- [A Machine-Readable Constraint Schema](/research/003-machine-readable-constraint-schema/)
- [Self-Reporting vs. External Audit: Trade-offs](/research/010-self-reporting-vs-audit/)
