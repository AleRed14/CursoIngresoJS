/*
Perez Alejo DIV Z Grupo 1
Ejercicio Integrador 5
*/

/*
Tenemos que crear un programa que verifique si el usuario puede 
subirse a una montaña rusa, para esto el usuario deberá ingresar los 
siguientes datos por prompt: Altura y edad. 

Si el usuario mide menos de 120 cm debemos indicar que no puede 
subirse a la montaña rusa, en cambio sí tiene la altura correspondiente 
debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.

El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad, menores o iguales a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos 
preguntarle la edad.

*/
function mostrar()
{
	let alturaIngresada;
	let edadIngresada;
	let mensaje;

	alturaIngresada = prompt("Ingrse su altura:");
	alturaIngresada = parseInt(alturaIngresada);
	
	//mensaje = "El monto a pagar es 200$"

	if(alturaIngresada >= 120)
	{
		edadIngresada = prompt("Ingrese su edad:");
		edadIngresada = parseInt(edadIngresada);

		if(edadIngresada < 18 || edadIngresada > 80)
		{
			mensaje = "El monto a pagar es 200$";
			//alert("El monto a pagar es 200$");
		}
		else
		{
			mensaje = "El monto a pagar es 400$"
			//alert("El monto a pagar es 400$");
		}
	}
	else
	{
		mensaje = "Usted no puede entrar.";
		//alert("Usted no puede entrar.");
	}
	
	alert(mensaje);
}

/*
Perez Alejo DIV Z Grupo 1
Ejercicio if 01
*/
/*
function mostrar()
{

	
	/*var edadIngresada

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada == 15)
	{
		alert("Niña bonita");
	}*/

 /* PONER UN }
//FIN DE LA FUNCIÓN
/*
//tomo la edad  
/*
== IGUAL
!= DISTINTO
> MAYOR
< MENOR
>= MAYOR O IGUAL
<= MENOR O IGUAL


if(edad >= 10);
{
	// SI ES VERDADERO
}
/*
else
{
	//si es falso
}

//if example

*/