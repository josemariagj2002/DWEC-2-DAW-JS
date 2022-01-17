function calculateSupply(age,amountPerDay)
{
    const maxAge= 120 * amountPerDay;
    var edad = age;
    var cantidad = amountPerDay;
    var cantidadConsumida = (age*amountPerDay)
    
    document.write("You need " + (maxAge - cantidadConsumida) +" units more to last to the ripe age of 120 years" )
}

calculateSupply(20,60)

