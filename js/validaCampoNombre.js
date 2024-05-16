import { mensajes } from "./customErrors.js";

export default function validaNombre(campo){
                                //isNaN(parseFloat(campo.value) : valida que el campo no sea completamente numerico.
    console.log("campo nombre valida")
    console.log(campo)


    if (!isNaN(parseFloat(campo.value))) {
        //campo.setCustomValidity("Se informa mensaje de customerror archivo customErrors.js");
        campo.setCustomValidity(mensajes.nombre.customError); //nombre es el nombre del campo en mensajes
        document.querySelector("#nombre").value="";
        return;
    }
}