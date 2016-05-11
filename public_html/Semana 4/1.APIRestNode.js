
var fs = require('fs');
var express = require('express');
var app = express();
var comida = {};
var portada = fs.readFileSync('comida_navidad.html', 'utf8');

app.get('/', function (req, res) {
    res.send(portada);
});

app.get('/js/:page', function (req, res) {
    var js = fs.readFileSync(req.params.page);
    res.contentType('text/javascript');
    res.send(js);
});

app.put('/comida/:id', function (req, res) {
    comida[req.params.id] = "";
    res.send('Apuntado para la comida ' + req.params.id);
});

app.put('/comida/:id/tipo/:tipo', function (req, res) {
    if (req.params.tipo != "pescado" && req.params.tipo != "carne") {
        comida[req.params.id] = "todavía no sabe que comerá";
        res.send('El individuo ' + req.params.id + " todavía no sabe que comerá");
    } else {
        comida[req.params.id] = req.params.tipo;
        res.send('El individuo ' + req.params.id + ' comerá ' + req.params.tipo);
    }
});

app.post('/comida/:id', function (req, res) {
    res.contentType('application/json');
    res.send({resultado: comida[req.params.id]});
    console.log({'Post': comida});
});
/*
 app.get('/contador/:id', function (req, res) {
 res.contentType('application/json');
 res.send("{ 'resultado': " + comida[req.params.id] + "}\n");
 });*/

app.get('/comida/todos', function (req, res) {
    res.contentType('application/json');
    res.send(comida);
    //res.send({resultado: comida[req.params.id1] + comida[req.params.id2]});
});

app.delete('/comida/:id', function (req, res) {
    delete comida[req.params.id];
    console.log({'Post': comida});
    res.send('El individuo ' + req.params.id + ' ya no asistirá a la comida');

});

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');