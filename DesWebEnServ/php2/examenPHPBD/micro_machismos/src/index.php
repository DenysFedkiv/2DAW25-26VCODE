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
        if(isset($_POST["contexto"]) && isset($_POST["gravedad"])) {
            if($_POST["contexto"] == "todos") {
                if($_POST["gravedad"] == "todas") {
                    $consulta = "SELECT * FROM machismos_table";
                }
                else {
                    $consulta = "SELECT * FROM machismos_table WHERE gravedad = '" . $_POST["gravedad"] . "'";
                }
            }
            else {
                if($_POST["gravedad"] == "todas") {
                    $consulta = "SELECT * FROM machismos_table WHERE contexto = '" . $_POST["contexto"] . "'";
                }
                else {
                    $consulta = "SELECT * FROM machismos_table WHERE contexto = '" . $_POST["contexto"] . "', gravedad = '" . $_POST["gravedad"] . "'";
                }
            }
        }
        else {
            $consulta = "SELECT * FROM machismos_table";
        }
    }
    else {
        $consulta = "SELECT * FROM machismos_table";
    }
    

        
    $stmt = $pdo->prepare($consulta);
        
    $stmt->execute();

    $machismos = $stmt->fetchAll();

    echo "<style>

    </style>";

    echo "<h1>Micromachismom</h1>";

    echo "<table class='table table-bordered table-striped'>";
    echo "<tr>";
    echo "<th>ID</td>";
    echo "<th>Nombre</td>";
    echo "<th>Precio</td>";
    echo "<th>Stock</td>";
    echo "<th>Acciones</td>";
    echo "</tr>";
    foreach($machismos as $m) {
        echo "<tr>";
        echo "<td>" . $m["id"] . "</td>";
        echo "<td>" . $m["descripcion"] . "</td>";
        echo "<td>" . $m["contexto"] . "</td>";
        echo "<td>" . $m["gravedad"] . "</td>";
        echo "<td>
        <a class='btn btn-warning m-1' href='editar.php?id=" . $m["id"] . "'>✏️Editar</a>
        <a class='btn btn-danger' href='eliminar.php?id=" . $m["id"] . "'>❌Eliminar</a></td>";
        echo "</tr>";
    }
    echo "</table>";
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
        <label for="contexto">Contexto</label>
        <select name="contexto" id="contexto">
            <option value="todos">Todos</option>
            <option value="trabajo">Trabajo</option>
            <option value="ocio">Ocio</option>
            <option value="escuela">Escuela</option>
            <option value="redes">Redes</option>
            <option value="Hogar">Hogar</option>
        </select><br>
        <label for="gravedad">Gravedad</label>
        <select name="gravedad" id="gravedad">
            <option value="todas">Todas</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
        </select>
        <input type="submit" value="Filtrar">
    </form>
</body>
</html>