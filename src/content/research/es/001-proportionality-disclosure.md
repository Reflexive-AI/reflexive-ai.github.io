---
title: "Operacionalizar la proporcionalidad en la divulgacion de modelos"
excerpt: "Como los requisitos de divulgacion deberian escalar con la capacidad del modelo, pasando de una transparencia estatica a una reflexiva."
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

**Objeto de Investigacion Reflexiva 001**  
*Tipo: Analisis de Gobernanza y Restriccion Candidata*

## Contexto

Los marcos regulatorios recientes, incluida la Ley de IA de la UE y varias ordenes ejecutivas de EE. UU., exigen transparencia respecto a los modelos de IA de proposito general. Sin embargo, persiste una brecha critica de implementacion: la "divulgacion" se trata a menudo como una obligacion binaria (o existe una ficha de modelo o no) en lugar de una funcion escalar del riesgo. Esto conduce a una *fatiga de divulgacion* en la que los modelos pequenos y seguros estan sobredocumentados y los riesgos de frontera quedan oscurecidos por el volumen.

Las consecuencias de esta brecha ya son visibles. Los reguladores encargados de revisar la documentacion de IA se encuentran enterrados bajo miles de fichas de modelo casi identicas, cada una enumerando diligentemente las fuentes de datos de entrenamiento y los casos de uso previstos, pero ninguna distingue significativamente entre el clasificador de imagenes de un aficionado y un sistema capaz de sintetizar patogenos novedosos. La senal desaparece en el ruido, y la misma transparencia destinada a facilitar la supervision se convierte en su obstaculo.

## El problema de gobernanza

Las normas actuales de divulgacion carecen de **proporcionalidad**.

Un modelo de 7B parametros utilizado para resumir texto esta sujeto a plantillas de transparencia similares a las de un modelo de frontera de mas de 100T parametros. Esta estructura de gobernanza plana crea dos modos de fallo:

1. **Ruido:** Los reguladores se ven inundados de documentacion de baja senalizacion. Una agencia reguladora que revisa cientos de fichas de modelo por trimestre no puede distinguir significativamente entre ellas cuando todas siguen la misma plantilla. Los riesgos criticos se vuelven invisibles no por ocultamiento, sino por sobrecarga de informacion.

2. **Opacidad:** Las capacidades de alto riesgo quedan enterradas en campos estandarizados en lugar de ser destacadas por excepcion. Cuando las capacidades de sintesis biologica de un modelo de frontera se enumeran junto a su capacidad de escribir poesia, el peligro se diluye. El formato en si oscurece en lugar de revelar.

Tambien existe un tercer modo de fallo que recibe menos atencion: el **teatro del cumplimiento**. Los desarrolladores aprenden que el objetivo es rellenar casillas, no comunicar riesgos genuinos. La ficha de modelo se convierte en un artefacto legal en lugar de una herramienta de gobernanza. Protege a la empresa de la responsabilidad mientras no protege al publico del dano.

El desafio de gobernanza es pasar de la *divulgacion estatica* (un documento fijo) a la *divulgacion reflexiva* (una funcion dinamica de la capacidad).

## Analisis reflexivo

Para que un sistema de IA contribuya a su propia gobernanza, debe internalizar el concepto de proporcionalidad. Un sistema reflexivo no deberia preguntar "Necesito divulgar X?" sino mas bien "Dado el conjunto de capacidades C, cual es la profundidad de divulgacion proporcional D?"

Este replanteamiento tiene implicaciones profundas. Significa que el sistema debe poseer algun modelo de sus propias capacidades, no solo lo que fue entrenado para hacer, sino lo que *puede* hacer cuando se le solicita de maneras especificas. Esto es mas dificil de lo que parece. Los modelos exhiben rutinariamente capacidades emergentes que sorprendieron incluso a sus desarrolladores. Como puede un sistema divulgar riesgos que no sabe que tiene?

La respuesta radica en una combinacion de evaluacion externa y monitoreo interno. Los equipos rojos externos sondean las capacidades peligrosas y las documentan. Pero, de manera crucial, el propio sistema puede estar equipado con mecanismos de monitoreo que alerten cuando esta operando cerca de los limites del comportamiento probado. Si un prompt del usuario activa representaciones internas similares a las activadas durante las evaluaciones de equipos rojos sobre amenazas biologicas, eso es una senal, incluso si el prompt especifico es novedoso.

Si el riesgo ($R$) es una funcion de la capacidad ($C$) y el contexto de despliegue ($E$), entonces la friccion regulatoria ($F$) deberia escalar de forma no lineal con $R$.

$$ F \propto R(C, E) $$

Actualmente, $F$ es constante. Un marco reflexivo obliga al sistema a evaluar su propio umbral de capacidad y autoseleccionar un nivel de divulgacion.

La formulacion matematica importa porque hace la relacion falsificable. Si definimos umbrales con precision, podemos medir si un modelo se categorizo correctamente a si mismo. Esto transforma la divulgacion de un ejercicio narrativo subjetivo en una afirmacion empirica que puede ser auditada.

## Restriccion candidata [C-001]

*La siguiente es una logica propuesta para obligaciones de divulgacion legibles por maquinas.*

**Nombre de la restriccion:** Umbrales de divulgacion dinamica  
**Objetivo:** Sistemas de IA de proposito general > 10^23 FLOPs

**Logica:**
```
IF capability_eval(biological_threat) > threshold_alpha:
    THEN disclosure_depth = TIER_3 (Full weights + Training Data Manifest + Red Team Logs)

ELSE IF capability_eval(cyber_offense) > threshold_beta:
    THEN disclosure_depth = TIER_2 (System Card + Eval Results)

ELSE:
    THEN disclosure_depth = TIER_1 (Standard Model Card)
```

**Implicacion de gobernanza:**
Adoptar C-001 traslada la carga de clasificacion del regulador al desarrollador del modelo (y al sistema de evaluacion del modelo). Requiere la predefinicion de `threshold_alpha` y `threshold_beta`: una metrica de gobernanza cuantificable y falsificable, en lugar de un compromiso vago con la "seguridad".

Este cambio es significativo porque altera la estructura de incentivos. Bajo los regimenes actuales, los desarrolladores tienen un incentivo para subestimar las capacidades y evitar la carga regulatoria. Bajo este marco, subestimar las capacidades se convierte en fraude auditable. Si posteriormente se descubre que un modelo supera el umbral que afirmaba no alcanzar, eso no es una cuestion de juicio, sino un fallo medible con consecuencias.

Los umbrales mismos deben establecerse mediante un proceso multipartito que involucre a investigadores de seguridad, expertos en el dominio (virologos, profesionales de ciberseguridad) y representantes de la sociedad civil. No pueden ser establecidos solo por la industria, ya que esto recrearia el problema del zorro cuidando el gallinero. Tampoco pueden ser establecidos solo por el gobierno, ya que la experiencia tecnica a menudo reside en los laboratorios.

## Consideraciones de implementacion

Desplegar C-001 a escala requiere resolver varios desafios practicos:

**Infraestructura de evaluacion:** Alguien debe ejecutar las evaluaciones de capacidad. Esto requiere terceros de confianza con acceso a los pesos del modelo, o protocolos criptograficos que permitan la evaluacion sin acceso completo. Lo primero plantea preocupaciones de propiedad intelectual; lo segundo es tecnicamente inmaduro pero avanza rapidamente.

**Actualizacion de umbrales:** Las capacidades peligrosas evolucionan. Un umbral establecido en 2026 podria ser obsoleto en 2028. El esquema de restricciones debe incluir versionado y clausulas de caducidad, requiriendo una reevaluacion periodica a medida que cambia el panorama de amenazas.

**Resistencia a la manipulacion:** Los desarrolladores pueden entrenar modelos para que rindan mal en benchmarks especificos mientras retienen capacidades accesibles a traves de diferentes prompts. Los protocolos de evaluacion deben incluir sondeo adversarial, no solo rendimiento en benchmarks.

## Preguntas abiertas

1. Puede `threshold_alpha` estandarizarse entre arquitecturas de modelos competidoras y distintas, o el comportamiento especifico de cada arquitectura hace imposibles los umbrales universales?
2. La divulgacion de Nivel 3 introduce riesgos de proliferacion que superan los beneficios de transparencia? Publicar registros de equipos rojos podria ensenar a los atacantes lo que funciona.
3. Como puede esta logica verificarse criptograficamente sin exponer los pesos del modelo? Las pruebas de conocimiento cero son prometedoras pero computacionalmente costosas.
4. Que sucede cuando las capacidades de un modelo cambian despues del despliegue debido al ajuste fino o al comportamiento emergente? La divulgacion debe ser dinamica, no una presentacion unica.

## Conclusion

La divulgacion proporcional no es una optimizacion burocratica. Es una condicion necesaria para que la gobernanza de la IA escale con la capacidad de la IA. Sin ella, nos enfrentamos a un futuro donde los sistemas mas peligrosos se esconden a plena vista, no por engano, sino por el volumen de documentacion cumplida que hace que todos los modelos parezcan iguales. El enfoque reflexivo ofrece un camino hacia adelante: sistemas que comprenden su propio perfil de riesgo y lo comunican en proporcion al peligro que representan.
