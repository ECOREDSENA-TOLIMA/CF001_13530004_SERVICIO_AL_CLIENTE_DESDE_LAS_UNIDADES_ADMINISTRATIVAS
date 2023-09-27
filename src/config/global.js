export default {
  global: {
    componenteFormativo: 'Servicio al cliente en las organizaciones',
    descripcionCurso:
      'Este componente formativo permite apropiarse de los conocimientos de servicio al cliente, protocolos, normas técnicas y procedimientos de servicio; así como conocimientos generales de la empresa desde el tipo, actividad económica, estructura organizacional y manual de funciones y procedimientos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ciclo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Triángulo y momentos de verdad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Protocolo, normas, técnicas y procedimientos de servicio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Portafolio de servicios y canales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Libreta de calificaciones y manual de funciones',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipo de empresas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Actividad económica de la empresa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura orgánico-funcional ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manual de funciones y procedimientos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Plataforma estratégica',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Norma ISO 9000 ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos y generalidades',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lineamientos sobre servicio',
            hash: 't_3_2',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_1_13530004.zip',
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
      tema: '1. Servicio al cliente',
      referencia: 'Palomo, M., M. (2014). Atención al cliente. Paraninfo S.A.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?id=WWWgBwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      tema: '3. ISO 9001:2015(es) Sistemas de gestión de la calidad',
      referencia: 'ISO. (2015). Norma ISO 90001:2015.',
      tipo: 'Norma internacional',
      link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado:
        'propiedad que tiene una cosa u objeto, y que define su valor, así como la satisfacción que provoca en un sujeto (Peiró, 2020).',
    },
    {
      termino: 'Cliente',
      significado:
        'persona o entidad que compra los bienes y servicios que ofrece una empresa (Quiroa, 2019).',
    },
    {
      termino: 'Empresa',
      significado:
        'forma de organización por parte del ser humano, para suplir necesidades, por medio de la producción de bienes y servicios; donde se integra la fuerza laboral.',
    },
    {
      termino: 'Servicio',
      significado:
        'en el ámbito económico es la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado (Sánchez, 2016).',
    },
  ],
  referencias: [
    {
      referencia: 'ISO. (2015). Norma ISO 90001:2015',
      link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Decreto 410 de 1971. Por el cual se expide el Código de Comercio.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia: 'Palomo, M., M. (2014). Atención al cliente. Paraninfo S.A.',
      link: '',
    },
    {
      referencia: 'Peiró, R. (2020). Calidad. Economipedia.',
      link: 'https://economipedia.com/definiciones/calidad-2.html',
    },
    {
      referencia: 'Quiroa, M. (2019). Cliente. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia: 'Sánchez, G., J. (2015). Empresa. Economipedia.',
      link: 'https://economipedia.com/definiciones/empresa.html',
    },
    {
      referencia: 'SENA. (2020). Servicio al cliente. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=dB6FOVF-wWs',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Alejandra Tovar',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima- Centro de Industria y la Construcción.',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
