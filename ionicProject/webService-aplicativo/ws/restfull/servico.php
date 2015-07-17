<?php
header ("Access-Control-Allow-Origin: *");
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->get('/', function () {
  echo "SlimProdutos";
});

$app->get('/informativos','buscaInformativos');
$app->get('/videos','buscaVideos');
$app->get('/fotos','buscaFotos');

$app->run();

function getConn(){
  return new PDO('mysql:host=mysql.hostinger.com.br;dbname=u444907369_jgcc', 'u444907369_jgcc', 'sao230');
}

function buscaInformativos(){
  $stmt = getConn()->query("SELECT * FROM informativos inf");
  $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($categorias);
}

function buscaVideos(){
  $stmt = getConn()->query("SELECT m.id, m.url FROM midias m WHERE m.tipo = 1");
  $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($categorias);
}

function buscaFotos(){
  $stmt = getConn()->query("SELECT m.id, m.url FROM midias m WHERE m.tipo = 2");
  $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($categorias);
}

function insereFotos(){
  $stmt = getConn()->query("INSERT INTO  midias (`url` , `tipo` ) VALUES (:nome ,  2); ");
  $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($categorias);
}
