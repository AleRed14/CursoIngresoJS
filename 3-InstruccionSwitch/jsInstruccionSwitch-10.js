/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 10
*/
// Enunciado:
// una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si 
//"Se viaja" o "No se viaja" a ese lugar

// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

// en Verano: Se viaja a Mar del plata y Cataratas solamente

// en Otoño: Se viaja a todos los destinos.

// primavera: solo no se viaja a Bariloche
function mostrar()
{
	let estacionSeleccionada;
	let ubicaciónSeleccionada;
	let mensaje;

	estacionSeleccionada = document.getElementById("txtIdEstacion").value;
	ubicaciónSeleccionada= document.getElementById("txtIdDestino").value;
	mensaje = "Se viaja"

	switch (estacionSeleccionada) {
		case "Invierno":
			if (ubicaciónSeleccionada != "Bariloche") {
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if (ubicaciónSeleccionada != "Mar del plata" || ubicaciónSeleccionada != "Cataratas") {
				mensaje = "No se viaja";
			}
			break;
		case "Primavera":
			if (ubicaciónSeleccionada == "Bariloche") {
				mensaje = "No se viaja"
			}
			break;
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN
/*
txtIdEstacion
Invierno
Verano
Otoño
Primavera
txtIdDestino
Bariloche
Cataratas
Mar del plata
Cordoba
*/