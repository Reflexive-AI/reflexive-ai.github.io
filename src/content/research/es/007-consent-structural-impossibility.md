---
title: "Consentimiento a escala: ¿una imposibilidad estructural?"
excerpt: "¿Puede existir un consentimiento significativo entre un humano y un motor de inferencia a hiperescala? Argumentamos que el 'consentimiento' es la primitiva legal equivocada para las interacciones con IA."
date: 2025-12-20
categories:
  - Governance Analysis
tags:
  - ethics
  - consent
  - legal-theory
  - data-rights
version: "1.0"
---

**Objeto de Investigación Reflexiva 007**  
*Tipo: Análisis Legal/Teórico*

## La ficción del acuerdo

El consentimiento es un contrato. Requiere dos agentes con capacidad de acción para acordar términos. Idealmente, requiere un "encuentro de voluntades": ambas partes comprenden a qué están accediendo y eligen libremente proceder.

Este concepto legal ha sido la base de los regímenes de protección de datos, los acuerdos de términos de servicio y las interfaces de usuario en toda la economía digital. "Acepto" se ha convertido quizás en la mentira más frecuente de la historia humana.

Cuando un usuario interactúa con un modelo de más de 100.000 millones de parámetros, la ficción se vuelve aún más forzada:

**1. Complejidad:** El usuario no puede comprender las implicaciones de privacidad de cómo su consulta podría ser almacenada, reutilizada para entrenamiento o analizada. ¿Qué significa que tus datos influyan en los pesos del modelo? ¿Cómo afecta eso a las salidas futuras para otros usuarios? Incluso los expertos tienen dificultades para explicar estas dinámicas; pedir a los usuarios que consientan de manera significativa es absurdo.

**2. Escala:** El modelo interactúa con millones de usuarios simultáneamente. No "acepta" en ningún sentido cognitivo; procesa. No hay contraparte al otro lado de la transacción de consentimiento, solo patrones estadísticos en pesos y un punto de acceso de API. La asimetría no es entre dos partes de poder desigual (como en la mayoría de los contratos de consumo) sino entre una parte y un proceso.

**3. Opacidad:** Ni siquiera el desarrollador sabe exactamente cómo un dato de entrenamiento específico influye en una salida específica. Si los propios creadores del sistema no pueden rastrear la causalidad, ¿cómo pueden representar honestamente a los usuarios lo que sucede con sus datos? El consentimiento requiere comprensión, y la comprensión requiere una transparencia que no existe.

**4. Desplazamiento temporal:** Los datos de entrenamiento de hace años influyen en las salidas de hoy. Un usuario que "consintió" en 2023 a las prácticas de datos se ve afectado por esos datos hasta que el modelo sea retirado, potencialmente para siempre si los datos se propagan a modelos sucesores. El consentimiento fue un momento; las consecuencias son eternas.

Por lo tanto, pedir "consentimiento" para el uso de datos en este contexto es una ficción legal. Es una renuncia de responsabilidad disfrazada de agencia del usuario. El botón que dice "Acepto" debería decir honestamente "Renuncio a mi derecho a objetar".

## Los modos de fallo del consentimiento

El marco de consentimiento falla de múltiples maneras cuando se aplica a sistemas de IA:

### El problema de la notificación

El consentimiento requiere un acuerdo informado. Pero las prácticas de datos de la IA son tan complejas que una notificación honesta sería incomprensible. Consideremos lo que un diálogo de consentimiento veraz necesitaría explicar:

- Tu consulta será procesada por un modelo entrenado con datos de millones de otros usuarios
- Tu consulta puede ser utilizada para seguir entrenando este modelo, influyendo en salidas futuras
- La asociación entre tu consulta y tu identidad puede persistir en embeddings incluso si se elimina el texto original
- Este modelo puede ser destilado en otros modelos, propagando la influencia de tus datos
- No podemos decirte específicamente cómo tus datos afectarán las salidas

Nadie leería esto, y quienes lo hicieran no lo entenderían. El requisito legal de proporcionar notificación se convierte en teatro de cumplimiento: divulgaciones técnicamente presentes pero prácticamente ausentes.

### El problema de la elección

El consentimiento requiere una elección significativa. Pero cuando los sistemas de IA se convierten en infraestructura, rechazar el consentimiento significa rechazar la participación en la sociedad.

Si los servicios impulsados por IA se convierten en el estándar para asesoramiento sanitario, solicitudes de empleo, apoyo educativo y servicios gubernamentales, "negarse a consentir" significa exclusión de las funciones básicas de la vida moderna. Esto no es una elección libre; es coerción disfrazada de consentimiento.

Ya hemos visto esto con los banners de consentimiento de cookies. Los usuarios técnicamente pueden rechazar, pero la mayoría de los servicios se vuelven inutilizables si lo hacen. La "elección" es entre aceptar la vigilancia y aceptar la exclusión.

### El problema del poder

El consentimiento funciona mejor entre partes de poder aproximadamente igual que pueden negociar términos. En las interacciones con IA, no hay negociación. Los términos se establecen unilateralmente. Los usuarios no pueden negociar una mejor protección de privacidad; solo pueden aceptar o rechazar la oferta estándar.

Cuando una parte establece todos los términos y la otra debe aceptar para participar, típicamente reconocemos esto como un contrato de adhesión y lo sometemos a un escrutinio más estricto. Pero los diálogos de consentimiento de IA rara vez reciben tal escrutinio: se tratan como si hubiera ocurrido un acuerdo genuino.

## Más allá del consentimiento: marcos alternativos

Si el consentimiento es estructuralmente imposible a la escala de la IA, ¿qué lo reemplaza? Varias alternativas merecen consideración:

### Responsabilidades fiduciarias

Deberíamos tratar a los proveedores de IA no como contrapartes de un contrato, sino como fiduciarios de información (similar a médicos o abogados). Tienen un deber de lealtad de no usar los datos del usuario contra su interés, independientemente de qué botón se haya pulsado.

Esto desplaza la carga. En lugar de preguntar "¿El usuario consintió a X?" preguntamos "¿Este uso de datos perjudicaría los intereses del usuario?" Esta última pregunta puede responderse independientemente de si se obtuvo un consentimiento significativo.

El deber fiduciario no es un concepto legal nuevo. Médicos, abogados y asesores financieros ya operan bajo él. Extenderlo a los proveedores de IA reconoce la realidad de la relación: los usuarios depositan su confianza en sistemas que no pueden comprender plenamente, y esa confianza crea obligaciones.

Las implicaciones son significativas. Un fiduciario no puede vender tus datos a terceros que podrían usarlos en tu contra, incluso si "consentiste" en los términos de servicio. Un fiduciario no puede entrenar modelos que te perjudiquen, incluso si la política de privacidad técnicamente lo permitía.

### Dignidad de los datos / Dividendos

Otro enfoque es abandonar por completo el modelo de consentimiento y tratar la contribución de datos como trabajo que merece compensación. Si tus datos ayudan a entrenar un modelo que genera miles de millones en ingresos, eres un contribuyente a ese valor y mereces una parte.

Este modelo tiene desafíos prácticos: rastrear las contribuciones individuales de datos, distribuir micropagos, valorar diferentes tipos de datos. Pero al menos reconoce la realidad de que la extracción de datos no es un intercambio libre entre iguales.

### Privacidad reflexiva

El propio sistema debería monitorear su ingesta de datos. En lugar de una política de privacidad estática, un modelo reflexivo podría tener una restricción de "Presupuesto de Privacidad" que limite matemáticamente lo que puede aprender de y sobre los usuarios individuales.

Esto podría utilizar técnicas de privacidad diferencial, añadiendo ruido a los datos de entrenamiento para prevenir la memorización de ejemplos individuales. O podría usar limitaciones de propósito, restricciones que impidan que los datos recopilados para un propósito se utilicen para otro.

La diferencia clave es que la protección de la privacidad se convierte en una propiedad del sistema, no en una promesa extraída de los usuarios. El usuario no necesita confiar en la palabra de la empresa; puede observar (o los auditores pueden verificar) que el sistema arquitectónicamente no puede violar su privacidad de maneras especificadas.

### Protecciones basadas en derechos

Algunas protecciones no deberían ser renunciables en absoluto. Así como no puedes consentir a la esclavitud o vender tu voto, quizás no puedas consentir a ciertos usos de datos independientemente de qué términos de servicio pulses.

Este es el enfoque que el RGPD adopta parcialmente con conceptos como el "interés legítimo" y las restricciones al procesamiento de categorías sensibles. Pero sigue atado al consentimiento para la mayoría de los propósitos. Un enfoque más radical identificaría categorías de uso de datos que simplemente están prohibidas, independientemente del acuerdo del usuario.

## Implicaciones para la gobernanza de la IA

La ficción del consentimiento tiene consecuencias prácticas para la gobernanza de la IA:

**Lagunas regulatorias:** Si se obtiene el consentimiento, los reguladores a menudo asumen que la interacción es legítima. Esto impide el escrutinio de prácticas a las que los usuarios nominalmente accedieron pero que no pudieron evaluar de manera significativa.

**Transferencia de culpa:** Cuando la IA causa daño, los proveedores señalan el consentimiento como defensa. "El usuario aceptó nuestros términos". Esto transfiere la responsabilidad de quienes diseñaron el sistema a quienes no tuvieron una elección real.

**Sesgo hacia la innovación:** Los marcos de consentimiento favorecen a los primeros en llegar. Quien obtiene el consentimiento primero puede usar los datos de maneras que se normalizan. Los que llegan después deben trabajar dentro de expectativas establecidas por quienes se movieron rápido y rompieron cosas.

**Exclusión de poblaciones vulnerables:** Aquellos menos capaces de comprender las implicaciones de la IA —niños, personas mayores, hablantes no nativos, personas con discapacidades cognitivas— son los menos protegidos por un marco que asume que la comprensión precede al acuerdo.

## Conclusión

La ficción legal del consentimiento cumplió un propósito en tiempos más simples. Cuando los acuerdos eran entre individuos que podían comprender los términos y negociar sobre ellos, exigir consentimiento protegía la autonomía. Ese mundo ya no existe en la interfaz entre humanos y sistemas de IA.

Nos enfrentamos a una elección. Podemos continuar la ficción: pulsando botones de "Acepto" que nadie lee, tratando el teatro de cumplimiento como protección, y dejando que los proveedores se escondan detrás de renuncias extraídas de usuarios que no tenían una alternativa significativa.

O podemos reconocer la imposibilidad estructural y construir marcos de gobernanza que protejan a los usuarios consientan o no. Deberes fiduciarios que no puedan ser renunciados. Restricciones de privacidad integradas en los sistemas en lugar de prometidas en las políticas. Derechos que existan independientemente de qué botones se pulsen.

El modelo de consentimiento no es solo ineficaz a la escala de la IA: es activamente dañino, proporcionando cobertura legal para prácticas que de otro modo serían reconocidas como violaciones de la dignidad humana. Ir más allá de él no es una propuesta radical; es un reconocimiento de la realidad.
