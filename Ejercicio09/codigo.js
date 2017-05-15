/*
 * Ejercicio 09
 *
 * Definir una función que muestre información sobre una cadena de texto que se
 * le pasa como argumento. A partir de la cadena que se le pasa, la función
 * determina si esta cadena está formada sólo por mayúsculas, sólo por
 * minúsculas o por una mezcla de ambas.
 */
 
var texto = prompt("Introduzca un texto para ser evaluado:");

/*
 * Variable que separa el string para desacernos de los espacios y lo vuelve a
 * juntar después para poder acceder a cada elemento char.
 */
var porCaracteres = texto.split(" ").join("");

// Booleanos para tener constancia de si hay mayúsculas y/o minúsculas.
var todoMayus = false;
var todoMinus = false;

// Función que comprueba el 'case' del string.
function compruebaCase(texto) {
  for (var i = 0; i <= porCaracteres.length; i++) {
    if (porCaracteres.charAt(i) >= 'A' && porCaracteres.charAt(i) <= 'Z')
      todoMayus = true;
    else if (porCaracteres.charAt(i) >= 'a' && porCaracteres.charAt(i) <= 'z')
      todoMinus = true;
  }
  
  if (todoMayus == true && todoMinus == true)
    alert("Texto con mayúsculas y minúsculas.");
  else if (todoMayus == true && todoMinus == false)
    alert("Texto todo en mayúsculas.");
  else if (todoMayus == false && todoMinus == true)
    alert("Texto todo en minúsculas.");
  else if (todoMayus == false && todoMinus == false)
    alert("Texto todo con 'carácteres especiales'.");
}

/*
 * Llamada a la función con el string de entrada del usuario ya modificado por
 * argumento.
 */
compruebaCase(porCaracteres);