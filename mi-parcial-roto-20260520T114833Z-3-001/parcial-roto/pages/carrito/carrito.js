function obtenerCarrito() 
{
    carrito = localStorage.getItem('carrito');
    carrito = JSON.parse(carrito);

    return carrito;
}

function cargarProductosCarrito() 
{

    carrito = obtenerCarrito();
    let precioTotal = 0;

    let listaHTML = "";
    carrito.forEach(item => {
        precioTotal += item.precio * item.cantidad;
        listaHTML += `<tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio}</td>
        </tr>`;
    });

    let tabla = document.getElementById("tabla-carrito");
    //guardo el encabezado de la lista (pudimos usar un <th>)
    let encabezado = tabla.querySelector(".fila-header-carrito").outerHTML;
    tabla.innerHTML = encabezado + listaHTML;

    let valor = document.getElementById("valor-final");
    valor.innerHTML = (`El valor final a pagar es de: $${precioTotal}`);
}

function limpiarCarrito() 
{
    localStorage.setItem('carrito', '[]');
    alert( "Carrito limpiado correctamente");

    console.log("Carrito vaciado");
    cargarProductosCarrito();
}

// Asociar evento al botón cuando la página carga
window.addEventListener("DOMContentLoaded", () =>
{
    cargarProductosCarrito();
    document.querySelector(".btn-limpiar-carrito").addEventListener("click", limpiarCarrito);
});