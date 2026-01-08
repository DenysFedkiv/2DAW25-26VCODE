<?php
    $dbname = getenv("DB_NAME");
    $username = getenv("DB_USER");
    $host = getenv("DB_HOST");
    $pass = getenv("DB_PASS");
    
    $dsn = "mysql:host=$host;dbname=$dbname";

    $opciones = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
    try {
        $pdo = new PDO($dsn, $username, $pass, $opciones);
    }
    catch(PDOException $e) {
        die("Ha ocurido un error " . $e->getMessage());
    }