/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 10
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var mensaje;

	notaRandom = Math.random() * 10 + 1;
	notaRandom = Math.floor(notaRandom);
	mensaje = "APROBO \n Su nota es: " + notaRandom;

	if(notaRandom > 8)
	{
		mensaje = "EXCELENTE \n Su nota es: " + notaRandom;
	}
	else
	{
		if(notaRandom < 4)
		{
			mensaje = "Vamos, la proxima se puede \n Su nota es " + notaRandom;
		}
	}
	
	alert(mensaje)
}//FIN DE LA FUNCIÓN