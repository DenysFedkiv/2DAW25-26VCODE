<?php
    require_once("clases1.php");

    $cuenta1 = new CuentaBancaria("Hermenegildo", "ISBN - 6338266129", 0);

    echo $cuenta1->ingresar(2000);

    echo "<br>Saldo: " . $cuenta1->get_saldo();
    
    echo "<br>" . $cuenta1->retirar(1600);
    echo "<br>" . $cuenta1->retirar(1600);

    $c2 = new Class2("bob");
    $c2->mostrar();