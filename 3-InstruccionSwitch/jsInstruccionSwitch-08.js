/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 08
*/
function mostrar()
{
	let ubicaciónSeleccionada;
	let mensaje;
	ubicaciónSeleccionada = document.getElementById("txtIdDestino").value;

	switch (ubicaciónSeleccionada) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN