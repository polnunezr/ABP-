<?php
require_once('./php_librarys/bd.php');
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
$user = isset($_SESSION['user']) ? $_SESSION['user'] : '';
$admin = isset($_SESSION['admin']) ? $_SESSION['admin'] : '';
if(!empty($user)) {
    $_SESSION['idMemory'] = $user['id_usuario'];
} elseif(!empty($admin)) {
    $_SESSION['idMemory'] = $admin['id_usuario'];
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title></title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./css/landingPageGame.css">
</head>





<body>

    <div class="container">

        <h1>Memory</h1>
        <div class="border border-light p-3 mb-4">

            <div class="center">

                <button type="button" class="button btn btn-primary btn-lg " data-toggle="modal" data-target="#exampleModal">
            Jugar !                 </button>
            </div>

        </div>
        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Selecciona el nivel del juego</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
                    </div>
                    <div class="modal-body">
                        <p>Instrucciones:</p>
                        <p>Selecciona una familia </p>
                        <ul>
                            <li>Marketing y Comercio</li>
                            <li>Hoteler??a y Turismo</li>
                            <li>Inform??tica y Comunicaci??n</li>
                            <li>Administraci??n y Gesti??n</li>

                        </ul>

                    </div>
                    <div class="modal-header">
                        <button id="mybutton" onclick="getId1()" type="button" class="btn btn-danger btn-sm" data-dismiss="modal" data-toggle="modal" data-target="#myModal2" value="comercio">Marketing/Comercio</button>
                        <button id="mybutton2" onclick="getId2()" type="button" class="btn btn-primary btn-sm" data-dismiss="modal" data-toggle="modal" data-target="#myModal2" value="turismo">Hoteler??a/Turismo</button>
                        <button id="mybutton3" onclick="getId3()" type="button" class="btn btn-warning btn-sm" data-dismiss="modal" data-toggle="modal" data-target="#myModal2" value="comunicion">Inform??tica/Comunicaci??n</button>
                        <button id="mybutton4" onclick="getId4()" type="button" class="btn btn-success btn-sm" data-dismiss="modal" data-toggle="modal" data-target="#myModal2" value="gestion">Administraci??n/Gesti??n</button>
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal 2-->
        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Selecciona la dificultad del juego</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <p>Instrucciones:</p>

                        <ul>
                            <li>Conseguir 500 puntos en menos de 2 minutos</li>
                        </ul>
                        <p>Selecciona una dificultad :</p>
                        <ul>
                            <li>Modo F??cil</li>
                            <li>Modo Dif??cil</li>
                        </ul>
                    </div>
                    <div class="modal-footer justify-content-center" id="niveles">

                    </div>
                </div>
            </div>
        </div>

    </div>



    <script src="./js/memory/seleccionarNiveles.js"></script>


</body>

</html>