<?php
session_start();
saveStatisticBD($_SESSION['id'],$_GET['puntuation']);

function openBD()
{
    $servername = "localhost";
    $username = "root";
    $password = "";

    $conexion = new PDO("mysql:host=$servername;dbname=proyecto_juego", $username, $password);
    // set the PDO error mode to exception
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->exec("set names utf8");

    return $conexion;
}

function closeBD()
{
    return null;
}

function selectMemoryGame()
{
    $conexion = openBD();
    $sentenciaText = "SELECT juego.nombre as juego ,usuario.nombre as nombre,puntuacion,tiempo 
    from juego LEFT JOIN usuario_juego 
    ON juego.id_juego=usuario_juego.id_juego
    LEFT JOIN usuario
    ON usuario.id_usuario = usuario_juego.id_usuario
    WHERE juego.nombre = 'Memory'";


    $sentencia = $conexion->prepare($sentenciaText);
    $sentencia->execute();
    $resultado = $sentencia->fetchAll();

    $conexion = closeBD();
    return $resultado;
}
