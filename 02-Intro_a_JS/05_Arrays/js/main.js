// var arrays = []; // esta vacio

// var valores = ['Hola','mascota','comida','Adios'];

// for(var i = 0; i < valores.length; i++){
//     console.log(valores[i]);
// }

//-----------------------------------------------------------
// var mascota, mascota1, mascota2, cadenaMascota;
// var arrayMascotas = [];

// mascota = prompt('Ingresa el nombre de tu mascota1:');
// mascota1 = prompt('Ingresa el nombre de tu mascota2:');
// mascota2 = prompt('Ingresa el nombre de tu mascota3:');

// if (mascota === '' || mascota1 === '' || mascota2 === '') {
//     alert('Por favor rellena el campo correctamente');
// }
// else {
//     arrayMascotas.push(mascota, mascota1,);
//     arrayMascotas.push(mascota2);

//     cadenaMascota = `Las mascotas de luis se llaman ${arrayMascotas[0]}, ${arrayMascotas[1]}, ${arrayMascotas[2]} y el lo quiere mucho`;

//     alert(cadenaMascota);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------

//creando el arreglo
var platillos = ['Tamal','Tacos','Enchiladas','Quesadillas','Tostadas','Garnachas'];

// for(var i=0; i<platillos.length; i+=1){
//     console.log(platillos[i]);
// }
// for (var k=0; k<6; k++){
//     if(platillos[k] === platillos[3] || platillos[5]){
//         console.log(platillos[k]);
//     }
// }
//pares
for(i=0; i<6; i++){
    if(i%2){
        console.log(platillos[i]);
    }
}

    