numeros = range(2, 20)

# Transformar numeros a cuadrado
numerosCuadrados = list(map(lambda x:x**2, numeros))

print(numeros)
print(numerosCuadrados)

def cuadrado(numero):
    return numero ** 2

numerosCuadradosM = list(map(lambda x:cuadrado(x), numeros))
print(numerosCuadradosM)

# Transformar solo numeros primos
def cuadradoPrimos(numero):
    for i in range(2, int(numero / 2) + 1):
        if numero % i == 0:
            return numero
    return numero ** 2

numerosPrimosCuadrado = list(map(lambda x:cuadradoPrimos(x), numeros))

print(numerosPrimosCuadrado)