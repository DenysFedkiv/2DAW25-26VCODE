<?php
    namespace Clases1;

    class Class1 {
        private $nombre;

        public function __construct($n) {
            $this->nombre = $n;
        }

        public function mostrar() {
            echo "<br>" . $this->nombre;
        }
    }