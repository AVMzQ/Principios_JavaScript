/*
    Hacer una funcion que devolver el nombre de la resolucio
    dependiendo del ancho y el alto.
    Si no se encuentra el valor, devolver un falso
    
    Al comparar una resolucion el ancho puede ser mayor
    pero no debe de ser mayor a la siguiente resolucion, esto
    tambien se aplica al alto.

    RESOLUCIONES SOPORTADAS>
    *8K 7680 X 4320
    *4K 4840 X 2160
    *WQHD 2560 X 1550
    *FHD 1920 X 1080
    *HD 1280 X 720
    
*/
let resolucion = [
    {nombre :"8K", ancho :7680, alto :4320},
    {nombre:"4K",ancho: 3840,alto: 2160},
    {nombre:"WQHD",ancho: 2560,alto: 1550},
    {nombre:"FHD",ancho: 1920,alto: 1080},
    {nombre:"HD",ancho: 1280,alto: 720},
];
function nombreResolucion(ancho, alto){
    let existe = false;
    let nombreResolucion = "";
    for (let i = 0; i < resolucion.length ; i++) {
        if(ancho >= resolucion[i].ancho && alto >= resolucion[i].alto){
            existe = true;
            nombreResolucion = resolucion[i].nombre
            break;
        }
    }
    if(nombreResolucion != ""){
        return nombreResolucion;
    }
    else{
        return existe;
    }
};

console.log(nombreResolucion(7680,3420));


