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
        if(isset($_POST["ordenar"])) {
            $consulta = "SELECT * FROM obras ORDER BY " . $_POST["ordenar"];

            $stmt = $pdo->prepare($consulta);

            $stmt->execute();
        }
        else {
            $consulta = "SELECT * FROM obras";
            
            $stmt = $pdo->prepare($consulta);
            
            $stmt->execute();
        }
    }
    else {
        $consulta = "SELECT * FROM obras";
        
        $stmt = $pdo->prepare($consulta);
        
        $stmt->execute();
    }

    $obras = $stmt->fetchAll();

    echo "<style>

    </style>";

    echo "<h1>Listado de obras de arte</h1>";

    echo "<a class='btn btn-success m-1' href='agregar.php'>Agregar obra de arte</a><br>";

    echo "<table class='table table-bordered table-striped'>";
    echo "<tr>";
    echo "<th>ID</td>";
    echo "<th>Nombre</td>";
    echo "<th>Precio</td>";
    echo "<th>Stock</td>";
    echo "<th></td>";
    echo "</tr>";
    foreach($obras as $o) {
        echo "<tr>";
        echo "<td>" . $o["id"] . "</td>";
        echo "<td>" . $o["titulo"] . "</td>";
        echo "<td>" . $o["autor"] . "</td>";
        echo "<td>" . $o["anio_creacion"] . "</td>";
        echo "<td>" . $o["tipo"] . "</td>";
        echo "<td>" . $o["ubicacion"] . "</td>";
        echo "<td>
        <a class='btn btn-warning m-1' href='editar.php?id=" . $o["id"] . "'>✏️Editar</a>
        <a class='btn btn-danger' href='eliminar.php?id=" . $o["id"] . "'>❌Eliminar</a></td>";
        echo "</tr>";
    }
    echo "</table>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obras arte</title>
</head>
<body>
    <form action="" method="post">
        <select name="ordenar" id="ordenar">
            <option value="id" <?php if(isset($_POST["ordenar"])) {if($_POST["ordenar"] == "id") {echo "selected";}} ?>>ID</option>
            <option value="titulo" <?php if(isset($_POST["ordenar"])) {if($_POST["ordenar"] == "titulo") {echo "selected";}} ?>>Titulo</option>
            <option value="autor" <?php if(isset($_POST["ordenar"])) {if($_POST["ordenar"] == "autor") {echo "selected";}} ?>>Autor</option>
            <option value="anio_creacion" <?php if(isset($_POST["ordenar"])) {if($_POST["ordenar"] == "anio_creacion") {echo "selected";}} ?>>Año</option>
            <option value="ubicacion" <?php if(isset($_POST["ordenar"])) {if($_POST["ordenar"] == "ubicacion") {echo "selected";}} ?>>Ubicacion</option>
        </select>
        <input type="submit" value="Enciar">
    </form>
</body>
</html>