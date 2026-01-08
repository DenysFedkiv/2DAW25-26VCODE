<?php
    require_once("config.php");

    if(isset($_GET["id"])) {
        $id = $_GET["id"];

        $consulta = "DELETE FROM productos WHERE id = :identificador";

        $stmt = $pdo->prepare($consulta);

        $stmt->bindParam(":identificador", $id);
        $stmt->execute();

        header("Location: index.php");
        exit;
    }
    echo "Error";