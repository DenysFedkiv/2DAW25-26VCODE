<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function duplicar($a) {
            return $a = 2 * $a;
        }

        $numero = 5;
        $numero = duplicar($numero);
        echo $numero . "<br>";

        function sumar_5(&$valor) {
            $valor += 5;
        }
        sumar_5($numero);
        echo $numero;
    ?>
</body>
</html>