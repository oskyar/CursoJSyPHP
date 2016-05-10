var express = require('express');
var app = express();

//Creamos contadores
var contVisitsPort = 0;
var contVisitsNoPort = 0;
var contReqNotUnderstand = 0;

//Habilitamos el puerto
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Para peticiones sin parámetros
app.get('/', function(request, response) {
	//Aumentamos el contador si no existe un argumento
	contVisitsPort++;
	//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
	response.end( "<h2>"+contVisitsPort + ' visitas a la Portada </h2>'); 
});

//Para peticiones con el parámetro proc
app.get('/proc', function(request, response) {
	//Aumentamos el contador si el argumento/parámetro es "proc"
	contVisitsNoPort++;
	//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
	response.end("<h2>"+contVisitsNoPort + ' visitas a la No portada</h2>'); 
});

//para las demás peticiones.
app.get('*', function(request, response) {
	//Aumentamos el contador cuando hacemos una petición a una URL que desconocemos su parámetro
	contReqNotUnderstand++;
	//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
	response.end("<h2>"+contReqNotUnderstand +' peticiones no entendidas</h2>'); 
});

//Escuchamos el puerto
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


