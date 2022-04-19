<?php
    $_DATA = (object) json_decode(file_get_contents("php://input"));
    if($_DATA->opcion == "iniciarCiclo"){
        for ($i=$_DATA->inicio; $i < $_DATA->final; $i+=$_DATA->avance) { 
            echo "ciclo #$i INCREMENTO <br>";
        }
    }else if($_DATA->opcion == "iniciarCiclo2"){
        for ($i=($_DATA->final-1); $i >= $_DATA->inicio; $i-=$_DATA->avance) { 
            echo "ciclo #$i DECREMENTO <br>";
        }
    }
?>