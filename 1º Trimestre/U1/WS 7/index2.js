/*Write a function called addOnlyNums that can take in any number of arguments 
(including numbers or strings), and returns the sum of only the numbers.*/

function addOnlyNums(array){
    let suma = 0
    for (e of array){
        if (typeof e == 'number')
            suma +=e
    }
    return suma
    
}

lista=[1, 'cat', 3, 4];
document.write(addOnlyNums(lista));