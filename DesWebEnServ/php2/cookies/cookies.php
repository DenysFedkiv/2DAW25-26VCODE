<?php
    setcookie("usuario", "Hermenegildo", time() + 300);
    setcookie("ej2", "CookieEj2");
    
    function eliminarCookieEj2() {
        unset($_COOKIE["ej2"]);
        setcookie("ej2", "", time() - 3600);
    }

    if(isset($_COOKIE["usuario"])) {
        echo "<h1>Hola " . $_COOKIE["usuario"] . "</h1>";
    }
    else {
        echo "<p>Cookie1 no esta defenida</p>";
    }

    if(isset($_COOKIE["ej2"])) {
        echo "<p>Cookie in ej2 " . $_COOKIE["ej2"] . "</p>";
    }
    else {
        echo "<p>Cookie creada</p>";
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
    <form action="borrarCookie.php">
        <input type="submit" value="Borrar">
    </form>
</body>
</html>