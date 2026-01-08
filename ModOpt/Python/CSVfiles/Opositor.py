class Opositor:
    __notas=[]
    def __init__(self,nif,nombre,notas):
        self.nif=nif
        self.nombre=nombre
        self.__notas=notas
    def get_nota(self,i):
        return self.__notas[i]
    def imprimir(self):
        print(self.nif,self.nombre,self.__notas)
    def aprobado(self):
        aprobado = False
        for nota in self.__notas:
            if nota < 5:
                aprobado = False
                break
            else:
                aprobado = True
        return aprobado
    def notaMedia(self):
        return sum(self.__notas) / len(self.__notas)