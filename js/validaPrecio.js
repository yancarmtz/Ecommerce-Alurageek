import { mensajes } from "./customErrors.js";

export default function validaPrecio(campo) {
    if (campo.value.length > 16) {
        //campo.setCustomValidity("Se informa mensaje de customerror archivo customErrors.js");
        campo.setCustomValidity(mensajes.precio.customError); //precio es el nombre del campo en mensajes
        document.querySelector("#precio").value="";
    }
}