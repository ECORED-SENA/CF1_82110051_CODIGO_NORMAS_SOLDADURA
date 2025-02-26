<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos normativos en soldadura',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos fundamentales de normalización en soldadura, incluyendo las etapas de creación de documentos normativos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal finalidad de los requisitos de calidad en soldadura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar los costos de los materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger la salud y seguridad de los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar productos soldados confiables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el tiempo de fabricación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad representa a Colombia ante la ISO en temas de normalización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SENA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ICONTEC.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ACOSEND.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué significa el término "código" en el contexto de normalización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento que describe detalles técnicos específicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de reglas aplicables al diseño, inspección y mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método de evaluación para soldadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un reglamento exclusivo de ACOSEND.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes NO es una etapa en la creación de documentos normativos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planeación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprobación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Edición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Certificación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué organismo internacional emite la norma AWS D1.1?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'American Welding Society.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'International Organization for Standardization.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'American Society of Mechanical Engineers.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'International Electrotechnical Commission.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un beneficio clave de la normalización en soldadura?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger la vida humana y recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Simplificar los procesos legales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los requisitos técnicos en inspecciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se busca al someter documentos normativos a consulta pública?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar transparencia e imparcialidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Acelerar la aprobación del documento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la participación de expertos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar requisitos técnicos específicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué estipula el título F del Código Colombiano de Construcción Sismorresistente NSR 2010?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que los materiales deben cumplir con ASTM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las inspecciones sean realizadas por inspectores certificados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que todos los ensayos sean destructivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que los soldadores sean formados por ICONTEC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué describe una especificación en soldadura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requisitos generales de calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requisitos esenciales para un material o producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas internacionales específicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procedimientos exclusivos de ACOSEND.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué organismo colombiano es responsable del desarrollo de normativas nacionales en soldadura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ACOSEND.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ICONTEC.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SENA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'AWS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué sucede si no se cumplen los requisitos normativos en un proyecto de soldadura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proyecto puede ser rechazado y causar fallos estructurales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los soldadores pierden su certificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se reduce el tiempo de entrega del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se elimina la necesidad de inspección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los documentos normativos buscan garantizar productos soldados competitivos y seguros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La trazabilidad en soldadura implica procedimientos documentados para seguir el proceso de fabricación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los códigos en soldadura solo aplican al diseño de productos y no incluyen inspecciones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El título F del NSR 2010 aplica únicamente a edificios residenciales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
