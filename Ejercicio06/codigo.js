/*
 * Ejercicio 06
 *
 * El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático
 * sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23.
 * A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de
 * letras.
 *
 * El array de letras es:
 *    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
 *                  'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 *
 * Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra
 * es la A. Con estos datos, elaborar un pequeño script que:
 *
 * Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra
 * del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su
 * número y su letra, se puede utilizar la función prompt()) En primer lugar (y en una sola
 * instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el
 * caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el
 * programa no muestra más mensajes.
 *
 * Si el número es válido, se calcula la letra que le corresponde según el método explicado
 * anteriormente.
 *
 * Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no
 * coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es
 * correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son
 * correctos.
 */

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var usuarioDNI = prompt("Ingrese las cifras del DNI:");
var letraUsuarioDNI = prompt("Ingrese la letra del DNI:");
letraUsuarioDNI = letraUsuarioDNI.toUpperCase();

if (usuarioDNI < 0 || usuarioDNI > 99999999) {
	alert("El número proporcionado no es válido!");
}
else {
	var testLetraDNI = letras[usuarioDNI % 23];
	
	if (testLetraDNI != letraUsuarioDNI) {
		alert("La letra ingresada o el DNI no son correctos!");
	}
	else {
		alert("El número y la letra del DNI son correctos.");
	}
}
 
