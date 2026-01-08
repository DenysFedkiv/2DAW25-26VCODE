<?php
require_once "vendor/autoload.php";
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function validarTokenOld() {
        $token = "12345678";
        $cabeceras = getallheaders();
        $autorization = $cabeceras["Authorization"] ?? "";
        if($autorization != $token) {
            http_response_code(401);
            echo json_encode(["error"=>"No estas autorizado"]);
            exit;
        }
    }

define("KEY", "clave_muy_secreta");

function generarToken($id, $email, $rol) {
        $hoy = time();
        $t_expiration = $hoy + (60*60*24);

        $payload = ["creadp"=>$hoy, "t_expiration"=>$t_expiration, "data"=>["id"=>$id, "email"=>$email, "rol"=>$rol]];
    $algoritmo = "HS256";
    return JWT::encode($payload, KEY, $algoritmo);
    }

function validarToken($token) {
    try {
        $decode = JWT::decode($token, new Key(KEY, "HS256"));
        return $decode->data;
    }
    catch (Exception $e) {
        return null;
    }
}

function getToken() {
    $cabeceras = getallheaders();
    if(!isset($cabeceras["Authorization"])) {
        return null;
    }
    $aut = $cabeceras["Authorization"];
    $token = str_replace("Bearer ", "", $aut);
    return $token;
}

function comprobarToken() {
    $token = getToken();
    if(!$token) {
        return null;
    }
    else {
        $datosUsuario = validarToken($token);
        if(!$datosUsuario) {
            http_response_code(401);
            echo json_encode(["mensaje"=>"Error - no estas autorizado"]);
            exit;
        }
        else {
            return $datosUsuario;
        }
    }
}