
var data = '';
var ordem = '';
var cpo_tx_venda = 'TAXA_VENDA';
var cpo_tx_compra = 'TAXA_COMPRA';
var cpo_nome = 'NOME';
var ord_nome = false;
var ord_tx_venda = false;
var ord_tx_compra = false;

function BuscarEstabelecimento(campo,ordena) {
    BloqueiaTela("Carregando...");
    var SIMBOLO = jQuery('#SUA_MOEDA').val();
    jQuery('#DIVESTABELECIMENTO').html('');
    
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
    data = OrdenaResultados('NOME', ordena , jQuery.parseJSON(RetornaListaEstabelecimentoPorMoeda(SIMBOLO, null, null)));

    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }

    DesbloqueiaTela();
}

function OrdenaBusca(obj,campo,ordena) {

    BuscarEstabelecimento(campo, ordena);

    if (ordena == true)
    {
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

function calculo(latPara, longPara) {

    var lat = localStorage.getItem('latitude');
    var long = localStorage.getItem('longitude');

    var km = d = GeoCodeCalc.CalcDistance(lat, long, latPara, longPara, GeoCodeCalc.EarthRadiusInKilometers);
    return (km).toString().substring(0, 4);
}

function CarregaEstabelecimento(data) {

    var km = calculo(data.LATITUDE, data.LONGITUDE);

    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>" +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>Compra: </label>" +
    "<label class='contact-text'>R$ " + data.TAXA_COMPRA + "</label>" +// + + data.VALOR_COTACAO + "</label>" +
     "<label class='contact-text'> " + data.DATA_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
     "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button-acquainverso'><i class='fa fa-square'></i></a>" +
    //"<span class='span-stars'>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star-o'></i>" +
    //"</span>" +
     "<label class='contact-text'>Venda: </label>" +
    "<label class='contact-text'>R$ " + data.TAXA_VENDA + "</label>" +
    "<label class='contact-text'>Km " + km + "</label>" +
    "</div>" +
     "<div class='two-half last-column'>" +
    "</div>" +
    "</div>";

    return html;


}

function carregadetalhes(ID_ESTABELECIMENTO) {

    var html = "</br><div class='one-half'><div class='big-notification static-notification-white'>" +
                             "<h4 class='uppercase'>Notification Title</h4>" +
                             "<iframe id='FRMCONTATO' src='pg_contato.html?ID_ESTABELECIMENTO=" + ID_ESTABELECIMENTO + "' class='' height='260'  weight='200' frameBorder='0'></iframe>"
    "</div>" +
    "</div>";
    jQuery('#' + ID_ESTABELECIMENTO + '').append(html);
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
    var COUNT = ValidaFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, null);

    if (COUNT == 0) {
        if (jQuery(obj).html() == '<i class="fa fa-square"></i>') {
            jQuery(obj).html('<i class="fa fa-check-square"></i>');
            InsereFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, null);
        }
        else {
            jQuery(obj).html('<i class="fa fa-square"></i>');
            ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, null);
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

function PreencheSelectMoedaProcura() {
    jQuery('#MOEDA_PROCURA').append('<option value="" selected> Que moeda você procura? </option>');
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('MOEDA_PROCURA', this.SIMBOLO, this.NOME_MOEDA);
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

// Calculate distance in Kilometersvar 

jQuery(document).ready(function () {

    PreencheSelectSuaMoeda();
});