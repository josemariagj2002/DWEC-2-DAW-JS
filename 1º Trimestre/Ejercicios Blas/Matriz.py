'''tenemos una matriz bidimensional con f numeros de filas y c numeros de columnas
toma esa matriz como parametro y produzca una matriz de salida donde esten invertidas las posiciones en filas y columna'''
from random import randint

def matriz(nfilas):
    
    filas = {}
    cont = 0
    
    while cont < nfilas:
        fila =[]
        n = input('Dime un número para la fila. Si no quieres insertar más números pulsa *: ')
        if n != '*':
            fila.append(n)
        elif n == '*':
            print('Fila creada y guardada.')
            cont += 1
            filas[cont] = fila
        else:
            pass
        
    print('Se han creado', cont, 'filas')
    print(filas)
    
matriz(4)




