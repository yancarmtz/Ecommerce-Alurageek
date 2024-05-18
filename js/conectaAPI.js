
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
  const crearCard = (name, price, image) => {
      return fetch("https://api-dbjson-alurageek.vercel.app/cards", {
          method: "POST",
           headers:{
        "Content-type":"application/json"
        },
          body: JSON.stringify({
              name,
              price,
              image,
          })
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));{
      };
  }





// ELIMINA EL PRODUCTO AL HACER CLIC EN EL ICONO TRASH
async function eliminarCard(id) {
     try {
        await fetch(`https://api-dbjson-alurageek.vercel.app/cards/${id}`, {
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
