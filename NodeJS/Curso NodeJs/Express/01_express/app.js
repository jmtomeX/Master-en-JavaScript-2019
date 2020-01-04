var express = require('express');

var app = express();

app.set("view engine", "pug");

// acceder a la ruta
app.get("/", (req, res) => {
    //res.send("Hola mundo");
   res.render('index', {
       saludo_app: "Hola usuario"
   });
 
});

// inicilizar el servidor
app.listen(3000);