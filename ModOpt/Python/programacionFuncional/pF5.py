numeros = range(2, 200)

def multiplo3y5(numero):
    if numero % 3 == 0 and numero % 5 == 0:
        return True
    return False

raizNumerosMultiplo3y5 = list(map(lambda x:round(x**0.5, 2), list(filter(lambda x:multiplo3y5(x), numeros))))
print(raizNumerosMultiplo3y5)

def numeroPar(numero):
    if numero % 2 == 0:
        return True
    else:
        return False
    
numerosPares = list(filter(lambda x:numeroPar(x), numeros))
numerosImPares = list(filter(lambda x:numeroPar(x) == False, numeros))

print(numerosPares)
print(numerosImPares)