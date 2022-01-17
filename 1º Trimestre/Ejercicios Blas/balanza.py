'''escribamos una función a la que se le pasa una lista de n numeros y n>1.
Tenemos que hayar un punto en el que ambos lados de las lista, haya una
sublista que pesen lo mimso(balanza). Si no encuentra ningún punto en el que es balanceable, devuelve falso'''

def balanza(lista):
    for i in range(1,len(lista)):
        if sum(lista[:i]) == sum(lista[i+1:]):
            return i
    
    return None

numeros = [9,2,4,1,1,2,1,0]

print("Soy Chema el maricón")
print("Posición central: ", balanza(numeros))