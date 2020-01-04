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
      /*if (req.url.indexOf("favicon.ico") > 0) {
        return;
      }*/

     // console.log("=================================\n\n");
     // console.log(req);
     // console.log("=================================\n\n");

      // pasamos el archivo a string ya que és un archivo binario
      var html_string = html_Asinc.toString();
      var array_params = [];
      // patrón que busca el valor entre llaves {valor}
      var variables = html_string.match(/[^\{\}]+(?=\})/g);
      //console.log(variables);

      // obtener los parametros de la url que vienen del formulario
      if (req.url.indexOf("?") > 0) {
        // /?nombre = jose mari
        var url_data = req.url.split('?');
        array_params = url_data[1].split("&");
        // [nombre = jose mari, data = valor]
      }

      // recorrer los parametros de la url
      for(var i = 0; i < array_params.length; i++){
        var parametro = array_params[i];
        // separar la key del parámetro
        var param_data = parametro.split("=");
        // [nombre, jose mari]
       array_params[param_data[0]] = param_data[1];
       // {nombre: jose mari}
      }


      for (var i = 0; i < variables.length; i++) {
        // ejecutamos como códdigo de js para recoger la variable
        var variable = variables[i];
        console.log(i + ". " + variables[i])
        console.log(array_params[variable])
        
        // reemplazar el valor
        html_string = html_string.replace("{" + variables[i] + "}", array_params[variable]);
      }


      // mandamos el contenido
      res.write(html_string);
      console.log("Servidor corriendo en puerto 3000")
      res.end();
    });
  })
  .listen(3000);
