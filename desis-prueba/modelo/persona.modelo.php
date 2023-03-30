<?php 
     require 'conexion.php';
     class Persona{
        //esta funcion es la encargada de guardar los datos en la base de datos
        public function Guardar($nombre, $alias, $rut, $email, $region,$comuna,$candidato,$comoSeEntero){

            $conexion = new Conexion();

            // Verificar si el rut ya existe en la base de datos
            $stmt = $conexion->prepare("SELECT COUNT(*) FROM `persona` WHERE `rut` = :rut");
            $stmt->bindValue(":rut", $rut, PDO::PARAM_STR);
            $stmt->execute();
            $count = $stmt->fetchColumn();

            if ($count > 0) {
                return "Error: El RUT ingresado ya voto";
            }
            $stmt = $conexion->prepare("INSERT INTO `persona`
                                                (`nombre`,
                                                `alias`,
                                                `rut`,
                                                `email`,
                                                `region`,
                                                `comuna`,
                                                `candidato`,
                                                `comoSeEntero`)
                                    VALUES (:nombre,
                                            :alias,
                                            :rut,
                                            :email,
                                            :region,
                                            :comuna,
                                            :candidato,
                                            :comoSeEntero);");
            $stmt->bindValue(":nombre", $nombre, PDO::PARAM_STR);
            $stmt->bindValue(":alias", $alias, PDO::PARAM_STR);
            $stmt->bindValue(":rut", $rut, PDO::PARAM_STR);
            $stmt->bindValue(":email", $email, PDO::PARAM_STR);
            $stmt->bindValue(":region", $region, PDO::PARAM_STR);
            $stmt->bindValue(":comuna", $comuna, PDO::PARAM_STR);
            $stmt->bindValue(":candidato", $candidato, PDO::PARAM_STR);
            $stmt->bindValue(":comoSeEntero", implode(",", $comoSeEntero), PDO::PARAM_STR);

            if($stmt->execute()){
                return "OK";
            }else{
                return "Error: se ha generado un error al guardar la información";
            }

            
        }
     }
?>