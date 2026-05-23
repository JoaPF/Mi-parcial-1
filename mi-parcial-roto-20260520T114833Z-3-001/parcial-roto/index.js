let productos = [
    {nombre: "Armonía",precio: "12000"},
    {nombre: "Doble batalla",precio: "15000"},
    {nombre: "Clásica Law",precio: "9000"},
    {nombre: "Exotically",precio: "16500"},
    {nombre: "La Bestia",precio: "19000"},
    {nombre: "Nuggy Chop",precio: "14500"},
    {nombre: "Agua sin gas (1L)",precio: "2000"},
    {nombre: "Agua con gas (1L)",precio: "1500"},
    {nombre: "Aquarius Manzana(3L)",precio: "5500"},
    {nombre: "Aquarius Pomelo (3L)",precio: "5500"},
    {nombre: "Aquarius Naranja (3L)",precio: "5500"},
    {nombre: "Coca-Cola (1.5L)",precio: "4500"},
    {nombre: "Sprite (1.5L)",precio: "4500"},
    {nombre: "Campari",precio: "6000"},
    {nombre: "Fernet",precio: "7000"},
    {nombre: "Gancia",precio: "6000"},
    {nombre: "Ron Havana Club",precio: "9000"},
    {nombre: "Daiquiri",precio: "7000"}
]; 

let carrito = []; 

//--- Funcion que obtiene el carrito del LocalStorage, lo parsea a un array y lo retorna ---//
function obtenerCarrito() 
{
    carrito = localStorage.getItem('carrito');
    if (carrito == null){
        carrito = [];
    }else{
        console.log("carrito cargado con exito");
        console.log("================================\n            CARRITO\n================================");
        console.log(carrito);
        return carrito;
    };
}

//--- Funcion que guarda el carrito recibido al LocalStorage, previamente transformado a string ---//
function guardarCarrito(carrito) 
{
    let carritoString = JSON.stringify(carrito);
    localStorage.setItem(carritoString);
}

//{'lko,iiklikujm,lujyhuy7jhhjgybjnbuujikilo,nuuj88u788ikjm,7u8op'´+¿'´´++ñpñlopo0988}  <-- codigo de Rubia
function sumarAlCarrito(e){

    //--- Obtengo la referencia al elemento clickeado desde en base al evento (Propiedad exclusivamente de todos los Events) ---//
    let elementoClickeado = e.target;
    console.log(elementoClickeado.id);

    
    switch(elementoClickeado.id){
        case "ham-armonia":
            console.log("armonia ok");
            if (carrito.find(nombre=="Armonía")){
                console.log("armonia encontrada");
            }else{
                carrito.push({nombre: productos[0].nombre,precio: productos[0].precio, cantidad: 1});
            }

    };
    console.log(carrito);
}

function restarDelCarrito(e) 
{
    //--- Obtengo la referencia al elemento clickeado desde en base al evento (Propiedad exclusivamente de todos los Events) ---//
    let elementoClickeado = e.target;
    
    obtenerCarrito();
    console.log(carrito);
}



//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//
window.addEventListener("DOMContentLoaded", () => 
{
    const botonesSumar = document.querySelectorAll(".btn-sumar-a-carrito");
    const botonesRestar = document.querySelectorAll(".btn-restar-a-carrito");

    botonesSumar.forEach(btn => btn.addEventListener("click", sumarAlCarrito));
    botonesRestar.forEach(btn => btn.addEventListener("click", restarDelCarrito));
});
