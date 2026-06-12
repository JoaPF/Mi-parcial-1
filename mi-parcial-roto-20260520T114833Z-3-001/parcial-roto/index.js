let productos = [{nombre: "Armonía",precio: 12000},
    {nombre: "Doble batalla",precio: 15000},
    {nombre: "Clásica Law",precio: 9000},
    {nombre: "Exotically",precio: 16500},
    {nombre: "La Bestia",precio: 19000},
    {nombre: "Nuggy Chop",precio: 14500},
    {nombre: "Agua sin gas (1L)",precio: 2000},
    {nombre: "Agua con gas (1L)",precio: 1500},
    {nombre: "Aquarius Manzana(3L)",precio: 5500},
    {nombre: "Aquarius Pomelo (3L)",precio: 5500},
    {nombre: "Aquarius Naranja (3L)",precio: 5500},
    {nombre: "Coca-Cola (1.5L)",precio: 4500},
    {nombre: "Sprite (1.5L)",precio: 4500},
    {nombre: "Campari",precio: 6000},
    {nombre: "Fernet",precio: 7000},
    {nombre: "Gancia",precio: 6000},
    {nombre: "Ron Havana Club",precio: 9000},
    {nombre: "Daiquiri",precio: 7000}
]; 

//LISTO
//--- Funcion que obtiene el carrito del LocalStorage, lo parsea a un array y lo retorna ---//
function obtenerCarrito(){
    //consulta por el carrito en local storage y lo retorna, si no existe lo crea

    carrito = localStorage.getItem('carrito');
    carrito = JSON.parse(carrito);

    if (carrito == null){
        console.log("no se encontró el carrito | creando carrito");

        carrito = [];
        let carritoString = JSON.stringify(carrito);
        localStorage.setItem('carrito', carritoString);
        console.log("Array carrito creado");
    };
    return carrito;

}
//LISTO
//--- Funcion que guarda el carrito recibido al LocalStorage, previamente transformado a string ---//
function guardarCarrito(carrito){
    //solo guardo el carrito en local storage
    let carritoString = JSON.stringify(carrito);
    localStorage.setItem('carrito', carritoString);
}

//{'lko,iiklikujm,lujyhuy7jhhjgybjnbuujikilo,nuuj88u788ikjm,7u8op'´+¿'´´++ñpñlopo0988}  <-- codigo de Rubia

//LISTO
function sumarAlCarrito(e){
    //--- Obtengo la referencia al elemento clickeado desde en base al evento (Propiedad exclusivamente de todos los Events) ---//
    let elementoClickeado = e.target.id;
    console.log("clickeado: ",elementoClickeado);

    let carrito = obtenerCarrito();
    let producto;
    let precio;

    //hice este switch kilometrico para evaluar que producto se clickeó y pasar por el condicional una sola vez
    switch(elementoClickeado){
        //HAMBURGUESAS
        case "+ham-armonia":
            producto = "Armonía";
            break;
        case "+ham-doble":
            producto = "Doble batalla";
            break;
        case "+ham-law":
            producto = "Clásica Law";
            break;
        case "+ham-exo":
            producto = "Exotically";
            break;
        case "+ham-bestia":
            producto = "La Bestia";
            break;
        case "+ham-nuggy":
            producto = "Nuggy Chop";
            break;
        //BEBIDAS
        case "+beb-agua-s-gas":
            producto = "Agua sin gas (1L)";
            break;
        case "+beb-agua-c-gas":
            producto = "Agua con gas (1L)";
            break;
        case "+beb-aq-man":
            producto = "Aquarius Manzana(3L)";
            break;
        case "+beb-aq-pom":
            producto = "Aquarius Pomelo (3L)";
            break;
        case "+beb-aq-nar":
            producto = "Aquarius Naranja (3L)";
            break;
        case "+beb-coca":
            producto = "Coca-Cola (1.5L)";
            break;
        case "+beb-sprite":
            producto = "Sprite (1.5L)";
            break;
        //TRAGOS
        case "+tra-camp":
            producto = "Campari";
            break;
        case "+tra-fernet":
            producto = "Fernet";
            break;
        case "+tra-gancia":
            producto = "Gancia";
            break;
        case "+tra-ron":
            producto = "Ron Havana Club";
            break;
        case "+tra-daiquiri":
            producto = "Daiquiri";
            break;
    };

    //busco si el producto ya existe y sumo 1 a la cantidad, sino,busco su precio y lo añado al array
    let existe = false;

    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].nombre == producto){
            carrito[i].cantidad += 1;
            existe = true;
            break;
        };
    };
    if(existe === false){
        //obtengo el precio del producto de mi array a partir de su nombre

        for(let i = 0; i < productos.length; i++){
            if(productos[i].nombre == producto){
                precio = productos[i].precio;
                carrito.push({nombre: producto,precio: precio, cantidad: 1});
                break;
            };
        };
    };


    console.log(carrito);
    guardarCarrito(carrito);
    alert(`Un/una: ${producto} fue agregado al carrito`);
}

//LISTO
function restarDelCarrito(e) 
{
    //--- Obtengo la referencia al elemento clickeado desde en base al evento (Propiedad exclusivamente de todos los Events) ---//
    let elementoClickeado = e.target.id;
    console.log("clickeado: ",elementoClickeado);

    let carrito = obtenerCarrito();
    let producto;

    switch(elementoClickeado){
        //HAMBURGUESAS
        case "-ham-armonia":
            producto = "Armonía";
            break;
        case "-ham-doble":
            producto = "Doble batalla";
            break;
        case "-ham-law":
            producto = "Clásica Law";
            break;
        case "-ham-exo":
            producto = "Exotically";
            break;
        case "-ham-bestia":
            producto = "La Bestia";
            break;
        case "-ham-nuggy":
            producto = "Nuggy Chop";
            break;
        //BEBIDAS
        case "-beb-agua-s-gas":
            producto = "Agua sin gas (1L)";
            break;
        case "-beb-agua-c-gas":
            producto = "Agua con gas (1L)";
            break;
        case "-beb-aq-man":
            producto = "Aquarius Manzana(3L)";
            break;
        case "-beb-aq-pom":
            producto = "Aquarius Pomelo (3L)";
            break;
        case "-beb-aq-nar":
            producto = "Aquarius Naranja (3L)";
            break;
        case "-beb-coca":
            producto = "Coca-Cola (1.5L)";
            break;
        case "-beb-sprite":
            producto = "Sprite (1.5L)";
            break;
        //TRAGOS
        case "-tra-camp":
            producto = "Campari";
            break;
        case "-tra-fernet":
            producto = "Fernet";
            break;
        case "-tra-gancia":
            producto = "Gancia";
            break;
        case "-tra-ron":
            producto = "Ron Havana Club";
            break;
        case "-tra-daiquiri":
            producto = "Daiquiri";
            break;
    };
    
    //busco el producto y resto 1 a la cantidad, si cantidad es 0 lo elimino
    let existe = false;

    console.log(producto);

    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].nombre == producto){
            carrito[i].cantidad -= 1;
            if(carrito[i].cantidad <= 0){
                carrito.splice([i],1);
                alert(`No hay más ${producto} en el carrito`);
                existe = true;//para que no avise 2 veces
                break;
            }else{
                alert(`Un/una: ${producto} fue eliminado del carrito`);
                existe = true;
                break;
            };
        };
    };
    if(existe == false){
        alert(`No hay ningún ${producto} en el carrito`);
    };
    guardarCarrito(carrito);
};




//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//
window.addEventListener("DOMContentLoaded", () => 
{
    const botonesSumar = document.querySelectorAll(".btn-sumar-a-carrito");
    const botonesRestar = document.querySelectorAll(".btn-restar-a-carrito");

    botonesSumar.forEach(btn => btn.addEventListener("click", sumarAlCarrito));
    botonesRestar.forEach(btn => btn.addEventListener("click", restarDelCarrito));
});
