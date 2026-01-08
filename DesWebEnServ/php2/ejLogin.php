<?php
    $error = false;
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        if($_POST["usuario"] == "hermi" && $_POST["pass"] == "12345678") {
            header("Location: ejLoginPrincipal.php");
            session_start();
            $_SESSION["usuario"] = $_POST["usuario"];
            exit;
        }
        else {
            $error = true;
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
        <input type="text" name="usuario" required>
        <input type="password" name="pass" id="pass" minLength="8" required>
        <input type="submit" value="Submit">
    </form>
    <?php
        if($error) {
            echo "<p style='color: red;'>Datos incorectos</p>";
        }
    ?>
</body>
</html>