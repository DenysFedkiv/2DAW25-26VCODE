a = 5
b = 4
try:
    c = a/b
    print(a[3])
except ZeroDivisionError:
    print("Division por cero")
except:
    print("error desconocido")
finally:
    print("siempre se ejecuta")