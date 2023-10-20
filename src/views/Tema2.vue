<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La empresa

    p(data-aos="fade-right") A través de las civilizaciones los seres humanos, evolucionan y con ello cada una de las actividades que desempeña y sus medios de producción; así, las personas se han organizado dentro de la sociedad para llevar a cabo actividades que permitan solucionar las necesidades que se presentan en cada época. Algunos de los modelos más reconocidos son: 

    .row.justify-content-center.mt-5
      .col-10(style="background-color:#DEF8F3").p-4
        SlyderB(:datos="datosSlyder")

      .col-7.mt-5
        p(data-aos="fade-right") Dado los modelos productivos de la sociedad, se evidencia cómo a través las sociedades se han organizado para suplir sus necesidades y generar recursos de las mismas, por lo cual se puede definir la empresa como la forma de organización por parte del ser humano para suplir necesidades, por medio de la producción de bienes y servicios a la que se integra la fuerza laboral. 
        .cajon.color-acento-contenido.p-4.mt-5
          p La empresa también se puede definir como una organización de personas y recursos que buscan la consecución de un beneficio económico con el desarrollo de una actividad en particular. Esta unidad productiva puede contar con una sola persona y debe buscar el lucro y alcanzar una serie de objetivos marcados en su formación (Sánchez, 2015).
      .col-3.mt-5 
        figure
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='')

    .row.align-items-center.justify-content-center.mt-5
      .col-10
        .tarjeta.BGIMG04.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img48.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h5.mb-1 Ingresa al Decreto 410 de 1971.
                  p Allí se presenta el Código de Comercio, que en el artículo 25 define empresa como toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Codigo_de_comercio_DECRETO_410_DE_1971.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Tipo de empresas 

    p(data-aos="fade-right") Las empresas se pueden clasificar de acuerdo con el sector económico, actividad económica, ubicación geográfica, forma jurídica, naturaleza, además de otras características que posean las empresas, recordando que cada una tiene una identificación única con personería jurídica. 

    .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #DEF8F3")
      .row.align-items-center
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema2/img7.png', alt='')
        .col-md-8.mb-4.mb-md-0
          p En este apartado se abordará sobre los tipos de empresa según su forma jurídica, naturaleza y ubicación geográfica.
          p La forma jurídica de las sociedades posee unas características particulares como el número de socios, el capital aportado, clase o tipo de sociedad, el objeto social, la forma de administrar, entre otras.
          p En Colombia se puede distinguir dos formas de asociarse: sociedades de personas y sociedades de capital.

    p(data-aos="fade-right").mt-5 Las sociedades de personas se basan en las personas que la conforman (socios), que por lo general son familia o personas cercanas y el valor de sus aportes.

    .row.justify-content-center.mt-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span <i>Sociedades de personas.</i>

        .tabla-b.color-acento-contenido(data-aos="fade-left")
          .tabla-b__header
            h4.mb-0 Sociedades de personas
          table
            tr
              th Sociedad colectiva 
              th Sociedad en comandita simple 
              th Sociedad de responsabilidad limitada
              th Empresa unipersonal
            tr
              td *Socios: mínimo dos (2) socios, responden solidaria e ilimitadamente <br> *Razón Social: & Cìa, Hnos, e Hijos
              td *Socios: socios comanditarios con responsabilidad limitada de acuerdo con los aportes y socios colectivos, responsabilidad ilimitada; mínimo debe existir un socio gestor y máximo 25 socios comanditarios.
              td *Socios: mínimo dos (2) máximo 25, responden hasta el monto de los aportes.
              td *Socios: una persona natural o jurídica, responsabilidad limitada al monto de los aportes.
            tr
              td *Razón Social: & Cìa, Hnos, e Hijos
              td *Razón Social: & Cía, Compañía, S. en C
              td *Razón Social: Limitada o LTDA
              td *Razón Social: Empresa, Unipersonal o E.U.

      .col-8  
        p(data-aos="fade-right").mt-5 Las sociedades de capital se basan principalmente en el aporte al capital, no es relevante el socio o accionista.
        
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <i>Sociedades de capital.</i>

        .tabla-b.color-acento-contenido.mt-5(data-aos="fade-left")
          .tabla-b__header
            h4.mb-0 Sociedades de capital
          table
            tr
              th Sociedad anónima
              th Sociedad en comandita por acciones
              th Sociedad por acciones simplificadas
              th Sociedades de economía mixta
            tr
              td *Socios: mínimo cinco (5) accionistas, con responden limitada.
              td Socios: mínimo cinco (5) accionistas y un socio gestor. Con responden solidaria e ilimitada para el socio gestor y responsabilidad ilimitada para los comanditarios.
              td *Socios: mínimo un (1) socio con responsabilidad limitada hasta el monto de los aportes.
              td Son sociedades comerciales constituidas con aportes del Estado y capital privado. 
            tr
              td *Capital: acciones.
              td *Capital: acciones.
              td *Capital: acciones.
              td 
            tr
              td *Razón Social: S.A.
              td
              td *Razón Social: S.A.S
              td
    
    p(data-aos="fade-right").mt-5 Las empresas también se pueden clasificar de acuerdo con su ubicación geográfica en locales, regionales, nacionales y multinacionales.
    
    .tarjeta--container.row.mt-5
      .col-md.tarjeta(style="background-color:#DEF8F3").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='')
          
        p <b>Las empresas locales</b> son las que desarrollan su actividad económica en su domicilio y entorno más cercano, y las empresas regionales las desarrollan en la región, departamento o provincia de un país. En cuanto <b>a las empresas nacionales</b> desarrollan sus actividades dentro de un país o en todo el territorio nacional.
      .col-md.tarjeta(style="background-color: #F6EFE9").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='')
          
        p <b>Las empresas multinacionales</b>, son las que desarrollan su actividad económica en diferentes países, mediante sedes locales en cada uno de ellos, distribuyendo sus actividades económicas y de fabricación estratégicamente.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Actividad económica de la empresa

    p(data-aos="fade-right") Las empresas dentro de su objeto social buscan satisfacer las necesidades de las personas, mediante la producción de bienes y servicios, empleando la fuerza laboral y capital de trabajo; cada una de estas empresas pertenecen a un sector económico que se clasifica en sector primario, secundario y terciario.
    p(data-aos="fade-right") El sector primario, también denominado sector agropecuario, se caracteriza por obtener los productos directamente de la naturaleza o de los recursos naturales; en este sector se encuentran actividades económicas como la ganadería, agricultura, caza, pesca, y extracción de minerales como el oro y el petróleo. 

    .row.mt-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img10.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>El sector primario</b>, también denominado sector agropecuario, se caracteriza por obtener los productos directamente de la naturaleza o de los recursos naturales; en este sector se encuentran actividades económicas como la ganadería, agricultura, caza y pesca, y extracción de minerales como el oro y el petróleo. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img11.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>El sector secundario o industrial</b> son las empresas que realizan transformación de las materias primas derivadas del sector primario en bienes manufacturados, se encuentran actividades económicas como la construcción, industria y energías.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img12.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>El sector terciario o de comercio y servicio</b>, tiene como principal característica la enajenación de productos tangibles e intangibles; aquí encuentran actividades como vestuario, alimentos, asesoría, educación y salud.

    .row.mt-5
      .col-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img13.png' alt='')
      .col-8(data-aos="fade-left")
        p Dentro de estos sectores económicos se encuentran las actividades económicas de las empresas, las cuales según el Producto Interno Bruto (PIB) se clasifican en:
        ul.lista-ul.p-3
          li 
            i.lista-ul__vineta
            | Sector agricultura, en el cual pertenece agricultura, caza, ganadería, silvicultura. 
          li 
            i.lista-ul__vineta
            | Sector minero, el cual es la explotación de minas y canteras.
          li 
            i.lista-ul__vineta
            | Sector construcción.
          li 
            i.lista-ul__vineta
            | Sector servicios, suministro de electricidad, gas, vapor, aire acondicionado. 
          li 
            i.lista-ul__vineta
            | Sector financiero y de seguros.
          li 
            i.lista-ul__vineta
            | Sector comercial al por mayor y al por menor.
          li 
            i.lista-ul__vineta
            | Sector industrial manufacturera.
          li 
            i.lista-ul__vineta
            | Sector artísticas, de entretenimiento y recreación y otras actividades de servicios.
          li 
            i.lista-ul__vineta
            | Sector información y comunicación.
          li 
            i.lista-ul__vineta
            | Sector inmobiliario.
          li 
            i.lista-ul__vineta
            | Sector profesionales, científicas y técnicas.
          li 
            i.lista-ul__vineta
            | Sector público y defensa. 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Estructura orgánico-funcional 

    p(data-aos="fade-right") Las empresas también se clasifican con base en su tamaño y de este depende la estructura organizacional de las empresas, por ello, se encuentran clasificadas en grande, mediana, pequeña micro y famiempresa; para ampliar la información se invita a revisar el siguiente recurso en el que SMMLV dentro de Colombia significa Salarios Mínimos Mensuales Legales Vigentes.

    LineaTiempoB.color-secundario.mt-5(:datos="datosLineaTiempoB")(data-aos="fade-left").BGIMG03

    p(data-aos="fade-right").mt-5 Del tamaño de estas empresas depende la estructura orgánico-funcional (estructura jerárquica) que se le da a cada área o cargo de la empresa; esta estructura se deriva de la organización del trabajo y la administración de empresas con exponentes como Henry Ford y Federick Taylor.
    p(data-aos="fade-right") Existen diversos modelos de estructura organizacional:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mt-5
      .row(titulo="Estructura funcional")
        .col
          p Empleada en empresas de un tamaño grande y mediano, divide la empresa u organización por funciones según la especialización o división del trabajo; se segmenta por gerente, ventas, recursos humanos, contabilidad, entre otras áreas especializadas.
          
          .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            span <i>Estructura funcional</i>      
          figure
            img(src='@/assets/curso/temas/tema2/img19.svg', alt='Figura 6. Estructura organización funcional. Liderada por un CEO o Director, e integrada por las áreas de marketing, ventas y finanzas.')
            figcaption Nota. Tomada de Thepowermba (s. f.)

      div(titulo="Estructura lineal")
        p Se usa en empresas de un tamaño mediano y pequeñas, en las que las actividades se realizan sin intermediarios y tiene comunicación directa de autoridad.
        .titulo-sexto.color-acento-contenido
          h5 Figura 7. 
          span <i>Estructura lineal</i>      
        figure
          img(src='@/assets/curso/temas/tema2/img20.svg', alt='Figura 7. Estructura lineal dirigida por la dirección general capitán y compuesta por departamentos de compras pelotón, producción pelotón y ventas pelotón y cada uno de los departamento está integrado por secciones.')          
          figcaption Nota. Tomada de Economipedia (s. f.).

      div(titulo="Estructura divisional")
        p En esta estructura se divide la organización en procesos o proyectos, y por zonas geográficas o productos; se utiliza mucho para las empresas que emplean diferentes líneas de productos o servicios. 
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <i>Estructura divisional</i>      
        figure
          img(src='@/assets/curso/temas/tema2/img21.png', alt='Figura 8. Estructura divisional corresponde a una estructura organizacional divisional por marca o producto. ')
          figcaption Nota. Tomada de Thepowermba (s. f.).


    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Manual de funciones y procedimientos

    p(data-aos="fade-right") Las empresas a través de su estructura organizacional implementan los manuales de funciones y procedimientos, estos son documentos que recopilan información respecto a los puestos de trabajo y al procedimiento de cada uno de ellos, de acuerdo con el sistema de gestión de calidad.
    p(data-aos="fade-right") Los manuales de funciones se adelantan a partir de las áreas funcionales de cada organización y las funciones que debe desempeñar el personal que se encuentra a cargo de cada empleo; allí se encuentran la identificación, ubicación, propósito principal y descripción de funciones esenciales del empleo, así como los conocimientos básicos o esenciales de cada cargo, las competencias comportamentales que debe tener cada empleado y los requisitos de formación académica y experiencia básicos para ocupar un empleo.

    .row.justify-content-center.mt-5 
      .col-10
        .tarjeta.p-4.mt-5(data-aos="fade-left")(style="background-color: #DEF8F3")
          .row.align-items-center
            
            .col-md-8.mb-4.mb-md-0
              p El manual de procesos y procedimientos es una herramienta fundamental que proporciona la orientación en la operación y ejecución de los procesos al interior de las organizaciones, los cuales se deben describir de una forma lógica, técnica y detallada, donde se indica quién, cómo, cuándo, dónde y para qué se realizan los procesos y procedimientos mediante la implementación de diagramas de flujo que ilustran y permiten un adecuado entendimiento de los procesos y procedimientos por parte de la organización. 
              p El manual de procesos y procedimientos debe definir y detallar expresamente cada objetivo, alcance, actividades a desarrollar, insumos requeridos, cronograma de desarrollo y los empleados responsables de realizar los análisis de cada puesto de trabajo, procesos y procedimientos; este grupo de empleados expertos deberá identificar los responsables de cada proceso y qué gestión deberá realizar cada uno al interior de las organizaciones.

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img22.png', alt='')

        p(data-aos="fade-right").mt-5 Para la elaboración del manual de procesos y procedimientos es necesario tener en cuenta tres etapas: 

        ol.lista-ol--cuadro(data-aos="fade-right").mt-5
          li 
            .lista-ol--cuadro__vineta
              span.text-dark <b>1</b>
            | Análisis e identificación de los diferentes procedimientos.
          li 
            .lista-ol--cuadro__vineta
              span.text-dark <b>2</b>
            | Entrevista con cada uno de los empleados de las áreas funcionales de la empresa.
          li 
            .lista-ol--cuadro__vineta
              span.text-dark <b>3</b>
            | Validación y aprobación por parte de los empleados.

    p(data-aos="fade-right").mt-5 Con la implementación del manual de procesos y procedimientos y la adecuada documentación de los procesos al interior de las empresas se logra: 
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 9.
      span <i>Manual de procesos y procedimientos</i> 
    figure.mt-5
      img(src='@/assets/curso/temas/tema2/img23.svg', alt='Figura 9. Manual de procesos y procedimientos establece métodos y técnicas que se deben aplicar en cada cargo, determina las responsabilidad, estandariza los procesos y guía, orienta a los empleado en proceso de inducción y reinducción. ')

    p(data-aos="fade-right").mt-5 Para una correcta documentación del manual de procesos y procedimientos se deben caracterizar los procesos y a su vez documentarlos.

    .row.mt-5.BGIMG02
      .col-3
        figure
          img(src='@/assets/curso/temas/tema2/img24.png')
      .col-9
        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema2/flecha.svg').m-auto(data-aos="fade-right")
          .col
            p.mb-0(data-aos="fade-left") 
              b <u>Caracterización del proceso</u>

        p La caracterización de los procesos y procedimientos se debe realizar de forma sencilla, y debe contener el nombre del proceso, su objetivo, alcance y responsable.

        .row.align-items-center.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/temas/tema2/flecha.svg').m-auto(data-aos="fade-right")
          .col
            p.mb-0(data-aos="fade-left") 
              b <u>Documentación de procedimientos</u>
        
        p La documentación de los procedimientos y procesos se deben documentar teniendo en cuenta las siguientes consideraciones:

        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-primario.p-4
            p <b>Objetivo:</b> describe claramente lo que el proceso y procedimiento permite lograr  al interior de la organización. 

          .tarjeta.color-acento-contenido.p-4
            p <b>Alcance:</b> identifica qué, dónde, cuándo, quién, cómo se generan los procesos y procedimientos y cuál es su límite de aplicación al interior de la organización.

          .tarjeta.color-primario.p-4
            p <b>Responsables:</b> indica quién o quiénes son los responsables de lograr el objetivo del procedimiento y cumplir con las actividades asignadas.

          .tarjeta.color-acento-contenido.p-4
            p <b>Generalidades o políticas operacionales:</b> describe las políticas o códigos organizacionales, con los que se debe desarrollar cada proceso, así como las leyes, decretos o normas por las que se rige la organización. 

          .tarjeta.color-primario.p-4
            p <b>Desarrollo del procedimiento:</b> determina las acciones y actividades del proceso y procedimiento y quién las debe realizar, dónde y en qué tiempo. 

          .tarjeta.color-acento-contenido.p-4
            p <b>Documentos relacionados:</b> relaciona los manuales, procedimientos, políticas, reglamentos, leyes, decretos, etc., internos y externos, que vinculan los procesos y procedimientos de la organización. 

          .tarjeta.color-primario.p-4
            p <b>Registros:</b> listas de chequeo, registros o evidencias que se relacionan con cada actividad asignada en los procesos y procedimientos.

          .tarjeta.color-acento-contenido.p-4
            p <b>Anexos:</b> información adicional empleada para soportar los procesos y procedimientos.
            
    p(data-aos="fade-right").mt-5 Para la puesta en marcha de los manuales de procedimientos y procesos, se emplean los diagramas de flujos de procesos que presentan de forma gráfica, sistemática y más eficiente los procesos.

    .row.align-items-center.justify-content-center.mt-5
      .col-10
        .tarjeta.BGIMG04.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img48.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 Ingrese al Anexo 1, Símbolos diagrama de procesos y Anexo 2, Diagrama de flujo área de contratación, donde se presenta el ejemplo de un diagrama de procesos para el área de contratación de una organización.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Simbolos_diagrama_de_proceso.pdf')" target="_blank")
                    span Ver anexo 1
                    i.fas.fa-file-download

                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_Diagrama_de_flujo.pdf')" target="_blank")
                    span Ver anexo 2
                    i.fas.fa-file-download

    p(data-aos="fade-right").mt-5 Esta se puede conceptualizar como la base sobre la cual se rigen las organizaciones y crea valor a partir de lo que hace y cómo lo hace, por lo cual la plataforma estrategia se convierte en una carta de navegación.
    p(data-aos="fade-right") La plataforma estratégica de las empresas está compuesta por la misión, visión, objetivos estratégicos, valores corporativos, políticas y código de ética. 

    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 10. 
          span <i>Plataforma estratégica</i>      
        figure
          img(src='@/assets/curso/temas/tema2/img25.svg', alt='Figura 10. Plataforma estratégica donde se define la misión, visión, objetivos estratégicos, valores corporativos, políticas y código ética.')          

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Plataforma estratégica

    p(data-aos="fade-right") Al estar las empresas ubicadas en una localidad, región o país, se presenta una cultura organizacional influenciada por su entorno y en la que se encuentra inmersa la plataforma estratégica de las empresas al incluir los valores, normas y políticas que la rigen.
    p(data-aos="fade-right") La cultura organizacional está formada por tres niveles esenciales de acuerdo con <i>Shein</i>: 

    .row.mt-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img27.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>Artefacto y símbolos:</b> son los elementos de una organización como: logo, decoración, arquitectura, vestimenta, entre otros, que sean visibles y la identifiquen.


      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img26.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>Valores adoptados:</b> son las normas, valores y códigos de la empresa.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img28.svg' alt='')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta(style="background-color:#DEF8F3")
            .p-4
              p <b>Suposiciones básicas y subyacentes:</b> son los elementos culturales que posee cada miembro de la organización y que transmite a ella.
              
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-10
        .cajon.color-acento-contenido.p-4.mt-5
          p Dentro de las empresas, existen dos tipos de cultura organizacional: la fuerte y la débil; la primera es la aceptada por todos los miembros de la organización, y la segunda no se encuentra identificada por parte de los miembros de la organización. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Modelo primitivo',
        texto:
          'Se da en la época prehistórica, antes de la revolución neolítica, quienes se dedicaron a la agricultura y la ganadería. No se visibiliza el Estado ni una jerarquía o clases sociales.',
        imagen: require('@/assets/curso/temas/tema2/img1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Modelo de producción esclavista',
        texto:
          'Se da desde tiempos remotos hasta el siglo XIX, las personas eran despojadas de sus derechos, convirtiéndose en la fuerza laboral y productiva de la sociedad, pero no recibían remuneración; se empieza a ver la organización del Estado en las civilizaciones de Grecia y Roma.',
        imagen: require('@/assets/curso/temas/tema2/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Modelo de producción feudal',
        texto:
          'La cual se da desde la caída del imperio romano hasta la época del Renacimiento en Europa, se caracteriza porque aparecen los señores feudales y terratenientes, quienes eran los dueños de la tierra; y la fuerza laboral se conocía como los plebeyos. En esta época se visibiliza un modelo político descentralizado donde la autoridad local eran los señores feudales.',
        imagen: require('@/assets/curso/temas/tema2/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Modelos de producción capitalista',
        texto:
          'El capitalismo se caracteriza por que los bienes y servicios tienen un valor monetario y el trabajo es remunerado, se origina con la caída del feudalismo en el siglo XV, donde nace la burguesía como una nueva clase social de Europa, los burgueses eran los plebeyos de la época del feudalismo quienes se convirtieron en los dueños de las primeras empresas.',
        imagen: require('@/assets/curso/temas/tema2/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Modelo de producción socialista',
        texto:
          'Es un modelo de organización política, social y económica, se caracteriza porque los bienes y servicios, tienen un valor de acuerdo con su utilidad, por lo cual la producción se centra en las necesidades de las personas y no en generar riquezas para los empresarios.',
        imagen: require('@/assets/curso/temas/tema2/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: 'Grande',
        texto:
          'Número de trabajadores mayor a 200 personas. Activos totales mayor a 30.0000 SMMLV.',
        icono: require('@/assets/curso/temas/tema2/img14.svg'),
      },
      {
        titulo: 'Mediana',
        texto:
          'Número de trabajadores entre 51 y 200 personas. Activos totales entre 5.001 y 30.0000 SMMLV.',
        icono: require('@/assets/curso/temas/tema2/img15.svg'),
      },
      {
        titulo: 'Pequeña',
        texto:
          'Número de trabajadores entre 11 y 50 personas. Activos totales entre 501 y 5.001 SMMLV.',
        icono: require('@/assets/curso/temas/tema2/img16.svg'),
      },
      {
        titulo: 'Micro empresa',
        texto: 'Número de menor a 10. Activos totales inferior a 500 SMMLV.',
        icono: require('@/assets/curso/temas/tema2/img17.svg'),
      },
      {
        titulo: 'Famiempresa',
        texto: 'La familia es el tipo de explotación de esta empresa.',
        icono: require('@/assets/curso/temas/tema2/img18.svg'),
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
