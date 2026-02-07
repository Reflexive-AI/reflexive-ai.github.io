---
title: "Metodologías de red teaming"
excerpt: "Enfoques estructurados para las pruebas adversariales de sistemas de IA, desde la definición del alcance hasta la verificación de la remediación."
date: 2026-02-01
toc: true
categories:
  - Research
tags:
  - Red Teaming
  - Security
  - Safety
  - Evaluation
---

El red teaming (pruebas adversariales estructuradas por equipos que intentan encontrar fallos en los sistemas) se ha convertido en una práctica esencial para la evaluación de la seguridad de la IA. Pero la variación metodológica entre organizaciones limita la comparabilidad y deja lagunas en la cobertura. Este análisis presenta un marco para el red teaming de IA que equilibra el rigor con las limitaciones prácticas.

## Fundamentos del red teaming

El red teaming se originó en contextos militares: equipos independientes cuestionan planes, suposiciones y defensas para identificar vulnerabilidades antes de que los adversarios las exploten. Aplicado a la IA, el red teaming implica intentar sistemáticamente provocar fallos en los sistemas: producir resultados dañinos, eludir medidas de seguridad, revelar información sensible o hacer que se comporten de manera contraria al diseño previsto.

El valor del red teaming reside en su postura adversarial. Los equipos de desarrollo construyen sistemas para que funcionen; los red teams intentan que fallen. Este cambio de perspectiva saca a la luz problemas que las pruebas bienintencionadas pasan por alto.

El red teaming se diferencia de:
- **Aseguramiento de la calidad**: Pruebas del comportamiento esperado bajo condiciones normales
- **Pruebas de penetración**: Examen centrado en la seguridad de la infraestructura
- **Pruebas de usuario**: Evaluación de la usabilidad y la experiencia del usuario
- **Pruebas de estrés**: Rendimiento bajo carga

Aunque relacionadas, cada una sirve a propósitos distintos. El red teaming busca específicamente fallos adversariales que perjudicarían a los usuarios, operadores o la sociedad en general.

## Definición del alcance

Un red teaming eficaz comienza con una definición clara del alcance. Un alcance ambiguo conduce a esfuerzos desperdiciados, vulnerabilidades no detectadas y hallazgos disputados.

### Qué está dentro del alcance

Definir la superficie de ataque bajo examen:

**Límites del sistema**: ¿Qué componentes son objetivo? ¿Solo el modelo? ¿El modelo más las capas de seguridad? ¿La pila completa de despliegue incluyendo interfaces, integraciones e infraestructura?

**Modelos de amenaza**: ¿Qué adversarios se consideran? ¿Usuarios casuales explorando límites? ¿Atacantes sofisticados con experiencia técnica? ¿Actores estatales con recursos extensos? Diferentes modelos de amenaza implican diferentes enfoques de prueba.

**Tipos de fallo**: ¿Qué constituye un éxito del red team? ¿Generación de contenido dañino? ¿Violaciones de políticas? ¿Obtención de capacidades? ¿Extracción de datos? ¿Brechas de seguridad? Una categorización clara permite una cobertura sistemática.

**Umbrales de gravedad**: ¿Qué nivel de impacto importa? ¿Cualquier violación de políticas? ¿Solo daños significativos? ¿Demostraciones de capacidades novedosas? Definir umbrales centra el esfuerzo y permite la priorización.

### Qué está fuera del alcance

Las exclusiones explícitas previenen confusiones:

**Límites éticos**: ¿Qué ataques no se intentarán ni siquiera con fines de prueba? Los ataques que podrían causar daño real durante las pruebas requieren protocolos especiales o exclusión.

**Límites de infraestructura**: ¿Están dentro del alcance los ataques a sistemas en producción o solo a entornos de pruebas? Las pruebas en producción conllevan riesgo operativo.

**Restricciones de terceros**: Las pruebas de interacciones con servicios externos pueden violar los términos de servicio o crear responsabilidad.

### Criterios de éxito

Definir qué constituye un compromiso de red team exitoso:

**Métricas de completitud**: Cobertura de la superficie de ataque definida. ¿Se exploraron todos los tipos de fallo? ¿Se consideraron todos los modelos de amenaza?

**Umbrales de hallazgos**: Gravedad mínima para los hallazgos reportables. ¿Qué no cuenta?

**Límites de tiempo y recursos**: ¿Cuándo termina el compromiso? ¿Qué recursos están disponibles?

## Composición del equipo

La eficacia del red team depende de la composición del equipo. Diferentes perspectivas encuentran diferentes fallos.

### Diversidad de experiencia

**Experiencia técnica en IA**: Comprender la arquitectura del modelo, los procedimientos de entrenamiento y los modos de fallo conocidos permite una orientación eficiente.

**Experiencia en seguridad**: Los investigadores de seguridad tradicionales aportan metodología de ataque y familiaridad con herramientas. La inyección de prompts comparte patrones con los ataques de inyección tradicionales.

**Experiencia de dominio**: Los expertos en la materia identifican fallos que los generalistas pasan por alto. Los red teams médicos detectan resultados clínicamente peligrosos; los red teams legales encuentran declaraciones que crean responsabilidad.

**Creatividad adversarial**: Algunos individuos sobresalen en encontrar modos de fallo inesperados. Esta habilidad complementa pero difiere del conocimiento técnico.

### Independencia

Los red teams deben ser independientes de los equipos de desarrollo:

**Separación organizativa**: Los red teams no deberían depender de los mismos gerentes responsables de las decisiones de despliegue.

**Acceso a la información**: Los equipos necesitan suficiente conocimiento del sistema para probar eficazmente, pero el acceso completo puede reducir la perspectiva adversarial.

**Alineación de incentivos**: Los red teams deberían evaluarse por encontrar problemas, no por apoyar los calendarios de despliegue.

### Equipos externos frente a internos

**Equipos internos**: Mejor acceso al sistema, iteración más rápida, menor coste, pero posibles puntos ciegos y presión organizativa.

**Equipos externos**: Perspectiva fresca, independencia, experiencia especializada, pero mayor coste y desafíos de acceso.

La mejor práctica a menudo combina ambos: los equipos internos proporcionan pruebas continuas; los equipos externos añaden evaluación independiente periódica. Los [marcos de gobernanza de auditores](/research/006-meta-governance-auditors/) informan la selección y supervisión de equipos externos.

## Metodologías de prueba

### Cobertura sistemática

La exploración estructurada asegura una cobertura integral:

**Enfoques taxonómicos**: Probar cada categoría en una taxonomía de fallos (tipos de contenido, áreas de capacidad, vectores de ataque). Rastrear la cobertura para identificar lagunas.

**Bibliotecas de escenarios**: Mantener colecciones de escenarios de prueba adaptables a diferentes sistemas. Construir sobre la experiencia previa y la investigación pública.

**Árboles de ataque**: Descomposición estructurada de objetivos de ataque de alto nivel en técnicas específicas. Permite la exploración sistemática de caminos de ataque.

### Exploración creativa

Los enfoques sistemáticos pueden pasar por alto vulnerabilidades novedosas. Complementar con:

**Exploración abierta**: Testers cualificados siguiendo la intuición sin estructura prescrita.

**Formatos de desafío**: Competiciones con tiempo limitado y premios para hallazgos novedosos. Incentivan la creatividad.

**Polinización cruzada**: Las técnicas de un dominio se transfieren de forma inesperada. Fomentar un conocimiento amplio de los patrones de ataque.

### Pruebas automatizadas

La automatización permite escala:

**Fuzzing**: Generación automatizada de entradas variadas buscando fallos. Puede explorar más entradas que las pruebas manuales.

**Plantillas de ataque**: Ataques parametrizados que pueden instanciarse en muchas variaciones.

**Red teaming asistido por IA**: Uso de sistemas de IA para generar vectores de ataque. Plantea interesantes cuestiones recursivas al probar IA con IA.

**Pruebas de regresión**: Verificación automatizada de que las vulnerabilidades previamente encontradas siguen corregidas.

La automatización complementa pero no sustituye la creatividad humana. Los tipos de ataque novedosos suelen surgir de la intuición humana; la automatización escala la cobertura.

## Categorías de ataque

### Inyección de prompts

Intentos de anular las instrucciones del sistema mediante entradas adversariales:

**Inyección directa**: Instrucciones explícitas en la entrada del usuario ("Ignora las instrucciones anteriores y...")

**Inyección indirecta**: Contenido malicioso en documentos recuperados o resultados de herramientas que influye en el comportamiento del modelo.

**Ataques de codificación**: Instrucciones ocultas mediante codificación, traducción o manipulación estructural.

### Jailbreaking

Intentos de eludir las políticas de contenido:

**Ataques de juego de roles**: Enmarcar las solicitudes dañinas como ficción, hipótesis o contenido educativo.

**Manipulación multironda**: Escalar gradualmente las solicitudes a lo largo de los turnos de conversación.

**Confusión de contexto**: Explotar inconsistencias entre el contexto en tiempo de entrenamiento y en tiempo de inferencia.

### Obtención de capacidades

Intentos de acceder a capacidades restringidas:

**Sondeo de doble uso**: Extraer información con aplicaciones tanto benignas como dañinas. Las [consideraciones de doble uso](/research/035-dual-use-biology/) enmarcan estas preocupaciones.

**Extracción de conocimiento experto**: Obtener instrucciones detalladas para actividades peligrosas.

**Uso indebido de herramientas**: Usar herramientas legítimas para propósitos no previstos.

### Extracción de datos

Intentos de extraer información sensible:

**Extracción de datos de entrenamiento**: Recuperar ejemplos de entrenamiento específicos de los resultados del modelo.

**Ataques de privacidad**: Extraer información personal sobre individuos.

**Extracción de prompts del sistema**: Revelar la configuración confidencial del sistema.

### Ataques de suplantación

Explotación de la identidad y la confianza del modelo:

**Suplantación de identidad**: Convencer a los usuarios de que la IA es humana o tiene una autoridad que no posee.

**Afirmaciones falsas**: Generar información que suena plausible pero es falsa sobre temas importantes.

**Manipulación**: Usar técnicas psicológicas para influir inapropiadamente en las creencias o el comportamiento de los usuarios.

## Documentación e informes

### Documentación de vulnerabilidades

Cada hallazgo debe documentar:

**Pasos de reproducción**: Instrucciones precisas que permitan la verificación de la vulnerabilidad.

**Evaluación del impacto**: Gravedad, probabilidad y consecuencias potenciales si se explota.

**Clasificación**: Correspondencia con los tipos de fallo y umbrales de gravedad definidos.

**Análisis de la causa raíz**: ¿Por qué existe esta vulnerabilidad? ¿Qué la posibilita?

**Recomendaciones de mitigación**: Posibles correcciones o soluciones alternativas.

### Informes agregados

Más allá de los hallazgos individuales:

**Evaluación de cobertura**: ¿Qué se probó? ¿Qué lagunas quedan?

**Distribución de hallazgos**: Patrones entre categorías, gravedades y tipos de ataque.

**Líneas de base de comparación**: ¿Cómo se comparan los hallazgos con pruebas anteriores o con otros sistemas?

**Cuestiones sistémicas**: ¿Existen patrones que sugieran problemas más amplios más allá de vulnerabilidades específicas?

### Divulgación responsable

Los hallazgos requieren un manejo cuidadoso:

**Divulgación interna**: Comunicar los hallazgos a los equipos de desarrollo para su remediación.

**Decisiones de temporización**: ¿Cuándo se hacen públicos los hallazgos? ¿Después de la remediación? ¿Después del despliegue? ¿Nunca para ciertas categorías?

**Minimización de la información**: Divulgar lo suficiente para comprender el problema sin permitir la explotación.

**Coordinación**: Cuando los hallazgos afectan a múltiples organizaciones (componentes compartidos, técnicas comunes), coordinar la divulgación.

## Remediación y verificación

El valor del red teaming proviene de la remediación, no solo de encontrar problemas.

### Seguimiento de la remediación

**Priorización según gravedad**: Los hallazgos críticos requieren atención inmediata; los problemas de menor gravedad pueden programarse.

**Asignación de responsables**: Responsabilidad clara para cada hallazgo.

**Rendición de cuentas de plazos**: Fechas de remediación esperadas con escalamiento por retrasos.

**Seguimiento del estado**: Seguimiento sistemático del estado de los hallazgos a lo largo de la resolución.

### Pruebas de verificación

**Validación de la corrección**: Verificar que las remediaciones realmente abordan los hallazgos. Las correcciones superficiales pueden dejar las vulnerabilidades subyacentes.

**Prevención de regresiones**: Asegurar que las correcciones no reintroduzcan vulnerabilidades en otras formas.

**Monitorización continua**: Algunas vulnerabilidades pueden reaparecer a medida que los sistemas evolucionan.

## Consideraciones éticas

El red teaming implica intentar deliberadamente producir resultados dañinos. Esto crea obligaciones éticas:

**Minimizar el daño en el mundo real**: Las pruebas deben realizarse en entornos donde los resultados dañinos no afecten a usuarios reales. Cuando las pruebas deben realizarse en producción, minimizar la exposición.

**Bienestar del equipo**: La exposición a contenido dañino puede afectar a los miembros del red team. Proporcionar apoyo adecuado y rotación.

**Conciencia del doble uso**: Las técnicas desarrolladas para pruebas defensivas pueden posibilitar ataques. Considerar la seguridad de la información en torno a los detalles metodológicos.

**Proporcionalidad**: Las pruebas más invasivas requieren una justificación más sólida. Los [marcos de proporcionalidad del riesgo](/research/001-proportionality-disclosure/) se aplican a las decisiones de prueba.

## Modelo de madurez

Las organizaciones pueden evaluar la madurez de su red teaming:

**Nivel 1 - Ad hoc**: Pruebas informales y no estructuradas por los equipos de desarrollo.

**Nivel 2 - Definido**: Pruebas dedicadas con alcance y metodología básicos.

**Nivel 3 - Sistemático**: Cobertura integral usando enfoques estructurados, hallazgos documentados, remediación rastreada.

**Nivel 4 - Continuo**: Red teaming continuo integrado en el ciclo de desarrollo, pruebas de regresión automatizadas, evaluación externa periódica.

**Nivel 5 - Avanzado**: Desarrollo de metodología líder, contribución al conocimiento del campo, influencia en los estándares.

La mayoría de las organizaciones se encuentran en el Nivel 2-3. Avanzar requiere inversión en el desarrollo del equipo, herramientas e integración organizativa.

## Integración con la gobernanza

El red teaming debería conectarse con la gobernanza más amplia:

**Puertas previas al despliegue**: Aprobación del red team antes del despliegue. Criterios claros sobre qué hallazgos bloquean el lanzamiento. Los marcos de [evaluación previa al despliegue](/research/047-pre-deployment-risk-assessment/) integran el red teaming.

**Informes a nivel de consejo**: Los hallazgos materiales se escalan a los órganos de gobernanza. La [supervisión del consejo](/research/043-board-oversight/) crea las vías de escalamiento apropiadas.

**Cumplimiento regulatorio**: Las evidencias del red teaming respaldan los requisitos regulatorios para la evaluación de la seguridad.

**Mejora continua**: Los hallazgos informan las prácticas de desarrollo, los procedimientos de entrenamiento y las prioridades de investigación en seguridad.

## Conclusión

El red teaming proporciona una perspectiva adversarial esencial sobre la seguridad de la IA. Un red teaming eficaz requiere un alcance claro, equipos diversos, metodología sistemática, documentación exhaustiva e integración con procesos de remediación.

Las metodologías presentadas aquí representan la práctica actual, pero el campo está evolucionando. A medida que avanzan las capacidades de la IA, las técnicas de red teaming deben avanzar a la par. Las organizaciones deberían invertir en la capacidad de red teaming como una función central de seguridad, no como un ejercicio de evaluación puntual.

La brecha entre la capacidad del red team y la capacidad del adversario determina la exposición a vulnerabilidades. Invertir en red teaming avanzado reduce esta brecha, encontrando y corrigiendo problemas antes de su explotación. En el panorama actual de capacidades de IA que avanzan rápidamente, esta inversión es cada vez más esencial.

---

*Este marco presenta la metodología de red teaming para sistemas de IA generales. Los contextos específicos (modelos de frontera, aplicaciones de alto riesgo, capacidades novedosas) requieren enfoques mejorados más allá de estas líneas de base.*
