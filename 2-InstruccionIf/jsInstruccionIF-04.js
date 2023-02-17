/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 04
*/

function mostrar()
{
	//tomo la edad  
	var edadIngresada

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Usted es adolescente");
	}


}//FIN DE LA FUNCIÓN

/*
if(edadIngresada >= 13)
	{
		if(edadIngresada <= 17)
		{
			alert("Usted es adolescente");
		}
	}

	&& se tiene que cumplir ambas condiciones

	|| se tiene que cumplir al menos una condicion
*/