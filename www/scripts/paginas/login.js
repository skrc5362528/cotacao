
function BuscaLogin() {

    //if (jQuery('#EMAIL').val() != '' && jQuery('#SENHA').val() != '') {
    //    var NOME_USUARIO = jQuery('#EMAIL').val();
    //    var SENHA = jQuery('#SENHA').val();
    //    var usu = Login(NOME_USUARIO, SENHA, null, null);
    //    if (usu.ID_USUARIO != '') {
    //        CarregaUSUARIO(usu);
    //        window.location.assign("master.html");
    //    }
    //    else {
    //        ExibeMensagem("Usuário ou senha inválidos");
    //    }
    //}

    window.location.assign("index.html");

}

function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", JSON.stringify(data));
    }
}

function OnLoad() {
    var u = 'vitor'; //jQuery('#username').val();
    var p = '1234';//jQuery('#password').val();
    jQuery('#NOME_USUARIO').val(u);
    jQuery('#SENHA').val(p);
}

function Registrar() {
    window.location.assign("registro.html")
}

function ExibeMensagem(texto) {
    jQuery('#mensagem').css('display', 'block');
    jQuery('#txtmsg').text(texto);
}