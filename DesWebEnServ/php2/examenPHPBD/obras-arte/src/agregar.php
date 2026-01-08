<?php
    $dbname = getenv("DB_NAME");
    $username = getenv("DB_USER");
    $host = getenv("DB_HOST");
    $pass = getenv("DB_PASS");
    
    $dsn = "mysql:host=$host;dbname=$dbname";

    $opciones = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
    try {
        $pdo = new PDO($dsn, $username, $pass, $opciones);
    }
    catch(PDOException $e) {
        die("Ha ocurido un error " . $e->getMessage());
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_POST["titulo"]) && isset($_POST["autor"]) && isset($_POST["anio_creacion"]) && isset($_POST["tipo"]) && isset($_POST["ubicacion"])) {
            $consulta = "UPDATE obras SET (titulo, autor, anio_creacion, tipo, ubicacion) VALUES (?, ?, ?, ?, ?)";

            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$_POST["titulo"], $_POST["autor"], $_POST["anio_creacion"], $_POST["tipo"], $_POST["ubicacion"]]);

            header("Location: index.php");
            die();
            exit;
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
        <label for="titulo" class="form-label">Titulo</label>
        <input type="text" id="titulo" name="titulo" class="form-control mb-3" required><br>
        <label for="autor" class="form-label">Autor</label>
        <input type="text" id="autor" name="autor" class="form-control mb-3" required><br>
        <label for="anio_creacion" class="form-label">Año</label>
        <input type="text" id="anio_creacion" name="anio_creacion" class="form-control mb-3" required><br>
        <label for="tipo" class="form-label">Tipo</label>
        <input type="text" id="tipo" name="tipo" class="form-control mb-3" required><br>
        <label for="ubicacion" class="form-label">Ubicacion</label>
        <input type="text" id="ubicacion" name="ubicacion" class="form-control mb-3" required><br>
        <input type="submit" value="Agregar" class="btn btn-primary mt-4">
    </form>
    <a href="index.php"><button class="btn btn-warning mt-4">Cancelar</button></a>
</body>
</html>