<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="num1" required pattern="[0-9]*">
        <input type="text" name="num2" required pattern="[0-9]*">
        <select name="opcion" id="opcion">
            <option value="+">Sumar</option>
            <option value="-">Restar</option>
            <option value="*">Multiplicar</option>
            <option value="/">Dividir</option>
        </select>
        <input type="submit" value="Calcular">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"] === "POST") {
            if($_POST["opcion"] == "+") {
                echo "<h1>Resultado = " . $_POST["num1"] + $_POST["num2"] . "</h1>";
            } else if($_POST["opcion"] == "-") {
                echo "<h1>Resultado = " . $_POST["num1"] - $_POST["num2"] . "</h1>";
            } else if($_POST["opcion"] == "*") {
                echo "<h1>Resultado = " . $_POST["num1"] * $_POST["num2"] . "</h1>";
            } else if($_POST["opcion"] == "/") {
                echo "<h1>Resultado = " . $_POST["num1"] / $_POST["num2"] . "</h1>";
            }
        }
        // if(isset($_POST["num1"]) && isset($_POST["num2"])) {
        //     if($_POST["opcion"] == "+") {
        //         echo "<h1>Resultado = " . $_POST["num1"] + $_POST["num2"] . "</h1>";
        //     } else if($_POST["opcion"] == "-") {
        //         echo "<h1>Resultado = " . $_POST["num1"] - $_POST["num2"] . "</h1>";
        //     } else if($_POST["opcion"] == "*") {
        //         echo "<h1>Resultado = " . $_POST["num1"] * $_POST["num2"] . "</h1>";
        //     } else if($_POST["opcion"] == "/") {
        //         echo "<h1>Resultado = " . $_POST["num1"] / $_POST["num2"] . "</h1>";
        //     }
        // }
    ?>
</body>
</html>