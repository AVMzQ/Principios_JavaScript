function suma(a){
    return a + 5;
}
let res = suma(5);
console.log(res);

function suma(a, b){
    /*
        arguments es una variable que nos permite
        utilizar los parametros que esten de mas 
        en una funcion.
    */
    console.log([arguments]);
    return a + b;
}
console.log(1,6,4,7,9);