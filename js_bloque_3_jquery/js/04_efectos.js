$(document).ready(function () {
    var estado = 1;
    var caja = $("#caja");
    $("#mostrar").hide();

    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show();
        //$("#caja").show('fast'); // le da display none
        //$("#caja").fadeIn(); // fundido
        // $("#caja").fadeTo('slow', 1); // 0 se oculte a 1 se muestra
        // slideUp() para ocultar
        caja.slideDown('slow'); // 0 se oculte a 1 se muestra
        estado = 1;
    });

    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        //$("#caja").hide('slow');
        
        // slideDown() para mostrar
        // se le puede añadir una función de callback que cuando acabe la animación ejecute la función
        caja.slideUp('slow', function() {
            console.log("Cartel oculto.")
        });
        estado = 0;
    });

    $('#abrir').click(function () {

        // distintos efectos
        // $('#caja').toggle('fast');
        // $('#caja').fadeToggle('fast');
        caja.slideToggle('fast');

        if (estado == 1) {
            $('#mostrar').show();
            $('#ocultar').hide();
            estado = 0;
        } else {
            $('#ocultar').show();
            $('#mostrar').hide();
            estado = 1;
        }
        console.log(estado);
    });

    // Animaciones
    var onOff = 0;
    $('#animame').click(function () {

        if (onOff == 0) {
            caja.animate({
                    fontSize: '2em',
                    height: '100px',
                    width: '200px',
                    marginLeft: '400px'
                }, 'slow')
                .animate({
                    borderRadius: '900px',
                    marginTop: '50px'
                }, 'fast');
            onOff = 1;
        } else {
            caja.animate({
                    fontSize: '1em',
                    height: '50px',
                    marginLeft: '0px'
                }, 'slow')
                .animate({
                    borderRadius: '0px',
                    marginTop: '20px'
                }, 'fast');
            onOff = 0;
        }
    });

});
