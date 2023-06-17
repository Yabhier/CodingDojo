/*1,1,2,3,5,8,13*/
function fibo(x) {
    var fibonacci = [1, 1];
    if(x<=1){
        fibonacci = x;
    }
    for (let i = 0; i < x - 2; i++) {
        let newrestfib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(newrestfib);
    }
    return fibonacci;
}
console.log(fibo(0));     