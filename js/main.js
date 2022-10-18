/* El proyecto será el sitio web de un campo de lavanda. Tendrá la opción de comprar productos online y poder 
reservar turnos para picnics en el lugar*/


//***** PRE ENTREGA 1
/*
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

*/


// *****PRE ENTREGA DOS

const carrito = [];
class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto0 = new Producto(0, "Aceite esencial de lavanda", 500, 10);
const producto1 = new Producto(1, "Vela perfumada", 800, 25);
const producto2 = new Producto(2, "Ramo de flores secas", 700, 20);
const producto3 = new Producto(3, "Jabon tocador de lavanda", 200, 30);
const producto4 = new Producto(4, "Bombas aromaticas", 600, 15);

const productos = [producto0, producto1, producto2, producto3, producto4];


let mensajePantalla = "***LAVANDAR ELIO - LISTA DE PRODUCTOS*** \n Indique el número de producto que desea comprar \n"

for (producto of productos){
    mensajePantalla += `${producto.id} - ${producto.nombre} - $ ${producto.precio} \n`

}

let opcionUsuario = parseInt (prompt (mensajePantalla));

const productoElegido = productos.find (producto => producto.id == opcionUsuario);


productoElegido.forEach(producto => function () {

    agregarAlCarrito (producto);

    function agregarAlCarrito (productoAComprar){
        carrito.push (productoAComprar);
        console.table (carrito);

        alert ("Se ha agregado ${productoElegido.nombre} al carrito");

    }
    
});
