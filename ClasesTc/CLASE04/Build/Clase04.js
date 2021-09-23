"use strict";
console.log("hello word hp");
let numero = 765;
let nombre = "Diego";
let apellido = "pumarejo";

console.log("numero");
console.log(`el numero es${numero}`);
console.log(`el nombre es${nombre}`);
let grupo = ["deilis rojas ", "dairibeth redondo", "josue martinez", "diego pumarejo"];
let lista = ["Riohacha ", "Maicao", "Dibulla"];
console.log(lista);
console.log(grupo);
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
}
grupo.forEach(element => {
    console.log(element);
});
let tuple = [1, "dairibeth redondo"];
console.log(tuple[1]);
let tuple2 = [1, "delis", "rojas", 44];
console.log(tuple2[1]);
let miVariable = "Saludos";
console.log(miVariable);
miVariable = 7406;