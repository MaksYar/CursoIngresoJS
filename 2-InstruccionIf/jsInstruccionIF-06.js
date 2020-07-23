function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad < 13)
	{
		alert("Niño");
	}

	if ((vEdad >= 13 && vEdad <= 17))
	{
		alert("Adolescente");
	}
	if(vEdad >= 18)
	{
		alert("Adulto");
	}

}//FIN DE LA FUNCIÓN