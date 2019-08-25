$(document).ready(function () {
    // contar los enlaces que tenemos
    console.log("Hay " + $('a').length + " enlaces");
    reloadLinks();
    // Meter enlaces a través de un input
    $('#add_button')
        .removeAttr('disabled')
        .click(function () {
            // Añade elementos html pero machaca lo que ya está
            // $('#menu').html('<li><a href ="' + $('#add_link').val() + '"></a></li>');
            var add_link = $('#add_link');
            // Añade sin machacar 
            $('#menu').append('<li><a href ="' + add_link.val() + '"></a></li>');

            // ponemos en vacio el input enviar el link
            add_link.val('');

            // Añade al principio de la lista
            // $('#menu').prepend('<li><a href ="' + $('#add_link').val() + '"></a></li>');

            // before() lo añade fuera del elemento seleccionado
            // after() lo añade después del elemento seleccionado
            // en este caso fuera de la lista
            // $('#menu').before('<li><a href ="' + $('#add_link').val() + '"></a></li>');
            // $('#menu').after('<li><a href ="' + $('#add_link').val() + '"></a></li>');
            reloadLinks();
        });
});

function reloadLinks() {
    // recorrer los elementos
    $('a').each(function (index) {
        var dis = $(this);
        console.log(dis);

        // attr recoge el texto que hay dentro del atributo
        var enlace = dis.attr("href");

        // añadir atributos con attr
        dis.attr('target', '_blank');


        // sacarlo por pantalla 
        dis.text(enlace);
    });
}
