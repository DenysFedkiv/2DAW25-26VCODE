<?php
    function inicializar_array($min, $max) {
        if($min < $max) {
            $array = [];
            for($i = $min; $i <= $max; $i++) {
                array_push($array, $i);
            }
            return $array;
        }
        else {
            return [];
        }
    }

    function mostrar_array($array) {
        echo "<style>
                table {
                    border: 1px solid black;
                    border-collapse: collapse;
                    text-align: center;
                    }
                    table td, tr {
                        border: 1px solid black;
                        padding: 8px;
                }
            </style>";
        echo "<table>";
        echo "<tr>";
        for($i = 0; $i < count($array); $i++) {
            echo "<td style='font-weight: bold;'>$i</td>";
        }
        echo "</tr>";
        echo "<tr>";
        for($i = 0; $i < count($array); $i++) {
            echo "<td>$array[$i]</td>";
        }
        echo "</tr>";
        echo "</table>";
    }