from Vehiculo import Vehiculo, Coche, Camion

v1 = Vehiculo("Azul", 4, "Toyota", "RAV 4")

print(v1.__str__())

c1 = Coche("Azul", 4, "Toyota", "RAV 4", 210, 5)

print(c1.__str__())
print(c1.gasto())

cm1 = Camion("Blanco", 10, "TRG", "HOME23", 16000)

print(cm1.__str__())

cm2 = Camion("Gris", 8, "TRG", "HOME21", 10000)

print(cm2.__str__())
print(cm2.gasto())

cm3 = Camion("Negro", 6, "TRG", "HOME15", 6000)

print(cm3.__str__())