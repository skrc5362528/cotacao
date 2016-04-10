

function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
    //jQuery('.spinner').hide();
}

function CarregaTela() {
    var usu = localStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}

function PreparaSistema(pagina) {
    CarregaMenu(pagina);
   // CarregaTela();
   // MenuAdmin();
}

function MenuAdmin() {

    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));


    jQuery("#ESTABELECIMENTO").hide();
    jQuery("#ADMINAREA").hide();


    if (usu.ID_TP_USUARIO == '2') {
        jQuery("#ADMINAREA").show();
    }

    if (usu.ID_TP_USUARIO == '3') {
        jQuery("#ESTABELECIMENTO").show();
    }
   
}
