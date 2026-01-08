<?php
    session_start();

    if($_SESSION["rol"] != "admin") {
        header("Location: 403.php");
        exit;
    }