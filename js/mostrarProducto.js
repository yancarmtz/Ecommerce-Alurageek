import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

export default function construyeCard(nombre, precio, imagen,id) {
    const card = document.createElement("li");
    card.className = "tarjeta";

    card.innerHTML = 
       `<img class="producto-imagen" title="Imagen producto" src="${imagen}">
        <div class="producto-datos">
            <h3  title="descripcion producto">${nombre}</h3>
            <div class="datos-producto">
                <h4 title="Precio producto">$ ${precio}</h4>
                <input type="image" class="eliminar" title="Eliminar producto" src="img/trash.png" data-id="${id}">                               
            </div>
        </div>`

    return card;
}


async function listaCards() {
    try{
        const listaAPI = await conectaAPI.listaCards();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.nombre, element.precio, element.imagen, element.id)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}


listaCards();
