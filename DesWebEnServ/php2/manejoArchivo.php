<?php
// Directorio donde se guardarán los archivos subidos
    $directorio = "uploads/";

// Verificar si el formulario ha sido enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Comprobar si se ha subido un archivo
        if (isset($_FILES["archivo"])) {

//almacenamos en una variable de tipo array asociativo todos los datos del fichero
//que están en la variable global $_FILES.
            $archivo = $_FILES["archivo"];

// Obtener información del archivo
            $nombreArchivo = $archivo["name"];
            $tipoArchivo = $archivo["type"];
            $tamañoArchivo = $archivo["size"]; //el tamaño viene en bytes
            $archivoTemporal = $archivo["tmp_name"];
            $errorArchivo = $archivo["error"];

// Verificar si no hubo errores en la subida
            if ($errorArchivo === 0) {
// Comprobar el tamaño máximo permitido (ejemplo: 5 MB)
                $tamañoMaximo = 5 * 1024 * 1024; // 5 MB se pasan a bytes
                if ($tamañoArchivo > $tamañoMaximo) {
                    echo "El archivo es demasiado grande. El tamaño máximo permitido es 5 MB.";
                    exit;
                }

// Validar el tipo de archivo (por ejemplo, solo imágenes .jpg o .png)
                $tiposPermitidos = ["image/jpeg", "image/png", "image/gif"];
                if (!in_array($tipoArchivo, $tiposPermitidos)) {
                echo "Solo se permiten archivos de tipo JPG, PNG y GIF.";
                exit;
                }

// Generar un nombre único para el archivo para guardarlo en el servidor
                $nombreUnico = uniqid() . "_" . $nombreArchivo;

// Verificar si el directorio existe, si no, crearlo
                if (!file_exists($directorio)) {
                    mkdir($directorio, 0777, true);
                }

// Mover el archivo desde la ubicación temporal al directorio deseado
                if (move_uploaded_file($archivoTemporal, $directorio . $nombreUnico)) {
                    echo "Archivo subido con éxito: " . $nombreUnico;
                } else {
                    echo "Hubo un error al subir el archivo.";
                }
            } else {
                echo "Error al subir el archivo. Código de error: " . $errorArchivo;
            }
        }
    } else {
        echo "No se ha enviado ningún archivo.";
    }
?>