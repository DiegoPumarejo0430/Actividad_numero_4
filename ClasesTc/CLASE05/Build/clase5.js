"use strict";
function division(x, y) {
    var res = x + y;
    console.log(x + " + " + y + " =" + res);
    return res;
}
division(5, 3);
function sumar(x, y) {
    var suma = x + y;
    console.log(x + " + " + y + " =" + suma);
    return suma;
}
var x = sumar(3, 6);
console.log("la suma de los numeros es " + x);
var funcion = function (m, n) {
    var resta = m - n;
    console.log(m + " - " + n + " =" + resta);
    return resta;
};
console.log(funcion(62, 4));
var multiplicar;
multiplicar = function (m, n) { return m * n; };
console.log(multiplicar(5, 4));
function sumar2(x, y) {
    if (y == undefined) {
        return x;
    }
    else {
        var suma = x + y;
        return suma;
    }
}
