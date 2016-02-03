
function GravaUsuario() {
    var res = ValidaEntrada();
    var usu = '';
    if (res == '') {
        var NOME = jQuery('#NOME').val();
        var LOGIN = jQuery('#LOGIN').val();
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();

        var val = jQuery.parseJSON(ValidaUsuario(EMAIL, null, null));
        if (val != null) {
            ExibeMensagem("E-mail já cadastrado");

        }
        else {
            usu = InsereUsuario(EMAIL, NOME, SENHA, 1, EMAIL, null, ERROCONEXAO);
            if (usu == '') {
                ExibeMensagem("Erro no Resgistro do usuário");
            }
        }

    }
    else {
        ExibeMensagem(res);
    }
}

function ValidaEntrada() {

    var res = '';
    if (jQuery('#NOME').val() == '') {
        res = 'Nome obrigatório';
        return res;
    }
    if (jQuery('#LOGIN').val() == '') {
        res = 'Login obrigatório';
        return res;
    }
    if (jQuery('#EMAIL').val() == '') {
        res = 'Email obrigatório';
        return res;
    }
    if (jQuery('#SENHA').val() == '') {
        res = 'Senha obrigatória';
        return res;
    }
    if (jQuery('#CONFIRMA_SENHA').val() == '') {
        res = 'Confirmação obrigatória';
        return res;
    }
    if (jQuery('#CONFIRMA_SENHA').val() != jQuery('#SENHA').val()) {
        res = 'Senha diferente da confirmação';
        return res;
    }
    if (!IsEmail(jQuery('#EMAIL').val())) {
        res = 'Formato de email inválido';
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
