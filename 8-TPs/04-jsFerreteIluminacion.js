/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento 
del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se 
hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    const precioUn = 35;
    let precioTot;
    let nLamp;
    let marca;
    let totalConIibb;

    nLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

/*
    if (nLamp >= 6) {
        precioTot = nLamp * precioUn * 0.50;
    
    }

    if (nLamp == 5) {
        if (marca == "ArgentinaLuz") {
            precioTot = nLamp * precioUn * 0.60;
        }
        else {
            precioTot = nLamp * precioUn * 0.70;
        }
    }

    if (nLamp == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
           precioTot = nLamp * precioUn * 0.75;
        }
        else {
           
            precioTot = nLamp * precioUn * 0.80;
        }
    }


    if (nLamp == 3) {
        if (marca == "ArgentinaLuz") {
            precioTot = nLamp * precioUn * 0.85;
        }
        else if (marca == "FelipeLamparas") {
            precioTot = nLamp * precioUn * 0.90;
        }
        else {
            precioTot = nLamp * precioUn * 0.95;
        }
    }
    if(nLamp < 3) {
        precioTot = nLamp*precioUn
    }

    if (precioTot >= 120) {
        totalConIibb = (precioTot * 1.1).toFixed(2);
        alert("Usted pago " + ((precioTot * 0.1)).toFixed(2) + " de IIBB");
        document.getElementById("txtIdprecioDescuento").value = totalConIibb;
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioTot;
    }

}

*/ 
switch (nLamp) {
    case 1:
    case 2:
    precioTot = nLamp * precioUn;
    break;
    case 3:
            switch (marca) {
            case "ArgentinaLuz":
            precioTot = nLamp * precioUn * 0.85;
            break;
            case "FelipeLamparas":
            precioTot = nLamp * precioUn * 0.9;
            break;
            default:
            precioTot = nLamp * precioUn * 0.95;
            break;
            }
    case 4:
            switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            precioTot = nLamp * precioUn * 0.75;
            break;
            default:
            precioTot = nLamp * precioUn * 0.80;
            break;
            }

    case 5:
            switch (marca) {
            case "ArgentinaLuz":
            precioTot = nLamp * precioUn * 0.60;
            break;
            default:
            precioTot = nLamp * precioUn * 0.70;
            break;
            }
}

if (nLamp >= 6){
precioTot = nLamp * precioUn * 0.5;
}
if (precioTot >= 120){
    totalConIibb = (precioTot * 1.1).toFixed(2);
    alert("Usted pago " + ((precioTot * 0.1)).toFixed(2) + " de IIBB");
    document.getElementById("txtIdprecioDescuento").value = totalConIibb;
}
else {
document.getElementById("txtIdprecioDescuento").value = precioTot;
}
}
