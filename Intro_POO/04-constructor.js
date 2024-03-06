function Usuario(){
    /*
        'this' se utiliza porque se esta instanciando
        la funcion 'Usuario'. esto significa que las
        propiedades asignadas a 'Usuario' se retornaran.
    */
    this.id = 1;
    this.recuperarClave = function(){
        console.log(console.log('recuperando clave'));
    }
}
let usuario = new Usuario();
/*
    Al utilizar 'new Usuario' pasan 4 cosas
        *Se crea un objeto literal vacio.
        *Se vincula el prototipo con el objeto creado.
        *El objeto creado se asigna a 'this'.
        *Si la funcion no retorna nada, se retorna this.
*/
console.log(usuario);