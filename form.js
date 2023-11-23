
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nombreInput = form.querySelector('input[name="nombre"]');
    const contraseñaInput = form.querySelector('input[name="contraseña"]');
    const correoInput = form.querySelector('input[name="correo"]');
    const submitButton = form.querySelector('.buttonSend');
  
    form.addEventListener('submit', function(event) {
      if (!/^[A-Z][a-z]+$/.test(nombreInput.value)) {
        nombreInput.setCustomValidity('El nombre debe comenzar con mayúscula y contener solo letras.');
        event.preventDefault();
      } else {
        nombreInput.setCustomValidity('');
      }
  
      if (!/^(?=.*[A-Z])(?=.*\d).{4,16}$/.test(contraseñaInput.value)) {
        contraseñaInput.setCustomValidity('La contraseña debe tener entre 4 y 16 caracteres, al menos una mayúscula y un número.');
        event.preventDefault();
      } else {
        contraseñaInput.setCustomValidity('');
      }
  
      if (!/\S+@\S+\.\S+/.test(correoInput.value)) {
        correoInput.setCustomValidity('El correo electrónico debe tener un formato válido.');
        event.preventDefault();
      } else {
        correoInput.setCustomValidity('');
      }
    });
  
    nombreInput.addEventListener('input', function() {
      nombreInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });
  
    contraseñaInput.addEventListener('input', function() {
        contraseñaInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });
  
    correoInput.addEventListener('input', function() {
      correoInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
    });
  });