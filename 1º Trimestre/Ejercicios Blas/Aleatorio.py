'''crea una función para generar un string de cuatro digitos aleatorio y que no se repitan.
El juego consiste n que la máquina va imprimiedno el numero de acierto y el numero de coincidencias.
Acierto es acertar el numero y la posicin. coincidencia es si el numero esta, independientemende
de la posicion'''
from random import randint

def genera_numero():
    mi_numero = ''
    while len(mi_numero) < 4:
        nuevo_numero = str(randint(0,9))
        if nuevo_numero not in mi_numero:
            mi_numero += nuevo_numero
        
    return mi_numero

def analiza(intento, respuesta_correcta):
    aciertos = 0
    coincidencias = 0
    for i in range(4):
        if intento[i] == respuesta_correcta[i]:
            aciertos += 1
        elif intento[i] in respuesta_correcta:
            coincidencias += 1
        
    return (aciertos,coincidencias)
    


resultado = analiza('0963','1234')
print(resultado)


'''def adivina_numero(n):
    respuesta = n
    intento = input('Estoy pensando en un número de 4 cifras. Intenta adivinarlo: ')
    if len(intento) != 4:
        intento = input('Ese numero no tiene 4 cifras. Por favor, introduce un número de 4 cifras: ')
    else:
        while respuesta != intento:
            aciertos = 0
            coincidencias = 0
            for i in intento:
                if respuesta.index(i) == intento.index(i):
                    aciertos += 1
                elif i in respuesta:
                    coincidencias += 1
                
            print('Tienes', coincidencias, 'coincidencias y', aciertos, 'aciertos')
            intento = input('Dime otro numero: ')
    
'''

#numero_random = genera_numero()