// ============================================
// register.php - Registro de usuarios
<?php

require_once 'config.php';

/* HACER: Obtener en $data los datos de registro, correo electrónico y pass en json desde el body de la petición*/ 

    $datos = json_decode(file_get_contents("php://input"), true);

/* HACER: Si está vacío el email o la password, enviar código 400 y mensaje de error */

    if(!$datos["email"] || !$datos["pass"]) {
        http_response_code(400);
        echo json_encode(["error"=>"Falta contraseña o email"]);
    }

/* HACER: Generar el hash de la contraseña */

/* HACER: Conectar con la BD */


// HACER: Verificar si el email ya existe
// HACER: Si no existe enviar código 400 
// HACER: Insertar usuario
// HACER: Si todo bien, enviar código 201 y mensaje
// HACER: Si error entonces enviar 503


?>