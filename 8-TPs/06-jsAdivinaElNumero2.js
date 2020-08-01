/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let vMaximo = 100; // inicializar es dar un valor a la variable. "a partir de allí empezamos a contar"
let vMinimo = 1;
let vNum;
let comparador;
let intentos = 0;

function comenzar() {
intentos=0;
  vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
  alert("Numero generado ");
}

function verificar() {
  comparador = parseInt(document.getElementById("txtIdNumero").value);
  if(comparador>0 && comparador<100){
  intentos++;
  document.getElementById("txtIdIntentos").value = intentos;

  	if (comparador > vNum){
    alert("Se pasó del número secreto.");
  }
	else if(comparador < vNum){
  alert("Falta para llegar al número secreto.");
	}

  if (comparador == vNum) {
	document.getElementById("txtIdIntentos").value = intentos;
	  switch (intentos) {
		  case 1:
			alert("Usted es un psiquico");
			  break;
		case 2:
			alert("Excelente percepcion");
			break;
		case 3:
			alert("Eso es suerte");
			break
		case 4:
			alert("Excelente tecnica");
			break;
		case 5:
			alert("Usted esta en la media")
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta tecnica");
			break;
		  default:
			alert("Afortunado en el amor");
			  break;
	  }
	  }	 
	}
	else{
		alert("Ingrese un numero entre 0 y 100");
	}



}