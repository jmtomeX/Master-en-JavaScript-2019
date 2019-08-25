/*
En términos más generales, AJAX es una forma de recuperar asincrónicamente información de un server.
JSON es una forma de formatear datos 
*/

$(document).ready(function () {
    // Load
    // $('#datos').load('https://reqres.in/');

    // GEt y POST
    
    var numUser = 0;
    // Como segundo parámetro le podemos pasar un json con el numero de la página por ejemplo   
    // como tercer párametro una función de callback donde recoge el resultado y trabaja con el.
    $.get("https://reqres.in/api/users", {
        page: 3
    }, function (response) {
        response.data.forEach((element, index) => {
            $('#datos').append("<p>" + (index + 1) + ". " + element.first_name + " " + element.last_name + "</p>");
            console.log("Index  = " + index);
            numUser ++;
            console.log("numUser = " + numUser);
        });
    });

    // 1º posivilidad para que no me redirija a la página del action
    $('#formulario').submit(function (e) {
        // capturamos el evento y le pedimos que no redirija
        e.preventDefault();

        var usuario = {
            nombre: $('input[name = "name"]').val(),
            web: $('input[name = "web"]').val()
        };
        // datos recogidos del formulario
        console.log(usuario);

        /*
        // Coge la url del formulario metida en el parámetro action
        $.post($(this).attr('action'),
            usuario,
            function (response) {
                // datos de la respuesta
                console.log(response);
                // done() Devolución de llamada de éxito 
            }).done(function () {
            alert("Usuario añadido satisfactoriamente");
        });*/

        // Otra forma de hacer peticiones ajax
        $.ajax({
            // Tipo de petición que se va a hacer
            type: 'POST',
            /* Estas dos propiedaes no harían falta
            // datos que se van a recibir o enviar
            dataType: 'json',
            // En que formato viajan los datos
            contentType: 'application/',
            */
            // la url a la que se le hace la petición
            url: $(this).attr('action'),
            // el objeto que se va enviar
            data: usuario,
            // antes de que se envie haga una acción con un callback
            beforeSend: function () {
                console.log("Enviando usuario...");
            },
            // En el caso de que vaya todo correcto
            success: function (response) {
                console.log(response);
                // Añade el usuario de los input
                $('#datos').append("<p>" + (numUser + 1) + ". " + response.nombre + "\n </p>");
                numUser++;
            },
            error: function () {
                console.log("Ha ocurrido un error");
            },
            // si tarda más de 2" sucedería un error y mostraría el mensaje de error
            timeout: 2000
        });
        // 2º posivilidad para que no me redirija a la página del action
        return false;
    });

});
