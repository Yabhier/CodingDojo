/*
1)Construir una función que reciba como párametro 10 números.
2) y los compare con un arreglo 
3)arreglo que tiene siempre 10 números generados 
de manera aleatoria. 
4)La idea es que muestre ambos arreglos y la cantidad 
de coincidencias entre ellos y el rango de los números aleatorios debe 
estar entre 1 y 20 
5) Verificar que no se repitan los numeros del Array*/

var x=[1,2,3,4,5,6,7,8,9,10];
var random2=[3,5,6,8,2,4,9,1,11,12];
var coincidencias= 0;
    for(var i=0; i<x.length; i++){
    if(random2.includes(x[i])==true){  
        coincidencias++      
    }
    }
console.log(coincidencias);    