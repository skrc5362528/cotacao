
var data = '';
var ordem = '';
var cpo_tx_venda = 'TAXA_VENDA';
var cpo_tx_compra = 'TAXA_COMPRA';
var cpo_nome = 'NOME';
var ord_nome = false;
var ord_tx_venda = false;
var ord_tx_compra = false;

function BuscarEstabelecimento(campo, ordena) {
    BloqueiaTela("Carregando...");
    var SIMBOLO = jQuery('#SUA_MOEDA').val();
    jQuery('#DIVESTABELECIMENTO').html('');
    CarregaFiltros();
    data = OrdenaResultados('NOME', ordena, jQuery.parseJSON(RetornaListaEstabelecimentoPorMoeda(SIMBOLO, null, ERROCONEXAO)));
    CarregaDados(data);
    DesbloqueiaTela();
}

function CarregaFiltros() {
    jQuery('#DIVESTABELECIMENTO').append("<p><div>" +
                            "<div class='one-third center-text'>" +
                            "<a onclick='OrdenaBusca(this,cpo_tx_venda,ord_tx_venda);' id='ordenatxvenda'> <label class='contact-text' style='color:white;'> Venda </label> <i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "<div class='one-third center-text'>" +
                            "<a onclick='OrdenaBusca(this,cpo_tx_compra,ord_tx_compra);' id='ordenatxcompra'><label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "<div class='one-third last-column center-text'>" +
                            "<a onclick='OrdenaBusca(this,cpo_nome,ord_nome);' id='ordenanome'><label class='contact-text' style='color:white;'> Nome </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "</div></p>");
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

function OrdenaBusca(obj, campo, ordena) {

    FiltraBusca(campo, ordena);

    if (ordena == true) {
        if (obj.id == 'ordenatxvenda') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Venda </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            ord_tx_venda = false;

        }
        if (obj.id == 'ordenatxcompra') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            ord_tx_compra = false;
        }
        if (obj.id == 'ordenanome') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Nome </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            ord_nome = false;
        }
    }
    else {

        if (obj.id == 'ordenatxvenda') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Venda </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            ord_tx_venda = true;

        }
        if (obj.id == 'ordenatxcompra') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            ord_tx_compra = true;
        }
        if (obj.id == 'ordenanome') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Nome </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            ord_nome = true;
        }
    }


}

function OrdenaResultados(prop, asc, obj) {
    obj = obj.sort(function (a, b) {
        if (asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    });

    return obj;
}

function calculoDistancia(latPara, longPara) {

    var lat = localStorage.getItem('latitude');
    var long = localStorage.getItem('longitude');

    var km = d = GeoCodeCalc.CalcDistance(lat, long, latPara, longPara, GeoCodeCalc.EarthRadiusInKilometers);
    return (km).toString().substring(0, 4);
}

function calculoCompra(TAXA_COMPRA, VALOR_COTACAO) {
    return TAXA_COMPRA;
}

function calculoVenda(TAXA_VENDA, VALOR_COTACAO_VENDA) {
    return TAXA_VENDA;
}

function CarregaEstabelecimento(data) {

    var km = calculoDistancia(data.LATITUDE, data.LONGITUDE);
    var compra = calculoCompra(data.TAXA_COMPRA, data.VALOR_COTACAO);
    var venda = calculoVenda(data.TAXA_VENDA, data.VALOR_COTACAO_VENDA)

    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>" +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>Compra: </label>" +
    "<label class='contact-text'>R$ " + compra + "</label>" +// + + data.VALOR_COTACAO + "</label>" +
     //"<label class='contact-text'> " + venda + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>" +
    "</span>" +
     "<label class='contact-text'>Venda: </label>" +
    "<label class='contact-text'>R$ " + data.TAXA_VENDA + "</label>" +
    "<label class='contact-text'>Km " + km + "</label>" +
    "</div>" +
      "<div class='one-half'>" +
      "<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
      "</div>" +
     "<div class='two-half last-column'>" +
       "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i></a>" +
    "</div>" +
    "</div>";

    return html;

}

function MostraMapa(obj) {

 sessionStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
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

var GeoCodeCalc = {};

GeoCodeCalc.EarthRadiusInKilometers = 6367.0;

GeoCodeCalc.ToRadian = function (v)
{ return v * (Math.PI / 180); };

GeoCodeCalc.DiffRadian = function (v1, v2) {
    return GeoCodeCalc.ToRadian(v2) - GeoCodeCalc.ToRadian(v1);
};

GeoCodeCalc.CalcDistance = function (lat1, lng1, lat2, lng2, radius) {
    return radius * 2 * Math.asin(Math.min(1, Math.sqrt((Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(GeoCodeCalc.ToRadian(lat1)) * Math.cos(GeoCodeCalc.ToRadian(lat2)) * Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lng1, lng2)) / 2.0), 2.0)))));
};



jQuery(document).ready(function () {
    PreencheSelectSuaMoeda();
    EqualizaTamanhoTela();
});

