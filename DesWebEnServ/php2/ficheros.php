<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="fichero1" id="">
        <input type="submit" value="Enviar">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"]  == "POST") {
            echo "<p>" . print_r($_FILES) . "</p>";
            if(isset($_FILES["fichero1"])) {
                $archivo1 = $_FILES["fichero1"];
                echo "<p>" . $archivo1["name"] . "</p>";
                echo "<p>" . $archivo1["type"] . "</p>";
            }
        }
    ?>
</body>
</html>