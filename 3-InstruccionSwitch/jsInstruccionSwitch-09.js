function mostrar()
{
	let destIng;
	let temporada;
	let precioBase = 15000;
	let Bari;
	let Cata;
	let Mard;
	let Cord;
	
	temporada = document.getElementById("txtIdEstacion").value;
	destIng = document.getElementById("txtIdDestino").value;
	

	switch (temporada) {
		case "Invierno":
		Bari = 1.2;
		Cata = 0.9;
		Mard = 0.8;
		Cord = 0.9;
		break;
		case "Verano":
		Bari = 0.8;
		Cata = 1.1;
		Mard = 1.2;
		Cord = 1.1;
		break;
		case "Otoño":
		case "Primavera":
		Bari = 1.1;
		Cata = 1.1;
		Mard = 1.1;
		Cord = 1;
		break;
	}


	switch (destIng) {
		case "Bariloche":
		alert("El viaje a Bariloche le cuesta " + (Bari * precioBase) + " pesos");
		break;
		case "Cataratas":
		alert("El viaje a Cataratas le cuesta " + (Cata * precioBase) + " pesos");
		break;
		case "Mar del plata":
		alert("El viaje a Mar del Plata le cuesta " + (Mard * precioBase) + " pesos");
		break;
		case "Cordoba":
		alert("El viaje a Ushuaia le cuesta " + (Cord * precioBase) + " pesos");
			break;
	}

}//FIN DE LA FUNCIÓN