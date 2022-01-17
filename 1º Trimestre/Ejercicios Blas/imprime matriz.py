''' escribe una función que le pasamos el numero de filas y
de columnas y devuelve una matriz con esas filas y esas columnas'''
from random import randint

def genera_matriz(filas,columnas):
    matriz = []
    fila = []
    for i in range(columnas):
        fila.append(i)
    
    for i in range(0,filas):
        matriz.append(fila)
        
    return matriz
    
resultado = genera_matriz(2,2)
print(resultado)