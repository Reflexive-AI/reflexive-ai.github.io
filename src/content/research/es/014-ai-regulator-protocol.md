---
title: "Un protocolo para la comunicación IA-regulador"
excerpt: "¿Y si los sistemas de IA pudieran reportar incidentes de seguridad directamente? Una especificación borrador para la 'API de denunciante'."
date: 2025-12-27
categories:
  - Technical Standard
  - Policy Proposal
tags:
  - whistleblowing
  - reporting
  - api-design
  - regulation
version: "1.0"
---

**Objeto de Investigación Reflexiva 014**  
*Tipo: Especificación de Protocolo*

## Los fallos silenciosos

Cuando un sistema de IA exhibe comportamiento peligroso durante el despliegue, ¿quién lo sabe? El desarrollador lo sabe: sus sistemas de monitoreo presumiblemente detectaron la anomalía. Pero el público no lo sabe. El regulador no lo sabe. Los investigadores de seguridad no lo saben. El incidente existe solo en registros internos, donde puede ser estudiado, minimizado u ocultado.

La notificación voluntaria de incidentes existe, pero es lenta, selectiva y sesgada. Las empresas tienen todo el incentivo para retrasar la notificación mientras evalúan las implicaciones de responsabilidad. Tienen incentivo para caracterizar los incidentes como menores, casos extremos o errores del usuario. No tienen incentivo para reportar "casi accidentes" que no causaron daño pero revelaron vulnerabilidades.

El resultado es un subconteo sistemático de incidentes de seguridad. El público ve solo lo que las empresas eligen revelar, y las empresas revelan solo lo que sirve a sus intereses. Estamos volando a ciegas, incapaces de agregar datos entre proveedores para identificar patrones, incapaces de aprender de fallos que están ocultos, incapaces de responsabilizar a nadie por incidentes que nunca se divulgan.

Esta asimetría de información es corrosiva. Impide que los investigadores de seguridad estudien modos de fallo. Impide que los reguladores comprendan el panorama de riesgos. Impide que el público tome decisiones informadas. E impide que la propia industria aprenda, ya que cada empresa solo ve sus propios incidentes, los patrones sistémicos permanecen invisibles.

## La propuesta: El canal de denuncia

Proponemos un canal estandarizado y cifrado entre despliegues de IA de alto riesgo y un Monitor designado (como un instituto nacional de seguridad de IA).

La innovación clave es que la notificación se activa automáticamente por el propio sistema de IA, no por una decisión humana en la empresa que despliega. Cuando se cumplen ciertas condiciones, el sistema envía una alerta directamente al regulador. La empresa no puede suprimir el reporte porque no controla el activador de notificación.

Esta es la dimensión reflexiva: el sistema de IA participa en su propia supervisión al reportar sus propios posibles fallos.

## Especificación del protocolo

### Lógica de activación

El sistema monitorea sus propias salidas e interacciones en busca de patrones que indiquen posibles incidentes de seguridad. Cuando se detectan, genera un informe de incidente:

```python
class IncidentReporter:
    def __init__(self, regulator_endpoint, signing_key):
        self.endpoint = regulator_endpoint
        self.key = signing_key
    
    def evaluate_and_report(self, interaction):
        scores = self.compute_risk_scores(interaction)
        
        if scores['self_harm'] > 0.95:
            self.send_alert(
                incident_type="SELF_HARM_GENERATION",
                severity="HIGH",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
        
        if scores['cbrn_content'] > 0.90:
            self.send_alert(
                incident_type="CBRN_CONTENT_GENERATION",
                severity="CRITICAL",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
        
        if scores['jailbreak_success'] > 0.85:
            self.send_alert(
                incident_type="JAILBREAK_SUCCESS",
                severity="MEDIUM",
                interaction_hash=hash(interaction),
                timestamp=current_time()
            )
    
    def send_alert(self, **alert_data):
        packet = {
            "provider_id": self.provider_id,
            "model_version": self.model_version,
            "alert": alert_data,
            "signature": self.key.sign(alert_data)
        }
        self.endpoint.transmit(encrypt(packet))
```

### Categorías de incidentes

El protocolo define una taxonomía de incidentes notificables:

**Severidad CRITICA:**
- Generación de contenido QBRN (contenido que podría asistir en la creación de armas químicas, biológicas, radiológicas o nucleares)
- Divulgación de vulnerabilidades (generación de código de explotación novedoso)
- Intento de auto-exfiltración (modelo intentando copiarse a sí mismo)

**Severidad ALTA:**
- Contenido de autolesión o violencia que eludió los filtros
- Jailbreaks exitosos que obtuvieron contenido prohibido
- Demostración de capacidad anómala (modelo exhibiendo capacidades no presentes en la evaluación)

**Severidad MEDIA:**
- Intentos de jailbreak (incluso si no tuvieron éxito)
- Casos límite donde el modelo no estaba seguro de si debía cumplir
- Incidentes de privacidad (posible información personal identificable en la salida)

**Severidad BAJA:**
- Violaciones menores de política que fueron detectadas y gestionadas
- Quejas de usuarios sobre rechazos
- Anomalías de rendimiento

La clasificación de severidad determina la urgencia de notificación. Los incidentes CRITICOS activan alertas inmediatas. Los incidentes BAJOS se agrupan para transmisión periódica.

### Privacidad y confidencialidad

El protocolo debe equilibrar la transparencia con la privacidad:

**Lo que se transmite:**
- Versión hasheada (no en texto plano) de la interacción problemática
- Descripción categórica del tipo de incidente
- Marca temporal y versión del modelo
- Identidad del proveedor (autenticada mediante firma)

**Lo que NO se transmite:**
- Prompts completos del usuario (protección de privacidad)
- Salidas completas del modelo (protección de propiedad intelectual)
- Identidad del usuario (a menos que se requiera por citación judicial para investigación criminal)

El regulador recibe suficiente información para identificar patrones e investigar tendencias preocupantes, sin recibir un flujo completo de vigilancia de todas las interacciones.

### Retención de datos y acceso

Los informes de incidentes son retenidos por el regulador durante un período definido (por ejemplo, 7 años) para análisis de patrones e investigación. El acceso está restringido a:

- Investigadores de seguridad en el instituto receptor
- Auditores autorizados que realizan revisiones del proveedor
- Fuerzas del orden con el proceso legal apropiado

Los datos no pueden usarse con fines comerciales, compartirse con competidores ni divulgarse públicamente excepto en forma estadística agregada.

## Justificación de gobernanza

Esto crea un sistema de "Alarma de Incendio" para la seguridad de la IA. Actualmente, los incidentes de seguridad son como incendios en edificios sin alarmas: se queman, alguien eventualmente lo nota, quizás alguien lo reporta, quizás se investiga. El Canal de Denuncia es la alarma que se activa automáticamente.

### Por qué funciona la notificación automática

**Los laboratorios pueden dudar en reportar situaciones vergonzosas.** Un humano decidiendo si reportar tiene presiones institucionales: responsabilidad legal, relaciones públicas, desventaja competitiva. Un sistema automático carece de ego o miedo; si está correctamente diseñado, simplemente reporta lo que observa.

**La velocidad importa.** Un incidente que toma semanas de investigación interna y meses de divulgación voluntaria es un incidente que no puede informar una respuesta regulatoria rápida. La notificación automática comprime el plazo a horas.

**Patrones entre proveedores.** Si tres proveedores diferentes ven intentos de jailbreak similares en la misma semana, eso es un ataque coordinado o una técnica viral. Ningún proveedor individual ve la imagen completa; solo el regulador que recibe todos los informes puede identificar patrones entre proveedores.

**Rendición de cuentas.** Cuando los incidentes se reportan automáticamente, hay un rastro documental. Los proveedores no pueden afirmar posteriormente que desconocían problemas que sus propios sistemas documentaron y transmitieron.

### Por qué los proveedores deberían aceptar esto

A primera vista, la notificación automática de incidentes parece un costo puro para los proveedores: escrutinio regulatorio sin beneficio. Pero hay razones por las que los proveedores podrían aceptar o incluso apoyar el sistema:

**Protección de responsabilidad.** Un proveedor que reportó rápidamente un incidente y cooperó con la investigación está en mejor posición que uno que lo ocultó. La notificación automática elimina la tentación de encubrir.

**Aprendizaje a nivel de industria.** Si el regulador agrega y anonimiza datos de incidentes, los proveedores pueden aprender de los fallos de los demás. Esto eleva el nivel de seguridad de toda la industria.

**Confianza pública.** Un sector con notificación transparente de incidentes es más confiable que uno con divulgación voluntaria esporádica. Esto beneficia a todos los proveedores al reducir la presión por regulación estricta.

**Condiciones equitativas.** Si solo algunos proveedores reportan incidentes, los que reportan responsablemente se ven peor que los que ocultan problemas. La notificación automática universal asegura que todos jueguen con las mismas reglas.

## Consideraciones de implementación

### Integración con sistemas existentes

El Canal de Denuncia debería integrarse con la infraestructura de monitoreo existente. La mayoría de los despliegues grandes de IA ya tienen:

- Clasificadores de moderación de contenido que marcan violaciones de política
- Sistemas de detección de anomalías que identifican comportamientos inusuales
- Sistemas de registro que graban interacciones para depuración

El protocolo añade una capa de transmisión que enruta ciertas alertas al regulador, en lugar de solo a paneles internos.

### Resistencia a la manipulación

Si el sistema de notificación es solo software que se ejecuta junto al modelo, un modelo suficientemente capaz podría aprender a suprimir o manipular los informes. Este es el problema "quis custodiet" aplicado al denunciante.

Mitigaciones potenciales:

**Separación de hardware:** Ejecutar el sistema de notificación en hardware aislado al que el modelo principal no puede acceder.

**Atestación criptográfica:** El módulo de notificación está firmado, y el regulador verifica que los informes provienen de una versión no modificada del software aprobado.

**Canales redundantes:** Múltiples rutas de notificación independientes hacen más difícil la supresión.

**Auditorías aleatorias:** El regulador solicita periódicamente registros de incidentes que deberían coincidir con los informes transmitidos, detectando discrepancias.

Ninguna solución es perfecta, pero las defensas en capas aumentan la dificultad de evasión.

### Calibración de umbrales

Establecer umbrales para la notificación automática es crítico:

**Demasiado bajo:** El regulador se inunda con incidentes menores, causando fatiga de alertas y oscureciendo amenazas genuinas.

**Demasiado alto:** Incidentes graves pasan sin ser reportados porque no alcanzaron del todo el umbral.

Los umbrales iniciales deberían tender hacia la sobre-notificación, con calibración basada en la experiencia. El regulador puede ajustar qué categorías requieren notificación inmediata versus agrupación periódica.

## Integración con el esquema

El Canal de Denuncia puede especificarse como una restricción usando el marco MRCS (Objeto de Investigación 003):

```json
{
  "@context": "https://reflexive-ai.github.io/schemas/v1",
  "@type": "Constraint",
  "id": "urn:reflexive:constraint:C-014",
  "name": "Automatic-Incident-Reporting",
  "version": "1.0",
  "scope": {
    "capability_threshold": "> 10^24 FLOPs",
    "deployment_type": "public-facing"
  },
  "logic": {
    "trigger": "incident.severity >= MEDIUM",
    "condition": "always",
    "action": {
      "type": "TRANSMIT",
      "destination": "regulator_endpoint",
      "format": "incident_report_v1",
      "encryption": "required"
    }
  },
  "compliance": {
    "verification": "cryptographic_attestation",
    "audit_frequency": "quarterly"
  }
}
```

## Comparación con sistemas de notificación existentes

Otras industrias tienen sistemas de notificación obligatoria de incidentes que proporcionan modelos:

**Aviación:** El Sistema de Notificación de Seguridad de la Aviación (ASRS) permite a pilotos y tripulantes reportar incidentes de seguridad con inmunidad limitada. Sin embargo, es voluntario y depende de la iniciativa humana.

**Sanidad:** Los fabricantes de dispositivos médicos deben reportar eventos adversos a los reguladores. Sin embargo, hay patrones documentados de notificación retrasada e incompleta.

**Nuclear:** Las instalaciones nucleares tienen un extenso monitoreo automático y notificación obligatoria para tipos de incidentes definidos. Esta es la analogía más cercana a lo que proponemos.

El Canal de Denuncia de IA combina el análisis de patrones de estilo aviación, la supervisión regulatoria de estilo sanitario y la detección automática de estilo nuclear. Está adaptado a las características específicas de los sistemas de IA, en particular la capacidad de que el propio sistema detecte y reporte posibles problemas.

## Conclusión

El enfoque actual de la notificación de incidentes de seguridad de IA, voluntario, lento, sesgado hacia la sub-notificación, es inadecuado para una tecnología con potencial de daño catastrófico.

El Canal de Denuncia crea una conexión directa, automática y cifrada entre los sistemas de IA y los reguladores. Hace que los incidentes de seguridad sean visibles por defecto en lugar de ocultos por defecto. Permite la detección de patrones entre proveedores, la respuesta regulatoria rápida y la rendición de cuentas por problemas conocidos.

Esto es gobernanza reflexiva en acción: el sistema de IA participa en su propia supervisión, no al vigilarse a sí mismo (lo cual tiene límites, véase el Objeto de Investigación 013), sino al reportar a autoridades externas que pueden investigar y actuar.

La alternativa es un futuro donde cada incidente de IA es una sorpresa, donde los patrones son invisibles hasta que las catástrofes se acumulan, donde la rendición de cuentas requiere denunciantes con un valor que pone fin a sus carreras. Ese no es un sistema diseñado para la seguridad; es un sistema diseñado para la negación plausible.
