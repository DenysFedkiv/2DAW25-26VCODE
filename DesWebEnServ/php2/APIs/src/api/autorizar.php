<?php

function validarToken() {
        $token = "12345678";
        $cabeceras = getallheaders();
        $autorization = $cabeceras["Authorization"] ?? "";
        if($autorization != $token) {
            http_response_code(401);
            echo json_encode(["error"=>"No estas autorizado"]);
            exit;
        }
    }