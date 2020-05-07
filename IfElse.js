var edad = prompt("ingresa tu edad");
var out = isNaN(edad);

if (out) { //out=true por lo que no es un numero
    alert("no ingresaste una edad valida,ingresa tu edad con numeros.");
} else if (edad < 16) {
    alert("eres un joven ");
} else if (edad < 26) {
    alert("eres todo un adulto");
} else if (edad < 45) {
    alert("en tu mejor momento");
} else {
    alert("tienes que cuidarte");
}