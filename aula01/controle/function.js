$(document).ready(function(){

    $('.btn-send').click(function(e){
        e.preventDefault()

        let dados = $('#form').serialize()

        console.log(dados)
    });
}); 