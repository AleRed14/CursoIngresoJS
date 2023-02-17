/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 07
*/
//Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
function mostrar()
{
	let ubicaciónSeleccionada;
	let mensaje;
	ubicaciónSeleccionada = document.getElementById("txtIdDestino").value;

	switch (ubicaciónSeleccionada) {
		case "Bariloche":
			mensaje = "Se encuentra al Oeste.";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte.";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al Este.";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra al Sur";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN