<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Antecedentes de la soldadura


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-4.pb-md-5

        .row.justify-content-center.align-items-center
          .col-xl(data-aos="fade-left")
            .px-4.py-3
              p.mb-0 La soldadura ha recorrido un largo camino desde sus inicios rudimentarios como un proceso manual y primitivo. Originalmente vista como un método sucio, basado en unir piezas de metal con golpes o calor, se convirtió con el tiempo en una tecnología compleja y fundamental. A lo largo de la historia, su evolución ha estado ligada al avance científico y tecnológico, consolidándose como una herramienta esencial en industrias que abarcan desde la manufactura básica hasta la exploración espacial. 
          .col-xl-auto(data-aos="fade-right")
            img(src="@/assets/curso/tema1/1.svg", style="max-width: 190px", alt="").m-auto.mb-xl-0.mb-4


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-down")
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Siglo XVII").justify-content-center.pt-4
              .col-lg-7.mb-4.mb-md-0
                h4 Siglo XVII
                p.mb-4 Durante la revolución industrial, se inventa la soldadura eléctrica, marcando un gran avance al permitir uniones más precisas y resistentes en menos tiempo.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-1.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Comienzo del siglo XX").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Comienzo del siglo XX
                p.mb-4 La soldadura es reconocida como un proceso esencial y complejo. Se incorporan disciplinas científicas como física de plasmas, electromagnetismo y metalurgia.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-2.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Mitad del siglo XX").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Mitad del siglo XX
                p.mb-4 La soldadura se integra en la producción en masa para fabricar automóviles, juguetes y maquinaria agrícola. También se utiliza en infraestructuras como puentes y rascacielos.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-3.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Década de 1960").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Década de 1960
                p.mb-4 En la carrera espacial, se emplea la soldadura plasma en proyectos como el #[em Space Shuttle], fabricando componentes críticos como el tanque de oxígeno.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-4.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Finales del siglo XX").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Finales del siglo XX
                p.mb-4 Se desarrollan tecnologías como la soldadura por haz de electrones y por fricción, aplicadas en proyectos avanzados como el avión F-22 y el Airbus A3XX.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-5.png", style="max-width:100%", alt="").mx-auto.mb-4
 

            .row(titulo="Siglo XXI (actualidad)").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Siglo XXI (actualidad)
                p.mb-4 La soldadura se consolida como una tecnología avanzada y automatizada, presente en objetos cotidianos y proyectos aeroespaciales gracias a la robótica y la computación.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/slider-6.png", style="max-width:100%", alt="").mx-auto.mb-4
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
