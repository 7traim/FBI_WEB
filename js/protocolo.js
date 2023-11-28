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

container.addEventListener('click', function() {
  if (container.style.display === 'none') {
    container.style.display = 'block';
    menu.style.display = 'block';
  } else {
    container.style.display = 'none';
    menu.style.display = 'none';
  }
});



var cajas = document.querySelectorAll('.card__dotacion');

cajas.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.classList.toggle('active');
  });
});

var rango = document.querySelectorAll('.card__rango');

rango.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.classList.toggle('active');
  });
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