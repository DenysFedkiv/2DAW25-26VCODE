class Factura:
    def __init__(self, numero, nif, nombre_cliente, importe, estado):
        self.numero = numero
        self.nif = nif
        self.nombre_cliente = nombre_cliente
        self.importe = importe
        self.estado = estado

    def imprimir(self):
        print(self.numero, self.nif, self.nombre_cliente, self.importe, self.estado)