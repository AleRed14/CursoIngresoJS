/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta = "si"; //cambiar a true si se usa el confirm

	while (respuesta == "si") { //cambiar a true si se usa el confirm
		numeroIngresado = prompt("Ingrese su numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		/*
		acumulador += numeroIngresado;
		contador++;
		contador--;
		contador += 1;
		*/

		respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		//respuesta = confirm("Desea seguir ingresando numeros?"); nos ahorramos el otro while

		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Desea seguir ingresando numeros? (si|no)");
		}
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN