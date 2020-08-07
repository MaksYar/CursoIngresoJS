/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let vMaximo = 100; // inicializar es dar un valor a la variable. "a partir de allí empezamos a contar"
let vMinimo = 1;
let vNum;
let comparador;
let intentos = 0;

function comenzar() {
  vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
  alert("Numero generado");
}

function verificar() {
  comparador = parseInt(document.getElementById("txtIdNumero").value);
  if ((comparador > 0 && comparador < 100)) {
    intentos++;
    document.getElementById("txtIdIntentos").value = intentos;
    if (comparador == vNum) {
      alert("Usted es un ganador!!! y en solo " + intentos + "intentos.");
    }
    else if (comparador >= vNum) {
      alert("Se pasó del número secreto.");
    }
    else {
      alert("falta para llegar al número secreto.");
    }
  }
  else {
    alert("Lo ingresado no es valido");
    document.getElementById("txtIdNumero").value = "";
  }
}