<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td, th {
            border: 1px solid black;
            padding: 0.5em;
        }
    </style>
</head>
<body>
    <?php
        $aficiones = [];
        
        if(isset($_POST["afDeporte"])) {
            array_push($aficiones, htmlspecialchars($_POST["afDeporte"]));
        }
        if(isset($_POST["afMusica"])) {
            array_push($aficiones, htmlspecialchars($_POST["afMusica"]));
        }
        if(isset($_POST["afCine"])) {
            array_push($aficiones, htmlspecialchars($_POST["afCine"]));
        }
        if(isset($_POST["afLectura"])) {
            array_push($aficiones, htmlspecialchars($_POST["afLectura"]));
        }

        echo "<table style='border: 1px solid black; border-collapse: collapse;'><tr><th>Campo</th><th>Valor</th></tr>";
        echo "<tr><td>Nombre y Apellidos</td><td>" . htmlspecialchars($_POST["nombreAp"]??"") . "</td></tr>";
        if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            echo "<tr><td>Email</td><td>" . htmlspecialchars($_POST["email"]) . "</td></tr>";
        }
        else {
            echo "<tr><td>Email</td><td style='color: red;'>" . htmlspecialchars($_POST["email"]??"") . "</td></tr>";
        }
        if(filter_var($_POST["url"], FILTER_VALIDATE_URL)) {
            echo "<tr><td>URL Pagina Personal</td><td>" . htmlspecialchars($_POST["url"]) . "</td></tr>";
        }
        else {
            echo "<tr><td>URL Pagina Personal</td><td style='color: red;'>" . htmlspecialchars($_POST["url"]??"") . "</td></tr>";
        }
        echo "<tr><td>Sexo</td><td>" . htmlspecialchars($_POST["sexo"]??"") . "</td></tr>";
        echo "<tr><td>Numero de convivientes</td><td>" . htmlspecialchars($_POST["convivientes"]??"") . "</td></tr>";
        echo "<tr><td>Aficiones</td><td>" . implode(", ", $aficiones) . "</td></tr>";
        echo "<tr><td>Menu Favorito</td><td>" . implode(", ", $_POST["menuFav"]??[]) . "</td></tr>";
        echo "</table>";
    ?>
    <br>
    <a href="formulario.html">Volver a formulario</a>
</body>
</html>