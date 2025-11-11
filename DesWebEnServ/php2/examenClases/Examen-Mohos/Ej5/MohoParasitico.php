<?php
    class MohoParasitico extends MohoGalactico {
        public function mutar() {
            return "El moho parasitico " . $this->get_nombre() . " ha mutado a una especie nueva";
        }   
    }