console.log("hello word hp");
let numero:number = 765;
let nombre:string ="Diego";
let apellido: string="pumarejo"


console.log("numero");

console.log (`el numero es${numero}`);
console.log (`el nombre es${nombre}`);


let grupo: string[]=["deilis rojas ", "dairibeth redondo","josue martinez", "diego pumarejo"];
let lista: string[]=["Riohacha ", "Maicao","Dibulla"];
console.log(lista)
console.log(grupo);
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index])
    
}


grupo.forEach(element => {
    console.log(element)
});


let tuple:[number,string]=[1,"dairibeth redondo"]
console.log(tuple[1])

let tuple2:[number,string,string,number]=[1,"delis","rojas",44]
console.log(tuple2[1])

let miVariable:any = "Saludos"
console.log(miVariable)



miVariable = 7406;
console.log(miVariable)