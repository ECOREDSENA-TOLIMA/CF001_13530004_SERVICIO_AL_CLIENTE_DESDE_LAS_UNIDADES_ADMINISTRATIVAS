(function(e){function o(o){for(var a,i,c=o[0],s=o[1],u=o[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(o);while(d.length)d.shift()();return t.push.apply(t,u||[]),n()}function n(){for(var e,o=0;o<t.length;o++){for(var n=t[o],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(t.splice(o--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"724c15e3","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"2735b69a",creditos:"903a22f5",glosario:"678bdc1b",intro:"520db7d7",referencias:"11a03b7e",sintesis:"a52f2d63",tema1:"5876552a",tema2:"a4112ff3",tema3:"8e695559"}[e]+".js"}function s(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var o=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?o.push(i[e]):0!==i[e]&&n[e]&&o.push(i[e]=new Promise((function(o,n){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"6409ffc8","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"7bf31e59","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"15913285","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"b05d150f",creditos:"99a546a0",glosario:"40beb649",intro:"31d6cfe0",referencias:"d79b531b",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+a,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var u=t[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return o()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===r)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var a=o&&o.target&&o.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=a,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)o.push(a[2]);else{var t=new Promise((function(o,n){a=r[e]=[o,n]}));o.push(a[2]=t);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(o){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(o)},s.m=e,s.c=a,s.d=function(e,o,n){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(n,a,function(o){return e[o]}.bind(null,a));return n},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=o,u=u.slice();for(var d=0;d<u.length;d++)o(u[d]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"52e5":function(e,o,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("68f3"),i=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),u=Object(s["a"])(c,i,r,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,o){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===o.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Servicio al cliente en las organizaciones",descripcionCurso:"Este componente formativo permite apropiarse de los conocimientos de servicio al cliente, protocolos, normas técnicas y procedimientos de servicio; así como conocimientos generales de la empresa desde el tipo, actividad económica, estructura organizacional y manual de funciones y procedimientos.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Servicio al cliente",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Ciclo",hash:"t_1_1"},{numero:"1.2",titulo:"Triángulo y momentos de verdad",hash:"t_1_2"},{numero:"1.3",titulo:"Protocolo, normas, técnicas y procedimientos de servicio",hash:"t_1_3"},{numero:"1.4",titulo:"Portafolio de servicios y canales",hash:"t_1_4"},{numero:"1.5",titulo:"Libreta de calificaciones y manual de funciones",hash:"t_1_5"}]},{nombreRuta:"tema2",numero:"2",titulo:"La empresa",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Tipo de empresas",hash:"t_2_1"},{numero:"2.2",titulo:"Actividad económica de la empresa",hash:"t_2_2"},{numero:"2.3",titulo:"Estructura orgánico-funcional ",hash:"t_2_3"},{numero:"2.4",titulo:"Manual de funciones y procedimientos",hash:"t_2_4"},{numero:"2.5",titulo:"Plataforma estratégica",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"Norma ISO 9000 ",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Objetivos y generalidades",hash:"t_3_1"},{numero:"3.2",titulo:"Lineamientos sobre servicio",hash:"t_3_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_01_13530004.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. Servicio al cliente",referencia:"Palomo, M., M. (2014). Atención al cliente. Paraninfo S.A.",tipo:"Libro",link:"https://books.google.es/books?id=WWWgBwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false"},{tema:"2. La empresa",referencia:'DECRETO 410 DE 1971 "Por el cual se expide el Código de Comercio"',tipo:"Decreto 410 de 1971",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102"},{tema:"3. Norma ISO 9000",referencia:"ISO. (2015). Norma ISO 9000:2015.",tipo:"Norma internacional",link:"https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es"}],glosario:[{termino:"Calidad",significado:"propiedad que tiene una cosa u objeto, y que define su valor, así como la satisfacción que provoca en un sujeto (Peiró, 2020)."},{termino:"Cliente",significado:"persona o entidad que compra los bienes y servicios que ofrece una empresa (Quiroa, 2019)."},{termino:"Empresa",significado:"forma de organización por parte del ser humano, para suplir necesidades, por medio de la producción de bienes y servicios; donde se integra la fuerza laboral."},{termino:"Servicio",significado:"en el ámbito económico es la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado (Sánchez, 2016)."}],referencias:[{referencia:"ISO. (2015). Norma ISO 9000:2015",link:"https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es"},{referencia:"Presidencia de la República de Colombia. (1971). Decreto 410 de 1971. Por el cual se expide el Código de Comercio.",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102"},{referencia:"Palomo, M., M. (2014). Atención al cliente. Paraninfo S.A.",link:""},{referencia:"Peiró, R. (2020). Calidad. Economipedia.",link:"https://economipedia.com/definiciones/calidad-2.html"},{referencia:"Quiroa, M. (2019). Cliente. Economipedia.",link:"https://economipedia.com/definiciones/cliente.html"},{referencia:"Sánchez, G., J. (2015). Empresa. Economipedia.",link:"https://economipedia.com/definiciones/empresa.html"},{referencia:"SENA. (2020). Servicio al cliente. [Video]. YouTube. ",link:"https://www.youtube.com/watch?v=dB6FOVF-wWs"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de línea de producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"María Alejandra Tovar",cargo:"Experta Temática",centro:"Regional Tolima- Centro de Industria y la Construcción."},{nombre:"Leydy Jhuliana Jaramillo Mejía",cargo:"Diseñadora instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial."},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesora metodológica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología."},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo desarrollo curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura."},{nombre:"Julia Isabel Roberto",cargo:"Correctora de estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología."},{nombre:"Luis Fernando Botero Mendoza",cargo:"Diseñador instruccional",centro:"Regional Tolima - Centro de Comercio y Servicios."},{nombre:"Maria Inés Machado López",cargo:"Asesor Metodológico",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Oscar Iván Uribe Ortiz",cargo:"Diseñador web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Davison Gaitán Escobar",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Sebastián Trujillo Afanador",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de contenidos accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});a["a"].prototype.$config=v;var k=n("9224");a["a"].prototype.$package=k,new a["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,o,n){e.exports=n.p+"img/banner-principal-decorativo-1.d454bf2a.svg"},9128:function(e,o,n){e.exports=n.p+"img/banner-princiapal.11fbbab1.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,o,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,o,n){},ce7c:function(e,o,n){e.exports=n.p+"img/fondo-banner-principal.47e47158.png"}});
//# sourceMappingURL=app.b4d99b1e.js.map