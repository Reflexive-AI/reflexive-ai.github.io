---
title: "Pesos de model segurs: fisics i digitals"
excerpt: "Mesures de seguretat per protegir els pesos de models d'IA contra robatori, manipulacio i acces no autoritzat en els dominis fisic i digital."
date: 2026-02-03
toc: true
categories:
  - Research
tags:
  - Security
  - Model Weights
  - Infrastructure
  - Governance
keywords:
  - AI security
  - model protection
  - weight security
  - compute infrastructure
---

Els pesos d'un model representen la culminacio d'una inversio significativa en comput, dades i recerca. Per als sistemes d'IA de frontera, aquests pesos codifiquen capacitats que poden plantejar riscos de seguretat si son accedits per actors maliciosos. Aquest article examina el panorama de seguretat per als pesos de models, cobrint la infraestructura fisica, els controls d'acces digital i els marcs de governanca per a la proteccio de pesos.

## Per que importa la seguretat dels pesos

Els pesos d'un model entrenat contenen les seves capacitats. A diferencia del programari tradicional, on el codi font es pot llegir i comprendre, els pesos de xarxes neuronals son opacs: funcionen, pero extreure el "com" requereix executar-los. Aixo crea un doble repte de seguretat.

Primer, els pesos son propietat intel·lectual valuosa. Entrenar un model de frontera costa milions de dolars. Els competidors o adversaris que obtenen els pesos es salten aquesta inversio completament.

Segon, els pesos codifiquen capacitats perilloses. Un model entrenat amb mitigacions de seguretat pot ser ajustat per eliminar-les si un atacant obte els pesos base. Aixo fa que la seguretat dels pesos sigui una questio de seguretat, no nomes comercial.

El perimetre de seguretat per als pesos ha d'abarcar instal·lacions fisiques, infraestructura de xarxa, sistemes de control d'acces i practiques de personal. Una fallada en qualsevol domini pot comprometre els altres.

## Seguretat fisica

L'entrenament d'IA a gran escala te lloc en centres de dades amb maquinari especialitzat. L'acces fisic a aquestes instal·lacions representa una via directa cap a l'exfiltracio de pesos.

### Controls d'instal·lacions

- **Zones d'acces escalonat**: Separar recepcio, oficina general i arees de comput amb requisits d'autenticacio creixents
- **Verificacio biometrica**: Empremta digital, retina o reconeixement facial per a l'entrada a zones sensibles
- **Entrades d'esclusa**: Portes enclavades que prevenen l'acces no autoritzat per seguiment i forcen l'autenticacio individual
- **Personal de seguretat**: Guardes capacitats per a monitoratge 24/7, especialment al perimetre i zones d'alta seguretat

### Proteccio de maquinari

- **Racks de servidors amb pany**: Claus fisiques o panys electronics en armaris que contenen GPUs i emmagatzematge
- **Segells d'evidencia de manipulacio**: Indicadors que revelen si el maquinari ha estat accedit fisicament
- **Seguiment d'actius**: RFID o sistemes similars per monitorar la ubicacio del maquinari i detectar moviment no autoritzat
- **Eliminacio segura**: Esborrat criptografic i destruccio fisica de mitjans d'emmagatzematge abans del desmantellament

### Mitigacio d'amenaces internes

La majoria de les bretxes de seguretat fisica involucren persones internes. Les contramestres inclouen:

- **Verificacio d'antecedents**: Avaluacio d'empleats amb acces a la infraestructura d'entrenament
- **Regles de dues persones**: Requerir multiples individus per a operacions sensibles
- **Registre d'acces**: Enregistrament de totes les entrades a zones segures amb video i dades de credencials
- **Rotacio i privilegi minim**: Limitar l'acces a llarg termini i atorgar nomes els permisos necessaris

## Seguretat digital

Els pesos existeixen com a fitxers que es poden copiar, transmetre i emmagatzemar. La seguretat digital ha d'abordar l'emmagatzematge, el transit i el control d'acces.

### Seguretat d'emmagatzematge

- **Xifrat en repos**: Pesos emmagatzemats xifrats usant algoritmes simetrics forts (AES-256 o equivalent)
- **Gestio de claus**: Moduls de seguretat de maquinari (HSMs) per emmagatzemar claus de xifrat, amb politiques de rotacio de claus
- **Controls de redundancia**: Copies de seguretat subjectes als mateixos controls de seguretat que l'emmagatzematge primari
- **Verificacio d'integritat**: Hashes criptografics per detectar manipulacio o corrupcio

### Seguretat de xarxa

- **Xifrat en transit**: TLS 1.3 o equivalent per a qualsevol transferencia de pesos per xarxa
- **Segmentacio de xarxa**: Clusters d'entrenament aillats de les xarxes corporatives generals
- **Opcions d'aillament total**: Per als pesos de major risc, desconnexio fisica de xarxes externes
- **Monitoratge de sortida**: Deteccio de grans transferencies de dades que podrien indicar exfiltracio

### Control d'acces

- **Acces basat en rols**: Permisos vinculats a la funcio del lloc, no a la identitat individual
- **Autenticacio multifactor**: Requerir multiples metodes de verificacio per a sol·licituds d'acces
- **Acces just a temps**: Permisos temporals atorgats per a tasques especifiques, revocats automaticament
- **Registre d'auditoria**: Registres complets de qui va accedir a que, quan i per que

## Seguretat operativa

Els controls tecnics fallen sense practiques operatives de suport.

### Practiques de personal

- **Capacitacio en seguretat**: Educacio regular sobre amenaces, politiques i report d'incidents
- **Politiques d'us acceptable**: Regles clares sobre el maneig d'actius sensibles
- **Separacio de funcions**: Cap individu ha de controlar tots els aspectes de la seguretat de pesos
- **Procediments de sortida**: Revocacio immediata d'acces i recollida de dispositius quan els empleats marxen

### Resposta davant incidents

- **Capacitats de deteccio**: Monitoratge de patrons d'acces anomals o moviment de dades
- **Manuals de resposta**: Procediments documentats per a bretxes sospitades
- **Preparacio forense**: Registres i estats de sistema preservats per donar suport a investigacions
- **Protocols de comunicacio**: Processos de divulgacio preplanificats per a reguladors i socis

### Cadena de subministrament

La seguretat dels pesos s'esten a proveïdors i socis:

- **Auditories de proveïdors de nuvol**: Verificacio que els proveïdors d'allotjament compleixen els requisits de seguretat
- **Avaluacio de contractistes**: Verificacio d'antecedents i limits d'acces per a tercers
- **Cadena de subministrament de maquinari**: Seguiment de procedencia per a GPUs i altres components sensibles

## Marcs de governanca

Les mesures de seguretat requereixen estructures de governanca per assegurar una aplicacio consistent.

### Governanca interna

- **Comites de seguretat**: Supervisio multifuncional de les politiques de proteccio de pesos
- **Avaluacions de risc**: Avaluacio regular d'amenaces i efectivitat de controls
- **Actualitzacions de politiques**: Procediments per revisar els requisits de seguretat a mesura que les amenaces evolucionen
- **Auditories de compliment**: Verificacio interna que es segueixen les politiques

### Governanca externa

- **Compliment regulatori**: Complir els requisits de marcs com la Llei d'IA de la UE
- **Estandards de la industria**: Adopcio de certificacions de seguretat (ISO 27001, SOC 2)
- **Intercanvi d'informacio**: Participacio en l'intercanvi d'intel·ligencia d'amenaces amb parells
- **Coordinacio governamental**: Col·laboracio amb agencies de seguretat nacional en la proteccio de models de frontera

## Contramestres tecniques

Mes enlla del control d'acces, les mesures tecniques poden limitar el valor dels pesos robats.

### Marques d'aigua

Incrustar identificadors en els pesos que sobrevisquin a l'ajust fi i la transferencia. Si els pesos exfiltrats apareixen en circulacio, les marques d'aigua permeten l'atribucio. Vegeu [Marques d'aigua i procedencia del contingut](/research/052-watermarking-and-content-provenance) per a mes detalls.

### Divisio de pesos

Distribuir pesos en multiples ubicacions de manera que cap compromis individual reveli el model complet. Requereix computacio segura multipartida per a la inferencia.

### Enclaus segurs

Executar la inferencia dins d'entorns d'execucio confiables (TEEs) com Intel SGX o AMD SEV. Els pesos romanen xifrats fins i tot durant l'us, protegits del sistema operatiu.

### Deteccio de compressio de models

Tecniques per detectar si un model mes petit va ser destil·lat d'un de mes gran sense autoritzacio. Util per identificar robatori de pesos per mitjans indirectes.

## Reptes oberts

La seguretat dels pesos segueix sent un camp en evolucio amb problemes sense resoldre:

- **Usabilitat vs. seguretat**: Els controls estrictes alenteixen la velocitat de recerca. Equilibrar les necessitats d'acces amb la proteccio es un repte continu.
- **Entrenament distribuit**: L'entrenament federat o en multiples llocs complica els perimetres de seguretat.
- **Models de pes obert**: Com aplicar principis de seguretat quan els pesos es publiquen intencionadament.
- **Criptografia post-quantica**: El xifrat actual pot ser vulnerable a futurs atacs quantics.
- **Dificultat d'atribucio**: Demostrar el robatori es dificil quan els pesos es poden ajustar fins a quedar irreconeixibles.

## Articles relacionats

- [Marques d'aigua i procedencia del contingut](/research/052-watermarking-and-content-provenance) - Enfocaments tecnics per a l'autenticacio de contingut
- [Compute Governance](/research/023-compute-governance) - Control de l'acces a recursos d'entrenament
- [La interpretabilitat com a eina de governanca](/research/051-interpretability-as-a-governance-tool) - Comprensio dels aspectes interns dels models per a la supervisio

---

*Aquest article cobreix principis de seguretat per a pesos de models pero no constitueix un programa de seguretat complet. Les organitzacions han de consultar professionals de seguretat i adaptar els controls als seus models d'amenaça i contextos operatius especifics.*
