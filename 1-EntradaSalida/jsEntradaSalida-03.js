/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S Integrador 2

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var valorCompra;
	var aumentoIva;
	var precioAumentado;
	var descuentoMayorista;
	var precioFinal;
	var datosPrecio;

	valorCompra = document.getElementById("txtIdNombre").value;

	valorCompra = parseInt(valorCompra);
	aumentoIva = parseInt(aumentoIva); // estos tres no van pq no tienen Id
	precioAumentado = parseInt(precioAumentado);
	descuentoMayorista = parseInt(descuentoMayorista);

	aumentoIva = valorCompra * 21 / 100;
	descuentoMayorista = valorCompra * 5 / 100; // en realidad es: descuentoMayorista = (valorCompra + aumentoIva) * 5 / 100;
	precioAumentado = valorCompra + aumentoIva;
	precioFinal = precioAumentado - descuentoMayorista;

	datosPrecio = ("Importe bruto: " + valorCompra + " - IVA: " + aumentoIva);
	datosPrecio += (" - Descuento de: " + descuentoMayorista + " - Total a pagar: " + precioFinal);

	alert(datosPrecio)



/* al total del descuento del iva */

}

//txtIdNombre

/*
Perez Alejo DIV Z Grupo 1
Ejercicio E/S 03

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreIngresado; //lower (empieza con min), upper (empieza con may) camel case

	//nombreIngresado = document.getElementById('txtIdNombre').value;
	nombreIngresado = txtIdNombre.value;
		alert(nombreIngresado);
}

//txtIdNombre
*/
