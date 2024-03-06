/*
    Una variable de tipo const no permite cambiarle
    el valor a esta, sin embargo si esta es de tipo
    objeto seguimos sin poder cambiarle el valor pero
    si es posible agregarle propiedades y eliminarlas.
*/
const user ={
    id: 1
};
//Forma de agregar propiedades a un arreglo.user
user.name = "Angel";
user.guardar = function(){
    console.log('Guardando', user.name);
}
user.guardar();