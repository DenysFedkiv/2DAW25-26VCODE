<?php
    require_once("config.php");
    
    $metodo = $_SERVER['REQUEST_METHOD'];
    
    $id = $_GET["id"] ?? "";
    $buscar = $_GET["buscar"] ?? "";
    $estado = $_GET["estado"] ?? "";
    $prioridad = $_GET["prioridad"] ?? "";
    $orden = $_GET["orden"] ?? "";
    $direccion = $_GET["direccion"] ?? "";
    $pagina = $_GET["pagina"] ?? "";
    $limite = $_GET["limite"] ?? "";

    $pdo = conectar_bd();

    switch ($metodo) {
        case "GET":
            if($id) {
                listarTarea($id, $pdo);    
            }
            else if($_GET) {
                listarTareasBuscar($buscar, $estado, $prioridad, $orden, $direccion, $pagina, $limite, $pdo);
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

    function listarTareasBuscar($buscar, $estado, $prioridad, $orden, $direccion, $pagina, $limite, $pdo) {
        $where = [];
        $order_sql = "";
        $parametros = [];

        if($buscar) {
            $where[] = "(titulo LIKE :buscar OR descripcion LIKE :buscar)";
            $parametros["buscar"] = "%" . $buscar . "%";
        }
        if($estado || $estado == 0) {
            if(in_array($estado, ["0", "1", "true", "false"])) {
                $where[] = "(completada = :estado)";
                if($estado == "true") {
                    $parametros["estado"] = true;
                }
                else if($estado == "false") {
                    $parametros["estado"] = false;    
                }
                else {
                    $parametros["estado"] = $estado;
                }
            }
            else {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Estado incorecto"]);
                exit;
            }
        }

        if($prioridad) {
            if(in_array($prioridad, ["alta", "media", "baja"])) {
                $where[] = "(prioridad = :prioridad)";
                $parametros["prioridad"] = $prioridad;
            }
            else {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Prioridad incorecta"]);
                exit;
            }
        }

        if($orden) {
            if(in_array($orden, ["id", "titulo", "fecha_creacion", "prioridad"])) {
                if($orden === "prioridad") {
                    $order_sql = "FIELD(prioridad, 'alta', 'media', 'baja')";
                }
                else {
                    $order_sql = $orden;
                }
            }
            else {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Orden incorecto"]);
                exit;
            }
        }
        else {
            $order_sql = "id";
        }

        if($direccion) {
            $direccion = strtoupper($direccion);
            if(!in_array($direccion, ["ASC", "DESC"])) {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Direccion incorecta"]);
                exit;
            }
            else {
                $order_sql .= " " . $direccion;
            }
        }
        else {
            $order_sql .= " ASC";
        }

        if($pagina) {
            if(is_numeric($pagina)) {
                $pagina = (int)$pagina;
            }
            else {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Pagina incorecta"]);
                exit;
            }
        }
        else {
            $pagina = 1;
        }

        if($limite) {
            if(is_numeric($limite)) {
                $limite = (int)$limite;
            }
            else {
                http_response_code(404);
                echo json_encode(["mensaje"=>"Pagina incorecta"]);
                exit;
            }
        }
        else {
            $limite = 10;
        }
        
        $offset = ($pagina - 1) * $limite;

        if($where) {
            $where_sql = "WHERE " . implode(" AND ", $where);
        }
        else {
            $where_sql = "";
        }

        $consulta = "SELECT * FROM tareas $where_sql ORDER BY $order_sql";
        
        $stmt = $pdo->prepare($consulta);

        foreach($parametros as $key => $value) {
            if($key == "estado") {
                $stmt->bindValue(":$key", $value, PDO::PARAM_BOOL);
            }
            else {
                $stmt->bindValue(":$key", $value);
            }
        }
        
        $stmt->execute();

        $total = $stmt->rowCount();
        
        $consulta = "SELECT * FROM tareas $where_sql ORDER BY $order_sql LIMIT :limit OFFSET :offset";
        
        $stmt = $pdo->prepare($consulta);

        foreach($parametros as $key => $value) {
            if($key == "estado") {
                $stmt->bindValue(":$key", $value, PDO::PARAM_BOOL);
            }
            else {
                $stmt->bindValue(":$key", $value);
            }
        }

        $stmt->bindValue(":limit", $limite, PDO::PARAM_INT);
        $stmt->bindValue(":offset", $offset, PDO::PARAM_INT);

        $stmt->execute();
        
        if($stmt->rowCount() == 0) {
            http_response_code(404);
            echo json_encode(["mensaje"=>"No existen tareas que coresponden a la busqueda"]);
            exit;
        }
            
        $tareas = $stmt->fetchAll();
        http_response_code(200);
        echo json_encode(["exito"=>true, "tareas"=>$tareas, "paginacion"=>["pagina_actual"=>$pagina,
        "por_pagina"=>$limite,
        "total_registros"=>(int)$total,
        "total_paginas"=>(int)ceil($total / $limite),
        "tiene_anterior"=>$pagina > 1,
        "tiene_siguiente"=>$pagina < ceil($total / $limite)]]);
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
            echo json_encode(["mensaje"=>"Tarea agregada corectamente", "tarea"=>$tareaR]);
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