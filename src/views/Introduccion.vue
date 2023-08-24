<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-right").mb-5.mt-5 En el inicio de este proceso formativo, se sugiere comenzar con esta introducción que hará un acercamiento a las temáticas que serán abordadas.
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/pblGQOtYOh8?si=NuIgbjlrsRodZBs5" title="Servicio al cliente en las organizaciones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Servicio al cliente en las organizaciones
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
