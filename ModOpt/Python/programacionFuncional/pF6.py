alumnos=["ana", "jose", "luis"]
notas_alumnos=[[4,4,4,4], [8,8,8,8], [7,4,5,8]]
def media(notas):
    suma = 0
    for nota in notas:
        suma += nota
    media = suma / len(notas)
    return media

def aprobado(notaMedia):
    if notaMedia >= 5:
        return "Aprobado"
    else:
        return "Suspenso"
    
def notaMaxMin(notas):
    max = 0
    min = 10
    for nota in notas:
        if nota < min:
            min = nota
        if nota > max:
            max = nota
    return [max, min]
    
nota_media_alumnos = list(map(lambda x:media(x), notas_alumnos))
nota_max_min_alumnos = list(map(lambda x:notaMaxMin(x), notas_alumnos))
aprobado_suspenso_alumnos = list(map(lambda x:aprobado(x), nota_media_alumnos))
print(nota_media_alumnos)
print(nota_max_min_alumnos)
print(aprobado_suspenso_alumnos)
for i in range(len(alumnos)):
    print(alumnos[i], nota_media_alumnos[i], nota_max_min_alumnos[i][0], nota_max_min_alumnos[i][1], aprobado_suspenso_alumnos[i])