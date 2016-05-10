//Añadimos el módulo http para crear el servidor
var http=require('http'); 
//Obtenemos el puerto 
var puerto=process.argv[2]?process.argv[2]:8080;
//Declaramos variables de tipo entero para los contadores
var contVisitsPort = 0;
var contVisitsNoPort = 0;
var contReqNotUnderstand = 0;
//Se crea el server
http.createServer(function (req, res) { 
	//Se crea la cabecera indicando que renderizará código HTML
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	//Partimos la URL por /
	var split_url=req.url.split("/"); 
	//Comprobamos que el primer argumento de la URL no tenga nada
	if ( split_url[1] == '' ) {
		//Aumentamos el contador si no existe un argumento
		contVisitsPort++;
		//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
		res.end( "<h2>"+contVisitsPort + ' visitas a la Portada </h2>'); 
	} else if ( split_url[1] == 'proc' ) {
		//Aumentamos el contador si el argumento/parámetro es "proc"
		contVisitsNoPort++;
		//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
		res.end("<h2>"+contVisitsNoPort + ' visitas a la No portada</h2>'); 
	} else { 
	//Aumentamos el contador cuando hacemos una petición a una URL que desconocemos su parámetro
	contReqNotUnderstand++;
	//Mostramos en etiquetas h2 el contenido de la variable con un mensaje. No tiene ninguna estructura, solo un h2
	res.end("<h2>"+contReqNotUnderstand +' peticiones no entendidas</h2>'); 
} 
}).listen(puerto, '127.0.0.1');  //indicamos que escuche el puerto 8080 con la ip 127.0.0.1 (Localhost)
//Se muestra por consola que el servidor está corriendo en esa ip con ese puerto.
console.log('Server running at http://127.0.0.1:'+puerto+'/');

