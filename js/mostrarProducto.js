import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones
function construyeCard(id, nombre, precio, imagen) {
    const producto = document.createElement('li');
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
        <img class="eliminar" src="img/trash.png" alt="Tacho de basura">
    </div>`;

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
