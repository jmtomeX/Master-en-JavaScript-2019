//cargar el modulo de express, express es un método de node
var express = require('express');
// llamar a express
var app = express();
//cargar el servidor http
var server = require('http').Server(app);
// le pasamos el servidor se la pasamos a socket.io para que entienda que va a estar trabajando con sockets dentro de la conexión http
var io = require('socket.io')(server);
//creamos un servidor con express

// cargar una vista estática, todos los html que tenga la carpeta public
app.use(express.static('client'));

//ruta para comprobar que va corriendo
app.get('/hola-mundo', function(req,res) {
    res.status(200).send('Hola mundo desde una ruta')
});

// array para guardar los mensajes
var messages = [{
    id:1,
    text:'Bienvenido al chat privado de Socket.io y Node Js',
    nickname: "José Mari"
}];
// Abrir una conexión al socket
// método on premite lanzar eventos
// Recibe las conexiones
io.on('connection', function(socket) {
    
    console.log("El nodo con IP:" + socket.handshake.address + " se ha conectado");
    // emite los mensajes al cliente
    socket.emit('messages', messages);

    // recoger el evento para poder emitir el mensaje a todos los clientes conectados
    socket.on('add-message',function(data){
        // guardar el mensaje recibido de forma temporal en el array
        messages.push(data);

        // emitir mensajes a los clientes conectados de nuevo
        io.sockets.emit('messages', messages);
    })
});


server.listen(6677, function() {
    console.log('El servidor está funcionando en http://localhost:6677');
});
