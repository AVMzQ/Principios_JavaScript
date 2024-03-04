/*
    Crear un algoritmo que devuelva
    el precio del producto mas el impuesto.
*/
function precioCompleto(precio, impuesto){
    return Math.round(precio + (precio * impuesto))
}

console.log(precioCompleto(19.90, .15));