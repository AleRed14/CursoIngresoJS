/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 04
*/
function mostrar()
{
	var mes;
	var mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			mensaje = "Este mes tiene 28 dias.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias";
					
	
		default:
			mensaje = "Este mes tiene 31 dias";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN