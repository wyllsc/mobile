<?php
/**
 * Created by PhpStorm.
 * User: SantClair
 * Date: 29/03/2015
 * Time: 12:30
 */

// criação de uma instância do cliente
$client = new SoapClient(null, array(
    'location' => 'http://127.0.0.1/projects/webservice-php/servico.php5',
    'uri' => 'http://127.0.0.1/projects/webservice-php/',
    'trace' => 1));

// chamada do serviço SOAP
//$result = $client->helloWorld('Vinícius');
$result = $client->consultaBanco();

// verifica erros na execução do serviço e exibe o resultado
if (is_soap_fault($result)){
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faulstring})" , E_ERROR);
}else{
    print_r($result);
    echo $result;
}

?>