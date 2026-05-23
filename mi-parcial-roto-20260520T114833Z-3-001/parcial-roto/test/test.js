//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//
window.addEventListener("DOMContentLoaded", () => 
{
    const botonCarga = document.querySelectorAll("#btn-carga");
    const botonConsulta = document.querySelectorAll("#btn-consulta");
    const botonCrear =document.querySelectorAll("#btn-crear");
    const botonLimpiar =document.querySelectorAll("#btn-limpiar");
    const botonEliminar =document.querySelectorAll("#btn-eliminar");


    botonCarga.forEach(btn => btn.addEventListener("click", carga));
    botonConsulta.forEach(btn => btn.addEventListener("click", consulta));
    botonCrear.forEach(btn => btn.addEventListener("click", crear));
    botonLimpiar.forEach(btn => btn.addEventListener("click", limpiar));
    botonEliminar.forEach(btn => btn.addEventListener("click", eliminarLocal));

});


//FALTA -> AGREGAR PRODUCTOS AL CARRITO, ELIMINAR PRODUCTOS DEL CARRITO, LISTAR PRODUCTOS DEL CARRITO EN UL

//LISTO
function eliminarLocal(){
    localStorage.removeItem('carrito');
    console.log("Datos locales eliminados")
}
//LISTO
function limpiar(){
    localStorage.setItem('carrito', '[]');
    console.log("Carrito vaciado");
}



function crear(){
    //chequeo si existe un carrito
    carrito = localStorage.getItem('carrito');

    if (carrito == null){
        carrito = [];
        let carritoString = JSON.stringify(carrito);
        localStorage.setItem('carrito', carritoString);
        console.log("Array carrito creado");
    }else{
        console.log("Ya existe un carrito");
        console.log(carrito);

    }
}

function carga(){
    //let elementoClickeado = e.target;
    console.log();

}

function consulta(){
    //let elementoClickeado = e.target;
    //Obtengo el string y parseo a objeto
    carrito = localStorage.getItem('carrito');
    carrito = JSON.parse(carrito);

    if (carrito == null){
        console.log("no se encontró el carrito /creando carrito ");
        crear();
        console.log("================================\n            CARRITO\n================================");
        console.log(carrito);
        return carrito;
    }else{
        console.log("carrito cargado con exito");
        console.log("================================\n            CARRITO\n================================");
        console.log(carrito);
        console.log(carrito.length);
        
        return carrito;
    };
    
}