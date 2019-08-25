'use strict'

let promesa = new Promise((resolve, reject) =>{
   if(true){
       resolve("La operación fue un exito")
   } else {
       reject("Ocurrio un error");
   }
});

promesa
.then((response) => {
    console.log("Response: ", response);
})
.catch((error) => {
    console.log("Error: ", error)
})