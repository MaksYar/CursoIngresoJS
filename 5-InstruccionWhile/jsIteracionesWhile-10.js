/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let	nPos=0;
let	nNeg=0;
let	positivos=0;
let	negativos=0; 
let	nCeros=0;
let	nPares=0;
let numValido;
let numIngresado;
let i=0;

do {
if(i!=0){
numValido=numIngresado

	if (numValido==0){
		nCeros++;
	}
	else if (numValido%2 == 0){
	nPares++;
	}
	if (numValido>0){
	nPos++;
	positivos=numValido+positivos;
	}
	else if (numValido<0){
	nNeg++;
	negativos=numValido+negativos;
	}

}
i++
numIngresado= parseInt(prompt("Ingrese un numero"));
}
while(!(isNaN(numIngresado)));

if(i==1){
alert("No se ingreso ningun numero");
}
else{
	if(nPos==0){
	nPos=1;
	}
	if(nNeg==0){
	nNeg=1;
	}
	document.write("<b><h1>Resultados de numeros ingresados</h1><p>")
	document.write("La suma de los numeros negativos da: "+ negativos*(-1)+ "<br>");
	document.write("La suma de los numeros positivos da: "+ positivos+ "<br>");
	document.write("La cantidad de numeros positivos ingresados es: "+ nPos+ "<br>");
	document.write("La cantidad de numeros negativos ingresados es: "+ nNeg + "<br>");
	document.write("La cantidad de ceros ingresados es: "+ nCeros+ "<br>");
	document.write("La cantidad de numeros pares ingresados es: "+ nPares+ "<br>");
	document.write("El promedio de los numeros positivos ingresados es: "+ (positivos/nPos).toFixed(2)+ "<br>");
	document.write("El promedio de los numeros negativos ingresados es: "+ ((negativos/nNeg)*(-1)).toFixed(2)+ "<br>");
	document.write("La diferencia entre los numeros positivos y negativos da: "+ (positivos+negativos)+"</b>");

}
}//FIN DE LA FUNCIÓN