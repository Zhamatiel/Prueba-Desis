<?php
require 'conexion.php';
//se obtienen los datos de las regiones desde la base de datos
class Region {
  public function obtenerRegiones() {
    $conexion = new Conexion();
    $stmt = $conexion->prepare("SELECT * FROM regiones");
    $stmt->execute();
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultados);
  }
  //se genera la consulta para que dependiendo de la region se cargen las comunas
  public function obtenerComunas($region_id) {
    $conexion = new Conexion();
    $stmt = $conexion->prepare("SELECT * FROM comunas WHERE provincia_id IN (SELECT provincia_id FROM provincias WHERE region_id = :region_id)");
    $stmt->bindParam(':region_id', $region_id);
    $stmt->execute();
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultados);
  }
}
$region = new Region();

if (isset($_GET['region_id'])) {
  $region_id = $_GET['region_id'];
  $region->obtenerComunas($region_id);
} else {
  $region->obtenerRegiones();
}
?>
