

function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = sessionStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}


function PreparaSistema(pagina)
{
    CarregaMenu(pagina);
    CarregaTela();
}