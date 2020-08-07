function mostrar()
{
	let Num;
	let cont=0;
	
	Num = parseInt(prompt("Ingresar número"))+1;
	
	for(i=0;i<Num;i=i+2){
	
			alert("El número " +i+ " es par");
			cont++;
	
	}
	alert("Se ingresaron: " + cont + " números pares");	
}//FIN DE LA FUNCIÓN