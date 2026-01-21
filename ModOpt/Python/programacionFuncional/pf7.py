from functools import reduce

class Movimiento:
    def __init__(self, cta, titular, tipo, importe):
        self.cta = cta
        self.titular = titular
        self.tipo = tipo
        self.importe = importe
    def imprimir(self):
        print(self.cta, self.titular, self.tipo, self.importe)
    
movimientos = []
m1 = Movimiento(1, "ana", "A", 1000)
m2 = Movimiento(2, "luis", "B", 2000)
m3 = Movimiento(3, "ana", "A", 500)
movimientos.append(m1)
movimientos.append(m2)
movimientos.append(m3)
salida = []

def clientes(m):
    if m.tipo == "A":
        m.importe = m.importe * 1.10
    else:
        m.importe = m.importe * 1.20
    return m

salida = list(map(lambda x:clientes(x), movimientos))

for m in salida:
    m.imprimir()

# Sacar clientes donde importe supera 2000€
def importe2000(m):
    if m.importe >= 2000:
        return True
    else:
        return False
    
def sumarImporte(x, y):
    return x.importe + y.importe

salida = list(filter(lambda x:importe2000(x), movimientos))


for m in salida:
    m.imprimir()

sumaImportes = reduce(lambda x, y:x + y.importe, movimientos, 0)
print(sumaImportes)