/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let contraseña;

	do {
		contraseña = parseInt(prompt("Ingrese un numero entre 0 y 9","En este campo"));
	}
	  while (!(contraseña >=0 && contraseña<=9));

	  document.getElementById("txtIdNumero").value=contraseña;
}