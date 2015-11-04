

function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = sessionStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}


function AjustaTamanho()
{
    var sb = jQuery('#page_sidebar').css('height');
    jQuery('#page_content').css('min-height', sb);
}


function PreparaSistema(pagina)
{
    CarregaMenu(pagina);
    CarregaTela();
    AjustaTamanho();
}