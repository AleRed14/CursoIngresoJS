/*
Perez Alejo DIV Z Grupo 1
Ejercicio While 05
*/
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		alert("Ingreso mal el sexo")
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN