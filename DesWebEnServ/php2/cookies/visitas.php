<?php
    setcookie("visitas", 2);

    if(isset($_COOKIE["visitas"])) {
        setcookie("visitas", $_COOKIE["visitas"] + 1);
        echo "<p>Visitas: " . $_COOKIE["visitas"] . "</p>";
    }
    else {
        echo "<p>Visitas: 1</p>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="borrarCVisitas.php">
        <input type="submit" value="Borrar">
    </form>
</body>
</html>