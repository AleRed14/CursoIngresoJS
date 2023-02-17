/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 07
*/

/*
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
	*/
	//tomo la edad

function mostrar()
{
	let edadIngresada;
	let estadoCivilIngresado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivilIngresado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN