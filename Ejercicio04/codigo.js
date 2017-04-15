/*
 * Ejercicio 04
 *
 * A partir del siguiente array que se proporciona:
 *     var valores = [true, 5, false, "hola", "adios", 2];
 *
 * (1) Determinar cual de los dos elementos de texto es mayor.
 *
 * (2) Utilizando exclusivamente los dos valores booleanos del array,
 * determinar los operadores necesarios para obtener un resultado true y otro
 * resultado false.
 *
 * (3) Determinar el resultado de las cinco operaciones matemáticas realizadas
 * con los dos elementos numéricos.
 */

var valores = [ true, 5, false, "hola", "adios", 2];

// (1)
if (valores[3] > valores[4]) {
  alert(valores[3] + " es el texto mayor del array.");
}
else {
  alert(valores[4] + " es el texto mayor del array.");
}

// (2)
var verdadero = valores[0] || valores[2];
alert("El resultado de true || false es " + verdadero);

var falso = valores[0] && valores[2];
alert("El resultado de true && false es " + falso);

// (3)
alert("5+2 = " + (valores[1] + valores[5]));
alert("5-2 = " + (valores[1] - valores[5]));
alert("5*2 = " + (valores[1] * valores[5]));
alert("5/2 = " + (valores[1] / valores[5]));
alert("5%2 = " + (valores[1] % valores[5]));
