<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Norma ISO 9000

    p(data-aos="fade-right") La norma ISO 9000:2015 es una norma internacional, que orienta a cualquier tipo de organización, sin importar el tamaño, actividad económica, sector económico, constitución o ubicación geográfica; respecto al sistema de gestión de la calidad, es emitida por la Organización Internacional de Normalización (ISO).

    .row.justify-content-center.mt-5 
      .col-10
        .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #F6EFE9")
          .row.align-items-center
            
            .col-md-8.mb-4.mb-md-0
              p Esta norma indica a cada organización los fundamentos básicos y terminología fundamental, para comprender el Sistema de Gestión de Calidad (SGC) que permite integrar los procesos para lograr la calidad al interior de las organizaciones.
              p La norma ISO 9000 presenta los conceptos, principios, procesos y recursos fundamentales del SGC, que deben ser implementados al interior de las organizaciones,  independientemente de su tamaño, complejidad o modelo de negocio. 

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img1.png', alt='')

        p(data-aos="fade-right").mt-5 La norma tiene siete principios de gestión de la calidad que apoyan los conceptos fundamentales: enfoque al cliente, liderazgo, compromiso de las personas, enfoque de procesos, mejora, toma de decisiones basadas en evidencias y gestión de las relaciones.

        .tarjeta.BGIMG04.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img48.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 Ingrese al Anexo NTC ISO 9000-2005 donde puede ampliar conceptos y definiciones importantes a partir de la norma establecida para el servicio al cliente
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_NTC_ISO_9000-2005.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Objetivos y generalidades 

    p(data-aos="fade-right") El objetivo de la norma ISO 9000, permite a las organizaciones tomar conciencia respecto a las actividades y compromiso que tienen con sus clientes que buscan satisfacer unas necesidades y cumplir con sus expectativas; por lo cual las organizaciones deben propender por estandarizar sus procesos para ofrecer bienes y servicios de calidad.
    p(data-aos="fade-right") De acuerdo con la Norma ISO 9000 los conceptos y principios del sistema de gestión de la calidad son universalmente y aplicables a cada una de las organizaciones, clientes y proveedores que busca, así: 

    SlyderF(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img2.svg' alt='')
        p El éxito sostenido a través de la estandarización de los procesos mediante la implementación del sistema de gestión de la calidad.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3.svg' alt='')
        p Los clientes que buscan productos y servicios conformes a sus requisitos.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img4.svg' alt='')
        p Las organizaciones que buscan cadena de suministro de calidad para la producción de productos y servicios de calidad.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img5.svg' alt='')
        p Quienes buscan mejores medios de comunicación mediante el sistema de gestión de la calidad.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img6.svg' alt='')
        p Quienes realizan evaluación de los procesos de acuerdo con los requerimientos de la Norma ISO 9001.

    .row.justify-content-center.mt-5 
      .col-10
        p(data-aos="fade-right") Los conceptos y los principios de la ISO 9000 permiten a las organizaciones superar los retos presentados por el entorno, proporcionando una manera de pensar más amplia en relación con la organización, y proporcionando conceptos y principios fundamentales para utilizar en el desarrollo de un Sistema de Gestión de la Calidad (SGC).

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span <i>Conceptos fundamentales ISO 9000</i>      
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='Calidad: capacidad de satisfacer a los clientes, mediante el valor percibido y el beneficio para el cliente. Sistema de gestión de calidad: gestiona los procesos que interactúan para generar valor a las organizaciones. Contexto de una organización: entorno interno y externo, en el cual interactúa la organización. Partes interesadas: son las persona u organizaciones que pueden afectar positiva o negativamente la organización. Apoyo: el soporte del SGC son las personas, procesos, toma de decisiones y comunicación. ')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Lineamientos sobre servicio

    p(data-aos="fade-right") De acuerdo con la norma ISO 9000 el servicio es el resultado del proceso de una organización, que involucra, al menos, una actividad necesariamente llevada a cabo entre la organización y el cliente. El servicio, por lo general, abarca las siguientes características: 

    .row.justify-content-center.mt-5
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img8.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
            p.mb-0 Los elementos dominantes de un servicio son generalmente intangibles.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img9.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
            p.mb-0 Los servicios con frecuencia involucran actividades en la interfaz, relación y requisitos del cliente.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img10.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DEF8F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
            p.mb-0 Un servicio generalmente se experimenta por el cliente.

    

    p(data-aos="fade-right").mt-5 A lo largo del trabajo en servicio al cliente el involucrado número uno es el cliente que por lo general está referido en alguno de los siguientes términos relativos, estos términos se usan para caracterizarlo a lo largo del proceso:

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span <i>Términos relativos al cliente</i>      
        figure
          img(src='@/assets/curso/temas/tema3/img11.svg', alt='Se evidencia una gráfica circular a manera de ciclo que muestra los siguientes 6 pasos: 1. Satisfacción del cliente. 2. Quejas. 4. Servicio al cliente. 5. Código de conducta de la satisfacción del cliente. 6. Conflicto. 7. Retroalimentación.')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
