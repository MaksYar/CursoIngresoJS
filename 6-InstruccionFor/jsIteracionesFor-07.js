function mostrar()
{
	let Num;
	let cont=0;
	
	Num = parseInt(prompt("Ingresar número"));
	
	for (i=1;i<=Num;i++){
	if (Num % i== 0){
		console.log(i);
		cont++;
	}
	}
	alert("La cantidad de divisores es " + cont);	
}//FIN DE LA FUNCIÓN