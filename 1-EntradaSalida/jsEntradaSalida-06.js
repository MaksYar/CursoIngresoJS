/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno;
	let numDos;
	let resul;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	resul = parseInt(numUno) + parseInt(numDos)

	alert("La suma da " + resul);
	/* alert("La suma da " + (numUno + numDos)) tambien sirve 
	pero hay que parsear primero
  	 */
}

