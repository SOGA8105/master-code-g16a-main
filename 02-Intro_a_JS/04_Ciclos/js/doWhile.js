//Ejemplo de DoWhile
var nombreCompleto = prompt('Ingresa tu nombre completo');
var letraBuscar = prompt('Ingresa la letra que deseas buscar');
var i = 0;
var letraActual;
var laEncontre = 0;
var msg;

//sintaxis de do While
do
{
    letraActual = nombreCompleto.substring(i, i+1)

    if(letraActual.toLowerCase() === letraBuscar.toLowerCase())
    {
        laEncontre = 1;
    }

    i++;
}
while(laEncontre === 0 && <= nombreCompleto.length);

if(laEncontre === 1)
{
    msg = `Enhorabuena hemos encontrado la letra ${letraBuscar}, en la posicion ${i}.`;
}
else
{
    msg = `Lo sentimos, no hemos podido encontrar la letra ${letraBuscar}, en tu nombre.`;
}

document.write(msg);