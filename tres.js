/*
3)Nos ingresan una cantidad indeterminada de estadías de vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar(){
let nombreTitular;
let lugar;
let temporada;
let cantidadPersonas;
let seguir;
let contadorBariloche=0;
let contadorCataratas=0;
let contadorSalta=0;
let lugarMasElegido;
let nombreTitularMasPasajeros;
let numeroMaxpax;
let flagPasajeros=0;
let promedio;
let contadorInvierno=0;
let acumPersonasInvierno=0;

do{
nombreTitular=prompt("Por favor ingrese el nombre del titular");
lugar=prompt("Por favor ingrese un lugar: Bariloche,Cataratas o Salta");
while (lugar!="bariloche" && lugar!="cataratas" && lugar!="salta"){
	lugar=prompt ("Reingrese un lugar valido")
}
temporada=prompt("Por favor ingrese la temporada;verano,primavera,otoño,invierno");
while (temporada!="verano" && temporada!="invierno" && temporada!="primavera"  && temporada!="otoño"){
	temporada=prompt ("Reingrese una temporada valida");
}
cantidadPersonas=parseInt(prompt("Por favor ingrese la cantidad de personas que viajan"));
contadorBariloche++;
contadorCataratas++;
contadorSalta++;

if (contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta){
	lugarMasElegido= "Bariloche";
}else if (contadorCataratas>contadorSalta && contadorCataratas>contadorBariloche){
	lugarMasElegido= "Cataratas";
}else {
	lugarMasElegido="Salta";
}

if (flagPasajeros==0 || cantidadPersonas>numeroMaxpax){
numeroMaxpax=cantidadPersonas;
nombreTitularMasPasajeros=nombreTitular;
flagPasajeros=1
}
if (temporada=="invierno"){
	contadorInvierno++;
	acumPersonasInvierno=cantidadPersonas+acumPersonasInvierno;
}
seguir=prompt("Desea agregar mas datos?");
}while(seguir=="si");
promedio=acumPersonasInvierno/contadorInvierno;

console.log("A.El lugar más elegido es:  " + lugarMasElegido );
console.log("B.El nombre del titular que lleva mas pasajeros es : " + nombreTitularMasPasajeros );
console.log("C.El promedio de personas x viaje,que viajan en inviero es: " + promedio);
}