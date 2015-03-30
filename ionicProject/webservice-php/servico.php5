<?php
/**
 * Created by PhpStorm.
 * User: SantClair
 * Date: 29/03/2015
 * Time: 12:22
 */

//criação de uma instância do servidor
$server = new SoapServer(null, array('uri' => "http://127.0.0.1/projects/webservice-php/"));

function consultaBanco()
{
	$id = 3;
	try {
	    $conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u313607455_app', 'u313607455_app', 'sao2300801');
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
	     
	    $result = $conn->prepare('SELECT * FROM pessoa WHERE id = :id');
	    $result->execute(array('id' => $id));
	 







	 	$jsonObj= array();
	 	
		if($result){
			foreach($result as $linha){
				$jsonObj[] = $result;
				echo $linha['id'] . " - " . $linha['nome'] . "<br>\n";
			}
		}

		return json_encode($jsonObj);














	} catch(PDOException $i) {
		print "Erro: <code>" . $i->getMessage() . "</code>";
	}

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