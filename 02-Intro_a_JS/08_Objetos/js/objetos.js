//declaracion de objetos
let vehiculo = {
    Marca : "Toyota",
    Color : "Rojo",
    Modelo : "2022",
    Tipo : "Sedan",
    Valor : 2300000,
    TipoLlanta : ['Pirelli','Michelin', 'GoodYear'],
    EnStock : true,
    Estado : function (estado){
        if(estado == 1){
            return 'El vehiculo se apago';
        }
        else{
            return 'El vehiculo se encendio';
        }
    
    },
    Mantenimiento: (estado) => estado == 1 ? console.log('El vehiculo ya termino su mantenimiento') : console.log('vehiculo necesita')
}

//Template String
console.log (`El vehiculo es de marca: ${vehiculo.Marca} y tiene un valor de ${vehiculo.Valor}`)
//Desestructuracion de objetos
const {Tipo, Modelo, Color, Marca} = vehiculo;
//let modelo = Vehiculo.Modelo;
//Let color = Vehiculo.Color;
console.log (`El vehiculo es de color: ${Color} y es del año: ${Modelo}`)