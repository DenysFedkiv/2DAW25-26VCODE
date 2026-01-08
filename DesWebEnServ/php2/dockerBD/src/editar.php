<?php
    require_once("config.php");
    require_once("header.php");

    $consulta = "SELECT * FROM productos WHERE id = ?";
        
    $stmt = $pdo->prepare($consulta);

    $stmt->execute([$_GET["id"]]);

    $producto = $stmt->fetchAll();

    $nombre = $producto[0]["nombre"];
    $precio = $producto[0]["precio"];
    $stock = $producto[0]["stock"];

    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        if(isset($_POST["nombre"])) {
            $consulta = "UPDATE productos SET nombre = ? WHERE id = ?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([htmlspecialchars(trim($_POST["nombre"])), $_GET["id"]]);
        }

        if(isset($_POST["precio"])) {
            $consulta = "UPDATE productos SET precio = ? WHERE id = ?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([htmlspecialchars(trim($_POST["precio"])), $_GET["id"]]);
        }

        if(isset($_POST["stock"])) {
            $consulta = "UPDATE productos SET stock = ? WHERE id = ?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([htmlspecialchars(trim($_POST["stock"])), $_GET["id"]]);
        }

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
    <form action="" method="post">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" name="nombre" id="nombre" value="<?php echo $nombre?>" class="form-control mb-3">
        <label for="precio" class="form-label">Nombre</label>
        <input type="number" name="precio" id="precio" min="0" value="<?php echo $precio?>" class="form-control mb-3">
        <label for="stock" class="form-label">Nombre</label>
        <input type="number" name="stock" id="stock" min="0" value="<?php echo $stock?>" class="form-control mb-3">
        <input type="submit" value="Guardar" class="btn btn-success mb-3">
    </form>
    <form action="index.php">
        <input type="submit" value="Volver" class="btn btn-warning">
    </form>
</body>
</html>

<?php
    require_once("footer.php");
?>