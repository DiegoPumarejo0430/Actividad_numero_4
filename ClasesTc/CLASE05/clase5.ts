

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
