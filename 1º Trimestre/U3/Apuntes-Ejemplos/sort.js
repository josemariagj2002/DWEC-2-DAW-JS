// sort

let notas = [4,5,8,10,3];

function comparar(valor1, valor2){
    return valor1 - valor2;
}

notas.sort(comparar);

notas.sort( (a,b)=>a-b );  // funcion arrow




