<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de materiales</title>
    <link rel="shortcut icon" href="./img/tbl.png" type="image/x-icon">
    <link rel="stylesheet" href="./CSS/styles.css">
    <link rel="stylesheet" href="./CSS/normalize.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<header class="header">
    <h1 class="header-1">Tabla de Materiales</h1>
    <div class="imagen">
        <img src="./img/tbl.png" alt="tblMateriales">
    </div>        
</header>
<div class="container my-4">
<table class="table table-dark table-striped">
<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Material</th>
      <th scope="col">FTU</th>
      <th scope="col">FCU</th>
      <th scope="col">FYU</th>
      <th scope="col">Módulo de elasticidad</th>
    </tr>
  </thead>
  <tbody>
    <?php
    $conexion = mysqli_connect("localhost","root","","dbmateriales");
    if(!$conexion) {
        die("La conexión no fue exitosa");
        exit;
    }
    $sql = "SELECT * FROM tblMateriales";
    $result = mysqli_query($conexion,$sql);
    while($row = mysqli_fetch_array($result)) {
        $id = $row["idMat"];  
        $material = $row["MATERIAL"];  
        $ftu = $row["FTU"];  
        $fcu = $row["FCU"];  
        $fyu = $row["FYU"];
        $e   = $row["ModuloYoung"]; 
        echo "<tr>
            <th scope='row'>$id</th>
            <td>$material</td>
            <td>$ftu</td>
            <td>$fcu </td>
            <td>$fyu</td>
            <td>$e</td>
            </tr>";
        } 
        mysqli_close($conexion);
    ?>
  </tbody>
</table>
<a style="text-decoration: none;" href="./index.html" class="boton">Formulario</a>
</div>



</body>
</html>