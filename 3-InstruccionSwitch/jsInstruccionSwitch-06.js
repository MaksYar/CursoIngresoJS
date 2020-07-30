function mostrar()
{
	let vHora;
	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (vHora)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 20:
		case 21:
		case 22:
		case 23:
		alert("Es de noche.");
		break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		break;
		alert("Es de mañana.");
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("Es de tarde.");
		break;
		default:
		alert("Esta hora no existe");
		break;
	}








/*
	let vHora;
	vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (true) 
	{
		case (vHora >= 7 && vHora <= 11): 
		alert("Es de mañana.");
		break;
		case (vHora >= 12 && vHora <= 19): 
		alert("Es de tarde.");
		break;
		case (vHora >= 20 && vHora <= 23):
		case (vHora >= 0 && vHora <= 6): 
		alert("Es de Noche.");
		break;
		default: 
		alert("La hora no existe.");
		break;
		
	}
*/

}//FIN DE LA FUNCIÓN