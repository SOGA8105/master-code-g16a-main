// //Definicion de clases POO
// class Vehiculo {
//    constructor(marca, modelo, valor, color){
//        this.Marca = marca;
//        this.Modelo = modelo;
//        this.Valor = valor;
//        this.Color = color;
//        this.Estado = function (estado){
//         if(estado == 1){
//             return 'El vehiculo se apago';
//         }
//         else{
//             return 'El vehiculo se encendio';
//         }
//        }
//    }

//    }


// let vehiculo1 = new Vehiculo ('Toyota', 2022, 230000, 'Blanco');
// let vehiculo2 = new Vehiculo('Nissan', 2021, 200000, 'Negro');
// let vehiculo3 = new Vehiculo('Chevrolet', 2023, 150000, 'Plateado')
// console.log(vehiculo1.Marca);
// console.log(vehiculo2.Marca);
// console.log(vehiculo1.Estado(1));
// console.log(vehiculo2.Estado(0));

// let arregloVehiculos = [vehiculo1, vehiculo2, vehiculo3];

// function obtenerNombre (objeto){
//     return objeto.Marca
// }

// //obtener propiedades con Map
// let nombresVehiculos = arregloVehiculos.map(obtenerNombre);

// console.log(nombresVehiculos);

// function filtroValor (objeto){
//     if(objeto.Valor <= 200000){
//         return objeto;
//     }
// }

// //Filtrar propiedad con Filter
// let filtroVehiculos = arregloVehiculos.filter(filtroValor);

// console.log(filtroVehiculos);

//crear una aplicacion que permita obtener la nota promedio de cada estudiante de un profesor y la nota promedio del grupo completo
//1. Se requiere que cada alumnno tenga nombre completo y calificaciones
//2. Se requiere que el profesor indique cuantos estudiantes va a ingresar
//3. Se requiere que el profesor indique cuantas notas digitara para cada alumno
//4. Imprimir con alert el promedio de cada estudiante 
//5. imprimir con alert el promedio general del grupo 