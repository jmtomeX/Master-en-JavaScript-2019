var http = require('http');
var controlador = function(req, res) {
    console.log("Recibimos una nueva petición al servidor");
    res.end("Hola mundo");
}

var servidor = http.createServer(controlador);

servidor.listen('3000');