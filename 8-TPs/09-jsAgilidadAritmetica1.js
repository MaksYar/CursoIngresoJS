/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let vMaximo=10;
let vMinimo=1;
let vMaximoo=1;
let vMinimoo=4;
let num1;
let num2;
let signoN; //1="+" 2="-" 3="*" 4="/"
let signoS;
let resultado;
let respuesta;

function comenzar()
{
    num1 = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);
    num2 = Math.round(Math.random() * (vMaximo - vMinimo) + vMinimo);	
    signoN = Math.round(Math.random() * (vMaximoo - vMinimoo) + vMinimoo);
    document.getElementById("txtIdPrimerNumero").value=num1;
    document.getElementById("txtIdSegundoNumero").value=num2;
    switch (signoN) {
        case 1:
        signoS="+";
        resultado= num1+num2
        break;
        case 2:
        signoS="-";
        resultado= num1-num2
        break;
        case 3:
        signoS="*";
        resultado= num1*num2
        break;
        case 4:
        signoS="/";
        resultado= num1/num2
        break;
    }
    document.getElementById("txtIdOperador").value=signoS;
    alert(resultado)

}//FIN DE LA FUNCIÓN

function Responder(){

respuesta=parseFloat(document.getElementById("txtIdRespuesta").value);
if(resultado==respuesta){
alert("Respuesta correcta");
}
else {
    alert("Respuesta incorrecta");
}
}//FIN DE LA FUNCIÓN
