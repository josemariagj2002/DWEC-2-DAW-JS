'''hacer un funcion que admite un numero entero como parametro y devuelve ese numero en binario'''
def convierteEnteroABinario(num):
    cociente = (num//2)
    resto = (num%2)
    numero_binario = []
    while cociente > 2:
        resto = (num%2)
        cociente = (num//2)
        numero_binario.append(str(resto))
        num = (num//2)
        if cociente < 2:
            numero_binario.append(str(cociente))
    numero_binario.reverse()
    return numero_binario
        
numero = int(input('dime un numero: '))
print(convierteEnteroABinario(numero))