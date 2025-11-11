<?php
    session_start();
    if(!isset($_SESSION["usuarioS"])) {
        header("Location: index.php?error=12");
        exit;
    }

    setcookie("usuarioC", $_SESSION["usuarioS"], time() + 24*60*60);

    if(!isset($_SESSION["articulos"])) {
        $_SESSION["articulos"] = [];
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
        <input type="text" name="articulo" <?php if(count($_SESSION["articulos"]) > 2) { echo "disabled";} ?>>
        <input type="submit" value="Agregar">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            if(isset($_POST["articulo"])) {
                array_push($_SESSION["articulos"], $_POST["articulo"]);
            }
        }

        unset($_POST["articulo"]);

        if(count($_SESSION["articulos"]) > 3) {
            echo "<h2 style='color:red;'>Cantidad maxima de articulos</h2>";
            echo "<ul>";
            foreach($_SESSION["articulos"] as $articulo) {
                echo "<li>" . $articulo . "</li>";
            }
            echo "</ul>";
            echo "<p>Cantidad total: " . count($_SESSION["articulos"]) . "</p>";
        }
        else {
            if(count($_SESSION["articulos"]) > 0) {
                echo "<ul>";
                foreach($_SESSION["articulos"] as $articulo) {
                    echo "<li>" . $articulo . "</li>";
                }
                echo "</ul>";
            echo "<p>Cantidad total: " . count($_SESSION["articulos"]) . "</p>";
            }
        }

    ?>

        <form action="logout.php" method="post">
            <input type="submit" value="Cerrar sesion" style="margin-top: 0.5em;">
        </form>
</body>
</html>