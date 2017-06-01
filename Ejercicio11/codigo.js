/*
 * Ejercicio 11
 *
 * A partir de la página web proporcionada y utilizando las funciones DOM,
 * mostrar por pantalla la siguiente información:
 *
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Número de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 */
 
 window.onload = function() {
   var enlaces = document.getElementsByTagName("a");
   
	 // Numero de enlaces de la pagina
   alert("1. Número de enlaces de la página: " + enlaces.length);
   
	 // Direccion del penultimo enlace
   alert("2. Dirección del penúltimo enlace: " + enlaces[enlaces.length -2].href);
   
	 // Numero de enlaces que apuntan a http://prueba
   var conteo = 0;
   
   for (var i = 0; i < enlaces.length; i++) {
     if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
       conteo++;
     }
   }
   alert("3. Número de enlaces que apuntan a http://prueba: " + conteo);
   
	 // Numero de enlaces del tercer párrafo
   var parrafos = document.getElementsByTagName("p");
   var ultimoParrafo = parrafos[parrafos.length -1];
   
   var enlacesUltimoParrafo = ultimoParrafo.getElementsByTagName("a");
   alert("4. Número de enlaces del tercer párrafo: " + enlacesUltimoParrafo.length);
}