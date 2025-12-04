class Factura:
    def __init__(self, numFactura, nifCliente, nombreCliente, importeBruto, IVA):
        self.numFactura = numFactura
        self.nifCliente = nifCliente
        self.nombreCliente = nombreCliente
        self.importeBruto = importeBruto
        self.IVA = IVA
    
    def imprimir(self):
        print(self.numFactura, self.nifCliente, self.nombreCliente, self.importeBruto, self.IVA)

    def importeNeto(self):
        return self.importeBruto - (self.importeBruto*self.IVA/100)
    
    def imprimirCNeto(self):
        print(self.numFactura, self.nifCliente, self.nombreCliente, self.importeBruto, self.IVA, self.importeNeto())

    def getNombre(self):
        return self.nombreCliente