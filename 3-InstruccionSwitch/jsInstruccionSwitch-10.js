function mostrar()
{
	let destIng;
	let temporada;
	let Bari;
	let Cata;
	let Mard;
	let Cord;
	
	temporada = document.getElementById("txtIdEstacion").value;
	destIng = document.getElementById("txtIdDestino").value;
	

	switch (temporada) {
		case "Invierno":
		Bari = "";
		Cata = " no";
		Mard = " no";
		Cord = " no";
		break;
		case "Verano":
		Bari = " no";
		Cata = "";
		Mard = "";
		Cord = " no";
		break;
		case "Otoño":
		Bari = "";
		Cata = "";
		Mard = "";
		Cord = "";
		break;
		case "Primavera":
		Bari = " no";
		Cata = "";
		Mard = "";
		Cord = "";
		break;
	}


	switch (destIng) {
		case "Bariloche":
		alert("En la temporada de " + temporada +  Bari + " se viaja a " + destIng);
		break;
		case "Cataratas":
		alert("En la temporada de " + temporada +  Cata + " se viaja a " + destIng);
		break;
		case "Mar del plata":
		alert("En la temporada de " + temporada + Mard + " se viaja a " + destIng);
		break;
		case "Cordoba":
		alert("En la temporada de " + temporada + Cord + " se viaja a " + destIng);
			break;
	}

}//FIN DE LA FUNCIÓN