/*
Perez Alejo DIV Z Grupo 1
Ejercicio While 03
*/
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let claveCorrecta;
	claveCorrecta = "utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != claveCorrecta) {
		alert("Error. Clave incorrecta...")
		claveIngresada = prompt("ingrese el número clave.");
	}
	
}//FIN DE LA FUNCIÓN
