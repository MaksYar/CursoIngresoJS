/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precioUn=35;
    let precioTot
    let nLamp;
    let descuento;
    let marca;
    let precioConDescuento;
    let totalConIibb;
    let iibb;

        nLamp = (document.getElementById("txtIdCantidad").value);
        marca = document.getElementById("Marca").value;
        
        if (nLamp >= 6) 
        {
        precioTot = nLamp * precioUn * 0.5;
        }  
        else if (nLamp == 5)
            {
            if (marca = "ArgentinaLuz")
            {
            precioTot = nLamp * precioUn * 0.6;
            else
            precioTot = nLamp * precioUn * 0.7;
        }
        }
        if (nLamp == 4)
        {
        if (marca = "ArgentinaLuz")
        {
        precioTot = nLamp * precioUn * 0.6;
        else
        precioTot = nLamp * precioUn * 0.7;


        if (nLamp )
        }

      precioConDescuento=parseFloat(((cantLamparas*precio)*descuento)).toFixed(2);
      document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

        if (precioConDescuento > 120) {
            totalConIibb= precioConDescuento *1.10;
            iibb=totalConIibb - precioConDescuento;
                alert ("Ud. pago " + totalConIibb+ " siendo " +iibb+ " el impuesto que se pagó")
           
        }
}
