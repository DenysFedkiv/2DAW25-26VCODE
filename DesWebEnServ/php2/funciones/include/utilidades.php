<?php
    function imprimir_array($a) {
        echo "<ul>";
        foreach($a as $valor) {
            echo "<li>$valor</li>";
        }
        echo "</ul>";
    }

    function imprimir_frase(...$x) {
        // echo "<p>";
        // foreach($x as $palabra) {
        //     echo $palabra . " ";
        // }
        // echo "</p>";
        echo "<p>";
        echo implode(" ", $x);
        echo "</p>";
    }

    function limpiar_texto($texto) {
        echo strip_tags($texto);
    }