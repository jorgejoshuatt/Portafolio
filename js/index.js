/*
const carrusel = document.querySelector('.carrusel');
const flechaIzquierda = document.querySelector('#flecha-izquierda');
const flechaDerecha = document.querySelector('#flecha-derecha');
let indice = 0;

const items = carrusel.querySelectorAll('.item');
const numItems = items.length;

// Establecer la clase active para los primeros 3 elementos
for (let i = 0; i < 3; i++) {
  items[i].classList.add('active');
}

flechaDerecha.addEventListener('click', () => {
  if (indice < numItems - 3) {
    // Ocultar el elemento que sale de la vista
    items[indice].classList.remove('active');
    // Mostrar el elemento que entra en la vista
    items[indice + 3].classList.add('active');
    // Mover el carrusel
    carrusel.style.left  = `-${(indice + 1) * 100 / 3}%`;
    indice++;
  }
});

flechaIzquierda.addEventListener('click', () => {
  if (indice > 0) {
    // Ocultar el elemento que sale de la vista
    items[indice + 2].classList.remove('active');
    // Mostrar el elemento que entra en la vista
    items[indice - 1].classList.add('active');
    // Mover el carrusel
    carrusel.style.right = `-${(indice - 1) * 100 / 3}%`;
    indice--;
  }
});

*/