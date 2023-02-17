/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadDeAlambre;
    var perimetroTerreno;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetroTerreno = (largo + ancho) * 2;

    cantidadDeAlambre = perimetroTerreno * 3;

    alert("La cantidad de alambre requerido: " + cantidadDeAlambre.toFixed(2) + " metros. Compra un poco mas raton.");


/*

cantidadDeAlambre.toFixed(2)
txtIdLargo
txtIdAncho
txtIdRadio
*/

}
function Circulo () 
{
	var radio;
    var cantidadDeAlambre;
    var perimetroTerreno;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetroTerreno = 2 * Math.PI * radio;
    cantidadDeAlambre = perimetroTerreno * 3;

    alert("La cantidad de alambre requerido: " + cantidadDeAlambre.toFixed(2) + " metros. Compra un poco mas raton.");
}
function Materiales () 
{
	var largo;
    var ancho;
    var bolsaCal;
    var bolsaCemento;
    var metroCuadrado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);

    metroCuadrado = largo * ancho;
    bolsaCemento = metroCuadrado * 2;
    bolsaCal = metroCuadrado * 3;

    alert("se necesitan: " + bolsaCal + " bolsas de cal y " + bolsaCemento + " bolsas de cemento.");
}

/*
function Materiales () 
{
	 var largo;
   var ancho; 
   var bolsaCal;
   var bolsaCementos;
   var metroCuadrado; 

   largo = document.getElementById("txtIdLargo").value;
   ancho = document.getElementById("txtIdAncho").value;
   
   ancho = parseFloat(ancho);
   largo = parseFloat(largo);

   metroCuadrado = largo * ancho; 
  
   bolsaCementos = metroCuadrado * 2;
   bolsaCal = metroCuadrado * 3; 

   alert(`se nesecitan ${bolsaCal} bolsas de cal y ${bolsaCementos} bolsas de cemento.`);
  }

*/
