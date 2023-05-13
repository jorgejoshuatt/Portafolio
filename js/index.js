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

const opcionesSlider = document.querySelectorAll('.opcion__slider');
const contenidosSlider = document.querySelectorAll('.contenido__slider');
const sliderUno = document.querySelector('.opcion__slider.uno');
const contenidoSliderUno = document.querySelector('.contenido__slider.uno');
sliderUno.classList.add('active');
contenidoSliderUno.classList.add('active');
opcionesSlider.forEach((opcionSlider, index) => {
  opcionSlider.addEventListener('click', () => {
    opcionesSlider.forEach(opcionSlider => opcionSlider.classList.remove('active'));
    contenidosSlider.forEach(contenidoSlider => contenidoSlider.classList.remove('active'));
    opcionSlider.classList.add('active');
    contenidosSlider[index].classList.add('active');
  });
});

const opcionesSliderCertificados = document.querySelectorAll('.opcion__slider__certificados');
const contenidosSliderCertificados = document.querySelectorAll('.contenido__slider__certificados');
const sliderUnoCertificado = document.querySelector('.opcion__slider__certificados.uno');
const contenidoSliderUnoCertificado = document.querySelector('.contenido__slider__certificados.uno');
sliderUnoCertificado.classList.add('active');
contenidoSliderUnoCertificado.classList.add('active');
opcionesSliderCertificados.forEach((opcionSlider, index) => {
  opcionSlider.addEventListener('click', () => {
    opcionesSliderCertificados.forEach(opcionSlider => opcionSlider.classList.remove('active'));
    contenidosSliderCertificados.forEach(contenidoSlider => contenidoSlider.classList.remove('active'));
    opcionSlider.classList.add('active');
    contenidosSliderCertificados[index].classList.add('active');
  });
});