<?php
    session_start();
    if(isset($_SESSION["numero"])) {
        if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["numeroUsuario"])) {
            if($_POST["numeroUsuario"] == $_SESSION["numero"]) {
                echo "<h1>Has acertado</h1>";
                echo "<h2>Intentos " . $_SESSION["intentos"] . "</h2>";
                session_destroy();
            }
            else if($_POST["numeroUsuario"] < $_SESSION["numero"]) {
                $_SESSION["intentos"] += 1;
                echo "<h1>Numero secreto es mayor que " . $_POST["numeroUsuario"] . "</h1>";
                echo "<h2>Intentos " . $_SESSION["intentos"] . "</h2>";
            }
            else if($_POST["numeroUsuario"] > $_SESSION["numero"]) {
                $_SESSION["intentos"] += 1;
                echo "<h1>Numero secreto es menor que " . $_POST["numeroUsuario"] . "</h1>";
                echo "<h2>Intentos " . $_SESSION["intentos"] . "</h2>";
            }
        }
        else {
            echo "<h1>Hay algun error</h1>";
        }
    }
    else {
        $_SESSION["numero"] = rand(1, 10);
        $_SESSION["intentos"] = 0;
        echo "<h1>Se a creado numero secreto nuevo</h1>";
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
    <form action="" method="post">
        <input type="number" required value="1" name="numeroUsuario" min="1" max="10">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>