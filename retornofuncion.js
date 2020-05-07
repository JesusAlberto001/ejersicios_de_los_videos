function ObtenerAleatorio() {
    return Math.random();
}

function ObtenerNombre() {
    return "juan";
}

function esMayor05() {
    if (ObtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}
if (esMayor05()) {
    console.log("es mayor a 0.5");
} else {
    console.log("es menor que 0.5");
}

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
var persona = crearPersona("maria", "paz");


function crearFuncion() {
    return function(nombre) {
        console.log(" me crea " + nombre);

        return function() {
            console.log("segunda funcion");
        }
    }
}
var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();