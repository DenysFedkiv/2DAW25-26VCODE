<?php
    // Incluir archivo para conectar bd
    require_once 'config.php';
    require_once 'autorizar.php';

    // Restringir el metodo a POST
    if($_SERVER['REQUEST_METHOD'] != 'POST') {
        http_response_code(403);
        echo json_encode(["mensaje"=>"Metodo no permitido"]);
        exit;
    }
    // Recoger en un array el email y la pass del body de la peticion
    $datos = json_decode(file_get_contents("php://input"), true);
    // Realizar validacines del email y pass
    if(!$datos["email"] || !$datos["pass"]) {
        http_response_code(400);
        echo json_encode(["error"=>"Falta contraseña o email"]);
        exit;
    }
    // Buscar en la bd el email y comprobar que existe
    $pdo = conectar_bd();

    $consulta = "SELECT * FROM usuarios WHERE email = ?";

    $stmt = $pdo->prepare($consulta);

    $stmt->execute([$datos["email"]]);

    if($stmt->rowCount() == 0) {
        http_response_code(400);
        echo json_encode(["mensaje"=>"El usuario no existe"]);
        exit;
    }
    // Comprobar que pass coincide con la contraseña
    $usuario = $stmt->fetch();

    if(!password_verify($datos["pass"], $usuario["contrasena"])) {
        http_response_code(400);
        echo json_encode(["mensaje"=>"Error contraseña incorecta"]);
        exit;
    }
    // Generar el token $token = $generarToken(id, email. rol)

    $token = generarToken($usuario["id"], $usuario["email"], $usuario["rol"]);

    echo json_encode(["mensaje"=>"Login correcto", "token"=>$token]);