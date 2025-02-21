export default {
  global: {
    Name: 'Fundamentos normativos en soldadura y normalización existente',
    Description:
      'El componente formativo  aborda la importancia de la normalización en soldadura, destacando cómo códigos, normas y especificaciones garantizan calidad, seguridad y trazabilidad en proyectos. Describe las etapas para elaborar documentos normativos y su aplicación nacional e internacional, con ejemplos de estándares utilizados en Colombia. Incluye glosario, bibliografía y créditos de desarrollo del contenido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Antecedentes de la soldadura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normalización en soldadura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas en la creación de documentos normativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Uso nacional e internacional',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Antecedentes de la soldadura',
      referencia:
        'Interweld, C.A. (2016). La Soldadura | Maravillas Modernas. [Archivo de video] Youtube.',
      tipo: 'VIDEO',
      link:
        'https://www.youtube.com/watch?v=Nyl2qj_hMvs&ab_channel=Interweld%2CC.A',
    },
    {
      tema: 'Normalización en soldadura',
      referencia:
        'Capacitación Industrial. (2023). Seguridad para Corte y Soldadura, NOM-027-STPS. [Archivo de video] Youtube.',
      tipo: 'VIDEO',
      link:
        'https://www.youtube.com/watch?v=YWLFrlibDJI&ab_channel=Capacitaci%C3%B3nIndustrial',
    },
    {
      tema: 'Normalización en soldadura',
      referencia: 'Sena. (2005). Confiabilidad de las Soldaduras.',
      tipo: 'DOCUMENTO',
      descarga: '/downloads/Confiabilidad.pdf',
    },
    {
      tema: 'Uso nacional e internacional',
      referencia:
        'APRENDIZ NDT. (2022).NORMAS QUE RIGEN LA SOLDADURA. [Archivo de video] Youtube.',
      tipo: 'VIDEO',
      link:
        'https://www.youtube.com/watch?v=wWAubgtJfHI&ab_channel=APRENDIZNDT',
    },
  ],
  glosario: [
    {
      termino: 'Código',
      significado:
        'conjunto de requisitos aplicables al diseño, fabricación, inspección y mantenimiento de equipos.',
    },
    {
      termino: 'Conformidad',
      significado:
        'cumplimiento de requisitos de documentos normativos o contractuales.',
    },
    {
      termino: 'Ensayo no destructivo',
      significado:
        'método para evaluar propiedades de materiales sin causar daño permanente al objeto evaluado.',
    },
    {
      termino: 'Especificación',
      significado:
        'documento que detalla requisitos esenciales para un material, sistema o servicio.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'estructura de subordinación entre documentos normativos basada en criterios de superioridad.',
    },
    {
      termino: 'Norma',
      significado:
        'documento técnico aprobado que establece reglas o criterios aplicables a un proceso o producto.',
    },
    {
      termino: 'Obligatorio',
      significado:
        'requisitos exigidos por documentos normativos que deben demostrarse con evidencias objetivas.',
    },
    {
      termino: 'Requisitos',
      significado:
        'condiciones necesarias para el desarrollo de un proceso, establecidos por normativas.',
    },
    {
      termino: 'Soldadura',
      significado:
        'proceso de unión que produce coalescencia de materiales al calentarlos, con o sin metal de aporte.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'procedimientos documentados que permiten seguir la evolución de un producto en cada etapa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2010). <em>Código Colombiano de Construcción Sismoresistente NSR 2010.</em>',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (2010). <em>Decreto 926 de 2010. Por el cual se adopta el Reglamento Técnico de Construcciones Sismo Resistentes NSR-10. Diario Oficial No. 47.638.</em>',
      link: '',
    },
    {
      referencia:
        'Hernández R., G. (2014). <em>Manual del soldador (14.ª ed.). CESOL.</em>',
      link: '',
    },
    {
      referencia:
        'Mike, L. (2015). <em>Códigos, normas y especificaciones. Soldadura Latinoamericana.American Welding Society. (2010). AWS A3.0: Standard Welding Terms and Definitions. American Welding Society.</em>',
      link: '',
    },
    {
      referencia:
        'American Welding Society. (2010). <em>AWS D1.1: Structural Welding Code. American Welding Society.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
