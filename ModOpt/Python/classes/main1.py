from clases1 import Persona

persona1 = Persona("La", "F12R", 7.5)
persona1.nombre = "el"

print(persona1.nombre)
print(persona1.nif)
print(persona1.nota)
persona1.imprimir()

print(persona1.__str__())

alumnos = {}

# Añadir alumno
for i in range(3):
    nombre = input("Nombre ")
    nif = input("NIF ")
    if nif in alumnos:
        print("Ya existe")
    else:
        nota = float(input("Nota "))
        al = Persona(nombre, nif, nota)
        alumnos[al.nif] = al

# Imrimir alumno
if "F13R" in alumnos:
    print(alumnos["F13R"])
else:
    print("No existe")

# Eliminar alumno
nif = input("NIF ")
print(alumnos.pop(nif, "No existe"))
if nif in alumnos:
    alumnos.pop(nif)
    print(alumnos)
else:
    print("No existe")

# Calcular nota media
media = 0
for nif, alumno in alumnos.items():
    media += alumno.nota
media /= len(alumnos)
print(media)

# Buscar nota maxima(devuelve clave)
alumnosA = {}
for nif, alumno in alumnos.items():
    alumnosA[nif] = alumno.nota
print(max(alumnosA, key=alumnosA.get))

# Buscar nota maxima(devuelve valor)
alumnosA = {}
for nif, alumno in alumnos.items():
    alumnosA[nif] = alumno.nota
print(max(alumnosA.values))

