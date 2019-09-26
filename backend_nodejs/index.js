"use strict";
// importar módulo de moongose
const mongoose = require("mongoose");
const app = require('./app');
const port = 3700;
//conexión a la bbdd
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/portafolio")
  .then(() => {
    console.log("Conexión a la base de datos establecida con exito...");
    // creación del servidor
    app.listen(port, () => {
        console.log("Servidor corriendo correctamente en la url: localhost:" + port);
    });

  })
  .catch(err => console.log(err));

