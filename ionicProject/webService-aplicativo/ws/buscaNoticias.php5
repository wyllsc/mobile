<?php
header ("Access-Control-Allow-Origin: *");
header ("Content-Type: text/html; charset=utf-8");


$client = new SoapClient(null, array(
    'location' => 'http://innovar.besaba.com/ws/gjcc/servico.php5',
    'uri' => 'http://innovar.besaba.com/ws/gjcc/'));



$result = $client->buscaNoticias();
$final_res = $result;



if (is_soap_fault($result)){
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faulstring})" , E_ERROR);
}else{
    print_r($final_res);
}

?>