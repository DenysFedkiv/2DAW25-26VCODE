<?php
    $alumnos = [
        "Ana" => 7.5,
        "Luis" => 3.2,
        "Marta" => 9.1,
        "Jorge" => 5.0,
        "Sofia" => 8.8,
    ];

    $media = array_sum($alumnos) / count($alumnos);

    echo "<h1>Resultados</h1>";

    echo "<ul>";
    foreach($alumnos as $clave => $valor) {
        if($valor >= 5) {
            echo "<li>$clave: " . number_format($valor, 1, ".") . " - Aprobado</li>";
        }
        else {
            echo "<li>$clave: $valor - Suspendido</li>";
        }
    }
    echo "</ul>";

    echo "<p>      Nota media de grupo: <strong>$media<strong></p>";

    