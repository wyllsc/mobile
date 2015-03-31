<?php
/**
 * Created by PhpStorm.
 * User: SantClair
 * Date: 29/03/2015
 * Time: 12:22
 */

//criação de uma instância do servidor
$server = new SoapServer(null, array('uri' => "/webservice/"));

function consultaBanco($id)
{
	$conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u313607455_app', 'u313607455_app', 'sao2300801');
     
    $sql = $conn->prepare('SELECT * FROM pessoa WHERE id = :id');
    $sql->execute(array('id' => $id));
 
    $results=$sql->fetchAll(PDO::FETCH_ASSOC);
 	$json=json_encode($results);
 	return $json;

}

//definição do serviço
function helloWorld($name)
{
    return "Hello ".$name;
}

//registro do serviço
$server->addFunction("helloWorld");
$server->addFunction("consultaBanco");

//chamada do método para atender as requisição do serviço
$server->handle();

?>