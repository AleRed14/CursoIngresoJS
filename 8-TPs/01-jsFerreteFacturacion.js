/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
	
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;
    alert("El resultado de la suma es:  " + sumaDePrecios);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedioPrecios;
	
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    promedioPrecios = (precioUno + precioDos + precioTres) / 3;
    alert("El promedio es: " + promedioPrecios);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
    var iva;
    var precioFinal;
	
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;
    iva = sumaDePrecios * 0.21 ;
    precioFinal = sumaDePrecios + iva;
    alert("El precio final es :" + precioFinal.toFixed(2));
}

/*
txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres
*/


