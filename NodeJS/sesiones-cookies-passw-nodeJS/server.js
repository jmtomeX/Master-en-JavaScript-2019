// lógica del servidor

const express = require('express');
const session = require('express-session');
// recibe como segundo paámetro el módulo session
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

//npm i --save body-parser
const bodyParser = require('body-parser');
const passport = require("passport");
// configuración passport
const passportConfig = require('./config/passport');



// conexión a MongoDB, persistir las sesiones
const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';

// declaramos la aplicación
const app = express();

// configurar mongoose
// configurar las promesas que va a utilizar, las mismas que las de nodejs
mongoose.Promise = global.Promise;
// que se conecte a mongo
mongoose.connect(MONGO_URL,
    { useNewUrlParser: true,
        useUnifiedTopology: true 
    
    });
// que hace cuando se conecte
mongoose.connection.on('error', (err)=> {
    throw err;
    // paramos el proceso si hay errores
    process.exit(1);
});

// Prueba de usuario
/*

const Usuario = require('./models/Usuario');
const user1 = new Usuario ({
    email: 'iremti2@gmail.com',
    password: '123456',
    name: 'Jose Mari'
})
// el método save devuelve una promesa
user1.save()
.then( () => {
    console.log('Usuario guardado')
})
.catch((e) => {
    console.log(e);

})
*/
// que utilice el middleware session
app.use(session({
    //encrypta los id
    secret:'ESTO ES SECRETO',
    // fuerza por cada llamada al servidor guardar en la base de datos tenga cambios o no
    resave:true,
    // guarda el objeto vacio, si se marca como false no guarda el objeto a no ser de que el objeto tenga propiedades
    saveUninitialized:true,
    // que utilice el store de mongodb
    store:new MongoStore({
        url: MONGO_URL,
        autoReconnect:true
    })
}));

// configuración passport
app.use(passport.initialize());
app.use(passport.session());

//codificación a json
app.use(bodyParser.json());
// la información que llega del formulario viene codificada en el cuerpo de la llamda y url enconde
//la transforma json para poder leerla de una forma má sencilla
// En desuso -> ERROR -> body-parser deprecated undefined extended: provide extended option node_modules\express\lib\router\layer.js:95:5
//app.use(bodyParser.urlencoded);
app.use (bodyParser.urlencoded ({extended: true}));

// declaramos la primera ruta de la aplicación (home)
// app.get('/', (req, res) => {
//     // en el caso de que la cuenta  exista le añadimos 1, si no la inicializamos en 1, 
//     req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
//     res.send(`Hola! Has visto esta página : ${req.session.cuenta}`)
// });

// importamos al controlador usuario
const controladorUsuario = require('./controllers/usuario');

// crear las rutas
// registrar un usuario
app.post('/signup', controladorUsuario.postSignup);
// login
app.post('/login', controladorUsuario.postLogin);
// 
app.get('/logout', passportConfig.estaAutenticado, controladorUsuario.logout);
// retorna la info del usuario
app.get('/usuarioInfo', passportConfig.estaAutenticado, (req, res)=> {
    // user lo agrega de esta forma
    res.json(req.user);
});

// que escuche en el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});