function render(html_string, parametros) {
  // patrón que busca el valor entre llaves {valor}
  var variables = html_string.match(/[^\{\}]+(?=\})/g);
  //console.log(variables);

  for (var i = 0; i < variables.length; i++) {
    // ejecutamos como códdigo de js para recoger la variable
    var variable = variables[i];

    // reemplazar el valor
    html_string = html_string.replace(
      "{" + variables[i] + "}",
      parametros[variable]
    );
  }

  return html_string;
}

module.exports.render = render;
