<?php
    function mostrarProductos($array) {
        foreach($array as $valor) {
            echo "<p>Producto: " . $valor["nombre"] . " | Precio: " . $valor["precio"] . " | Cantidad: " . $valor["cantidad"] . "</p>";
        }
    }

    function calcularTotal($array) {
        $total = 0;
        foreach($array as $valor) {
            $total += $valor["precio"] * $valor["cantidad"];
        }
        return $total;
    }

    function aplicarDescuento($precio, $porcentaje) {
        return $precio * (1 - $porcentaje/100);
    }

    $productos = [
        ["nombre" => "Cerdo", "precio" => 12.99, "cantidad" => 15],
        ["nombre" => "Ternera", "precio" => 18.99, "cantidad" => 10],
        ["nombre" => "Pavo", "precio" => 9.09, "cantidad" => 19],
        ["nombre" => "Pollo", "precio" => 7.59, "cantidad" => 31],
    ];

    mostrarProductos($productos);
    $total = calcularTotal($productos);
    echo "<p>$total</p>";
    echo number_format(aplicarDescuento($total, 10), 2);