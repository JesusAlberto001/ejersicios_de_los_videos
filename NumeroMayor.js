var inputNum1 = Number(prompt("ingresa el primer numero "));
var inputNum2 = Number(prompt("ingresa el segundo numero "));
var inputNum3 = Number(prompt("ingresa el tercer numero "));

if (inputNum1 > inputNum2 && inputNum1 > inputNum3) {
    document.write("El numero mayor es " + inputNum1);
} else if (inputNum2 > inputNum3) {
    document.write("El numero mayor es " + inputNum2);
} else {
    document.write("El numero mayor es " + inputNum3);
}