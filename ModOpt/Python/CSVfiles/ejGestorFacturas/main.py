import csv
from Factura import Factura
from operator import methodcaller

facturas = []
with open("D:/2DAW/VStudioCode/DEV/ModOpt/Python/CSVfiles/ejGestorFacturas/facturas.csv") as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
        fact = Factura(row["numFactura"], row["nifCliente"], row["nombreCliente"], float(row["importeBruto"]), int(row["IVA"]))
        facturas.append(fact)

seguir = True
while seguir:
    print("1) listado de facturas con los datos de la factura + importe neto ordenado por importe neto")
    print("2) listado de facturas ordenado por nombre del cliente")
    print("3) listado de facturas con importe neto en el intervalo que le digamos")
    print("0) Salir")
    opcion = input("Introduce opcion: ")

    match opcion:
        case "1":
            print()
            print("Orden neto")
            facturas.sort(key=methodcaller("importeNeto"), reverse=True)
            for factura in facturas:
                factura.imprimirCNeto()
        case "2":
            print()
            print("Orden nombre")
            facturas.sort(key=methodcaller("getNombre"), reverse=False)
            for factura in facturas:
                factura.imprimir()
        case "3":
            minNeto = float(input("Neto minimo: "))
            maxNeto = float(input("Neto maximo: "))
            print()
            print("Orden entre", minNeto, "y", maxNeto)
            for factura in facturas:
                if factura.importeNeto() < maxNeto and factura.importeNeto() > minNeto:
                    factura.imprimirCNeto()
        case "0":
            print("Fin de programa")
            seguir = False
        case _:
            print("Opcion incorecta")


