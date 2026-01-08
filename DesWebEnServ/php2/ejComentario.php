<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <textarea name="mensaje" id="mensaje" placeholder="Introduce su mensaje"></textarea>
        <input type="submit" value="Submit">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            if(isset($_POST["mensaje"])) {
                if(strlen($_POST["mensaje"]) < 10) {
                    echo "<p style='color: red;'>Error</p>";
                }
                else {
                    echo "<p style='color: green;'>Exito</p>";
                }
            }
        }
    ?>
</body>
</html>