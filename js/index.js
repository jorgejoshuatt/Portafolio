const items = document.querySelectorAll('.item');
const cuerpos = document.querySelectorAll('.cuerpo');
const sobreMi = document.querySelector('.sobre__mi');
const cuerpoSobreMi = document.querySelector('.cuerpo.sobre__mi');
sobreMi.classList.add('active');
cuerpoSobreMi.classList.add('active');
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('active'));
    cuerpos.forEach(cuerpo => cuerpo.classList.remove('active'));
    item.classList.add('active');
    cuerpos[index].classList.add('active');
  });
});

const opciones = document.querySelectorAll('.opcion');
const descripciones = document.querySelectorAll('.descripcion');
const educacion = document.querySelector('.opcion.educacion');
const descripcionEducacion = document.querySelector('.descripcion.educacion');
educacion.classList.add('active');
descripcionEducacion.classList.add('active');
opciones.forEach((opcion, index) => {
    opcion.addEventListener('click', () => {
      opciones.forEach(opcion => opcion.classList.remove('active'));
      descripciones.forEach(descripcion => descripcion.classList.remove('active'));
      opcion.classList.add('active');
      descripciones[index].classList.add('active');
    });
  });