<?php
    session_start();
    require_once("config.php");
    require_once("csrf.php");

    if(isset($_SESSION["nombreUsuario"])) {
        header("Location: index.php");
        exit;
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(!isset($_POST['csrf'])) {
            header("Location: 403.php");
            exit;
        }
        else {
            if($_POST['csrf'] != $_SESSION["csrf_token"]) {
                header("Location: 403.php");
                exit;
            }
        }
        if(isset($_POST['email'])) {
            $email = htmlspecialchars($_POST["email"]);
            if(isset($_POST['pass'])) {
                $pass = htmlspecialchars($_POST["pass"]);

                $consulta = "SELECT * FROM usuarios WHERE email = ?";

                $stmt = $pdo->prepare($consulta);

                $stmt->execute([$email]);

                $usuario = $stmt->fetch();

                if($usuario) {
                    if(password_verify($pass, $usuario["contrasena"])) {
                        $_SESSION["nombreUsuario"] = $usuario["nombre"];
                        $_SESSION["rol"] = $usuario["rol"];
                        header("Location: index.php");
                        exit;
                    }
                    else {
                        echo "Contraseña incorecta";
                    }
                }
                else {
                    echo "Email incorecto";
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
        <input type="email" name="email" id="email">
        <input type="password" name="pass" id="pass">
        <input type="hidden" name="csrf" value="<?= $_SESSION['csrf_token'] ?>">
        <input type="submit" value="Entrar">
    </form>
    <a href="registro.php">No tienes cuenta?</a>
</body>
</html>