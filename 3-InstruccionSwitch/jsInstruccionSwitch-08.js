function mostrar()
{
	let destIng;

	destIng = document.getElementById("txtIdDestino").value;
	
	switch (destIng) {
		case "Bariloche":
		alert("En Bariloche hace frio");
		break;
		case "Cataratas":
		alert("En Cataratas hace calor y es humedo");
		break;
		case "Mar del plata":
		alert("En Mar del plata es humedo y lluvioso");
		break;
		case "Cordoba":
		alert("En Ushuaia hace frio y nieva");
			break;
	}

}//FIN DE LA FUNCIÓN