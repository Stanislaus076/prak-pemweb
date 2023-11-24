<?php

//Stanislaus Nicko Fasio Priyanjaga
//121140076
//RB

class identitas {
    private $nama;
    private $umur;
    private $alamat;

    public function __construct($nama, $umur, $alamat) {
        $this->nama = $nama;
        $this->umur = $umur;
        $this->alamat = $alamat;
    }

    public function getNama() {
        return $this->nama;
    }

    public function getUmur() {
        return $this->umur;
    }

    public function getAlamat() {
        return $this->alamat;
    }

    public function setNama($nama) {
        $this->nama = $nama;
    }

    public function setUmur($umur) {
        $this->umur = $umur;
    }

    public function setAlamat($alamat) {
        $this->alamat = $alamat;
    }

    public function tampilkanidentitas() {
        echo "Nama: {$this->nama}\n <br>";
        echo "Umur: {$this->umur}\n <br>";
        echo "Alamat: {$this->alamat}\n <br>";
    }
}

$identitas1 = new identitas("Nicko", 20, "Jl. Pramuka");

$identitas1->tampilkanidentitas();

$identitas1->setAlamat("Jl. Kenanga");

$identitas1->tampilkanidentitas();

?>
