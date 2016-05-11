**Para la ejecución del programa y poder probar todas las opciones es necesario usar CURL**

0. Hay que tener instalado el módulo express, en caso de no tenerlo instalarlo con npm
> npm install express

1. Arrancamos el servidor:
> node 1.APIRestNode.js

2. Creamos unos cuantos registros con CURL desde otro terminal:
> curl -X PUT localhost:8080/comida/1           //out: Apuntado para la comida 1
> curl -X PUT localhost:8080/comida/2/pescado   //out: El individuo 2 comerá pescado
> curl -X PUT localhost:8080/comida/3/carne     //out: El individuo 3 comerá carne
> curl -X PUT localhost:8080/comida/4/nada      //out: El individuo 4 todavía no sabe que comerá

3. Podemos visualizar todos los registros añadidos con PUT desde el navegador 
con la URL: localhost:8080/comida/todos ó desde CURL
> curl -X GET localhost:8080/comida/todos       //Devolverá un JSON con todos los individuos apuntados a la comida

4. También podemos BORRAR:
> curl -X DELETE localhost:8080/comida/1    //out: El individuo 1 ya no asistirá a la comida

5. Y preguntar por algún individuo que asista, ó desde CURL
> curl -X GET localhost:8080/comida/1       //out: undefined
> curl -X GET localhost:8080/comida/2       //out: pescado
> curl -X GET localhost:8080/comida/3       //out: carne

ó también desde el navegador, poniendo la url como con curl
localhost:8080/comida/1       //Mostrará la portada y en Resultado: undefined
localhost:8080/comida/2       //Mostrará la portada y en Resultado: pescado


6. Las llamadas POST se harán desde el navegador
Se escribe en el input un valor e indicará en Resultado lo que comerá.

