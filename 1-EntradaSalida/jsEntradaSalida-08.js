/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

let numUno;
let numDos;

function SacarResto()
{
	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	alert("El resto es " + (numUno % numDos));	
}