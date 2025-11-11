<?php
    require_once("config.php");

    echo "<a href='agregar.php'>Agregar</a><br>";

    $consulta = "SELECT * FROM productos";
    
    $stmt = $pdo->prepare($consulta);

    $stmt->execute();

    $productos = $stmt->fetchAll();

    foreach($productos as $p) {
        echo "Producto: " . $p["nombre"] . "<br>";
    }