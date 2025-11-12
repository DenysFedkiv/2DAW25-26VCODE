<?php
    require_once("config.php");

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nombre = $_POST["nombre"];
        $precio = $_POST["precio"];
        $cantidad = $_POST["cantidad"] ?? 0;

        $stmt = $pdo->prepare("INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $precio, $cantidad]);
        header("Location: index.php");
        exit;
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
    <form method="post">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="precio">Precio</label>
        <input type="number" id="precio" name="precio" required>
        <label for="cantidad">Precio</label>
        <input type="number" id="cantidad" name="cantidad" required>
        <input type="submit" value="Agregar">
    </form>
</body>
</html>
<?php
    echo "aqui";
?>