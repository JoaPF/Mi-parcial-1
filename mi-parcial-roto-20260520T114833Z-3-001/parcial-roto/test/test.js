//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//
window.addEventListener("DOMContentLoaded", () => 
{
    const botonSumar = document.querySelectorAll("#btn-suma");
    const botonRestar = document.querySelectorAll("#btn-resta");
    const botonConsulta = document.querySelectorAll("#btn-consulta");
    const botonCrear =document.querySelectorAll("#btn-crear");
    const botonLimpiar =document.querySelectorAll("#btn-limpiar");
    const botonEliminar =document.querySelectorAll("#btn-eliminar");
    const botonListar =document.querySelectorAll("#btn-lista");
    

    botonSumar.forEach(btn => btn.addEventListener("click", sumar));
    botonRestar.forEach(btn => btn.addEventListener("click", resta));
    botonConsulta.forEach(btn => btn.addEventListener("click", consulta));
    botonCrear.forEach(btn => btn.addEventListener("click", crear));
    botonLimpiar.forEach(btn => btn.addEventListener("click", limpiar));
    botonEliminar.forEach(btn => btn.addEventListener("click", eliminarLocal));
    botonListar.forEach(btn => btn.addEventListener("click", listar));

});

//FALTA -> LISTAR PRODUCTOS DEL CARRITO EN UL

function listar(){
    carrito = obtener();

    let listaHTML = "<ul> <h3>Producto | Cantidad</h3>";
    carrito.forEach(carrito => {
        listaHTML += `<li>${carrito.producto}  |  ${carrito.cantidad}</li>`;
    });
    listaHTML += "</ul>";
    console.log(listaHTML);

    let lista = document.getElementById("lista");
    lista.innerHTML = (listaHTML);

}

function eliminarLocal(){
    localStorage.removeItem('carrito');
    console.log("Datos locales eliminados")
}

function limpiar(){ 
    let carrito = obtener();
    if (carrito == null){
        console.log("no se encontró el carrito");

    }else{
        localStorage.setItem('carrito', '[]');
        console.log("Carrito vaciado");
    }
}

function resta(){
    let producto = "ProdB";

    let carrito = obtener();
    if (carrito == null){
        console.log("no se encontró el carrito");

    }else{
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].producto == producto){
                //Si encuentro el producto, le resto 1 a la cantidad, si es 0 lo elimino del array
                carrito[i].cantidad -= 1;
                if(carrito[i].cantidad <= 0){
                    carrito.splice([i],1);
                };
                break;
            };
        };
        guardarCarrito(carrito);
    }
}

function sumar(){
    //let elementoClickeado = e.target;
    let producto = "ProdB";

    let carrito = obtener();
    if (carrito == null){
        console.log("no se encontró el carrito");

    }else{
        //busco si el producto ya existe y sumo 1 a la cantidad, sino, lo añado al array
        let existe = false
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].producto == producto){
                carrito[i].cantidad += 1;
                existe = true;
                break;
            };
        };
        if(existe == false){
            carrito.push({producto: producto, cantidad: 1});
        };
        guardarCarrito(carrito);
    }
}

function crear(){
    //chequeo si existe un carrito, sino lo creo vacio
    carrito = obtener();
    if (carrito == null){
        console.log("no se encontró el carrito");
        carrito = [];
        let carritoString = JSON.stringify(carrito);
        localStorage.setItem('carrito', carritoString);
        console.log("Array carrito creado");
    }else{
        console.log("Ya existe un carrito");
        console.log(carrito);}
}

function guardarCarrito(carrito){
    //solo guardo el carrito en local storage

    let carritoString = JSON.stringify(carrito);
    localStorage.setItem('carrito', carritoString);
}

function obtener(){
    //SOLO consulta por el carrito en local storage y lo retorna
    /*
    antes de parsear:  [{"producto":"x","cantidad":1}]
    depues de parsear:  
        Array [ {…} ]
        0: Object { producto: "x", cantidad: 1 }
    */
    //let elementoClickeado = e.target;
    //Obtengo el string y parseo a objeto
    carrito = localStorage.getItem('carrito');
    carrito = JSON.parse(carrito);
    return carrito;

}

function consulta(){
    //Solo para imprimir el carrito en consola
    carrito = obtener();

    if (carrito == null){
        console.log("no se encontró el carrito");

    }else{
        console.log("carrito cargado con exito");
        console.log("================================\n            CARRITO\n================================\n","cantidad de productos:",carrito.length,"\n",carrito);
        
        for (let i = 0; i < carrito.length; i++) {
            console.log(carrito[i].producto,carrito[i].cantidad);
        };
        
        return carrito;
    };
}