import validaNombre from "./validaCampoNombre.js";
import validaPrecio from "./validaPrecio.js";
import {tiposError, mensajes} from "./customErrors.js";
import validaURL from "./validaURL.js";

const campoDeformulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    precio: e.target.elements["precio"].value,
    imagen: e.target.elements["imagen"].value,
    
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  console.log(listaRespuestas);
});

console.log("campoDeformulario");
console.log(campoDeformulario);

campoDeformulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", (evento) => evento.preventDefault()) //EVITA QUE SE MUESTRA ALGUN MENSAJE DE ERROR PREDEDERMINADO Y SE PUEDA PERSONALIZAR DE OTRA MANERA
});



function verificarCampo(campo) {

    let mensaje = "";
    campo.setCustomValidity("");

    console.log("Cambio a campo: ", campo.name);

    if (campo.id == "nombre" && campo.value != "") {
        validaNombre(campo);
    }
    
    if (campo.id == "precio" && campo.value != "") {
        validaPrecio(campo);
    }; 

    if (campo.id == "imagen" && campo.value != "") {
        validaURL(campo);
    };

    //PARA MOSTRAR LOS CAMPOS DE ERROR
    console.log(campo.validity)


 
    tiposError.forEach(error => {
        if(campo.validity[error]) {
           mensaje = mensajes[campo.id][error];

           console.log("mensaje: ");
           console.log(mensaje)
        }
    });


    const mensajeError = campo.nextElementSibling; //<= nextElementSibling es una propiedad en JavaScript que 
                                                   // te permite acceder al siguiente elemento hermano de un elemento 
                                                   //dado en el árbol DOM. Esto significa que si tienes un elemento HTML 
                                                   //y quieres trabajar con el elemento que le sigue inmediatamente en 
                                                   //el mismo nivel del árbol, puedes usar nextElementSibling.
    const validarInputCheck = campo.checkValidity(); // <= checkValidity es un método de JavaScript que se utiliza en elementos 
                                                     //de formulario HTML para verificar si los datos ingresados en un campo son válidos 
                                                     //según las restricciones establecidas en el 
                                                     //atributo required, pattern, min, max, step, etc., del elemento input.
                                                     //
                                                     //Cuando llamas a checkValidity() en un elemento de formulario, 
                                                     //se realizan las siguientes validaciones:
                                                     //
                                                     //1.-Requerido (required): Verifica si el campo está vacío cuando 
                                                     //se marca como requerido con el atributo required.
                                                     //2.-Patrón (pattern): Verifica si el valor del campo coincide 
                                                     //con el patrón especificado en el atributo pattern.
                                                     //3.-Rango (min, max): Verifica si el valor del campo 
                                                     //está dentro del rango especificado por los atributos min y max.
                                                     //4.-Paso (step): Verifica si el valor del campo es 
                                                     //válido según el paso especificado en el atributo step.

    console.log("validarInputCheck")
    console.log(validarInputCheck)

    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
        console.log("mensaje" + mensaje)
    } else {
        mensajeError.textContent = "";
    }
}