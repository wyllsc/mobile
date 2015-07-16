<?php
header ("Access-Control-Allow-Origin: *");
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->get('/', function () {
  echo "Iaiiiiiiiiiiiiiiiiiiiiiiii";
});

// Chamada das Funções
$app->get('/categorias','getCategorias');
$app->post('/produtos','addProduto');
$app->run();



//Funcões
function db(){
  return new PDO('mysql:host=mysql.hostinger.com.br;dbname=u444907369_jgcc', 'u444907369_jgcc', 'sao230');
}

function getCategorias(){
  $result = db()->query("SELECT * FROM informativos inf");
  $categorias = $result->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($categorias);
}



function addProduto(){
  $request = \Slim\Slim::getInstance()->request();
  $produto = json_decode($request->getBody());
  $sql = "INSERT INTO produtos (nome,preco,dataInclusao,idCategoria) values (:nome,:preco,:dataInclusao,:idCategoria) ";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->bindParam("nome",$produto->nome);
  $stmt->bindParam("preco",$produto->preco);
  $stmt->bindParam("dataInclusao",$produto->dataInclusao);
  $stmt->bindParam("idCategoria",$produto->idCategoria);
  $stmt->execute();
  $produto->id = $conn->lastInsertId();
  echo json_encode($produto);
}
