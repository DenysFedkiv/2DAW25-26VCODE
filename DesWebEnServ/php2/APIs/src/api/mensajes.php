<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit; // Respuesta al preflight
    }

    $mensajes = [
        ["id" => 1, "texto" => "Mensaje1"],
        ["id" => 2, "texto" => "Mensaje2"]
    ];
    
    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo json_encode(["exito"=>true, "mensaje" => $mensajes]);
        exit;
    }
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $m = json_decode(file_get_contents("php://input"), true);

        if(!isset($m) || trim($m) == "") {
            http_response_code(400);
            echo json_encode(["exito" => false, "mensaje" => "Error en el mensaje"]);
            exit;
        }

        $m = htmlspecialchars($m["texto"]);

        $nuevoMensaje = [
            "id"=>count($mensajes) + 1,
            "texto" => $m
        ];

        echo json_encode(["exito" => true, "mensaje" => $nuevoMensaje]);
        exit;
    }