// Archivo encargado de aceptar la conexión de web socket, reenviar y recibir eventos, lo exportamos para poder usarlo en index.js
const Chat = require('./models/Chat');
module.exports = function(io) {

  let users = {};
  io.on("connection",async socket => {
    console.log("Nuevo usuario conectado");

    // busca todos los mensajes /// limite de mensajes a mostrar
    let messages = await Chat.find({}).limit(10);
    // carga los mensajes anteriores
    socket.emit('load old msgs', messages)
    socket.on("new user", (data, callback) => {
      console.log(data)
      if (data in users) {
        callback(false);
      } else {
        callback(true);
        // nickname es una propiedad nueva que creamos de socket
        socket.nickname = data;
        // cada usuario va a tener la información completa del socket
        users[socket.nickname] = socket;
        updateNickNames();
      }
    });

    // Cliente envia datos, callback para mostrar errores(si no está el usuario al que va dirigido el msg)
    socket.on("send message", async (data, callback) => {
      var newDate = new Date();
      // quitar espacios en blanco en los extremos
      var msg = data.trim();
      /*
          w mensaje privado name destinatario nombre y msg
          "/w name mensaje"
          */
      if (msg.substr(0, 3) === "/w ") {
        // el msg ahora empiza después del 3 caracter
        msg = msg.substr(3);
        //determinar donde está el espacio en blanco
        const index = msg.indexOf(" ");
        console.log(index)
        // si hay texto
        if (index != -1) {
          // recogemos name
          var name = msg.substring(0, index);
          // recogemos msg
          var msg = msg.substring(index + 1);
          // comprobar si el name está dentro del array de usuario
          if (name in users) {
            users[name].emit("whisper", {
              msg, // esto  en js es igual s msg:msg
              nick: socket.nickname,
              // day: newDate.toLocaleDateString(),
              // time: newDate.toLocaleTimeString()
            });
          } else {
            // si no está el usuario mandamos un callback
            callback("Error ingresa un usuario validado.");
          }
        } else {
          callback("Error ingresa el mensaje");
        }
      } else {
        var newMsg = new Chat({
          msg,
          nick: socket.nickname
        });
        await newMsg.save();

        // servidor reenvia los datos a todos o a uno solamente
        io.sockets.emit("new message", {
          msg: data,
          nick: socket.nickname,
          //day: newDate.toLocaleDateString(),
          //time: newDate.toLocaleTimeString()
        });
      }
    });

    socket.on("disconnect", function(data) {
      // si socket no tiene el valor nickname retorna
      if (!socket.nickname) return;
      // socket que se está desconectando
      delete users[socket.nickname];
      updateNickNames();
    });

    function updateNickNames() {
      // obtener las claves de los objetos con keys
      io.sockets.emit("usernames", Object.keys(users));
    }
  });
};
