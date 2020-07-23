function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	if (vEdad >= 18)
	{
		alert("Mayor de edad");
	}
	/*if (vEdad < 18)
	{
		alert("Menor de edad");
	} */
	else 
	{
		alert("Menor de edad");
	}
}//FIN DE LA FUNCIÓN