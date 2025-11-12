<?php
    require_once("config.php");

    echo "<a href='agregar.php'>Agregar</a><br>";

    $consulta = "SELECT * FROM productos";
    
    $stmt = $pdo->prepare($consulta);

    $stmt->execute();

    $productos = $stmt->fetchAll();

    echo "<style>
        table {
            border: 1px solid black;
            border-collapse: collapse;
            }
            
            td, tr {
            padding: 0.5em;
            border: 1px solid black;
        }
    </style>";

    echo "<table>";
    foreach($productos as $p) {
        echo "<tr>";
        echo "<td>" . $p["id"] . "</td>";
        echo "<td>" . $p["nombre"] . "</td>";
        echo "<td>" . $p["precio"] . "</td>";
        echo "<td>" . $p["stock"] . "</td>";
        echo "<td><a href='editar.php'>✏️Editar</a><a href='eliminar.php?id=" . $p["id"] . "'>❌Eliminar</a></td>";
        echo "</tr>";
    }
    echo "</table>";