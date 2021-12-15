<?php
require_once('./php_librarys/bd.php');

$resultados = selectMemoryGame();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>
  <div class="container">

  <h1 class="display-1 text-center"  >Clasificación Memory</h1>
  <table class="table table-hover">
        <tr>
        <th scope="col">Juego</th>
        <th scope="col">Nombre Usuario</th>
        <th scope="col">Puntuacion</th>
        <th scope="col">Tiempo(s)</th>
        </tr>
        <?php
        foreach($resultados as $resultado ) { ?>
        <tr>
            <td><?php echo $resultado['juego']?></td>
            <td><?php echo $resultado['nombre']?></td>
            <td><?php echo $resultado['puntuacion']?></td>
            <td><?php echo $resultado['tiempo']?></td>
            </tr>
       <?php }
        ?>
    </table>


  </div>
</body>
</html>