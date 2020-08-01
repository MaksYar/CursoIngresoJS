let vMaximo = 3;
let vMinimo = 1;
let vNum;
let ganados
let perdidos
let empatados

function comenzar(){
perdidos=0;
empatados=0;
ganados=0;
vNum=0;
vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
}//FIN DE LA FUNCIÓN

function piedra()
{
switch (vNum) {
    case 1:
		empatados++;
		document.getElementById("txtIdEmpatadas").value=empatados;
		alert("Empataste");
        break;
        case 2:
		perdidos++;
		document.getElementById("txtIdPerdidas").value=perdidos;
		alert("Perdiste");
        break;
        case 3:
		ganados++;
		document.getElementById("txtIdGanadas").value=ganados;
        alert("Ganaste");
        break;
}
vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
}//FIN DE LA FUNCIÓN

function papel()
{
    switch (vNum) {
        case 1:
			ganados++;
			document.getElementById("txtIdGanadas").value=ganados;
            alert("Ganaste");
            break;
            case 2:
			empatados++;
			document.getElementById("txtIdEmpatadas").value=empatados;
            alert("Empataste");
            break;
            case 3:
			perdidos++;
			document.getElementById("txtIdPerdidas").value=perdidos;
            alert("Perdiste");
            break;
}
	vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
}//FIN DE LA FUNCIÓN
function tijera(){
switch (vNum) {
    case 1:
		perdidos++;
		document.getElementById("txtIdPerdidas").value=perdidos;
        alert("Perdiste");
        break;
        case 2:
		ganados++;
		document.getElementById("txtIdGanadas").value=ganados;
        alert("Ganaste");
        break;
        case 3:
		empatados++;
		document.getElementById("txtIdEmpatadas").value=empatados;
        alert("Empataste");
        break;
}
vNum = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);


}