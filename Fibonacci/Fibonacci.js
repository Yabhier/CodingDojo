/*1,1,2,3,5,8,13*/
var x = 1;
var fibonacci = [1, 1];
if (x == 0) {
    fibonacci = [0];
}
if (x == 1) {
    fibonacci = [1];
}
for (let i = 0; i < x - 2; i++) {
    let newrestfib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(newrestfib);
}
console.log(fibonacci);