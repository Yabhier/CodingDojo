/*
1)Construir una función que reciba como párametro 10 números.
2) y los compare con un arreglo 
3)arreglo que tiene siempre 10 números generados 
de manera aleatoria y distintos. 
4)La idea es que muestre ambos arreglos y la cantidad 
de coincidencias entre ellos y el rango de los números aleatorios debe 
estar entre 1 y 20 */
function random(x) {
    var x2 = []
    var coincidencias = 0;
    for (var i = 0; i < 10; i++) {
        var z = Math.floor((Math.random() * 20) + 1);
        if (x2.includes(z) == false) {
            x2.push(z);
        }
        else {
            i--;
        }
    }
    for (var i = 0; i < x.length; i++) {
        if (x2.includes(x[i]) == true) {
            coincidencias++
        }
    }
    console.log("coincidencias= ", coincidencias);
    console.log("x= ", x);
    return x2

}
console.log(random([19, 3, 17, 1, 6, 12, 8, 11, 15, 20]));



