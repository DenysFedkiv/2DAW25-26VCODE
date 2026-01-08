class Vehiculo:
    def __init__(self, color, ruedas, marca, modelo):
        self.color = color
        self.ruedas = ruedas
        self.marca = marca
        self.modelo = modelo
    
    def __str__(self):
        return (self.color + " " + str(self.ruedas) + " " + self.marca + " " + self.modelo)
    
class Coche(Vehiculo):
    def __init__(self, color, ruedas, marca, modelo, potencia, puertas):
        Vehiculo.__init__(self, color, ruedas, marca, modelo)
        self.potencia = potencia
        self.puertas = puertas
    
    def gasto(self):
        return self.potencia * 1.15

    def __str__(self):
        return Vehiculo.__str__(self) + " " + str(self.potencia) + " " + str(self.puertas)

class Camion(Vehiculo):
    def __init__(self, color, ruedas, marca, modelo, carga):
        Vehiculo.__init__(self, color, ruedas, marca, modelo)
        self.carga = carga

    def gasto(self):
        return self.carga * 4.20
    
    def __str__(self):
        return Vehiculo.__str__(self) + " " + str(self.carga)
