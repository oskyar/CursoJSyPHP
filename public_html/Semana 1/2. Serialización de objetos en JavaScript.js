/* 
 Hacer un script en el que se cree un objeto complejo en JavaScript de la forma 
 que se desee (desde un fichero, asignando valores a mano, obteniendo datos de 
 operaciones) y serializarlo de la forma más "universal" posible usando JSON. 
 Hacer otro script que instancie ese objeto desde el fichero.
 */
//Inicializando con algunos valores el objeto Json.
var jsonPrueba = {
    key1: "value1",
    key2: {key3: "value2"},
    key4: {
        key5: ["value5", "value6"]
    }
};

//Añadiendo más contenido al objeto json
jsonPrueba["reforzando"]="javascript";
jsonPrueba["otroObjeto"] = {"PeroSigo":"Creando objetos"};
jsonPrueba["yArraysDeObjetos"]=[{"obj1":"valor1"},{"obj2":"valor2"},{"fin":"del ejercicio"}];

//Convirtiendo a string con stringify el objeto creado anteriormente
var jsonEnString = JSON.stringify(jsonPrueba);

//Imprimiendo json por consola
jsonEnString;

//Volvemos a convertir el objeto a tipo json
var jsonAgain = JSON.parse(jsonEnString);

//Imprimimos un valor cualquiera
jsonAgain["yArraysDeObjetos"][2]["fin"];