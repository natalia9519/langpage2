// let cambio= document.getElementById("cambio-image")

// let backgroundcolor= document.


// // Función para cambiar el fondo al hacer clic
// function cambiarFondo() {
//     // Obtener el cuerpo del documento
//     var body = document.body;
  
//     // Cambiar el color de fondo por una imagen (puedes cambiar 'url('imagen.jpg')' por la ruta de tu imagen)
//     body.style.backgroundImage = "url('rem-angel.png')";
//     body.style.backgroundColor = "transparent"; // Hacer transparente el color de fondo
  
//     // Desactivar el botón después de hacer clic
//     document.getElementById("cambiarFondoBtn").disabled = true;
//   }
  
//   // Agregar un evento de clic al botón que llame a la función cambiarFondo
//   document.getElementById("cambiarFondoBtn").addEventListener("click", cambiarFondo);

// document.getElementById('boton_color').addEventListener('click', function() {
//     document.body.style.backgroundImage = "url('./imagenes/fondolove.jpg')";
//   });
  
//   document.getElementById('boton_default').addEventListener('click', function() {
//     document.body.style.backgroundImage = document.body;
//   });

//   document.getElementById('boton_color').addEventListener('click', function() {
//     document.body.style.backgroundImage = "url('./imagenes/fondolove.avif')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundAttachment = "fixed";
//   });

function mostrarModal() {
    document.getElementById('modal').style.display = "flex";
  }
  
  function cerrarModal() {
    document.getElementById('modal').style.display = "none";
  }