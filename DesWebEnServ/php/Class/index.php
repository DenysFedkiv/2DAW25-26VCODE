<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $modulo = "DEW entorno servidor";
        $nombre = "Denys";
        echo "<h1>Bienvenido! " . $nombre . ", al modulo " . $modulo . "</h1>";

        echo var_dump($nombre);
        var_dump(5);
        var_dump("John");
        var_dump(3.14);
        var_dump(true);
        var_dump(2, 3, 5);
        var_dump(NULL);
    ?>
</body>
</html>