<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombre = $_POST["nombre"];
        if(trim($nombre) == "") {
            $error = "Error nombre vacio";
        } else {
            echo "Hola, $nombre";
        }
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
        <input type="text" name="nombre" id="nombre" value="<?php if(!empty($nombre)) {echo $nombre;} ?>">
        <input type="submit" value="Submit">
    </form>
    <p><?php if(!empty($error)) {echo "Error: $error";} ?></p>
</body>
</html>