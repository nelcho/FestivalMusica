document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

function navegacionFija() {

    const barra = document.querySelector('.header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) { // Como los enlaces son varios "lineUp, galeria, boletos" se deben recorrer con el ".forEach" para despues asignarles el EvenListener y trabajar con ellos de forma individual
        enlace.addEventListener('click', function(event) {
            eevent.preventDefault();
            const seccion = document.querySelector(event.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes"); // Selecciona dentro del HTML la clase "galeria-imagenes"

    for(let i = 1; i <= 12; i++) { // Recorre el nombre de las imagenes que estan organizadas por numeros
        const imagen = document.createElement("IMG"); // Crea en el HTML el elemento <img
        imagen.src = `assets/img/${i}.jpg`; // Agrega al <img el nombre de la imagen
        imagen.dataset.imagenId = i; // Genera un atributo personalizado en cada imagen que muestra el nombre de la imagen que es un string

        const lista = document.createElement("LI"); // // Crea en el HTML el elemento <li
        lista.appendChild(imagen); // Agrega la imagen a los <li

        galeria.appendChild(lista); // Agrega la lista a la galeria

        imagen.onclick = mostrarImagen; // Añade la funcion de mostrar imagen grande
    }
}


function mostrarImagen(event) {
    const id = parseInt(event.target.dataset.imagenId); // Toma el atributo personalizado "imagenId" y convierte en numero el nombre de la imagen

    const imagen = document.createElement("IMG"); // Estas lineas generan la imagen en tamaño grande
    imagen.src = `assets/img/g${id}.jpg`;

    const overlay = document.createElement("DIV"); // Creamos un div al cual le agregamos la imagen generada
    overlay.appendChild(imagen);
    overlay.classList.add("overlay"); // Le agregamos un nombre de clase a la capa overlay para poder trabajarla con css

    overlay.onclick = function() { // Permite cerrar la imagen dando click en cualquier parte del overlay
        overlay.remove();
    }

    const cerrarImagen = document.createElement("P"); // Creamos un boton para poder cerrar la imagen al abrirla
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add("btn-cerrar");

    cerrarImagen.onclick = function() { // Cierra la imagen cuando damos clic en el boton de cerrar imagen
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen); // Agregamos al overlay el boton de cerrar la imagen

    const body = document.querySelector("body"); // Muestra las imagenes en el HTML pero sin efectos css
    body.appendChild(overlay);
    body.classList.add("fijar-body"); // Se agrega una clase al body para configurar en el css que se fije al abrir una imagen
}