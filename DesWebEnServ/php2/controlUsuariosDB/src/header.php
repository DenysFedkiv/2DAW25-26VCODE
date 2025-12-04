<?php
    
?>
<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>
    <body class="bg-light">
        <header>
            <nav class="navbar bg-body-secondary mb-4">
                <div class="container">
                    <a class="navbar-brand" href="index.php">
                        📦Productos
                    </a>
                    <div>
                        <a class="navbar-brand" href="">
                            <?php if(isset($_SESSION["nombreUsuario"])) {echo $_SESSION["nombreUsuario"];} ?>
                        </a>
                        <a class="navbar-brand" href="">
                            <?php if(isset($_SESSION["rol"])) {echo "(" . $_SESSION["rol"] . ")";} ?>
                        </a>
                        <?php if(isset($_SESSION["rol"])) {echo "<a href='logout.php' class='navbar-brand'>Logout</a>";} ?>
                        <!-- <a class="navbar-brand" href="agregar.php">
                            ➕Añadir
                        </a> -->
                    </div>
                </div>
            </nav>
        </header>
        <div class="container">
        

