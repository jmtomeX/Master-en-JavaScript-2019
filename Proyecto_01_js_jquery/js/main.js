$(document).ready(function () {

    // Comprobamos en que página estamos para cargar  funciones como slider
    //comprobamos si existe index
    if (window.location.href.indexOf('index') > -1) {

        // Slide bxSlider --------------------------
        $('.galeria').bxSlider({
            mode: 'fade',
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            captions: false,
            slideWidth: 1000,
            slideHeigth: 600,
            randomStart: true,
            captions: true,
            keyboardEnabled: true
        });
    }

    if (window.location.href.indexOf('index') > -1) {
        // ajax -------------------------------------
        // posts
        // Libreria moment.js Para trabajar con fechas
        var posts = [
            {
                titulo: "Prueba de título 1",
                fecha: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                contenido: "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        },
            {
                titulo: "Prueba de título 2",
                fecha: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                contenido: "Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
            {
                titulo: "Prueba de título 3",
                fecha: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                contenido: "Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
            {
                titulo: "Prueba de título 4",
                fecha: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                contenido: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]
        posts.forEach((elemento, index) => {
            var post = `
            <article class="post">

<h2>${elemento.titulo}</h2>
<span class="date">${elemento.fecha}</span>
<p>
${elemento.contenido}
</p>

<a href="#!" class = "button-more">Leer más</a>
</article>
`;
            $("#posts").append(post);
        });

    }
    
    // Selector tema -----------------------

    var theme = $("#theme"); // Id del link al archivo css que se le cambia el atributo

    $("#to-black").click(function () {
        theme.attr("href", "css/black.css");
        localStorage.setItem("Tema CSS", "css/black.css");

    });

    $("#to-mint").click(function () {
        theme.attr("href", "css/mint.css");
        localStorage.setItem("Tema CSS", "css/mint.css");

    });

    // Comprobamos si hay algo guardado en localStore
    if (localStorage.getItem("Tema CSS")) {
        var storage = localStorage.getItem("Tema CSS");
        theme.attr('href', storage);
    } else {
        theme.attr('href', 'css/mint.css');
    }

    // Scroll arriba de la web --------------

    $(".subir").click(function (e) {
        // para que el link no redirija
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 //sube hasta el pixel 0
        }, 1500, function () {
            // Animation complete.
        });

        return false;
    });

    // Login falso ---------------------------

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

        var hora = moment().format('LTS');
        localStorage.setItem("Hora entrada", hora);
    });

    // Recogemos el valor del localStorage
    var form_nam = localStorage.getItem("form_name");
    var entrada = localStorage.getItem("Hora entrada");
    var caja_mostrar_nombre = $("#local_storage h3");

    if (form_nam != null && form_nam != "undefined") {
        if (form_nam != "") {
            caja_mostrar_nombre.html("Bienvenido <br>" + form_nam);
            caja_mostrar_nombre.append("<small id='emailHelp' class='form-text text-muted'>Inicio de sesión a las " + entrada + "</small>")
            caja_mostrar_nombre.append("<a href='#' id='logout' class='button-more'>Cerrar sesión</a>")

            // oculatamos el formulario
            $("#login form").hide();
        }

        // borrar el localStorage -------------
        $("#logout").click(function () {
            localStorage.clear();
            // actualizar pantalla
            location.reload();
        });
    }

    //Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('LTS');

            $('#reloj').html(reloj);
        }, 1000);
    };

    if (window.location.href.indexOf('contact') > -1) {
        // datepicker
        //var now = moment().format("YYYY");
        // console.log(now);

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
            duration: "slow",
            changeYear: true,
            // la segunda fecha si se deja vacia coge la actual
            yearRange: "1965:"
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);

        $("#calendario").datepicker();

        // Validación formulario contacto

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError:true
        });

        // ocultar btn_localStr
        $("#btn_localStr").hide();
        $("#mostrar_todo").css("margin-top", "150px");
    };
});
