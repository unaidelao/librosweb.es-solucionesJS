/*
 * Ejercicio 14
 *
 * A partir de la página web proporcionada, completar el código JavaScript para
 * que:
 *
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa
 *    sección de contenidos.
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea
 *    idéntico al del primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
 *    (pista: propiedad innerHTML)
 */
 
 function ocultaYmuestra(numero) {
   var contenido = document.getElementById("contenido_" + numero);
   var enlace = document.getElementById("enlace_" + numero);
   
   if (contenido.className == "visible") {
     contenido.className = "oculto";
     enlace.innerHTML = "Mostrar contenidos";
   }
   else {
     contenido.className = "visible";
     enlace.innerHTML = "Ocultar contenidos";
   }
 }