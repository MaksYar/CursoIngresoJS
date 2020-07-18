/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let numUno;
let numDos;
let resul;
function sumar()
{
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	resul = parseInt(numUno) + parseInt(numDos)
	alert(resul);	
}

function restar()
{
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	resul = parseInt(numUno) - parseInt(numDos)
	alert(resul);	
}

function multiplicar()
{ 
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	resul = parseInt(numUno) * parseInt(numDos)
	alert(resul);	
}

function dividir()
{
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	resul = parseInt(numUno) / parseInt(numDos)
	alert(resul.toFixed(2));	
}

