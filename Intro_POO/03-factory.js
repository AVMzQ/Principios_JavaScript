function crearUsuario(name, email){
    return{
        name,//Esto es lo mismo que name: name
        email,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        }
    };
};
console.log(crearUsuario("Angel", "angel@correo.com.mx"));
console.log(crearUsuario("Angel2", "angel2@correo.com.mx"));
console.log(crearUsuario("Angel3", "angel3@correo.com.mx"));
