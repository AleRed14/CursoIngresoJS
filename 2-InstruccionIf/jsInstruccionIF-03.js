/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 03
*/

function mostrar()
{
	//tomo la edad  
	var edadIngresada
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		alert("Usted es menor de edad.")
	}

}//FIN DE LA FUNCIÓN