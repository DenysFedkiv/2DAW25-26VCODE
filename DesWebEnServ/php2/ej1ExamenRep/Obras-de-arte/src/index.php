<?php
require_once "config.php";



$consulta = "SELECT * FROM obras";

$stmt = $pdo->prepare($consulta);
$stmt->execute();

$products = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

</head>

<body style="margin: 20px 50px;">
    <h1 class="mb-4">Listado de obras de arte</h1>


    <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Año</th>
                <th>Tipo</th>
                <th>Ubicación</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>

            <?php foreach ($products as $p): ?>
                <tr>
                    <td><?= $p['id'] ?></td>
                    <td><?= htmlspecialchars($p['titulo']) ?></td>
                    <td><?= $p['autor'] ?></td>
                    <td><?= $p['anio_creacion'] ?></td>
                    <td><?= $p['tipo'] ?></td>
                    <td><?= $p['ubicacion'] ?></td>

                    <td>
                        <a href="edit.php?id=<?= $p['id'] ?>" class="btn btn-sm btn-primary">✏️ Editar</a>
                        <a href="delete.php?id=<?= $p['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('¿Eliminar este producto?')">🗑️ Eliminar</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>


    <form action=<?= htmlspecialchars($_SERVER['PHP_SELF']) ?> method="post">
        <div class="row align-items-end">
            <div class="col-2">
                <label class="form-label" for="busca">Ordenar por:</label>
                <select name="orden" id="orden" class="form-select" aria-label="Default select example">
                    <option value="id">Id</option>
                    <option value="titulo">Título</option>
                    <option value="autor">Autor</option>
                    <option value="anio_creacion">Año</option>
                    <option value="ubicacion">Ubicación</option>
                </select>
            </div>
            <div class="col-2">
                <button type=submit name="boton-ord" class="btn btn-secondary">Enviar</button>
            </div>
        </div>
    </form>
</body>

</html>