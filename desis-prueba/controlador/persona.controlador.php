<?php 
    require '../modelo/persona.modelo.php';
    //recive los datos obtenidos por el persona.js y los estructura para enviarlos a persona.modelo.php para ser guardados en la base de datos.
    if($_POST){
        $persona = new Persona();

        switch($_POST["accion"]){
            case "GUARDAR":
                $nombre = $_POST["nombre"];
                $alias = $_POST["alias"];
                $rut = $_POST["rut"];
                $email = $_POST["email"];
                $region = $_POST["region"];
                $comuna = $_POST["comuna"];
                $candidato = $_POST["candidato"];
                $comoSeEntero = $_POST["comoSeEntero"];
                $respuesta = $persona->Guardar($nombre,$alias,$rut,$email,$region,$comuna,$candidato,$comoSeEntero);
                echo json_encode($respuesta);
            break;
        }
    }
?>