/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 02
*/
function mostrar()
{
	var mensaje;
	var mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) 
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;

		default:
			mensaje = "Falta para el invierno.";
	}

	alert(mensaje);

	

}//FIN DE LA FUNCIÓN

/*case "Julio":
		case "agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	
		default:
			mensaje = "Falta para el invierno.";*/

/*case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;*/ //como son muchos lo resumimos en el default