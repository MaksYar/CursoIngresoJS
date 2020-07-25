function mostrar()
{
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) 
	{
		case "Febrero":
			alert("Este mes tiene 28 días o 29 en año bisiesto.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene tiene 30 días.");
			break;
			default:
			alert("Este mes tiene 31.");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN