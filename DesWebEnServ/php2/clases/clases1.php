<?php
    require_once("./d1/class1.php");

    use Clases1\Class1;

    class Fruta {
        public $color;
        
        function __construct($n) {
            $this->color = $n;
        }

        function set_color($c) {
            $this->color = $c;
        }

        function get_color() {
            return $this->color;
        }

    }

    $manzana = new Fruta("rojo");

    echo $manzana->get_color() . "<br>";

    class CuentaBancaria {
        private $numCuenta;
        private $titular;
        private $saldo;

        function __construct($numCuenta, $titular, $saldo) {
            $this->numCuenta = $numCuenta;
            $this->titular = $titular;
            $this->saldo = $saldo;
        }

        function get_numCuenta() {
            return $this->numeroCuenta;
        }

        function set_numCuenta($nC) {
            $this->numCuenta = $nC;
        }

        function get_titular() {
            return $this->titular;
        }

        function set_titular($tit) {
            $this->titular = $tit;
        }

        function get_saldo() {
            return $this->saldo;
        }

        function set_saldo($s) {
            $this->saldo = $s;
        }

        function ingresar($n) {
            $this->saldo += $n;
            return $n . " ingresado corectamente";
        }
        
        function retirar($n) {
            if($this->saldo >= $n) {
                $this->saldo -= $n;
                return $n . " retirado corectamente. Saldo restante: " . $this->saldo;
            }
            else {
                return "Saldo insuficiente";
            }
        }
    }

    class Class2 extends Class1 {
                
    }

