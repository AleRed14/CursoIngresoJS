/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 03
*/
function mostrar()
{
	var mes;
	var mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
	
		default:
			mensaje = "Este mes tiene 30 o más días";
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN