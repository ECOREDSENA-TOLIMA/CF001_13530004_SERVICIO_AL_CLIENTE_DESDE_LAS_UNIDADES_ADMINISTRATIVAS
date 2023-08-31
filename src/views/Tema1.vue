<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dB6FOVF-wWs?si=bJ_Mu6lYqem5qHzO" title="Servicio al Cliente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          figcaption Video: Servicio al Cliente

    p(data-aos="fade-right").mt-5 Las organizaciones deben centrar sus actividades en satisfacer las necesidades de sus clientes internos y externos, así, cada área operativa debe estar orientada a cumplir las necesidades que cada uno de ellos tiene, o cumplir las expectativas que tienen con la empresa.
    p(data-aos="fade-right") El existir de las organizaciones son los clientes, por lo cual la plataforma estratégica y organizacional está centrada en cómo llegar a ese cliente que desea satisfacer una necesidad, por ello, se deben emplear prácticas productivas de calidad y unas correctas técnicas de comunicación al interior de la organización y con cada uno de los clientes. 

    .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #DEF8F3")
      .row.align-items-center
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img1.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p El servicio son las prácticas y actividades que se diseñan dentro de las organizaciones que buscan satisfacer o cumplir las expectativas de los clientes internos y externos, este servicio se da en tres etapas fundamentales:  antes, durante y después del contacto con el cliente.
          p De otra parte, los clientes se pueden clasificar en internos y externos, pero a la hora de ofrecer un servicio de calidad se debe estudiar cada una de las características de los mismos, pues se pretende que el servicio al cliente sea personalizado.

    p(data-aos="fade-right").mt-5 Los clientes poseen unos caracteres definidos que los impulsan a adquirir un producto o servicio, estos se clasifican en un amplio grupo de once (11) consumidores que se comparte a continuación. 

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4.BGIMG01
          PasosB.color-acento-botones
            .row.justify-content-center.align-items-center
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg')
              .col-4
                h4 Consumidor conservador
                p Es el consumidor fiel a una empresa, organización o marca, es difícil influir en él. 
            
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img3.svg')
              
              .col-4
                h4 Consumidor emocional
                p Los productos o servicios que adquiere le debe generar un sentimiento de felicidad, los adquieren con base en ese sentimiento.
            
            .row.justify-content-center.align-items-center
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img4.svg')
              .col-4
                h4 Consumidor impulsivo
                p No necesita el producto o servicio, pero lo adquiere; por lo general es influenciado por el entorno o como técnica para reprimir algún sentimiento.

              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img5.svg')
              
              .col-4
                h4 Consumidor indeciso
                p No adquiere el producto o servicio, al no estar seguro de adquirirlo o necesitarlo.

            .row.justify-content-center.align-items-center
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img6.svg')
              .col-4
                h4 Consumidor optimista
                p El adquirir un producto o servicio se basa en la calidad y lo que le aporta a su bienestar, sin importar el precio.

              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img7.svg')
              
              .col-4
                h4 Consumidor de descuentos
                p Los descuentos son lo que lo motivan a adquirir los productos o servicios, son amantes de la oferta o lo gratis.

            
            .row.justify-content-center.align-items-center
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img8.svg')
              .col-4
                h4 Consumidor de experiencia
                p El producto o servicio le deben ofrecer una experiencia, algo nuevo e innovador, cuanto más detalles es mejor para este consumidor.

              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img9.svg')
              
              .col-4
                h4 Consumidor e-commerce
                p Prefiere adquirir productos o servicios a través del e-commerce, por facilidad y comodidad.

            .row.justify-content-center.align-items-center
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.svg')
              .col-4
                h4  Consumidor organizacional
                p Son organizaciones públicas o privadas con necesidad de adquirir productos o servicios para su funcionamiento, consumo o proyectos.
            
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img11.svg')
              
              .col-4
                h4 Consumidor interno
                p Son las personas que están dentro de la organización y tienen la necesidad de adquirir productos o servicios.

            .row
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img12.svg')
              .col
                h4 Consumidor escéptico
                p Es el consumidor desconfiado, debe realizar investigaciones e indagar sobre el producto o servicio antes de adquirirlo, también lo podríamos llamar consumidor racional.

    p(data-aos="fade-right").mt-5 Sin embargo, a través de estudios, también se ha identificado que estas características cambian de acuerdo con las generaciones, así: 
    
    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.color-primario.p-4.p-md-5
          SlyderB(:datos="datosSlyder")(data-aos="fade-left")

    p(data-aos="fade-right").mt-5 El caracterizar cada uno de los clientes permite a las organizaciones establecer mejoras en las políticas de servicio al cliente, debido a que cada persona tiene unas características definidas, principalmente en los medios de comunicación, y esto permitirá que se ofrezca un servicio al cliente personalizado y fidelizarlo.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Ciclo

    p(data-aos="fade-right") Según las necesidades de los clientes de la organización, se deben tener en cuenta las etapas que acompañan el ciclo de servicio al cliente, empleando estrategias administrativas que soportan la orientación de servicio al cliente.

    .row.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El ciclo se define como los pasos, etapas, fases o secuencias que se siguen para llegar a un fin determinado, siguiendo un orden; en el caso del ciclo del servicio al cliente, es el diseñado por las organizaciones para tener comunicación con el cliente, desde la etapa de inicial de contacto hasta la etapa final, que permite al cliente adquirir productos o servicios y que satisfacen una necesidad.

        p(data-aos="fade-right").mt-5 En el ciclo de servicio se deben analizar las siguientes fases para satisfacer las necesidades de los clientes –desde la etapa inicial de contacto con el cliente, la interacción y el seguimiento a la venta–, mediante lo que se denomina posventa; cada uno de estos elementos relacionan unas fases o etapas que permiten cumplir con el ciclo de servicio.

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Ciclo de servicio al cliente</i>
        figure.mt-5
          img(src='@/assets/curso/temas/tema1/img50.svg')

        p(data-aos="fade-right").mt-5 En este ciclo de servicio se identifican el proceso de compra o adquisición de servicio por parte del cliente, de la siguiente manera:

        figure.mt-5
          img(src='@/assets/curso/temas/tema1/img20.svg', alt='El ciclo de servicio al cliente se divide en tres categorías. 1. Etapa de contacto: se debe identificar el momento de verdad, el contacto que existe entre el cliente y la organización, se debe tener en cuenta las características de cada cliente y cómo se llega a ellos; el marketing y las comunicaciones. 2. Etapa de venta: se deben priorizar las áreas que requieren intervención con los planes de acción, aquí se incluyen todas las áreas de la empresa al ser el servicio al cliente transversal a toda la organización. 3. Etapa posventa: en la cual el cliente manifiesta a la organización cómo fue su experiencia adquiriendo productos o servicios, qué piensa y cuál es el nivel de fidelización que se logra.')    

        .cajon.color-primario.p-4.mt-5(data-aos="fade-left")
          p Dentro del ciclo de servicio se encuentran inmersos otros ciclos, a saber: 

          ul.lista-ul
            li 
              i.lista-ul__vineta
              | <i>Marketing</i> y comunicación.
            li 
              i.lista-ul__vineta
              | Ventas.
            li 
              i.lista-ul__vineta
              | Facturación y cartera.

          p El ciclo de <i>marketing</i> y comunicaciones permite a la organización dar a conocer sus productos y servicios a los clientes mediante estrategias de marketing y comunicación, es la etapa de contacto con el cliente, se debe analizar las técnicas de comunicación e interacción con el cliente.

        .row.justify-content-center.mt-5
          .col-8 
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span <i>Ciclo de marketing y comunicación</i>
            figure
              img(src='@/assets/curso/temas/tema1/img21.svg', alt='Se muestra un ciclo circular en los siguientes pasos: 1. Estrategias de marketing y publicidad. 2. Conocimiento del producto o servicio. 3. Comunicación con el cliente. 4. Satisfacción.')    

        p(data-aos="fade-right").mt-5 En cuanto al ciclo de ventas, se da en el momento en que el cliente ha conocido los productos o servicios de la organización, y desea adquirirlos, entra en contacto con la organización, dentro de este ciclo, también se da la facturación y cartera, en la cual se establecen los pagos.

      .row.justify-content-center.mt-5.BGIMG02
        .col-8 
            .titulo-sexto.color-acento-contenido.mt-5
              h5 Figura 3.
              span <i>Ciclo de ventas</i>
            figure
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='Se muestra un ciclo circular en los siguientes pasos: 1. Contacto con el cliente. 2. Información. 3. Venta de producto o servicio. 4. Posventa.')    
        .col-10
          p(data-aos="fade-right").mt-5 Dentro de este ciclo se encuentra inmerso el proceso de comunicación, contacto e información con el cliente, aquí los medios que usa el cliente para comunicarse son de vital importancia, así como las técnicas de comunicación empleadas por la organización para interactuar con él y cómo se transmite la información de forma que se pueda crear una fidelización.
          p(data-aos="fade-right") El ciclo de servicio permite comprender los diferentes escenarios en los que el cliente entra en interacción con la organización, y se pretende cumplir con las expectativas que tiene el cliente.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Triángulo y momentos de verdad

    p(data-aos="fade-right") En cuanto al triángulo de servicio, este comprende el servicio de las organizaciones y el momento de verdad es cuando el cliente entra en contacto con la organización y hace parte del ciclo del servicio.
    p(data-aos="fade-right") A continuación, se aborda el triángulo de servicio, en el cual Albrecht (1988), consultor empresarial, describe que la prestación de un servicio de calidad al interior de las organizaciones se logra mediante el triángulo del servicio, que integra las estrategias organizacionales desde el servicio, en el cual el personal de las organizaciones se encuentra preparado para estar en contacto con los clientes, satisfacer sus necesidades y cumplir las expectativas de ellos.

    .row.justify-content-center.mt-5
      .col-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='Se muestra el triángulo del servicio que es un triángulo que contiene dentro de si 4 fases así: Primero: El cliente: es la razón de ser de la organización, se debe propender para que todas las áreas de la organización busquen satisfacer las necesidades de los clientes, se cumpla con sus expectativas y se logre su fidelización. Sobre el cliente deben girar la estrategia, el personal y el sistema, debido a que es el centro de la organización, estos clientes son internos y externos, activos y potenciales. Segundo: Estrategia de servicio: con esta se busca crear valor para las empresas mediante la calidad del servicio al cliente; una vez se identifica al cliente, se crean todas las estrategias para satisfacer sus necesidades, aquí toda la organización debe estar comprometida con la calidad del servicio al cliente. Tercero: Personal: el personal o colaboradores son los miembros de la organización que deben estar comprometidos con la estrategia de servicio, debido a que tienen el contacto directo con los clientes, e implementar los protocolos de servicio, técnicas de comunicación y técnicas de ventas adecuadas. Y cuarto: Sistema: son las herramientas y técnicas que se emplean en la prestación de servicios en la organización, están dirigidas al personal y clientes; estos sistemas se encuentran plasmados en los manuales de funciones y procedimientos de la organización.')

          .tarjeta.color-acento-contenido.p-3(x="23%" y="35%" numero="+")
            p Es la razón de ser de la organización, se debe propender para que todas las áreas de la organización busquen satisfacer las necesidades de los clientes, se cumpla con sus expectativas y se logre su fidelización. Sobre el cliente deben girar la estrategia, el personal y el sistema, debido a que es el centro de la organización, estos clientes son internos y externos, activos y potenciales.

          .tarjeta.color-acento-contenido.p-3(x="76%" y="35%" numero="+")
            p Con esta  se busca crear valor para las empresas mediante la calidad del servicio al cliente; una vez se identifica al cliente, se crean todas las estrategias para satisfacer sus necesidades, aquí toda la organización debe estar comprometida con la calidad del servicio al cliente.

          .tarjeta.color-acento-contenido.p-3(x="23%" y="73.5%" numero="+")
            p El personal o colaboradores son los miembros de la organización que deben estar comprometidos con la estrategia de servicio, debido a que tienen el contacto directo con los clientes, e implementar los protocolos de servicio, técnicas de comunicación y técnicas de ventas adecuadas.

          .tarjeta.color-acento-contenido.p-3(x="76%" y="73.5%" numero="+")
            p Son las herramientas y técnicas que se emplean en la prestación de servicios en la organización, están dirigidas al personal y clientes; estos sistemas se encuentran plasmados en los manuales de funciones y procedimientos de la organización. 

    p(data-aos="fade-right").mt-5 La integración de estos elementos permite a la organización ofrecer un servicio de calidad que satisface y cumple las expectativas de los clientes, y en el que todas las áreas y personal de la organización se encuentran comprometidas.
    p(data-aos="fade-right") Al ser el cliente el corazón de la organización, el <b>momento de verdad</b> permite al cliente entrar en contacto con la organización y esta indaga las necesidades de los clientes y las expectativas que tienen frente a la organización.
    p(data-aos="fade-right") Se han identificado cinco momentos de verdad en el servicio al cliente, así: 

    SlyderF(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
        p.text-center <b><i>Zero moment of truth</i> o momento de investigación</b>: cuando el cliente  realiza búsqueda o investigación respecto a una necesidad.


      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
        p.text-center <b><i>First moment of truth</i> o momento de elección</b>: el cliente sabe que es lo que quiere, es el momento en que decide entre los productos o servicios ofertados.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')
        p.text-center <b><i>Second moment of truth</i> o momento de compra</b>: momento en el que adquiere el producto y verifica si cumple con las expectativas.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
        p.text-center <b><i>Third moment of truth</i> o momento de reacción</b>: da la opinión sobre la experiencia de su compra.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img28.svg' alt='AvatarTop')
        p.text-center <b><i>Actual moment of truth</i> o momento poscompra</b>: momento en el que el cliente ha concluido con la compra.

    p(data-aos="fade-right").mt-5 Estos momentos de verdad son las ocasiones en las que el cliente entra en contacto con la organización, y estos pueden ser positivos o negativos; los momentos positivos se dan cuando se cumplen las expectativas de los clientes, y los negativos, cuando no se cumple las expectativas de los clientes.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Protocolo, normas, técnicas y procedimientos de servicio

    p(data-aos="fade-right").mb-5 El protocolo de servicio al cliente tiene diferentes procesos que configuran la confiabilidad y calidad de la empresa, así se pueden implementar en el contexto que brinde satisfacción a las necesidades del cliente. 
    figure
       .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7ol7AKzkYfg" title="Protocolo, normas, técnicas y procedimientos de servicio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Protocolo, normas, técnicas y procedimientos de servicio

    p(data-aos="fade-right").mt-5 Existen diferentes técnicas como la técnica Spirt, Aida, Aidda, Spin, Aicdc y FAB, entre otros, que dependen de los canales de comunicación y distribución, estos modelos son tradicionales en cada una de las organizaciones, y presentan similitud entre ellos.

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <i>Modelos técnicas de servicio y ventas</i>

        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img29.svg', alt='Se muestra una gráfica con 5 modelos que se pueden usar como técnica de ventas, los modelos son los siguientes: Modelo 1 Aida: Paso 1. Servicio de calidad-atención. Paso 2. Los beneficios que requiere el consumidor-interés. Paso 3. Generar deseo. Paso 4. Finalización, acción.  Modelo 2 Aidda: Paso 1. Servicio de calidad-atención. Paso 2. Los beneficios que requiere el consumidor-interés. Paso 3. Demostración. Paso 4. Generar deseo. Paso 5. Finalización, acción.  Modelo 3 Aicdc: Paso 1. Atención. Paso 2. Interés. Paso 3. Convicción. Paso 4. Deseo. Paso 5. Cierre.  Modelo 4 Spirt: Paso 1. Servicio de calidad. Paso 2. Los beneficios que requiere el consumidor. Paso 3. Ofrecer y convencer. Paso 4. Persuadir al cliente. Paso 5. Finalización.  Y Modelo 5 Spin: Paso 1. Situación del cliente. Paso 2. Problema del cliente.Paso 3. Implicaciones para el cliente. Paso 4. Necesidad del cliente.')

          .tarjeta.color-acento-contenido.p-3(x="20.6%" y="20.2%" numero="1")
            .h5 Aida
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Servicio de calidad-atención. 
              li 
                span.text-bold 2. 
                | Los beneficios que requiere el consumidor-interés. 
              li 
                span.text-bold 3. 
                | Generar deseo. 
              li 
                span.text-bold 4. 
                | Finalización, acción. 

          .tarjeta.color-acento-contenido.p-3(x="79.5%" y="20.2%" numero="2")
            .h5 Aidda
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Servicio de calidad-atención. 
              li 
                span.text-bold 2. 
                | Los beneficios que requiere el consumidor-interés. 
              li 
                span.text-bold 3. 
                | Demostración. 
              li 
                span.text-bold 4. 
                | Generar deseo.  
              li 
                span.text-bold 5. 
                | Finalización, acción.   

          .tarjeta.color-acento-contenido.p-3(x="81.6%" y="50.1%" numero="3")
            .h5 Aicdc
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Atención. 
              li 
                span.text-bold 2. 
                | Interés. 
              li 
                span.text-bold 3. 
                | Convicción. 
              li 
                span.text-bold 4. 
                | Deseo. 
              li 
                span.text-bold 5. 
                | Cierre. 

          .tarjeta.color-acento-contenido.p-3(x="50%" y="84.5%" numero="4")
            .h5 Spirt
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Servicio de calidad. 
              li 
                span.text-bold 2. 
                | Los beneficios que requiere el consumidor. 
              li 
                span.text-bold 3. 
                | Ofrecer y convencer. 
              li 
                span.text-bold 4. 
                | Persuadir al cliente. 
              li 
                span.text-bold 5. 
                | Finalización. 

          .tarjeta.color-acento-contenido.p-3(x="18.6%" y="50.2%" numero="5")
            .h5 Spin
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Situación del cliente.
              li 
                span.text-bold 2. 
                | Problema del cliente.
              li 
                span.text-bold 3. 
                | Implicaciones para el cliente. 
              li 
                span.text-bold 4. 
                | Necesidad del cliente. 

    p(data-aos="fade-right").mt-5 De acuerdo con estos modelos tradicionales, se establece un procedimiento de técnicas de servicio y ventas en el cual se debe captar la atención e interés del cliente, para dar a conocer el portafolio de producto de acuerdo con las necesidades manifestadas y con el que se debe persuadir para que adquiera los productos y se cierra o finaliza con la prestación de un servicio de calidad. 
    p(data-aos="fade-right") Las organizaciones dentro de sus técnicas de servicio y ventas deben realizar seguimiento a las misma después del cierre para conocer si se cumplieron con las expectativas, se generó fidelidad por parte de los clientes y crear planes de mejora, para ello identifique el proceso técnico de servicio al cliente.

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Atención") Captar la atención del cliente.

          p(numero="2" titulo="Interés") Se despierta el interés del consumidor.<br> Se da a conocer el portafolio de productos y servicios.

          p(numero="3" titulo="Generar deseo") Persuadir al cliente, para que adquiera el producto.

          p(numero="4" titulo="Cierre") Finaliza con la venta o prestación de servicio.

          p(numero="5" titulo="Posventa") Se realiza seguimiento a las ventas realizadas para conocer la satisfacción del cliente.
      .col-2
        figure
          img(src="@/assets/curso/temas/tema1/img30.png")

      .col-10
        p(data-aos="fade-right").mt-5 Las técnicas de servicio al cliente deben ir acompañadas de unas correctas técnicas de comunicación, en la cual el mensaje enviado al cliente y recibido por él sea claro mediante un lenguaje legible y adecuado, para brindar la escucha asertiva por parte del personal de servicio al cliente. 
        p(data-aos="fade-right") Es necesario que los canales de comunicación que se emplean sean acordes tanto a la organización, como al cliente; así, es de vital importancia realizar estudios por parte de la organización que indiquen cuáles son los medios de comunicación empleados por sus clientes. 

      .col-10.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img31.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Un excelente servicio al cliente debe ser una de las principales estrategias de las organizaciones, pues de este depende la fidelidad del cliente; las organizaciones pueden tener un excelente producto o portafolio de servicios, pero no influyen si el servicio al cliente no es el adecuado; lo cual no genera valor para la organización.
    
    p(data-aos="fade-right").mt-5 La construcción de una adecuada fase de procesos de servicio al cliente es vital dentro de la organización, ello permite ofrecer un excelente servicio para fidelizar al cliente activo y atraer a los clientes potenciales.
    p(data-aos="fade-right") La estrategia de proceso de servicio al cliente debe involucrar tanto al cliente externo como al interno, quien tiene una relación con la organización y puede adquirir los productos o servicios para su consumo o el de otros; dentro de los clientes internos se pueden encontrar los distribuidores, el franquiciado, los importadores, los agentes externos, entre otros.
    p(data-aos="fade-right") Los procesos de servicio al cliente dependen de cada organización, del sector en el cual desempeñan sus actividades, del tamaño, de la localización, de la cultura organizacional, del tipo de producto o servicio; sin embargo, la norma internacional ISO 9001 de 2015, sistema de gestión de la calidad, establece los requisitos enfocados al cliente.
   
    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5. 
          span <i>ISO 9001:2015 - Cliente</i>

        figure
          img(src='@/assets/curso/temas/tema1/img32.svg', alt='Se muestra la gráfica de un embudo en el que ingresan 3 elementos y sale uno, los tres elementos que ingresan en la parte ancha son: operación, enfoque alta dirección y evaluación del desempeño y por el lado angosto sale Servicio al Cliente ISO 9001:2015.')
          figcaption Nota. Tomada de ISO 9001 (2015).

    p(data-aos="fade-right").mt-5 En cuanto al enfoque, la alta dirección debe tener en cuenta que se cumpla con los requisitos del cliente y la legalidad, y determinar y considerar los riesgos y oportunidades inherentes a los productos y servicios, así como la capacidad de aumentar la satisfacción del cliente; estas estrategias deben ser lideradas por la alta dirección o gerencia de la organización.

    .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #DEF8F3")
      .row.align-items-center
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img33.svg')
        .col-md-9.mb-4.mb-md-0
          p En cuanto al proceso de operación, uno de los factores más relevantes es la comunicación, en la que  se debe tener en cuenta: 
          ul.lista-ul.p-3
            li 
              i.lista-ul__vineta
              | Información de los productos y servicios.
            li 
              i.lista-ul__vineta
              | Tratar las consultas, los contratos o los pedidos, incluyendo los cambios.
            li 
              i.lista-ul__vineta
              | Obtener la retroalimentación relativa a los productos y servicios, incluyendo las quejas de los clientes.
            li 
              i.lista-ul__vineta
              | Manipular o controlar la propiedad del cliente.
            li 
              i.lista-ul__vineta
              | Establecer los requisitos específicos para las acciones de contingencia, cuando sea pertinente.

    p(data-aos="fade-right").mt-5 Dentro del proceso de servicio al cliente, se tiene acceso a la información del cliente por lo cual, según la ISO 9001:2015, la organización debe cuidar la propiedad perteneciente a los clientes o a proveedores externos mientras esté bajo el control o uso de la organización; esto como un proceso de operación.
    p(data-aos="fade-right") En cuanto a la evaluación de desempeño, se debe propender como objetivo la satisfacción del cliente, por lo que se debe realizar el correcto seguimiento de la percepción de los clientes evidenciando el cumplimiento de sus necesidades y expectativas.

    .row.justify-content-center 
      .col-10 
        .cajon.color-acento-contenido.p-4.mt-5(data-aos="fade-left")
          p Como norma internacional, y siguiendo los lineamientos del sistema de gestión de calidad, se debe concebir este proceso como la línea base para todas las organizaciones en cuanto a su proceso de servicio al cliente; sin embargo, las características de cada una pueden demandar unos procesos ajustados de acuerdo las necesidades, sin olvidar que el fin último es la satisfacción y exclusividad del cliente. 

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-7 
          p Ajustando los procesos de servicio al cliente, se puede implementar el siguiente modelo: 

    TabsA.color-acento-botones.mt-5(data-aos="fade-left")
      .tarjeta.p-4(titulo="Contacto con el cliente")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p Se debe procurar por tener una escucha activa, pues el cliente se dirige con la expectativa de adquirir un producto o servicio que permita satisfacer una necesidad, la cual espera que la organización la satisfaga; se debe tener un trato cordial, un lenguaje claro, adecuado, respeto y empatía con el cliente; aquí se debe aplicar una comunicación asertiva.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='')


      .tarjeta.p-4(titulo="Recopilación de <br> información")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p Se debe estar atento a lo que requiere el cliente, cuál es su necesidad a satisfacer, así como las dudas e inquietudes que pueda presentar en el momento de la comunicación, por lo cual la escucha activa es fundamental en todo el proceso.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img35.png', alt='')

      .tarjeta.p-4(titulo="Resolución al conflicto <br> (necesidad)")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p Se debe dar atención a las quejas o reclamos que el mismo pueda tener, y de esta forma poder dar finalización a la demanda del cliente.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='')

      .tarjeta.p-4(titulo="Servicio posventa")(style="background-color:#DEF8F3")
        .row.justify-content-center 
          .col-xl-6
            p O el seguimiento a la venta, el que debe ser relevante en el proceso de servicio al cliente, en este punto efectivamente logramos saber si el cliente está satisfecho, si se cumplió con su expectativa y si se logró la fidelización; o por el contrario se deben tomar medidas correctivas en el proceso.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img37.png', alt='')

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Portafolio de servicios y canales

    p(data-aos="fade-right") El portafolio de servicios es un medio (documento, presentación, página web) donde se da a conocer la entidad y se detallan las características de su oferta comercial, este va dirigido a clientes activos y consumidores potenciales; además, el portafolio se encuentra diseñado de acuerdo con las políticas de cada organización.

    .row.justify-content-center.mt-5
      .col-10
        .tarjeta.p-4(data-aos="fade-left")(style="background-color: #F6EFE9")
          .row.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/img38.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p El portafolio de servicio contiene la plataforma estratégica de la organización (visión, misión, objetivos, políticas de calidad), los principales proveedores y clientes más importantes, los productos y servicios ofertados, y los canales de comunicación de la organización, estos pueden ser de servicios físicos o digitales, y se adaptan o diseñan de acuerdo con las necesidades de la organización o de los clientes.

    p(data-aos="fade-right").mt-5 Los canales de comunicación hacen referencia al medio por el cual se transmite el mensaje del emisor al receptor y son el primer punto de contacto entre la entidad y el consumidor; con los avances tecnológicos los modelos de canales de comunicación han cambiado de lo tradicional a lo moderno.
    p(data-aos="fade-right") Dentro de los canales de comunicación, se presentan la comunicación personal, interpersonal e interactivo, tal como se indica a continuación: 

    .row.justify-content-center.mt-5
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img39.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 El canal de comunicación personal 
            p.mb-0 Permite tener una mayor interacción con el consumidor, y se encuentran medios como la atención en oficina, llamada telefónica, o chat.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img40.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 El canal interpersonal
            p.mb-0 Es la comunicación que se emite a muchos receptores, pero está dirigida a un grupo de personas específico; como medio se encuentran el e-mail, circulares y diarios oficiales.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img41.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Los canales interactivos
            p.mb-0 Son los que permiten tener una mayor participación en los medios digitales, aquí el consumidor interactúa y espera una respuesta de la entidad en esta interacción; el medio que más se emplea son las redes sociales.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Libreta de calificaciones y manual de funciones

    p(data-aos="fade-right") La libreta de calificaciones es un instrumento que permite al cliente calificar el servicio brindado por las organizaciones, es un instrumento de análisis que permite a las organizaciones tomar acciones de mejora.
    p(data-aos="fade-right") Las libretas de calificaciones se estructuran en tres etapas: atributos del producto o servicio, calidad del servicio y relación de la organización respecto a los atributos del producto.
    p(data-aos="fade-right") Las libretas de calificaciones deben contener como elementos básicos de información los siguientes elementos:

    .tarjeta.BGIMG03.p-4.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Producto
            p Se pretende que el cliente dé su opinión respecto al producto o servicio ofrecido debe abarcar aspectos claves como el precio, cantidad, calidad, garantía, entre otros.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img42.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Procedimiento
            p El cliente da su opinión respecto a la metodología empleada por la organización en todo el procedimiento de adquisición del producto o servicio, la forma en que se adquiere, el canal de distribución, forma de pago y otros elementos clave que permiten que el cliente cumpla sus expectativas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img43.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Instalaciones
            p Permite al cliente dar su opinión respecto a las instalaciones, físicas o digitales, que soportan la atención o el servicio al cliente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img44.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Tecnología disponible
            p Se da la opinión respecto a la infraestructura tecnológica con la que cuenta la organización, para dar soporte al servicio al cliente, el fácil empleo de la misma, las comodidades y soluciones que ofrece a los clientes.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img45.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 Información
            p Lo que se comunica al cliente es adecuado, verídico y en tiempos determinados, el acceso permanente a la información por parte del cliente es de vital importancia.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img46.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .h5 El prestador del servicio
            p Es la interacción que tiene el personal de la organización con el cliente quien califica cómo fue su experiencia con el personal, si se transmitió el mensaje de una forma clara y asertiva, cumpliendo con las expectativas que tenía con la organización. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img47.png', alt='')

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-6
          p Dado lo anterior, se presenta un ejemplo de la libreta de calificaciones.

    .row.align-items-center.justify-content-center.mt-5
      .col-10
        .tarjeta.BGIMG04.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img48.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 Ingrese al anexo ejemplo de libreta de calificaciones. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/OKEst_Anexo_Libreta_Calificaciones.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

        p(data-aos="fade-right").mt-5 El manual de funciones y competencias laborales es un documento, elaborado por las organizaciones, que  recopila y describe los puestos de trabajo y la función se cumple en cada uno; es de gran utilidad debido a que permiten a las organizaciones documentar los diferentes puestos de trabajo existentes en la organización, establece el organigrama de la organización, involucra el sistema de gestión de calidad y define las competencias laborales.

        .cajon.color-acento-contenido.p-4.mt-5(data-aos="fade-left")
          .row.justify-content-center 
            .col-3
              img(src="@/assets/curso/temas/tema1/img49.png")
            .col-8
                p Los manuales de funciones y competencias deben contener los siguientes elementos: 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Identificación y ubicación del empleo.
                  li 
                    i.lista-ul__vineta
                    | El propósito principal del empleo y la descripción de funciones esenciales del empleo.
                  li 
                    i.lista-ul__vineta
                    | Conocimientos básicos o esenciales.
                  li 
                    i.lista-ul__vineta
                    | Competencias comportamentales.
                  li 
                    i.lista-ul__vineta
                    | Requisitos de formación académica y experiencia.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'La generación <i>alpha</i>',
        texto:
          'La generación que ha nacido entre los años 2010 y a la actualidad, nacieron y viven en la era digital, la nueva revolución de la energética, los nuevos medios de movilidad a partir de la electricidad, y la mayor preocupación para esta generación es la sostenibilidad y el cambio climático.',
        imagen: require('@/assets/curso/temas/tema1/img13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La generación Z',
        texto:
          'Son los nacidos en los años 1994 a 2010, marcados por el cambio del milenio, es la generación a la que le gusta la diversión y es su eje fundamental en la vida. Pasa la mayoría de su tiempo en las redes sociales y generando contenido para ellas, siendo este su mayor medio de información y entretenimiento, en su adolescencia vivieron la  crisis hipotecaria y financiera del 2008.',
        imagen: require('@/assets/curso/temas/tema1/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los <i>millennials</i> o generación Y',
        texto:
          'Es la generación nacida en los años 1981 a 1993, están marcados por la cúspide económica, con los inicios del bloque económico  de la Unión Europea; pero se han visto enfrentados a una crisis social debido a la baja oferta de empleo y disminución en los salarios. ',
        imagen: require('@/assets/curso/temas/tema1/img15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La generación X',
        texto:
          'Nacida entre 1960 y 1980, esta generación vive la llegada de internet y los juegos digitales, medios de comunicación digitales como el Facebook y se empiezan a realizar negocios por internet definidos como comercio electrónico.',
        imagen: require('@/assets/curso/temas/tema1/img16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Generación <i>baby boomers</i>',
        texto:
          'Es la generación nacida entre 1945 y 1959, quienes vivieron el inicio de la televisión, electrodomésticos del hogar, el teléfono móvil, primeros computadores y equipos de oficina como el fax.',
        imagen: require('@/assets/curso/temas/tema1/img17.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Generación posguerra o silenciosa ',
        texto:
          'Es la generación nacida  entre 1925 y 1944, en época de la  depresión y la Segunda Guerra Mundial. Se caracteriza por ser  valerosos, decididos y trabajadores incansables.',
        imagen: require('@/assets/curso/temas/tema1/img18.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
