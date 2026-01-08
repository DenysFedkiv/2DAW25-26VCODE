# Filtrar para mostrar numeros que son divisible de 11
numeros = [12, 34, 56, 78, 89, 13, 129, 144, 55, 66, 700, 120]
numerosMO = []

for numero in numeros:
    if(numero % 11 == 0):
        numerosMO.append(numero)

for num in numerosMO:
    print(num)

numerosMOF = list(filter(lambda x:(x % 11 == 0), numeros))
for num in numerosMOF:
    print(num)

numerosMDF = list(filter(lambda x:(x % 2 == 0 or x % 5 == 0), numeros))
for num in numerosMDF:
    print(num)

def a(b):
    if(b % 2 == 0 and b % 5 == 0):
        return True
    else:
        return False

print(a(1))

numerosMDF = list(filter(lambda x:(a(x)), numeros))
for num in numerosMDF:
    print(num)

def rev(str):
    ax = []
    asx = ""
    for a in str:
        ax.insert(0, a)
    for s in ax:
        asx += s
    if str == asx:
        return True
    else:
        return False


nombres = ["rosa", "ana", "pepa", "opo", "arora"]

nombresF = list(filter(lambda x:(x == x[::-1]), nombres))
print(nombresF)

nombresF = list(filter(lambda x:(rev(x)), nombres))
print(nombresF)

def rev(str):
    if(len(str) < 4):
        return False
    else:
        ax = []
        asx = ""
        for a in str:
            ax.insert(0, a)
        if ax[0] != "a":
            return False
        else:
            for s in ax:
                asx += s
            if str == asx:
                return True
            else:
                return False


nombres = ["rosa", "ana", "pepa", "opo", "arora", "ororo"]

nombresF = list(filter(lambda x:(x == x[::-1]), nombres))
print(nombresF)

nombresF = list(filter(lambda x:(rev(x)), nombres))
print(nombresF)