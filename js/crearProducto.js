import { conectaAPI } from "./conectaAPI.js";

//const formulario = document.querySelector("[data-formulario]"); 

//FUNCIONO ESTE CODIGO PARA VALIDAR LOS CAMPOS DEL FORMULARIO CUANDO ALGUNO O TODOS ESTAN VACIOS
//document con getelementbyid funciona correctamente, aqui ya no va el cuerpo del formulario [data-formulario]
document.getElementById('enviar').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent form from submitting

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;  
    

    if (nombre == "" || precio == "" || imagen == "") {
        alert("Los campos del formulario no estan informados");
    }else {
        try{
            await conectaAPI.crearCard(nombre,precio,imagen); 
    
            console.log("Carga OK");
          
        }catch(e){
            alert(e);
            console.log("Carga NOK");
        }   
    }

});

/*
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
            console.log("listProducts de crearProducto.js:");
            console.log(listProducts);
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
            console.error('Esperaba una variedad de productos, pero obtuve:', listProducts);
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
    console.log("Entra a submit:")
    console.log("nombre: " + nombre);
    console.log("precio: " + precio);
    console.log("imagen: " + imagen);

    conectaAPI.crearCard(nombre, precio, imagen)
    .then((res) => {
        console.log(res);
        window.location.reload(); 
    })
    .catch((err) => console.log(err));
});
*/

/*
const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearCard(evento){
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;   

    console.log("crea producto")
    
    try{
        await conectaAPI.crearCard(nombre,precio,imagen); 
         window.location.reload();

        console.log("Carga OK");
      
    }catch(e){
        alert(e);
        console.log("Carga NOK");
    }   
}

formulario,addEventListener("submit", evento => crearCard(evento)); 
*/






