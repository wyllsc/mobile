<?php
header ("Access-Control-Allow-Origin: *");

$server = new SoapServer(null, array('uri' => "http://127.0.0.1/projects/webservice-php/"));

function consultaBanco(){
	$conn = new PDO('mysql:host=127.0.0.1;dbname=app', 'root', '');
     
    $sql = $conn->prepare('SELECT * FROM pessoa');
    $sql->execute();
 
    $results=$sql->fetchAll(PDO::FETCH_ASSOC);
 	$json=json_encode($results);
	return $json;
}

function consultaBancoComId($id){
	$conn = new PDO('mysql:host=127.0.0.1;dbname=app', 'root', '');
     
    $sql = $conn->prepare('SELECT * FROM pessoa WHERE id = :id');
    $sql->execute(array('id' => $id));
 
    $results=$sql->fetchAll(PDO::FETCH_ASSOC);
 	$json=json_encode($results);
 	return $json;
}

function helloWorld($name){
    return "Hello ".$name;
}

$server->addFunction("helloWorld");
$server->addFunction("consultaBanco");
$server->addFunction("consultaBancoComId");

$server->handle();
?>