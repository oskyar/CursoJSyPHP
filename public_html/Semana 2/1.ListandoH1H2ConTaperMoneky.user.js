// ==UserScript==
// @name         UsandoTaperMonkey
// @namespace    JS&PHP
// @version      0.1
// @description  Recoge todos los h1 y h2 de una página y los muestra como lista en una ventana nueva.
// @author       @oskyar
// @match        http://tampermonkey.net/scripts.php?ext=dhdg
// @grant        none
// @include      *
// ==/UserScript==

(function () {
    'use strict';

    var input = document.createElement("input");
    input.type = "button";
    input.value = "Obtener cabeceras página";
    input.onclick = showWindow;
    input.setAttribute("style", "position: fixed; top:100px; right:100px; font-size:18px;z-index:10000;");
    document.body.appendChild(input);

})();

function showWindow()
{
    var listaH1 = window.document.getElementsByTagName('h1');
    var listaH2 = window.document.getElementsByTagName('h2');
    var html = "<html><head><title>Mi ventanita</title></head><body>";
    var containerH1 = "<h1>Lista de H1</h1> <ul>";
    for( var index in listaH1){
        if(!isNaN(index))
            containerH1 += "<li> " + listaH1[index].innerHTML + "</li>";
    }
    containerH1 +="</ul>";
    var containerH2 = "<h1>Lista de H2</h1> <ul>";
    for( var index2 in listaH2){
        if(!isNaN(index2))
            containerH2 += "<li> " + listaH2[index2].innerHTML + "</li>";
    }
    containerH2 +="</ul>";
    html += containerH1 + containerH2;
    html+="</body></html>";
    newwindow = window.open("_blank", "300", "300");
    newdocument = newwindow.document;
    newdocument.write(html);
}