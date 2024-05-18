import { conectaAPI } from "./conectaAPI.js";

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
        // Actualiza Cards 
        await listarCards();

        console.log("Carga OK");
      
    }catch(e){
        alert(e);
        console.log("Carga NOK");
    }   
}

formulario,addEventListener("submit", evento => crearCard(evento)); 



