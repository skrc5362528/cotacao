
function BuscarEstabelecimento(ID_MOEDA) {
    var dt = new Date();
    var DIA = dt.getDate();
    var MES = (dt.getMonth() + 1);
    var ANO = dt.getFullYear();
    jQuery('#DIVESTABELECIMENTO').html('');

    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, null));//var data = jQuery.parseJSON(RetornaListaEstabelecimentoEcotacao(ID_MOEDA, DIA, MES, ANO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }
}
function verificaPosicao() {
    var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
}

function success(pos) {
    var crd = pos.coords;

    sessionStorage.setItem('lat',crd.latitude);
    sessionStorage.setItem('long', crd.longitude);//alert(crd.longitude);
}

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
}

function calculo(latPara, longPara) {

    var km = d = GeoCodeCalc.CalcDistance(sessionStorage.getItem('lat'), sessionStorage.getItem('long'), latPara, longPara, GeoCodeCalc.EarthRadiusInKilometers);
    return (km / 1000).toString().substring(0,4);
}





function CarregaEstabelecimento(data) {


    var km = calculo(data.LATITUDE, data.LONGITUDE);

    var html =
    "<div onclic='alert('teste de escolha');' class='big-notification static-notification-white'>" +
    "<strong><label class='busca-text'>" + data.NOME + "</label></strong> " +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>R$: 10,00 </label>" +// + + data.VALOR_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>"+
    "<i class='fa fa-star'></i>"+
    "<i class='fa fa-star'></i>"+
    "<i class='fa fa-star'></i>"+
    "<i class='fa fa-star-o'></i>"+
    //estrelas(numeroestrelas); +
    "</span>" +
    "<label class='contact-text'>Km " + km + "</label>" +
    "</div>" +
     "<div class='two-half last-column'>" +
     "<a  id='" + data.ID_ESTABELECIMENTO + "' value='ver localizacao' onclick='check(this);'></a>" +
    "</div>"+
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

var GeoCodeCalc = {};
GeoCodeCalc.EarthRadiusInKilometers = 6367.0;

GeoCodeCalc.ToRadian = function (v)
{ return v * (Math.PI / 180); };

GeoCodeCalc.DiffRadian = function (v1, v2)
{
    return GeoCodeCalc.ToRadian(v2) - GeoCodeCalc.ToRadian(v1);
};

GeoCodeCalc.CalcDistance = function (lat1, lng1, lat2, lng2, radius) {
    return radius * 2 * Math.asin(Math.min(1, Math.sqrt((Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(GeoCodeCalc.ToRadian(lat1)) * Math.cos(GeoCodeCalc.ToRadian(lat2)) * Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lng1, lng2)) / 2.0), 2.0)))));
};

// Calculate distance in Kilometersvar 
