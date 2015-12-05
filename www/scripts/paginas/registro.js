
function GravaUsuario() {
    var res = ValidaEntrada();
    if (res == '') {
        var NOME = jQuery('#NOME').val();
        var LOGIN = jQuery('#LOGIN').val();
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();

        var val = jQuery.parseJSON(ValidaUsuario(EMAIL, null, null));
        if (val == null) {
            InsereUsuario(EMAIL, NOME, SENHA, 1, EMAIL, null, ERROCONEXAO);
        }
        if (usu != '') {
            CarregaUSUARIO(usu);
        }
        else {
            ExibeMensagem("Erro no Resgistro do usuário");
        }
    }
    else {
        ExibeMensagem(res);
    }
}

function ValidaEntrada() {

    var res = '';
    if (jQuery('#NOME').val() == '') {
        res = 'NOME OBRIGATÓRIO';
        return res;
    }
    if (jQuery('#LOGIN').val() == '') {
        res = 'LOGIN OBRIGATÓRIO';
        return res;
    }
    if (jQuery('#EMAIL').val() == '') {
        res = 'EMAIL OBRIGATÓRIO';
        return res;
    }
    if (jQuery('#SENHA').val() == '') {
        res = 'SENHA OBRIGATÓRIO';
        return res;
    }
    if (jQuery('#CONFIRMA_SENHA').val() == '') {
        res = 'CONFIRMAÇÃO OBRIGATÓRIA';
        return res;
    }
    if (jQuery('#CONFIRMA_SENHA').val() != jQuery('#SENHA').val()) {
        res = 'SENHA DIFERENTE DA CONFIRMAÇÃO';
        return res;
    }
    return res;
}

function Voltar() {
    window.location.assign("index.html")
}


function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", JSON.stringify(data));
    }
}
