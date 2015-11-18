

function CarregaLogin() {



        var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
        if (usu != null) {
            jQuery('#EMAIL').val(usu.EMAIL);
            jQuery('#SENHA').val(usu.SENHA);
        }

 

}



function BuscaLogin() {

    if (jQuery('#EMAIL').val() != '' && jQuery('#SENHA').val() != '') {
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();
        var usu = jQuery.parseJSON(Login(EMAIL, SENHA, null, null));
        if (usu != null) {
            CarregaUSUARIO(usu);
            window.location.assign("index.html");
        }
        else {
            ExibeMensagem("Usuário ou senha inválidos");
        }
    }

  //  window.location.assign("index.html");

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

//function ExibeMensagem(texto) {
//    jQuery('#mensagem').css('display', 'block');
//    jQuery('#txtmsg').text(texto);
//}


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