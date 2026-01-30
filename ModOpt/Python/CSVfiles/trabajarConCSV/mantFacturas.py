import csv
from Factura import Factura

file = input("Intoroduce el nombre de fichero ")
file = "D:/2DAW/VStudioCode/DEV/ModOpt/Python/CSVfiles/trabajarConCSV/" + file + ".csv"
facturas = {}

try:
    with open(file) as csvFile:
        reader = csv.DictReader(csvFile)
        for row in reader:
            factura = Factura(row["numero"], row["nif"], row["nombre_cliente"], float(row["importe"]), row["estado"])
            facturas[row["numero"]] = factura
    seguir = True
except FileNotFoundError:
    print("No se encuentra el fichero")
    seguir = False


while seguir:
    print("1 - Listar facturas")
    print("2 - Modificar estado de una factura")
    print("0 - Salir")

    opcion = int(input("Introduce opcion "))

    match opcion:
        case 1:
            print("LISTADO FACTURAS")
            print("--------------")
            for numero in facturas:
                facturas[numero].imprimir()
            print("--------------")
        case 2:

            numFactura = input("Introduce numero factura ")

            if numFactura in facturas:
                f = facturas[numFactura]

                if f.estado == "PAG":
                    f.estado = "PTE"
                else:
                    f.estado = "PAG"
            else:
                print("Factura no existe")
            # facturasAx = {}


            # with open(file) as csvFile:
            #     reader = csv.DictReader(csvFile)
            #     for row in reader:
            #         if row["numero"] == numFactura:
            #             if row["estado"] == "PAG":
            #                 row["estado"] = "PTE"
            #             else:
            #                 row["estado"] = "PAG"
            #         factura = Factura(row["numero"], row["nif"], row["nombre_cliente"], float(row["importe"]), row["estado"])
            #         facturasAx[row["numero"]] = factura
            # with open(file) as csvFile:
            #     writer = csv.DictWriter(csvFile)
            #     writer.writerows(facturasAx)
        case 0:
            seguir = False