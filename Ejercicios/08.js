/*
    Crear un arreglo de logitud n, y que sus 
    elementos sean numeros de 1 hasta n
*/
function AsignarNumeros_Arreglo(n){
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i] = i;
    }
    return arr;
}

console.log(AsignarNumeros_Arreglo(10));