<?php
    require_once("config.php");

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_POST['nombre'])) {
            $nombre = htmlspecialchars($_POST["nombre"]);
            if(isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                $email = htmlspecialchars($_POST["email"]);
                if(isset($_POST['pass'])) {
                    $pass = htmlspecialchars($_POST["pass"]);

                    $consulta = "INSERT INTO usuarios (nombre, email, contrasena, rol) VALUES (?, ?, ?, 'admin')";

                    $stmt = $pdo->prepare($consulta);

                    try {
                        $stmt->execute([$nombre, $email, password_hash($pass, PASSWORD_DEFAULT)]);
                        header("Location: index.php");
                        exit;
                    }
                    catch(PDOException $e) {
                        echo "Ya existe el usuario: " . $e->getMessage();
                    }
                }
                else {
                    echo "Error contraseña";
                }
            }
            else {
                echo "Error email";
            }
        }
        else {
            echo "Error nombre";
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
        <label for="email">Correo</label>
        <input type="email" name="email" id="email">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="pass">Contraseña</label>
        <input type="password" name="pass" id="pass">
        <input type="submit" value="Crear">
    </form>
</body>
</html>