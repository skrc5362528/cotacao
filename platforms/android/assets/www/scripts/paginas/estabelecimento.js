
var data = '';
var ordem = '';
var cpo_tx_venda = 'VALOR_COTACAO';
var cpo_tx_compra = 'VALOR_COTACAO_COMPRA';
var cpo_distancia = 'DISTANCIA';
var ord_distancia = false;
var ord_tx_delivery = false;
var ord_tx_venda = false;
var flagdelivery = false;
var IOF =  jQuery.parseJSON(localStorage.getItem('SYSCONFIG'))[0].IOF;

function BuscarEstabelecimento(campo, ordena) {

    var SIMBOLO = jQuery('#SUA_MOEDA').val();
    jQuery('#DIVESTABELECIMENTO').empty();
    CarregaFiltros();
     data = jQuery.parseJSON(RetornaListaEstabelecimentoPorMoeda(SIMBOLO, null, ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {

            this.VALOR_COTACAO = calculoVenda(this.TAXA_VENDA, this.VALOR_COTACAO, IOF).toFixed(2);
            this.VALOR_COTACAO_COMPRA = calculoCompra(this.TAXA_COMPRA, this.VALOR_COTACAO_COMPRA).toFixed(2);
            this.DISTANCIA = parseFloat(calculoDistancia(this.LATITUDE, this.LONGITUDE));
        });
    }
    data = OrdenaResultados('DISTANCIA', ordena, data);
    CarregaDados(data);
    DesbloqueiaTela();
}

function Buscar(campo, ordena)
{
    if (flagdelivery == false) {
        BuscarEstabelecimento(campo, ordena);
    }
    else {
        BuscarEstabelecimentoDelivery(campo, ordena);
    }
}

function BuscarEstabelecimentoDelivery(campo, ordena) {

    var ARRAY = [];
    var SIMBOLO = jQuery('#SUA_MOEDA').val();
    jQuery('#DIVESTABELECIMENTO').empty();
    CarregaFiltros();
    data = jQuery.parseJSON(RetornaListaEstabelecimentoPorMoeda(SIMBOLO, null, ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {

            if (this.DELIVERY == 'S') {
                this.VALOR_COTACAO = calculoVenda(this.TAXA_VENDA, this.VALOR_COTACAO, IOF).toFixed(2);
                this.DISTANCIA = parseFloat(calculoDistancia(this.LATITUDE, this.LONGITUDE));
                ARRAY.push(this);
            }
           
        });
    }

    data = OrdenaResultados('DISTANCIA', ordena, ARRAY);
    CarregaDados(ARRAY);
    DesbloqueiaTela();
}

function CarregaFiltros() {
    jQuery('#DIVFILTRO').html("<div>" +
                            "<div class='one-half center-text' >" +
                            "<a data-toggle='modal' data-target='#MODALFILTROS'> <label class='contact-text' style='color:white;'> Filtrar </label> <i class='fa fa-filter' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            //"<div class='one-third center-text'>" +
                            //"<a onclick='OrdenaBusca(this,cpo_distancia,ord_distancia);' id='ordenadistancia'><label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            //"</div>" +
                            "<div class='two-half last-column center-text'>" +
                            "<a data-toggle='modal' data-target='#MODALORDENAR'><label class='contact-text' style='color:white;'> Ordernar </label><i class='fa fa-sort' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "</div>");
}

function FiltraBusca(campo, ordena) {

    data = OrdenaResultados(campo, ordena, data);
    jQuery('#DIVESTABELECIMENTO').html('');
    CarregaFiltros();
    CarregaDados(data);
}

function CarregaDados(data) {

    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }

}

//function OrdenaBusca(obj, campo, ordena) {


//    FiltraBusca(campo, ordena);

//    if (ordena == true) {
//        if (obj.id == 'ordenatxvenda') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Preço </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
//            ord_tx_venda = false;
//        }
//        if (obj.id == 'ordenadistancia') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
//            ord_distancia = false;
//        }
//        if (obj.id == 'ordenadelivery') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Delivery </label><i class='fa fa-filter' style='font-size:18px; color:white;'></i>";
//            ord_tx_delivery = false;
//            flagdelivery = false;
//        }
//    }
//    else {

//        if (obj.id == 'ordenatxvenda') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Preço </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
//            ord_tx_venda = true;
//        }
//        if (obj.id == 'ordenadistancia') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
//            ord_distancia = true;
//        }
//        if (obj.id == 'ordenadelivery') {
//            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Delivery </label><i class='fa fa-filter' style='font-size:18px; color:white;'></i>";
//            ord_tx_delivery = true;
//            flagdelivery = true;
//        }
//    }


//}

function CarregaEstabelecimento(data) {

    var dt = new Date(data.DATA_COTACAO);


    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong>" + data.NOME + "</strong> " +
    "</div>" +
    "<div>" +
    "<div class='one-half'>" +
    "Venda : R$ " + data.VALOR_COTACAO +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>" +
    "</span>" +
    "</div>" +
    "</div>" +

    "<div>" +
    "<div class='one-half'>" +
    "IOF 0,38% já incluso " +
    "</div>" +
    "<div class='two-half last-column'>" +
  "Km " + data.DISTANCIA +
    "</div>" +

   "<div class='one-half'>" +
   "Última atualização : "+
   "</div>" +
   "<div class='two-half'>" +
    dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()+" ás "+data.HORA_COTACAO+
    "</div>" +
    "</div>" +

    "<div>" +
    "<div class='static-notification-exchange' style='border-radius: 10px;' onclick='MostraReserva(this)' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' >" +
    "<p class='center-text' style='font-size:15px; color:white;'>Comprar</p>" +
    "</div>" +
    "</div>" +

    "<div>" +
    MontaInfo(data.RETIRADA, data.DELIVERY, data.RECARGA);//"<label class='contact-text'>" + data.NOME + "</label>" +
    "</div>" +
    "</div>";

    return html;

}

function MostraMapa(obj) {

 localStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

function MostraReserva(obj)
{
    localStorage.setItem('VIEWRESERVA', obj.id)
    CarregaMenu('operacao.html');
}

function estrelas(numeroestrelas) {
    html = '';
    for (var i = 0; i <= numeroestrelas; i++) {
        htm += "<i class='fa fa-star'></i>";
    }

    for (var i = 0; i <= (5 - numeroestrelas) ; i++) {
        html += "<i class='fa fa-star-o'></i>";
    }
    return html;
}

function check(obj) {

    var data = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    var id = obj.id.split("_");

    var ID_USUARIO = data.ID_USUARIO;
    var ID_ESTABELECIMENTO = id[0];
    var SIMBOLO = id[1];
    var COUNT = ValidaFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);

    if (COUNT == 0) {
        if (jQuery(obj).html() == "<i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i>") {
            jQuery(obj).html("<i class='fa fa-star' style='font-size:18px; color:#0489B1;></i>");
            InsereFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
        }
        else {
            jQuery(obj).html("<i class='fa fa-star' style='font-size:18px; color:#0489B1;'></i>");
            ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
        }
    }
    else {
        ExibeMensagem("Moeda e corretora já cadastrados em seus favoritos !")
    }
}

function MontaSelect(OBJETO, SIMBOLO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + SIMBOLO + '>' + NOME + '</option>');
}

function PreencheSelectSuaMoeda() {

    jQuery('#SUA_MOEDA').append('<option value="" selected> Que moeda você procura? </option>');
    var data = jQuery.parseJSON(RetornaListaMoedasUtilizadas())
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('SUA_MOEDA', this.SIMBOLO, this.NOME_MOEDA);
        });
    }

}

function MontaInfo(RETIRADA, DELIVERY, RECARGA)
{
    var ret='';
    if (RETIRADA == 'S')
    {
        ret += '<a class="base-text one-third"><i class="fa fa-university"></i> Retirada </a>';
    }
    if (DELIVERY == 'S')
    {
        ret += '<a class="base-text one-third"><i class="fa fa-motorcycle"></i> Delivery </a>'; //'Delivery';
    }
    if (RECARGA == 'S')
    {
        ret += '<a class="base-text one-third last-column"><i class="fa fa-credit-card"></i> Recarga </a>'//'Recarga'; 
    }
    ret += "";
    return ret;
}

jQuery(document).ready(function () {
    PreencheSelectSuaMoeda();
    EqualizaTamanhoTela();
  //  jQuery(document).ajaxStart(ExibeMensagem("Carregando...")).ajaxStop(DesbloqueiaTela());
});

jQuery('#myModal').on('hidden.bs.modal', function (e) {
    
    //colocar aqui a busca a ser realizada com os filtros 

})