//codigo del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados de mi cuadrado miden:" + ladoCuadrado);

function perimetroCuadrado(lado){
   return lado * 4;

} 
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado);

function areaCuadrada(lado){
   return lado * lado;
} 
// console.log("El perimetro del cuadrado es:" + areaCuadrada);
console.groupEnd;
//codigo del triangulo
console.group("triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triangulo miden:" + ladoTriangulo1 + "cm,"+ ladoTriangulo2 + "cm,"+ baseTriangulo + "cm,");
// const alturaTriangulo = 5.5;
// console.log("la altura del trianguo es:" + alturaTriangulo);
function perimetroTriangulo(lado1, lado2, base){
return lado1+lado2+base;

}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
// console.log("El perimetro del traingulo es:" + perimetroTriangulo);
function areaTriangulo(base, altura){
   return (base* altura) /2;
   
   
   }
// const areaTriangulo = baseTriangulo * alturaTriangulo /2;
// console.log("El area del traingulo es:" + areaTriangulo);
// console.groupEnd;



console.group("circulo");
//radio
// const radioCirculo = 4;
// console.log("El radio del circulo es:" + radioCirculo);
// //diametro
function diametroCirculo(radio){
return  radio * 2
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es:" + diametroCirculo);
//pi

const PI = Math.PI;
// console.log("PI es:" + PI);
//circunferencia
// const circunferenciaCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es:" + circunferenciaCirculo);
//perimetro

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;

}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La perimetro del circulo es:" + perimetroCirculo);
//area
function areaCirculo(radio){
   return (radio *  radio) * PI;

}

// console.log("La area del circulo es:" + areaCirculo);
console.groupEnd;