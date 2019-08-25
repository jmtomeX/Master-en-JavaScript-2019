'use strict'
window.addEventListener('load', function () {

    // Ocultamos el div map del ejercicio 36_promesas
    document.querySelector("#map").style.display = "none";

    // un Api Rest es un servicio (JSONPlaceHolder(no da permisos), reqres.in/api(funciona)), nos devuelve datos en JSon en un backend
    // Instalar en el navegador Json view para ver los archivos json en formato de código en
    // en navegador

    // Fetch (Ajax) y peticiones a servicios / api rest

    var div_Usuarios = document.querySelector("#usuarios");
    var div_Profesor = document.querySelector("#profesor");
    var div_Janet = document.querySelector("#janet");


    getUsuarios()
        // capturamos los datos y lo convertimos a un objeto Json
        .then(data => data.json()) // devuelve una promesa
        // capturamos los datos
        .then(users => {
            listadoUsuarios(users.data);
            // una vez que tenga el otro usuario

            return getInfo();
            // capturame los datos
        })

        // encadena otro método then
        .then(data => {
            div_Profesor.innerHTML = data;
            // ejecutamos otro fetch que es otra promesa
            return getJanet();
        })

        // encadena otro método then
        .then(data => data.json())
        // devuelve el usuario, una vez que los tenga se meten en la variable user
        .then(user => {
            mostrarJanet(user.data);
        })
    .catch(error => {
        alert("Error en las peticiones");
    });

    // FUNCIONES

    function getUsuarios() {
        // Le damos la url en este caso de la api rest
        return fetch('https://reqres.in/api/users?page=2')

    }

    function getJanet() {
        // Le damos la url en este caso de la api rest
        return fetch('https://reqres.in/api/users/2')

    }

    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellido: 'Robles',
            url: 'https://virctorrobles.es'
        };

        return new Promise((resolve, reject) => {
            // convertimos el objeto a un JSON.String
            var profesor_String = "";
            setTimeout(function () {
                profesor_String = JSON.stringify(profesor);
                if (typeof profesor_String != 'string' || profesor_String == "")
                    return reject('Error 1');
                // si es de tipo string lo mostrará
                return resolve(profesor_String);
            }, 3000);


        });
    }



    function listadoUsuarios(usuarios) {
        // Le damos 3 segundos para cargar
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
