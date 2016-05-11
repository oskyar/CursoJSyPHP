var request;
function comida() {
    request = new XMLHttpRequest();
    var individuo = document.getElementById('comida').value;
    var peticion_str = '/comida/' + individuo;
    request.open('POST', peticion_str, true);
    request.onreadystatechange = escribe_resultado;
    request.send(null);
}

function escribe_resultado() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var json;
            eval('json = ' + request.responseText);
            console.log(json);
            document.getElementById('resultado').innerHTML = 'Resultado = ' +
                    json.resultado;
        }
    }
}