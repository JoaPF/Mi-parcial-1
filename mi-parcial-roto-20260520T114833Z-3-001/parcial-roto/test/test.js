//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//
window.addEventListener("DOMContentLoaded", () => 
{
    const botonSumar = document.querySelectorAll("#btn-suma");
    const botonRestar = document.querySelectorAll("#btn-resta");
    const botonConsulta = document.querySelectorAll("#btn-consulta");
    const botonCrear =document.querySelectorAll("#btn-crear");
    const botonLimpiar =document.querySelectorAll("#btn-limpiar");
    const botonEliminar =document.querySelectorAll("#btn-eliminar");


    botonSumar.forEach(btn => btn.addEventListener("click", sumar));
    botonRestar.forEach(btn => btn.addEventListener("click", resta));
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

    carrito = [];
    let carritoString = JSON.stringify(carrito);
    localStorage.setItem('carrito', carritoString);
    console.log("Array carrito creado");

}

function resta(){
    console.log("resta");
}

function sumar(){
    /**
     * docu
     */
    //let elementoClickeado = e.target;
    
    console.log();
    let carrito = [{producto:"x", cantidad: 2}];
    let carritoString = JSON.stringify(carrito);
    console.log(carritoString);
    localStorage.setItem('carrito', carritoString);
    
}

function obtener(){
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
    carrito = obtener();

    if (carrito == null){
        console.log("no se encontró el carrito /creando carrito ");
        crear();
        console.log("================================\n            CARRITO\n================================\n",carrito);

        return carrito;
    }else{
        console.log("carrito cargado con exito");
        console.log("================================\n            CARRITO\n================================\n","cantidad de productos:",carrito.length,"\n",carrito);
        
        for (let i = 0; i < carrito.length; i++) {
            console.log(carrito[i]);
            console.log(carrito[i].producto,carrito[i].cantidad);
        };
        
        return carrito;
    };
}