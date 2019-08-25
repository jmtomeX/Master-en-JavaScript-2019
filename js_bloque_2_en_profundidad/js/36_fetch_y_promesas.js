'use strict'
window.addEventListener('load', function () {
    
    // Ocultamos el div map del ejercicio 36_promesas
    document.querySelector("#map").style.display = "none";
    
        // un Api Rest es un servicio (JSONPlaceHolder(no da permisos), reqres.in/api(funciona)), nos devuelve datos en JSon en un backend
        // Instalar en el navegador Json view para ver los archivos json en formato de código en
        // en navegador

        // Fetch (Ajax) y peticiones a servicios / api rest

        var div_Janet = document.querySelector("#janet");
        var div_Usuarios = document.querySelector("#usuarios");

        getUsuarios()
            // capturamos los datos y lo convertimos a un objeto Json
            .then(data => data.json())
            // tenemos los datos recogidos en la variable data en usuarios[] los guardamos
            .then(users => {
                listadoUsuarios(users.data);
                // una vez que tenga el otro usuario
                return getJanet();
                // capturame los datos
            })
            // encadena otro método then
            .then(data => data.json())
            // devuelve el usuario, una vez que los tenga se meten en la variable user
            .then(user => {
                mostrarJanet(user.data);
            });

        function getUsuarios() {
            // Le damos la url en este caso de la api rest
            return fetch('https://reqres.in/api/users?page=2')

        }

        function getJanet() {
            // Le damos la url en este caso de la api rest
            return fetch('https://reqres.in/api/users/2')

        }



        function listadoUsuarios(usuarios) {
            usuarios.map((user, i) => {
                let datos_usuario = document.createElement("h2");

                datos_usuario.innerHTML = (i + 1) + ". " + user.first_name + " " + user.last_name + " - email: " + user.email;
                div_Usuarios.appendChild(datos_usuario);

                document.querySelector("#loading").style.display = "none";
            });
        }


        function mostrarJanet(user) {

            let nombre = document.createElement("h3");
            // creamos la imagen
            let avatar = document.createElement("img");
            nombre.innerHTML = user.first_name + " " + user.last_name + " - email: " + user.email;
            avatar.src = user.avatar;
            avatar.width = '100';   
            
            div_Janet.appendChild(nombre);
            div_Janet.appendChild(avatar);

            document.querySelector("#janet span").style.display = "none";
 }
    
     }); //load
