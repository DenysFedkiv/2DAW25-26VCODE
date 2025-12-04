class Opositor:
    __notas=[]
    def __init__(self,nif,nombre,notas):
        self.__notas=nif
        self.nombre=nombre
        self.__notas=notas
    def get_nota(self,i):
        return self.__notas[i]
    def imprimir(self):
        print(self.nif,self.nombre,self.__notas)
