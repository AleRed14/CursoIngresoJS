/*
Perez Alejo DIV Z Grupo 1
Ejercicio Switch 09
*/
/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	let ubicaciónSeleccionada;
	let estacionSeleccionada;
	let precioDeEntrada;
	let aumentoDePrecio;
	let descuentoDePrecio;
	let precioFinal
	let mensaje;
	ubicaciónSeleccionada = document.getElementById("txtIdDestino").value;
	estacionSeleccionada = document.getElementById("txtIdEstacion").value;
	precioDeEntrada = 15000
	aumentoDePrecio = 0
	descuentoDePrecio = 0

	switch (estacionSeleccionada) {
		case "Invierno":
			if(ubicaciónSeleccionada == "Bariloche")
			{
				//aumento del 20%
				aumentoDePrecio = 20
			}else
			{
				if(ubicaciónSeleccionada == "Cordoba")
				{
					//descuento del 10%
					descuentoDePrecio = 10
				}else
				{
					if(ubicaciónSeleccionada == "Mar del plata")
					{
						//descuento del 20%
						descuentoDePrecio = 20
					}
				}
			}
			break;
		case "Verano":
			if(ubicaciónSeleccionada == "Bariloche")
			{
				//descuento del 20%
				descuentoDePrecio = 20
			}else
			{
				if(ubicaciónSeleccionada == "Cordoba" || ubicaciónSeleccionada == "Cataratas")
				{
					//aumento del 10%
					aumentoDePrecio = 10
				}else
				{
					if(ubicaciónSeleccionada == "Mar del plata")
					{
						//aumento del 20%
						aumentoDePrecio = 20
					}
				}
			}
			
			break;
		case "Otoño":
		case "Primavera":
			if(ubicaciónSeleccionada == "Bariloche" || ubicaciónSeleccionada == "Cataratas" || ubicaciónSeleccionada == "Mar del plata")
			{
				//aumento del 10%
				aumentoDePrecio = 10
			}/*else
			{
				//precio original
			}*/
			break;
	
		default:
			break;
	}

	precioFinal = precioDeEntrada + (precioDeEntrada * aumentoDePrecio / 100) - (precioDeEntrada * descuentoDePrecio / 100);
	mensaje = "El precio de la entrada es: " + precioFinal;
	alert(mensaje);

}//FIN DE LA FUNCIÓN

/*
Bariloche
Cataratas
Mar del plata
Cordoba
txtIdEstacion
txtIdDestino
*/