function mostrar()
{

	let Num;
	let cont=0;
	do{
	Num = parseInt(prompt("Ingresar número"));
	}
	while(isNaN(Num) || (Num<0));
	for (i=1;i<=Num;i++){
	if (Num % i== 0){
		cont++;
	}
	}
	if(cont==2){
	alert("Es numero primo");
	}
	else{
	alert("No es numero primo");
	}

}//FIN DE LA FUNCIÓN