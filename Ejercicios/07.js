/*
    crear algorimo que tome un arreglo de
    objetos y devuelva un arreglo de pares
*/
let personas = [{
    id: 1,
    name: 'Nicolas',
},{
    id:2,
    name: 'Felipe',
},{
    id:3,
    name: 'Angle',
},]
function toPairs(arr){
    let pares = []
    for(index in arr){
        let item = arr[index]
        pares[index] = [item.id, item.name];
    }
    return pares
}
let res = toPairs(personas)
console.log(res)