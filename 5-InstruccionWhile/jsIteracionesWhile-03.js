/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let contraseña;

	do {
		contraseña = prompt("Ingrese su contraseña","En este campo");
	}
	  while (contraseña != "utn750");

	alert("contraseña correcta");
}
