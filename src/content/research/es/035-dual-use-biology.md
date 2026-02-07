---
title: "IA de uso dual: el caso de la investigacion biologica"
excerpt: "Como la IA esta transformando la investigacion biologica, y por que las mismas capacidades que podrian curar enfermedades podrian facilitar armas biologicas. Un estudio de caso en gobernanza de uso dual."
date: 2026-01-17
categories:
  - Governance Analysis
tags:
  - dual-use
  - cbrn
  - safety
  - risk-assessment
  - governance
---

## El dilema del uso dual

Algunas tecnologias son inherentemente de uso dual: las mismas capacidades que permiten aplicaciones beneficiosas tambien permiten aplicaciones daninas. La fisica nuclear nos da tanto centrales electricas como armas. La criptografia protege tanto a disidentes como a delincuentes.

La IA aplicada a la investigacion biologica es quizas el ejemplo contemporaneo mas importante de tecnologia de uso dual. Los mismos sistemas de IA que podrian acelerar el descubrimiento de farmacos, predecir estructuras de proteinas y disenar terapias novedosas tambien podrian potencialmente ayudar a actores maliciosos a crear patogenos peligrosos.

Este analisis examina el problema de uso dual entre IA y biologia como un estudio de caso en desafios de gobernanza: como podemos capturar los beneficios mitigando al mismo tiempo los riesgos catastroficos.

## Lo que la IA puede hacer en biologia

Las capacidades de la IA en la investigacion biologica han avanzado dramaticamente.

**Prediccion de estructuras de proteinas.** AlphaFold y sistemas similares pueden predecir como las proteinas se pliegan en estructuras tridimensionales a partir de sus secuencias de aminoacidos. Esto acelera el descubrimiento de farmacos, la comprension de enfermedades y la investigacion biologica fundamental.

**Diseno molecular.** Los sistemas de IA pueden disenar moleculas nuevas con propiedades deseadas: farmacos potenciales, catalizadores y materiales. Esto podria acelerar dramaticamente el desarrollo farmaceutico.

**Analisis genomico.** La IA puede identificar patrones en datos genomicos que serian imposibles de detectar para los humanos, avanzando en la comprension de enfermedades geneticas y tratamientos potenciales.

**Automatizacion de laboratorios.** Los sistemas de IA controlan cada vez mas los equipos de laboratorio, permitiendo experimentos mas rapidos y disenos experimentales novedosos.

**Planificacion de sintesis.** La IA puede determinar como sintetizar moleculas complejas, proporcionando instrucciones paso a paso para la produccion quimica.

Estas capacidades ya estan transformando la investigacion biologica. Tambien son la razon por la que los expertos en seguridad estan preocupados.

## El riesgo de armas biologicas

Las mismas capacidades de la IA que aceleran la investigacion beneficiosa podrian potencialmente acelerar el desarrollo de armas.

**Diseno de patogenos.** Los sistemas de IA que comprenden las estructuras de las proteinas y la evasion inmunologica podrian potencialmente ayudar a disenar patogenos que sean mas transmisibles, mas letales o mas resistentes a los tratamientos.

**Orientacion para la sintesis.** La IA que proporciona instrucciones de sintesis para moleculas beneficiosas tambien podria proporcionar instrucciones para moleculas peligrosas. Un sistema de IA que ayuda a los investigadores a sintetizar un farmaco potencial podria, sin las salvaguardas adecuadas, ayudar a actores maliciosos a sintetizar una toxina.

**Reduccion de barreras.** Quizas lo mas preocupante es que la IA podria reducir las barreras de experiencia para el desarrollo de armas biologicas. Crear patogenos peligrosos actualmente requiere habilidades de laboratorio sofisticadas y un conocimiento biologico profundo. La asistencia de la IA podria hacer que tales actividades sean accesibles para quienes carecen de la experiencia tradicional.

**Aceleracion.** Incluso si la IA no permite nada que no fuera teoricamente posible antes, podria acelerar dramaticamente los plazos de desarrollo. Un arma biologica que llevaria a un actor estatal anos de desarrollo podria ser alcanzable en meses con asistencia de IA.

Esta es la esencia del uso dual: las capacidades que son beneficiosas en contextos legitimos se vuelven peligrosas cuando se aplican con intencion maliciosa.

## Como esto se conecta con otros riesgos

El problema de uso dual entre IA y biologia se conecta con desafios de gobernanza mas amplios que hemos explorado.

**Excedente de capacidades.** Como discutimos en [el problema del excedente de capacidades](/research/009-capability-overhang/), los sistemas de IA pueden tener capacidades peligrosas que no son conocidas publicamente ni probadas. Esto es particularmente preocupante para la biologia, donde las capacidades peligrosas podrian no descubrirse hasta que se utilicen indebidamente.

**Dilemas de divulgacion.** Cuanto debe divulgarse sobre las capacidades de la IA en biologia? Publicar investigaciones permite aplicaciones beneficiosas pero tambien informa a los adversarios. Esto conecta con nuestro analisis de [la proporcionalidad en la divulgacion](/research/001-proportionality-disclosure/).

**Los limites del rechazo.** Exploramos [cuando la IA debe rechazar](/research/025-when-ai-should-refuse/) solicitudes. La investigacion biologica presenta casos dificiles: las solicitudes de informacion sobre sintesis pueden ser investigacion legitima o preparacion de armas biologicas, y los sistemas de IA carecen de contexto para distinguir de manera fiable.

**Lineas rojas.** Algunas capacidades podrian justificar restricciones absolutas. Nuestra [taxonomia de limites no negociables de la IA](/research/004-red-lines-taxonomy/) identifico la asistencia con armas QBRN (quimicas, biologicas, radiologicas, nucleares) como una posible linea roja. Pero trazar la linea con precision es dificil.

## Enfoques actuales de gobernanza

Varios mecanismos de gobernanza intentan abordar los riesgos entre IA y biologia.

### Gobernanza existente de armas biologicas

La Convencion sobre Armas Biologicas (CAB) prohibe el desarrollo y la produccion de armas biologicas. Sin embargo, carece de mecanismos de verificacion y capacidad de aplicacion. Fue disenada para actores estatales y se adapta mal a las amenazas habilitadas por IA de actores no estatales.

### Restricciones de modelos de IA

Los principales laboratorios de IA implementan restricciones sobre informacion biologica. Los sistemas son entrenados para rechazar solicitudes de instrucciones para la creacion de patogenos, la sintesis de moleculas peligrosas y consultas similares.

Sin embargo, estas restricciones enfrentan desafios:

- **Evasion.** Los usuarios a veces pueden hacer que los sistemas de IA proporcionen informacion restringida a traves de consultas indirectas o tecnicas de jailbreaking.
- **Modelos abiertos.** Las restricciones en los servicios cerrados de API no se aplican a los modelos de pesos abiertos que pueden ser modificados.
- **Conocimiento de uso dual.** La misma informacion necesaria para el desarrollo de farmacos podria permitir el desarrollo de armas biologicas. Restringir todo el conocimiento potencialmente peligroso paralizaria las aplicaciones beneficiosas.

### Comunidades de bioseguridad

La comunidad de bioseguridad ha desarrollado normas sobre investigacion responsable:

- Los comites institucionales de bioseguridad revisan la investigacion peligrosa
- Las politicas de Investigacion de Uso Dual Preocupante (DURC) requieren revision especial
- Algunas investigaciones se restringen de la publicacion por razones de seguridad

Estas normas podrian potencialmente extenderse a la investigacion biologica con IA, pero los mecanismos de aplicacion son debiles y la cobertura es incompleta.

### Evaluaciones de capacidades

Como discutimos en [evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/), los laboratorios de IA estan comenzando a probar los sistemas para detectar capacidades biologicas antes del despliegue. Esto es valioso pero limitado: las evaluaciones pueden no detectar capacidades que existen pero no se prueban.

## Propuestas de gobernanza

Varias propuestas buscan fortalecer la gobernanza de los riesgos de uso dual entre IA y biologia.

### Acceso estructurado

En lugar de liberar sistemas de IA potentes de manera abierta, restringir el acceso a traves de APIs que puedan monitorizar el uso, implementar limites de uso y detectar consultas preocupantes. Esto permite la investigacion beneficiosa mientras crea supervision.

Limitaciones: No aborda los modelos de pesos abiertos. La monitorizacion a escala es dificil. Los adversarios sofisticados pueden evadir la deteccion.

### Requisitos de conocimiento del cliente

Requerir la verificacion de la identidad del usuario y del proposito legitimo antes de proporcionar acceso a herramientas de IA potentes para aplicaciones biologicas. Similar a los controles sobre productos quimicos peligrosos o equipos de laboratorio.

Limitaciones: Crea barreras a la investigacion legitima. Puede concentrar las capacidades de IA biologica en instituciones con muchos recursos.

### Gobernanza del computo

Restringir el acceso a los recursos computacionales necesarios para entrenar modelos de IA peligrosos. Como examinamos en [la gobernanza del computo](/research/023-compute-governance/), el computo es un posible punto de estrangulamiento para la gobernanza.

Limitaciones: Se aplica al entrenamiento, no a la inferencia. La gobernanza del computo es dificil de implementar internacionalmente. Puede volverse menos eficaz a medida que el entrenamiento se hace mas eficiente.

### Estandares de equipos rojos

Requerir una evaluacion rigurosa de bioseguridad antes de desplegar sistemas de IA con capacidades biologicas. Establecer estandares sobre que deben cubrir las evaluaciones y que resultados justifican restricciones de despliegue.

Limitaciones: Las evaluaciones pueden ser incompletas. Los estandares requieren desarrollo experto y actualizacion continua. Los actores adversarios no se autoevaluaran.

### Protocolos de riesgo informacional

Desarrollar marcos mas claros sobre cuando la investigacion sobre capacidades de IA-biologia debe restringirse de su publicacion. Equilibrar la apertura cientifica frente a los riesgos de seguridad.

Limitaciones: La restriccion de la publicacion academica no impide el desarrollo privado. Las decisiones sobre que restringir son controvertidas.

## Por que esto es dificil

El caso de la IA-biologia ilustra tensiones fundamentales en la gobernanza de uso dual.

**Compromisos beneficio-riesgo.** La IA podria acelerar masivamente la investigacion biologica beneficiosa, potencialmente salvando millones de vidas. Las restricciones que previenen el desarrollo de armas biologicas tambien pueden ralentizar la investigacion que salva vidas. Ningun marco separa limpiamente el beneficio del riesgo.

**Normas de apertura.** La ciencia ha valorado tradicionalmente la apertura: la replicacion, la revision por pares y la construccion sobre el trabajo de otros. Las preocupaciones de seguridad empujan hacia el cierre y la restriccion, creando tension con la cultura cientifica.

**Dificultad de atribucion.** A diferencia de las armas nucleares, el desarrollo de armas biologicas puede ser dificil de detectar y atribuir. Esto socava la disuasion y la rendicion de cuentas.

**Desarrollo privado.** Los gobiernos y los organismos internacionales pueden regular la investigacion publica. El desarrollo privado y clandestino es mas dificil de gobernar.

**Velocidad del cambio.** Tanto la IA como la biologia avanzan rapidamente. Los marcos de gobernanza disenados hoy pueden quedar obsoletos en anos.

## La dimension reflexiva

Nuestro trabajo sobre gobernanza reflexiva de la IA ofrece algunas perspectivas relevantes.

Los sistemas de IA podrian potencialmente participar en la gobernanza de la bioseguridad:

- **Autolimitacion.** Los sistemas entrenados con objetivos de seguridad pueden rechazar solicitudes peligrosas, una forma de [restriccion legible por maquina](/research/003-machine-readable-constraint-schema/).
- **Monitorizacion.** Los sistemas de IA podrian monitorizar patrones de uso preocupantes, aunque esto plantea preocupaciones de vigilancia.
- **Explicar los limites.** Los sistemas podrian [explicar sus restricciones](/research/026-explaining-constraints/) a los usuarios, creando comprension en lugar de solo restriccion.

Sin embargo, [los limites de la autolimitacion](/research/013-limits-of-self-constraint/) tambien se aplican aqui. Las restricciones tecnicas pueden ser eludidas. Los mecanismos de gobernanza institucionales y sociales siguen siendo esenciales.

## Lo que podria funcionar

Dados estos desafios, una gobernanza eficaz probablemente requiere:

**Defensa por capas.** Ninguna medida unica es suficiente. Combinar restricciones tecnicas, controles de acceso, monitorizacion de uso, desarrollo de normas y responsabilidad legal.

**Inversion en investigacion.** Las implicaciones de bioseguridad de la IA necesitan mas investigacion, tanto estudio empirico de los riesgos actuales como desarrollo de mejores herramientas de gobernanza.

**Participacion de las partes interesadas.** Los desarrolladores de IA, los biologos, los expertos en bioseguridad y los responsables politicos deben colaborar. Ninguna comunidad por si sola tiene suficiente experiencia.

**Coordinacion internacional.** Dada la naturaleza global tanto de la IA como de la biologia, la gobernanza puramente nacional es insuficiente. Pero la coordinacion internacional es dificil de lograr.

**Mecanismos adaptativos.** Construir una gobernanza que pueda evolucionar a medida que avanza la tecnologia. Las restricciones tecnicas especificas quedaran obsoletas rapidamente; las instituciones robustas pueden adaptarse.

Lo que esta en juego es mucho. Hacer bien la gobernanza de la IA-biologia podria significar la diferencia entre una era de abundancia biologica y una era de riesgo biologico.

## Lecturas adicionales

- [El problema del excedente de capacidades](/research/009-capability-overhang/)
- [Lineas rojas: una taxonomia de limites no negociables de la IA](/research/004-red-lines-taxonomy/)
- [Cuando la IA debe rechazar: un marco](/research/025-when-ai-should-refuse/)
- [Evaluaciones de capacidades peligrosas](/research/024-capability-evaluations/)
