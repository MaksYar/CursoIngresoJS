function mostrar()
{

	let acumulador=0;
	let numeroIngresado;
	const nRep=5;
	let i=0;
	document.getElementById("txtIdSuma").value="";
	document.getElementById("txtIdPromedio").value="";
	while(i<nRep){
		numeroIngresado=parseInt(prompt("Ingrese el numero","Aqui"));
		acumulador=numeroIngresado+acumulador;
		i++;
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/nRep;
	
}//FIN DE LA FUNCIÓN