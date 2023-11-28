document.addEventListener("DOMContentLoaded", function() {
  const legalCard = document.querySelector(".legal__card");
  const historiaCard = document.querySelector(".historia__card");
  const objetivos = document.querySelector(".container__objetivos");
  const historiaBtn = document.querySelector(".historia__btn");
  const closedBtn = document.querySelector(".closed");

  historiaBtn.addEventListener("click", function() {
      legalCard.style.display = "none"; // Oculta el cuadro legal
      objetivos.style.display = "none";
      historiaCard.style.display = "block"; // Muestra el cuadro de historia
      closedBtn.style.display = "block"; // Muestra el botón Cerrar
  });

  closedBtn.addEventListener("click", function() {
      historiaCard.style.display = "none"; // Oculta el cuadro de historia
      closedBtn.style.display = "none"; // Oculta el botón Cerrar
      legalCard.style.display = "block"; // Muestra el cuadro legal nuevamente
      objetivos.style.display = "block";
  });
});

const rightDiv = document.querySelector('.right');
const leftDiv = document.querySelector('.left');
const cardItems = document.querySelectorAll('.card__objetivos--item');
let currentItemIndex = 0;

cardItems[currentItemIndex].classList.add('active');

rightDiv.addEventListener('click', () => {
  cardItems[currentItemIndex].classList.remove('active');
  currentItemIndex = (currentItemIndex + 1) % cardItems.length;
  cardItems[currentItemIndex].classList.add('active');
});

leftDiv.addEventListener('click', () => {
  cardItems[currentItemIndex].classList.remove('active');
  currentItemIndex = (currentItemIndex - 1 + cardItems.length) % cardItems.length;
  cardItems[currentItemIndex].classList.add('active');
});



window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".menu__container");

    navbar.classList.toggle("scrolled", window.scrollY > 0);
    
});


var button = document.querySelector('.nav-toggle');
var container = document.querySelector('.menu__container');
var menu = document.querySelector('.nav-menu');

button.addEventListener('click', function() {
  if (container.style.display === 'none') {
    container.style.display = 'block';
    menu.style.display = 'block';
  } else {
    container.style.display = 'none';
    menu.style.display = 'none';
  }
});


function actualizarAnio() {
    var elementoAnio = document.getElementById('year');
    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    elementoAnio.textContent = anio;
  }
  
  actualizarAnio(); // Llamar a la función inicialmente
  
  // Actualizar el año cada segundo
  setInterval(actualizarAnio, 1000);



