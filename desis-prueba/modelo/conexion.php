<?php

//conexion a la base de datos que usa todo el proyecto, aca se debe modificar si se cambia de base de datos, servidor o usuario
    class Conexion extends PDO{

        public function __construct(){
            try{
                parent::__construct("mysql:host=localhost;dbname=bdvoto", "root", "");
                parent::exec("set names utf8");
            }catch(PDOException $e){
                echo "Error al conectar " . $e->getMessage();
                exit;
            }
        }

    }
?>