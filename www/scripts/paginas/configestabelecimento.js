

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

    var data = jQuery.parseJSON(sessionStorage.getItem('ESTABELECIMENTO'));

    var URL = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=' + data.ENDERECO + ',' + data.BAIRRO + ',' + data.CIDADE + ',' + data.UF + '&callback=retornoGeocode';

    script.src = URL;
    document.body.appendChild(script);

}

function PreencheSelect() {
    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#ESTABELECIMENTO').append('<option value=' + this.ID_ESTABELECIMENTO + '>' + this.NOME + '</option>');
        });
    }
    jQuery('#ESTABELECIMENTO').append('<option value="" selected>Selecione o estabelecimento</option>');
}

jQuery(document).ready(function () {
    jQuery('#ESTABELECIMENTO').show();
    PreencheSelect();
});


function RetornaEstabelecimento() {
   var ID_ESTABELECIMENTO = jQuery('#ESTABELECIMENTO').val();
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaTela(this);
        });
    }
}

function MontaTela(data) {
    //jQuery('#NOME').val(data.NOME);
    jQuery('#RAZAO_SOCIAL').val(data.RAZAO_SOCIAL);
    jQuery('#EMAIL').val(data.EMAIL);
    jQuery('#FONE').val(data.FONE);
    jQuery('#CNPJ').val(data.CNPJ);

    sessionStorage.setItem("ESTABELECIMENTO",JSON.stringify(data));
}


function Grava() {
    var LATITUDE = jQuery('#LATITUDE').val();
    var LONGITUDE = jQuery('#LONGITUDE').val();
    var data = jQuery.parseJSON(sessionStorage.getItem('ESTABELECIMENTO'));

    AlteraEstabelecimento(data.ID_ESTABELECIMENTO, data.NOME, data.FONE, LATITUDE, LONGITUDE, data.RAZAO_SOCIAL, data.UF, data.BAIRRO, data.CEP, data.CIDADE, data.CNPJ, data.EMAIL, data.ENDERECO, null, null) ;
}