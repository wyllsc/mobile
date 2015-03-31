<?php
/**
 * Created by PhpStorm.
 * User: SantClair
 * Date: 29/03/2015
 * Time: 12:30
 */


// criação de uma instância do cliente
$client = new SoapClient(null, array(
    'location' => '/webservice/servico.php5',
    'uri' => '/webservice/',
    'trace' => 1));


//$result = $client->helloWorld('Vinícius');
$result = $client->consultaBanco(3);
$final_res = json_decode($result, true) ;


// verifica erros na execução do serviço e exibe o resultado
if (is_soap_fault($result)){
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faulstring})" , E_ERROR);
}else{
    print_r($final_res);
}

?>