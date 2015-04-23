<?php


$server = new SoapServer(null, array('uri' => "http://innovar.besaba.com/ws/gjcc/"));

function buscaNoticias()
{
	$conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u313607455_app', 'u313607455_app', 'sao2300801');
     
    $sql = $conn->prepare("SELECT inf.id, inf.titulo, inf.descricao FROM informativos inf ");
    $sql->execute();
 
    $results=$sql->fetchAll(PDO::FETCH_ASSOC);
 	$json=json_encode($results);
 	return $json;

}

function buscaVideos()
{
	$conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u313607455_app', 'u313607455_app', 'sao2300801');
     
    $sql = $conn->prepare("SELECT m.id, m.url FROM midias m WHERE m.tipo = 1 ");
    $sql->execute();
 
    $results=$sql->fetchAll(PDO::FETCH_ASSOC);
 	$json=json_encode($results);
 	return $json;

}

$server->addFunction("buscaNoticias");
$server->addFunction("buscaVideos");

$server->handle();
?>