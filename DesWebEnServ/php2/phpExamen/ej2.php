<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <select name="aficion" id="" size="4">
            <option value="leer">Leer</option>
            <option value="viajar">Viajar</option>
            <option value="musica">Musica</option>
            <option value="dibujar">Dibujar</option>
            <option value="estudiar">Estudiar</option>
        </select>
        <input type="text" name="nombre" required minlength="2" placeholder="Nombre">
        <input type="submit" value="Enviar">
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            if(isset($_POST["aficion"])) {
                echo "<h1>A " . $_POST["nombre"] . " le gusta " . $_POST["aficion"] . ".</h1>";
            }
            else {
                echo "<h1>" . $_POST["nombre"] . " no ha señalado ninguna aficion.</h1>";
            }
        }
    ?>
</body>
</html>