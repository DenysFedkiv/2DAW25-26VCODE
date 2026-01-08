<?php
    header("Location: cookies.php");
    if(isset($_COOKIE["ej2"])) {
        unset($_COOKIE["ej2"]);
        setcookie("ej2", "", time() - 3600);
    }
    exit;