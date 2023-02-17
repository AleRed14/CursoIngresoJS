/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 06


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoSuma;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);


	resultadoSuma = primerNumeroIngresado + segundoNumeroIngresado;
	alert("Tu numero es: " + resultadoSuma);


}

