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


function actualizarAnio() {
    var elementoAnio = document.getElementById('year');
    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    elementoAnio.textContent = anio;
  }
  
  actualizarAnio(); // Llamar a la función inicialmente
  
  // Actualizar el año cada segundo
  setInterval(actualizarAnio, 1000);


var agente = document.querySelectorAll('.container__agente');

agente.forEach(caja => {
  caja.addEventListener('click', function() {
    caja.classList.toggle('active');
  });
});

const denzel = document.querySelector('.denzel');

denzel.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const pearl = document.querySelector('.pearl');

pearl.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const betraim = document.querySelector('.betraim');

betraim.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const jazmin = document.querySelector('.jazmin');

jazmin.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const alana = document.querySelector('.alana');

alana.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const alisson = document.querySelector('.alisson');

alisson.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const daisaro = document.querySelector('.daisaro');

daisaro.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const demir = document.querySelector('.demir');

demir.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const valeria = document.querySelector('.valeria');

valeria.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const myeong = document.querySelector('.myeong');

myeong.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const dowon = document.querySelector('.dowon');

dowon.addEventListener('click', function () {
    this.classList.toggle('overlay');
});

const aylen = document.querySelector('.aylen');

aylen.addEventListener('click', function () {
    this.classList.toggle('overlay');
});



