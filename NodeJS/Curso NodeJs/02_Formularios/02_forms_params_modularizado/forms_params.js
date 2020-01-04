var http = require("http");
// sistema que se encarga de comunicase con el sistema de archivos del pc
var fs = require("fs");

var parser = require("./params_parser.js");
var rende = require("./render_view.js");

var p = parser.parse;
var r = rende.render;

// forma sincrona
// var html = fs.readFileSync('./index.html');
http
  .createServer((req, res) => {
    // forma asincrona
    fs.readFile("./index.html", (err, html_Asinc) => {
      if (err) throw err;
      // pasamos el archivo a string ya que és un archivo binario
      var html_string = html_Asinc.toString();
      var parametros = p(req);

      // mandamos el contenido
      res.write(r(html_string, parametros));
      console.log("Servidor corriendo en puerto localhost:3000");
      res.end();
    });
  })
  .listen(3000);
