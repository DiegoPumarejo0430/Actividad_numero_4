

//funciones

function division(x:number, y:number): number {


    let res =x + y
 console.log(`${x} + ${y} =${res}`)
    return res
}

division(5,3);
function sumar(x:number, y:number): number {


    let suma =x + y
 console.log(`${x} + ${y} =${suma}`)
    return suma
}
let x=sumar(3,6)

console.log(`la suma de los numeros es ${x}`)


let funcion:( m :number , n :number)=>number =function(m: number, n:number){

let resta =m-n
console.log(`${m} - ${n} =${resta}`)
return resta


}
console.log(funcion(62,4))

let multiplicar:(m:number, n:number)=>number
multiplicar=(m,n) => m*n
console.log(multiplicar(5,4))

//parametros opciomales

function sumar2(x:number, y?:number): number {

if (y==undefined){

return x

}else{
   let suma =x + y

    return suma  
}
   
}


}
let suma01=sumar2(2)
let suma02=sumar2(2,3)
console.log(`el resultado de la suma 1 es =${suma01}`)
console.log(`el resultado de la suma 2 es =${suma02}`)

function calcularEdad():number{
return 18

}

let mostrarPersona=function(nombre: string, Edad: number =calcularEdad()) {

    console.info(`nombre : ${nombre} - Edad : ${Edad}`)



    if(Edad==18){

        console.warn(`la edad no fue enviada`)
    }
    
}
