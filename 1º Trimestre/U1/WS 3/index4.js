/*Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".*/

function calcCircumfrence(radius)
{
    var radio = radius
    document.write("Su circunferencia mide:" + (2 * 3.14 * radius ) + "cm" +"<br>");

}


/*Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

function calcArea(radius)
{
    var radio = radius
    document.write("Su area mide:" +(3.14 * (radio*radio))+"cm cuadrados");

}

calcCircumfrence(5)
calcArea(5)