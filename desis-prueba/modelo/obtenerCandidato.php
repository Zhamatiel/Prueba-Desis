<?php
require 'conexion.php';
//se obtienen los candidatos y se mandan a candidatos.js para ser mostrados en el Combobox
class Candidato {
  public function obtenerCandidatos() {
    $conexion = new Conexion();
    $stmt = $conexion->prepare("SELECT * FROM candidato");
    $stmt->execute();
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultados);
  }
}

$candidato = new Candidato();
$candidato->obtenerCandidatos();
?>