
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
async function crearCard(id, nombre, precio, imagen){
    const producto = document.createElement('article');
    producto.className = 'productos-item';
    producto.dataset.id = id;
    producto.innerHTML = `<img class="productos-img"
    src="${imagen}"
    alt="${nombre}">
    <h4 class="productos-nombre">
        ${nombre}
    </h4>
    <div>
        <h5 class="productos-precio">
            $ ${precio}
        </h5>
        <img class="trash" src="img/trash.png" alt="Tacho de basura">
    </div>`;


// FUNCION PARA ELIMINAR AL CLICKEAR EN EL TACHO DE BASURA
// Agregar evento de clic al icono de la papelera
   const trashIcon = producto.querySelector('.trash');
   trashIcon.addEventListener('click', (event) => {
       event.preventDefault();
       eliminarCard(id);
   });
// HASTA AQUI

    return producto;
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
