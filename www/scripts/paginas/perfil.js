
function GravaUsuario() {
    var res = ValidaEntrada();
    if (res == '') {
        var ID_TP_USUARIO = 1;
        var NOME = jQuery('#NOME').val();
        var LOGIN = jQuery('#LOGIN').val();
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();
        var DATA_CADASTRO = new Date().getDate + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        var ATIVO = true;
        var val = jQuery.parseJSON(ValidaUsuario(EMAIL));

        if (val == null) {
            var usu = InsereUsuario(LOGIN, NOME, SENHA, ID_TP_USUARIO, DATA_CADASTRO, EMAIL, ATIVO, successFunc, ERROCONEXAO);
        }
        //var usu = InsereUsuario(SENHA, NOME, LOGIN, EMAIL, null, null)

        if (usu != null) {
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

    var res = 'Teste de valores';
    if (jQuery('#NOME').val() == '') {
        res = 'NOME OBRIGATÓRIO';
    }
    if (jQuery('#LOGIN').val() == '') {
        res = 'LOGIN OBRIGATÓRIO';
    }
    if (jQuery('#EMAIL').val() == '') {
        res = 'EMAIL OBRIGATÓRIO';
    }
    if (jQuery('#SENHA').val() == '') {
        res = 'SENHA OBRIGATÓRIO';
    }
    if (jQuery('#CONFIRMA_SENHA').val() == '') {
        res = 'CONFIRMAÇÃO OBRIGATÓRIA';
    }
    if (jQuery('#CONFIRMA_SENHA').val() != jQuery('#SENHA').val()) {
        res = 'SENHA DIFERENTE DA CONFIRMAÇÃO';
    }
    return res;
}

function Voltar() {
    window.location.assign("login.html")
}


function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", data);
    }
}

function PreencheSelectSuaMoeda() {
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#SUA_MOEDA').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
    jQuery('#SUA_MOEDA').append('<option value="" selected>Selecione uma moeda</option>');
}

jQuery(document).ready(function () {

    CarregaPerfil();
    //PreencheSelectSuaMoeda();

});

function CarregaPerfil() {

    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));

    jQuery('#NOME').val(usu.NOME);
    //jQuery('#LOGIN').val(usu.LOGIN);
    jQuery('#EMAIL').val(usu.EMAIL);
    jQuery('#SENHA').val(usu.SENHA);
    jQuery('#CONFIRMA_SENHA').val(usu.CONFIRMA_SENHA);
    jQuery('#DATA_CADASTRO').val(usu.DATA_CADASTRO);

    return usu;
}