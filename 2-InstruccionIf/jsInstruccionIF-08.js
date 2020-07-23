function mostrar()
{
	let vEdad;
	let vEstCiv;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstCiv = document.getElementById("estadoCivil").value;

	if((vEdad >= 18) && (vEstCiv == "Soltero"))
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN