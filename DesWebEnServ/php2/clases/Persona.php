<?php
    class Persona {
        public $nombre;
        public $apelidos;
        public $edad;

        public function __construct($nombre, $apelidos, $edad) {
            $this->nombre = $nombre;
            $this->apelidos = $apelidos;
            $this->edad = $edad;
        };
        
        public function get_nombre() {
            return $this->nombre;
        }
        
        public function set_nombre($nombre) {
            $this->nombre = $nombre;
        }
        
        public function get_apelidos() {
            return $this->apelidos;
        }
        
        public function set_nombre($apelidos) {
            $this->apelidos = $apelidos;
        }
        
        public function get_edad() {
            return $this->edad;
        }
        
        public function set_edad($edad) {
            $this->edad = $edad;
        }
    }