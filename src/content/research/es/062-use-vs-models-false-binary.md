---
title: "La falsa dicotomía: por qué 'regular el uso, no los modelos' malinterpreta la gobernanza de la IA"
excerpt: "Un artículo reciente de IEEE Spectrum aboga por una regulación de la IA basada en el uso frente a enfoques basados en los modelos. Este encuadre omite lo que realmente funciona: una gobernanza reflexiva y por capas que aborde capacidades, despliegue y rendición de cuentas sistémica de forma conjunta."
date: 2026-02-04
categories:
  - Governance Analysis
  - Policy Proposal
tags:
  - regulation
  - policy
  - governance
  - ai-models
  - use-based-regulation
---

## El atractivo de la regulación basada en el uso

El reciente artículo de John deVadoss en IEEE Spectrum, "Don't Regulate AI Models. Regulate AI Use", ofrece una simplicidad seductora. Dejemos de intentar controlar la tecnología en sí; en su lugar, controlemos lo que la gente hace con ella. Regulemos en "puntos de estrangulamiento" como las tiendas de aplicaciones, las plataformas en la nube y las pasarelas de pago. Escalemos las obligaciones según niveles de riesgo. Dejemos que los modelos fluyan libremente y atrapemos a los actores maliciosos en la cadena posterior.

El atractivo es evidente. Los pesos de los modelos, una vez publicados, se replican a un coste casi nulo. Intentar "embotellar artefactos" parece inútil. Mientras tanto, los daños reales ocurren en el punto de despliegue, no en el punto de entrenamiento. ¿Por qué no centrar la aplicación de la ley donde importa?

Este encuadre es comprensible. Pero también es erróneo. No porque la regulación basada en el uso sea mala, sino porque presentarla como alternativa a la gobernanza de modelos crea una falsa dicotomía que debilita la seguridad de la IA.

## La falsa dicotomía

DeVadoss plantea la elección como binaria: regular los modelos o regular el uso. Elijamos una. La regulación centrada en modelos "fracasa"; la regulación basada en el uso "funciona".

Pero una gobernanza eficaz nunca ha requerido esta elección. Regulamos los materiales peligrosos en múltiples puntos: fabricación, distribución, venta, posesión y uso. La regulación farmacéutica cubre el desarrollo de fármacos, los ensayos clínicos, la fabricación, la prescripción y el uso por parte del paciente. La seguridad aérea aborda el diseño de aeronaves, la certificación de pilotos, las operaciones de las aerolíneas y el control del tráfico aéreo.

La cuestión no es qué palanca única accionar, sino cómo construir un sistema por capas donde cada capa refuerce a las demás.

Para la IA, esto significa:

- **Gobernanza a nivel de modelo**: Requisitos sobre cómo se desarrollan, evalúan y despliegan los sistemas capaces
- **Gobernanza a nivel de uso**: Reglas sobre cómo los sistemas desplegados pueden aplicarse en contextos específicos
- **Gobernanza reflexiva**: Mecanismos donde los propios sistemas de IA participan en la supervisión

Elegir solo un nivel crea brechas que los actores sofisticados explotarán.

## Por qué los modelos siguen importando

DeVadoss descarta la gobernanza a nivel de modelo porque "los pesos se replican a un coste casi nulo". Precisamente por eso importan las capacidades de los modelos. Un solo modelo puede habilitar millones de usos perjudiciales. Si ese modelo se desarrolla sin evaluaciones de seguridad, se publica sin documentación y se despliega sin restricciones, hemos creado un multiplicador del daño.

Consideremos la lógica: ¿porque las capacidades peligrosas son fáciles de copiar, deberíamos ignorar dónde se originan? Esto es como argumentar que, dado que el software pirata se propaga fácilmente, no deberíamos preocuparnos por la seguridad del software. La facilidad de replicación es un argumento a favor de prestar más atención al origen, no menos.

La gobernanza a nivel de modelo aborda problemas que la gobernanza a nivel de uso no puede:

**Evaluación de capacidades.** Antes de que un sistema se despliegue en cualquier lugar, sus capacidades deberían estar comprendidas. ¿Qué puede hacer? ¿Qué riesgos plantea? Las [evaluaciones de capacidades](/research/024-capability-evaluations/) realizadas durante el desarrollo detectan problemas antes de que proliferen.

**Restricciones de seguridad.** Ciertos comportamientos deberían ser difíciles o imposibles independientemente del contexto de uso. Un modelo que se niega a proporcionar instrucciones para sintetizar armas biológicas es más seguro que uno donde esa negativa depende de las decisiones de despliegue en la cadena posterior.

**Procedencia transparente.** La [procedencia de los resultados](/research/012-output-provenance/) y la documentación de modelos crean cadenas de rendición de cuentas. Cuando algo sale mal, podemos rastrear hacia atrás para entender por qué. La regulación puramente basada en el uso oscurece este linaje.

**Rendición de cuentas en la cadena de suministro.** Los sistemas modernos de IA se construyen sobre capas de otros sistemas: modelos base, variantes ajustadas, aplicaciones con andamiaje. Sin gobernanza a nivel de modelo, la responsabilidad se fragmenta a lo largo de esta cadena de suministro hasta que nadie rinde cuentas de nada.

## La ilusión de los puntos de estrangulamiento

DeVadoss propone aplicar la gobernanza de la IA en "puntos de estrangulamiento del mundo real": tiendas de aplicaciones, plataformas en la nube, sistemas de pago, aseguradoras. Esto suena práctico. Son entidades concretas con activos que proteger y licencias que perder. Pueden ser responsabilizadas de maneras que los desarrolladores anónimos de modelos no pueden.

Pero la aplicación de la ley en los puntos de estrangulamiento tiene tres problemas.

### Crea dependencias de centralización

Si la seguridad depende de las tiendas de aplicaciones y los proveedores de nube, hemos convertido a esas entidades en guardianes de la gobernanza de la IA. ¿Qué sucede cuando son capturadas por intereses comerciales? ¿Cuándo deciden que la aplicación es demasiado costosa? ¿Cuándo sus intereses divergen del bienestar público?

La historia de la gobernanza de plataformas no es alentadora. Las tiendas de aplicaciones han sido acusadas de comportamiento anticompetitivo disfrazado de revisión de seguridad. Los proveedores de nube han alojado contenido ilegal durante años antes de actuar. Los sistemas de pago han sido utilizados como arma para fines políticos no relacionados con la prevención genuina de daños.

Hacer que la seguridad de la IA dependa de estos actores no es gobernanza; es externalización.

### Permite dinámicas de gato y ratón

Los actores sofisticados sortean los puntos de estrangulamiento. Se autoalojan. Usan criptomonedas. Operan desde jurisdicciones fuera del alcance de la aplicación de la ley. Construyen sobre modelos de pesos abiertos que nunca pasan por plataformas controladas.

La aplicación en los puntos de estrangulamiento atrapa a los que cumplen y a los descuidados. No alcanza a los sofisticados. Esto no es inútil, pero deberíamos ser claros sobre sus limitaciones.

### No proporciona rendición de cuentas aguas arriba

Para cuando una aplicación dañina llega a un punto de estrangulamiento, la capacidad ya ha proliferado. El modelo ha sido entrenado, los pesos han sido publicados, el uso indebido se ha vuelto posible. Estamos ahora en modo de remediación: bloqueando daños específicos después de que se hayan vuelto factibles en lugar de prevenir que se vuelvan factibles en primer lugar.

La regulación basada en el uso es reactiva. La gobernanza a nivel de modelo puede ser preventiva. Ambas tienen un papel; ninguna sustituye a la otra.

## La capa ausente: gobernanza reflexiva

Ni deVadoss ni la mayoría de los marcos regulatorios abordan la innovación fundamental que permite la naturaleza de la IA: el propio sistema puede participar en la gobernanza.

Las tecnologías tradicionales son pasivas. Un fármaco no se niega a envenenar a alguien. Un automóvil no rechaza ser utilizado como arma. Pero los sistemas de IA pueden incorporar restricciones directamente en su operación, pueden explicar esas restricciones a los usuarios y pueden señalar posibles usos indebidos a los supervisores.

Esto es gobernanza reflexiva, el enfoque central de [nuestra iniciativa](/research/030-manifesto/).

La gobernanza reflexiva significa:

**Restricciones que viajan con el modelo.** Los [esquemas de restricciones legibles por máquina](/research/003-machine-readable-constraint-schema/) permiten documentar capacidades y limitaciones en formatos verificables. Esto puede ser comprobado en el momento del despliegue sin depender de que las plataformas posteriores entiendan lo que están manejando.

**Sistemas de IA que rechazan usos dañinos de forma proactiva.** Cuando un sistema [rechaza una solicitud](/research/025-when-ai-should-refuse/), lo hace porque el rechazo está integrado en su operación, no porque una tienda de aplicaciones haya bloqueado la instalación. Esto crea defensa en profundidad.

**Transparencia sobre capacidades y limitaciones.** La [autorrepresentación honesta](/research/029-honest-ai/) hace posible la gobernanza. Los sistemas que pueden articular qué son y qué pueden hacer apoyan la supervisión; los sistemas que oscurecen esto la socavan.

**Protocolos para la comunicación IA-regulador.** Los [protocolos IA-regulador](/research/014-ai-regulator-protocol/) permiten a los sistemas señalar anomalías, informar sobre posibles usos indebidos y apoyar la supervisión humana. Esto crea un bucle de retroalimentación entre los sistemas desplegados y las autoridades de gobernanza.

Los mecanismos reflexivos no reemplazan la gobernanza externa. La complementan. Un enfoque por capas con requisitos a nivel de modelo, aplicación a nivel de uso y capacidades reflexivas crea redundancia donde el fallo de una capa no derrumba todo el sistema.

## Preocupaciones constitucionales en perspectiva

DeVadoss argumenta que el licenciamiento de publicación de modelos "probablemente colisiona con la legislación de libertad de expresión" porque "los tribunales federales han tratado el código fuente del software como expresión protegida".

Este encuadre confunde varias cuestiones distintas.

Primero, las protecciones de "expresión" para el código no han impedido la regulación de la distribución de software. Los controles de exportación restringen el intercambio de algoritmos criptográficos. El software de dispositivos médicos requiere la aprobación de la FDA. Los sistemas de seguridad crítica en aviación y automoción deben cumplir estándares regulatorios. Ninguno de estos ha sido anulado como censura previa inconstitucional.

Segundo, la afirmación de que cualquier requisito de publicación viola la Primera Enmienda prueba demasiado. Si fuera cierta, invalidaría los controles de exportación sobre transferencia tecnológica, las licencias profesionales para ingenieros de software y los requisitos de divulgación para algoritmos relacionados con valores. Los tribunales generalmente han respaldado estos requisitos bajo revisión de base racional.

Tercero, los requisitos de seguridad no son censura previa. Exigir que un modelo se someta a una evaluación de seguridad antes de una publicación amplia es análogo a exigir ensayos clínicos antes de que un fármaco se comercialice. El objetivo no es suprimir la expresión, sino garantizar que las capacidades peligrosas no se desplieguen de forma imprudente.

Cuarto, enmarcar toda la IA como "expresión" es un error categorial. Un modelo que puede sintetizar instrucciones para armas biológicas no está principalmente ejerciendo expresión. Tratarlo como tal porque está implementado en código estira la Primera Enmienda hasta el punto de ser irreconocible.

Las preocupaciones constitucionales sobre la gobernanza de la IA merecen atención seria. Pero no deberían utilizarse como carta de triunfo para impedir cualquier regulación a nivel de modelo.

## ¿Qué funciona realmente?

Si ni la regulación puramente basada en el uso ni la puramente basada en modelos es suficiente, ¿qué es lo adecuado?

Un enfoque por capas con varios componentes integrados:

**Requisitos de modelo proporcionales a las capacidades.** Los sistemas con capacidades peligrosas deberían enfrentar requisitos proporcionales a esas capacidades: evaluaciones de seguridad, documentación y controles de acceso. Esto no es censura previa; es despliegue responsable. La [proporcionalidad](/research/001-proportionality-disclosure/) es clave: los prototipos de investigación no deberían enfrentar la misma carga que los sistemas desplegados para millones de personas.

**Regulación del uso sensible al contexto.** Los contextos de despliegue de alto riesgo deberían tener requisitos más exigentes. La IA sanitaria, la IA en infraestructuras críticas y la IA en contratación deberían enfrentar un escrutinio apropiado a sus impactos potenciales. Los niveles de riesgo para el uso propuestos por deVadoss van en la dirección correcta.

**Aplicación en los puntos de estrangulamiento como una capa.** Las tiendas de aplicaciones, los proveedores de nube y los sistemas de pago pueden servir como puntos de aplicación, pero no como los únicos. Deberían reforzar otras capas, no sustituirlas.

**Mecanismos reflexivos.** Los sistemas deberían participar en su propia gobernanza mediante restricciones legibles por máquina, rechazos explicables, comunicación de incertidumbre y protocolos IA-regulador. Esto crea defensa en profundidad que no depende enteramente de la aplicación externa.

**Coordinación internacional.** Como analizamos en [arbitraje regulatorio](/research/008-regulatory-arbitrage/), la gobernanza puramente nacional crea brechas que serán explotadas. Incluso una coordinación internacional imperfecta es mejor que enfoques fragmentados que compiten en una carrera hacia el fondo.

## Conclusión

"Regular el uso, no los modelos" es un eslogan, no una estrategia. Captura una idea válida: la aplicación debería centrarse donde la IA afecta al mundo real. Pero empaqueta esa idea en una falsa dicotomía que debilita la gobernanza.

Una gobernanza eficaz de la IA requiere mecanismos por capas: requisitos a nivel de modelo que creen rendición de cuentas aguas arriba, regulación a nivel de uso que aborde el contexto de despliegue, mecanismos reflexivos que conviertan a los sistemas de IA en contribuyentes a su propia supervisión, y aplicación en los puntos de estrangulamiento que refuerce las demás capas.

El artículo de deVadoss aborda problemas reales de la gobernanza a nivel de modelo: desafíos definitorios, dificultades de aplicación, compromisos con la innovación. Estos problemas merecen un compromiso serio. Pero la solución no es abandonar la gobernanza de modelos por un enfoque exclusivamente basado en el uso. Es construir sistemas por capas donde cada mecanismo compense las debilidades de los demás.

La tecnología es demasiado poderosa, las apuestas demasiado altas, para una gobernanza que dependa de un único punto de control.

## Investigación relacionada

- [Proporcionalidad en la divulgación de modelos](/research/001-proportionality-disclosure/)
- [Un esquema de restricciones legible por máquina](/research/003-machine-readable-constraint-schema/)
- [Arbitraje regulatorio en el despliegue de IA](/research/008-regulatory-arbitrage/)
- [Por qué 'simplemente regular la IA' es más difícil de lo que parece](/research/018-regulation-is-hard/)
- [La Ley de IA de la UE: lo que omite](/research/019-eu-ai-act-gaps/)
- [Un manifiesto de IA reflexiva](/research/030-manifesto/)
