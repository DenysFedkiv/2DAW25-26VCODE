<?php
    require_once("MohoGalactico.php");
    require_once("MohoTelepatico.php");

    $mohoG1 = new MohoGalactico("Moho El Moho", 500, 3);
    $mohoG2 = new MohoTelepatico("Moho La Moho", 20, 78);

    echo $mohoG1->brillar() . "<br>";
    echo $mohoG2->brillar() . "<br>";

    echo $mohoG1->get_nombre() . " tiene toxicidad " . $mohoG1->get_nivelToxicidad() . " antes de setter<br>";
    echo $mohoG2->get_nombre() . " tiene toxicidad " . $mohoG2->get_nivelToxicidad() . " antes de setter<br>";

    echo "Toxicidad maxima: " . MohoGalactico::$MAX_TOXICIDAD . "<br>";

    $mohoG1->set_nivelToxicidad(120);
    $mohoG2->set_nivelToxicidad(90);

    echo $mohoG1->get_nombre() . " tiene toxicidad " . $mohoG1->get_nivelToxicidad() . " despues de setter(120)<br>";
    echo $mohoG2->get_nombre() . " tiene toxicidad " . $mohoG2->get_nivelToxicidad() . " despues de setter(90)<br>";
    
    echo $mohoG1->get_nombre() . " tiene luminosidad " . $mohoG1->get_luminosidad() . " antes de setter<br>";
    echo $mohoG2->get_nombre() . " tiene luminosidad " . $mohoG2->get_luminosidad() . " antes de setter<br>";

    $mohoG1->set_luminosidad(400);
    $mohoG2->set_luminosidad(7000);

    echo $mohoG1->get_nombre() . " tiene luminosidad " . $mohoG1->get_luminosidad() . " despues de setter(400)<br>";
    echo $mohoG2->get_nombre() . " tiene luminosidad " . $mohoG2->get_luminosidad() . " despues de setter(7000)<br>";
    