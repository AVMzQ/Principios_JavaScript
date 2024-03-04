/*
    crear un algoritmo que devuelva el total de
    valores positivos de un arreglo
*/
let numeros = [2,5,7,15,-5,-100,55];

function totalPositivos(num){
    let positivos = 0
    for (item of num) {
        if(item > -1)
            positivos++;
    }
    return "Total de positivos: "+positivos;
}
console.log(totalPositivos(numeros));