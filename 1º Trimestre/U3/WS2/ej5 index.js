/*5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array*/


function paresImpares(){
    let numeros = [];
    cont = 0;
    while (cont < 100){
        numeros.push(Math.round((Math.random())*1000 + 1))
        cont += 1;
    }
    return numeros;
}

resultado = paresImpares();
console.log(resultado);

function comparar(valor1,valor2){
    if (valor1%2==0 && valor2%2!=0){
        return 1;
    }
    else if (valor2%2==0 && valor1%2!=0){
        return -1;
    }
    else{
        return 0;
    }
}

console.log(resultado.sort(comparar));