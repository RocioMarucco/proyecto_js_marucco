/* El proyecto será el sitio web de un campo de lavanda. Tendrá la opción de comprar productos online y poder 
reservar turnos para picnics en el lugar*/


//***** PRE ENTREGA 1

let flag = 0;


    while (flag==0){
    let opcion = prompt("**** TIENDA ONLINE ****\n Qué precio desea conocer? \n1- Aceite esencial de lavanda \n2- Vela perfumada \n3- Ramo de flores secas");

    if(opcion == "1"){
    alert("El precio del Aceite esencial de lavanda por 100 ml es $500");
    }else if(opcion == "2"){
    alert("El precio de la Vela perfumada es $800");
    }else if(opcion == "3"){
    alert("El precio del Ramo de flores secas es $700");
    }else{
    alert ("Error en la opcion!");
    
}

if ((opcion == "1") || (opcion == "2") || (opcion == "3")){
let cantProd = parseInt(prompt("Ingresa la cantidad de unidades que deseás comprar"));

function calcularPrecioFinal (){
    
    if (opcion == "1"){
        return alert ("El precio por " + cantProd + " gotero/s de Aceite Esencial de Lavanda es $" +(cantProd * 500));
    }else if(opcion == "2"){
        return alert ("El precio por " + cantProd + " Vela/s perfumada/s es $" +(cantProd * 800));;
    }else if(opcion == "3"){
        return alert ("El precio por " + cantProd + " Ramo/s de Flores secas es $" +(cantProd * 700));;
    }else{
        alert("Error en la opcion! Recargá la página para volver a empezar");
    }
    
}

calcularPrecioFinal ();
}
flag = parseInt (prompt ("Presione 0 para seguir comprando o cualquier otro número para salir"));

}
