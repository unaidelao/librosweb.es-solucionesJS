/*
 * Ejercicio 13
 *
 * Completar el código JavaScript proporcionado para que se añadan nuevos
 * elementos a la lista cada vez que se pulsa sobre el botón. Utilizar las
 * funciones DOM para crear nuevos nodos y añadirlos a la lista existente.
 */
 

 // Añade un nuevo elemento li
 function anade() {
   // Se crea el nuevo elemento li
   var elemento = document.createElement("li");
   // Se crea el texto del elemento li recién creado
   var texto = document.createTextNode("Nuevo elemento en la lista");
   // Se fija el texto a su elemento
   elemento.appendChild(texto);
   
   /*
    * Se crea variable para recoger el elemento lista definido en HTML, y se le
    * añade el elemento de tipo li acabamos de crear
    */
   var lista = document.getElementById("lista");
   lista.appendChild(elemento);
 }
 