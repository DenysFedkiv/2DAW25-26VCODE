<?php
    header("Location: visitas.php");
    if(isset($_COOKIE["visitas"])) {
        unset($_COOKIE["visitas"]);
        setcookie("visitas", "", time() - 3600);
    }
    exit;