
// MUESTRA LA LISTA DE TARGETAS AGREGADAS DESDE EL FORMULARIO EN PANTALLA
async function listaCards(){
    const conexion = await fetch("https://api-alurageek-render-5.onrender.com/cards",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}




// AGREGA LA TARJETA QUE SE AGREGARA EN PANTALLA, SI HAY TARJETAS EN PANTALLA LA AGREGA EN EL ESPACIO SIGUIENTE
async function crearCard(nombre,precio,imagen){
        const conexion= await fetch("https://api-alurageek-render-5.onrender.com/cards",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    // VALIDA SI LA CONEXION NO FUE EXITOSA
    if(!conexion.ok){
        throw new Error("No fue posible enviar la card");
    }else {
       // Mostrar el mensaje en el span con la clase "mensaje-enviado"
       const spanMensaje = document.querySelector(".mensaje-enviado");
       spanMensaje.innerHTML = "Cargado con exito.";  
       console.log("Producto cargado con exito");

        const nuevoProducto = await conexion.json();
        
        // Actualizar el DOM para mostrar la nueva tarjeta
        const listaproductos = document.getElementsByClassName('listaproductos');
        const newCard = crearCard(nuevoProducto.id, nuevoProducto.nombre, nuevoProducto.precio, nuevoProducto.imagen);
        listaproductos.appendChild(newCard);
    }

    return nuevoProducto;
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}



// ELIMINA EL PRODUCTO AL HACER CLIC EN EL ICONO TRASH
async function eliminarCard(id) {
     try {
        await fetch(`https://api-alurageek-render-5.onrender.com/cards/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error al eliminar el producto del servidor:', error);
    }
  }


// EXPORTA LA VARIABLE conectaAPI donde en los archivos js con import la llaman
export const conectaAPI={
    listaCards,crearCard,eliminarCard
}
