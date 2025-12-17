from MiExcepcion import MiExcepcion

seguir = True
while seguir:
    numero = 22
    try:
        if numero > 10:
            raise MiExcepcion(numero)
        else:
            print(str(numero))
            break
    except MiExcepcion as e:
        print(e)
    except:
        print("Error desconocido")
    finally:
        break