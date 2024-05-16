
// MUESTRA LA LISTA DE TARGETAS AGREGADAS DESDE EL FORMULARIO EN PANTALLA
async function listaCards(){
    const conexion = await fetch("https://api-dbjson-alurageek.vercel.app/cards",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


// AGREGA LA TARJETA QUE SE AGREGARA EN PANTALLA, SI HAY TARJETAS EN PANTALLA LA AGREGA EN EL ESPACIO SIGUIENTE
async function crearCard(id,nombre,precio,imagen){
        const conexion= await fetch("https://api-dbjson-alurageek.vercel.app/cards/${id}",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            id:id,
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
       //const spanMensaje = document.querySelector(".mensaje-enviado");
       //spanMensaje.innerHTML = "Cargado con exito.";  
       console.log("Producto cargado con exito");
    }

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


// ELIMINA EL PRODUCTO AL HACER CLIC EN EL ICONO TRASH
async function eliminarCard(id) {
    try {
      const respuesta = await fetch(`https://api-dbjson-alurageek.vercel.app/cards/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-type":"application/json"
        }
      })
  

      if (respuesta.ok) {
        console.log('Producto eliminada exitosamente.');
      } else {
        console.error('Error al eliminar el producto.');
        console.log(respuesta);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }


// EXPORTA LA VARIABLE conectaAPI donde en los archivos js con import la llaman
export const conectaAPI={
    listaCards,crearCard,eliminarCard
}
