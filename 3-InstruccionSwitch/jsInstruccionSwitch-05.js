function mostrar()
{
	let vHora;
	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (true) 
	{
		case (vHora >= 7 && vHora <= 11): 
		alert("Es de mañana.");
		break;
	}
	
	
	
/*0	switch (vHora) 
	{
		case 7: 
		case 8:
		case 9:
		case 10:
		case 11:
		alert("Es de mañana.");
		break;
	
	}
	*/

}//FIN DE LA FUNCIÓN