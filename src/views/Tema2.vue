<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Normalización en soldadura


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5

        p(data-aos="fade-up").mb-5 El criterio de normalización incluye la necesidad de establecer acuerdos entre los diversos sectores de producción, como respuesta a los desafíos y requisitos impuestos por la globalización, donde los estándares de calidad exigen a los fabricantes entregar productos altamente competitivos y seguros. 

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La normalización en trabajos de soldadura constituye herramientas legales que garantizan el cumplimiento de requisitos técnicos orientados a proteger la vida humana, preservar los recursos naturales, fomentar el desarrollo económico del país y promover avances tecnológicos e investigaciones relacionadas con la soldadura. 


        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-xl-8(data-aos="fade-left")
            .tarjeta.bg-color-2.p-4.h-100
              p.mb-0 Estas regulaciones permiten evaluar la conformidad de las soldaduras en cualquier producto, así como la competencia del soldador u operario que las realiza. En cada país, los documentos normativos son elaborados por entidades nacionales de normalización, como ICONTEC en Colombia, que organiza comités técnicos conformados por expertos que representan a productores, consumidores, instituciones educativas y entidades gubernamentales. 
          .col-xl-4(data-aos="fade-right")
            img(src="@/assets/curso/tema2/2.png", style="max-width: 400px", alt="").m-auto.mt-xl-0.mt-4


        .row.justify-content-center.align-items-stretch.mb-5
          .col-xl-4(data-aos="fade-right")
            img(src="@/assets/curso/tema2/3.png", style="max-width: 400px", alt="").m-auto.mb-xl-0.mb-4

          .col-xl-8(data-aos="fade-left")
            .tarjeta.bg-color-3.p-4.h-100
              p.mb-0 En el ámbito de la soldadura, los documentos normativos se fundamentan en experiencias relacionadas con diseño, fabricación, montaje, inspección y desmontaje, sustentadas en análisis matemáticos y procedimientos documentados. Estos procesos garantizan la trazabilidad y calidad en las construcciones soldadas.


        p(data-aos="fade-up").mb-5 En el caso específico de la soldadura, los documentos normativos son de carácter obligatorio, especialmente cuando se firman contratos para fabricar componentes soldados. El incumplimiento de estos requisitos puede ocasionar fallas graves en productos soldados como puentes, oleoductos, edificios, calderas, barcos, trenes o plantas petroquímicas, con consecuencias fatales, daños ambientales o pérdidas económicas significativas. Por ello, es crucial contar con talento humano capacitado y certificado para manejar códigos, normas y especificaciones en soldadura. 


    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Etapas en la creación de documentos normativos

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-4.pb-md-5

        .row.justify-content-center.align-items-center.mb-5
          .col-xl(data-aos="fade-left")
            .px-4.py-3
              p.mb-0 ICONTEC representa a Colombia ante organismos internacionales y regionales de normalización, como ISO, IEC y COPANT. También apoya al Gobierno Nacional en negociaciones comerciales, como las relacionadas con la Comunidad Andina, el ALCA y el TLC con Estados Unidos. Los procesos de normalización en soldadura incluyen diversas etapas clave que garantizan la calidad, transparencia y aplicabilidad de los documentos normativos. A continuación, se describen brevemente las principales fases involucradas en su elaboración y gestión: 
          .col-xl-auto(data-aos="fade-right")
            img(src="@/assets/curso/tema1/1.svg", style="max-width: 190px", alt="").m-auto.mb-xl-0.mb-4



        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2/4.png", alt="alt")

          .col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
              div(titulo="Planeación ")
                .row.align-items-center
                  .col-lg
                    p.mb-0 Identificar necesidades, evaluar la viabilidad y planificar actividades para elaborar o actualizar documentos normativos. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-1.svg", alt="alt")

              div(titulo="Conformación del comité de normalización ")
                .row.align-items-center
                  .col-lg
                    p.mb-0 Coordinar la evaluación y aprobación de documentos normativos en comités técnicos, realizando actividades complementarias como corrección de estilo y traducción. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-2.svg", alt="alt")

              div(titulo="Consulta pública de documentos de borradores")
                .row.align-items-center
                  .col-lg
                    p.mb-0 Someter los proyectos normativos a revisión pública para garantizar transparencia e imparcialidad. Se envían borradores identificados con las letras DE. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-4.svg", alt="alt")
              
              div(titulo="Aprobación de documentos corregidos")
                .row.align-items-center
                  .col-lg
                    p.mb-0 El documento normativo es revisado por una entidad independiente del comité para validar acuerdos técnicos, coherencia normativa y cumplimiento del reglamento. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-5.svg", alt="alt")

              div(titulo="Edición")
                .row.align-items-center
                  .col-lg
                    p.mb-0 Asegurar la disponibilidad de las versiones vigentes y divulgar los documentos a través de medios electrónicos, foros y charlas técnicas. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-6.svg", alt="alt")


              div(titulo="Publicación")
                .row.align-items-center
                  .col-lg
                    p.mb-0 Informar al público sobre la disponibilidad del documento normativo para su uso por organizaciones que requieran certificar productos o servicios. 
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/icon-7.svg", alt="alt")

        p(data-aos="fade-up").mb-5 A continuación, se presentan las definiciones y características de los términos esenciales utilizados en la normalización de procesos de soldadura, fundamentales para comprender su importancia y aplicación en este sector. 

    Separador
    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.pb-4.pb-md-5

        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
          h2 2.2 Uso nacional e internacional

        p(data-aos="fade-up").mb-5 Para responder a la apertura de mercados y acuerdos comerciales, es necesario armonizar los requisitos normativos. En soldadura, se aplican normas desarrolladas por asociaciones de ingenieros estadounidenses, como ASTM, AWS, ASME y AWWA. Por ejemplo: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg.mb-4
            .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/icon-1-2.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              p.text-center Los materiales deben cumplir con ASTM.
          .col-lg.mb-4
            .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/icon-2-2.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              p.text-center Las soldaduras deben ajustarse a AWS.
          .col-lg.mb-4
            .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/icon-3-2.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              p.text-center Las estructuras, como edificios, requieren AWS D1.1.
          .col-lg.mb-4
            .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/icon-4-2.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              p.text-center Los ensayos no destructivos se realizan según ASNT y AWS.
          .col-lg.mb-4
            .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/icon-5-2.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              p.text-center Los inspectores son certificados bajo ISO 9712.

        p(data-aos="fade-up").mb-5 El Código Colombiano de Construcción Sismo Resistente NSR-2010 exige que las inspecciones sean realizadas por personal certificado por ACOSEND o AWS. Cumplir con estos requisitos garantiza la trazabilidad y calidad de los componentes soldados, permitiendo que los productos sean competitivos en mercados nacionales e internacionales. 
</template>

<script>
export default {
  name: 'Tema2',
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
