function mostrar()
{

let destIng;

destIng = document.getElementById("txtIdDestino").value;

switch (destIng) {
	case "Bariloche":
	alert("Bariloche se encuentra en el oeste de Argentina");
	break;
	case "Cataratas":
	alert("Las Cataratas se encuentran en el norte de Argentina");
	break;
	case "Mar del plata":
	alert("Mar del plata se encuentra en el este de Argentina");
	break;
	case "Cordoba":
	alert("Ushuaia se encuentra en el sur de Argentina");
		break;
}

}//FIN DE LA FUNCIÓN