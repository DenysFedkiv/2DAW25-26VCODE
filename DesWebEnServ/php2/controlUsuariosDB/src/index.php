<?php
    session_start();

    require_once("config.php");
    require_once("auth.php");
    require_once("header.php");
    
    $esAdmin = false;

    if(isset($_SESSION["rol"])) {
        if($_SESSION["rol"] == "admin") {
            $esAdmin = true;
        }
    }

    if($esAdmin) {
        echo "<a class='btn btn-success m-1' href='agregar.php'>Agregar</a><br>";
    }
    
    $consulta = "SELECT * FROM productos";
    
    $stmt = $pdo->prepare($consulta);

    $stmt->execute();

    $productos = $stmt->fetchAll();

    echo "<table class='table table-bordered table-striped'>";
    echo "<tr>";
    echo "<th>ID</td>";
    echo "<th>Nombre</td>";
    echo "<th>Precio</td>";
    echo "<th>Stock</td>";
    if($esAdmin) {
        echo "<th></td>";
    }
    echo "</tr>";
    foreach($productos as $p) {
        echo "<tr>";
        echo "<td>" . $p["id"] . "</td>";
        echo "<td>" . $p["nombre"] . "</td>";
        echo "<td>" . $p["precio"] . "</td>";
        echo "<td>" . $p["stock"] . "</td>";
        if($esAdmin) {
            echo "<td>
            <button class='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#juanito' data-id='" . $p["id"] . "'>Eliminar</button>
            <a class='btn btn-warning m-1' href='editar.php?id=" . $p["id"] . "'>✏️Editar</a>
            <a class='btn btn-danger' href='eliminar.php?id=" . $p["id"] . "'>❌Eliminar</a></td>";
            echo "</tr>";
        }
    }
    echo "</table>";
    require_once("footer.php");