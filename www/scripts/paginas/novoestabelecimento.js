
function GravaUsuario() {
    var res = ValidaEntrada();
    var usu = '';
    if (res == '') {
        var NOME = jQuery('#NOME').val();
        var LOGIN = jQuery('#LOGIN').val();
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();

        var val = jQuery.parseJSON(ValidaUsuario(EMAIL, null, null));
        if (val == null) {
            usu = jQuery.parseJSON(InsereUsuario(EMAIL, NOME, SENHA, 3 , EMAIL, null, ERROCONEXAO));
        }
        if (usu != '') {
            return usu;
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


function Grava() {

        var usu =  GravaUsuario();

        var NOME =          jQuery('#NOME').val();
        var FONE =          jQuery('#FONE').val();
        var RAZAO_SOCIAL =  jQuery('#RAZAO_SOCIAL').val();
        var UF =            jQuery('#UF').val();
        var BAIRRO =        jQuery('#BAIRRO').val();
        var CEP =           jQuery('#CEP').val();
        var CIDADE =        jQuery('#CIDADE').val();
        var CNPJ =          jQuery('#CNPJ').val();
        var EMAIL =         jQuery('#EMAIL').val();
        var ENDERECO =      jQuery('#ENDERECO').val();
        var NUMERO =        jQuery('#NUMERO').val();
        var COMPLEMENTO = jQuery('#COMPLEMENTO').val();
        var USUARIO = usu.ID_USUARIO;

    if(NOME != "" || FONE != ""){
        var resp = jQuery.parseJSON(InsereEstabelecimento(NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, USUARIO, ERROCONEXAO));
        if (resp.ID_ESTABELECIMENTO != '')
        {
            localStorage.setItem("ESTABELECIMENTO", JSON.stringify(resp));
            alert("Estabelecimnento incluído com sucesso!");
        }
    }
    else {
        alert("Campos todos os campos são obrigatórios");
    }
}

jQuery(document).ready(function myfunction() {

    EqualizaTamanhoTela();
});