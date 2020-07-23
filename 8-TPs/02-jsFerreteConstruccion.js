/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;

	largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    

    alert("La cantidad de alambre son " + ((largo + ancho)*6) + " metros");
}
function Circulo () 
{
    let radio;
    
    radio = parseInt(document.getElementById("txtIdRadio").value);
    alert("La cantidad de alambre son " + (radio * 18.84) + " metros");
}
function Materiales () 
{
    let largo;
    let ancho;
   
	largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    

    alert("Se necesitan " + (largo * ancho * 2) + " bolsas de cemento y " 
    + (largo * ancho * 3) + " bolsas de cal");
    
}