<?php
    require_once("config.php");
    require_once("autorizar.php");

    
    $metodo = $_SERVER['REQUEST_METHOD'];
    
    if($metodo != "GET") {
        $datosUsuario = comprobarToken();
        $rol = $datosUsuario->rol;
        $esAdmin = $rol === "admin";
    }
    
    $id = $_GET["id"] ?? "";

    $pdo = conectar_bd();

    switch ($metodo) {
        case "GET":
            if($id) {
                listarProducto($id, $pdo);    
            }
            else {
                listarProductos($pdo);
            }
            break;
        case "POST":
            agregarProducto($pdo);
            break;
        case "PUT":
            actualizarProducto($pdo);
            break;
        case "DELETE":
            eliminarProducto($pdo);
        break;
        default:
            http_response_code(405);
            echo json_encode(["mensaje"=>"Metodo incorecto"]);
            break;
    }

    function listarProducto($id, $pdo) {
        validar_id($id);

        $consulta = "SELECT * FROM productos WHERE id=?";

        $stmt = $pdo->prepare($consulta);

        $stmt->execute([$id]);

        $producto = $stmt->fetch();

        if(!$producto) {
            http_response_code(404);
            echo json_encode(["mensaje"=>"No se encontrado el producto", "id"=>$id]);
        }
        else {
            echo json_encode($producto);
        }
        exit;
    }

    function listarProductos($pdo) {
        $consulta = "SELECT * FROM productos";

        $stmt = $pdo->prepare($consulta);

        $stmt->execute();

        $productos = $stmt->fetchAll();

        if(!$productos) {
            http_response_code(404);
            echo json_encode(["mensaje"=>"No se encontrado productos", "id"=>$id]);
        }
        else {
            echo json_encode($productos);
        }
        exit;
    }

    function agregarProducto($pdo) {
        $datosProducto = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosProducto) {
            // http_response_code(400);
            // echo json_encode(["mensaje"=>"No hay datos del producto"]);
            // exit;
            $error[] = "No hay datos del producto";
        }
        else {
            if(!isset($datosProducto["nombre"])||!isset($datosProducto["stock"])||!isset($datosProducto["stock"])) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"Faltan datos de producto"]);
                exit;
            }

            if(!is_numeric($datosProducto["precio"]) || $datosProducto["precio"]<0) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El precio no es correcto"]);
                // exit;
                $error[] = "El precio no es correcto";
            }

            if(!is_numeric($datosProducto["stock"]) || $datosProducto["stock"]<0) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El stock no es correcto"]);
                // exit;
                $error[] = "El stock no es correcto";
            }
            
            if(!$datosProducto["nombre"]) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El nombre no es correcto"]);
                // exit;
                $error[] = "El nombre no es correcto";
            }

            if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
            }

            $consulta = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)";

            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosProducto["nombre"], $datosProducto["precio"], $datosProducto["stock"]]);

            echo json_encode(["mensaje"=>"Producto agregado corectamente"]);
        }

        if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
        }
    }

    function actualizarProducto($pdo) {
        $datosProducto = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosProducto) {
            // http_response_code(400);
            // echo json_encode(["mensaje"=>"No hay datos del producto"]);
            // exit;
            $error[] = "No hay datos del producto";
        }
        else {
            validar_id($datosProducto["id"] ?? "");

            if(!isset($datosProducto["nombre"])||!isset($datosProducto["stock"])||!isset($datosProducto["stock"])) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"Faltan datos de producto"]);
                exit;
            }

            // if(!$datosProducto["id"]) {
            //     http_response_code(400);
            //     echo json_encode(["mensaje"=>"El id no es correcto"]);
            //     exit;
            // }


            $consulta = "SELECT * FROM productos WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosProducto["id"]]);

            $producto = $stmt->fetch();

            if(!$producto) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"El producto con este id no existe"]);
                exit;
            }

            if(!is_numeric($datosProducto["precio"]) || $datosProducto["precio"]<0) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El precio no es correcto"]);
                // exit;
                $error[] = "El precio no es correcto";
            }

            if(!is_numeric($datosProducto["stock"]) || $datosProducto["stock"]<0) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El stock no es correcto"]);
                // exit;
                $error[] = "El stock no es correcto";
            }
            
            if(!$datosProducto["nombre"]) {
                // http_response_code(400);
                // echo json_encode(["mensaje"=>"El nombre no es correcto"]);
                // exit;
                $error[] = "El nombre no es correcto";
            }

            if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
            }
            
            $consulta = "UPDATE productos SET nombre=?, precio=?, stock=? WHERE id=?";

            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosProducto["nombre"], $datosProducto["precio"], $datosProducto["stock"], $datosProducto["id"]]);

            echo json_encode(["mensaje"=>"Producto cont id " . $datosProducto["id"] . " actualizado corectamente"]);
        }

        if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
        }
    }

    function eliminarProducto($pdo) {
        $datosProducto = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosProducto) {
            // http_response_code(400);
            // echo json_encode(["mensaje"=>"No hay datos del producto"]);
            // exit;
            $error[] = "No hay datos del producto";
        }
        else {
            // if(!isset($datosProducto["id"])) {
            //     http_response_code(400);
            //     echo json_encode(["mensaje"=>"Faltan datos de producto"]);
            //     exit;
            // }

            // if(!$datosProducto["id"]) {
            //     http_response_code(400);
            //     echo json_encode(["mensaje"=>"El id no es correcto"]);
            //     exit;
            // }

            validar_id($datosProducto["id"] ?? "");

            $consulta = "SELECT * FROM productos WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosProducto["id"]]);

            $producto = $stmt->fetch();

            if(!$producto) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"El producto con este id no existe"]);
                exit;
            }
            
            $consulta = "DELETE FROM productos WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);
            
            try {
                $stmt->execute([$datosProducto["id"]]);
            }
            catch (PDOException $e) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"Error al ejecutar la consulta " . $e]);
                exit;
            }
            
            if($stmt->rowCount() == 0) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"El producto con este id no existe"]);
                exit;
            }
            else {           
                echo json_encode(["mensaje"=>"Producto cont id " . $datosProducto["id"] . " eliminado corectamente"]);
            }

        }

        if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
        }
    }

    function validar_id($id) {
        if(!isset($id)) {
            http_response_code(400);
            echo json_encode(["mensaje"=>"Faltan datos de producto"]);
            exit;
        }

        if(!$id) {
            http_response_code(400);
            echo json_encode(["mensaje"=>"El id no es correcto"]);
            exit;
        }
        
        if(!is_numeric($id) || $id < 0) {
            http_response_code(400);
            echo json_encode(["mensaje"=>"El id no es correcto"]);
            exit;    
        }
    }