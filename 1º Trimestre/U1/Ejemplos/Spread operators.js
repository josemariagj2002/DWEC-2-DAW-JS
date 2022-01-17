function suma(valor1,valor2,valor3)
{
    let total = valor1+valor2+valor3;

    return total;
}

let misnumeros=[3,33,4596];
let misuma = suma(...misnumeros);

let num1 = 4;
let num2 = 63;
let num3 = 754;

let otrasuma = suma(num1, num2, num3);