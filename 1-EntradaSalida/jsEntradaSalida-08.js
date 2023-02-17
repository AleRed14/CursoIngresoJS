/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 08


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendoIngresado;
	var divisorIngresado;
	var resultadoResto;

	dividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
	divisorIngresado = document.getElementById("txtIdNumeroDivisor").value;

	dividendoIngresado = parseInt(dividendoIngresado);
	divisorIngresado = parseInt(divisorIngresado);

	resultadoResto = dividendoIngresado % divisorIngresado;
	alert("Tu numero es: " + resultadoResto);


}
/*

RESTO = % (no olvidar) 
var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoOperacion;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);


	suma = primerNumeroIngresado + segundoNumeroIngresado;
	alert("Tu numero es: " + suma);


	txtIdNumeroDividendo
	txtIdNumeroDivisor */