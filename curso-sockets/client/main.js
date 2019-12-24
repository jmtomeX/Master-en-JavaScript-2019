
// detección que hay se a conectado a nuestro servidor
var socket = io.connect('http://192.168.1.128:6677', {
  'forceNew': true
});

// recoge el mensaje
socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

// Pintar array de messages
function render(data) {
  var html = data.map(function(message, index){
    return (`
    <div class="col s12 m8 offset-m2 l6 offset-l3">
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <div class="col s2">
          <img src="./img/user.png" alt="" class="circle responsive-img">
        </div>
        <div class="col s10">
          <span class="black-text">
          <b>${message.nickname}</b>
          <p>${message.text}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
    `);

  }).join(' ');
  var div_msg = document.getElementById("messages");
  div_msg.innerHTML = html;
  div_msg.scrollTop = div_msg.scrollHeight;
}

function addMessage(e) {
  // recoger mensaje
  console.log(document.getElementById("user").value);
  var message = {
    nickname: document.getElementById("user").value,
    text: document.getElementById("message_user").value
  };
  console.log(message.nickname);
  // no cambiar el nombre de usuario
  document.getElementById("nickname").style.display = "none";
  // recoge el evento el socket en el servidor
  socket.emit('add-message', message);
  // cortar la ejecución
  console.log("enviado mensaje")
  return false;
}

