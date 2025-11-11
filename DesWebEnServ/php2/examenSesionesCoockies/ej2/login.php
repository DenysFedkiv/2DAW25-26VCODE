<?php
    $usuarios = ["admin" => "1234", "usuario" => "abcd"];

    if($_SERVER["REQUEST_METHOD"] === "POST") {
        if(isset($_POST["usuarioL"])) {
            if(array_key_exists($_POST["usuarioL"], $usuarios)) {
                if($usuarios[$_POST["usuarioL"]] == $_POST["contrasena"]) {
                    session_start();
                    $_SESSION["usuarioS"] = $_POST["usuarioL"];
                    header("Location: lista_compra.php");
                    exit;
                }
                else {
                    header("Location: index.php?error=1");
                    exit;
                }
            }
            else {
                header("Location: index.php?error=1");
                exit;
            }
        }
    }