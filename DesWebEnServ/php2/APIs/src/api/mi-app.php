<?php
// -------------------------------
// CONFIGURACIÓN DE API
// -------------------------------
$API_KEY = "ca9561e579ac1de614ad45ef1d3d3380"; // <-- coloca tu API Key
$ciudad = "Madrid";
$unidades = "metric";
$lang = "es";

// Construimos la URL de la API real
$url = "https://api.openweathermap.org/data/2.5/weather"
     . "?q={$ciudad}&appid={$API_KEY}&units={$unidades}&lang={$lang}";

// Llamada real a la API
$respuesta = file_get_contents($url);

// Si la API falla, mostramos unos datos de ejemplo
if ($respuesta === FALSE) {
    $weather = [
        "temp" => "—",
        "description" => "No disponible"
    ];
} else {
    $data = json_decode($respuesta, true);
    $weather = [
        "temp" => $data["main"]["temp"],
        "description" => $data["weather"][0]["description"]
    ];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo App Tiempo</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #e3f2fd;
        }

        /* Barra superior */
        .topbar {
            background: #1e88e5;
            color: white;
            padding: 15px;
            font-size: 18px;
            display: flex;
            align-items: center;
        }

        .weather-box {
            font-size: 16px;
            background: rgba(255,255,255,0.2);
            padding: 7px 12px;
            border-radius: 5px;
            display: inline-block;
        }

        /* Pantalla de bienvenida */
        .welcome-screen {
            height: calc(100vh - 60px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .welcome-screen h1 {
            font-size: 42px;
            margin-bottom: 10px;
        }

        .welcome-screen p {
            font-size: 20px;
            max-width: 600px;
        }
    </style>
</head>

<body>

    <!-- Barra superior -->
    <div class="topbar">
        <div class="weather-box">
            🌤️ <?php echo $ciudad; ?> <strong><?php echo $weather["temp"] ?>°C</strong> — 
            <?php echo ucfirst($weather["description"]); ?>
        </div>
    </div>

    <!-- Pantalla de bienvenida -->
    <div class="welcome-screen">
        <h1>Bienvenidos a la App del Tiempo</h1>
        <p>
            Esta página es una demostración para tus clases: muestra cómo se vería una 
            aplicación web que utiliza la <strong>API de OpenWeather</strong> para obtener 
            información meteorológica en tiempo real.
        </p>
        <p>
            En la parte superior izquierda se muestran los datos reales del clima en Madrid.
            El resto es una pantalla de bienvenida para la explicación.
        </p>
    </div>

</body>
</html>