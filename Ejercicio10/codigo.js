/*
 * Ejercicio 10
 *
 * Definir una función que determine si la cadena de texto que se le pasa como
 * parámetro es un palíndromo, es decir, si se lee de la misma forma desde la
 * izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos
 * aporto otro paso natural".
 */
 
 var texto = prompt("Introduce un texto, ¡a ver si es palíndromo!");
 var porCaracteres = texto.split(" ").join("").toUpperCase();
 
 /*
  * Función que retorna todos los carácteres del string salvo el primero y el
  * último. Necesario para la función esPalindromo().
  */
  function resto(s) {
    return s.substring(1, s.length -1);
  }
  
  /*
   * Función recursiva que comprueba si un string es palíndromo.
   */
   function esPalindromo(s) {
     if (s.length <= 1) {
       alert("Sí es palíndromo.");
       return;
     }
     if (s.charAt(0) != s.charAt(s.length - 1)) {
       alert("No es palíndromo.");
       return;
     }
     else {
       return esPalindromo(resto(s));
     }
   }
  
  // Llamada a la función
  esPalindromo(porCaracteres);
   