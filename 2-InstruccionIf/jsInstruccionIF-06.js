/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 06
*/

function mostrar()
{
	/* /tomo la edad
	Al ingresar una edad debemos informar si la persona es mayor de edad
	 (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

	 1- que la persona sea mayor de 18
	 2- que la persona sea adolescente (13 a 17)
	 3- que la persona sea menor
	*/
	
	var edadIngresada;
	var mensaje;
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	mensaje = "La persona es menor"

	if(edadIngresada > 17) //guardar todas las personas mayores de edad
	{
		mensaje = "La persona es mayor"
	}
	else
	{

		//es adolescente o niño
		if(edadIngresada > 12) //pregunto por si es adolescente
		{
			mensaje = "La persona es adolescente"
		}
	}
	

	alert(mensaje);

}//FIN DE LA FUNCIÓN
// poner primero las prioridades
/*
if(edadIngresada > 12 && edadIngresada < 18)
	{
		mensaje = "La persona es adolescente"
	}

	if(edadIngresada < 13)
	{
		mensaje = "La persona es menor"
	}

			else//es un niño
		{
			mensaje = "La persona es menor"
		}
*/