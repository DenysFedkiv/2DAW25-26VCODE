<?php 
    include("funciones.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numeros = inicializar_array(7, 6);
        $numeros2 = inicializar_array(2, 6);
        mostrar_array($numeros);
        mostrar_array($numeros2);
    ?>
</body>
</html>