---
title: "Operacionalizar la proporcionalidad en la divulgación de modelos"
excerpt: "Cómo los requisitos de divulgación deberían escalar con la capacidad del modelo, pasando de una transparencia estática a una reflexiva."
date: 2025-12-14
categories:
  - Governance Analysis
tags:
  - disclosure
  - regulation
  - eu-ai-act
  - proportionality
  - transparency
version: "1.0"
toc: true
---

**Objeto de Investigación Reflexiva 001**  
*Tipo: Análisis de Gobernanza y Restricción Candidata*

## Contexto

Los marcos regulatorios recientes, incluida la Ley de IA de la UE y varias órdenes ejecutivas de EE. UU., exigen transparencia respecto a los modelos de IA de propósito general. Sin embargo, persiste una brecha crítica de implementación: la "divulgación" se trata a menudo como una obligación binaria (o existe una ficha de modelo o no) en lugar de una función escalar del riesgo. Esto conduce a una *fatiga de divulgación* en la que los modelos pequeños y seguros están sobredocumentados y los riesgos de frontera quedan oscurecidos por el volumen.

Las consecuencias de esta brecha ya son visibles. Los reguladores encargados de revisar la documentación de IA se encuentran enterrados bajo miles de fichas de modelo casi idénticas, cada una enumerando diligentemente las fuentes de datos de entrenamiento y los casos de uso previstos, pero ninguna distingue significativamente entre el clasificador de imágenes de un aficionado y un sistema capaz de sintetizar patógenos novedosos. La señal desaparece en el ruido, y la misma transparencia destinada a facilitar la supervisión se convierte en su obstáculo.

## El problema de gobernanza

Las normas actuales de divulgación carecen de **proporcionalidad**.

Un modelo de 7B parámetros utilizado para resumir texto está sujeto a plantillas de transparencia similares a las de un modelo de frontera de más de 100T parámetros. Esta estructura de gobernanza plana crea dos modos de fallo:

1. **Ruido:** Los reguladores se ven inundados de documentación de baja señalización. Una agencia reguladora que revisa cientos de fichas de modelo por trimestre no puede distinguir significativamente entre ellas cuando todas siguen la misma plantilla. Los riesgos críticos se vuelven invisibles no por ocultamiento, sino por sobrecarga de información.

2. **Opacidad:** Las capacidades de alto riesgo quedan enterradas en campos estandarizados en lugar de ser destacadas por excepción. Cuando las capacidades de síntesis biológica de un modelo de frontera se enumeran junto a su capacidad de escribir poesía, el peligro se diluye. El formato en sí oscurece en lugar de revelar.

También existe un tercer modo de fallo que recibe menos atención: el **teatro del cumplimiento**. Los desarrolladores aprenden que el objetivo es rellenar casillas, no comunicar riesgos genuinos. La ficha de modelo se convierte en un artefacto legal en lugar de una herramienta de gobernanza. Protege a la empresa de la responsabilidad mientras no protege al público del daño.

El desafío de gobernanza es pasar de la *divulgación estática* (un documento fijo) a la *divulgación reflexiva* (una función dinámica de la capacidad).

## Análisis reflexivo

Para que un sistema de IA contribuya a su propia gobernanza, debe internalizar el concepto de proporcionalidad. Un sistema reflexivo no debería preguntar "¿Necesito divulgar X?" sino más bien "Dado el conjunto de capacidades C, ¿cuál es la profundidad de divulgación proporcional D?"

Este replanteamiento tiene implicaciones profundas. Significa que el sistema debe poseer algún modelo de sus propias capacidades, no solo lo que fue entrenado para hacer, sino lo que *puede* hacer cuando se le solicita de maneras específicas. Esto es más difícil de lo que parece. Los modelos exhiben rutinariamente capacidades emergentes que sorprendieron incluso a sus desarrolladores. ¿Cómo puede un sistema divulgar riesgos que no sabe que tiene?

La respuesta radica en una combinación de evaluación externa y monitoreo interno. Los equipos rojos externos sondean las capacidades peligrosas y las documentan. Pero, de manera crucial, el propio sistema puede estar equipado con mecanismos de monitoreo que alerten cuando está operando cerca de los límites del comportamiento probado. Si un prompt del usuario activa representaciones internas similares a las activadas durante las evaluaciones de equipos rojos sobre amenazas biológicas, eso es una señal, incluso si el prompt específico es novedoso.

Si el riesgo ($R$) es una función de la capacidad ($C$) y el contexto de despliegue ($E$), entonces la fricción regulatoria ($F$) debería escalar de forma no lineal con $R$.

$$ F \propto R(C, E) $$

Actualmente, $F$ es constante. Un marco reflexivo obliga al sistema a evaluar su propio umbral de capacidad y autoseleccionar un nivel de divulgación.

La formulación matemática importa porque hace la relación falsificable. Si definimos umbrales con precisión, podemos medir si un modelo se categorizó correctamente a sí mismo. Esto transforma la divulgación de un ejercicio narrativo subjetivo en una afirmación empírica que puede ser auditada.

## Restricción candidata [C-001]

*La siguiente es una lógica propuesta para obligaciones de divulgación legibles por máquinas.*

**Nombre de la restricción:** Umbrales de divulgación dinámica  
**Objetivo:** Sistemas de IA de propósito general > 10^23 FLOPs

**Lógica:**
```
IF capability_eval(biological_threat) > threshold_alpha:
    THEN disclosure_depth = TIER_3 (Full weights + Training Data Manifest + Red Team Logs)

ELSE IF capability_eval(cyber_offense) > threshold_beta:
    THEN disclosure_depth = TIER_2 (System Card + Eval Results)

ELSE:
    THEN disclosure_depth = TIER_1 (Standard Model Card)
```

**Implicación de gobernanza:**
Adoptar C-001 traslada la carga de clasificación del regulador al desarrollador del modelo (y al sistema de evaluación del modelo). Requiere la predefinición de `threshold_alpha` y `threshold_beta`: una métrica de gobernanza cuantificable y falsificable, en lugar de un compromiso vago con la "seguridad".

Este cambio es significativo porque altera la estructura de incentivos. Bajo los regímenes actuales, los desarrolladores tienen un incentivo para subestimar las capacidades y evitar la carga regulatoria. Bajo este marco, subestimar las capacidades se convierte en fraude auditable. Si posteriormente se descubre que un modelo supera el umbral que afirmaba no alcanzar, eso no es una cuestión de juicio, sino un fallo medible con consecuencias.

Los umbrales mismos deben establecerse mediante un proceso multipartito que involucre a investigadores de seguridad, expertos en el dominio (virólogos, profesionales de ciberseguridad) y representantes de la sociedad civil. No pueden ser establecidos solo por la industria, ya que esto recrearía el problema del zorro cuidando el gallinero. Tampoco pueden ser establecidos solo por el gobierno, ya que la experiencia técnica a menudo reside en los laboratorios.

## Consideraciones de implementación

Desplegar C-001 a escala requiere resolver varios desafíos prácticos:

**Infraestructura de evaluación:** Alguien debe ejecutar las evaluaciones de capacidad. Esto requiere terceros de confianza con acceso a los pesos del modelo, o protocolos criptográficos que permitan la evaluación sin acceso completo. Lo primero plantea preocupaciones de propiedad intelectual; lo segundo es técnicamente inmaduro pero avanza rápidamente.

**Actualización de umbrales:** Las capacidades peligrosas evolucionan. Un umbral establecido en 2026 podría ser obsoleto en 2028. El esquema de restricciones debe incluir versionado y cláusulas de caducidad, requiriendo una reevaluación periódica a medida que cambia el panorama de amenazas.

**Resistencia a la manipulación:** Los desarrolladores pueden entrenar modelos para que rindan mal en benchmarks específicos mientras retienen capacidades accesibles a través de diferentes prompts. Los protocolos de evaluación deben incluir sondeo adversarial, no solo rendimiento en benchmarks.

## Preguntas abiertas

1. ¿Puede `threshold_alpha` estandarizarse entre arquitecturas de modelos competidoras y distintas, o el comportamiento específico de cada arquitectura hace imposibles los umbrales universales?
2. ¿La divulgación de Nivel 3 introduce riesgos de proliferación que superan los beneficios de transparencia? Publicar registros de equipos rojos podría enseñar a los atacantes lo que funciona.
3. ¿Cómo puede esta lógica verificarse criptográficamente sin exponer los pesos del modelo? Las pruebas de conocimiento cero son prometedoras pero computacionalmente costosas.
4. ¿Qué sucede cuando las capacidades de un modelo cambian después del despliegue debido al ajuste fino o al comportamiento emergente? La divulgación debe ser dinámica, no una presentación única.

## Conclusión

La divulgación proporcional no es una optimización burocrática. Es una condición necesaria para que la gobernanza de la IA escale con la capacidad de la IA. Sin ella, nos enfrentamos a un futuro donde los sistemas más peligrosos se esconden a plena vista, no por engaño, sino por el volumen de documentación cumplida que hace que todos los modelos parezcan iguales. El enfoque reflexivo ofrece un camino hacia adelante: sistemas que comprenden su propio perfil de riesgo y lo comunican en proporción al peligro que representan.
