/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 01
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) 
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
		default:
			//break; esta de más
	}

	alert(mensaje);
	

	/*var pais;
	var mensaje;

	pais = prompt("Ingrese su país");

	switch (pais)
	{
		case "Argentina":
			mensaje = "Sos campeon";
			break;
		case "Francia":
			mensaje = "Sos segundo";
			break;
		case "Croacia":
			mensaje = "Sos tercero";
			break;
		case "Marruecos":
			mensaje = "Sos cuarto";
			break;
		
		default
			mensaje = "Ni llegaste";
			break
	}
	alert(mensaje);*/

}//FIN DE LA FUNCIÓN