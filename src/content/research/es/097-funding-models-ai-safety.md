---
title: "Modelos de financiación para la investigación en seguridad de la IA"
excerpt: "La investigación en seguridad de la IA está crónicamente infrafinanciada en relación con el trabajo en capacidades. Este artículo examina las fuentes de financiación actuales, compara modelos alternativos desde premios hasta impuestos sobre computación, y propone mecanismos concretos para cerrar la brecha."
date: 2026-02-07
toc: true
categories:
  - Governance Analysis
tags:
  - funding
  - ai-safety
  - research-policy
  - philanthropy
  - public-funding
version: "1.0"
---

**Objeto de Investigación Reflexiva 097**
*Tipo: Investigación*

## Introducción

La investigación en seguridad de la IA está infrafinanciada. No en términos absolutos: cientos de millones de dólares fluyen hacia trabajo relacionado con la seguridad anualmente. Pero en relación con la escala de inversión en capacidades, la financiación de seguridad sigue siendo un error de redondeo. En 2024, la inversión global en IA superó los 100.000 millones de dólares. Las estimaciones de gasto dedicado a investigación en seguridad oscilaron entre 500 y 1.500 millones de dólares, dependiendo de lo que se considere "seguridad" (Epoch AI, 2024). Eso equivale aproximadamente a un céntimo de gasto en seguridad por cada dólar de inversión en capacidades.

Este desequilibrio importa. Como examinamos en [La economía de la seguridad de la IA](/research/078-economics-ai-safety/), quien paga por la seguridad determina qué trabajo de seguridad se realiza. Las estructuras de financiación determinan qué problemas reciben atención, qué investigadores pueden permitirse trabajar en seguridad y si la seguridad mantiene el ritmo de las capacidades.

La pregunta no es si la investigación en seguridad de la IA debería recibir más financiación. Debería. La pregunta es cómo. Diferentes modelos de financiación crean diferentes estructuras de incentivos, atraen a diferentes investigadores y producen diferentes tipos de trabajo. Algunos modelos fomentan la independencia. Otros fomentan la relevancia. Algunos generan programas sostenidos. Otros producen ráfagas de esfuerzo. Acertar con el mecanismo importa tanto como acertar con la cantidad.

Este artículo mapea el panorama actual de financiación, evalúa modelos de financiación alternativos y propone mecanismos específicos para cerrar la brecha entre la inversión en seguridad y la inversión en capacidades.

## El panorama actual de financiación

### Financiación filantrópica

La filantropía privada ha sido la columna vertebral de la investigación en seguridad de la IA durante más de una década. Open Philanthropy ha concedido más de 300 millones de dólares a seguridad y gobernanza de la IA desde 2016, lo que la convierte en el mayor financiador individual del campo fuera de los laboratorios corporativos (Open Philanthropy, 2025). El Survival and Flourishing Fund ha distribuido decenas de millones más. Donantes individuales, muchos de ellos empresarios tecnológicos, contribuyen mediante donaciones directas y fondos asesorados por donantes.

La financiación filantrópica permitió que el campo existiera. Antes de que los gobiernos o las corporaciones se tomaran en serio la seguridad de la IA, las fundaciones financiaron a los investigadores, organizaciones e instituciones que definieron la agenda de investigación. Organizaciones como MIRI, el Center for AI Safety, el Centre for the Governance of AI y Redwood Research deben su existencia al apoyo filantrópico.

Pero la financiación filantrópica tiene limitaciones estructurales. Las prioridades de los donantes cambian. Un giro estratégico de una sola fundación puede desestabilizar a toda una comunidad de investigación. La financiación filantrópica también refleja las visiones del mundo de los donantes: durante años, las preocupaciones sobre el riesgo existencial dominaron la financiación filantrópica de seguridad de la IA, mientras que el trabajo a corto plazo sobre equidad, sesgo y rendición de cuentas recibió menos atención de estas fuentes. Además, el capital filantrópico es finito de una manera que la financiación gubernamental o corporativa no lo es.

### Financiación gubernamental

La inversión gubernamental en seguridad de la IA está creciendo rápidamente, pero partió de una base baja. El Instituto Nacional de Estándares y Tecnología de EE.UU. (NIST) recibió aproximadamente 10 millones de dólares anuales para trabajo en seguridad de la IA hasta 2024, antes de recibir financiación ampliada. El Instituto de Seguridad de la IA del Reino Unido (AISI), establecido en 2023, opera con un presupuesto de aproximadamente 100 millones de dólares durante varios años. La UE asignó porciones de su programa Horizonte Europa a la investigación en IA fiable. Japón, Canadá y Corea del Sur también han anunciado iniciativas centradas en la seguridad.

La financiación gubernamental aporta escala, legitimidad y durabilidad. Las becas de investigación pública crean programas a largo plazo que sobreviven a las decisiones de donantes individuales. La financiación gubernamental también señala prioridad política, lo que influye en el comportamiento corporativo y la coordinación internacional.

Sin embargo, la financiación gubernamental se mueve lentamente. Los ciclos de subvenciones tardan meses. Los requisitos burocráticos consumen tiempo del investigador. Las prioridades políticas cambian con las elecciones. La financiación a menudo favorece el trabajo aplicado con clara relevancia política sobre la investigación fundamental. Y los presupuestos gubernamentales para seguridad de la IA siguen siendo pequeños en comparación con el gasto en IA de defensa e inteligencia. El Departamento de Defensa de EE.UU. gastó más de 1.800 millones de dólares en IA en el año fiscal 2024 (Congressional Research Service, 2024); su gasto explícitamente centrado en seguridad fue una fracción de eso.

### Financiación corporativa

Las mayores empresas de IA financian equipos internos de seguridad. Anthropic, cuya misión declarada se centra en la seguridad de la IA, asigna una parte significativa de su presupuesto de investigación a alineamiento e interpretabilidad. Google DeepMind mantiene equipos de seguridad y alineamiento. La iniciativa Superalignment de OpenAI, anunciada en 2023 con la promesa del 20% de la computación, produjo un trabajo notable antes de que su liderazgo partiera en 2024. Meta, Microsoft y otras financian investigación en seguridad a diversas escalas.

La financiación corporativa de seguridad es la categoría más grande en términos absolutos, pero es difícil de medir. Las empresas no informan de manera consistente sobre el gasto en seguridad separado de la investigación general. Lo que cuenta como “seguridad” frente a “capacidades” suele ser ambiguo: la investigación en interpretabilidad, por ejemplo, mejora tanto la comprensión de la seguridad como el rendimiento del modelo.

La financiación corporativa también crea dependencia. Como señalamos en [La economía de la seguridad de la IA](/research/078-economics-ai-safety/), los investigadores financiados por empresas sienten presión para alinear su trabajo con intereses comerciales. La investigación en seguridad que ralentiza el despliegue o impone costes recibe menos apoyo que la investigación en seguridad que habilita el despliegue. Los equipos internos de seguridad enfrentan dinámicas políticas: demasiada fricción con los equipos de producto reduce su influencia.

### Financiación académica

Las universidades financian la investigación en seguridad de la IA a través de canales académicos estándar: puestos de profesorado, apoyo a estudiantes de posgrado y becas de investigación. Existen centros dedicados en varias instituciones, incluido el Center for Human-Compatible AI en UC Berkeley y el Centre for the Study of Existential Risk en Cambridge.

La financiación académica es modesta en términos absolutos pero proporciona independencia, horizontes temporales largos y conexión con la comunidad científica más amplia. Sus limitaciones son las limitaciones estándar de la investigación académica: incentivos de publicación que recompensan la novedad sobre el impacto práctico, plazos de titularidad que desincentivan el trabajo aplicado, y presupuestos que no pueden soportar los experimentos intensivos en computación que requiere el trabajo de seguridad de frontera.

## Modelos de financiación alternativos

La mezcla actual de filantropía, subvenciones gubernamentales y presupuestos corporativos ha llevado al campo a su estado actual. Escalar la investigación en seguridad de la IA para igualar el crecimiento de las capacidades requiere mecanismos adicionales.

### Gasto obligatorio en seguridad

El enfoque más directo: exigir a las empresas de IA que gasten un porcentaje fijo de ingresos o presupuesto de I+D en investigación en seguridad. Esto refleja requisitos en otras industrias. Las empresas farmacéuticas deben financiar la farmacovigilancia. Los operadores nucleares financian programas de seguridad. Las instituciones financieras gastan cantidades obligatorias en cumplimiento y gestión de riesgos.

Una regla de gasto obligatorio en seguridad tiene ventajas claras. Se escala automáticamente con el crecimiento de la industria. Asegura que las empresas que crean el riesgo asuman el coste de gestionarlo. Crea un piso por debajo del cual la inversión en seguridad no puede caer.

Los desafíos son la definición y la aplicación. Qué cuenta como gasto en seguridad? Si la investigación en interpretabilidad mejora tanto la seguridad como las capacidades, cuenta? Las empresas tendrían incentivos para reetiquetar el trabajo existente como investigación en seguridad. Cualquier regla de gasto obligatorio requiere definiciones claras y auditoría independiente.

Un punto de partida razonable: exigir a las empresas por encima de un umbral de ingresos que gasten al menos el 5% del I+D relacionado con IA en trabajo de seguridad verificado de forma independiente por un auditor externo. Esto es modesto en comparación con el gasto en seguridad de la industria farmacéutica, que típicamente supera el 10% de los ingresos.

### Impuestos sobre computación

Gravar los recursos computacionales utilizados para entrenar modelos grandes y dirigir los ingresos a la investigación en seguridad. Este enfoque se dirige al recurso más directamente asociado con el avance de las capacidades. Como se explora en nuestro análisis de [gobernanza de la computación](/research/023-compute-governance/), la computación es medible, está concentrada entre un pequeño número de proveedores de nube y ya está sujeta a controles de exportación.

Un impuesto sobre computación de 0,01 dólares por hora de GPU en ejecuciones de entrenamiento por encima de un umbral (digamos, 10^23 FLOP) generaría ingresos significativos al tiempo que añade un coste marginal a las grandes ejecuciones de entrenamiento. A las escalas de entrenamiento de 2025, una sola ejecución de entrenamiento de un modelo de frontera consume millones de horas de GPU. Incluso un pequeño impuesto por hora genera decenas de millones de dólares por modelo.

Los ingresos de los impuestos sobre computación podrían financiar un instituto de investigación en seguridad independiente, de manera similar a como los ingresos de las subastas de espectro financian la investigación en telecomunicaciones. La decisión de diseño clave es la gobernanza: quién decide cómo se gastan los fondos y cómo se mantiene la independencia tanto de la industria como de la presión política?

### Modelos de premios y recompensas

Los premios recompensan logros específicos en lugar de financiar programas continuos. Los Grand Challenges de DARPA, el Netflix Prize y las competiciones de Kaggle demuestran que los premios pueden atraer talento y acelerar el progreso en problemas bien definidos.

Para la seguridad de la IA, los premios funcionan mejor cuando el problema está claramente definido y las soluciones son verificables. Los ejemplos incluyen recompensas de red teaming (encontrar y documentar modos de fallo específicos), desafíos de interpretabilidad (explicar el razonamiento interno de un modelo dado) y desarrollo de evaluaciones (crear mejores referencias para medir propiedades de seguridad).

La X-Prize Foundation anunció un premio de 10 millones de dólares para seguridad de la IA en 2025. Varias empresas ejecutan programas de recompensas por errores que incluyen hallazgos relevantes para la seguridad. Estos esfuerzos son pequeños pero demuestran la viabilidad del modelo.

Los premios tienen limitaciones. Favorecen problemas con criterios de éxito claros. Gran parte de la investigación en seguridad implica exploración abierta donde el éxito es difícil de definir de antemano. Los premios también crean dinámicas de ganador-se-lleva-todo que desincentivan la colaboración y el trabajo incremental.

Un enfoque híbrido combina recompensas para desafíos específicos y bien definidos con financiación mediante becas para investigación abierta. Recompensas de 100.000 a 1 millón de dólares por contribuciones específicas a la seguridad (descubrir una nueva categoría de jailbreak, desarrollar una herramienta de interpretabilidad verificada, crear una evaluación de seguridad que un modelo de frontera no supere) podrían complementar una financiación de investigación más amplia.

### Financiación vinculada a seguros

Como se examina en [Mercados de seguros y fijación de precios del riesgo de la IA](/research/036-insurance-markets/), los seguros crean incentivos financieros para la seguridad. La financiación vinculada a seguros extiende esta lógica: exigir a los implementadores de IA que contraten un seguro de responsabilidad civil y permitir a las aseguradoras financiar investigación en seguridad que reduzca su exposición.

Este modelo existe en otras industrias. Las aseguradoras de compensación laboral financian investigación en seguridad laboral. Las aseguradoras de negligencia médica financian iniciativas de seguridad del paciente. El Insurance Institute for Highway Safety, financiado por aseguradoras de automóviles, ha impulsado mejoras significativas en la seguridad de los vehículos.

Un Instituto de Seguros de Seguridad de la IA, financiado por primas de un seguro obligatorio de responsabilidad de la IA, podría apoyar investigación en seguridad independiente con relevancia directa para los riesgos de despliegue en el mundo real. Esto vincula la financiación al perfil de riesgo real de los sistemas de IA en lugar de a prioridades políticas o filantrópicas.

### Financiación internacional mancomunada

La seguridad de la IA es un bien público global. Ningún país individual captura todos los beneficios de la investigación en seguridad, y los riesgos cruzan fronteras. Esto crea un argumento para la financiación internacional mancomunada, similar al CERN para la física de partículas o al sistema CGIAR para la investigación agrícola.

El Frontier AI Forum, establecido tras la cumbre de Bletchley Park de 2023, representa un primer paso. Una versión más ambiciosa crearía un Fondo Internacional de Investigación en Seguridad de la IA con contribuciones de las principales naciones desarrolladoras de IA, gobernado por un consejo científico independiente, y distribuyendo subvenciones mediante competencia abierta.

Contribuciones anuales del 0,1% de los ingresos nacionales de la industria de IA de EE.UU., China, UE, Reino Unido, Japón y Corea del Sur generarían más de 1.000 millones de dólares anuales. Esto supera la financiación filantrópica actual y apoyaría una empresa de investigación independiente significativa.

El obstáculo es geopolítico. La IA está inmersa en la competencia estratégica entre EE.UU. y China. La financiación mancomunada requiere confianza en que los resultados de la investigación se compartirán abiertamente, lo que entra en conflicto con las preocupaciones de seguridad nacional. Un enfoque más realista a corto plazo limita la financiación mancomunada a aliados y socios, aceptando una escala reducida a cambio de mayor viabilidad.

## El problema del impuesto de alineamiento

Cada modelo de financiación debe enfrentar el impuesto de alineamiento: la investigación en seguridad compite con la investigación en capacidades por los mismos recursos escasos, particularmente investigadores talentosos y computación.

Los mejores investigadores en aprendizaje automático pueden exigir salarios superiores a 1 millón de dólares anuales en laboratorios de frontera. Las organizaciones centradas en seguridad, especialmente las sin fines de lucro y los grupos académicos, no pueden igualar estas ofertas. El resultado es una fuga persistente de talento de la seguridad hacia el trabajo en capacidades.

Esta dinámica se autorefuerza. Los laboratorios de capacidades atraen a los mejores investigadores. Los mejores investigadores producen resultados impresionantes. Los resultados impresionantes atraen financiación y más investigadores. Las organizaciones de seguridad luchan por competir por el talento, producen menos resultados llamativos y encuentran más difícil atraer a la próxima generación.

Como se discute en [El equilibrio entre velocidad y seguridad](/research/077-speed-safety-tradeoff/), este desequilibrio no es inevitable. Refleja decisiones sobre cómo se asignan los recursos. Varias estrategias pueden ayudar a cerrar la brecha.

**Competitividad salarial.** Las organizaciones de seguridad deben pagar salarios competitivos. Esto requiere fondos de financiación más grandes. La expectativa de que los investigadores de seguridad acepten una compensación por debajo del mercado por razones de misión es insostenible. Algunos financiadores filantrópicos han comenzado a apoyar salarios a precio de mercado en organizaciones de seguridad.

**Acceso a computación.** La investigación en seguridad requiere cada vez más acceso a computación a escala de frontera. Los clusters de computación financiados por el gobierno dedicados a investigación en seguridad, como el Recurso Nacional de Investigación en IA de EE.UU. (NAIRR) propuesto en 2023, pueden proporcionar esto sin requerir que cada organización de seguridad financie su propia infraestructura.

**Incentivos profesionales.** Las instituciones académicas deberían reconocer la investigación en seguridad para decisiones de contratación y titularidad. Las agencias de financiación gubernamental deberían crear trayectorias profesionales dedicadas a la investigación en seguridad. Las empresas deberían crear caminos para los investigadores de seguridad que no terminen en un callejón sin salida por debajo del nivel de liderazgo.

**Prestigio investigador.** La comunidad de investigación en seguridad ha progresado en el establecimiento de lugares de publicación (la serie de talleres SafeAI, tracks dedicados en ICML y NeurIPS) y reconocimiento de investigación. El progreso continuado en hacer que la investigación en seguridad sea intelectualmente prestigiosa atrae talento independientemente de la compensación.

## Una propuesta concreta: una arquitectura de financiación diversificada

Ningún modelo de financiación único es suficiente. Cada uno tiene fortalezas y debilidades. El objetivo debería ser una arquitectura diversificada que combine múltiples modelos para crear redundancia, independencia y escala.

Proponemos cinco componentes:

1. **Gasto corporativo obligatorio en seguridad.** Exigir a las empresas con ingresos de IA superiores a 1.000 millones de dólares que asignen al menos el 5% del gasto en I+D de IA a investigación en seguridad, auditada de forma independiente. Rendimiento estimado: de 2.000 a 5.000 millones de dólares anuales a la escala actual de la industria.

2. **Programas gubernamentales de investigación en seguridad.** Ampliar NIST, UK AISI y organismos equivalentes a un presupuesto combinado de 1.000 millones de dólares anuales entre naciones aliadas. Financiar tanto investigación interna como subvenciones externas mediante competencia abierta.

3. **Impuesto sobre computación para investigación independiente.** Aplicar un impuesto a las grandes ejecuciones de entrenamiento (por encima de 10^23 FLOP) para financiar una Fundación de Investigación en Seguridad de la IA independiente gobernada por un consejo científico sin mayoría de la industria ni del gobierno. Rendimiento estimado: de 200 a 500 millones de dólares anuales.

4. **Filantropía ampliada con coordinación.** Alentar a los financiadores filantrópicos a coordinarse a través de un marco estratégico compartido para reducir la duplicación y asegurar la cobertura de áreas descuidadas. Objetivo: mantener la financiación filantrópica actual (más de 500 millones de dólares) mejorando la asignación.

5. **Fondo internacional de investigación en seguridad.** Establecer un fondo multilateral para la investigación en seguridad de la IA, comenzando con los países de los Five Eyes y expandiéndose. Objetivo inicial: 500 millones de dólares anuales.

Esta arquitectura llevaría la financiación total de seguridad de la IA a entre 4.000 y 7.000 millones de dólares anuales: todavía modesta en relación con la inversión en capacidades, pero un aumento significativo respecto a los niveles actuales y suficiente para apoyar a una comunidad de investigación en seguridad grande, diversa e independiente.

## Dimensión reflexiva

Este análisis está a su vez moldeado por las dinámicas de financiación que describe. La Iniciativa Reflexive AI opera fuera del desarrollo comercial de IA, lo que otorga independencia pero limita el acceso a sistemas de frontera y conocimiento interno. Nuestra evaluación del gasto corporativo en seguridad depende de divulgaciones públicas que son incompletas por diseño.

También señalamos una tensión en nuestra propuesta. Las reglas de gasto obligatorio y los impuestos sobre computación aumentan el coste del desarrollo de IA. Como examinamos en [El equilibrio entre velocidad y seguridad](/research/077-speed-safety-tradeoff/), imponer costes al desarrollo lo ralentiza. Si las aplicaciones de IA proporcionan beneficios genuinos, ralentizar el desarrollo tiene costes. Nuestro juicio es que los beneficios de una investigación en seguridad adecuada superan estos costes, pero personas razonables discrepan.

Hay una preocupación reflexiva adicional: los investigadores financiados por mecanismos específicos de seguridad tienen incentivos para enfatizar la importancia de la investigación en seguridad. Los financiadores de la investigación en seguridad tienen incentivos para creer que su financiación es necesaria. Esto no invalida los argumentos, pero exige transparencia sobre estas dinámicas.

Finalmente, cualquier arquitectura de financiación crea poder. Quien controla las decisiones de financiación da forma a la agenda de investigación. La historia de la financiación científica muestra que el control centralizado produce pensamiento grupal y descuido de ideas heterodoxas. Nuestra arquitectura propuesta distribuye deliberadamente la autoridad de financiación entre múltiples organismos independientes para mitigar este riesgo.

## Conclusión

La financiación de la investigación en seguridad de la IA es inadecuada en escala, excesivamente concentrada en sus fuentes y estructuralmente desalineada con los problemas que necesita abordar. La mezcla actual de filantropía, subvenciones gubernamentales y presupuestos corporativos construyó el campo pero no lo sostendrá a la escala que el desarrollo de IA de frontera exige.

Cerrar la brecha requiere nuevos mecanismos: gasto obligatorio en seguridad, impuestos sobre computación, modelos de premios, financiación vinculada a seguros y cooperación internacional. Ningún mecanismo único es suficiente. Una arquitectura de financiación diversificada, que distribuya la autoridad y los recursos entre organismos independientes, proporciona la escala, independencia y resiliencia que la investigación en seguridad necesita.

El impuesto de alineamiento es real. La investigación en seguridad compite con la investigación en capacidades por talento, computación y atención. Superar esta competencia requiere no solo más dinero sino sistemas de financiación mejor diseñados que hagan que la investigación en seguridad sea intelectualmente gratificante, financieramente competitiva e institucionalmente respaldada.

Una financiación de seguridad adecuada cuesta miles de millones. Una investigación en seguridad inadecuada, en caso de que los sistemas avanzados de IA causen daños graves, cuesta más de lo que nadie quiere cuantificar. El argumento de inversión es directo.

## Referencias

1. Epoch AI. (2024). "Trends in AI Investment and Safety Spending." Epoch AI Research.
2. Open Philanthropy. (2025). "Grants Database: AI Safety and Governance." openphilanthropy.org.
3. Congressional Research Service. (2024). "Department of Defense Artificial Intelligence Spending." CRS Report R47976.
4. UK Department for Science, Innovation and Technology. (2023). "AI Safety Institute: Mission and Budget." gov.uk.
5. European Commission. (2024). "Horizon Europe: Trustworthy AI Cluster Funding." ec.europa.eu.
6. NIST. (2024). "AI Safety Research Program: Annual Report." National Institute of Standards and Technology.
7. Grunewald, E. & Heim, L. (2024). "Compute Governance and AI Safety." Centre for the Governance of AI Working Paper.
8. Amodei, D. (2023). "The Case for More AI Safety Funding." Anthropic Blog.
9. X-Prize Foundation. (2025). "AI Safety X-Prize: Competition Details." xprize.org.
10. National Academies of Sciences. (2024). "Funding Models for Emerging Technology Safety Research." National Academies Press.
11. Frontier AI Forum. (2024). "Charter and Funding Commitments." frontieraiforum.org.
12. Berger, A. & Lazar, S. (2024). "The Political Economy of AI Safety Research." Oxford University Working Paper.
