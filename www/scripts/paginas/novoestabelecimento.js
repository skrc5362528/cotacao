
var APP_KEY = 'YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC';
var POST = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=Alcides+Lima+103,freguesia,rio+de+janeiro,RJ&callback=retornoGeocode';


function retornoGeocode(response) {
    var location = response.results[0].locations[0];
    jQuery('#LATITUDE').val(location.latLng.lat);
    jQuery('#LONGITUDE').val(location.latLng.lng);
}

function RecuperaGeolocalizacao() {
    var script = document.createElement('script');
    script.type = 'text/javascript';

    var BAIRRO = jQuery('#BAIRRO').val();
    var CIDADE = jQuery('#CIDADE').val();
    var ENDERECO = jQuery('#ENDERECO').val();
    var UF = jQuery('#UF').val();
    var URL = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=' + ENDERECO + ',' + BAIRRO + ',' + CIDADE + ',' + UF + '&callback=retornoGeocode';

    script.src = URL;
    document.body.appendChild(script);

}


function PreencheSelectMoeda() {
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#MOEDAS_TRABALHADAS').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
    jQuery('#MOEDAS_TRABALHADAS').append('<option value="" selected>Qual a sua moeda?</option>');
}

function Grava() {

    


    var NOME = jQuery('#NOME').val();
    var FONE = jQuery('#FONE').val();
    var LATITUDE = jQuery('#LATITUDE').val();
    var LONGITUDE = jQuery('#LONGITUDE').val();
    var RAZAO_SOCIAL = jQuery('#RAZAO_SOCIAL').val();
    var UF = jQuery('#UF').val();
    var BAIRRO = jQuery('#BAIRRO').val();
    var CEP = jQuery('#CEP').val();
    var CIDADE = jQuery('#CIDADE').val();
    var CNPJ = jQuery('#CNPJ').val();
    var EMAIL = jQuery('#EMAIL').val();
    var ENDERECO = jQuery('#ENDERECO').val();
    var resp = jQuery.parseJSON(InsereEstabelecimento(NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, null, null));

    if (resp.ID_ESTABELECIMENTO != null) {
        sessionStorage.setItem("ESTABELECIMENTO", JSON.stringify(resp));
        //jQuery('#MOEDAS_TRABALHADAS').show();
        //PreencheSelectMoeda();
    }
}

jQuery(document).ready(function () {
    jQuery('#MOEDAS_TRABALHADAS').hide();
    PreencheSelectMoeda();
});


function Voltar() {

    CarregaMenu('mapa.html');

}
