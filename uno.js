/*
	1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let cantidadPersonasF=0;
	let cantidadPersonasM=0;
	let edadPromedio;
	let acumEdad=0;
	let flagMujerTempMax=0;
	let temperaturaMax;
	let nombreMujerTempMax;

for (let i=0;i<5 ;i++){
nombre=prompt("Ingrese su nombre");
edad=parseInt(prompt("Ingrese su edad"));
acumEdad=+edad;
sexo=prompt("Ingrese su sexo")
while(sexo!="f" && sexo !="m"){
sexo=prompt("Reingrese sexo: f o m")
}
temperatura=parseInt(prompt("Ingrese temperatura"));

if (sexo=="f"){
cantidadPersonasF++;
}else {
	cantidadPersonasM++;
}
if ((sexo=="f" &&  flagMujerTempMax==0) || (temperatura>temperaturaMax && sexo=="f")){
temperaturaMax=temperatura;
nombreMujerTempMax=nombre;
flagMujerTempMax =1
}

}//fin for
edadPromedio=acumEdad/cantidadPersonasF;
console.log ("A.La cantidad de mujeres es de: " + cantidadPersonasF + " y la cantidad de hombres es de:  " + cantidadPersonasM);
console.log ("B.La edad promedio es: " + edadPromedio);
console.log ("C. La mujer con mas temperatura es:" + nombreMujerTempMax);

}//fin funcion