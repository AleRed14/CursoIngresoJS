/*
Perez Alejo DIV Z Grupo 1
Ejercicio While Integrador
*/
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

txtIdSexo
txtIdEstadoCivil
txtIdSueldo
txtIdLegajo
txtIdNacionalidad
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidadIngresada;

	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);

	while (edadIngresada < 18 || edadIngresada > 90) {
		alert("Edad no habilitada, intentelo de nuevo.")
		edadIngresada = prompt("Ingrese su edad");
	}

	document.getElementById("txtIdEdad").value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo");
	sexoIngresado = sexoIngresado.toLowerCase();
	//sexoIngresado.toUpperCase();
	//console.log(sexoIngresado);
	while (sexoIngresado != "f" && sexoIngresado != "m") {
		alert("Ingreso mal el sexo");
		sexoIngresado = prompt("Ingrese su sexo");
		sexoIngresado = sexoIngresado.toLowerCase();
	}

	switch (sexoIngresado) {
		case "f":
			sexoIngresado = "Femenino";
			break;
		case "m":
			sexoIngresado = "Masculino";
			break;
		default:
			break;
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese su estado civil");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		alert("Codigo erroneo, vuelva a intentar.")
		estadoCivilIngresado = prompt("Ingrese su estado civil");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			//mensaje = "Soltero"
			break;
		case 2:
			estadoCivilIngresado = "Casado"
			//mensaje = "Casado"
			break;
		case 3:
			estadoCivilIngresado = "Divorciado"
			//mensaje = "Divorciado"
			break;
		case 4:
			estadoCivilIngresado = "Viudo"
			//mensaje = "Viudo"
			break;
	}

	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado; //mensaje; 

	sueldoBruto = prompt("Ingrese su sueldo bruto");
	sueldoBruto = parseInt(sueldoBruto);
	
	while (sueldoBruto < 8000) {
		alert("Usted es muy pobre, ingrese de nuevo su sueldo");
		sueldoBruto = prompt("Ingrese su sueldo bruto");
		sueldoBruto = parseInt(sueldoBruto);
	}

	document.getElementById("txtIdSueldo").value = sueldoBruto;

	numeroDeLegajo = prompt("Ingrese su numero de legajo");
	numeroDeLegajo = parseInt(numeroDeLegajo);

	while (numeroDeLegajo < 1000 || numeroDeLegajo > 10000) {
		alert("numero incorrecto, vuelva a intentarlo");
		numeroDeLegajo = prompt("Ingrese su numero de legajo");
		numeroDeLegajo = parseInt(numeroDeLegajo);
	}

	document.getElementById("txtIdLegajo").value = numeroDeLegajo;

	nacionalidadIngresada = prompt("Ingrese su nacionalidad");
	nacionalidadIngresada = nacionalidadIngresada.toLowerCase();

	while (nacionalidadIngresada != "a" && nacionalidadIngresada != "e" && nacionalidadIngresada != "n") {
		alert("Dato incorrecto, vuelva a intentarlo");
		nacionalidadIngresada = prompt("Ingrese su nacionalidad");
		nacionalidadIngresada = nacionalidadIngresada.toLowerCase();
	}

	switch (nacionalidadIngresada) {
		case "a":
			nacionalidadIngresada = "Argentino";
			break;
		case "e":
			nacionalidadIngresada = "Extranjero";
			break;
		case "n":
			nacionalidadIngresada = "Nacionalizado";
			break;
		default:
			break;
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}
