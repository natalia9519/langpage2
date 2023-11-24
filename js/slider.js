
document.addEventListener('DOMContentLoaded', function() {
  let index = 0;
  const images = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');

  function showImage() {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';  // Oculta todas las imágenes
    }
    images[index].style.display = 'block';  // Muestra la imagen actual
  }

  function nextImage() {
    index = (index + 1) % images.length;  // Avanza al siguiente índice, reiniciando si es necesario
    showImage();  // Muestra la imagen actual
  }

  function prevImage() {
    index = (index - 1 + images.length) % images.length;  // Retrocede al índice anterior, reiniciando si es necesario
    showImage();  // Muestra la imagen actual
  }

  nextButton.addEventListener('click', nextImage);  // Asocia la función nextImage al botón "siguiente"
  prevButton.addEventListener('click', prevImage);  // Asocia la función prevImage al botón "anterior"

  showImage();  // Muestra la primera imagen al cargar la página
});