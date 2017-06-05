/*
 * Ejercicio 12
 *
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre
 * el enlace se muestre completo el contenido de texto.
 *
 * Además, el enlace debe dejar de mostrarse después de pulsarlo por primera
 * vez.
 */
 
 function muestra() {
   /*
    * Variables que recogen "textoAdicional" y "enlace" desde HTML y se le
    * aplican unos estilos CSS ya predeterminados en misestilos.css
    */
   var texto = document.getElementById("textoAdicional").className = "visible";
   
   var enlace = document.getElementById("enlace").className = "oculto";
 }