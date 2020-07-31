/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	do {
		sexo = prompt("Ingrese alguno de los dos sexos","En este campo");
	}
	  while (!(sexo== "f" || sexo=="m"));

	  document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN