//const mensaje = document.querySelector("div");
/* 
const boton = document.getElementById("cambiar-mensaje");

boton.addEventListener("click", () => {
  //mensaje.textContent = "Nuevo mensaje";
  alert("Alerta Funcionando");
});
*/

///funcion del checkbox
const checkbox = document.getElementById("miCheckbox");
const estadoTexto = document.getElementById("estadoCheckbox");

// Agregar un event listener para detectar cambios de estado
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    estadoTexto.textContent = "Acceso a la cámara";
    alert("CheckBox true");
  } else {
    estadoTexto.textContent = "Se necesita acceder a la cámara";

    alert("CheckBox false");
  }
});
