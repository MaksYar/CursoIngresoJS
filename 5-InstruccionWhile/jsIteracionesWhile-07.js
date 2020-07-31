/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumulador=0;
	let numeroIngresado=0;
	let numeroSumado=0;
	let i=0;
	let divporceroholaholaholahola

	do{
		numeroSumado=numeroIngresado;
		acumulador=numeroSumado+acumulador;
		numeroIngresado=parseInt(prompt("Ingrese el numero"));
		i++;
	}
	while(!(isNaN(numeroIngresado)));

	document.getElementById("txtIdSuma").value=acumulador;

	if(acumulador==0){
	divporceroholaholaholahola=0;
	}
	else{
	divporceroholaholaholahola=(acumulador/(i-1)).toFixed(2);
	}
	document.getElementById("txtIdPromedio").value=divporceroholaholaholahola


}//FIN DE LA FUNCIÓN