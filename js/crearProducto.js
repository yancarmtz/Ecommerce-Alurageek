import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");
const productContainer = document.querySelector("[data-lista]");

function createCard(id, name, price, image) {
    const card = document.createElement("li");
    card.innerHTML = `
    <figure class="card">
    <img class="producto-imagen"
        aspect-ratio: auto
        height="60px"
        src="${image}"
        alt="${name}">
    <figcaption class="card-container--info">
        <p class="card-container--title">${name}</p>
        <div class="card-container--value">
            <p>$ ${price}</p>
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
                        product.name,
                        product.price,
                        product.image
                        
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


