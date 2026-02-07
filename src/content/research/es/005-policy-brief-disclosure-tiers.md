---
title: "Informe de politica: el marco de niveles de divulgacion"
excerpt: "Una guia en lenguaje accesible para legisladores: por que la transparencia unica para toda la IA fracasa, y como un enfoque escalonado puede equilibrar seguridad con innovacion."
date: 2025-12-18
categories:
  - Policy Brief
  - Public
tags:
  - policy
  - regulation
  - guide
  - disclosure
  - transparency
version: "1.0"
---

**Objeto de Investigacion Reflexiva 005**  
*Tipo: Informe de politica (Publico)*

## Resumen ejecutivo

Los reguladores enfrentan actualmente un dilema:
- **Demasiada transparencia** sobre modelos peligrosos podria ayudar a actores maliciosos a construir armas.
- **Muy poca transparencia** impide a los investigadores auditar la seguridad.

La solucion actual (exigir "fichas de modelo" para todo) no resuelve esto. Crea papeleo para pequenas startups mientras no captura los riesgos profundos de los modelos de frontera.

**La solucion:** Dejar de tratar a todos los modelos de IA por igual. Proponemos un **Marco de divulgacion por niveles** donde la cantidad de transparencia requerida se ajusta al riesgo del modelo.

Este informe explica por que la divulgacion por niveles funciona, como funcionaria en la practica y que deben considerar los legisladores al implementarla.

---

## El problema actual

Los requisitos actuales de transparencia de la IA padecen un defecto de diseno fundamental: tratan a todos los sistemas de IA como si plantearan los mismos riesgos. El asistente de tareas de un estudiante y un sistema capaz de disenar patogenos novedosos deben presentar documentacion similar. Esto crea varios fallos:

**Para los reguladores:** La bandeja de entrada se llena con miles de fichas de modelo que se ven mas o menos iguales. Cada una enumera diligentemente las fuentes de datos de entrenamiento, los casos de uso previstos y las limitaciones conocidas. Pero el formato hace casi imposible distinguir entre sistemas triviales y genuinamente peligrosos. La documentacion destinada a facilitar la supervision la oscurece en su lugar.

**Para los pequenos desarrolladores:** El cumplimiento se convierte en una carga significativa incluso para aplicaciones de bajo riesgo. Una startup que construye un asistente de programacion impulsado por IA debe navegar los mismos requisitos de documentacion que un laboratorio de frontera. Esto desalienta la innovacion y desperdicia recursos en papeleo que no proporciona ningun beneficio de seguridad.

**Para los investigadores de seguridad:** La informacion que realmente necesitan (resultados de equipos rojos, evaluaciones de capacidad, composicion de datos de entrenamiento para dominios peligrosos) falta o esta enterrada en campos estandarizados que no fueron disenados para ello. El formato de ficha de modelo evoluciono para sistemas relativamente simples; no captura la complejidad de los modelos de frontera.

**Para el publico:** La apariencia de transparencia crea falsa confianza. "Presentaron todo el papeleo, asi que debe ser seguro". Pero el cumplimiento de los requisitos de documentacion no dice nada sobre la seguridad real.

---

## Por que "mas grande" no siempre es "mas riesgoso"

A menudo asumimos que los modelos mas grandes (mas parametros) son mas peligrosos. Esto es mayormente cierto, pero no siempre. Un modelo pequeno entrenado especificamente con libros de texto de virologia y protocolos de sintesis podria ser mas peligroso que un chatbot generico diez veces su tamano.

Consideremos un ejemplo hipotetico: el Modelo A tiene 100 mil millones de parametros y fue entrenado con texto general de internet. El Modelo B tiene 7 mil millones de parametros pero fue ajustado finamente de manera extensiva con literatura de quimica, incluidos procedimientos detallados de sintesis. El Modelo B, a pesar de ser mucho mas pequeno, podria plantear mayores riesgos de bioseguridad.

Por lo tanto, no deberiamos regular basandonos solo en el tamano (parametros). Deberiamos regular basandonos en la **capacidad**: lo que el modelo realmente *puede* hacer. Especificamente, deberiamos centrarnos en las capacidades peligrosas: Puede ayudar a sintetizar patogenos? Puede escribir malware novedoso? Puede proporcionar asistencia en el diseno de armas?

Esto requiere un cambio en el pensamiento regulatorio. En lugar de preguntar "Que tan grande es?" preguntamos "Que puede hacer?". Esto es mas dificil de medir, pero es la pregunta correcta.

---

## Los tres niveles de transparencia

Proponemos tres niveles simples de divulgacion para los desarrolladores de IA:

### Nivel 1: La ficha estandar (Bajo riesgo)

**Para:** Chatbots, asistentes de programacion, generadores de imagenes, IA de atencion al cliente, sistemas de recomendacion y la gran mayoria de aplicaciones de IA.

**Requisito:**
- Una "etiqueta nutricional" estandar (ficha de modelo).
- Enumera que datos se utilizaron y limitaciones conocidas (p. ej., "alucina hechos", "puede exhibir sesgo sobre el tema X").
- Casos de uso previstos basicos y aplicaciones fuera de alcance.
- **Quien lo ve?** Todos (publico).

**Por que este nivel:** Estos sistemas plantean riesgos limitados. Pueden producir ocasionalmente resultados incorrectos o sesgados, pero no pueden causar dano catastrofico. Exigir documentacion extensa cargaria a los desarrolladores sin beneficios de seguridad correspondientes.

**Que logra:** Responsabilidad basica. Los usuarios saben con que estan interactuando. Los investigadores pueden identificar patrones entre sistemas. Los reguladores tienen un inventario de referencia de la IA desplegada.

### Nivel 2: La auditoria del sistema (Riesgo medio)

**Para:** Modelos que afectan decisiones de alto impacto: contratacion, prestamos, diagnostico de salud, aplicacion de la ley, evaluacion educativa y moderacion de contenido a escala.

**Requisito:**
- Todo lo del Nivel 1, ademas de:
- Resultados detallados de pruebas contra benchmarks de sesgo y equidad.
- Registros de auditoria independientes que muestren como el sistema rinde entre diferentes grupos demograficos.
- Evaluaciones de impacto que documentan danos potenciales y mitigaciones.
- Mecanismos de reporte de incidentes cuando las cosas salen mal.
- **Quien lo ve?** Reguladores y auditores verificados. Los resumenes pueden ser publicos.

**Por que este nivel:** Estos sistemas toman decisiones que afectan significativamente la vida de las personas. Un algoritmo de contratacion que discrimina, un sistema de salud que diagnostica incorrectamente a ciertas poblaciones o un sistema de moderacion de contenido que silencia el discurso legitimo causa un dano real, pero no catastrofico e irreversible. Los riesgos justifican mas escrutinio que el Nivel 1 pero no requieren las medidas extremas del Nivel 3.

**Que logra:** Responsabilidad significativa para decisiones consecuentes. El requisito de auditoria crea incentivos para probar exhaustivamente antes del despliegue. El acceso del regulador permite la aplicacion.

### Nivel 3: La caja de seguridad (Alto riesgo)

**Para:** Modelos de "frontera" con capacidades en hacking, armas biologicas o quimicas, tecnologia nuclear o sistemas de armas autonomas. Tambien se aplica a cualquier modelo cuya evaluacion de capacidad revele potencial peligroso.

**Requisito:**
- Todo lo de los Niveles 1 y 2, ademas de:
- Transparencia total de la composicion de datos de entrenamiento, particularmente para dominios peligrosos.
- Registros completos de "equipo rojo" que muestran como los desarrolladores intentaron obtener capacidades peligrosas.
- Evaluaciones detalladas de capacidad en todos los dominios de amenaza.
- Medidas de seguridad para la proteccion de pesos.
- **Quien lo ve?** Solo los institutos de seguridad gubernamentales (como los Institutos de Seguridad de IA) y auditores especificamente autorizados. No publico, ni siquiera la mayoria de los reguladores.

**Por que este nivel:** Estos sistemas podrian permitir un dano catastrofico. Un modelo capaz de proporcionar instrucciones paso a paso para la sintesis de armas biologicas a cualquiera que pregunte es fundamentalmente diferente de un chatbot que ocasionalmente dice algo ofensivo. Los riesgos justifican una transparencia extrema, pero esa transparencia debe controlarse estrictamente para evitar que la propia divulgacion permita el uso indebido.

**Que logra:** Maxima vision para los responsables de prevenir riesgos catastroficos. El acceso restringido previene la proliferacion. Los requisitos integrales aseguran que nada quede oculto.

---

## Por que funciona este marco

### Desgrava la innovacion
Aproximadamente el 90% de las aplicaciones de IA plantean riesgos de Nivel 1. Bajo este marco, sus desarrolladores presentan una ficha de modelo estandar y continuan adelante. Sin auditorias extensas, sin revision gubernamental, sin abogados interpretando regulaciones complejas. Esto mantiene baja la barrera de entrada para aplicaciones beneficiosas.

### Enfoca los recursos
Las agencias reguladoras tienen personal, presupuesto y experiencia limitados. Bajo los requisitos planos actuales, deben revisar innumerables aplicaciones de bajo riesgo mientras los riesgos de frontera reciben la misma atencion. El marco por niveles permite a los reguladores centrar su tiempo limitado en los modelos de Nivel 3 que realmente plantean riesgos catastroficos y los modelos de Nivel 2 que afectan a poblaciones vulnerables.

### Protege los secretos adecuadamente
La divulgacion de Nivel 3 es extensa, pero no es publica. Los registros de equipo rojo, los manifiestos de datos de entrenamiento y las evaluaciones de capacidad van solo a institutos de seguridad con las autorizaciones de seguridad apropiadas. Esto significa que la informacion mas peligrosa (los prompts especificos que obtienen capacidades peligrosas, las brechas en las medidas de seguridad) no se convierte en una hoja de ruta publica para el uso indebido.

### Crea incentivos claros
Los desarrolladores saben exactamente que se requiere en cada nivel. Si quieren evitar los requisitos de Nivel 3, pueden elegir no construir sistemas con capacidades de Nivel 3, o pueden implementar medidas de seguridad que reduzcan las capacidades por debajo del umbral. El marco hace explicito el coste del desarrollo peligroso.

### Se adapta a la capacidad, no solo al tamano
Un modelo especializado pequeno que plantea riesgos de Nivel 3 recibe escrutinio de Nivel 3. Un modelo general grande que plantea solo riesgos de Nivel 1 recibe requisitos de Nivel 1. El marco responde al peligro real, no a medidas indirectas.

---

## Consideraciones de implementacion

**Quien decide el nivel?** Inicialmente, el desarrollador se autoclasifica, sujeto a auditoria. La clasificacion erronea tiene consecuencias: si una presentacion de Nivel 1 se descubre posteriormente con capacidades de Nivel 3, eso es fraude regulatorio. Esto crea incentivos para una autoevaluacion precisa.

**Como se establecen los umbrales?** Los umbrales de capacidad deben definirse mediante un proceso multipartito que involucre a investigadores de seguridad, expertos en el dominio (virologos, profesionales de ciberseguridad, expertos en armas) y la sociedad civil. Deben ser especificos y medibles: "Puede el modelo alcanzar una puntuacion X en la evaluacion Y?"

**Con que frecuencia se actualizan las presentaciones?** El Nivel 1 puede ser estatico. Los Niveles 2 y 3 requieren reevaluacion periodica, especialmente despues de actualizaciones significativas al modelo. El ajuste fino que aumenta las capacidades podria mover un modelo a un nivel superior.

**Que pasa con los modelos de pesos abiertos?** Los modelos abiertos presentan desafios especiales. Una vez que los pesos son publicos, pueden ajustarse finamente para eliminar las medidas de seguridad. Esto puede justificar restringir la publicacion abierta para modelos con potencial de Nivel 3: una limitacion significativa pero potencialmente necesaria.

---

## La conclusion final

La transparencia no es un interruptor binario (Encendido/Apagado). Es un regulador de intensidad. Una regulacion mas inteligente significa ajustar esa luz al nivel adecuado para la habitacion en la que estamos.

Los enfoques actuales fracasan porque tratan todas las habitaciones por igual: inundando los espacios de bajo riesgo con burocracia innecesaria mientras dejan los espacios de alto riesgo peligrosamente oscuros. El marco por niveles ajusta la luz a la habitacion: lo suficientemente brillante para ver lo que importa, lo suficientemente controlada para evitar que la propia luz cause dano.

Para los legisladores, el mensaje es simple: dejen de exigir las mismas divulgaciones para un chatbot de atencion al cliente y una potencial arma biologica. Ajusten el escrutinio a los riesgos. Eso no es captura regulatoria ni ser laxo con la IA: es buena gobernanza.
