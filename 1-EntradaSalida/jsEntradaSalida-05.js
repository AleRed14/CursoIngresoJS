/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado; 
	let edadIngresada;
	let mensaje;

	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadIngresada = document.getElementById('txtIdEdad').value;
	mensaje = ("Usted se llama " + nombreIngresado) //+ //" y tiene " + edadIngresada);
	mensaje += (" y tiene " + edadIngresada);
	alert(mensaje)



}

/*
E:
P:
S:
txtIdNombre
txtIdEdad
*/
