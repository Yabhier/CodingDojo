function a() {
    return 35;
}
console.log(a())  //Output: 35

function a() {
    return 4;
}
console.log(a() + a()); //Output: 8

function a(b) {
    return b;
}
console.log(a(2) + a(4)); //Output: 6

function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3)); //Output: 3, 9

function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10)); //Output: 40

function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15)); //Output: 4

function a(b, c) {
    return b * c;
}
console.log(10, 3);  //Output: 10, 3
console.log(a(3, 10)); //Output: 30

function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3); //Output: 3
console.log(4); //Output: 4

function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);       //Output: 2, 5, 8, 11
    }
}
a();

function a(b, c) {
    for (var i = b; i < c; i++) {  //for (var i = 0; 0 < 10; i++)
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));  //Ouput: 1,2,3,4,5,6,7,8,9,10,0

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);    //Output: nada, no hay nada que llame esta función
        }
        console.log(i); //Output: nada, no hay nada que llame esta función
    }

}

var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z); //Output: 10

var z = 10;
function a() {
    var z = 15;
    console.log(z);  //Output: 15
}
a();
console.log(z); //Output: 10

var z = 10;
function a(){
    var z = 15; 
    console.log(z);  //Output: 15
    return z;
}
z = a();
console.log(z);  //Output: 15





















