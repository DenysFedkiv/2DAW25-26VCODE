<?php
    class MohoGalactico {
        private $nombre;
        private $luminosidad;
        private $nivelToxicidad;
        static public $MAX_TOXICIDAD = 100;
        
        public function __construct($n, $lum, $tox) {
            $this->nombre = $n;
            // $this->luminosidad = $lum;
            $this->set_luminosidad($lum);
            $this->set_nivelToxicidad($tox);
        }

        public function get_nombre() {
            return $this->nombre;
        }

        public function get_nivelToxicidad() {
            return $this->nivelToxicidad;
        }
        
        public function set_nivelToxicidad($tox) {
            if($tox < 100) {
                $this->nivelToxicidad = $tox;
            }
            else {
                $this->nivelToxicidad = self::$MAX_TOXICIDAD;
            }
        }
        
        public function brillar() {
            return "El moho $this->nombre brilla con una intensidad de $this->luminosidad lumenes";
        }

        static function comprobarLuminosidad($valor) {
            if($valor >= 0.1 && $valor <= 5000) {
                return true;
            }
            else {
                return false;
            }
        }

        public function get_luminosidad() {
            return $this->luminosidad;
        }

        public function set_luminosidad($lum) {
            if($this->comprobarLuminosidad($lum)) {
                $this->luminosidad = $lum;
            }
            else {
                $this->luminosidad = 0;
            }
        }
    }