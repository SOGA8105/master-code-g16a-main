let frutas = ['Fresa', 'Platano', 'Mango', 'Durazno', 'Sandia'];

//eliminar elementos del array
frutas.splice(4,2);
console.log(frutas);

//eliminar mango y remplazarlo por sandia

frutas.splice(2,1,'Pera');
console.log(frutas);

//eliminar el ultimo elemento de un array
console.log(frutas.pop());

//eliminar primer elementode un array
console.log(frutas.shift());
