/*7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.*/

numeros = [1,2,3,4,5,6,7,8,9,10];

function iniciaCeros(ar)
{
    for (i=0; i<ar.length; i++)
        ar[i] = 0;
}

function suma1(ar)
{
    for (i=0; i<ar.length; i++)
        ar[i] += 1;
}

function separa(ar){
    console.log(ar.join(' '));
}
