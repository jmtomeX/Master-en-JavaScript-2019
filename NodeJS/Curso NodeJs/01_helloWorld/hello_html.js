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
      // cabeceras, ver cabeceras en consola --> $ curl -I localhost:3000
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      //res.write(html_Asinc);
      // pasamos a string el json
      res.write(
        JSON.stringify({
          nombre: "jose mari",
          username: "jm"
        })
      );
      res.end();
    });
  })
  .listen(3000);
