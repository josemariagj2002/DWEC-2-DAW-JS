//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
datos = [13, 12, 45, 43, 12, 3]

function sumEveryOther(array){
    total = 0
    for(i = 0;i < array.length;i += 2){
        resul += array[i]
    }
    return total
}
document.write(sumEveryOther(datos))

function sumEveryOtherAlt(array){
    total = 0
    for(i = 0;i < array.length;i += 2){
        resul += array[i]
    }
    return resul
}

document.write(sumEveryOtherAlt(13, 12, 45, 43, 12, 3))
