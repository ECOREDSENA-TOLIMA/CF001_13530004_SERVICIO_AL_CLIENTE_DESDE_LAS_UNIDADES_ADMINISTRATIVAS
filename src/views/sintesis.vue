<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido.mt-5
      h5 <b>Servicio al cliente desde las unidades administrativas de la organización</b>
      br
      span <i>Síntesis: Servicio al cliente en las organizaciones</i>
    p.mb-5.mt-5 El servicio al cliente es la dimensión más explorada por las empresas que están en desarrollo porque a partir de esa relación se puede proyectar impacto y crecimiento empresarial ya que se trabaja con personas que siempre tienen una opinión. En la siguiente organizador gráficos se muestran los elementos más relevantes trabajados en el presente componente formativo con ese objetivo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
