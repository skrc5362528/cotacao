function BuscarEstabelecimento(ID_MOEDA) {
    var dt = new Date();
    var DIA = dt.getDate();
    var MES = (dt.getMonth() + 1);
    var ANO = dt.getFullYear();

    var data = jQuery.parseJSON(RetornaListaEstabelecimentoEcotacao(ID_MOEDA, DIA, MES, ANO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }
}


function CarregaEstabelecimento(data) {
    //var html = "<div class='static-notification'>" +
    //            "<div class='toggle-1'>" +
    //            "<div class='tab-content tab-content-1'>" +
    //            "<div class='one-half-responsive'>" +
    //            "<div class='static-notification'>  " +
    //            " <strong id='NOME_ESTABELECIMENTO'>" + data.NOME_ESTABELECIMENTO + "</strong><br>" +
    //            "<a href='#' class='contact-text'><i class='fa fa-phone'></i>Phone: " + data.NOME_ESTABELECIMENTO + "" +
    //            "<a href='#' class='contact-text'><i class='fa fa-comments'></i>Message: +" + data.NOME_ESTABELECIMENTO + "</a>" +
    //            "<a href='#' class='contact-text'><i class='fa fa-envelope'></i>Email: " + data.NOME_ESTABELECIMENTO + "</a>" +
    //            "<a href='#' class='contact-text'><i class='fa fa-facebook'></i>Fanpage:" + data.NOME_ESTABELECIMENTO + "</a>" +
    //            "<a href='#' class='contact-text'><i class='fa fa-twitter'></i>Twitter:" + data.NOME_ESTABELECIMENTO + "</a>" +
    //            "<div id='DIVCOTACAO'>" +
    //            "<div href='#' class='contact-text'>Moeda:</div>" +
    //            "<label class='contact-text' id='LBLMOEDA' >" + data.NOME_MOEDA + "</label>" +
    //            "<div href='#' class='contact-text'>Cotação :</div>" +
    //            "<label class='contact-text' id='LBLVALOR'>R$ " + data.VALOR_COTACAO + "</label>" +
    //            "</div>" +
    //            "<a class='button button-red' id='" + data.ID_ESTABELECIMENTO + "' onclick='check(this);'><i class='fa fa-square'></i></a>" +
    //            "</div>" +
    //            "</div>" +
    //            "</div>" +
    //            "</div>" +
    //            "</div>" +
    //            "<br />";
    //return html;


    var html = "<div class='big-notification static-notification-white'>" +
    "<strong><label class='busca-text'>" + data.NOME_ESTABELECIMENTO + "</label></strong> " +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>R$: " + data.VALOR_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<span class='span-stars'>" +
    estrelas(numeroestrelas); +
    "</span>" +
    "<label class='contact-text'>0.6 km</label>" +
    "</div>" +
     "<a class='button button-red' id='" + data.ID_ESTABELECIMENTO + "' value='ver localizacao' onclick='check(this);'><i class='fa fa-square'></i></a>" +
    "</div>";
    return html;
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

    var id = obj.id;

    if (jQuery(obj).html() == '<i class="fa fa-square"></i>') {
        jQuery(obj).html('<i class="fa fa-check-square"></i>');
        jQuery(obj).removeClass('button button-red');
        jQuery(obj).addClass('button button-green');
    }
    else {
        jQuery(obj).html('<i class="fa fa-square"></i>')
        jQuery(obj).removeClass('button button-green');
        jQuery(obj).addClass('button button-red');
    }

}

function PreencheSelect() {
    var data = jQuery.parseJSON(ListaMoeda(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect(this.CODIGO, this.NOME);
        });
        jQuery('#MOEDA').append('<option value="" selected>Selecione uma moeda</option>');
    }
}

function MontaSelect(CODIGO, NOME) {
    jQuery('#MOEDA').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}

jQuery(document).ready(function () {

    PreencheSelectSuaMoeda();
    PreencheSelectMoedaProcura();
    PreencheTransacaoProcura();

});


function PreencheSelectSuaMoeda() {
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#SUA_MOEDA').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
    jQuery('#SUA_MOEDA').append('<option value="" selected>Qual a sua moeda?</option>');
}

function PreencheSelectMoedaProcura() {
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#MOEDA_PROCURA').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
    jQuery('#MOEDA_PROCURA').append('<option value="" selected>Que moeda você procura?</option>');

}

function PreencheTransacaoProcura() {
    var data = TRANSACAO;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#TRANSACAO').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
    jQuery('#TRANSACAO').append('<option value="" selected>O que você quer fazer?</option>');

}