/*
 * Ejercicio 08
 *
 * Escribir el código de una función a la que se pasa como parámetro un número
 * entero y devuelve como resultado una cadena de texto que indica si el número
 * es par o impar. Mostrar por pantalla el resultado devuelto por la función. 
 */
 
function par_impar(número) {
	// si es par
	if (número % 2 == 0) {
		return "PAR";
	}
	// si es impar
	else {
		return "IMPAR";
	}
}

var númeroUsuario = prompt("Introduzca un número entero, por favor:");

// en caso de que el usuario no introduzca un número entero
if (númeroUsuario <= 0) {
	alert("ERROR: el número introducido no es entero!!");
}
if (númeroUsuario > 0) {
	var resultado = par_impar(númeroUsuario);
	alert("El número introducido resulta ser " + resultado);
}