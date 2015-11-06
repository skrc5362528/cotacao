
function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = sessionStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}

function PreparaSistema(pagina) {
    CarregaMenu(pagina);
    CarregaTela();
}




/*
    function Login() {

        if (jQuery('#NOME_USUARIO').val() != '' && jQuery('#SENHA').val() != '') {

            if (BuscaLogin()) {
                window.location.assign("master.html")
            }
        }
        else {
            alert("Usuário ou senha Inválidos")
        }
    }

    function BuscaLogin() {

        var ret = true;
        var usuario = jQuery('#NOME_USUARIO').val();
        var senha = jQuery('#SENHA').val();
        var url = 'http://www.visional.com.br/wsconsulta/wsUsuario.asmx/Login?email=' + usuario + '&password=' + senha + '';

        jQuery.ajax({
            url: url,
            //data: {format: 'json'},
            async: false,
            type: 'GET',
            dataType: 'xml',
            success: function (xml) {
                CarregaEUsuario(xml);

            },
            error: function () {
                alert("ERRO");
                ret = false;
            }
        });

        return ret;
    }

    function CarregaEUsuario(xml) {

        jQuery(xml).find('usuario').each(function () {

            var Usuario = jQuery(this).find('usuario1').text();
            var Email = jQuery(this).find('email').text();
            var Idtipousuario = jQuery(this).find('idtipousuario').text();
            var Idusuario = jQuery(this).find('idusuario').text();
            var StatusIdstatus = jQuery(this).find('status_idstatus').text();

            sessionStorage.setItem("Usuario", Usuario);
            sessionStorage.setItem("Email", Email);
            sessionStorage.setItem("Idtipousuario", Idtipousuario);
            sessionStorage.setItem("Idusuario", Idusuario);
            sessionStorage.setItem("StatusIdstatus", StatusIdstatus);
        });
    }


    function OnLoad() {
        var u = 'donziliafc@gmail.com'; //jQuery('#username').val();
        var p = 'lara2308';//jQuery('#password').val();
        jQuery('#NOME_USUARIO').val(u);
        jQuery('#SENHA').val(p);
    }

    function Registrar() {

    }
    
    */