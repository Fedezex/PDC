
// Encuentra al elemento HTML mediante su ID
const miBoton = document.getElementById('miBoton');

// Definir la funcion que se ejecutará cuando se haga click en el boton
function handleClick() {
    alert('Hola, haz hecho click en el boton.');
}

// Añadir en oyente de eventos al boton
miBoton.addEventListener("click", handleClick);
