function mostrar()
{
	let vMaximo = 10; // inicializar es dar un valor a la variable. "a partir de allí empezamos a contar"
	let vMinimo = 1;
	let vNum;

	vNum = Math.round( Math.random()* (vMaximo - vMinimo) + vMinimo);

	alert(vNum);

}//FIN DE LA FUNCIÓN