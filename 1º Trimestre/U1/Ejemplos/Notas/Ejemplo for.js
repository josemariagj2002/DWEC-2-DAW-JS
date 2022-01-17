
salir = false

for(i=0; i<10 && !salir ;i++)
{
    console.log(i);
    if(prompt("Deseas continuar?") == "N")
    {
        salir = true;
    }
}