"""

print("Python World!")
a = 10
b = 10.15
c = "10"
print(a + b)
print(int(c) + b)

if a < b:
    print("a es menor que b")
else:
    print("a es mayor que b")

a2 = int(input("Introduce un numero: "))

if a2 < 100:
    print("Numero es menor que 100")
else:
    print("Numero es mayor que 100")

"""
    
items = [1, 2, 3, 4, 5, 10]

for i in items:
    print(i)

for i in range(4):
    print(i)

numerosPares = range(0, 10, 2)

for i in numerosPares:
    print(i)

for i in range(1, 101):
    contador = 0
    for j in range(1, i + 1):
        if i % j == 0:
            contador = contador + 1
    if(contador == 2):
        print(i)

for i in range(1, 101):
    primo = True
    for j in range(2, int(i/2) + 1):
        if i % j == 0:
            primo = False
            break
    if(primo):
        print(i)

contador = 10
while(contador != 0):
    print("while ejecutando " + str(contador))
    contador -= 1