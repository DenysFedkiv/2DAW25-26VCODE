<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="submit" value="Mezclar">
    </form>
    <?php
        $preguntas = [
            "¿Esta noche sales de fiesta?",
            "¿Estudiaste ayer?",
            "¿Vas a aprobar?",
            "¿Me prestas 5 euros para un bocadillo de chorizo?",
        ];

        $respuestas = [
            "Ni de broma",
            "Uff...",
            "Quizas",
            "Buena pregunta"
        ];

        echo "<ul>";
        echo "<li>" . $preguntas[rand(0, 3)] . "</li>";
        echo "<li style='color: gray;'>" . $respuestas[rand(0, 3)] . "</li>";
        echo "</ul>";
    ?>
</body>
</html>
