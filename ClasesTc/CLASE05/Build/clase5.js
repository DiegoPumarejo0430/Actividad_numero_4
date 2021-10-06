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

var suma01 = sumar2(2);
var suma02 = sumar2(2, 3);
console.log("el resultado de la suma 1 es =" + suma01);
console.log("el resultado de la suma 2 es =" + suma02);
function calcularEdad() {
    return 18;
}
var mostrarPersona = function (nombre, Edad) {
    if (Edad === void 0) { Edad = calcularEdad(); }
    console.info("nombre : " + nombre + " - Edad : " + Edad);
    if (Edad == 18) {
        console.warn("la edad no fue enviada");
    }
};
mostrarPersona("Diego");
var duplicador = function (n) {
    return n * 2;
};
var triplicador = function (n) {
    return n * 3;
};
var potenciadorALaDos = function (n) {
    return n * n;
};
function sumar50(f, y) {
    return f(y) + 50;
}
console.log(sumar50(duplicador, 20));
console.log(sumar50(triplicador, 20));
console.log(sumar50(potenciadorALaDos, 20));
console.log(sumar50(duplicador, 10));
