let nombre = "Anngel";
let edad = 24;
let pais = "Mexico";

let Persona = {
    nombre, 
    edad,
     pais,
};
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona['edad']);

//Cambio de valor
Persona.nombre = "Angel Francisco";
Persona['nombre'] = "Angle Francisco";
let llave = 'nombre';
Persona[llave] = "Angel Francisco";
console.log(Persona);

//Eliminar una variable dentro del objeto
delete Persona[llave];
console.log(Persona);