<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $directorio = "directorio/";
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            if(isset($_FILES["fichero"])) {
                echo "<p>Funciona</p>";
                $archivo = $_FILES["fichero"];
                if($archivo["error"] === 0) {
                    $tamañoMaximo = 5 * 1024 * 1024; // 5 MB se pasan a bytes
                    if ($archivo["size"] > $tamañoMaximo) {
                        echo "El archivo es demasiado grande. El tamaño máximo permitido es 5 MB.";
                        exit;
                    }
                    
                    $tiposPermitidos = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
                    echo "<p>" . $archivo["type"] . "</p>";
                    if(in_array($archivo["type"], $tiposPermitidos)) {
                        $ruta = $archivo["tmp_name"]??"";
                        echo $ruta;
                    }
                    else {
                        echo "<p>Este tipo de archivo no se soporta</p>";
                        exit;
                    }

                    if(!file_exists($directorio)) {
                        mkdir($directorio, 0777, true);
                    }

                    if(move_uploaded_file($archivo["tmp_name"], $directorio . $archivo["name"])) {
                        echo "archivo movido";
                        $ruta = $directorio . $archivo["name"];
                        $ancho = $_POST["ancho"];
                        echo "<img src='$ruta' width='$ancho' alt=''>";
                    }
                }
                else {
                    echo "Algun error: " . $archivo["error"];
                    exit;
                }
            }
            else {
                echo "";
                exit;
            }
        }
    ?>

    <!-- <img src="<?php //echo $directorio . $archivo["name"] ?>" alt="" width="<?php //echo $_POST["ancho"] ?>"> -->
</body>
</html>