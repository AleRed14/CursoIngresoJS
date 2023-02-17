/*
Perez Alejo DIV Z Grupo 1
Ejercicio While 04
*/
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9) {
		numeroIngresado = prompt("Ingrese un numero entre el 0 y el 9 inclusive.");
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN