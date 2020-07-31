/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let vMax=0;
	let vMin=0;
	let numeroIngresado=0;
	let numeroValido=0;
	let i=0


	do{
		if(i==1){
		vMin=numeroIngresado;
		vMax=numeroIngresado;
		}
		i++
		numeroValido=numeroIngresado;
		if(numeroValido > vMax){
		vMax=numeroValido;
		}
		else if (numeroValido < vMin){
		vMin=numeroValido;
		}
		
		numeroIngresado=parseInt(prompt("Ingrese el numero"));
	
	}
	while(!(isNaN(numeroIngresado)));

	
	document.getElementById("txtIdMaximo").value=vMax;
	document.getElementById("txtIdMinimo").value=vMin;
}//FIN DE LA FUNCIÓN