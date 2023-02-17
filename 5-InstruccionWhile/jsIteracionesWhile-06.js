/*

*/
/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0;
	
	while (contador < 5) {
		// Operaciones
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		//alert(numeroIngresado);

		contador = contador + 1;
	}
	
	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN