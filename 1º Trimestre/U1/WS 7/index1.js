 //Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function argumentos(...misDatos)
{
    let resul = 0
    for (i of misDatos){
        resul += i
    }
    return resul;
}

lista=[1, 'cat', 3, 4];
document.write(argumentos(lista));
