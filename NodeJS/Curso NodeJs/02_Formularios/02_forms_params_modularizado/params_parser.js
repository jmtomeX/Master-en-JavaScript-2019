// archivo encargado de leer los parametros
function parse(req) {
  var array_params = [];
  var params = {};

  // obtener los parametros de la url que vienen del formulario
  if (req.url.indexOf("?") > 0) {
    // /?nombre = jose mari
    var url_data = req.url.split("?");
    array_params = url_data[1].split("&");
    // [nombre = jose mari, data = valor]
  }

  // recorrer los parametros de la url
  for (var i = 0; i < array_params.length; i++) {
    var parametro = array_params[i];
    // separar la key del parámetro
    var param_data = parametro.split("=");
    // [nombre, jose mari]
    params[param_data[0]] = param_data[1];
    // {nombre: jose mari}
  }

  return params;
}

module.exports.parse = parse;
