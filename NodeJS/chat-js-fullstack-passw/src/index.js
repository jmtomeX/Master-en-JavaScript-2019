
// Código servidor
const http = require ('http');
const path = require('path');
const express = require ('express');
const socketio = require ('socket.io');

// mongoose para conectar con mongoDB
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);

// escucha en el servidor creado
const io = socketio.listen(server);

// db connection
//mongoose.connect('mongodb+srv://jose-59:twist23@chat-database-kqfk3.mongodb.net/test?retryWrites=true&w=majority')
//mongoose.connect('mongodb://jose-59:twist23@ds125183.mlab.com:25183/heroku_f64cv3pq')
mongoose.connect('mongodb://localhost/chat-database', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})
.then(db => console.log("Conectado a la base de datos"))
.catch(err => console.log(err))

// settings
// obtener el puerto si el servidor da un puerto se utiliza, si no usa el 3000
app.set('port', process.env.PORT || 3000);

// ejecutamos la función
require('./sockets')(io);
//console.log(path.join(__dirname, 'public'));
// con join evitamos las barras o contra barras en windows.
// enviando archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// escuchando el servidor
server.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
});