const formulario = document.querySelector("[data-formulario]");

//Limpiar campos formulario
function limpiarCampos(){
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const imagen = document.querySelector("[data-imagen]").value;  
    

    if (nombre !== "" || precio !== "" || imagen !== "") {
        document.querySelector("[data-nombre]").value = "";
        document.querySelector("[data-precio]").value = "";
        document.querySelector("[data-imagen]").value = ""; 
        
    } else {
        alert("Los campos del formulario no estan informados");

    }
}

formulario,addEventListener("reset", () => limpiarCampos()); 
