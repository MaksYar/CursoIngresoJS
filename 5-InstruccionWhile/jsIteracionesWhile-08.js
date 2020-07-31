/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let acumulador=0;
	let numeroIngresado=0;
	let numeroSumado=0;
	let	multiplicados=1;

	do{
		numeroSumado=numeroIngresado;

		if(numeroSumado >= 0){
		acumulador=numeroSumado+acumulador;
		}
		else{
		multiplicados=multiplicados*numeroSumado;
		}
		numeroIngresado=parseInt(prompt("Ingrese el numero"));

	}
	while(!(isNaN(numeroIngresado)));

	if(multiplicados<0){
	multiplicados=multiplicados*(-1);
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdProducto").value=multiplicados;

}//FIN DE LA FUNCIÓN