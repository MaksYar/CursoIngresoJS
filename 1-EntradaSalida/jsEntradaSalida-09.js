/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let numUno;

	numUno = parseFloat(document.getElementById("txtIdSueldo").value);

	
	document.getElementById("txtIdResultado").value = (numUno * 1.1).toFixed(2);

	
}
