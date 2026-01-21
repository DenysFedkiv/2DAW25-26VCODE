from functools import reduce
numeros = [2, 4, 5, 7, 8]

def producto_pares(x, y):
    print(x, y)
    if x % 2 == 0 and y % 2 == 0:
        return x + y
    else:
        return x

producto = reduce(lambda x,y:x*y, numeros)
producto2 = reduce(lambda x,y:producto_pares(x, y), numeros)

print(producto)
print(producto2)