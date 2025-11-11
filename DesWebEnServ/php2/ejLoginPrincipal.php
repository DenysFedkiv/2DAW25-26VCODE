<?php
    session_start();
    echo "<p>Bienvenido, " . $_SESSION["usuario"] . "</p>";