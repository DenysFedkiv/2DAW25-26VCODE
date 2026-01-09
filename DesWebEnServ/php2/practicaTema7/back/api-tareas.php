<?php
    require_once("config.php");
    
    $metodo = $_SERVER['REQUEST_METHOD'];
    
    $id = $_GET["id"] ?? "";

    $pdo = conectar_bd();

    switch ($metodo) {
        case "GET":
            if($id) {
                listarTarea($id, $pdo);    
            }
            else {
                listarTareas($pdo);
            }
            break;
        case "POST":
            agregarTarea($pdo);
            break;
        case "PUT":
            actualizarTarea($pdo);
            break;
        case "DELETE":
            eliminarTarea($pdo);
        break;
        default:
            http_response_code(405);
            echo json_encode(["mensaje"=>"Metodo incorecto"]);
            break;
    }

    function listarTareas($pdo) {
        $consulta = "SELECT * FROM tareas";

        $stmt = $pdo->prepare($consulta);
        
        $stmt->execute();
        
        
        if($stmt->rowCount() == 0) {
            $tareas = [];
        }
        else {
            $tareas = $stmt->fetchAll();
        }

        http_response_code(200);
        echo json_encode(["tareas"=>$tareas]);
        exit;
    }

    function listarTarea($id, $pdo) {
        validar_id($id);
        
        $consulta = "SELECT * FROM tareas WHERE id=?";

        $stmt = $pdo->prepare($consulta);
        
        $stmt->execute([$id]);
        
        if($stmt->rowCount() == 0) {
            http_response_code(404);
            echo json_encode(["mensaje"=>"No existe la tarea"]);
        }
        else {
            $tarea = $stmt->fetch();
            http_response_code(200);
            echo json_encode(["mensaje"=>"exito", "tarea"=>$tarea]);
        }
        
        exit;
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

    function agregarTarea($pdo) {
        $datosTarea = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosTarea) {
            $error[] = "No hay datos del producto";
        }
        else {
            if(!$datosTarea["titulo"]) {
                $error[] = "El nombre no es correcto";
            }
            
            $consulta = "INSERT INTO tareas (titulo";
            $contador = 0;
            $datos = [$datosTarea["titulo"]];
            
            if(isset($datosTarea["descripcion"])) {
                $consulta .= ", descripcion";
                $contador += 1;
                array_push($datos, $datosTarea["descripcion"]);
            }
            
            if(isset($datosTarea["prioridad"])) {
                if($datosTarea["prioridad"] == "alta" || $datosTarea["prioridad"] == "media" || $datosTarea["prioridad"] == "baja") {
                    $consulta .= ", prioridad";
                    $contador += 1;
                    array_push($datos, $datosTarea["prioridad"]);
                }
                else {
                    $error[] = "Valor incorrecto en campo prioridad";
                }
            }
            
            if(isset($datosTarea["completada"])) {
                if($datosTarea["completada"] == "0" || $datosTarea["completada"] == "1") {
                    $consulta .= ", completada";
                    $contador += 1;
                    array_push($datos, $datosTarea["completada"]);
                }
                else {
                    $error[] = "Valor incorrecto en campo completada";
                }
            }
            
            $consulta .= ") VALUES (?";

            for($i = 0; $i < $contador; $i++) {
                $consulta .= ", ?";
            }

            $consulta .= ");";
            
            if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
            }
            
            $stmt = $pdo->prepare($consulta);
            
            $stmt->execute($datos);
            
            $consulta = "SELECT * FROM tareas ORDER BY id DESC";
            
            $stmt = $pdo->prepare($consulta);
            $stmt->execute();
            
            $tareaR = $stmt->fetch();

            http_response_code(201);
            echo json_encode(["tarea"=>$tareaR]);
            exit;
        }

        if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
        }
    }

    function actualizarTarea($pdo) {
        $datosTarea = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosTarea) {
            $error[] = "No hay datos del producto";
        }
        else {
            validar_id($datosTarea["id"] ?? "");

            if(!isset($datosTarea["titulo"])||!isset($datosTarea["descripcion"])||!isset($datosTarea["prioridad"])||!isset($datosTarea["completada"])) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"Faltan datos de producto"]);
                exit;
            }

            $consulta = "SELECT * FROM tareas WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosTarea["id"]]);

            $producto = $stmt->fetch();

            if(!$producto) {
                http_response_code(404);
                echo json_encode(["mensaje"=>"El producto con este id no existe"]);
                exit;
            }
            
            if(!trim($datosTarea["titulo"])) {
                $error[] = "El titulo no es correcto";
            }

            if(!$datosTarea["descripcion"]) {
                $error[] = "La descripcion no es correcta";
            }

            if($datosTarea["prioridad"] != "alta" && $datosTarea["prioridad"] != "media" && $datosTarea["prioridad"] != "baja") {
                $error[] = "Valor incorrecto en campo prioridad";
            }
            
            if($datosTarea["completada"] != "0" && $datosTarea["completada"] != "1") {
                $error[] = "Valor incorrecto en campo completada";
            }
            
            if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
            }
            
            $consulta = "UPDATE tareas SET titulo=?, descripcion=?, prioridad=?, completada=? WHERE id=?";

            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosTarea["titulo"], $datosTarea["descripcion"], $datosTarea["prioridad"], $datosTarea["completada"], $datosTarea["id"]]);

            $consulta = "SELECT * FROM tareas WHERE id = ?";
            
            $stmt = $pdo->prepare($consulta);
            $stmt->execute([$datosTarea["id"]]);
            
            $tareaR = $stmt->fetch();
            
            http_response_code(200);
            echo json_encode(["tarea"=>$tareaR]);
            exit;
        }

        if($error) {
                http_response_code(400);
                echo json_encode($error);
                exit;
        }
    }

    function eliminarTarea($pdo) {
        $datosTarea = json_decode(file_get_contents("php://input"), true);

        $error = [];
        if(!$datosTarea) {
            $error[] = "No hay datos del producto";
        }
        else {
            validar_id($datosTarea["id"] ?? "");

            $consulta = "SELECT * FROM tareas WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);

            $stmt->execute([$datosTarea["id"]]);

            $producto = $stmt->fetch();

            if(!$producto) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"La tarea con este id no existe"]);
                exit;
            }
            
            $consulta = "DELETE FROM tareas WHERE id=?";
            
            $stmt = $pdo->prepare($consulta);
            
            try {
                $stmt->execute([$datosTarea["id"]]);
            }
            catch (PDOException $e) {
                http_response_code(400);
                echo json_encode(["mensaje"=>"Error al ejecutar la consulta " . $e]);
                exit;
            }          
            
            http_response_code(200);
            echo json_encode(["mensaje"=>"Producto cont id " . $datosTarea["id"] . " eliminado corectamente"]);
            exit;
        }

        if($error) {
            http_response_code(400);
            echo json_encode($error);
            exit;
        }
    }