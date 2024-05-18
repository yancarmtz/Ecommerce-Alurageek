import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");
const productContainer = document.querySelector("[data-lista]");

function createCard(id, nombre, precio, imagen) {
    const card = document.createElement("li");
    card.innerHTML = `
    <figure class="card">
    <img class="producto-imagen"
        aspect-ratio: auto
        height="60px"
        src="${imagen}"
        alt="${nombre}">
    <figcaption class="card-container--info">
        <p class="card-container--title">${name}</p>
        <div class="card-container--value">
            <p>$ ${precio}</p>
            <img class="card-container--icon" src="./assets/icons/borrar.png" data-remove="true" data-id="${id}"/>
        </div>
    </figcaption>
</figure>
        </figure>
    `;
    return card;
}

const render = async () => {
    try {
        const listProducts = await conectaAPI.crearCard();
        if (listProducts && Array.isArray(listProducts)) {
            listProducts.forEach(product => {
                productContainer.appendChild(
                    createCard(
                        product.id,
                        product.nombre,
                        product.precio,
                        product.imagen
                        
                    )
                );
            });
        } else {
            console.error('Expected an array of products, but got:', listProducts);
        }
    } catch (error) {
        console.error('Error in render function:', error);
    }
};


// Captura los datos del formulario
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    conectaAPI.crearCard(nombre, precio, imagen)
    .then((res) => {
        console.log(res);
        window.location.reload(); 
    })
    .catch((err) => console.log(err));
});

