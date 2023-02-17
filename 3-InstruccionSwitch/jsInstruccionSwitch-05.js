/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 05
*/
function mostrar()
{
	var horaIngresada;
	var mensaje;
	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);

	switch (horaIngresada) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			alert(mensaje);
			break;
	}

	

}//FIN DE LA FUNCIÓN