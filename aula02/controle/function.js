$(document).ready(function(){
    $('.btn-send').click(function(e){
        e.preventDefault()

        let dados = $('#form').serialize()

        $('#retorno').empty()

        $.ajax({
            Type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: '../modelo/retorno.php',
            success: function(dados){
        
                $('#retorno').append(`
                <div class="alert-primary">
                    <h1 class="text-white text-center">
                        ${dados.mensagem}
                    </h1>
                    
                </div>
            `)
            }
        })
        
    })
})