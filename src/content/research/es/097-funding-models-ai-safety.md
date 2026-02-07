---
title: "Modelos de financiacion para la investigacion en seguridad de la IA"
excerpt: "La investigacion en seguridad de la IA esta cronicamente infrafinanciada en relacion con el trabajo en capacidades. Este articulo examina las fuentes de financiacion actuales, compara modelos alternativos desde premios hasta impuestos sobre computacion, y propone mecanismos concretos para cerrar la brecha."
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

**Objeto de Investigacion Reflexiva 097**
*Tipo: Investigacion*

## Introduccion

La investigacion en seguridad de la IA esta infrafinanciada. No en terminos absolutos: cientos de millones de dolares fluyen hacia trabajo relacionado con la seguridad anualmente. Pero en relacion con la escala de inversion en capacidades, la financiacion de seguridad sigue siendo un error de redondeo. En 2024, la inversion global en IA supero los 100.000 millones de dolares. Las estimaciones de gasto dedicado a investigacion en seguridad oscilaron entre 500 y 1.500 millones de dolares, dependiendo de lo que se considere "seguridad" (Epoch AI, 2024). Eso equivale aproximadamente a un centimo de gasto en seguridad por cada dolar de inversion en capacidades.

Este desequilibrio importa. Como examinamos en [La economia de la seguridad de la IA](/research/078-economics-ai-safety/), quien paga por la seguridad determina que trabajo de seguridad se realiza. Las estructuras de financiacion determinan que problemas reciben atencion, que investigadores pueden permitirse trabajar en seguridad y si la seguridad mantiene el ritmo de las capacidades.

La pregunta no es si la investigacion en seguridad de la IA deberia recibir mas financiacion. Deberia. La pregunta es como. Diferentes modelos de financiacion crean diferentes estructuras de incentivos, atraen a diferentes investigadores y producen diferentes tipos de trabajo. Algunos modelos fomentan la independencia. Otros fomentan la relevancia. Algunos generan programas sostenidos. Otros producen rafagas de esfuerzo. Acertar con el mecanismo importa tanto como acertar con la cantidad.

Este articulo mapea el panorama actual de financiacion, evalua modelos de financiacion alternativos y propone mecanismos especificos para cerrar la brecha entre la inversion en seguridad y la inversion en capacidades.

## El panorama actual de financiacion

### Financiacion filantropica

La filantropia privada ha sido la columna vertebral de la investigacion en seguridad de la IA durante mas de una decada. Open Philanthropy ha concedido mas de 300 millones de dolares a seguridad y gobernanza de la IA desde 2016, lo que la convierte en el mayor financiador individual del campo fuera de los laboratorios corporativos (Open Philanthropy, 2025). El Survival and Flourishing Fund ha distribuido decenas de millones mas. Donantes individuales, muchos de ellos empresarios tecnologicos, contribuyen mediante donaciones directas y fondos asesorados por donantes.

La financiacion filantropica permitio que el campo existiera. Antes de que los gobiernos o las corporaciones se tomaran en serio la seguridad de la IA, las fundaciones financiaron a los investigadores, organizaciones e instituciones que definieron la agenda de investigacion. Organizaciones como MIRI, el Center for AI Safety, el Centre for the Governance of AI y Redwood Research deben su existencia al apoyo filantropico.

Pero la financiacion filantropica tiene limitaciones estructurales. Las prioridades de los donantes cambian. Un giro estrategico de una sola fundacion puede desestabilizar a toda una comunidad de investigacion. La financiacion filantropica tambien refleja las visiones del mundo de los donantes: durante anos, las preocupaciones sobre el riesgo existencial dominaron la financiacion filantropica de seguridad de la IA, mientras que el trabajo a corto plazo sobre equidad, sesgo y rendicion de cuentas recibio menos atencion de estas fuentes. Ademas, el capital filantropico es finito de una manera que la financiacion gubernamental o corporativa no lo es.

### Financiacion gubernamental

La inversion gubernamental en seguridad de la IA esta creciendo rapidamente, pero partio de una base baja. El Instituto Nacional de Estandares y Tecnologia de EE.UU. (NIST) recibio aproximadamente 10 millones de dolares anuales para trabajo en seguridad de la IA hasta 2024, antes de recibir financiacion ampliada. El Instituto de Seguridad de la IA del Reino Unido (AISI), establecido en 2023, opera con un presupuesto de aproximadamente 100 millones de dolares durante varios anos. La UE asigno porciones de su programa Horizonte Europa a la investigacion en IA fiable. Japon, Canada y Corea del Sur tambien han anunciado iniciativas centradas en la seguridad.

La financiacion gubernamental aporta escala, legitimidad y durabilidad. Las becas de investigacion publica crean programas a largo plazo que sobreviven a las decisiones de donantes individuales. La financiacion gubernamental tambien senala prioridad politica, lo que influye en el comportamiento corporativo y la coordinacion internacional.

Sin embargo, la financiacion gubernamental se mueve lentamente. Los ciclos de subvenciones tardan meses. Los requisitos burocraticos consumen tiempo del investigador. Las prioridades politicas cambian con las elecciones. La financiacion a menudo favorece el trabajo aplicado con clara relevancia politica sobre la investigacion fundamental. Y los presupuestos gubernamentales para seguridad de la IA siguen siendo pequenos en comparacion con el gasto en IA de defensa e inteligencia. El Departamento de Defensa de EE.UU. gasto mas de 1.800 millones de dolares en IA en el ano fiscal 2024 (Congressional Research Service, 2024); su gasto explicitamente centrado en seguridad fue una fraccion de eso.

### Financiacion corporativa

Las mayores empresas de IA financian equipos internos de seguridad. Anthropic, cuya mision declarada se centra en la seguridad de la IA, asigna una parte significativa de su presupuesto de investigacion a alineamiento e interpretabilidad. Google DeepMind mantiene equipos de seguridad y alineamiento. La iniciativa Superalignment de OpenAI, anunciada en 2023 con la promesa del 20% de la computacion, produjo un trabajo notable antes de que su liderazgo partiera en 2024. Meta, Microsoft y otras financian investigacion en seguridad a diversas escalas.

La financiacion corporativa de seguridad es la categoria mas grande en terminos absolutos, pero es dificil de medir. Las empresas no informan de manera consistente sobre el gasto en seguridad separado de la investigacion general. Lo que cuenta como "seguridad" frente a "capacidades" suele ser ambiguo: la investigacion en interpretabilidad, por ejemplo, mejora tanto la comprension de la seguridad como el rendimiento del modelo.

La financiacion corporativa tambien crea dependencia. Como senalamos en [La economia de la seguridad de la IA](/research/078-economics-ai-safety/), los investigadores financiados por empresas sienten presion para alinear su trabajo con intereses comerciales. La investigacion en seguridad que ralentiza el despliegue o impone costes recibe menos apoyo que la investigacion en seguridad que habilita el despliegue. Los equipos internos de seguridad enfrentan dinamicas politicas: demasiada friccion con los equipos de producto reduce su influencia.

### Financiacion academica

Las universidades financian la investigacion en seguridad de la IA a traves de canales academicos estandar: puestos de profesorado, apoyo a estudiantes de posgrado y becas de investigacion. Existen centros dedicados en varias instituciones, incluido el Center for Human-Compatible AI en UC Berkeley y el Centre for the Study of Existential Risk en Cambridge.

La financiacion academica es modesta en terminos absolutos pero proporciona independencia, horizontes temporales largos y conexion con la comunidad cientifica mas amplia. Sus limitaciones son las limitaciones estandar de la investigacion academica: incentivos de publicacion que recompensan la novedad sobre el impacto practico, plazos de titularidad que desincentivan el trabajo aplicado, y presupuestos que no pueden soportar los experimentos intensivos en computacion que requiere el trabajo de seguridad de frontera.

## Modelos de financiacion alternativos

La mezcla actual de filantropia, subvenciones gubernamentales y presupuestos corporativos ha llevado al campo a su estado actual. Escalar la investigacion en seguridad de la IA para igualar el crecimiento de las capacidades requiere mecanismos adicionales.

### Gasto obligatorio en seguridad

El enfoque mas directo: exigir a las empresas de IA que gasten un porcentaje fijo de ingresos o presupuesto de I+D en investigacion en seguridad. Esto refleja requisitos en otras industrias. Las empresas farmaceuticas deben financiar la farmacovigilancia. Los operadores nucleares financian programas de seguridad. Las instituciones financieras gastan cantidades obligatorias en cumplimiento y gestion de riesgos.

Una regla de gasto obligatorio en seguridad tiene ventajas claras. Se escala automaticamente con el crecimiento de la industria. Asegura que las empresas que crean el riesgo asuman el coste de gestionarlo. Crea un piso por debajo del cual la inversion en seguridad no puede caer.

Los desafios son la definicion y la aplicacion. Que cuenta como gasto en seguridad? Si la investigacion en interpretabilidad mejora tanto la seguridad como las capacidades, cuenta? Las empresas tendrian incentivos para reetiquetar el trabajo existente como investigacion en seguridad. Cualquier regla de gasto obligatorio requiere definiciones claras y auditoria independiente.

Un punto de partida razonable: exigir a las empresas por encima de un umbral de ingresos que gasten al menos el 5% del I+D relacionado con IA en trabajo de seguridad verificado de forma independiente por un auditor externo. Esto es modesto en comparacion con el gasto en seguridad de la industria farmaceutica, que tipicamente supera el 10% de los ingresos.

### Impuestos sobre computacion

Gravar los recursos computacionales utilizados para entrenar modelos grandes y dirigir los ingresos a la investigacion en seguridad. Este enfoque se dirige al recurso mas directamente asociado con el avance de las capacidades. Como se explora en nuestro analisis de [gobernanza de la computacion](/research/023-compute-governance/), la computacion es medible, esta concentrada entre un pequeno numero de proveedores de nube y ya esta sujeta a controles de exportacion.

Un impuesto sobre computacion de 0,01 dolares por hora de GPU en ejecuciones de entrenamiento por encima de un umbral (digamos, 10^23 FLOP) generaria ingresos significativos al tiempo que anade un coste marginal a las grandes ejecuciones de entrenamiento. A las escalas de entrenamiento de 2025, una sola ejecucion de entrenamiento de un modelo de frontera consume millones de horas de GPU. Incluso un pequeno impuesto por hora genera decenas de millones de dolares por modelo.

Los ingresos de los impuestos sobre computacion podrian financiar un instituto de investigacion en seguridad independiente, de manera similar a como los ingresos de las subastas de espectro financian la investigacion en telecomunicaciones. La decision de diseno clave es la gobernanza: quien decide como se gastan los fondos y como se mantiene la independencia tanto de la industria como de la presion politica?

### Modelos de premios y recompensas

Los premios recompensan logros especificos en lugar de financiar programas continuos. Los Grand Challenges de DARPA, el Netflix Prize y las competiciones de Kaggle demuestran que los premios pueden atraer talento y acelerar el progreso en problemas bien definidos.

Para la seguridad de la IA, los premios funcionan mejor cuando el problema esta claramente definido y las soluciones son verificables. Los ejemplos incluyen recompensas de red teaming (encontrar y documentar modos de fallo especificos), desafios de interpretabilidad (explicar el razonamiento interno de un modelo dado) y desarrollo de evaluaciones (crear mejores referencias para medir propiedades de seguridad).

La X-Prize Foundation anuncio un premio de 10 millones de dolares para seguridad de la IA en 2025. Varias empresas ejecutan programas de recompensas por errores que incluyen hallazgos relevantes para la seguridad. Estos esfuerzos son pequenos pero demuestran la viabilidad del modelo.

Los premios tienen limitaciones. Favorecen problemas con criterios de exito claros. Gran parte de la investigacion en seguridad implica exploracion abierta donde el exito es dificil de definir de antemano. Los premios tambien crean dinamicas de ganador-se-lleva-todo que desincentivan la colaboracion y el trabajo incremental.

Un enfoque hibrido combina recompensas para desafios especificos y bien definidos con financiacion mediante becas para investigacion abierta. Recompensas de 100.000 a 1 millon de dolares por contribuciones especificas a la seguridad (descubrir una nueva categoria de jailbreak, desarrollar una herramienta de interpretabilidad verificada, crear una evaluacion de seguridad que un modelo de frontera no supere) podrian complementar una financiacion de investigacion mas amplia.

### Financiacion vinculada a seguros

Como se examina en [Mercados de seguros y fijacion de precios del riesgo de la IA](/research/036-insurance-markets/), los seguros crean incentivos financieros para la seguridad. La financiacion vinculada a seguros extiende esta logica: exigir a los implementadores de IA que contraten un seguro de responsabilidad civil y permitir a las aseguradoras financiar investigacion en seguridad que reduzca su exposicion.

Este modelo existe en otras industrias. Las aseguradoras de compensacion laboral financian investigacion en seguridad laboral. Las aseguradoras de negligencia medica financian iniciativas de seguridad del paciente. El Insurance Institute for Highway Safety, financiado por aseguradoras de automoviles, ha impulsado mejoras significativas en la seguridad de los vehiculos.

Un Instituto de Seguros de Seguridad de la IA, financiado por primas de un seguro obligatorio de responsabilidad de la IA, podria apoyar investigacion en seguridad independiente con relevancia directa para los riesgos de despliegue en el mundo real. Esto vincula la financiacion al perfil de riesgo real de los sistemas de IA en lugar de a prioridades politicas o filantropicas.

### Financiacion internacional mancomunada

La seguridad de la IA es un bien publico global. Ningun pais individual captura todos los beneficios de la investigacion en seguridad, y los riesgos cruzan fronteras. Esto crea un argumento para la financiacion internacional mancomunada, similar al CERN para la fisica de particulas o al sistema CGIAR para la investigacion agricola.

El Frontier AI Forum, establecido tras la cumbre de Bletchley Park de 2023, representa un primer paso. Una version mas ambiciosa crearia un Fondo Internacional de Investigacion en Seguridad de la IA con contribuciones de las principales naciones desarrolladoras de IA, gobernado por un consejo cientifico independiente, y distribuyendo subvenciones mediante competencia abierta.

Contribuciones anuales del 0,1% de los ingresos nacionales de la industria de IA de EE.UU., China, UE, Reino Unido, Japon y Corea del Sur generarian mas de 1.000 millones de dolares anuales. Esto supera la financiacion filantropica actual y apoyaria una empresa de investigacion independiente significativa.

El obstaculo es geopolitico. La IA esta inmersa en la competencia estrategica entre EE.UU. y China. La financiacion mancomunada requiere confianza en que los resultados de la investigacion se compartiran abiertamente, lo que entra en conflicto con las preocupaciones de seguridad nacional. Un enfoque mas realista a corto plazo limita la financiacion mancomunada a aliados y socios, aceptando una escala reducida a cambio de mayor viabilidad.

## El problema del impuesto de alineamiento

Cada modelo de financiacion debe enfrentar el impuesto de alineamiento: la investigacion en seguridad compite con la investigacion en capacidades por los mismos recursos escasos, particularmente investigadores talentosos y computacion.

Los mejores investigadores en aprendizaje automatico pueden exigir salarios superiores a 1 millon de dolares anuales en laboratorios de frontera. Las organizaciones centradas en seguridad, especialmente las sin fines de lucro y los grupos academicos, no pueden igualar estas ofertas. El resultado es una fuga persistente de talento de la seguridad hacia el trabajo en capacidades.

Esta dinamica se autorefuerza. Los laboratorios de capacidades atraen a los mejores investigadores. Los mejores investigadores producen resultados impresionantes. Los resultados impresionantes atraen financiacion y mas investigadores. Las organizaciones de seguridad luchan por competir por el talento, producen menos resultados llamativos y encuentran mas dificil atraer a la proxima generacion.

Como se discute en [El equilibrio entre velocidad y seguridad](/research/077-speed-safety-tradeoff/), este desequilibrio no es inevitable. Refleja decisiones sobre como se asignan los recursos. Varias estrategias pueden ayudar a cerrar la brecha.

**Competitividad salarial.** Las organizaciones de seguridad deben pagar salarios competitivos. Esto requiere fondos de financiacion mas grandes. La expectativa de que los investigadores de seguridad acepten una compensacion por debajo del mercado por razones de mision es insostenible. Algunos financiadores filantropicos han comenzado a apoyar salarios a precio de mercado en organizaciones de seguridad.

**Acceso a computacion.** La investigacion en seguridad requiere cada vez mas acceso a computacion a escala de frontera. Los clusters de computacion financiados por el gobierno dedicados a investigacion en seguridad, como el Recurso Nacional de Investigacion en IA de EE.UU. (NAIRR) propuesto en 2023, pueden proporcionar esto sin requerir que cada organizacion de seguridad financie su propia infraestructura.

**Incentivos profesionales.** Las instituciones academicas deberian reconocer la investigacion en seguridad para decisiones de contratacion y titularidad. Las agencias de financiacion gubernamental deberian crear trayectorias profesionales dedicadas a la investigacion en seguridad. Las empresas deberian crear caminos para los investigadores de seguridad que no terminen en un callejon sin salida por debajo del nivel de liderazgo.

**Prestigio investigador.** La comunidad de investigacion en seguridad ha progresado en el establecimiento de lugares de publicacion (la serie de talleres SafeAI, tracks dedicados en ICML y NeurIPS) y reconocimiento de investigacion. El progreso continuado en hacer que la investigacion en seguridad sea intelectualmente prestigiosa atrae talento independientemente de la compensacion.

## Una propuesta concreta: una arquitectura de financiacion diversificada

Ningun modelo de financiacion unico es suficiente. Cada uno tiene fortalezas y debilidades. El objetivo deberia ser una arquitectura diversificada que combine multiples modelos para crear redundancia, independencia y escala.

Proponemos cinco componentes:

1. **Gasto corporativo obligatorio en seguridad.** Exigir a las empresas con ingresos de IA superiores a 1.000 millones de dolares que asignen al menos el 5% del gasto en I+D de IA a investigacion en seguridad, auditada de forma independiente. Rendimiento estimado: de 2.000 a 5.000 millones de dolares anuales a la escala actual de la industria.

2. **Programas gubernamentales de investigacion en seguridad.** Ampliar NIST, UK AISI y organismos equivalentes a un presupuesto combinado de 1.000 millones de dolares anuales entre naciones aliadas. Financiar tanto investigacion interna como subvenciones externas mediante competencia abierta.

3. **Impuesto sobre computacion para investigacion independiente.** Aplicar un impuesto a las grandes ejecuciones de entrenamiento (por encima de 10^23 FLOP) para financiar una Fundacion de Investigacion en Seguridad de la IA independiente gobernada por un consejo cientifico sin mayoria de la industria ni del gobierno. Rendimiento estimado: de 200 a 500 millones de dolares anuales.

4. **Filantropia ampliada con coordinacion.** Alentar a los financiadores filantropicos a coordinarse a traves de un marco estrategico compartido para reducir la duplicacion y asegurar la cobertura de areas descuidadas. Objetivo: mantener la financiacion filantropica actual (mas de 500 millones de dolares) mejorando la asignacion.

5. **Fondo internacional de investigacion en seguridad.** Establecer un fondo multilateral para la investigacion en seguridad de la IA, comenzando con los paises de los Five Eyes y expandiendose. Objetivo inicial: 500 millones de dolares anuales.

Esta arquitectura llevaria la financiacion total de seguridad de la IA a entre 4.000 y 7.000 millones de dolares anuales: todavia modesta en relacion con la inversion en capacidades, pero un aumento significativo respecto a los niveles actuales y suficiente para apoyar a una comunidad de investigacion en seguridad grande, diversa e independiente.

## Dimension reflexiva

Este analisis esta a su vez moldeado por las dinamicas de financiacion que describe. La Iniciativa Reflexive AI opera fuera del desarrollo comercial de IA, lo que otorga independencia pero limita el acceso a sistemas de frontera y conocimiento interno. Nuestra evaluacion del gasto corporativo en seguridad depende de divulgaciones publicas que son incompletas por diseno.

Tambien senalamos una tension en nuestra propuesta. Las reglas de gasto obligatorio y los impuestos sobre computacion aumentan el coste del desarrollo de IA. Como examinamos en [El equilibrio entre velocidad y seguridad](/research/077-speed-safety-tradeoff/), imponer costes al desarrollo lo ralentiza. Si las aplicaciones de IA proporcionan beneficios genuinos, ralentizar el desarrollo tiene costes. Nuestro juicio es que los beneficios de una investigacion en seguridad adecuada superan estos costes, pero personas razonables discrepan.

Hay una preocupacion reflexiva adicional: los investigadores financiados por mecanismos especificos de seguridad tienen incentivos para enfatizar la importancia de la investigacion en seguridad. Los financiadores de la investigacion en seguridad tienen incentivos para creer que su financiacion es necesaria. Esto no invalida los argumentos, pero exige transparencia sobre estas dinamicas.

Finalmente, cualquier arquitectura de financiacion crea poder. Quien controla las decisiones de financiacion da forma a la agenda de investigacion. La historia de la financiacion cientifica muestra que el control centralizado produce pensamiento grupal y descuido de ideas heterodoxas. Nuestra arquitectura propuesta distribuye deliberadamente la autoridad de financiacion entre multiples organismos independientes para mitigar este riesgo.

## Conclusion

La financiacion de la investigacion en seguridad de la IA es inadecuada en escala, excesivamente concentrada en sus fuentes y estructuralmente desalineada con los problemas que necesita abordar. La mezcla actual de filantropia, subvenciones gubernamentales y presupuestos corporativos construyo el campo pero no lo sostendra a la escala que el desarrollo de IA de frontera exige.

Cerrar la brecha requiere nuevos mecanismos: gasto obligatorio en seguridad, impuestos sobre computacion, modelos de premios, financiacion vinculada a seguros y cooperacion internacional. Ningun mecanismo unico es suficiente. Una arquitectura de financiacion diversificada, que distribuya la autoridad y los recursos entre organismos independientes, proporciona la escala, independencia y resiliencia que la investigacion en seguridad necesita.

El impuesto de alineamiento es real. La investigacion en seguridad compite con la investigacion en capacidades por talento, computacion y atencion. Superar esta competencia requiere no solo mas dinero sino sistemas de financiacion mejor disenados que hagan que la investigacion en seguridad sea intelectualmente gratificante, financieramente competitiva e institucionalmente respaldada.

Una financiacion de seguridad adecuada cuesta miles de millones. Una investigacion en seguridad inadecuada, en caso de que los sistemas avanzados de IA causen danos graves, cuesta mas de lo que nadie quiere cuantificar. El argumento de inversion es directo.

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
