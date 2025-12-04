import csv
from Factura import Factura
from operator import methodcaller

facturas = []
with open("D:/2DAW/VStudioCode/DEV/ModOpt/Python/CSVfiles/ejGestorFacturas/facturas.csv") as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
        fact = Factura(row["numFactura"], row["nifCliente"], row["nombreCliente"], float(row["importeBruto"]), int(row["IVA"]))
        facturas.append(fact)

print()
print("Orden neto")
facturas.sort(key=methodcaller("importeNeto"), reverse=True)
for factura in facturas:
    factura.imprimirCNeto()

print()
print("Orden nombre")
facturas.sort(key=methodcaller("getNombre"), reverse=False)
for factura in facturas:
    factura.imprimir()

minNeto = float(input("Neto minimo"))
maxNeto = float(input("Neto maximo"))

print()
print("Orden entre", minNeto, "y", maxNeto)
for factura in facturas:
    if factura.importeNeto() < maxNeto and factura.importeNeto() > minNeto:
        factura.imprimirCNeto()
