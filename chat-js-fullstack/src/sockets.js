
// Archivo encargado de aceptar la conexión de web socket, reenviar y recibir eventos, lo exportamos para poder usarlo en index.js
module.exports = function (io) {
    io.on('connection', socket => {
        console.log("Nuevo usuario conectado");

        // Cliente envia datos 
        socket.on('send message', function (data){
            // servido reenvia los datos a todos 
            io.sockets.emit('new message', data);
        })
    });
}