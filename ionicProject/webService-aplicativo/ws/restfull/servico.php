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
$app->post('/produtos/:id','insereProduto');
$app->post('/produtos/:id/:url','insereTeste');

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

function insereProduto($id){
  $request = \Slim\Slim::getInstance()->request();
  $produto = json_decode($request->getBody());
  $sql = "UPDATE midias SET url=:url WHERE id=9";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->bindParam("url",$id);
  $stmt->execute();

  echo json_encode($produto);
}

function insereTeste($id, $url){
  $request = \Slim\Slim::getInstance()->request();
  $produto = json_decode($request->getBody());
  $sql = "INSERT INTO midias (tipo,url) values (:tipo,:url)";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->bindParam("tipo",$id);
  $stmt->bindParam("url",$url);
  $stmt->execute();

  echo json_encode($produto);
}
