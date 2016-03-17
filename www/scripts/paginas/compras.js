var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
var data = '';
var ordem = '';


function BuscarEstabelecimento() {
 //   BloqueiaTela("Carregando...");
    var html = '';    
    data = jQuery.parseJSON(RetornaOperacaoPorUsuario(ID_USUARIO,0,0,null,ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
            html+= CarregaDivOperacao(this);
        });
    }
    jQuery('#DIVHISTORICO').html(html);
    //DesbloqueiaTela();
}

function CarregaDivOperacao(data) {


    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>Cod.Venda: " + data.COD_VENDA + "</label></strong> " +
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>" +
    //"<div class='one-half'>" +
    "<label class='contact-text'>Data:" + data.DATA_VENDA + "</label>" +
    "<label class='contact-text'>Moeda:" + data.SIMBOLO + "</label>" +
    "<label class='contact-text'>Cotação:R$ " + parseFloat(data.VALOR_PRODUTO).toFixed(2) + " </label>" +
    "<label class='contact-text'>Requerido:("+data.SIMBOLO+")" + parseFloat(data.QUANTIDADE).toFixed(2) + " </label>" +
    "<label class='contact-text'>total:R$ " + parseFloat((data.QUANTIDADE * data.VALOR_PRODUTO)).toFixed(2)+ " </label>" +
    "<div>" +
    "<strong><label class='contact-text'>Status:" + data.DESCRICAO + "</label></strong> " +
    "</div>" +
    "<div class='one-half'>" +
    "<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
      "</div>" +
   "<div class='two-half last-column'>" +
       "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "_' class='button button-white'><i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i></a>" +
    "</div>" +
        MontaConfirmaDeposito(data.ID_STATUS_VENDA, data.COD_VENDA) +
    "</div>";

    return  html;

}

jQuery(document).ready(function () {
    EqualizaTamanhoTela();
    BuscarEstabelecimento();
});

function MostraMapa(obj) {
    localStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

function MontaConfirmaDeposito(ID_STATUS_VENDA, COD_VENDA)
{
    var html = '';
    if (ID_STATUS_VENDA == '5') {
       html = "<div class='static-notification-exchange' style='border-radius: 10px;' onclick='ConfirmaDeposito(this)' id='" + COD_VENDA + "' >" +
                  "<p class='center-text' style='font-size:15px; color:white;'>Confirmar Deposito</p>" +
                  "</div>";
    }
    return  html;
}

function ConfirmaDeposito(COD_VENDA) {
    localStorage.setItem('VIEWCODVENDA', COD_VENDA.id)
    CarregaMenu('deposito.html');
}

function CarregaDados(data) {

    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }

}


function check(obj) {
    //alert(ID_USUARIO);
    //var data = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    var id = obj.id.split("_");

    //var ID_USUARIO = data.ID_USUARIO;
    var ID_ESTABELECIMENTO = id[0];
    var SIMBOLO = id[1];
    var COUNT = ValidaFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
    //alert(COUNT);
    if (COUNT == '0') {
        jQuery(obj).html("<i class='fa fa-star' style='font-size:18px; color:#0489B1;'></i>");
        InsereFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
    }
    else {
        jQuery(obj).html("<i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i>");
        ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
    }
    //}
    //else {
    //    ExibeMensagem("Moeda e corretora já cadastrados em seus favoritos !")
    //}
}
