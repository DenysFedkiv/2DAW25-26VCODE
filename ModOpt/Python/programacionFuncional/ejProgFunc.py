import csv
from functools import reduce

class Nomina:
    def __init__(self, nif, nombre, sueldoBase, complementoSalarial, trienios, irpf):
        self.nif = nif
        self.nombre = nombre
        self.sueldoBase = sueldoBase
        self.complementoSalarial = complementoSalarial
        self.trienios = trienios
        self.irpf = irpf

    def imprimir(self):
        print(self.nif, self.nombre, self.sueldoBase, self.complementoSalarial, self.trienios, self.irpf)

nominas = []

ruta = "D:/2DAW/VStudioCode/DEV/ModOpt/Python/programacionFuncional/nominas.csv"

with open (ruta) as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
        nomina = Nomina(row["nif"], row["nombre"], float(row["sueldoBase"]), float(row["complementoSalarial"]), int(row["trienios"]), float(row["irpf"]))
        nominas.append(nomina)

def nomSTotal(nomina):
    return [nomina.nif, nomina.nombre, nomina.sueldoBase + nomina.complementoSalarial + (nomina.trienios * 40) - (nomina.sueldoBase + nomina.complementoSalarial + (nomina.trienios * 40)) * (nomina.irpf / 100)]

nominasSueldoTotal = list(map(lambda x:nomSTotal(x), nominas))

print("Nominas con sueldo total")
for nom in nominasSueldoTotal:
    print(nom)

def nominasMQ1500(sueldo):
    if sueldo > 1500:
        return True
    else:
        return False

nominasFiltradas = list(filter(lambda x:nominasMQ1500(x[2]), nominasSueldoTotal))

print("Nominas mayores de 1500")
for nom in nominasFiltradas:
    print(nom)

gastoNominas = reduce(lambda x, y:x + y[2], nominasSueldoTotal, 0)

print("Gasto nominas total")
print(gastoNominas)