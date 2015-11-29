

function BuscarEstabelecimento() {

    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    var data = jQuery.parseJSON(RetornaFavoritosUsuario(usu.ID_USUARIO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            var dt = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(this.ID_ESTABELECIMENTO, this.SIMBOLO, null, null));
            jQuery.each(dt, function () {
                jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
            });
        });
    }
}


function CarregaEstabelecimento(data) {


    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>"+
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>"+
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.NOME_MOEDA + "</label>" +
    "<label class='contact-text'>Compra: </label>" +
    "<label class='contact-text'>R$ " + data.TAXA_COMPRA + "</label>" +// + + data.VALOR_COTACAO + "</label>" +
     "<label class='contact-text'> " + data.DATA_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
     "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button-acquainverso'><i class='fa fa-square'></i></a>" +
     "<label class='contact-text'>Venda: </label>" +
    "<label class='contact-text'>R$ " + data.TAXA_VENDA + "</label>" +
    //"<label class='contact-text'>Km " + km + "</label>" +
    "</div>" +
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

    var id = obj.id.split("_");
    var ID_ESTABELECIMENTO = id[0];
    var SIMBOLO = id[1];

    if (jQuery(obj).html() == '<i class="fa fa-square"></i>') {
        jQuery(obj).html('<i class="fa fa-check-square"></i>');
    }
    else {
        jQuery(obj).html('<i class="fa fa-square"></i>');
    }

}


//var GeoCodeCalc = {};

//GeoCodeCalc.EarthRadiusInKilometers = 6367.0;

//GeoCodeCalc.ToRadian = function (v)
//{ return v * (Math.PI / 180); };

//GeoCodeCalc.DiffRadian = function (v1, v2)
//{
//    return GeoCodeCalc.ToRadian(v2) - GeoCodeCalc.ToRadian(v1);
//};

//GeoCodeCalc.CalcDistance = function (lat1, lng1, lat2, lng2, radius) {
//    return radius * 2 * Math.asin(Math.min(1, Math.sqrt((Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(GeoCodeCalc.ToRadian(lat1)) * Math.cos(GeoCodeCalc.ToRadian(lat2)) * Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lng1, lng2)) / 2.0), 2.0)))));
//};

// Calculate distance in Kilometersvar 

jQuery(document).ready(function () {

    BuscarEstabelecimento();
});