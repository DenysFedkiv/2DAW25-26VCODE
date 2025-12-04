<?php
    $dbName = getenv("DB_NAME");
    $dbHost = getenv("DB_HOST");
    $dbUsername = getenv("DB_USER");
    $dbPass = getenv("DB_PASS");

    $dsn = "mysql:host=$dbHost;dbname=$dbName";

    $opciones = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
    
    try {
        $pdo = new PDO($dsn, $dbUsername, $dbPass, $opciones);
    }
    catch(PDOException $e) {
        die("Ha ocurido un error " . $e->getMessage());
    }