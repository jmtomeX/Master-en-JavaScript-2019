$(document).ready(function () {
    var elemento = $('.elemento');
    // Mover elemento por la página
    elemento.draggable();

    // Redimensionar un elemento
    elemento.resizable();


    var lista_ul = $('.listaSeleccionable');
    // Seleccionar y ordenar elementos
    // Solo se puede usar uno selectable o sortable a la vez
    // $('.listaSeleccionable').selectable();

    /* lista_ul.sortable({
         update: function (event, ui) {
             console.log("Ha cambiado la lista ");
             // console.log($(this)[0].textContent);

         }
     });/*


     /*
     En este caso se numera cada li por medio de un span, luego se procede a guardar los li en un array en la variable listaInicial, seguidamente se llama al metodo "sortable" y se declara otro array de la lista ya actualizada. Por ultimo se recorren ambos arrays y se le asigna en este caso el numero correspondiente a cada li.
     */


    /* var listaInicial = $(".li").find('span');
     lista_ul.sortable({
         update: function () {
             var listaActualizada = $(this)[0].children;
             for (var i = 0; i < listaInicial.length; i++) {
                 for (var j = 0; j < listaActualizada.length; j++) {
                     if (listaActualizada[j] != listaInicial[i]) {
                         listaActualizada[j].lastChild.textContent = j + 1;
                     }
                 }
             }
             for (var i = 0; i < listaActualizada.length; i++) {
                 console.log(listaActualizada[i]);
             }

         }
     });*/



    /*
    Guardar las posiciones de un array
    Cuando tu usas con JQuery un selector para capturar un elemento del DOM, en la variable donde lo has guardado lo que se guarda es como un objeto HTML y dicho objeto tiene las caracteristicas que posea en el documento HTML.

    Si seleccionas la lista y le haces un console log verás que te devuelve un objeto con 3 elementos. El primero de ellos contiene todas las caracteristicas del ul y entre esas caracteristicas hay una que es children que no es otra cosa que un array de li. Pues si seleccionas dicho array y le sacas el texto que tienen cada uno de sus elementos y lo metes en un array que crees tu tienes el array con los valores ordenados.
    */
    console.log(lista_ul);
    lista_ul.sortable({
        update: function () {

            // Creamos un array
            var listaPosition = new Array();
            var element = "";
            // Si quisieras guardar los li ordenados
            var lista_li = lista_ul[0].children;
            // La recorres con un bucle y le sacas el valor y lo metes en el Array
            for (let i in lista_ul[0].children) {
                element = lista_ul[0].children[i].textContent;
                if (typeof element == 'string') {
                    listaPosition.push(element);
                }
            }
            console.log
            // Añadimos a un div las lista actualizada
            for (var i = 0; i < listaPosition.length; i++) {
                $('#juegos').append('<p>' + (i + 1) + ". " + listaPosition[i] + '</p>');
            }

        }
    });

    // Drop
    $('#elementoMovil').draggable();
    $('#area').droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area.")
        }
    });

    // Efectos 
    $('#mostrar').click(function () {
        // $('#caja_efectos').toggle("fade"); 
        // $('#caja_efectos').fadeOut("fade"); 
        // Es un método no nativo, está en jquery UI por lo que hay que meter un metodo intermedio
        // $('#caja_efectos').effect("explode"); 
        // Con toggle() tenemos los dos estados
        // $('#caja_efectos').toggle("explode"); 
        // $('#caja_efectos').toggle("blind", 5000); 
        // $('#caja_efectos').toggle("slide"); 
        // $('#caja_efectos').toggle("droop"); 
        // $('#caja_efectos').toggle("fold"); 
        // $('#caja_efectos').toggle("scale"); 
        $('#caja_efectos').toggle("shake", "fast");
        // $('#caja_efectos').toggle("shake", {} ,"fast"); 
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    // Al pasar por encima de la x, marca close porque tenemos activado el tooltip
    $('#lanza_popup').click(function () {
        $('#popup').dialog({
            autoOpen: true,
            height: 200,
            width: 450,
            modal: true
        });
    });

    // datepicker

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        duration: "slow"
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);

    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs({
        active: 0, // pestaña inicial

        // Al presionar trabajamos una función anónima
        /* activate: function (event, ui) {
             alert("Click sobre pestaña");
         }*/
        beforeActivate: function (event, ui) {
            alert("Antes de activo");
        }
       // beforeLoad: function( event, ui ) {}
    });


});
