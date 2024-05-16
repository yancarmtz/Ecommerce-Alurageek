//
//DESCRIPCION TIPOERROR:
//
//valueMissing: Este error ocurre cuando un campo requerido está vacío 
//y se intenta enviar el formulario. Por ejemplo, si tienes un campo <input> 
//con el atributo required y el usuario deja este campo vacío al intentar 
//enviar el formulario, se activará el error valueMissing.
//
//typeMismatch: Este error ocurre cuando el valor de un campo no coincide
//con el tipo de entrada esperado. Por ejemplo, si tienes un campo <input> 
//con el atributo type="email" y el usuario ingresa un valor que no es una 
//dirección de correo electrónico válida, se activará el error typeMismatch.
//
//patternMismatch: Este error ocurre cuando el valor de un campo no coincide
//con el patrón especificado en el atributo pattern. Por ejemplo, 
//si tienes un campo <input> con un patrón regex para aceptar 
//solo números y el usuario ingresa un valor que no cumple con este patrón, 
//se activará el error patternMismatch.
//
//tooShort: Este error ocurre cuando el valor de un campo es 
//demasiado corto según el atributo minLength. 
//Por ejemplo, si tienes un campo <input> con el atributo minLength="5"
//y el usuario ingresa un valor con menos de 5 caracteres, se activará el error tooShort.
//
////customError: Este error se utiliza para indicar un error personalizado establecido 
//mediante el método setCustomValidity() en JavaScript. Puedes usar este error 
//para agregar validaciones personalizadas y mostrar mensajes de error específicos 
//para tu formulario.
//
//ARREGLO:::::::::::::::::
export const tiposError = [
    "valueMissing", 
    "typeMissmatch",
    "patternMissmatch", 
    "tooShort", 
    "customError"
];


//OBJETO MENSAJE::::::::::::::::
export const mensajes = {
    nombre: { // <= OBJETO
      valueMissing: "El campo nombre no puede estar vacío.",
      customError: "Campo nombre agrega una descripcion valida.",
    },
    precio: { //<= OBJETO
      valueMissing: "El campo precio no puede estar vacío.",
      customError: "El campo precio solo admite maximo 16 caracteres",
    },
    imagen: { //<= OBJETO
      valueMissing: "El campo imagen no puede estar vacío.",
      customError: "El campo imagen URL no tiene un formato valido.",
    },
  };
  