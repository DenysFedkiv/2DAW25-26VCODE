import csv
from operator import methodcaller
from Opositor import Opositor

opositores = []
# with open ("D:/2DAW/VStudioCode/DEV/ModOpt/Python/CSVfiles/fichero1.csv", newline="", encoding="utf-8") as csvFile:
with open ("D:/2DAW/VStudioCode/DEV/ModOpt/Python/CSVfiles/fichero1.csv") as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
        notas = [float(row["nota1"]), float(row["nota2"]), float(row["nota3"]), float(row["nota4"])]
        op = Opositor(row["nif"], row["nombre"], notas)
        opositores.append(op)
        print(notas)

for op in opositores:
    op.imprimir()
    print(op.aprobado())
    print(op.notaMedia())

print()
print("Aprobados")
opositores.sort(key=methodcaller("notaMedia"), reverse=True)
for op in opositores:
    if op.aprobado():
        op.imprimir()
        print(op.aprobado())
        print(op.notaMedia())