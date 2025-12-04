class Persona:
    nombre=""
    nif=""
    nota=0.0

    def __init__(self, nombre, nif, nota):
        self.nombre = nombre
        self.nif = nif
        self.nota = nota

    def __str__(self):
        return "nombre " + self.nombre + " nif " + self.nif + " nota " + str(self.nota)

    def imprimir(self):
        print("Nombre", self.nombre, "nif", self.nif, "nota", self.nota)
