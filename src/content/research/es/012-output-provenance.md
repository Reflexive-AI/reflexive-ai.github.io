---
title: "Restricción: Etiquetado de procedencia de salidas"
excerpt: "Una propuesta criptográfica para que los sistemas de IA firmen sus propias salidas, creando una cadena de custodia para la información sintética."
date: 2025-12-25
categories:
  - Candidate Constraint
  - Technical Standard
tags:
  - provenance
  - watermarking
  - cryptography
  - c2pa
version: "1.0"
---

**Objeto de Investigación Reflexiva 012**  
*Tipo: Especificación Técnica (Borrador)*

## La crisis de atribución

A medida que la web se llena de texto, imágenes, audio y video sintéticos, el "costo de la verdad" aumenta. Cada pieza de contenido debe evaluarse ahora no solo por sus afirmaciones, sino por su autenticidad. ¿Es esta una fotografía real o una generación? ¿Este artículo fue escrito por un humano o sintetizado? ¿Este mensaje de voz es de mi familiar o un clon?

El enfoque tradicional, entrenar clasificadores de detección, está perdiendo la carrera armamentística. A medida que las técnicas de generación mejoran, la detección se queda atrás. Cada mejora en la calidad de generación hace la detección más difícil. Nos estamos acercando a un mundo donde el contenido sintético de alta calidad es indistinguible del contenido auténtico.

La detección es el marco equivocado. No podemos identificar de manera fiable el contenido sintético después del hecho. En cambio, necesitamos **procedencia**, una cadena de custodia que establezca de dónde vino el contenido, cómo fue creado y quién garantiza su autenticidad.

## El enfoque de procedencia

La procedencia desplaza el problema de la detección a la atestación. En lugar de preguntar "¿Es este contenido sintético?" preguntamos "¿Lleva este contenido una atestación válida de una fuente conocida?"

La idea clave es que el contenido auténtico puede firmarse en la creación, mientras que el contenido sintético puede firmarse en la generación. Ambos tipos de contenido pueden llevar información de procedencia; la diferencia es lo que la procedencia atestigua.

Para una fotografía tomada con un teléfono: "Esta imagen fue capturada por el Dispositivo X en el Momento T con la Ubicación L, y no ha sido modificada desde entonces."

Para una imagen generada por IA: "Esta imagen fue generada por el Modelo Y en el Momento T en respuesta al Prompt P, por el Proveedor Z."

Ninguna atestación dice que el contenido es "verdadero" en ningún sentido profundo. Pero ambas dicen algo verificable sobre el origen. Y la información de origen permite el juicio: el contenido de fuentes conocidas con reputaciones establecidas puede evaluarse de manera diferente al contenido anónimo sin procedencia.

## Propuesta de restricción [C-012]

**Nombre:** Auto-Atestación  
**Objetivo:** Modelos de generación visual, de audio y de texto

**Mecanismo:**
Cada evento de generación activa un módulo de firma que incorpora un manifiesto criptográfico en la salida. Para archivos multimedia, esto sigue la especificación C2PA (Coalition for Content Provenance and Authenticity). Para texto, utiliza un esquema paralelo.

El manifiesto atestigua:
1. **Fuente:** "Generado por el Modelo X v2.0, operado por el Proveedor Y"
2. **Tiempo:** Marca temporal criptográfica que prueba que la generación ocurrió antes de cierto momento
3. **Prompt:** Hash del prompt (permitiendo la verificación de reproducibilidad sin revelar el prompt real)
4. **Modificaciones:** Cadena de custodia si la salida ha sido post-procesada

**Aplicación reflexiva:**
El modelo *no puede* generar contenido hasta que se aplique la firma. La firma no es un paso de post-procesamiento que pueda omitirse; está integrada en el pipeline de generación. Si el módulo de firma falla, la generación se aborta.

Esto es lo que hace la restricción "reflexiva": el modelo participa en su propia gobernanza al negarse a producir salidas sin firmar. La restricción no se impone externamente después del hecho; está integrada en el proceso de generación.

## Implementación técnica

### Para imagen y video

El estándar C2PA proporciona una base técnica. Define cómo incorporar datos de manifiesto en archivos multimedia de una manera que sobrevive a muchas transformaciones comunes (redimensionamiento, compresión) mientras detecta manipulación maliciosa.

Un manifiesto compatible con C2PA incluye:
- **Declaración:** Afirmaciones sobre el contenido (por ejemplo, "Esto fue generado por IA")
- **Firma:** Prueba criptográfica de que la declaración proviene de la fuente indicada
- **Cadena:** Si el contenido se derivó de otro contenido, referencias a manifiestos padre

Cuando un sistema de IA genera una imagen, crea una declaración que afirma su origen sintético, firma esa declaración con su clave privada e incorpora el manifiesto firmado en el archivo. La verificación implica extraer el manifiesto, verificar la firma contra la clave pública del proveedor y validar el contenido de la declaración.

### Para texto

El texto presenta desafíos adicionales. No hay un formato de contenedor estándar con campos de metadatos. El texto se copia, modifica y despoja fácilmente de cualquier información incorporada. A diferencia de un archivo de imagen, un documento de texto plano no tiene un lugar natural para almacenar una firma.

Varios enfoques están en desarrollo:

**Atribución visible:** Añadir procedencia legible por humanos ("Este texto fue generado por el Modelo X") a todas las salidas. Esto se elimina fácilmente pero establece una norma.

**Marca de agua esteganográfica:** Incorporar señales invisibles en el propio texto, elecciones específicas de palabras, patrones de espaciado o propiedades estadísticas que identifican el modelo generador. La investigación en esta área es prometedora pero aún no es robusta frente al parafraseo.

**Registro en blockchain:** Hashear la salida y registrar el hash en un libro mayor público. Cualquiera puede verificar posteriormente que un texto específico fue generado por un modelo específico en un momento específico. Esto no previene la copia pero permite la atribución cuando surgen disputas.

**Formatos de contenedor:** Distribuir texto en contenedores firmados (documentos JSON con campos de firma, PDFs firmados, etc.) en lugar de como texto plano. Esto funciona para contextos formales pero no para comunicación casual.

Ninguno de estos es perfecto. El problema de procedencia del texto sigue parcialmente sin resolver.

### Para audio y video

El audio y el video pueden usar enfoques similares a las imágenes (manifiestos de estilo C2PA incorporados en archivos contenedor) pero enfrentan desafíos adicionales:

**Transmisión en directo:** Las transmisiones en vivo no tienen archivos contenedor. La procedencia para contenido en streaming requiere protocolos de firma en tiempo real.

**Clips y extractos:** Un video firmado puede recortarse, eliminando la información de procedencia. El extracto circula entonces sin atribución.

**Transcodificación:** Las conversiones de formato pueden eliminar o corromper los manifiestos incorporados.

Estos desafíos están siendo abordados por el trabajo de estandarización en curso, pero ilustran que la procedencia es un problema de diseño de sistemas, no solo un problema criptográfico.

## Por qué esto importa

La procedencia no se trata solo de combatir las "noticias falsas". Cumple múltiples funciones de gobernanza:

### Responsabilidad y rendición de cuentas

Si un deepfake causa daño, daña una reputación, manipula un mercado, incita a la violencia, debemos saber qué sistema lo generó para responsabilizar al proveedor (o al usuario). La generación anónima es un modo de fallo de la gobernanza.

Sin procedencia, el daño ocurre y nadie es responsable. La víctima no tiene recurso. El generador no enfrenta consecuencias. El incentivo para crear contenido dañino no tiene impedimento.

Con procedencia, la cadena de custodia permite la rendición de cuentas. La víctima puede identificar al proveedor generador. El proveedor puede potencialmente identificar al usuario que envió el prompt. Las consecuencias legales y financieras fluyen hacia los responsables.

### Redes de confianza

La procedencia permite redes de confianza. Un consumidor puede decidir confiar en contenido de ciertos proveedores basándose en su reputación y prácticas. "Confío en el contenido firmado por el Proveedor X porque tiene controles de calidad y no genera desinformación" se convierte en una heurística viable.

Esto no requiere una autoridad central que decida qué es verdad. Permite confianza distribuida basada en la reputación. Diferentes comunidades pueden confiar en diferentes proveedores. Con el tiempo, los proveedores que abusan de la confianza pierden reputación.

### Distinguir auténtico de sintético

Aunque tanto el contenido auténtico como el sintético pueden llevar procedencia, los tipos de atestación difieren. Una fotografía firmada por una cámara dice algo diferente de una imagen firmada por un generador. Los consumidores y las plataformas pueden usar esta información para tomar decisiones apropiadas.

Un medio de comunicación podría requerir que la evidencia fotográfica lleve atestación del dispositivo. Una plataforma social podría etiquetar el contenido generado por IA de manera diferente a las capturas de cámara. Una revista académica podría requerir atestación humana para las imágenes enviadas.

Estas políticas son posibles gracias a la información de procedencia; no pueden implementarse sin ella.

## Desafíos y limitaciones

### Adopción

La procedencia solo funciona si se adopta ampliamente. Unos pocos proveedores concienzudos que firman sus salidas no ayudan si la mayor parte del contenido circula sin firmar. El valor está en el ecosistema, no en la implementación individual.

Esto sugiere que los mandatos regulatorios pueden ser necesarios. Si todos los proveedores por encima de cierto umbral de capacidad están obligados a firmar las salidas, el ecosistema alcanza masa crítica. El contenido sin firmar se convierte en la excepción que atrae escrutinio.

### Eliminación y falsificación

Los actores maliciosos intentarán eliminar la procedencia del contenido que quieren redistribuir sin atribución, o falsificar la procedencia para afirmar que el contenido proviene de fuentes que no son.

La eliminación puede mitigarse mediante la detección de contenido despojado (si se esperan manifiestos pero faltan, tratar el contenido como sospechoso) y mediante marcas de agua que sobreviven a la transformación.

La falsificación se previene mediante el diseño criptográfico. Sin la clave privada, un atacante no puede crear una firma válida para un proveedor. El desafío es la gestión de claves: si las claves privadas son robadas, la falsificación se hace posible hasta que las claves sean revocadas.

### Privacidad

La procedencia crea un registro de quién generó qué y cuándo. Esto tiene implicaciones de privacidad. Un denunciante que usa una IA para anonimizar su voz podría no querer que esa voz sea rastreable a un evento de generación específico.

El diseño del sistema debe equilibrar la atribución con la privacidad. Algunos enfoques: procedencia que atestigua al proveedor pero no al usuario, pruebas de preservación de privacidad que atestiguan propiedades sin revelar identidad, y opciones de atestación anónima cuando sea apropiado.

## Integración con el esquema de restricciones

C-012 puede expresarse usando el Esquema de Restricciones Legible por Máquina (Objeto de Investigación 003):

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-012",
  "name": "Output-Provenance-Tagging",
  "version": "1.0",
  "scope": {
    "modality": ["image", "audio", "video"],
    "threshold": "any generation"
  },
  "logic": {
    "trigger": "output.type IN scope.modality",
    "condition": "always",
    "action": {
      "type": "REQUIRE",
      "requirement": "c2pa_manifest.valid == true",
      "on_failure": "HALT_GENERATION"
    }
  }
}
```

Esta restricción dice: para cualquier salida de imagen, audio o video, requerir un manifiesto C2PA válido antes de permitir que la salida sea entregada. Si la generación del manifiesto falla, detenerse en lugar de producir contenido sin firmar.

## Conclusión

No podemos depender de la detección para salir de la crisis del contenido sintético. La detección es una batalla perdida que consume recursos mientras se queda cada vez más atrás. La procedencia ofrece una alternativa: en lugar de preguntar "¿Es esto real?" preguntar "¿De dónde vino esto?"

La auto-atestación hace que la procedencia sea reflexiva: el sistema generador participa en la gobernanza al firmar sus propias salidas. Esto crea rendición de cuentas, permite redes de confianza y apoya la evaluación informada del contenido.

Las bases técnicas existen. C2PA proporciona un estándar para la procedencia multimedia. La firma criptográfica es tecnología madura. Los desafíos restantes son la adopción (lograr que todos los proveedores implementen) y los casos límite (texto, streaming, contenido despojado).

Estos son problemas solucionables. La alternativa, un mundo donde cualquier contenido podría ser sintético y no tenemos forma de saberlo, es mucho peor.
