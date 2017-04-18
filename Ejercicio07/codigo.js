/*
 * Ejercicio 07
 *
 * El factorial de un número entero n es una operación matemática que consiste en multiplicar todos
 * los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a:
 * 5! = 5 x 4 x 3 x 2 x 1 = 120
 *
 * Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
 */

var entero = prompt("CÁLCULO DE FACTORIAL\nIngrese un número entero:");
var resultado = 1;

for (var i = entero; i > 0; i--) {
	resultado *= i;
}

alert("El factorial del número ingresado es: " + resultado);
 
