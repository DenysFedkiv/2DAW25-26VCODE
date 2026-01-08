<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit; // Respuesta al preflight
    }

    function conectar_bd() {
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
            // die("Ha ocurido un error " . $e->getMessage());
            echo json_encode(["error" => "Error de conexion - " . $e->getMessage()]);
            exit;
        }

        return $pdo;
        }
    