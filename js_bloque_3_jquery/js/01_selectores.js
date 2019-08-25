// comprobamos que el selector esté listo
// el simbolo $ y la palabra jQuery es lo mismo, un objeto
$(document).ready(function () {

    // Selectores de ID

    var rojo = $("#rojo")
        .css("background", "red")
        .css("color", "white")
        .css("padding", "10px");

    var amarillo = $("#amarillo")
        .css("background", "yellow")
        .css("color", "green")
        .css("padding", "10px");

    var verde = $("#verde")
        .css("background", "green")
        .css("color", "white")
        .css("padding", "10px");

    // Selectores de clase

    var mi_clase = $(".cebra")
    console.log(mi_clase);
    console.log(mi_clase[0]);
    // el método .eq() hace lo mismo, selecciona un elemento de un array
    console.log(mi_clase.eq(1));

    mi_clase.css("border", "5px dashed black");

    $(".sin_borde").click(function () {
        console.log("Click dado!!!");
        $(this).addClass("linea_borde");
    });

    // Selectores de etiqueta

    // Cuando pase por encima aparecerá el cursor 
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function () {
        // creamos una variable this para acceder al DOM solo una vez
        // Si tiene la clase margenes se la quita si no se la pone
        var dis = $(this);
        if (dis.hasClass('margenes')) {
            dis.removeClass('margenes');
        } else {
            dis.addClass('margenes');

        }
        // una manera más rápida y eficaz para meter o quitar una clase, con el método "toggleClass" consigues que si no esta la clase la introduzca, y si lo está, la quita.

        // $(this).toggleClass("cebra");
    });

    // Selectores de atributo

    $('[title = "google"]').css('color', 'red');
    $('[title = "eltiempo"]').css('color', 'grey');

    // Otros

    $('a').addClass('tipo');
    // $('p, a').addClass('tipo');

    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda[0]);

    var busqueda2 = $("#caja .resaltado");
    console.log(busqueda2);

    // para salir un nivel por encima
    var busqueda3 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title = "google"]');
    console.log(busqueda3);
    
});
