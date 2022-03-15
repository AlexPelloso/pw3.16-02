<?php

$NOME = $_REQUEST['nome'];
$BEBIDA = $_REQUEST['bebida'];
$DATA = $_REQUEST['data'];

$aAtual = date('Y');

$aNasc = date("Y", strtotime($DATA));

$IDADE = $aAtual - $aNasc;


if(empty($NOME && $BEBIDA && $DATA)){
    $dados = array(

        "tipo" => 'error',
        "mensagem" => 'campos não definidos.'
    );

} else {

    if($IDADE >= 18){
        $dados = array(
            "mensagem" =>  'Olá ' . $NOME . ' sua bebida favorita é ' .$BEBIDA . '. <br> Sua idade é ' . $IDADE . ', portanto você é de maior e pode consumir bebida alcólica'
        );
    }else {
        $dados = array(
            "mensagem" =>  'Olá ' . $NOME . ' sua bebida favorita é ' .$BEBIDA . '. <br> Sua idade é ' . $IDADE. ', portanto você é de menor e não pode consumir bebida alcólica'
        );
    }
    
    

   
}

echo json_encode($dados);