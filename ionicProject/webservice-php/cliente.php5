<?php
header ("Access-Control-Allow-Origin: *");

$client = new SoapClient(null, array(
    'location' => 'http://127.0.0.1/projects/webservice-php/webservice/servico.php5',
    'uri' => 'http://127.0.0.1/projects/webservice-php/webservice/',
    'trace' => 1));

$result = $client->consultaBanco();
$final_res = $result;

if (is_soap_fault($result)){
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faulstring})" , E_ERROR);
}else{
    print_r($final_res);
}

?>