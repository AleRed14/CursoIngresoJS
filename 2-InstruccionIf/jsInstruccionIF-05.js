/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 05
*/

function mostrar()
{
	let edadIngresada;
	//let mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 12 || edadIngresada > 17)
	{
		alert("Usted NO es adolescente");
	}
	/*else(edadIngresada > 17)
	{
		mensaje = "Usted NO es adolescente";
	}*/

	//alert(mensaje);
}

//FIN DE LA FUNCIÓN