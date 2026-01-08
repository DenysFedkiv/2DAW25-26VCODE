<?php
    require_once("MohoGalactico.php");
    require_once("MohoTelepatico.php");
    require_once("MohoParasitico.php");

    $mohoG1 = new MohoTelepatico("Moho La Moho", 20, 78);
    $mohoG2 = new MohoParasitico("Moho Lo Moho", 4000, 500);

    echo $mohoG1->brillar() . "<br>";
    echo $mohoG2->brillar() . "<br>";
    
    echo $mohoG1->mutar() . "<br>";
    echo $mohoG2->mutar() . "<br>";