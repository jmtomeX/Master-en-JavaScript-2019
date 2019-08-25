var bicicleta = {
  color: "Rojo",
    modelo: "Bmx",
    frenos: "Discos",
    velocidadMaxima: "60km",
    
    cambiaColor: function(nuevo_color) {
        //bicicleta.color = nuevo_color;
        this.color = nuevo_color;
    }
};
console.log(bicicleta);
bicicleta.cambiaColor("Azul");
console.log(bicicleta.color);