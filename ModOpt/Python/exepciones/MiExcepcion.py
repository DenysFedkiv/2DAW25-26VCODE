class MiExcepcion(Exception):
    def __init__(self, numero):
        self.numero = numero
    def __str__(self):
        return "El numero " + str(self.numero) + " es demaciado grande"
    
