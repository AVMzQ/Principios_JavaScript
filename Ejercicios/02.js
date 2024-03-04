/*
    validar que el indice no sea mayor a cero y que el 
    elemento exista en el arreglo.

    la funcion tiene debe de tener como parametros el arreglo
    y el indice.
    El valor del indice no puede ser menor a 0 y el elemento
    debe de existir en el arreglo
*/
let numeros = [1,2,4,5,3,2,5,1,1];
function getByID(num, index){
    if(Array.isArray(numeros)){
        if( index > 0 && index < num.length){
            return num[index];
        }
        else
            return "El indice ingresado no existe."
    }
    else{
        return "no es arreglo"
    }
}
console.log(getByID(numeros, 20))