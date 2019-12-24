// Archivo encargado de aceptar la conexión de web socket, reenviar y recibir eventos, lo exportamos para poder usarlo en index.js
module.exports = function(io) {
  let nickNames = ["peep"];
  io.on("connection", socket => {
    console.log("Nuevo usuario conectado");

    socket.on("new user", (data, callback) => {
      if (nickNames.indexOf(data) != -1) {
        callback(false);
      } else {
        callback(true);
        // nickname es una propiedad nueva que creamos de socket
        socket.nickname = data;
        nickNames.push(socket.nickname);
        appendNickNames();
      }
    });

      // Cliente envia datos
      socket.on("send message", function(data) {
        // servidor reenvia los datos a todos
        io.sockets.emit("new message", {
          msg: data,
          nick: socket.nickname,
          day: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        });
      });


    socket.on("disconnect", function(data) {
      // si socket no tiene el valor nickname retorna
      if (!socket.nickname) return;

      nickNames.splice(nickNames.indexOf(socket.nickname), 1);
      appendNickNames();
    });

    function appendNickNames() {
      //socket.emit('usernames', nickNames);
      io.sockets.emit('usernames', nickNames);

    }
  });
};
