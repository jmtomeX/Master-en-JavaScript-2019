'use strict'
// un Api Rest es un servicio (JSONPlaceHolder(no da permisos), reqres.in/api(funciona)), nos devuelve datos en JSon en un backend
// Instalar en el navegador Json view para ver los archivos json en formato de código en
// en navegador

// Fetch (Ajax) y peticiones a servicios / api rest

var div_Usuarios = document.querySelector("#usuarios");
var usuarios = [];
// Le damos la url en este caso de la api rest
fetch('https://reqres.in/api/users?page=2')
    // capturamos los datos y lo convertimos a un objeto Json
    .then(data => data.json())
    // tenemos los datos recogidos en la variable data en usuarios[] los guardamos
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let datos_usuario = document.createElement("h2");

            datos_usuario.innerHTML = (i + 1) + ". " + user.first_name + " " + user.last_name + " - email: " + user.email;
            div_Usuarios.appendChild(datos_usuario);

            document.querySelector("#loading").style.display = "none";

            // Se puede hacer con un for o map()   
            /*for(var i = 0; i<usuarios.length; i++) {
                    let nombre = document.createElement("h2");
                    
                    nombre.innerHTML = (i+1) + ". " + usuarios[i].first_name + " " +  usuarios[i].last_name + " - email: " + usuarios[i].email;
                    div_Usuarios.appendChild(nombre);
                
                }*/
        });

    });
