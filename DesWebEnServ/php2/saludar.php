<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_GET["nombre"])) {
            if(strlen(trim($_GET["nombre"])) > 0) {
                echo "<h1>Bienvenido " . $_GET["nombre"] . "</h1>";
            } else {
                echo "<h1>Bienvenido sin nombre</h1>";
            }
        } else {
            echo "<h1>Bienvenido sin nombre</h1>";
        }

        if(isset($_GET["apelidos"])) {
            echo "<h1>Tu apelido es " . $_GET["apelidos"] . "</h1>";
        }
    ?>
</body>
</html>