<?php
$numeros = [2, 5, 8, 1, 4];
echo array_sum($numeros) . "</br>";

$numeros = [15, 22, 8, 19, 30];
echo max($numeros) . "</br>";

$valores = [4, 12, 7, 25, 30, 3];
$contador = 0;
for ($i = 0; $i < count($valores); $i++) {
    if($valores[$i] > 10) {
        $contador++;
    }
}
echo $contador . "</br>";

$frutas = ['Manzana', 'Banana'];
array_push($frutas, "Naranja");
print_r($frutas);
echo "</br>";

$nombres = ['Luis', 'Ana', 'Carlos'];
sort($nombres);
print_r($nombres);
echo "</br>";

$colores = ['rojo', 'verde', 'azul', 'amarillo'];
unset($colores[array_search("verde", $colores)]);
print_r($colores);
echo "</br>";

$persona = [
'nombre' => 'Lucía',
'edad' => 28,
'ciudad' => 'Madrid'
];

foreach($persona as $clave => $valor) {
    echo "$clave: $valor, ";
}

echo "<br>";

$producto = [
    'nombre' => 'Laptop',
    'precio' => 1500,
    'stock' => 25
];

$producto["precio"] = 1400;

echo "precio = " . $producto['precio'];
echo "<br>";

$alumno = [
    'nombre' => 'Pedro',
    'nota' => 8
];

$alumno["curso"] = "PHP Basico";
echo $alumno["curso"];
echo "<br>";

$datos = [
    'email' => 'test@example.com',
    'usuario' => 'juan23'
];

if(array_key_exists("password", $datos)) {
    echo "true";
} else {
    echo "false";
}
echo "<br>";

$usuarios = [
    'ana' => 'admin',
    'juan' => 'editor',
    'sofia' => 'admin',
    'mario' => 'user'
];
print_r($usuarios);
echo "<br>";

asort($usuarios);
print_r($usuarios);
echo "<br>";

$libro = [
    'titulo' => 'PHP para todos',
    'autor' => 'J. Pérez',
    'anio' => 2023
];

$libroJson = json_encode($libro);
echo $libroJson;
echo "<br>";

$personas = [
['nombre' => 'Ana', 'edad' => 30],
['nombre' => 'Luis', 'edad' => 25],
['nombre' => 'Carlos', 'edad' => 35]
];

foreach($personas as $persona) {
    foreach($persona as $clave => $valor) {
        echo "$clave: $valor, ";
    }
    echo "<br>";
}

foreach($personas as $persona) {
    foreach($persona as $clave => $valor) {
        if($clave == "nombre" && $valor == "Luis") {
            echo $persona["edad"];
        }
    }
}