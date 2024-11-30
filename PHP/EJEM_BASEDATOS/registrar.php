<?php 
include 'conexion.php';
// Recibir los datos del formulario y almacenarlos en las variables
$material = $_POST["material"];
$ftu = $_POST["ftu"];
$fcu = $_POST["fcu"];
$fyu = $_POST["fyu"];
$E = $_POST["E"];

// Verificar si el material ya existe
$verificar_material = mysqli_query($conexion,"SELECT * FROM tblMateriales WHERE material = '$material'");

if (mysqli_num_rows($verificar_material) > 0) {
    echo '<script>    
         alert("El material ya existe");
         window.history.go(-1);
        </script>';  
    exit;
}

// Insertar campos
$insertar = "INSERT INTO tblMateriales(material,ftu,fcu,fyu,ModuloYoung) VALUES ('$material',$ftu,$fcu,$fyu,$E)";

// Ejecutar consulta
$resultado = mysqli_query($conexion,$insertar);
if (!$resultado) {
    echo '<script> 
            alert("Error de registro");
            window.history.go(-1);
        </script>';
} else {
    echo '<script> 
            alert("Registro efectuado correctamente");
            window.history.go(-1);
        </script>';   
}
// Cerrar consultas
mysqli_close($conexion);
?>