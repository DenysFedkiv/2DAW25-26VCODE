numeros = range(2, 100)

numerosPrimos = []

for numero in numeros:
    contador = 0
    primo = False
    for i in range(1, len(numeros)):
        if numero % i == 0:
            contador += 1
    if contador > 2:
        primo = False
    else:
        primo = True
    if primo:
        numerosPrimos.append(numero)

print(numerosPrimos)

def primo(numero):
    contador = 0
    for i in range(1, numero + 1):
        if numero % i == 0:
            contador += 1
    if contador > 2:
        return False
    else:
        return True

def primo2(numero):
    for i in range(2, int(numero / 2) + 1):
        if numero % i == 0:
            return False
    return True

numerosPrimosF = list(filter(lambda x:(primo(x)), numeros))

print(numerosPrimosF)