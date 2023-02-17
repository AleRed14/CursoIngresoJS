/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 08
*/

function mostrar()
{
	var edadIngresada
	var estadoCivilIngresado

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if(edadIngresada > 17 && estadoCivilIngresado == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN txtIdEdad estadoCivil 