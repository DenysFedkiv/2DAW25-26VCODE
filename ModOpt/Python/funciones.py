def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

def potencia(base, exponente):
    if exponente == 0:
        return 1
    else:
        return base * potencia(base, exponente - 1)

"""
def potencia(n, p):
    result = 1
    for i in range(p):
        result *= n
    return result

"""

print(factorial(5))

print(potencia(10, 3))