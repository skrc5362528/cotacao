
function GravaUsuario() {
    var res = ValidaEntrada();
    if (res == '') {
        var NOME = jQuery('#NOME').val();
        var LOGIN = jQuery('#LOGIN').val();
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();

        var val = jQuery.parseJSON(ValidaUsuario(EMAIL, null, null));
        if (val == null) {
            var usu = InsereUsuario(EMAIL, NOME, SENHA, 1, EMAIL, null, null)
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

function ExibeMensagem(texto) {

    navigator.notification.alert(
    texto,                  // message
    alertDismissed,         // callback
    'Alerta',            // title
    'Ok'                  // buttonName
);

    //jQuery('#mensagem').css('display', 'block');
    //jQuery('#txtmsg').text(texto);
    //navigator.notifivation.alert("texto");
}


function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", JSON.stringify(data));
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

    PreencheSelectSuaMoeda();

});