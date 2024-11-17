$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },

        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos, por favor preencha-os para prosseguir com a compra!`);
            }
        }
    })
})