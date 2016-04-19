/* 
 Hacer un script en el que se cree un objeto complejo en JavaScript de la forma 
 que se desee (desde un fichero, asignando valores a mano, obteniendo datos de 
 operaciones) y serializarlo de la forma más "universal" posible usando JSON. 
 Hacer otro script que instancie ese objeto desde el fichero.
 */

var json = {
    key1: "value1",
    key2: {key3: "value2"},
    key4: {
        key5: ["value5", "value6"]
    }
};

var objectJson = json;
console.log(objectJson.key1);       // return value1
console.log(objectJson.key2.key3);  // return value2
console.log(objectJson.key4.key5[1]); // return value6
