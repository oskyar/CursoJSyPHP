// ==UserScript==
// @name         ObteniendoUrls.user.js
// @namespace    JS&PHP
// @version      0.1
// @description  Obtiene URLs de un div en el que se haya hecho click y los muestra en un formato determinado
// @author       @oskyar
// @grant        none
// @include      *
// ==/UserScript==

(function () {
    'use strict';

    var containerURLs = document.createElement("div");
    containerURLs.id="idContainerURLs";
    containerURLs.setAttribute("style", "position: fixed; top:100px; right:100px; background-color:#ccc; width:1000px; height:500px; overflow: auto; font-size:18px; z-index:10000; border: 2px solid grey; border-radius: 10px");
    document.body.appendChild(containerURLs);

    var listaURLs = window.document.getElementsByTagName('a');
    var dominio = window.location.host;

    var listaHtmlUrls = document.createElement("ul");
    var pattern = RegExp(dominio);
    for ( var i in listaURLs){
        if(listaURLs[i].href !== ""){
            var li = document.createElement("li");
            var texto = document.createTextNode("["+i+"] -> ");
            var a = document.createElement("a");
            a.href = listaURLs[i].href;
            a.text = listaURLs[i].href;

            li.appendChild(texto);
            if(pattern.test(listaURLs[i].href)){
                li.appendChild(a);
                listaHtmlUrls.appendChild(li);
            }else{
                var img = document.createElement("img");
                //Imagen cogida de la siguiente dirección, http://publicdomainvectors.org/es/vectoriales-gratuitas/Flecha-roja-apuntando-hacia-arriba-gr%C3%A1ficos-vectoriales/8486.html
                img.src= "http://publicdomainvectors.org/photos/pitr_red_arrows_set_1.png";
                img.width= "16";
                img.height= "16";
                li.appendChild(img);
                li.appendChild(a);
                listaHtmlUrls.appendChild(li);
            }
        }
    }
    containerURLs.appendChild(listaHtmlUrls);


})();
