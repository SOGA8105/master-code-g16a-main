// function sumatoria(num1,num2){
//     var total = num1 + num2;
//     console.log('la sumatoria total es:' + total);
// }
// sumatoria(7,9);

// function resta(a,b,c){
//     var resultado= a-b-c;
//     console.log(resultado)
// }
// resta(10,23,56);

// //tabla de multiplicar
// console.log('2 x 0 =', 2*0);
// console.log('2 x 1 =', 2*1);
// console.log('2 x 2 =', 2*2);
// console.log('2 x 3 =', 2*3);
// console.log('2 x 4 =', 2*4);
// console.log('2 x 5 =', 2*5);
// console.log('2 x 6 =', 2*6);
// console.log('2 x 7 =', 2*7);
// console.log('2 x 8 =', 2*8);

// //funcion multiplicar
// function tablaDelDos(){
//     for(i=0; i<11; i++){
//         console.log('2 x', i, '=', 2 * i);
//     }
// }tablaDelDos();

// function suma(num1,num2,num3){
//     var total= num1 + num2 + num3;

//     return 'El resultado es:' + total
// }

// var valorSuma = suma(9,8,6);
// alert(valorSuma);

// function saludar(nombre, edad){
//     this.nombre = nombre; 
//     this.edad = edad;
//     console.log('Hola mi nombre es:' + this.nombre + 'y tengo:' + this.edad + 'años');
// }
// saludar('Angel', 40);

// function mayorDeEdad(edad){
//     if(edad>18){
//         console.log('El usuario es mayor de edad');
//     }
//     else{
//         console.log('El usuario es menor de edad');
//     }
//     if(edad >100){
//         console.log('El usuario esta finado');
//     }
// }
// mayorDeEdad(190);

// var numerosNaturales = (numero) =>{
//     for(i=1; i<numero; i++){
//         console.log(i)
//     }
// }
// numerosNaturales(20);

//tareas

// 1. escribe una funcion llamada evaluante que reciba como parametro un numero que retorne lo siguiente:
// "positivo" si el numero es positivo
// "negativo" si el numero es negativo 
// "cero" si el numero es 0

// 2.
// Escribe una funcion para ingresar 
// cualquier letra del alfabeto y verifique si es vocal o consonante

// 3. Escribe un juego de piedra, papel o tijera, en el cual el usuario ingrese
// su nombre y que ingrese que opcion quiere y determine quien gana

// function negativoPositivo(numero){
//     if(numero<0){
//         console.log('El numero es negativo');
//     }
//     else {
//         if(numero>0) {
//             console.log('El numero es positivo');
//         }
//     }

// negativoPositivo(-1)
  
// const comienzaConVocal = (cadena) => {
//     if (!cadena || cadena.length <= 0) return false;

//     // Convertir a minúscula porque las vocales con las que la compararemos están
//     // en minúscula
//     let cadenaEnMinuscula = cadena.toLowerCase();
//     let primerCaracter = cadenaEnMinuscula.charAt(0);

//     // Vamos a buscar si el carácter está en este arreglo
//     const vocales = ["a", "e", "i", "o", "u"];
//     const consonante = ["b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

//     // indexOf devuelve -1 si no encuentra el carácter en el arreglo
//     // y si lo encuentra, devuelve el índice o posición, pero eso no nos importa ahora
//     if (vocales.indexOf(primerCaracter) === -1) {
//         return false;
//     } else {
//         return true;
//     }
// }


// // Esto es para probar
// const palabras = [
//     "d","o","j","h","a","e","f"
// ];

// palabras.forEach(palabra => {
//     console.log("¿%s es vocal? %s", palabra, comienzaConVocal(palabra));
// });



// function palindromo(texto){

//     //lectura de la cadena de texto que inicia de izquierda a derecha
//     var textoSinEspacios =[];
//     var indice = 0;
//     var textoFInal;

//     for(var i=0; i<texto.length; i++){
//      if(texto[i] == ''){

//      }   
//      else{
//           textoSinEspacios[indice] = texto[i];
//           indice++;
//      }
//     }
// //lectura de texto derecha a izquierda
//     var indiceAlreves = (textoSinEspacios - 1);
    
//     for(var i=0; i<textoSinEspacios.length; i++){
//         if(textoSinEspacios[i] !=textoSinEspacios[indiceAlreves]){
//             textoFInal ='La oracion no es un palindromo';
//             {
//                 msg = 'La oracion no es un polindromo'; 
//             }
//         }else{
//             msg = 'La oracion es un palindromo';
//             } 
//            }
//            return msg;
// } 
// var texto = prompt('Ingresa una cadena de texto');
// alert(palindromo(texto));



