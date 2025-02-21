<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5

        p(data-aos="fade-up").mb-5 Todo proyecto que implique uniones soldadas requiere documentación técnica normativa y, en Colombia, legal, que garantice la capacidad del contratista o subcontratista para diseñar y ensamblar estructuras metálicas resistentes a solicitaciones mecánicas y metalúrgicas. Esto asegura que los procesos de trazado, corte, ajuste, armado y soldado sean realizados con estándares de calidad adecuados.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos estándares no solo protegen la integridad estructural de los productos, sino también la salud y seguridad de los trabajadores involucrados en los procesos de soldadura. Desde diseñadores hasta inspectores, todos deben conocer y aplicar las normativas pertinentes, asegurando que cada fase del proceso cumpla con los requisitos técnicos necesarios para evitar fallos y riesgos innecesarios. 


        .bg-color-1.mb-5
          .row.justify-content-center.align-items-center
            .col-xl(data-aos="fade-left")
              .px-4.py-3
                p.mb-0 En Colombia, el ICONTEC lidera los esfuerzos de normalización, alineándose con organizaciones internacionales como ISO y AWS. Esto permite que las normativas nacionales sean compatibles con las exigencias globales, fomentando el desarrollo económico, la investigación tecnológica y la competitividad en los mercados nacionales e internacionales. 
            .col-xl-auto(data-aos="fade-right")
              img(src="@/assets/curso/intro/2.svg", style="max-width: 190px", alt="").m-auto.mb-xl-0.mb-4
      
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
