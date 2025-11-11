<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login.php" method="post">
        <label for="usuarioL">Usuario</label>
        <input type="text" name="usuarioL" required style="margin-bottom: 0.5em;" <?php if(isset($_COOKIE["usuarioC"])) {echo "value='" . $_COOKIE["usuarioC"] . "'";} ?>><br>
        <label for="contrasena">Contraseña</label>
        <input type="password" name="contrasena" required style="margin-bottom: 0.5em;"><br>
        <input type="submit" value="Iniciar sesion">
    </form>
    <?php
        if(isset($_GET["error"])) {
            if($_GET["error"] == "1") {
                echo "<h2 style='color: red;'>Error - " . $_GET["error"] . ": Datos incorectos</h2>";
            }
            else if($_GET["error"] == "12") {
                echo "<h2 style='color: red;'>Error - " . $_GET["error"] . ": Error de inicio de sesion</h2>";
            }
        }
    ?>
</body>
</html>