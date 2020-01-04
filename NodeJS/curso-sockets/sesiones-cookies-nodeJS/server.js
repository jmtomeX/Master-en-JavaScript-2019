// lógica del servidor

const express = require('express');
const session = require('express-session');
// recibe como segundo paámetro el módulo session
const MongoStore = require('./node_modules/connect-mongo')(session);

// conexión a MongoDB, persistir las sesiones
const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';

// declaramos la aplicación
const app = express();

// que utilice el middleware session
app.use(session({
    //encrypta los id
    secret:'ESTO ES SECRETO',
    // fuerza por cada llamada al servidor guardar en la base de datos tenga cambios o no
    resave:true,
    // guarda el objeto vacio, si se marca como false no guarda el objeto a no ser de que el objeto tenga propiedads
    saveUninitialized:true,
    // que utilice el store de mongodb
    store:new MongoStore({
        url: MONGO_URL,
        autoReconnect:true
    })
}))

// declaramos la primera ruta de la aplicación (home)
app.get('/', (req, res) => {
    // en el caso de que la cuenta  exista le añadimos 1, si no la inicializamos en 1, 
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
    res.send(`Hola! Has visto esta página : ${req.session.cuenta}`)
});
// que escuche en el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});