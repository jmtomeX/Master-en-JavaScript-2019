'use strict'

//While

var year = 2018;

while (year != 1990) {
    console.log("EStamos en el año " + year);
    
    if(year == 2015){
        break;
       }
    
    year--;
}

//Do while

var years = 15;

do{
    alert("Solo cuando sea diferente a 20");
    document.write(years+"</br>");
    years++;
}while(years != 20)
