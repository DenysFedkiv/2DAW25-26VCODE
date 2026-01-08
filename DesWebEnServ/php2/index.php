<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>web php/apache</h1>
    <?php
        $precio = 50;
        $IVA = 0.21;
        $precioIVA = $precio * $IVA;

        echo "<p>El IVA de pantalon es $precioIVA</p>";
        echo "<p>El final de pantalon es " . $precioIVA+$precio . "€</p>";

        $num1 = 5;
        $num2 = 3;
        if($num1 % $num2 == 0) {
            echo "<p>$num1 es divisible por $num2</p>";
        } else {
            echo "<p>$num1 no es divisible por $num2</p>";
        }

        $frutas = ["manzana", "melocoton", "naranja", "uva"];

        foreach ($frutas as $fruta) {
            echo "<p>$fruta</p>";
        }

        echo "<ol>";
        foreach ($frutas as $fruta) {
            echo "<li>$fruta</li>";
        }
        echo "</ol>";

        $frutas2 = ["manzana" => 1.20, "melocoton" => 0.80, "naranja" => 1.50, "uva" => 2.50];
        $frutas3 = array("manzana" => 1.20, "melocoton" => 0.80, "naranja" => 1.50, "uva" => 2.50);

        foreach($frutas2 as $fruta => $valor) {
            echo "$fruta cuesta $valor ";
        }
        echo "</br>";
        foreach($frutas3 as $fruta => $valor) {
            echo "$fruta cuesta $valor ";
        }

        // number_format() con 2 argumentos para limitar numero de decimales
        echo "<p>" . number_format(10000.345223, 2) . "</p>";
        // con 3 o 4 argumentos para cambiar como se separan decimales(3 argumento) y miles(4 argunmento)
        echo "<p>" . number_format(10000.345223, 2, ',') . "</p>";
        echo "<p>" . number_format(10000.345223, 2, ',', '.') . "</p>";

        
    ?>
</body>
</html>