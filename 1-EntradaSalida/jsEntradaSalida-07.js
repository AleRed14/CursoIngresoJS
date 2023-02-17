/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 07


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

	/*resultadoSuma = primerNumeroIngresado + segundoNumeroIngresado;
	alert("Tu numero es: " + resultadoSuma); */
}

function restar()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;	
	var resultadoResta;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoResta = primerNumeroIngresado - segundoNumeroIngresado;
	alert("Tu numero es: " + resultadoResta);


}

function multiplicar()
{ 
	var primerNumeroIngresado;
	var segundoNumeroIngresado;	
	var resultadoMultiplicación;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoMultiplicación = primerNumeroIngresado * segundoNumeroIngresado;
	alert("Tu numero es: " + resultadoMultiplicación);


}

function dividir()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;	
	var resultadoDivisión;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resultadoDivisión = primerNumeroIngresado / segundoNumeroIngresado;
	alert("Tu numero es: " + resultadoDivisión);


}

