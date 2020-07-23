/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    let numUno;
    let numDos;
    let numTres;

	numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("La suma da " + (numUno + numDos + numTres));
    

}
function Promedio () 
{
    let numUno;
    let numDos;
    let numTres;

	numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("El promedio da " + (((numUno + numDos + numTres) / 3)).toFixed(2));
    
}
function PrecioFinal () 
{
    let numUno;
    let numDos;
    let numTres;

	numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("El precio final es " + ((numUno + numDos + numTres) * 1.21));	
}