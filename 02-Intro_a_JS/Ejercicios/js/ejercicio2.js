//determinar variables
var numeroNotas;
var promedio;

//solicitar datos
numeroNotas = prompt('ingresa numero de notas')
promedio = prompt('Ingresa promedio')

// desarrollamos logica
if (promedio < 6) {
    alert(`Lo sentimos ${promedio}, no haz aprobado el curso.`);
}
else {
    if (promedio > 6)

        alert(`Felicidades ${promedio}, Haz aprobado el curso.`);
}

