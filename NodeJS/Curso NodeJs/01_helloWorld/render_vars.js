var http = require("http");
// sistema que se encarga de comunicase con el sistema de archivos del pc
var fs = require("fs");

// forma sincrona
// var html = fs.readFileSync('./index.html');
http
  .createServer((req, res) => {
    // forma asincrona
    var html_Asinc = fs.readFile("./index.html", (err, html_Asinc) => {
      if (err) throw err;
      // pasamos el archivo a string ya que és un archivo binario
      var html_string = html_Asinc.toString();

      // patrón que busca el valor entre llaves {valor}
      var variables = html_string.match(/[^\{\}]+(?=\})/g);
      console.log(variables);

      var name = "jose mari";
      var surname = "Tomé";

      for (var i = 0; i < variables.length; i++) {
          // ejecutamos como códdigo de js para recoger la variable
        var value = eval(variables[i]);
        // reemplazar el valor
        html_string = html_string.replace("{" + variables[i] + "}", value);
      }

      res.writeHead(200, {
        "Content-Type": "application/html"
      });
      // mandamos el contenido
      res.write(html_string);

      res.end();
    });
  })
  .listen(3000);
