<?php

require_once 'config.php';

if($_SERVER['REQUEST_METHOD'] != 'POST') {
    http_response_code(403);
    echo json_encode(["mensaje"=>"Metodo no permitido"]);
    exit;
}



/* HACER: Obtener en $data los datos de registro, correo electrónico y pass en json desde el body de la petición*/ 

    $datos = json_decode(file_get_contents("php://input"), true);

/* HACER: Si está vacío el email o la password, enviar código 400 y mensaje de error */

    if(!$datos["email"] || !$datos["pass"]) {
        http_response_code(400);
        echo json_encode(["error"=>"Falta contraseña o email"]);
        exit;
    }

/* HACER: Generar el hash de la contraseña */

    $pass = password_hash($datos["pass"], PASSWORD_DEFAULT);

/* HACER: Conectar con la BD */

    $pdo = conectar_bd();

// HACER: Verificar si el email ya existe

    $consulta = "SELECT * FROM usuarios WHERE email = ?";

    $stmt = $pdo->prepare($consulta);

    $stmt->execute([$datos["email"]]);

    if($stmt->rowCount() != 0) {
        http_response_code(400);
        echo json_encode(["mensaje"=>"El usuario ya existe"]);
        exit;
    }

// HACER: Si no existe enviar código 400 
// HACER: Insertar usuario

    $consulta = "INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)";

    $stmt = $pdo->prepare($consulta);

    $stmt->execute([$datos["nombre"], $datos["email"], $pass]);

    http_response_code(201);
    echo json_encode(["mensaje"=>"registrado corectamente"]);
    exit;

// HACER: Si todo bien, enviar código 201 y mensaje
// HACER: Si error entonces enviar 503


?>