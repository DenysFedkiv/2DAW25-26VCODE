agenda={"juan":{"luis":22222,"rosa":44444,"ana":44566},
           "pepe": {"luis":123,"rosa1":345,"ana1":455},
           "manuel":{"luis2":6666,"rosa2":45678,"ana2":5432}}
seguir=True
while(seguir):
    print("0-imprimir la agenda")
    print("1-ver todos los clientes de un contacto")
    print("2-sacar el telefono de un cliente de un contacto")
    print("3-añadir o modificar un cliente a un contacto")
    print("4-borrar un cliente a un contacto")
    print("5-añadir un contacto a la agenda")
    print("6-borrar un contacto a la agenda")
    print("7-imprimir contacto en que esta cliente")
    print("9-fin")      
    opcion=int(input("Introduce la opcion"))
    match opcion:
       case 0:
            for c,v in agenda.items():
                print(c,'-->',v) 
       case 1:
            contacto=input("Introduce el contacto")
            clientes=agenda.get(contacto)
            if(clientes==None): 
                print("contacto no existe")
            else:
                print(clientes)  
       case 2:
            contacto=input("Introduce el contacto") 
            clientes=agenda.get(contacto)
            if(clientes==None): 
                print("contacto no existe")
            else:
               cliente=input("Introduce el cliente") 
               telefono=clientes.get(cliente)  
               if(telefono==None): 
                  print("cliente no existe")    
               else:
                   print(telefono)
       case 3: 
            contacto=input("Introduce el contacto") 
            if contacto not in agenda:
                print("contacto no existe")
            else:
               cliente=input("Introduce el cliente") 
               telefono=int(input("Introduce el telefono"))
               agenda[contacto][cliente]=telefono   
               print("cliente del contacto ",contacto," add correctamente")         
       case 4:
            contacto=input("Introduce el contacto") 
            if contacto not in agenda:
                print("contacto no existe")
            else:
               cliente=input("Introduce el cliente") 
               if cliente in agenda[contacto]:
                   del agenda[contacto][cliente]
                   print("cliente del contacto ",contacto," delete correctamente") 
               else:
                   print("no existe el cliente")            
       case 5:
            contacto=input("Introduce el contacto") 
            if contacto not in agenda:
                agenda[contacto]={}
            else:
                print("contacto ya existe")
       case 6:
            contacto=input("Introduce el contacto") 
            if contacto in agenda:
                del agenda[contacto]
            else:
                print("contacto no existe")         
       case 7:
            cliente = input("Introduce un cliente")
            for c, v in agenda.items():
                aux = v.get(cliente)
                if aux is not None:
                    print(c)
                if cliente in v:
                    print(c)
       case 9:
            seguir=False
       case _:
            print("pulse una opcion correcta")    
print("fin del programa")  