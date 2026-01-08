<?php
    $numerosAl = [];
    for($i = 0; $i < 10; $i++) {
        array_push($numerosAl, rand(0, 30));
    }

    foreach($numerosAl as $i) {
        echo "<p>$i</p>";
    }

    $medio = array_sum($numerosAl) / count($numerosAl);

    echo $medio . "<br>";

    $max = max($numerosAl);

    echo $max . "<br>";

    echo "<br>";

    $temps = [];

    for($i = 0; $i < 10; $i++) {
        array_push($temps, rand(1, 30));
    }

    sort($temps);

    foreach($temps as $i) {
        echo $i . ", ";
    }
    
    echo "<br>";
    rsort($temps);

    foreach($temps as $i) {
        echo $i . ", ";
    }