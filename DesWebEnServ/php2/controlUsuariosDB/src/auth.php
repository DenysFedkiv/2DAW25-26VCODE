<?php
    if(!isset($_SESSION["nombreUsuario"])) {
        header("Location: login.php");
        exit;
    }
?>