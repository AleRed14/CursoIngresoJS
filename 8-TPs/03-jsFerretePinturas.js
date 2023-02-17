/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFahrenheit //faltan los ;
    var gradosCentígrados

    gradosFahrenheit = document.getElementById("txtIdTemperatura").value;

    gradosFahrenheit = parseFloat(gradosFahrenheit);

    gradosCentígrados = (gradosFahrenheit - 32) * 5 / 9;

    alert(gradosFahrenheit + " Fahrenheit son " + gradosCentígrados.toFixed(6) + " centígrados");
}

function CentigradosFahrenheit () 
{
	var gradosCentígrados
    var gradosFahrenheit

    gradosCentígrados = document.getElementById("txtIdTemperatura").value;

    gradosCentígrados = parseFloat(gradosCentígrados);

    gradosFahrenheit = (gradosCentígrados * 9 / 5) + 32;

    alert(gradosCentígrados + " centígrados son " + gradosFahrenheit.toFixed(1) + " fahrenheit");
}
