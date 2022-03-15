<?php

$nome = $_REQUEST['nome'];
$bebida = $_REQUEST['bebida'];
$data = $_REQUEST['data'];

$anoAtual = date('Y');

$anoNasc = date("Y", strtotime($data));

$idade = $anoAtual - $anoNasc;


if(empty($nome && $bebida && $data)){
    $dados = array(

        "tipo" => 'error',
        "mensagem" => 'A campos que precisam ser completados.'
    );

} else {

    if($idade >= 18){
        $dados = array(
            "mensagem" =>  'Olá ' . $nome . ' sua bebida favorita é ' .$bebida . '. <br> Sua idade é ' . $idade . ', portanto você é de maior e pode consumir bebida alcólica'
        );
    }else {
        $dados = array(
            "mensagem" =>  'Olá ' . $nome . ' sua bebida favorita é ' .$bebida . '. <br> Sua idade é ' . $idade. ', portanto você é de menor e não pode consumir bebida alcólica'
        );
    }
    
    

   
}

echo json_encode($dados);