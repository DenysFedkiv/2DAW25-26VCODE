palabras = ["hola", "adios", "azules", "rojo", "ojo", "alamala"]

# Transformar palabras a su longitud
palabrasLongitud = list(map(lambda x:len(x), palabras))

print(palabrasLongitud)

# Transformar palabras no palindromas a su longitud
def longitudNoPalindromo(palabra):
    ax = []
    asx = ""
    for a in palabra:
        ax.insert(0, a)
    else:
        for s in ax:
            asx += s
        if palabra == asx:
            return 0
        else:
            return len(palabra)

palabrasNoPalindromoLongitud = list(map(lambda x:longitudNoPalindromo(x), palabras))

print(palabrasNoPalindromoLongitud)