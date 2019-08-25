$(document).ready(function () {
    console.log("eventos.js cargado");

    // MouseOver y MouseOut
    var caja = $("#caja");
    console.log("El color es " + $("#caja").css("background"));

    caja.mouseover(function () {
        $(this).css("background", "red");

        // Nos devuelve el color de fondo
        console.log($(this).css("background"));
    });

    caja.mouseout(function () {
        $(this).css("background", "green");
    });

    var caja2 = $("#caja2");

    caja2.mouseout(function () {
        var dis = $(this);
        dis.css("background", "black");
        dis.css("color", "white");
    });

    function cambiaRojo() {
        $(this).css("background", "red");
    };

    function cambiaVerde() {
        $(this).css("background", "green");
    };

    // Hover
    $("#caja3").hover(cambiaRojo, cambiaVerde);

    // Click y doble cilck

    // Cambiar el ancho pedido al usuario
    $("#caja2").click(function () {
        $(this).css("width", function (index, value) {
            alert(value);
            var aumento = prompt("cuanto quieres aumentar?", "25");
            return (parseInt(value) + parseInt(aumento)) + "px";
        });
    });

    var caja4 = $("#caja4");
    caja4.click(function () {
        $(this).css("font-size", "2em")
    });

    caja4.dblclick(function () {
        $(this).css("font-size", "1em")
    });

    // Focus y blur

    // Cuando se entra en la caja
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function () {
        $(this).css("border", "2px solid green")
    });
    // cuando se sale de la caja
    nombre.blur(function () {
        $(this).css("border", "1px solid #ccc");
        // pasar el texto del input al div al salir del input
        datos.text($(this).val()).show();
    });

    // Mousedown y mouseup

    // Cuando presiono 
    datos.mousedown(function () {
        $(this).css("border-color", "grey")
    });
    // cuando suelto
    datos.mouseup(function () {
        $(this).css("border-color", "black")
    });

    // Mouse move

    $(document).mousemove(function () {
        var sigueme = $("#sigueme");
        
        // ocultamos el cursor
        $("body").css("cursor", "none");
        // saca las cordenadas por las que pasa el cursor del ratón
        //console.log("En X: " + event.clientX);
        //console.log("En Y: " + event.clientY);

        sigueme.css("left", event.clientX);
        sigueme.css("top", event.clientY);

    });

});
