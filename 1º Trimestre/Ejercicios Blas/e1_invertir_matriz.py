def lista_invertida(lista):
    '''Devuelve una lista con las posiciones de sus elementos invertidas'''
    lista_aux = lista.copy()
    lista_aux.reverse()
    return lista_aux
    
# def invertir_matriz(matriz):
#     '''Devuelve una matriz con los números invertidos de posición en su fila
#     y con las filas invertidas con respecto a sus posiciones'''
#     return lista_invertida([lista_invertida(matriz[i])
#                   for i in range(len(matriz))])

def invertir_matriz(matriz):
    matriz_aux = []
    n = len(matriz)
    
    for i in range(n):
        matriz_aux.append(lista_invertida(matriz[n-i-1]))
    
    return matriz_aux

def imprimir_matriz(matriz):
    for fila in matriz:
        print(fila)

m = [[1,3,5,7],
     [2,4,8,9],
     [3,0,1,2]]

imprimir_matriz(m)
print()
imprimir_matriz(invertir_matriz(m))