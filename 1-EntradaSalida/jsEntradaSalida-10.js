/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 10 REPASO


Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento puesto en promt
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var descuentoIngresado;
	var descuentoDelSueldo;
	var sueldoDescontado;
	
	importeIngresado = document.getElementById("txtIdImporte").value;
	descuentoIngresado = prompt("Ingrse el descuento")
	

	importeIngresado = parseFloat(importeIngresado);
	descuentoIngresado = parseFloat(descuentoIngresado);

	/*descuentoDelSueldo = importeIngresado * descuentoIngresado / 100;
	sueldoDescontado = importeIngresado - descuentoDelSueldo;*/

	sueldoDescontado = importeIngresado * ((100 - descuentoIngresado)/100); // (1 - ( descuentoIngresado/100));

	document.getElementById("txtIdResultado").value = sueldoDescontado;
}








/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 10


Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/ /*
function mostrarAumento()
{
	var importeIngresado;
	var descuentoDelSueldo;
	var sueldoDescontado;
	
	importeIngresado = document.getElementById("txtIdImporte").value;
	

	importeIngresado = parseInt(importeIngresado);
	descuentoDelSueldo = parseInt(descuentoDelSueldo);

	descuentoDelSueldo = importeIngresado * 25 / 100;
	sueldoDescontado = importeIngresado - descuentoDelSueldo;

	document.getElementById("txtIdResultado").value = sueldoDescontado;
}
*/