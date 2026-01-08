import random

dificultad = int(input("Introduce dificultad(3-100): "))

while dificultad > 100 or dificultad < 3:
    print("Introduce una dificultad entre 3 y 100")
    dificultad = int(input("Introduce dificultad(3-100): "))

numBarcos = int(input("Introduce numero de barcos(1-5): "))

while numBarcos > 5 or numBarcos < 1:
    print("Introduce una dificultad entre 3 y 100")
    numBarcos = int(input("Introduce numero de barcos(1-5): "))



tablero = []

for i in range(dificultad):
    tablero.append([])
    for j in range(dificultad):
        tablero[i].append(0)

tableroBarcos = []

for i in range(dificultad):
    tableroBarcos.append([])
    for j in range(dificultad):
        tableroBarcos[i].append(0)



for i in range(numBarcos):
    x = random.randint(0, dificultad - 1)
    y = random.randint(0, dificultad - 1)
    if tableroBarcos[y][x] != 0:
        i -= 1
    else:
        tableroBarcos[y][x] = 1


# for i in tableroBarcos:
#     print(i)

juego = True
intento = 0

while juego:
    print("Intento: " + str(intento))
    for i in tablero:
        print(i)

    posX = int(input("Donde quieres disparar posicion X: "))
    if posX < 0 or posX > dificultad-1:
        print("Posicion X fuera de rango")
        input("Pulsa enter para continuar")
        continue

    posY = int(input("Donde quieres disparar posicion Y: "))
    if posY < 0 or posY > dificultad-1:
        print("Posicion Y fuera de rango")
        input("Pulsa enter para continuar")
        continue
    
    if tableroBarcos[posY][posX] == 1:
        print("Has encontrado un barco")
        tablero[posY][posX] = 2
        numBarcos -= 1
    else:
        print("Disparas al agua")
        tablero[posY][posX] = 8
    
    intento += 1

    if numBarcos == 0:
        for i in tablero:
            print(i)
        print("Has ganado en " + str(intento) + " intentos")
        juego = False