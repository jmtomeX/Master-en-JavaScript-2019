$(document).ready(function () {

    //ajax
    // el método bind() es el equivalente a addEventListener de js
    $('#sobre_mi').bind('click', traerDatos);
    $('#informatica').bind('click', traerDatos);
    $('#electricidad').bind('click', traerDatos);
    $('#prl').bind('click', traerDatos);
    $('#experiencia').bind('click', traerDatos);

    // Método para recuperar los datos y escribirlo en pantalla
    function traerDatos(evento) {
        var cajaPosts = document.querySelector('#posts');
        var evento_boton = evento.target.id;

        console.log(evento_boton);
        var xhttp = new XMLHttpRequest();
        var rama = "";
        var exp = false;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                /* document.getElementById("mostrar_todo").innerHTML =
                     this.responseText;*/

                let datos = JSON.parse(this.responseText);

                let evento = evento_boton.toUpperCase();
                cajaPosts.innerHTML = `<h1>${evento}</h1>`;

                // variable para sumar las horas
                var horas_totales = 0;
                for (let item of datos) {

                    // ordenar por año y alfabéticamente
                    ordenarAlfAnno(datos);

                    rama = item.rama;
                    if (rama == evento_boton) {

                        cajaPosts.innerHTML += `
                                    <article class="post">
                                    <h2>${item.nombre}</h2>
                                    <span>Cursado en ${item.anno}</span><br>
                                    <span>${item.horas} horas</span>
                                    <span class="date">${item.estudios}</span>
                                    </article>
                                    `
                        // en vez de usar innerHTML se usa .html()
                        // cuenta las horas totales de cada rama
                        horas_totales += parseInt(item.horas);
                       
                        // Si el año no es un número se le resta 1000
                        if(isNaN(item.anno)) {
                          horas_totales -= 1000;
                          }
                        
                        $("#horas_total").html(`<h2>Horas totales ${horas_totales}</h2>`);
                    } else if ("experiencia" == evento_boton) {

                        cajaPosts.innerHTML += `
                                    <article class="post">
                                    <h2>${item.empresa}</h2>
                                    <span><b>Categoria</b> ${item.categoria}</span><br>
                                    <span><b>Funciones realizadas </b>${item.tareas} </span>
                                    <span class="date">${item.fecha}</span>
                                    </article>
                                    `
                        $("#horas_total").html("");
                    }
                }
            }
        };

        if ("experiencia" == evento_boton) {
            // comprobamos que existe el archivo
            console.log(existeUrl("js/experiencia.json"));

            xhttp.open("GET", "js/experiencia.json", true);
            xhttp.send();
        } else {
            // comprobamos que existe el archivo
            console.log(existeUrl("js/formacion.json"));

            xhttp.open("GET", "js/formacion.json", true);
            xhttp.send();
        }


    }

    // Ordenar por año
    function ordenarAlfAnno(array) {
        array.sort();
        array.sort(function (a, b) {
            return (b.anno - a.anno)
        });

        array.sort(function (a, b) {
            if (a.estudios > b.estudios) {
                return 1;
            }
            if (a.estudios < b.estudios) {
                return -1;
            }
            // si son iguales
            return 0;
        });
    }

    // Método para comprobar si exite el archivo
    function existeUrl(url) {
        var http = new XMLHttpRequest();
        http.open('GET', url, false);
        http.send();
        if (http.status != 404) {
            return "El archivo existe --> " + url;
        }
        return "El archivo no existe";
    }

});
