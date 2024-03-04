/*
    Crear un algoritmo que solo imprima
    los numeros impares del  0 al 10
*/
function Impares(){
    let res = 0
    let i = 0
    while(i <= 10){
        res = i%2;
        if(res > 0){
            console.log('El numero ', i, ' es impar');
        }
        i++;
    }
}
console.log(Impares());