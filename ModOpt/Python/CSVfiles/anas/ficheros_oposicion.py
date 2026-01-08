import csv
from Opositor import Opositor
opositores=[]
with open ("./anas/datos.csv") as csvFile:
    reader=csv.DictReader(csvFile)
    for row in reader:
        notas=[float(row['nota1']),float(row['nota2']),float(row['nota3']),float(row['nota4'])]
        print(notas)