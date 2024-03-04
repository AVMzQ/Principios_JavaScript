/*
    Crear un algoritmo que devuelva el
    numero mayor y menor de un arreglo.
*/
let numeros = [2,5,7,15,-5.-100,55];
function getMayorMenor(num){
    if(Array.isArray(num)){
        let mayor = Math.max(...num);
        let menor = Math.min(...num);
        return "mayor: "+ mayor+" menor: "+ menor
    }
}
function getMayorMenor2(num){
    let menor = num[0];
    let mayor = num[0];
    for(numero of num){
        menor = menor < numero ? menor : numero
        mayor = mayor > numero ? mayor : numero
    }
    return "mayor: "+ mayor+" menor: "+ menor
}
console.log(getMayorMenor2(numeros))