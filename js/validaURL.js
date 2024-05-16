import { mensajes } from "./customErrors.js";

export default function validaURL(campo) {
        const expresionRegular = /^https:\/\/.*\.(jpeg|jpg|jpg?v=|gif|png|bmp)/i;

        if (!isNaN(parseFloat(campo.value))) {
            //campo.setCustomValidity("Se informa mensaje de customerror archivo customErrors.js");
            campo.setCustomValidity(mensajes.imagen.customError); //imagen es el nombre del campo en mensajes
            document.querySelector("#imagen").value="";
        }else {
            if (expresionRegular.test(campo.value)) {
                console.log("URL valido");
            } else {
                //campo.setCustomValidity("Se informa mensaje de customerror archivo customErrors.js");
                campo.setCustomValidity(mensajes.imagen.customError); //imagen es el nombre del campo en mensajes
                document.querySelector("#imagen").value="";
            }
        }
    }



    
