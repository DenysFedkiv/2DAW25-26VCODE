# # Listas
# notas = [3, 5, 6, 7, 8, 7, 7]

# print(len(notas))
# print(notas[0])
# print(notas[3:])

# notas[0] = 8
# print(notas[0])

# notas.append(9)
# print(notas[len(notas) - 1])

# print(notas)
# notas.reverse()
# print(notas)

# def palindromo(palabra):
#     pRev = []
#     for i in palabra:
#         pRev.append(i)

#     palabraA = pRev.copy()
#     pRev.reverse()

#     if palabraA == pRev:
#         return True
#     else:
#         return False

# #    for i in range(len(palabra)):
# #        if palabra[i] != pRev[i]:
# #            return False
# #    return True


# print(palindromo("21ojo12"))

# alumnos = ["jose", "anas", "angel", "rosa"]
# notas = [3.4, 5.6, 6.7, 4.2]

# def aprobados(alumnos, notas):
#     for i in range(len(alumnos)):
#         if notas[i] >= 5:
#             print(alumnos[i] + " esta aprobado con nota " + str(notas[i]))

# aprobados(alumnos, notas)

# matriz = [[3, 5], [4, 7]]

# print(matriz[0])
# print(matriz[0][0])

# alumnos = ["alumno1", "alumno2", "alumno3", "alumno4"]
# nota2x2 = [[3.4, 4.5, 3.3], [5.4, 7.5, 3.3], [6.4, 3.5, 9.3], [1.4, 2.5, 5.3]]
# notaFinal = []


# for i in range(len(alumnos)):
#     media = 0
#     for j in nota2x2[i]:
#         media += j
#     media /= len(nota2x2[i])
#     media = f'{media:.2f}'
#     notaFinal.append(media)

# for i in notaFinal:
#     print(i)

## Conjuntos

# conjunto1 = {"A", "B", "C", "D"}
# conjunto2 = {"C", "D", "E", "F"}

# print(" ")

# for v in conjunto1:
#     print(v)

# conjunto3 = conjunto1 & conjunto2

# print(" ")

# for v in conjunto3:
#     print(v)

# conjunto4 = conjunto1 | conjunto2

# print(" ")

# for v in conjunto4:
#     print(v)

# conjunto5 = conjunto1 - conjunto2

# print(" ")

# for v in conjunto5:
#     print(v)

## Diccionarios

diccionario1 = {"juan" : 999999, "luis" : 888888, "ana" : 666666}

for clave, valor in diccionario1.items():
    print("clave: " + clave + " valor: " + str(valor))

diccionario1["ana"] = 1234

for clave, valor in diccionario1.items():
    print("clave: " + clave + " valor: " + str(valor))

diccionario1["pepe"] = 333333

for clave, valor in diccionario1.items():
    print("clave: " + clave + " valor: " + str(valor))

telefono_aux = diccionario1.get("pepe")
if telefono_aux == None:
    print("No existe")
else:
    print("Existe: " + str(diccionario1["pepe"]))

diccionario2 = {
    "juan" : {"luis" : 888888, "ana" : 343434},
    "diego" : {"artur" : 222222, "manuel" : 123123}
}

persona = "diego"

match persona:
    case "juan":
        print(diccionario2["juan"])
    case "diego":
        print(diccionario2["diego"])
    case _:
        print("No existe")