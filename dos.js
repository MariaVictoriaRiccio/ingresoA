/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar(){
 let seguir;
 let marca;
 let precio;
 let pesokg;
 let tipo;

let acumPesokg=0
let flagMarcaCaraLiquidos=0
let precioMarcaCara;
let nombreMarcaCara;
let marcaLivianosolidos;
let menorPeso;
let flagSolidos=0;

do{
marca=prompt("Por favor ingrese la marca");
precio=parseInt(prompt("Por favor ingrese el precio"));
pesokg=parseInt(prompt("Por favor ingrese el peso en kg"));
acumPesokg=acumPesokg + pesokg;
tipo=prompt("Por favor ingrese si es solido o liquido");
if(tipo!="solido" && tipo!="liquido"){
tipo=prompt("Error.Favor ingresar un tipo valido:solido o liquido");
}


if (flagMarcaCaraLiquidos==0 || precio>precioMarcaCara){
  precioMarcaCara=precio;
  nombreMarcaCara=marca;
  flagMarcaCaraLiquidos=1;
}
  
if(flagSolidos==0 || pesokg<menorPeso){
  menorPeso=pesokg;
  marcaLivianosolidos=marca;
  flagSolidos=1;
}

seguir=prompt("Desea seguir agregando productos?");
 }while (seguir=="si");

 console.log ("A.El peso total de la compra es: " + acumPesokg);
 console.log ("B.La marca mas cara es:  " + nombreMarcaCara);
 console.log ("C. La marca de los mas livianos de los solidos es:  " + marcaLivianosolidos); 
}
