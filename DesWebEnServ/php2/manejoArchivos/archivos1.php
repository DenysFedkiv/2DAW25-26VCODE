
<?php
    $archivo = fopen("texto.txt", "r");
    
    if($archivo) {
        echo fgets($archivo);
        fclose($archivo);
    }
    else {
        die("Error al abrir el archivo");
    }
    
    $archivo = fopen("texto.txt", "w+");
    
    if($archivo) {
        fwrite($archivo, "Texto escrito por programa");
        echo file_get_contents("texto.txt");
        fclose($archivo);
    }
    else {
        die("Error al abrir el archivo");
    }
    
    $archivo = fopen("texto.txt", "w");
    
    if($archivo) {
        for($i = 0; $i < 10; $i++) {
            $linea = "6 X $i = " . 6 * $i . "\n";

            fwrite($archivo, $linea);
        }
        echo file_get_contents("texto.txt");
        fclose($archivo);
    }
    else {
        die("Error al abrir el archivo");
    }

    $archivo = fopen("texto.txt", "r");
    echo file_get_contents("texto.txt");
    fclose($archivo);

    echo "linea";

    $archivo = fopen("texto.txt", "r");
    if($archivo) {
        echo "<style>
                table {
                    border-collapse: collapse;
                    text-align: center;
                    }
                    table td, tr {
                        border: 1px solid black;
                        padding: 8px;
                }
            </style>";
        echo "<table style='border: 1px solid black;'>";
        while(($linea = fgets($archivo)) !== false) {
            $lineaS = explode("=", $linea);
            echo "<tr><td>" . $lineaS[0] . "</td><td>" . $lineaS[1] . "</td></tr>";
        }
        echo "</table>";
    }
    else {
        echo "Error al abrir";
    }
    fclose($archivo);
    
    $archivo = fopen("texto.txt", "w");
    if($archivo) {
        fwrite($archivo, "<style>
                table {
                    border-collapse: collapse;
                    text-align: center;
                    }
                    table td, tr {
                        border: 1px solid black;
                        padding: 8px;
                }
            </style>\n");
        fwrite($archivo, "<table style='border: 1px solid black;'>\n");
        for($i = 0; $i < 10; $i++) {
            fwrite($archivo, "<tr><td>6 X " . $i . "</td><td>" . 6*$i . "</td></tr>\n");
        }
        fwrite($archivo, "</table>\n");
    }
    else {
        echo "Error al abrir";
    }
    fclose($archivo);

    $archivo = fopen("texto.txt", "r");
    echo file_get_contents("texto.txt");
    fclose($archivo);