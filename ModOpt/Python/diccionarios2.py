oposicion = {"juan" : {"fisica" : 3.4, "psicotecnica" : 5, "test" : 5},
             "pepe" : {"fisica" : 6, "psicotecnica" : 5.5, "test" : 5.7},
             "manuel" : {"fisica" : 7.4, "psicotecnica" : 5, "test" : 6}}

oposicionResultado = {}

for cantidato, notas in oposicion.items():
    oposicionResultado[cantidato] = {}
    apto = "Si"
    notaMedia = 0
    for nombre, nota in notas.items():
        notaMedia += nota
        if nota < 5:
            apto = "No"
    notaMedia /= len(notas)
    oposicionResultado[cantidato]["apto"] = apto
    oposicionResultado[cantidato]["notaMedia"] = round(notaMedia, 2)

print(oposicionResultado["juan"])
print(oposicionResultado["pepe"])
print(oposicionResultado["manuel"])

for cantidato, resultados in oposicionResultado.items():
    for n, r in resultados.items():
        if n == "apto":
            if r == "Si":
                print(cantidato, "es apto")
            else:
                print(cantidato, "no es apto")
            
        else:
            print(cantidato, "tiene nota media:", r)
    print()

