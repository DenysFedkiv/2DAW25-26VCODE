<?php
    class MohoTelepatico extends MohoGalactico {
        private $nivelTelepatia;

        public function get_nivelTelepatia() {
            return $this->nivelTelepatia;
        }

        public function set_nivelTelepatia($tep) {
            $this->nivelTelepatia = $tep;
        }

        public function brillar() {
            return "El moho telepatico " . $this->get_nombre() . " proyecta pensamientos luminosos con " . $this->get_luminosidad() . " lumenes";
        }
    }