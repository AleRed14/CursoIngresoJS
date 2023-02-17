/*
Perez Alejo DIV Z Grupo 1
Ejercicio Integrador 04 COMPLETO con swhitch
*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio 
de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un
 descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el 
descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el 
descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 
10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 
10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 usar el parse despues de un promt o de un getElementById

 */
function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let marcaDeLampara;
    let precioDeLampara;
    let descuentoDePrecio;
    let descuentoAplicado;
    let impuestoIIBB;
    let precioFinal;
    let mensaje;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marcaDeLampara = document.getElementById("Marca").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    precioDeLampara = parseInt(precioDeLampara);
    descuentoDePrecio = parseInt(descuentoDePrecio);

    precioDeLampara = 35
    descuentoDePrecio = 0

    if (cantidadDeLamparas > 5) {
        descuentoDePrecio = 50;
    } else {
        switch (cantidadDeLamparas) {
            case 5:
                if (marcaDeLampara != "ArgentinaLuz") {
                    descuentoDePrecio = 30;
                } else {
                    descuentoDePrecio = 4;
                }
                break;
            case 4:
                if (marcaDeLampara != "ArgentinaLuz" && marcaDeLampara != "FelipeLamparas") {
                    descuentoDePrecio = 20;
                } else {
                    descuentoDePrecio = 25;
                }
                break;
            case 3:
                if (marcaDeLampara != "ArgentinaLuz" && marcaDeLampara != "FelipeLamparas") {
                    descuentoDePrecio = 5;
                } else {
                    if (marcaDeLampara == "ArgentinaLuz") {
                        descuentoDePrecio = 15;
                    } else {
                        descuentoDePrecio = 10;
                    }
                }
                break;
        }
    }

    descuentoAplicado = precioDeLampara * cantidadDeLamparas * (descuentoDePrecio / 100);
    precioFinal = precioDeLampara * cantidadDeLamparas - descuentoAplicado;
    impuestoIIBB = precioFinal * 0.1;

    if (precioFinal > 120) {
        mensaje = "Usted pago " + impuestoIIBB + "$ de IIBB.";
        alert(mensaje);
    }
    

    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;
}

/* 
txtIdCantidad

Marca
ArgentinaLuz
FelipeLamparas
JeLuz
HazIluminacion
Osram

txtIdprecioDescuento

/*var precioDeLampara;
    var cantidadDeLamparas;
    var totalBruto;
    var descuentoDePrecio;
    var precioFinal;
    var marcaLampara;
    var impuestoIIBB;
    var mensaje;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marcaLampara = document.getElementById("Marca").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    precioDeLampara = 35;
    descuentoDePrecio = 0;
    totalBruto = cantidadDeLamparas * precioDeLampara;

  
    //precioDeLampara = parseInt(precioDeLampara);
   // totalBruto = parseInt(totalBruto);
   // descuentoDePrecio = parseInt(descuentoDePrecio);

    /*if(cantidadDeLamparas > 5)
    {
        descuentoDePrecio = totalBruto * 0.5;
    }
    else
    {
        if(cantidadDeLamparas == 5 && Marca == "ArgentinaLuz")
        {
        descuentoDePrecio = totalBruto * 0.4;
        }
        else
        {
            if(cantidadDeLamparas == 5 && Marca != "ArgentinaLuz")
            {
                descuentoDePrecio = totalBruto * 0.3;
            }
        }
    }*/

   /* if(cantidadDeLamparas > 5)
    {
        descuentoDePrecio = totalBruto * 0.5;
    }
    else
    {
        if(cantidadDeLamparas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                descuentoDePrecio = totalBruto * 0.4;
            }
            else
            {
                descuentoDePrecio = totalBruto * 0.3;
            }
        }
        else
        {
            if(cantidadDeLamparas == 4)
            {
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                {
                    descuentoDePrecio = totalBruto * 0.25;
                }
                else
                {
                    descuentoDePrecio = totalBruto * 0.2;
                }
            }
            else
            {
                if(cantidadDeLamparas == 3)
                {
                    if(marcaLampara == "ArgentinaLuz")
                    {
                        descuentoDePrecio = totalBruto * 0.15;
                    }
                    else
                    {
                        if(marcaLampara == "FelipeLamparas")
                        {
                            descuentoDePrecio = totalBruto * 0.1;
                        }
                        else
                        {
                            descuentoDePrecio = totalBruto * 0.05;
                        }
                    }
                }
            }
        }
    }

    precioFinal = totalBruto - descuentoDePrecio;
    impuestoIIBB = precioFinal * 0.1;

    if(precioFinal > 120)
    {
        mensaje = "Usted pago " + impuestoIIBB + "$ de IIBB.";
    }

     
    //precioFinal = totalBruto - (totalBruto * descuentoDePrecio) preguntar que es
    //calculoDescuento = (precioDeLampara * descuentoDePrecio) / 100;

    document.getElementById("txtIdprecioDescuento").value = precioFinal + "$";
    alert(mensaje);*/

    /*var marcaLampara;
    var cantidadDeLamparas;
    var preciosDeLamparas;
    var descuentoDePrecio;
    totalBruto = cantidadDeLamparas * preciosDeLamparas
    preciosDeLamparas = 35;

    if(cantidad > 5)
    {
        descuentoDePrecio = totalBruto * 0.5;
    }
    else
    {
        if(cantidadDeLamparas == 5 && marca=="ArgentinaLuz")
        {
            //40%
        }
        else
        {
            if(cantidad == 5  && marca !="ArgentinaLuz")
        }
    }

    alert(descuentoDePrecio);
*/