<?php
    require_once("config.php");
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nombre = $_POST["nombre"];
        $precio = floatval($_POST["precio"]);
        $cantidad = intval($_POST["cantidad"] ?? 0);
        
        $stmt = $pdo->prepare("INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $precio, $cantidad]);
        header("Location: index.php");
        exit;
    }
    require_once("header.php");
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
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" id="nombre" name="nombre" class="form-control mb-3" required>
        <label for="precio" class="form-label">Precio</label>
        <input type="number" id="precio" name="precio" step=".01" class="form-control mb-3" required>
        <label for="cantidad" class="form-label">Cantidad</label>
        <input type="number" id="cantidad" name="cantidad" class="form-control mb-3" required>
        <input type="submit" value="Agregar" class="btn btn-primary mt-4">
    </form>
</body>
</html>

<?php
    require_once("footer.php");
?>