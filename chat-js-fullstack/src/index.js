
// Código servidor
const http = require ('http');
const path = require('path');
const express = require ('express');
const socketio = require ('socket.io');

const app = express();
const server = http.createServer(app);

// escucha en el servidor creado
const io = socketio.listen(server);

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