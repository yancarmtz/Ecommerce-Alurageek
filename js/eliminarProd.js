import { conectaAPI } from "./conectaAPI.js";


export async function eliminarProducto() {
    const lista = document.querySelector("[data-lista]"); //<= DOM data-lista se toma de la linea <ul class="listaProductos" 
                                                          //alt="lista-productos" data-lista></ul> del index.html

    lista.addEventListener("click", async (e) => {
        if (e.target.classList.contains("eliminar")) { //<= eliminar sale de la class="eliminar" de la linea de index.html
                                                       //<input type="image" class="eliminar" title="Eliminar producto" src="img/trash.png" data-id="${id++}"> 
            const id = e.target.dataset.id //<= tomar el id del archivo db.json


            try {
                await conectaAPI.eliminarCard(id); //<= se conecta al archivo conectaAPI.js para llamar a la funcion eliminarCard()
                e.target.closest(".tarjeta").remove(); // la clase tarjeta la toma del li generado del archivo mostrarProducto.js 
                                                       //<= <li class="tarjeta"><img class="producto-imagen" title="Imagen producto" 
                                                       //src="https://www.novelmex.com/cdn/shop/files/WhatsAppImage2023-07-31at19.13.10_600x.jpg?v=1690852542">
                const spanMensaje = document.querySelector(".mensaje-enviado");
                spanMensaje.innerHTML = "Ok";  

                console.log(id);

            } catch (error) {
                console.error("Error al eliminar el producto:", error);
                console.log(id);
            }
        }
    });
}

eliminarProducto();

//******************************************************************************************************* */
// EXLICACION DEL CODIGO ANTERIOR:
////Exportar la función asignarFuncionEliminar() como una función asíncrona:
////
//    export async function asignarFuncionEliminar() {
//La palabra clave export se utiliza en JavaScript para exportar una función, variable, clase,
// o cualquier otro tipo de objeto para que pueda ser importado y utilizado en otros archivos.
//async function define una función asíncrona, lo que significa que puede contener 
//operaciones asincrónicas que se manejan con await. En este caso, 
//la función asignarFuncionEliminar se define como asíncrona para poder usar await dentro de ella.
//
//Seleccionar el elemento lista del DOM:
//
//  const lista = document.querySelector("[data-lista]");
//document.querySelector("[data-lista]") selecciona el primer elemento del DOM que tenga un atributo data-lista.
//En este contexto, se espera que el elemento lista sea el contenedor de las tarjetas (elementos con clase .tarjeta) 
//que se desea eliminar al hacer clic en el botón de eliminar.
//Agregar un evento "click" al elemento lista:
//
//  lista.addEventListener("click", async (e) => {
//addEventListener es un método que permite añadir un evento a un elemento del DOM. En este caso, 
//se añade un evento de tipo "click" al elemento lista.
//Cuando se hace clic en algún elemento dentro de lista, se activará la función de manejo de evento.
//Verificar si se hizo clic en un botón de clase "eliminar":
// 
//  if (e.target.classList.contains("eliminar")) {
//e.target hace referencia al elemento específico que fue clicado dentro de lista.
//classList.contains("eliminar") verifica si el elemento clicado tiene la clase "eliminar".
//
//Obtener el ID del elemento a eliminar:
// 
//  const id = e.target.dataset.id;
//dataset.id accede al valor del atributo data-id del elemento clicado, que generalmente contiene 
//el ID único del elemento que se desea eliminar.
//Enviar una solicitud para eliminar el producto a través de la API:
// 
// 
// try {
//    await conectaAPI.eliminarProducto(id);
//await conectaAPI.eliminarProducto(id) es una llamada a una función eliminarProducto de una API o 
//servicio que se conecta al servidor para eliminar un producto específico utilizando su ID.
//La palabra clave await indica que la operación debe esperar a que la solicitud de eliminación 
//se complete antes de continuar con el resto del código.
//Eliminar el elemento del DOM si la solicitud fue exitosa:
// 
//  e.target.closest(".tarjeta").remove();
//e.target.closest(".tarjeta") encuentra el elemento más cercano dentro de la jerarquía del DOM
// que tenga la clase "tarjeta". En este contexto, se busca el elemento "tarjeta" que contiene el botón de eliminar que fue clicado.
//.remove() elimina ese elemento del DOM, lo que equivale a eliminar la tarjeta visualmente de la lista en la interfaz de usuario.
//
//  closest es un método de JavaScript que se utiliza para buscar el ancestro más cercano que cumpla
// con un selector especificado. Este método se aplica a un elemento del DOM y busca en la jerarquía hacia
// arriba hasta encontrar el primer ancestro que coincida con el selector indicado.
//
//  Aquí está un ejemplo de cómo se usa closest en el código proporcionado:
//  
//  e.target.closest(".tarjeta")
//  En este fragmento de código:
//  
//  e.target se refiere al elemento que desencadenó el evento de clic (el botón de eliminar en este caso).
//  closest(".tarjeta") busca el ancestro más cercano (incluido el propio elemento) que tenga la clase "tarjeta".
//  Entonces, closest busca hacia arriba en la jerarquía del DOM desde el elemento e.target hasta encontrar
//  el primer ancestro que tenga la clase "tarjeta". Esto es útil cuando deseas interactuar con elementos 
//  específicos que están estructurados dentro de un contenedor más grande (en este caso, un contenedor con la clase "tarjeta").
//  
//  En el contexto del código proporcionado, e.target.closest(".tarjeta") se utiliza para encontrar
//  el contenedor "tarjeta" más cercano al botón de eliminar que fue clicado. Esto permite identificar 
//  la tarjeta específica que debe ser eliminada de la interfaz de usuario cuando se hace clic en el botón 
//  de eliminar correspondiente a esa tarjeta.
//
//Manejar errores en caso de que la eliminación falle:
// 
//  } catch (error) {
//        console.error("Error al eliminar el producto:", error);
//  }
//
//Si la solicitud de eliminación no se completa con éxito, se captura el error y se muestra en la consola mediante console.error.
//Ejecutar la función asignarFuncionEliminar() para iniciar el proceso de eliminación al cargar la página:
//
//  asignarFuncionEliminar();
//
//Al final, se llama a la función asignarFuncionEliminar() para que comience a escuchar los clics en la lista y maneje la eliminación de elementos cuando sea necesario.
//En resumen, este código define una función que asigna una acción de eliminación a los elementos de una lista cuando se hace clic en un botón de clase "eliminar". La función maneja la eliminación enviando una solicitud a través de una API y actualiza la interfaz de usuario eliminando el elemento correspondiente del DOM si la operación es exitosa.
//
//
//En el código proporcionado, contains es un método de JavaScript que se utiliza para verificar si un elemento tiene una clase específica en su lista de clases (classList).
//
//Aquí está el fragmento de código en el que se usa contains:
//
//
//  if (e.target.classList.contains("eliminar")) {
//     // Código para manejar la acción cuando el elemento tiene la clase "eliminar"
//  }
//
//Explicación:
//
//e.target se refiere al elemento que desencadenó el evento de clic (en este caso, el elemento en el que se hizo clic dentro de la lista).
//classList es una propiedad de los elementos del DOM que devuelve una lista de clases asociadas al elemento.
//contains("eliminar") es un método de la propiedad classList que verifica si la lista de clases del elemento contiene la clase especificada, en este caso, "eliminar".
//En resumen, classList.contains("eliminar") se utiliza para verificar si el elemento clicado tiene la clase "eliminar". Esto es útil en situaciones donde deseas realizar una acción específica solo cuando el elemento tiene cierta clase. Por ejemplo, en el código proporcionado, la acción de eliminación se ejecuta solo cuando se hace clic en un elemento con la clase "eliminar".
