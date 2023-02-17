/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 09


Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeIngresado;
	var aumentoDelSueldo;
	var sueldoAumentado;
	
	importeIngresado = document.getElementById("txtIdSueldo").value;
	

	importeIngresado = parseInt(importeIngresado);
	aumentoDelSueldo = parseInt(aumentoDelSueldo);

	aumentoDelSueldo = importeIngresado * 10 / 100;
	sueldoAumentado = importeIngresado + aumentoDelSueldo;

	document.getElementById("txtIdResultado").value = sueldoAumentado;
/*
	alert(sueldoAumentado);
/*

	var disminucionDeSueldo;
	var sueldoDisminuido;

	sueldoAumentado = importeIngresado + importeIngresado * 10 / 100;
	alert(sueldoAumentado);

	sueldoAumentado = importeIngresado * 1.1;
	alert(sueldoAumentado);

	aumentoDelSueldo = importeIngresado * 0.10;
	sueldoAumentado = importeIngresado + aumentoDelSueldo;
	alert(sueldoAumentado);

	disminucionDeSueldo = importeIngresado * 10 / 100;
	sueldoDisminuido = importeIngresado - disminucionDeSueldo;
	alert("El sueldo final disminuido es: " + sueldoDisminuido);

	txtIdSueldo
	txtIdResultado
*/



}
