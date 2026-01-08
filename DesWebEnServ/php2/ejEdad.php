<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
        <input type="number" name="edad" min="0">
        <input type="submit" value="Submit">
    </form>
    <?php
        if(isset($_GET["edad"])) {
            echo "<p>Tienes " . $_GET["edad"] . " años</p>";
        }
    ?>
</body>
</html>